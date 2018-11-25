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

var G__12023 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__12023)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__12023)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__12023)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12023)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__12024 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__12024)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__12024)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__12024)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12024)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4534__auto__ = [];
var len__4531__auto___12032 = arguments.length;
var i__4532__auto___12033 = (0);
while(true){
if((i__4532__auto___12033 < len__4531__auto___12032)){
args__4534__auto__.push((arguments[i__4532__auto___12033]));

var G__12034 = (i__4532__auto___12033 + (1));
i__4532__auto___12033 = G__12034;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__12027){
var vec__12028 = p__12027;
var info = cljs.core.nth.call(null,vec__12028,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__12031_12035 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__12031_12035)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__12031_12035)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__12031_12035)){
} else {
if(cljs.core._EQ_.call(null,null,G__12031_12035)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12031_12035)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq12025){
var G__12026 = cljs.core.first.call(null,seq12025);
var seq12025__$1 = cljs.core.next.call(null,seq12025);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12026,seq12025__$1);
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
var descriptor_12036 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_12036);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_12037 = temp__5459__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_12037,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_12039 = oops.config.get_child_factory.call(null);
var child_factory_12039__$1 = (function (){var G__12040 = child_factory_12039;
var G__12040__$1 = (((G__12040 instanceof cljs.core.Keyword))?G__12040.fqn:null);
switch (G__12040__$1) {
case "js-obj":
return ((function (G__12040,G__12040__$1,child_factory_12039){
return (function (){
return {};
});
;})(G__12040,G__12040__$1,child_factory_12039))

break;
case "js-array":
return ((function (G__12040,G__12040__$1,child_factory_12039){
return (function (){
return [];
});
;})(G__12040,G__12040__$1,child_factory_12039))

break;
default:
return child_factory_12039;

}
})();

var child_obj_12038 = child_factory_12039__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_12038);
} else {
}

return child_obj_12038;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_12044 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_12044);

return selector_path_12044;
} else {
var selector_path_12045 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_12045);

