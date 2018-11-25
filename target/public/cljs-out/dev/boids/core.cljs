(ns boids.core
  (:require [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(enable-console-print!)

(prn "hello world!")


(defn vec3 [x y z]
  (js/THREE.Vector3. x y z))


(defonce boids (atom {}))
(defonce boid-scarers (atom #{}))

(defonce flags (atom {:flock true
                      :reset false
                      :scare false}))


(def boid-spawner
  {:init (fn [] (this-as this
                  (.addEventListener js/document "keydown"
                                     (fn [e]
                                       (condp = (.-key e)
                                         "t" (swap! flags update :flock #(not %))
                                         "r" (swap! flags assoc :reset true)
                                         "c" (.setAttribute (.querySelector js/document "#main-camera") "camera" "active" "true")
                                         "1" (.setAttribute (.querySelector js/document "[boid-camera='1']") "camera" "active" "true")
                                         "p" (swap! flags assoc :scare true)
                                         nil)
                                       ))
                  (doseq [i (range 80)]
                    (let [boid (.createElement js/document "a-entity")
                          cone (.createElement js/document "a-cone")
                          sphere (.createElement js/document "a-sphere")
                          camera (.createElement js/document "a-entity")]

                      (doto camera
                        (.setAttribute "position" #js {:x 0 :y 0.5 :z -1})
                        (.setAttribute "rotation" #js {:x 0 :y 180 :z 0})
                        (.setAttribute "camera" "active: true")
                        (.setAttribute "boid-camera" (str i)))

                      (doto sphere
                        (.setAttribute "scale" #js {:x 0.05 :y 0.1 :z 0.1})
                        (.setAttribute "position" #js {:x 0 :y -0.2 :z -0.1})
                        (.setAttribute "color" "yellow"))

                      (doto cone
                        (.setAttribute "scale" #js {:x 0.6 :y 0.2 :z 0.2})
                        (.setAttribute "rotation" #js {:x 90 :y 0 :z 0})
                        (.setAttribute "radius-bottom" ".2")
                        (.setAttribute "radius-top" "0.00001")
                        (.setAttribute "color" "red")
                        (.appendChild sphere))


                      (doto boid
                        (.setAttribute "boid" "")
                        (.appendChild cone)
                        (.appendChild camera))

                      (.appendChild (oget this "el") boid)))))
   :tock (fn []
           (swap! flags assoc :reset false :scare false)
           )})

(def boid-scarer
  {:init (fn [] (this-as this
                  (swap! boid-scarers conj (oget this "el.object3D"))))})


(def TARGET-SPEED 2)
(def SPEED-MATCH-COEFFICIENT 0.8)
(def MAX-SPEED 4)
(def MAX-DISTANCE 30)

(def MIN-X -5)
(def MAX-X 5)
(def MIN-Y 1)
(def MAX-Y 5)
(def MIN-Z -5)
(def MAX-Z 0)

(defn contain-boid
  ([x v a plane-pos normal] (contain-boid x v a plane-pos normal false))
  ([x v a plane-pos normal strong?]
   (when (< (.dot normal (.sub (.clone x) plane-pos)) 0)
     (.add a (.setLength (.clone normal) (if strong? 50 2))))))

(defn update-boid [boid others dt]
  (if (:sitting boid)
    (if (:scare @flags)
      (-> boid
        (assoc :sitting false)
        (assoc :velocity (.setY (.clone (:initial-velocity boid)) (js/Math.abs (.-y (:initial-velocity boid))))))
      boid)
    (let [x (.clone (if (:reset @flags) (:initial-position boid) (:position boid)))
          v (.clone (if (:reset @flags) (:initial-velocity boid) (:velocity boid)))

          nearby (filter (fn [{bx :position}] (< (.distanceTo x bx) 1)) others)

          [average-pos average-vel] (map #(.divideScalar % (count nearby))
                                         (reduce (fn [[total-pos total-vel] {x :position v :velocity}] [(.add total-pos x)
                                                                                                        (.add total-vel v)])
                                                 [(vec3 0 0 0)
                                                  (vec3 0 0 0)] nearby))

          centering-acc (.setLength (.sub average-pos x) 0.5)

          velocity-match-acc (.setLength (.sub (.setLength average-vel TARGET-SPEED) v) SPEED-MATCH-COEFFICIENT)

          repel-acc (reduce (fn [repel-acc {bx :position}] (let [to-me (.sub (.clone x) bx)
                                                                 r (* (.length to-me) 7)]
                                                             (.setLength to-me (/ 1 (* r r)))
                                                             (.add repel-acc to-me))) (vec3 0 0 0) nearby)

          repel-acc (reduce (fn [repel-acc p] (let [to-me (.sub (.clone x) (.getWorldPosition p))
                                                    r (* (.length to-me) 1)]

                                                (.setLength to-me (/ 1 (* r r)))
                                                (.add repel-acc to-me))) repel-acc @boid-scarers)

          a (vec3 0 0 0)
          max-acc 4]


      (when (< (.length a) max-acc)
        (.add a (.clampLength repel-acc 0 (- max-acc (.length a)))))

      (when (and (:flock @flags) (> (count nearby) 0))
        (when (< (.length a) max-acc)
          (.add a (.clampLength velocity-match-acc 0 (- max-acc (.length a)))))

        (when (< (.length a) max-acc)
          (.add a (.clampLength centering-acc 0 (- max-acc (.length a))))))

      (when (< (.length a) max-acc)
        (.add a (.clampLength (vec3 0 (- (* 0.1 (.-y v))) 0) 0 (- max-acc (.length a)))))

      (contain-boid x v a (vec3 MAX-X 0 0) (vec3 -1 0 0))
      (contain-boid x v a (vec3 MIN-X 0 0) (vec3 1 0 0))
      (contain-boid x v a (vec3 0 MAX-Y 0) (vec3 0 -1 0))
      ;(contain-boid x v a (vec3 0 0 0) (vec3 0 1 0) true)
      (contain-boid x v a (vec3 0 MIN-Y 0) (vec3 0 1 0))
      (contain-boid x v a (vec3 0 0 MAX-Z) (vec3 0 0 -1))
      (contain-boid x v a (vec3 0 0 MIN-Z) (vec3 0 0 1))


      (if (and (:can-sit boid) (<= (.-y x) 0) (> (.-x x) MIN-X)(< (.-x x) MAX-X) (> (.-z x) MIN-Z) (< (.-z x) MAX-Z))
        (-> boid
          (assoc :sitting true)
          (assoc :can-sit false)
          (assoc :velocity (.projectOnPlane v (vec3 0 1 0)))
          (assoc :position (.projectOnPlane x (vec3 0 1 0)))
          (assoc :bank (vec3 0 1 0)))


        (-> boid
          (assoc :can-sit (or (:can-sit boid) (> (.-y x) 1)))
          (assoc :velocity (.clampLength (.add v (.multiplyScalar (.clone a) dt)) 0 MAX-SPEED))
          (assoc :position (.clampLength (.add x (.multiplyScalar (.clone v) dt)) 0 MAX-DISTANCE))
          (assoc :bank (.add (.multiplyScalar (.clone a) 0.05) (.multiplyScalar (:bank boid) (- 1 0.05)))))))))


(def boid-component
  {:init (fn [] (this-as this
                  ;(.log js/console "Init Boid" this)
                  (swap! boids assoc this (let [spec {:initial-position (vec3 (* 50 (- (rand) 0.5)) (* 20 (rand)) (* 50 (- (rand) 1)))
                                                      :initial-velocity (.normalize (vec3 (- (rand) 0.5) (- (rand) 0.5) (- (rand) 0.5)))}]
                                            (assoc spec
                                              :position (:initial-position spec)
                                              :velocity (:initial-velocity spec)
                                              :bank (vec3 0 0 0)
                                              :sitting false
                                              :can-sit false)))))


   :tick (fn [t dt] (this-as this
                      (swap! boids (fn [boids]
                                     (update boids this update-boid (vals (dissoc boids this)) (* dt 0.001))))

                      (let [boid (get @boids this)]
                        (.copy (oget this "el.object3D.position") (:position boid))
                        (oset! this "el.object3D.up" (.add (vec3 0 3 0) (:bank boid)))
                        (.lookAt (oget this "el.object3D") (.add (.clone (:position boid)) (:velocity boid))))))})


(defonce components (doto js/AFRAME
                      (.registerComponent "boid-spawner" (clj->js boid-spawner))
                      (.registerComponent "boid-scarer" (clj->js boid-scarer))
                      (.registerComponent "boid" (clj->js boid-component))))
