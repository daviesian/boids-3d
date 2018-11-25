// Compiled by ClojureScript 1.10.339 {}
goog.provide('boids.core');
goog.require('cljs.core');
goog.require('oops.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.prn.call(null,"hello world!");
boids.core.vec3 = (function boids$core$vec3(x,y,z){
return (new THREE.Vector3(x,y,z));
});
if((typeof boids !== 'undefined') && (typeof boids.core !== 'undefined') && (typeof boids.core.boids !== 'undefined')){
} else {
boids.core.boids = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof boids !== 'undefined') && (typeof boids.core !== 'undefined') && (typeof boids.core.boid_scarers !== 'undefined')){
} else {
boids.core.boid_scarers = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
}
if((typeof boids !== 'undefined') && (typeof boids.core !== 'undefined') && (typeof boids.core.flags !== 'undefined')){
} else {
boids.core.flags = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"flock","flock",265984040),true,new cljs.core.Keyword(null,"reset","reset",-800929946),false,new cljs.core.Keyword(null,"scare","scare",282436444),false], null));
}
boids.core.boid_spawner = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (){
var this$ = this;
document.addEventListener("keydown",((function (this$){
return (function (e){
var pred__12150 = cljs.core._EQ_;
var expr__12151 = e.key;
if(cljs.core.truth_(pred__12150.call(null,"t",expr__12151))){
return cljs.core.swap_BANG_.call(null,boids.core.flags,cljs.core.update,new cljs.core.Keyword(null,"flock","flock",265984040),((function (pred__12150,expr__12151,this$){
return (function (p1__12149_SHARP_){
return cljs.core.not.call(null,p1__12149_SHARP_);
});})(pred__12150,expr__12151,this$))
);
} else {
if(cljs.core.truth_(pred__12150.call(null,"r",expr__12151))){
return cljs.core.swap_BANG_.call(null,boids.core.flags,cljs.core.assoc,new cljs.core.Keyword(null,"reset","reset",-800929946),true);
} else {
if(cljs.core.truth_(pred__12150.call(null,"c",expr__12151))){
return document.querySelector("#main-camera").setAttribute("camera","active","true");
} else {
if(cljs.core.truth_(pred__12150.call(null,"1",expr__12151))){
return document.querySelector("[boid-camera='1']").setAttribute("camera","active","true");
} else {
if(cljs.core.truth_(pred__12150.call(null,"p",expr__12151))){
return cljs.core.swap_BANG_.call(null,boids.core.flags,cljs.core.assoc,new cljs.core.Keyword(null,"scare","scare",282436444),true);
} else {
return null;
}
}
}
}
}
});})(this$))
);

var seq__12153 = cljs.core.seq.call(null,cljs.core.range.call(null,(80)));
var chunk__12154 = null;
var count__12155 = (0);
var i__12156 = (0);
while(true){
if((i__12156 < count__12155)){
var i = cljs.core._nth.call(null,chunk__12154,i__12156);
var boid_12171 = document.createElement("a-entity");
var cone_12172 = document.createElement("a-cone");
var sphere_12173 = document.createElement("a-sphere");
var camera_12174 = document.createElement("a-entity");
var G__12157_12175 = camera_12174;
G__12157_12175.setAttribute("position",({"x": (0), "y": 0.5, "z": (-1)}));

G__12157_12175.setAttribute("rotation",({"x": (0), "y": (180), "z": (0)}));

G__12157_12175.setAttribute("camera","active: true");

G__12157_12175.setAttribute("boid-camera",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));


var G__12158_12176 = sphere_12173;
G__12158_12176.setAttribute("scale",({"x": 0.05, "y": 0.1, "z": 0.1}));

G__12158_12176.setAttribute("position",({"x": (0), "y": -0.2, "z": -0.1}));

G__12158_12176.setAttribute("color","yellow");


var G__12159_12177 = cone_12172;
G__12159_12177.setAttribute("scale",({"x": 0.6, "y": 0.2, "z": 0.2}));

G__12159_12177.setAttribute("rotation",({"x": (90), "y": (0), "z": (0)}));

G__12159_12177.setAttribute("radius-bottom",".2");

G__12159_12177.setAttribute("radius-top","0.00001");

G__12159_12177.setAttribute("color","red");

G__12159_12177.appendChild(sphere_12173);


var G__12160_12178 = boid_12171;
G__12160_12178.setAttribute("boid","");

G__12160_12178.appendChild(cone_12172);

G__12160_12178.appendChild(camera_12174);


(function (){var target_obj_12161 = this$;
var _STAR_runtime_state_STAR_12163 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_12161,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_12162 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_12161,(0),"el",true,true,false))?(target_obj_12161["el"]):null);
return next_obj_12162;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_12163;
}})().appendChild(boid_12171);


