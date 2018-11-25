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
var pred__40680 = cljs.core._EQ_;
var expr__40681 = e.key;
if(cljs.core.truth_(pred__40680.call(null,"t",expr__40681))){
return cljs.core.swap_BANG_.call(null,boids.core.flags,cljs.core.update,new cljs.core.Keyword(null,"flock","flock",265984040),((function (pred__40680,expr__40681,this$){
return (function (p1__40679_SHARP_){
return cljs.core.not.call(null,p1__40679_SHARP_);
});})(pred__40680,expr__40681,this$))
);
} else {
if(cljs.core.truth_(pred__40680.call(null,"r",expr__40681))){
return cljs.core.swap_BANG_.call(null,boids.core.flags,cljs.core.assoc,new cljs.core.Keyword(null,"reset","reset",-800929946),true);
} else {
if(cljs.core.truth_(pred__40680.call(null,"c",expr__40681))){
return document.querySelector("#main-camera").setAttribute("camera","active","true");
} else {
if(cljs.core.truth_(pred__40680.call(null,"1",expr__40681))){
return document.querySelector("[boid-camera='1']").setAttribute("camera","active","true");
} else {
if(cljs.core.truth_(pred__40680.call(null,"p",expr__40681))){
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

var seq__40683 = cljs.core.seq.call(null,cljs.core.range.call(null,(80)));
var chunk__40684 = null;
var count__40685 = (0);
var i__40686 = (0);
while(true){
if((i__40686 < count__40685)){
var i = cljs.core._nth.call(null,chunk__40684,i__40686);
var boid_40701 = document.createElement("a-entity");
var cone_40702 = document.createElement("a-cone");
var sphere_40703 = document.createElement("a-sphere");
var camera_40704 = document.createElement("a-entity");
var G__40687_40705 = camera_40704;
G__40687_40705.setAttribute("position",({"x": (0), "y": 0.5, "z": (-1)}));

G__40687_40705.setAttribute("rotation",({"x": (0), "y": (180), "z": (0)}));

G__40687_40705.setAttribute("camera","active: true");

G__40687_40705.setAttribute("boid-camera",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));


var G__40688_40706 = sphere_40703;
G__40688_40706.setAttribute("scale",({"x": 0.05, "y": 0.1, "z": 0.1}));

G__40688_40706.setAttribute("position",({"x": (0), "y": -0.2, "z": -0.1}));

G__40688_40706.setAttribute("color","yellow");


var G__40689_40707 = cone_40702;
G__40689_40707.setAttribute("scale",({"x": 0.6, "y": 0.2, "z": 0.2}));

G__40689_40707.setAttribute("rotation",({"x": (90), "y": (0), "z": (0)}));

G__40689_40707.setAttribute("radius-bottom",".2");

G__40689_40707.setAttribute("radius-top","0.00001");

G__40689_40707.setAttribute("color","red");

G__40689_40707.appendChild(sphere_40703);


var G__40690_40708 = boid_40701;
G__40690_40708.setAttribute("boid","");

G__40690_40708.appendChild(cone_40702);

G__40690_40708.appendChild(camera_40704);


(function (){var target_obj_40691 = this$;
var _STAR_runtime_state_STAR_40693 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40691,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_40692 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40691,(0),"el",true,true,false))?(target_obj_40691["el"]):null);
return next_obj_40692;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40693;
}})().appendChild(boid_40701);


var G__40709 = seq__40683;
var G__40710 = chunk__40684;
var G__40711 = count__40685;
var G__40712 = (i__40686 + (1));
seq__40683 = G__40709;
chunk__40684 = G__40710;
count__40685 = G__40711;
i__40686 = G__40712;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__40683);
if(temp__5457__auto__){
var seq__40683__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40683__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__40683__$1);
var G__40713 = cljs.core.chunk_rest.call(null,seq__40683__$1);
var G__40714 = c__4351__auto__;
var G__40715 = cljs.core.count.call(null,c__4351__auto__);
var G__40716 = (0);
seq__40683 = G__40713;
chunk__40684 = G__40714;
count__40685 = G__40715;
i__40686 = G__40716;
continue;
} else {
var i = cljs.core.first.call(null,seq__40683__$1);
var boid_40717 = document.createElement("a-entity");
var cone_40718 = document.createElement("a-cone");
var sphere_40719 = document.createElement("a-sphere");
var camera_40720 = document.createElement("a-entity");
var G__40694_40721 = camera_40720;
G__40694_40721.setAttribute("position",({"x": (0), "y": 0.5, "z": (-1)}));

G__40694_40721.setAttribute("rotation",({"x": (0), "y": (180), "z": (0)}));

G__40694_40721.setAttribute("camera","active: true");

G__40694_40721.setAttribute("boid-camera",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''));


