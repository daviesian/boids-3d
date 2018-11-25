// Compiled by ClojureScript 1.10.339 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__12225 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__12225)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__12225)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__12225)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12225)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__12226 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__12226)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__12226)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__12226)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12226)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12234 = arguments.length;
var i__4532__auto___12235 = (0);
while(true){
if((i__4532__auto___12235 < len__4531__auto___12234)){
args__4534__auto__.push((arguments[i__4532__auto___12235]));

var G__12236 = (i__4532__auto___12235 + (1));
i__4532__auto___12235 = G__12236;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__12229){
var vec__12230 = p__12229;
var info = cljs.core.nth.call(null,vec__12230,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__12233_12237 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__12233_12237)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__12233_12237)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__12233_12237)){
} else {
if(cljs.core._EQ_.call(null,null,G__12233_12237)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12233_12237)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq12227){
var G__12228 = cljs.core.first.call(null,seq12227);
var seq12227__$1 = cljs.core.next.call(null,seq12227);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12228,seq12227__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__3938__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__3938__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5459__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5459__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_12238 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_12238);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_12239 = temp__5459__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_12239,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
}
}
} else {
return true;
}
} else {
return and__3938__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_12241 = oops.config.get_child_factory.call(null);
var child_factory_12241__$1 = (function (){var G__12242 = child_factory_12241;
var G__12242__$1 = (((G__12242 instanceof cljs.core.Keyword))?G__12242.fqn:null);
switch (G__12242__$1) {
case "js-obj":
return ((function (G__12242,G__12242__$1,child_factory_12241){
return (function (){
return {};
});
;})(G__12242,G__12242__$1,child_factory_12241))

break;
case "js-array":
return ((function (G__12242,G__12242__$1,child_factory_12241){
return (function (){
return [];
});
;})(G__12242,G__12242__$1,child_factory_12241))

break;
default:
return child_factory_12241;

}
})();

var child_obj_12240 = child_factory_12241__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_12240);
} else {
}

return child_obj_12240;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_12246 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_12246);

return selector_path_12246;
} else {
var selector_path_12247 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_12247);