var G__12179 = seq__12153;
var G__12180 = chunk__12154;
var G__12181 = count__12155;
var G__12182 = (i__12156 + (1));
seq__12153 = G__12179;
chunk__12154 = G__12180;
count__12155 = G__12181;
i__12156 = G__12182;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__12153);
if(temp__5457__auto__){
var seq__12153__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12153__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__12153__$1);
var G__12183 = cljs.core.chunk_rest.call(null,seq__12153__$1);
var G__12184 = c__4351__auto__;
var G__12185 = cljs.core.count.call(null,c__4351__auto__);
var G__12186 = (0);
seq__12153 = G__12183;
chunk__12154 = G__12184;
count__12155 = G__12185;
i__12156 = G__12186;
continue;
} else {
var i = cljs.core.first.call(null,seq__12153__$1);
var boid_12187 = document.createElement("a-entity");
var cone_12188 = document.createElement("a-cone");
var sphere_12189 = document.createElement("a-sphere");
var camera_12190 = document.createElement("a-entity");
var G__12164_12191 = camera_12190;
G__12164_12191.setAttribute("position",({"x": (0), "y": 0.5, "z": (-1)}));

G__12164_12191.setAttribute("rotation",({"x": (0), "y": (180), "z": (0)}));

G__12164_12191.setAttribute("camera","active: true");

G__12164_12191.setAttribute("boid-camera",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));


var G__12165_12192 = sphere_12189;
G__12165_12192.setAttribute("scale",({"x": 0.05, "y": 0.1, "z": 0.1}));

G__12165_12192.setAttribute("position",({"x": (0), "y": -0.2, "z": -0.1}));

G__12165_12192.setAttribute("color","yellow");


var G__12166_12193 = cone_12188;
G__12166_12193.setAttribute("scale",({"x": 0.6, "y": 0.2, "z": 0.2}));

G__12166_12193.setAttribute("rotation",({"x": (90), "y": (0), "z": (0)}));

G__12166_12193.setAttribute("radius-bottom",".2");

G__12166_12193.setAttribute("radius-top","0.00001");

G__12166_12193.setAttribute("color","red");

G__12166_12193.appendChild(sphere_12189);


var G__12167_12194 = boid_12187;
G__12167_12194.setAttribute("boid","");

G__12167_12194.appendChild(cone_12188);

G__12167_12194.appendChild(camera_12190);


(function (){var target_obj_12168 = this$;
var _STAR_runtime_state_STAR_12170 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_12168,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_12169 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_12168,(0),"el",true,true,false))?(target_obj_12168["el"]):null);
return next_obj_12169;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_12170;
}})().appendChild(boid_12187);


