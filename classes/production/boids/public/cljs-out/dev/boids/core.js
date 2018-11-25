// Compiled by ClojureScript 1.10.339 {}
goog.provide('boids.core');
goog.require('cljs.core');
goog.require('oops.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.prn.call(null,"hello world!");
boids.core.load_pool = (function boids$core$load_pool(){
var this$ = this;
(function (){var target_obj_13181 = this$;
var _STAR_runtime_state_STAR_13183 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13181,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13182 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13181,(0),"el",true,true,false))?(target_obj_13181["el"]):null);
return next_obj_13182;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13183;
}})().addEventListener("loaded",((function (this$){
return (function (){
cljs.core.println.call(null,"Loading pool entities...");

var scene = (function (){var target_obj_13184 = this$;
var _STAR_runtime_state_STAR_13186 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13184,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13185 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13184,(0),"el",true,true,false))?(target_obj_13184["el"]):null);
return next_obj_13185;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13186;
}})();
var ent = (function (){var target_obj_13187 = this$;
var _STAR_runtime_state_STAR_13192 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13187,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13188 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13187,(0),"el",true,true,false))?(target_obj_13187["el"]):null);
var next_obj_13189 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13188,(0),"sceneEl",true,true,false))?(next_obj_13188["sceneEl"]):null);
var next_obj_13190 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13189,(0),"components",true,true,false))?(next_obj_13189["components"]):null);
var next_obj_13191 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13190,(0),"pool",true,true,false))?(next_obj_13190["pool"]):null);
return next_obj_13191;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13192;
}})().requestEntity();
return cljs.core.println.call(null,ent);
});})(this$))
);

return cljs.core.prn.call(null,"Init!",(function (){var target_obj_13193 = this$;
var _STAR_runtime_state_STAR_13195 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13193,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13194 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13193,(0),"el",true,true,false))?(target_obj_13193["el"]):null);
return next_obj_13194;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13195;
}})());
});
boids.core.tick = (function boids$core$tick(t,td){
var this$ = this;
return (function (){var target_obj_13196 = this$;
var _STAR_runtime_state_STAR_13200 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13196,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13197 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13196,(0),"el",true,true,false))?(target_obj_13196["el"]):null);
var next_obj_13198 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13197,(0),"object3D",true,true,false))?(next_obj_13197["object3D"]):null);
var next_obj_13199 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13198,(0),"position",true,true,false))?(next_obj_13198["position"]):null);
return next_obj_13199;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13200;
}})().set((0.001 * t),(2),(-5));
});
if((typeof boids !== 'undefined') && (typeof boids.core !== 'undefined') && (typeof boids.core.boids !== 'undefined')){
} else {
boids.core.boids = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
boids.core.boid_spawner = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (){
var this$ = this;
cljs.core.println.call(null,"Spawn boids");

var seq__13201 = cljs.core.seq.call(null,cljs.core.range.call(null,(50)));
var chunk__13202 = null;
var count__13203 = (0);
var i__13204 = (0);
while(true){
if((i__13204 < count__13203)){
var i = cljs.core._nth.call(null,chunk__13202,i__13204);
var cone_13211 = document.createElement("a-cone");
cone_13211.setAttribute("scale",({"x": 0.3, "y": 0.1, "z": 0.1}));

cone_13211.setAttribute("rotation",({"x": (-90), "y": (0), "z": (0)}));

cone_13211.setAttribute("radius-bottom",".2");

cone_13211.setAttribute("radius-top","0.00001");

cone_13211.setAttribute("color","red");

cone_13211.setAttribute("boid","");

(function (){var target_obj_13205 = this$;
var _STAR_runtime_state_STAR_13207 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13205,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13206 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13205,(0),"el",true,true,false))?(target_obj_13205["el"]):null);
return next_obj_13206;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13207;
}})().appendChild(cone_13211);


var G__13212 = seq__13201;
var G__13213 = chunk__13202;
var G__13214 = count__13203;
var G__13215 = (i__13204 + (1));
seq__13201 = G__13212;
chunk__13202 = G__13213;
count__13203 = G__13214;
i__13204 = G__13215;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__13201);
if(temp__5457__auto__){
var seq__13201__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13201__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__13201__$1);
var G__13216 = cljs.core.chunk_rest.call(null,seq__13201__$1);
var G__13217 = c__4351__auto__;
var G__13218 = cljs.core.count.call(null,c__4351__auto__);
var G__13219 = (0);
seq__13201 = G__13216;
chunk__13202 = G__13217;
count__13203 = G__13218;
i__13204 = G__13219;
continue;
} else {
var i = cljs.core.first.call(null,seq__13201__$1);
var cone_13220 = document.createElement("a-cone");
cone_13220.setAttribute("scale",({"x": 0.3, "y": 0.1, "z": 0.1}));

cone_13220.setAttribute("rotation",({"x": (-90), "y": (0), "z": (0)}));

cone_13220.setAttribute("radius-bottom",".2");

cone_13220.setAttribute("radius-top","0.00001");

cone_13220.setAttribute("color","red");

cone_13220.setAttribute("boid","");

(function (){var target_obj_13208 = this$;
var _STAR_runtime_state_STAR_13210 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13208,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13209 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13208,(0),"el",true,true,false))?(target_obj_13208["el"]):null);
return next_obj_13209;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13210;
}})().appendChild(cone_13220);