return selector_path_12247;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_12248 = temp__5461__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_12248);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12257 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12257,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_12250 = (function (){var path_12249 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_12249,(0));

return path_12249;
})();
var len_12251 = path_12250.length;
var i_12252 = (0);
var obj_12253 = obj;
while(true){
if((i_12252 < len_12251)){
var mode_12254 = (path_12250[i_12252]);
var key_12255 = (path_12250[(i_12252 + (1))]);
var next_obj_12256 = oops.core.get_key_dynamically.call(null,obj_12253,key_12255,mode_12254);
var G__12258 = mode_12254;
switch (G__12258) {
case (0):
var G__12260 = (i_12252 + (2));
var G__12261 = next_obj_12256;
i_12252 = G__12260;
obj_12253 = G__12261;
continue;

break;
case (1):
if(!((next_obj_12256 == null))){
var G__12262 = (i_12252 + (2));
var G__12263 = next_obj_12256;
i_12252 = G__12262;
obj_12253 = G__12263;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12256 == null))){
var G__12264 = (i_12252 + (2));
var G__12265 = next_obj_12256;
i_12252 = G__12264;
obj_12253 = G__12265;
continue;
} else {
var G__12266 = (i_12252 + (2));
var G__12267 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12253,key_12255);
i_12252 = G__12266;
obj_12253 = G__12267;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12258)].join('')));

}
} else {
return obj_12253;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12293 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12293,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_12269 = (function (){var path_12268 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_12268,(0));

return path_12268;
})();
var len_12270 = path_12269.length;
if((len_12270 < (4))){
return [obj,(function (){var path_12272 = path_12269;
var len_12273 = path_12272.length;
var i_12274 = (0);
var obj_12275 = obj;
while(true){
if((i_12274 < len_12273)){
var mode_12276 = (path_12272[i_12274]);
var key_12277 = (path_12272[(i_12274 + (1))]);
var next_obj_12278 = oops.core.get_key_dynamically.call(null,obj_12275,key_12277,mode_12276);
var G__12294 = mode_12276;
switch (G__12294) {
case (0):
var G__12298 = (i_12274 + (2));
var G__12299 = next_obj_12278;
i_12274 = G__12298;
obj_12275 = G__12299;
continue;

break;
case (1):
if(!((next_obj_12278 == null))){
var G__12300 = (i_12274 + (2));
var G__12301 = next_obj_12278;
i_12274 = G__12300;
obj_12275 = G__12301;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12278 == null))){
var G__12302 = (i_12274 + (2));
var G__12303 = next_obj_12278;
i_12274 = G__12302;
obj_12275 = G__12303;
continue;
} else {
var G__12304 = (i_12274 + (2));
var G__12305 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12275,key_12277);
i_12274 = G__12304;
obj_12275 = G__12305;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12294)].join('')));

}
} else {
return obj_12275;
}
break;
}
})()];
} else {
var target_obj_12271 = (function (){var path_12279 = path_12269.slice((0),(len_12270 - (2)));
var len_12280 = path_12279.length;
var i_12281 = (0);
var obj_12282 = obj;
while(true){
if((i_12281 < len_12280)){
var mode_12283 = (path_12279[i_12281]);
var key_12284 = (path_12279[(i_12281 + (1))]);
var next_obj_12285 = oops.core.get_key_dynamically.call(null,obj_12282,key_12284,mode_12283);
var G__12295 = mode_12283;
switch (G__12295) {
case (0):
var G__12307 = (i_12281 + (2));
var G__12308 = next_obj_12285;
i_12281 = G__12307;
obj_12282 = G__12308;
continue;

break;
case (1):
if(!((next_obj_12285 == null))){
var G__12309 = (i_12281 + (2));
var G__12310 = next_obj_12285;
i_12281 = G__12309;
obj_12282 = G__12310;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12285 == null))){
var G__12311 = (i_12281 + (2));
var G__12312 = next_obj_12285;
i_12281 = G__12311;
obj_12282 = G__12312;
continue;
} else {
var G__12313 = (i_12281 + (2));
var G__12314 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12282,key_12284);
i_12281 = G__12313;
obj_12282 = G__12314;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12295)].join('')));

}
} else {
return obj_12282;
}
break;
}
})();
return [target_obj_12271,(function (){var path_12286 = [(path_12269[(len_12270 - (2))]),(path_12269[(len_12270 - (1))])];
var len_12287 = path_12286.length;
var i_12288 = (0);
var obj_12289 = target_obj_12271;
while(true){
if((i_12288 < len_12287)){
var mode_12290 = (path_12286[i_12288]);
var key_12291 = (path_12286[(i_12288 + (1))]);
var next_obj_12292 = oops.core.get_key_dynamically.call(null,obj_12289,key_12291,mode_12290);
var G__12296 = mode_12290;
switch (G__12296) {
case (0):
var G__12316 = (i_12288 + (2));
var G__12317 = next_obj_12292;
i_12288 = G__12316;
obj_12289 = G__12317;
continue;

break;
case (1):
if(!((next_obj_12292 == null))){
var G__12318 = (i_12288 + (2));
var G__12319 = next_obj_12292;
i_12288 = G__12318;
obj_12289 = G__12319;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12292 == null))){
var G__12320 = (i_12288 + (2));
var G__12321 = next_obj_12292;
i_12288 = G__12320;
obj_12289 = G__12321;
continue;
} else {
var G__12322 = (i_12288 + (2));
var G__12323 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12289,key_12291);
i_12288 = G__12322;
obj_12289 = G__12323;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12296)].join('')));

}
} else {
return obj_12289;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12338 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12338,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_12325 = (function (){var path_12324 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_12324,(1));

return path_12324;
})();
var len_12328 = path_12325.length;
var parent_obj_path_12329 = path_12325.slice((0),(len_12328 - (2)));
var key_12326 = (path_12325[(len_12328 - (1))]);
var mode_12327 = (path_12325[(len_12328 - (2))]);
var parent_obj_12330 = (function (){var path_12331 = parent_obj_path_12329;
var len_12332 = path_12331.length;
var i_12333 = (0);
var obj_12334 = obj;
while(true){
if((i_12333 < len_12332)){
var mode_12335 = (path_12331[i_12333]);
var key_12336 = (path_12331[(i_12333 + (1))]);
var next_obj_12337 = oops.core.get_key_dynamically.call(null,obj_12334,key_12336,mode_12335);
var G__12339 = mode_12335;
switch (G__12339) {
case (0):
var G__12341 = (i_12333 + (2));
var G__12342 = next_obj_12337;
i_12333 = G__12341;
obj_12334 = G__12342;
continue;

break;
case (1):
if(!((next_obj_12337 == null))){
var G__12343 = (i_12333 + (2));
var G__12344 = next_obj_12337;
i_12333 = G__12343;
obj_12334 = G__12344;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12337 == null))){
var G__12345 = (i_12333 + (2));
var G__12346 = next_obj_12337;
i_12333 = G__12345;
obj_12334 = G__12346;
continue;
} else {
var G__12347 = (i_12333 + (2));
var G__12348 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12334,key_12336);
i_12333 = G__12347;
obj_12334 = G__12348;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12339)].join('')));

}
} else {
return obj_12334;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_12330,key_12326,val,mode_12327);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map