var G__12195 = cljs.core.next.call(null,seq__12153__$1);
var G__12196 = null;
var G__12197 = (0);
var G__12198 = (0);
seq__12153 = G__12195;
chunk__12154 = G__12196;
count__12155 = G__12197;
i__12156 = G__12198;
continue;
}
} else {
return null;
}
}
break;
}
}),new cljs.core.Keyword(null,"tock","tock",1135242629),(function (){
return cljs.core.swap_BANG_.call(null,boids.core.flags,cljs.core.assoc,new cljs.core.Keyword(null,"reset","reset",-800929946),false,new cljs.core.Keyword(null,"scare","scare",282436444),false);
})], null);
boids.core.boid_scarer = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,boids.core.boid_scarers,cljs.core.conj,(function (){var target_obj_12199 = this$;
var _STAR_runtime_state_STAR_12202 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_12199,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_12200 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_12199,(0),"el",true,true,false))?(target_obj_12199["el"]):null);
var next_obj_12201 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_12200,(0),"object3D",true,true,false))?(next_obj_12200["object3D"]):null);
return next_obj_12201;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_12202;
}})());
})], null);
boids.core.TARGET_SPEED = (2);
boids.core.SPEED_MATCH_COEFFICIENT = 0.8;
boids.core.MAX_SPEED = (4);
boids.core.MAX_DISTANCE = (30);
boids.core.MIN_X = (-5);
boids.core.MAX_X = (5);
boids.core.MIN_Y = (1);
boids.core.MAX_Y = (5);
boids.core.MIN_Z = (-5);
boids.core.MAX_Z = (0);
boids.core.contain_boid = (function boids$core$contain_boid(var_args){
var G__12204 = arguments.length;
switch (G__12204) {
case 5:
return boids.core.contain_boid.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return boids.core.contain_boid.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

boids.core.contain_boid.cljs$core$IFn$_invoke$arity$5 = (function (x,v,a,plane_pos,normal){
return boids.core.contain_boid.call(null,x,v,a,plane_pos,normal,false);
});

boids.core.contain_boid.cljs$core$IFn$_invoke$arity$6 = (function (x,v,a,plane_pos,normal,strong_QMARK_){
if((normal.dot(x.clone().sub(plane_pos)) < (0))){
return a.add(normal.clone().setLength((cljs.core.truth_(strong_QMARK_)?(50):(2))));
} else {
return null;
}
});

boids.core.contain_boid.cljs$lang$maxFixedArity = 6;

boids.core.update_boid = (function boids$core$update_boid(boid,others,dt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"sitting","sitting",-810942209).cljs$core$IFn$_invoke$arity$1(boid))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"scare","scare",282436444).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,boids.core.flags)))){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,boid,new cljs.core.Keyword(null,"sitting","sitting",-810942209),false),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"initial-velocity","initial-velocity",1920321962).cljs$core$IFn$_invoke$arity$1(boid).clone().setY(Math.abs(new cljs.core.Keyword(null,"initial-velocity","initial-velocity",1920321962).cljs$core$IFn$_invoke$arity$1(boid).y)));
} else {
return boid;
}
} else {
var x = (cljs.core.truth_(new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,boids.core.flags)))?new cljs.core.Keyword(null,"initial-position","initial-position",1055724056).cljs$core$IFn$_invoke$arity$1(boid):new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(boid)).clone();
var v = (cljs.core.truth_(new cljs.core.Keyword(null,"reset","reset",-800929946).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,boids.core.flags)))?new cljs.core.Keyword(null,"initial-velocity","initial-velocity",1920321962).cljs$core$IFn$_invoke$arity$1(boid):new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)).clone();
var nearby = cljs.core.filter.call(null,((function (x,v){
return (function (p__12210){
var map__12211 = p__12210;
var map__12211__$1 = ((((!((map__12211 == null)))?(((((map__12211.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12211.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12211):map__12211);
var bx = cljs.core.get.call(null,map__12211__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return (x.distanceTo(bx) < (1));
});})(x,v))
,others);
var vec__12207 = cljs.core.map.call(null,((function (x,v,nearby){
return (function (p1__12206_SHARP_){
return p1__12206_SHARP_.divideScalar(cljs.core.count.call(null,nearby));
});})(x,v,nearby))
,cljs.core.reduce.call(null,((function (x,v,nearby){
return (function (p__12213,p__12214){
var vec__12215 = p__12213;
var total_pos = cljs.core.nth.call(null,vec__12215,(0),null);
var total_vel = cljs.core.nth.call(null,vec__12215,(1),null);
var map__12218 = p__12214;
var map__12218__$1 = ((((!((map__12218 == null)))?(((((map__12218.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12218.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12218):map__12218);
var x__$1 = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var v__$1 = cljs.core.get.call(null,map__12218__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_pos.add(x__$1),total_vel.add(v__$1)], null);
});})(x,v,nearby))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boids.core.vec3.call(null,(0),(0),(0)),boids.core.vec3.call(null,(0),(0),(0))], null),nearby));
var average_pos = cljs.core.nth.call(null,vec__12207,(0),null);
var average_vel = cljs.core.nth.call(null,vec__12207,(1),null);
var centering_acc = average_pos.sub(x).setLength(0.5);
var velocity_match_acc = average_vel.setLength(boids.core.TARGET_SPEED).sub(v).setLength(boids.core.SPEED_MATCH_COEFFICIENT);
var repel_acc = cljs.core.reduce.call(null,((function (x,v,nearby,vec__12207,average_pos,average_vel,centering_acc,velocity_match_acc){
return (function (repel_acc,p__12220){
var map__12221 = p__12220;
var map__12221__$1 = ((((!((map__12221 == null)))?(((((map__12221.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12221.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12221):map__12221);
var bx = cljs.core.get.call(null,map__12221__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var to_me = x.clone().sub(bx);
var r = (to_me.length() * (7));
to_me.setLength(((1) / (r * r)));

return repel_acc.add(to_me);
});})(x,v,nearby,vec__12207,average_pos,average_vel,centering_acc,velocity_match_acc))
,boids.core.vec3.call(null,(0),(0),(0)),nearby);
var repel_acc__$1 = cljs.core.reduce.call(null,((function (x,v,nearby,vec__12207,average_pos,average_vel,centering_acc,velocity_match_acc,repel_acc){
return (function (repel_acc__$1,p){
var to_me = x.clone().sub(p.getWorldPosition());
var r = (to_me.length() * (1));
to_me.setLength(((1) / (r * r)));

return repel_acc__$1.add(to_me);
});})(x,v,nearby,vec__12207,average_pos,average_vel,centering_acc,velocity_match_acc,repel_acc))
,repel_acc,cljs.core.deref.call(null,boids.core.boid_scarers));
var a = boids.core.vec3.call(null,(0),(0),(0));
var max_acc = (4);
if((a.length() < max_acc)){
a.add(repel_acc__$1.clampLength((0),(max_acc - a.length())));
} else {
}

if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"flock","flock",265984040).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,boids.core.flags));
if(cljs.core.truth_(and__3938__auto__)){
return (cljs.core.count.call(null,nearby) > (0));
} else {
return and__3938__auto__;
}
})())){
if((a.length() < max_acc)){
a.add(velocity_match_acc.clampLength((0),(max_acc - a.length())));
} else {
}

if((a.length() < max_acc)){
a.add(centering_acc.clampLength((0),(max_acc - a.length())));
} else {
}
} else {
}

if((a.length() < max_acc)){
a.add(boids.core.vec3.call(null,(0),(- (0.1 * v.y)),(0)).clampLength((0),(max_acc - a.length())));
} else {
}

boids.core.contain_boid.call(null,x,v,a,boids.core.vec3.call(null,boids.core.MAX_X,(0),(0)),boids.core.vec3.call(null,(-1),(0),(0)));

boids.core.contain_boid.call(null,x,v,a,boids.core.vec3.call(null,boids.core.MIN_X,(0),(0)),boids.core.vec3.call(null,(1),(0),(0)));

boids.core.contain_boid.call(null,x,v,a,boids.core.vec3.call(null,(0),boids.core.MAX_Y,(0)),boids.core.vec3.call(null,(0),(-1),(0)));

boids.core.contain_boid.call(null,x,v,a,boids.core.vec3.call(null,(0),boids.core.MIN_Y,(0)),boids.core.vec3.call(null,(0),(1),(0)));

boids.core.contain_boid.call(null,x,v,a,boids.core.vec3.call(null,(0),(0),boids.core.MAX_Z),boids.core.vec3.call(null,(0),(0),(-1)));

boids.core.contain_boid.call(null,x,v,a,boids.core.vec3.call(null,(0),(0),boids.core.MIN_Z),boids.core.vec3.call(null,(0),(0),(1)));

if(cljs.core.truth_((function (){var and__3938__auto__ = new cljs.core.Keyword(null,"can-sit","can-sit",1364954254).cljs$core$IFn$_invoke$arity$1(boid);
if(cljs.core.truth_(and__3938__auto__)){
return (((x.y <= (0))) && ((x.x > boids.core.MIN_X)) && ((x.x < boids.core.MAX_X)) && ((x.z > boids.core.MIN_Z)) && ((x.z < boids.core.MAX_Z)));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,boid,new cljs.core.Keyword(null,"sitting","sitting",-810942209),true),new cljs.core.Keyword(null,"can-sit","can-sit",1364954254),false),new cljs.core.Keyword(null,"velocity","velocity",-581524355),v.projectOnPlane(boids.core.vec3.call(null,(0),(1),(0)))),new cljs.core.Keyword(null,"position","position",-2011731912),x.projectOnPlane(boids.core.vec3.call(null,(0),(1),(0)))),new cljs.core.Keyword(null,"bank","bank",-1982531798),boids.core.vec3.call(null,(0),(1),(0)));
} else {
return cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,boid,new cljs.core.Keyword(null,"can-sit","can-sit",1364954254),(function (){var or__3949__auto__ = new cljs.core.Keyword(null,"can-sit","can-sit",1364954254).cljs$core$IFn$_invoke$arity$1(boid);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (x.y > (1));
}
})()),new cljs.core.Keyword(null,"velocity","velocity",-581524355),v.add(a.clone().multiplyScalar(dt)).clampLength((0),boids.core.MAX_SPEED)),new cljs.core.Keyword(null,"position","position",-2011731912),x.add(v.clone().multiplyScalar(dt)).clampLength((0),boids.core.MAX_DISTANCE)),new cljs.core.Keyword(null,"bank","bank",-1982531798),a.clone().multiplyScalar(0.05).add(new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(boid).multiplyScalar(((1) - 0.05))));
}
}
});
boids.core.boid_component = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"init","init",-1875481434),(function (){
var this$ = this;
return cljs.core.swap_BANG_.call(null,boids.core.boids,cljs.core.assoc,this$,(function (){var spec = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"initial-position","initial-position",1055724056),boids.core.vec3.call(null,((50) * (cljs.core.rand.call(null) - 0.5)),((20) * cljs.core.rand.call(null)),((50) * (cljs.core.rand.call(null) - (1)))),new cljs.core.Keyword(null,"initial-velocity","initial-velocity",1920321962),boids.core.vec3.call(null,(cljs.core.rand.call(null) - 0.5),(cljs.core.rand.call(null) - 0.5),(cljs.core.rand.call(null) - 0.5)).normalize()], null);
return cljs.core.assoc.call(null,spec,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"initial-position","initial-position",1055724056).cljs$core$IFn$_invoke$arity$1(spec),new cljs.core.Keyword(null,"velocity","velocity",-581524355),new cljs.core.Keyword(null,"initial-velocity","initial-velocity",1920321962).cljs$core$IFn$_invoke$arity$1(spec),new cljs.core.Keyword(null,"bank","bank",-1982531798),boids.core.vec3.call(null,(0),(0),(0)),new cljs.core.Keyword(null,"sitting","sitting",-810942209),false,new cljs.core.Keyword(null,"can-sit","can-sit",1364954254),false);
})());
}),new cljs.core.Keyword(null,"tick","tick",-835886976),(function (t,dt){
var this$ = this;
cljs.core.swap_BANG_.call(null,boids.core.boids,((function (this$){
return (function (boids__$1){
return cljs.core.update.call(null,boids__$1,this$,boids.core.update_boid,cljs.core.vals.call(null,cljs.core.dissoc.call(null,boids__$1,this$)),(dt * 0.001));
});})(this$))
);

var boid = cljs.core.get.call(null,cljs.core.deref.call(null,boids.core.boids),this$);
(function (){var target_obj_12223 = this$;
var _STAR_runtime_state_STAR_12227 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_12223,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_12224 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_12223,(0),"el",true,true,false))?(target_obj_12223["el"]):null);
var next_obj_12225 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_12224,(0),"object3D",true,true,false))?(next_obj_12224["object3D"]):null);
var next_obj_12226 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_12225,(0),"position",true,true,false))?(next_obj_12225["position"]):null);
return next_obj_12226;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_12227;
}})().copy(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(boid));