return selector_path_12045;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_12046 = temp__5461__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_12046);
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12055 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12055,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_12048 = (function (){var path_12047 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_12047,(0));

return path_12047;
})();
var len_12049 = path_12048.length;
var i_12050 = (0);
var obj_12051 = obj;
while(true){
if((i_12050 < len_12049)){
var mode_12052 = (path_12048[i_12050]);
var key_12053 = (path_12048[(i_12050 + (1))]);
var next_obj_12054 = oops.core.get_key_dynamically.call(null,obj_12051,key_12053,mode_12052);
var G__12056 = mode_12052;
switch (G__12056) {
case (0):
var G__12058 = (i_12050 + (2));
var G__12059 = next_obj_12054;
i_12050 = G__12058;
obj_12051 = G__12059;
continue;

break;
case (1):
if(!((next_obj_12054 == null))){
var G__12060 = (i_12050 + (2));
var G__12061 = next_obj_12054;
i_12050 = G__12060;
obj_12051 = G__12061;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12054 == null))){
var G__12062 = (i_12050 + (2));
var G__12063 = next_obj_12054;
i_12050 = G__12062;
obj_12051 = G__12063;
continue;
} else {
var G__12064 = (i_12050 + (2));
var G__12065 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12051,key_12053);
i_12050 = G__12064;
obj_12051 = G__12065;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12056)].join('')));

}
} else {
return obj_12051;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12091 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12091,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_12067 = (function (){var path_12066 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_12066,(0));

return path_12066;
})();
var len_12068 = path_12067.length;
if((len_12068 < (4))){
return [obj,(function (){var path_12070 = path_12067;
var len_12071 = path_12070.length;
var i_12072 = (0);
var obj_12073 = obj;
while(true){
if((i_12072 < len_12071)){
var mode_12074 = (path_12070[i_12072]);
var key_12075 = (path_12070[(i_12072 + (1))]);
var next_obj_12076 = oops.core.get_key_dynamically.call(null,obj_12073,key_12075,mode_12074);
var G__12092 = mode_12074;
switch (G__12092) {
case (0):
var G__12096 = (i_12072 + (2));
var G__12097 = next_obj_12076;
i_12072 = G__12096;
obj_12073 = G__12097;
continue;

break;
case (1):
if(!((next_obj_12076 == null))){
var G__12098 = (i_12072 + (2));
var G__12099 = next_obj_12076;
i_12072 = G__12098;
obj_12073 = G__12099;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12076 == null))){
var G__12100 = (i_12072 + (2));
var G__12101 = next_obj_12076;
i_12072 = G__12100;
obj_12073 = G__12101;
continue;
} else {
var G__12102 = (i_12072 + (2));
var G__12103 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12073,key_12075);
i_12072 = G__12102;
obj_12073 = G__12103;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12092)].join('')));

}
} else {
return obj_12073;
}
break;
}
})()];
} else {
var target_obj_12069 = (function (){var path_12077 = path_12067.slice((0),(len_12068 - (2)));
var len_12078 = path_12077.length;
var i_12079 = (0);
var obj_12080 = obj;
while(true){
if((i_12079 < len_12078)){
var mode_12081 = (path_12077[i_12079]);
var key_12082 = (path_12077[(i_12079 + (1))]);
var next_obj_12083 = oops.core.get_key_dynamically.call(null,obj_12080,key_12082,mode_12081);
var G__12093 = mode_12081;
switch (G__12093) {
case (0):
var G__12105 = (i_12079 + (2));
var G__12106 = next_obj_12083;
i_12079 = G__12105;
obj_12080 = G__12106;
continue;

break;
case (1):
if(!((next_obj_12083 == null))){
var G__12107 = (i_12079 + (2));
var G__12108 = next_obj_12083;
i_12079 = G__12107;
obj_12080 = G__12108;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12083 == null))){
var G__12109 = (i_12079 + (2));
var G__12110 = next_obj_12083;
i_12079 = G__12109;
obj_12080 = G__12110;
continue;
} else {
var G__12111 = (i_12079 + (2));
var G__12112 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12080,key_12082);
i_12079 = G__12111;
obj_12080 = G__12112;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12093)].join('')));

}
} else {
return obj_12080;
}
break;
}
})();
return [target_obj_12069,(function (){var path_12084 = [(path_12067[(len_12068 - (2))]),(path_12067[(len_12068 - (1))])];
var len_12085 = path_12084.length;
var i_12086 = (0);
var obj_12087 = target_obj_12069;
while(true){
if((i_12086 < len_12085)){
var mode_12088 = (path_12084[i_12086]);
var key_12089 = (path_12084[(i_12086 + (1))]);
var next_obj_12090 = oops.core.get_key_dynamically.call(null,obj_12087,key_12089,mode_12088);
var G__12094 = mode_12088;
switch (G__12094) {
case (0):
var G__12114 = (i_12086 + (2));
var G__12115 = next_obj_12090;
i_12086 = G__12114;
obj_12087 = G__12115;
continue;

break;
case (1):
if(!((next_obj_12090 == null))){
var G__12116 = (i_12086 + (2));
var G__12117 = next_obj_12090;
i_12086 = G__12116;
obj_12087 = G__12117;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12090 == null))){
var G__12118 = (i_12086 + (2));
var G__12119 = next_obj_12090;
i_12086 = G__12118;
obj_12087 = G__12119;
continue;
} else {
var G__12120 = (i_12086 + (2));
var G__12121 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12087,key_12089);
i_12086 = G__12120;
obj_12087 = G__12121;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12094)].join('')));

}
} else {
return obj_12087;
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_12136 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_12136,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_12123 = (function (){var path_12122 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_12122,(1));

return path_12122;
})();
var len_12126 = path_12123.length;
var parent_obj_path_12127 = path_12123.slice((0),(len_12126 - (2)));
var key_12124 = (path_12123[(len_12126 - (1))]);
var mode_12125 = (path_12123[(len_12126 - (2))]);
var parent_obj_12128 = (function (){var path_12129 = parent_obj_path_12127;
var len_12130 = path_12129.length;
var i_12131 = (0);
var obj_12132 = obj;
while(true){
if((i_12131 < len_12130)){
var mode_12133 = (path_12129[i_12131]);
var key_12134 = (path_12129[(i_12131 + (1))]);
var next_obj_12135 = oops.core.get_key_dynamically.call(null,obj_12132,key_12134,mode_12133);
var G__12137 = mode_12133;
switch (G__12137) {
case (0):
var G__12139 = (i_12131 + (2));
var G__12140 = next_obj_12135;
i_12131 = G__12139;
obj_12132 = G__12140;
continue;

break;
case (1):
if(!((next_obj_12135 == null))){
var G__12141 = (i_12131 + (2));
var G__12142 = next_obj_12135;
i_12131 = G__12141;
obj_12132 = G__12142;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_12135 == null))){
var G__12143 = (i_12131 + (2));
var G__12144 = next_obj_12135;
i_12131 = G__12143;
obj_12132 = G__12144;
continue;
} else {
var G__12145 = (i_12131 + (2));
var G__12146 = oops.core.punch_key_dynamically_BANG_.call(null,obj_12132,key_12134);
i_12131 = G__12145;
obj_12132 = G__12146;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12137)].join('')));

}
} else {
return obj_12132;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_12128,key_12124,val,mode_12125);
} else {
return null;
}
});