var G__40695_40722 = sphere_40719;
G__40695_40722.setAttribute("scale",({"x": 0.05, "y": 0.1, "z": 0.1}));

G__40695_40722.setAttribute("position",({"x": (0), "y": -0.2, "z": -0.1}));

G__40695_40722.setAttribute("color","yellow");


var G__40696_40723 = cone_40718;
G__40696_40723.setAttribute("scale",({"x": 0.6, "y": 0.2, "z": 0.2}));

G__40696_40723.setAttribute("rotation",({"x": (90), "y": (0), "z": (0)}));

G__40696_40723.setAttribute("radius-bottom",".2");

G__40696_40723.setAttribute("radius-top","0.00001");

G__40696_40723.setAttribute("color","red");

G__40696_40723.appendChild(sphere_40719);


var G__40697_40724 = boid_40717;
G__40697_40724.setAttribute("boid","");

G__40697_40724.appendChild(cone_40718);

G__40697_40724.appendChild(camera_40720);


(function (){var target_obj_40698 = this$;
var _STAR_runtime_state_STAR_40700 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40698,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_40699 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40698,(0),"el",true,true,false))?(target_obj_40698["el"]):null);
return next_obj_40699;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40700;
}})().appendChild(boid_40717);


var G__40725 = cljs.core.next.call(null,seq__40683__$1);
var G__40726 = null;
var G__40727 = (0);
var G__40728 = (0);
seq__40683 = G__40725;
chunk__40684 = G__40726;
count__40685 = G__40727;
i__40686 = G__40728;
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
return cljs.core.swap_BANG_.call(null,boids.core.boid_scarers,cljs.core.conj,(function (){var target_obj_40729 = this$;
var _STAR_runtime_state_STAR_40732 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40729,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_40730 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40729,(0),"el",true,true,false))?(target_obj_40729["el"]):null);
var next_obj_40731 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_40730,(0),"object3D",true,true,false))?(next_obj_40730["object3D"]):null);
return next_obj_40731;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40732;
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
var G__40734 = arguments.length;
switch (G__40734) {
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
return (function (p__40740){
var map__40741 = p__40740;
var map__40741__$1 = ((((!((map__40741 == null)))?(((((map__40741.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40741.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40741):map__40741);
var bx = cljs.core.get.call(null,map__40741__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return (x.distanceTo(bx) < (1));
});})(x,v))
,others);
var vec__40737 = cljs.core.map.call(null,((function (x,v,nearby){
return (function (p1__40736_SHARP_){
return p1__40736_SHARP_.divideScalar(cljs.core.count.call(null,nearby));
});})(x,v,nearby))
,cljs.core.reduce.call(null,((function (x,v,nearby){
return (function (p__40743,p__40744){
var vec__40745 = p__40743;
var total_pos = cljs.core.nth.call(null,vec__40745,(0),null);
var total_vel = cljs.core.nth.call(null,vec__40745,(1),null);
var map__40748 = p__40744;
var map__40748__$1 = ((((!((map__40748 == null)))?(((((map__40748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40748.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40748):map__40748);
var x__$1 = cljs.core.get.call(null,map__40748__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var v__$1 = cljs.core.get.call(null,map__40748__$1,new cljs.core.Keyword(null,"velocity","velocity",-581524355));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [total_pos.add(x__$1),total_vel.add(v__$1)], null);
});})(x,v,nearby))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [boids.core.vec3.call(null,(0),(0),(0)),boids.core.vec3.call(null,(0),(0),(0))], null),nearby));
var average_pos = cljs.core.nth.call(null,vec__40737,(0),null);
var average_vel = cljs.core.nth.call(null,vec__40737,(1),null);
var centering_acc = average_pos.sub(x).setLength(0.5);
var velocity_match_acc = average_vel.setLength(boids.core.TARGET_SPEED).sub(v).setLength(boids.core.SPEED_MATCH_COEFFICIENT);
var repel_acc = cljs.core.reduce.call(null,((function (x,v,nearby,vec__40737,average_pos,average_vel,centering_acc,velocity_match_acc){
return (function (repel_acc,p__40750){
var map__40751 = p__40750;
var map__40751__$1 = ((((!((map__40751 == null)))?(((((map__40751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40751):map__40751);
var bx = cljs.core.get.call(null,map__40751__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var to_me = x.clone().sub(bx);
var r = (to_me.length() * (7));
to_me.setLength(((1) / (r * r)));

return repel_acc.add(to_me);
});})(x,v,nearby,vec__40737,average_pos,average_vel,centering_acc,velocity_match_acc))
,boids.core.vec3.call(null,(0),(0),(0)),nearby);
var repel_acc__$1 = cljs.core.reduce.call(null,((function (x,v,nearby,vec__40737,average_pos,average_vel,centering_acc,velocity_match_acc,repel_acc){
return (function (repel_acc__$1,p){
var to_me = x.clone().sub(p.getWorldPosition());
var r = (to_me.length() * (1));
to_me.setLength(((1) / (r * r)));

return repel_acc__$1.add(to_me);
});})(x,v,nearby,vec__40737,average_pos,average_vel,centering_acc,velocity_match_acc,repel_acc))
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
(function (){var target_obj_40753 = this$;
var _STAR_runtime_state_STAR_40757 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40753,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_40754 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40753,(0),"el",true,true,false))?(target_obj_40753["el"]):null);
var next_obj_40755 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_40754,(0),"object3D",true,true,false))?(next_obj_40754["object3D"]):null);
var next_obj_40756 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_40755,(0),"position",true,true,false))?(next_obj_40755["position"]):null);
return next_obj_40756;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40757;
}})().copy(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(boid));

var target_obj_40758_40767 = this$;
var _STAR_runtime_state_STAR_40762_40768 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40758_40767,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var parent_obj_40759_40769 = (function (){var next_obj_40760 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40758_40767,(0),"el",true,true,false))?(target_obj_40758_40767["el"]):null);
var next_obj_40761 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_40760,(0),"object3D",true,true,false))?(next_obj_40760["object3D"]):null);
return next_obj_40761;
})();
if(oops.core.validate_object_access_dynamically.call(null,parent_obj_40759_40769,(0),"up",true,true,true)){
(parent_obj_40759_40769["up"] = boids.core.vec3.call(null,(0),(3),(0)).add(new cljs.core.Keyword(null,"bank","bank",-1982531798).cljs$core$IFn$_invoke$arity$1(boid)));
} else {
}

}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40762_40768;
}
return (function (){var target_obj_40763 = this$;
var _STAR_runtime_state_STAR_40766 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_40763,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_40764 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_40763,(0),"el",true,true,false))?(target_obj_40763["el"]):null);
var next_obj_40765 = ((oops.core.validate_object_access_dynamically.call(null,next_obj_40764,(0),"object3D",true,true,false))?(next_obj_40764["object3D"]):null);
return next_obj_40765;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_40766;
}})().lookAt(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(boid).clone().add(new cljs.core.Keyword(null,"velocity","velocity",-581524355).cljs$core$IFn$_invoke$arity$1(boid)));
})], null);
if((typeof boids !== 'undefined') && (typeof boids.core !== 'undefined') && (typeof boids.core.components !== 'undefined')){
} else {
boids.core.components = (function (){var G__40770 = AFRAME;
G__40770.registerComponent("boid-spawner",cljs.core.clj__GT_js.call(null,boids.core.boid_spawner));

G__40770.registerComponent("boid-scarer",cljs.core.clj__GT_js.call(null,boids.core.boid_scarer));

G__40770.registerComponent("boid",cljs.core.clj__GT_js.call(null,boids.core.boid_component));

return G__40770;
})();
}

//# sourceMappingURL=core.js.map