var target_obj_12228_12237 = this$;
var _STAR_runtime_state_STAR_12232_12238 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_12228_12237,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_12229_12239 = (function (){var next_obj_12230 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_12228_12237,(0),"el",true,true,false))?(target_obj_12228_12237["el"]):null);
var next_obj_12231 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_12230,(0),"object3D",true,true,false))?(next_obj_12230["object3D"]):null);
return next_obj_12231;
})();
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_12229_12239,(0),"up",true,true,true)){
(parent_obj_12229_12239["up"] = boids.core.vec3.call(null,(0),(3),(0)).add(new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(boid)));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_12232_12238;
}
return (function (){var target_obj_12233 = this$;
var _STAR_runtime_state_STAR_12236 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_12233,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_12234 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_12233,(0),"el",true,true,false))?(target_obj_12233["el"]):null);
var next_obj_12235 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_12234,(0),"object3D",true,true,false))?(next_obj_12234["object3D"]):null);
return next_obj_12235;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_12236;
}})().lookAt(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(boid).clone().add(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)));
})], null);
if((typeof boids !== 'undefined') && (typeof boids.core !== 'undefined') && (typeof boids.core.components !== 'undefined')){
} else {
boids.core.components = (function (){var G__12240 = AFRAME;
G__12240.registerComponent("boid-spawner",cljs.core.clj__GT_js.call(null,boids.core.boid_spawner));

G__12240.registerComponent("boid-scarer",cljs.core.clj__GT_js.call(null,boids.core.boid_scarer));

G__12240.registerComponent("boid",cljs.core.clj__GT_js.call(null,boids.core.boid_component));

return G__12240;
})();
}
