(ns boids.core
  (:require [oops.core :refer [oget oset! ocall oapply ocall! oapply!
                               oget+ oset!+ ocall+ oapply+ ocall!+ oapply!+]]))

(enable-console-print!)

(prn "hello world!")



(defn load-pool []
  (this-as this
    (.addEventListener (oget this "el") "loaded"
                       (fn []
                         (println "Loading pool entities...")
                         (let [scene (oget this "el")]
                           (let [ent (.requestEntity (oget this "el.sceneEl.components.pool"))]
                             (println ent)
                             ;(.appendChild scene ent)
                             ))
                         ))

    (prn "Init!" (oget this "el"))
    ))

(defn tick [t td]
  (this-as this
    (.set (oget this "el.object3D.position") (* 0.001 t) 2 -5)))

(defonce boids (atom {}))

(def boid-spawner
  {:init (fn [] (this-as this
                  (println "Spawn boids")
                  (doseq [i (range 50)]
                    (let [cone (.createElement js/document "a-cone")]
                      (.setAttribute cone "scale" #js {:x 0.3 :y 0.1 :z 0.1})
                      (.setAttribute cone "rotation" #js {:x -90 :y 0 :z 0})
                      (.setAttribute cone "radius-bottom" ".2")
                      (.setAttribute cone "radius-top" "0.00001")
                      (.setAttribute cone "color" "red")
                      (.setAttribute cone "boid" "")
                      (.appendChild (oget this "el") cone)))))})


(defn update-boid [boid others dt]
  (let [[x y z] (:position boid)
        [dx dy dz] (:velocity boid)]
    (-> boid
      (assoc :position [(+ x (* dt dx)) (+ y (* dt dy)) (+ z (* dt dz))]))))

(defn vec3 [[x y z]]
  (js/THREE.Vector3. x y z))

(def boid-component
  {:init (fn [] (this-as this
                  ;(.log js/console "Init Boid" this)
                  (swap! boids assoc this {:position [(* 5 (- (rand) 0.5)) (* (rand)) (* 5 (- (rand) 1))]
                                           :velocity [(- (rand) 0.5) (- (rand) 0.5) (- (rand) 0.5)]})))


   :tick (fn [t dt] (this-as this
                      (swap! boids (fn [boids]
                                     (update boids this update-boid (vals (dissoc boids this)) (* dt 0.001))))

                      (let [boid (get @boids this)
                            [x y z] (:position boid)]
                        (.set (oget this "el.object3D.position") x y z)
                        (.setFromUnitVectors (oget this "el.object3D.quaternion") (js/THREE.Vector3. 0 1 0)(.normalize (vec3 (:velocity boid)))))))})


(defonce components (doto js/AFRAME
                      (.registerComponent "foo" #js {:tick tick})
                      (.registerComponent "boid-spawner" (clj->js boid-spawner))
                      (.registerComponent "boid" (clj->js boid-component))))