var G__13221 = cljs.core.next.call(null,seq__13201__$1);
var G__13222 = null;
var G__13223 = (0);
var G__13224 = (0);
seq__13201 = G__13221;
chunk__13202 = G__13222;
count__13203 = G__13223;
i__13204 = G__13224;
continue;
}
} else {
return null;
}
}
break;
}
})], null);
boids.core.update_boid = (function boids$core$update_boid(boid,others,dt){
var vec__13225 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(boid);
var x = cljs.core.nth.call(null,vec__13225,(0),null);
var y = cljs.core.nth.call(null,vec__13225,(1),null);
var z = cljs.core.nth.call(null,vec__13225,(2),null);
var vec__13228 = new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid);
var dx = cljs.core.nth.call(null,vec__13228,(0),null);
var dy = cljs.core.nth.call(null,vec__13228,(1),null);
var dz = cljs.core.nth.call(null,vec__13228,(2),null);
return cljs.core.assoc.call(null,boid,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + (dt * dx)),(y + (dt * dy)),(z + (dt * dz))], null));
});
boids.core.vec3 = (function boids$core$vec3(p__13231){
var vec__13232 = p__13231;
var x = cljs.core.nth.call(null,vec__13232,(0),null);
var y = cljs.core.nth.call(null,vec__13232,(1),null);
var z = cljs.core.nth.call(null,vec__13232,(2),null);
return (new THREE.Vector3(x,y,z));
});
boids.core.boid_component = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,boids.core.boids,cljs.core.assoc,this$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((5) * (cljs.core.rand.call(null) - 0.5)),cljs.core.rand.call(null),((5) * (cljs.core.rand.call(null) - (1)))], null),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.rand.call(null) - 0.5),(cljs.core.rand.call(null) - 0.5),(cljs.core.rand.call(null) - 0.5)], null)], null));
}),new cljs.core.Keyword(null,"tick","tick",-835886976),(function (t,dt){
var this$ = this;
cljs.core.swap_BANG_.call(null,boids.core.boids,((function (this$){
return (function (boids__$1){
return cljs.core.update.call(null,boids__$1,this$,boids.core.update_boid,cljs.core.vals.call(null,cljs.core.dissoc.call(null,boids__$1,this$)),(dt * 0.001));
});})(this$))
);

var boid = cljs.core.get.call(null,cljs.core.deref.call(null,boids.core.boids),this$);
var vec__13235 = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(boid);
var x = cljs.core.nth.call(null,vec__13235,(0),null);
var y = cljs.core.nth.call(null,vec__13235,(1),null);
var z = cljs.core.nth.call(null,vec__13235,(2),null);
(function (){var target_obj_13238 = this$;
var _STAR_runtime_state_STAR_13242 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13238,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13239 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13238,(0),"el",true,true,false))?(target_obj_13238["el"]):null);
var next_obj_13240 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13239,(0),"object3D",true,true,false))?(next_obj_13239["object3D"]):null);
var next_obj_13241 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13240,(0),"position",true,true,false))?(next_obj_13240["position"]):null);
return next_obj_13241;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13242;
}})().set(x,y,z);

return (function (){var target_obj_13243 = this$;
var _STAR_runtime_state_STAR_13247 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_13243,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_13244 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_13243,(0),"el",true,true,false))?(target_obj_13243["el"]):null);
var next_obj_13245 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13244,(0),"object3D",true,true,false))?(next_obj_13244["object3D"]):null);
var next_obj_13246 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_13245,(0),"quaternion",true,true,false))?(next_obj_13245["quaternion"]):null);
return next_obj_13246;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_13247;
}})().setFromUnitVectors((new THREE.Vector3((0),(1),(0))),boids.core.vec3.call(null,new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)).normalize());
})], null);
if((typeof boids !== 'undefined') && (typeof boids.core !== 'undefined') && (typeof boids.core.components !== 'undefined')){
} else {
boids.core.components = (function (){var G__13248 = AFRAME;
G__13248.registerComponent("foo",({"tick": boids.core.tick}));

G__13248.registerComponent("boid-spawner",cljs.core.clj__GT_js.call(null,boids.core.boid_spawner));

G__13248.registerComponent("boid",cljs.core.clj__GT_js.call(null,boids.core.boid_component));

return G__13248;
})();
}

//# sourceMappingURL=core.js.map
