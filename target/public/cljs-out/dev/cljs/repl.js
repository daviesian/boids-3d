// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18031){
var map__18032 = p__18031;
var map__18032__$1 = ((((!((map__18032 == null)))?(((((map__18032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18032):map__18032);
var m = map__18032__$1;
var n = cljs.core.get.call(null,map__18032__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18032__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18034_18056 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18035_18057 = null;
var count__18036_18058 = (0);
var i__18037_18059 = (0);
while(true){
if((i__18037_18059 < count__18036_18058)){
var f_18060 = cljs.core._nth.call(null,chunk__18035_18057,i__18037_18059);
cljs.core.println.call(null,"  ",f_18060);


var G__18061 = seq__18034_18056;
var G__18062 = chunk__18035_18057;
var G__18063 = count__18036_18058;
var G__18064 = (i__18037_18059 + (1));
seq__18034_18056 = G__18061;
chunk__18035_18057 = G__18062;
count__18036_18058 = G__18063;
i__18037_18059 = G__18064;
continue;
} else {
var temp__5457__auto___18065 = cljs.core.seq.call(null,seq__18034_18056);
if(temp__5457__auto___18065){
var seq__18034_18066__$1 = temp__5457__auto___18065;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18034_18066__$1)){
var c__4351__auto___18067 = cljs.core.chunk_first.call(null,seq__18034_18066__$1);
var G__18068 = cljs.core.chunk_rest.call(null,seq__18034_18066__$1);
var G__18069 = c__4351__auto___18067;
var G__18070 = cljs.core.count.call(null,c__4351__auto___18067);
var G__18071 = (0);
seq__18034_18056 = G__18068;
chunk__18035_18057 = G__18069;
count__18036_18058 = G__18070;
i__18037_18059 = G__18071;
continue;
} else {
var f_18072 = cljs.core.first.call(null,seq__18034_18066__$1);
cljs.core.println.call(null,"  ",f_18072);


var G__18073 = cljs.core.next.call(null,seq__18034_18066__$1);
var G__18074 = null;
var G__18075 = (0);
var G__18076 = (0);
seq__18034_18056 = G__18073;
chunk__18035_18057 = G__18074;
count__18036_18058 = G__18075;
i__18037_18059 = G__18076;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18077 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18077);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18077)))?cljs.core.second.call(null,arglists_18077):arglists_18077));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18038_18078 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18039_18079 = null;
var count__18040_18080 = (0);
var i__18041_18081 = (0);
while(true){
if((i__18041_18081 < count__18040_18080)){
var vec__18042_18082 = cljs.core._nth.call(null,chunk__18039_18079,i__18041_18081);
var name_18083 = cljs.core.nth.call(null,vec__18042_18082,(0),null);
var map__18045_18084 = cljs.core.nth.call(null,vec__18042_18082,(1),null);
var map__18045_18085__$1 = ((((!((map__18045_18084 == null)))?(((((map__18045_18084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18045_18084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18045_18084):map__18045_18084);
var doc_18086 = cljs.core.get.call(null,map__18045_18085__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18087 = cljs.core.get.call(null,map__18045_18085__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18083);

cljs.core.println.call(null," ",arglists_18087);

if(cljs.core.truth_(doc_18086)){
cljs.core.println.call(null," ",doc_18086);
} else {
}


var G__18088 = seq__18038_18078;
var G__18089 = chunk__18039_18079;
var G__18090 = count__18040_18080;
var G__18091 = (i__18041_18081 + (1));
seq__18038_18078 = G__18088;
chunk__18039_18079 = G__18089;
count__18040_18080 = G__18090;
i__18041_18081 = G__18091;
continue;
} else {
var temp__5457__auto___18092 = cljs.core.seq.call(null,seq__18038_18078);
if(temp__5457__auto___18092){
var seq__18038_18093__$1 = temp__5457__auto___18092;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18038_18093__$1)){
var c__4351__auto___18094 = cljs.core.chunk_first.call(null,seq__18038_18093__$1);
var G__18095 = cljs.core.chunk_rest.call(null,seq__18038_18093__$1);
var G__18096 = c__4351__auto___18094;
var G__18097 = cljs.core.count.call(null,c__4351__auto___18094);
var G__18098 = (0);
seq__18038_18078 = G__18095;
chunk__18039_18079 = G__18096;
count__18040_18080 = G__18097;
i__18041_18081 = G__18098;
continue;
} else {
var vec__18047_18099 = cljs.core.first.call(null,seq__18038_18093__$1);
var name_18100 = cljs.core.nth.call(null,vec__18047_18099,(0),null);
var map__18050_18101 = cljs.core.nth.call(null,vec__18047_18099,(1),null);
var map__18050_18102__$1 = ((((!((map__18050_18101 == null)))?(((((map__18050_18101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18050_18101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18050_18101):map__18050_18101);
var doc_18103 = cljs.core.get.call(null,map__18050_18102__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18104 = cljs.core.get.call(null,map__18050_18102__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18100);

cljs.core.println.call(null," ",arglists_18104);

if(cljs.core.truth_(doc_18103)){
cljs.core.println.call(null," ",doc_18103);
} else {
}


var G__18105 = cljs.core.next.call(null,seq__18038_18093__$1);
var G__18106 = null;
var G__18107 = (0);
var G__18108 = (0);
seq__18038_18078 = G__18105;
chunk__18039_18079 = G__18106;
count__18040_18080 = G__18107;
i__18041_18081 = G__18108;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__18052 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18053 = null;
var count__18054 = (0);
var i__18055 = (0);
while(true){
if((i__18055 < count__18054)){
var role = cljs.core._nth.call(null,chunk__18053,i__18055);
var temp__5457__auto___18109__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18109__$1)){
var spec_18110 = temp__5457__auto___18109__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18110));
} else {
}


var G__18111 = seq__18052;
var G__18112 = chunk__18053;
var G__18113 = count__18054;
var G__18114 = (i__18055 + (1));
seq__18052 = G__18111;
chunk__18053 = G__18112;
count__18054 = G__18113;
i__18055 = G__18114;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__18052);
if(temp__5457__auto____$1){
var seq__18052__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18052__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__18052__$1);
var G__18115 = cljs.core.chunk_rest.call(null,seq__18052__$1);
var G__18116 = c__4351__auto__;
var G__18117 = cljs.core.count.call(null,c__4351__auto__);
var G__18118 = (0);
seq__18052 = G__18115;
chunk__18053 = G__18116;
count__18054 = G__18117;
i__18055 = G__18118;
continue;
} else {
var role = cljs.core.first.call(null,seq__18052__$1);
var temp__5457__auto___18119__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___18119__$2)){
var spec_18120 = temp__5457__auto___18119__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18120));
} else {
}


var G__18121 = cljs.core.next.call(null,seq__18052__$1);
var G__18122 = null;
var G__18123 = (0);
var G__18124 = (0);
seq__18052 = G__18121;
chunk__18053 = G__18122;
count__18054 = G__18123;
i__18055 = G__18124;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
