(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),a=r(6330),i=n.TypeError;t.exports=function(t){if(o(t))return t;throw i(a(t)+" is not a function")}},6077:(t,e,r)=>{var n=r(7854),o=r(614),a=n.String,i=n.TypeError;t.exports=function(t){if("object"==typeof t||o(t))return t;throw i("Can't set "+a(t)+" as a prototype")}},1223:(t,e,r)=>{var n=r(5112),o=r(30),a=r(3070),i=n("unscopables"),u=Array.prototype;void 0==u[i]&&a.f(u,i,{configurable:!0,value:o(null)}),t.exports=function(t){u[i][t]=!0}},1530:(t,e,r)=>{"use strict";var n=r(8710).charAt;t.exports=function(t,e,r){return e+(r?n(t,e).length:1)}},9670:(t,e,r)=>{var n=r(7854),o=r(111),a=n.String,i=n.TypeError;t.exports=function(t){if(o(t))return t;throw i(a(t)+" is not an object")}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),a=r(6244),i=function(t){return function(e,r,i){var u,s=n(e),c=a(s),p=o(i,c);if(t&&r!=r){for(;c>p;)if((u=s[p++])!=u)return!0}else for(;c>p;p++)if((t||p in s)&&s[p]===r)return t||p||0;return!t&&-1}};t.exports={includes:i(!0),indexOf:i(!1)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),a=n("".slice);t.exports=function(t){return a(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),a=r(614),i=r(4326),u=r(5112)("toStringTag"),s=n.Object,c="Arguments"==i(function(){return arguments}());t.exports=o?i:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=s(t),u))?r:c?i(e):"Object"==(n=i(e))&&a(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),a=r(1236),i=r(3070);t.exports=function(t,e){for(var r=o(e),u=i.f,s=a.f,c=0;c<r.length;c++){var p=r[c];n(t,p)||u(t,p,s(e,p))}}},8544:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},4994:(t,e,r)=>{"use strict";var n=r(3383).IteratorPrototype,o=r(30),a=r(9114),i=r(8003),u=r(7497),s=function(){return this};t.exports=function(t,e,r){var c=e+" Iterator";return t.prototype=o(n,{next:a(1,r)}),i(t,c,!1,!0),u[c]=s,t}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),a=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,a(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},654:(t,e,r)=>{"use strict";var n=r(2109),o=r(6916),a=r(1913),i=r(6530),u=r(614),s=r(4994),c=r(9518),p=r(7674),l=r(8003),f=r(8880),v=r(1320),d=r(5112),g=r(7497),y=r(3383),h=i.PROPER,m=i.CONFIGURABLE,x=y.IteratorPrototype,b=y.BUGGY_SAFARI_ITERATORS,S=d("iterator"),O="keys",w="values",E="entries",j=function(){return this};t.exports=function(t,e,r,i,d,y,P){s(r,e,i);var T,L,A,k=function(t){if(t===d&&_)return _;if(!b&&t in I)return I[t];switch(t){case O:case w:case E:return function(){return new r(this,t)}}return function(){return new r(this)}},R=e+" Iterator",C=!1,I=t.prototype,M=I[S]||I["@@iterator"]||d&&I[d],_=!b&&M||k(d),N="Array"==e&&I.entries||M;if(N&&(T=c(N.call(new t)))!==Object.prototype&&T.next&&(a||c(T)===x||(p?p(T,x):u(T[S])||v(T,S,j)),l(T,R,!0,!0),a&&(g[R]=j)),h&&d==w&&M&&M.name!==w&&(!a&&m?f(I,"name",w):(C=!0,_=function(){return o(M,this)})),d)if(L={values:k(w),keys:y?_:k(O),entries:k(E)},P)for(A in L)(b||C||!(A in I))&&v(I,A,L[A]);else n({target:e,proto:!0,forced:b||C},L);return a&&!P||I[S]===_||v(I,S,_,{name:d}),g[e]=_,L}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),a=n.document,i=o(a)&&o(a.createElement);t.exports=function(t){return i?a.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,a=r(7854),i=r(8113),u=a.process,s=a.Deno,c=u&&u.versions||s&&s.version,p=c&&c.v8;p&&(o=(n=p.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&i&&(!(n=i.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=i.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,a=r(8880),i=r(1320),u=r(3505),s=r(9920),c=r(4705);t.exports=function(t,e){var r,p,l,f,v,d=t.target,g=t.global,y=t.stat;if(r=g?n:y?n[d]||u(d,{}):(n[d]||{}).prototype)for(p in e){if(f=e[p],l=t.noTargetGet?(v=o(r,p))&&v.value:r[p],!c(g?p:d+(y?".":"#")+p,t.forced)&&void 0!==l){if(typeof f==typeof l)continue;s(f,l)}(t.sham||l&&l.sham)&&a(f,"sham",!0),i(r,p,f,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},7007:(t,e,r)=>{"use strict";r(4916);var n=r(1702),o=r(1320),a=r(2261),i=r(7293),u=r(5112),s=r(8880),c=u("species"),p=RegExp.prototype;t.exports=function(t,e,r,l){var f=u(t),v=!i((function(){var e={};return e[f]=function(){return 7},7!=""[t](e)})),d=v&&!i((function(){var e=!1,r=/a/;return"split"===t&&((r={}).constructor={},r.constructor[c]=function(){return r},r.flags="",r[f]=/./[f]),r.exec=function(){return e=!0,null},r[f](""),!e}));if(!v||!d||r){var g=n(/./[f]),y=e(f,""[t],(function(t,e,r,o,i){var u=n(t),s=e.exec;return s===a||s===p.exec?v&&!i?{done:!0,value:g(e,r,o)}:{done:!0,value:u(r,e,o)}:{done:!1}}));o(String.prototype,t,y[0]),o(p,f,y[1])}l&&s(p[f],"sham",!0)}},2104:t=>{var e=Function.prototype,r=e.apply,n=e.bind,o=e.call;t.exports="object"==typeof Reflect&&Reflect.apply||(n?o.bind(r):function(){return o.apply(r,arguments)})},6916:t=>{var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),a=Function.prototype,i=n&&Object.getOwnPropertyDescriptor,u=o(a,"name"),s=u&&"something"===function(){}.name,c=u&&(!n||n&&i(a,"name").configurable);t.exports={EXISTS:u,PROPER:s,CONFIGURABLE:c}},1702:t=>{var e=Function.prototype,r=e.bind,n=e.call,o=r&&r.bind(n);t.exports=r?function(t){return t&&o(n,t)}:function(t){return t&&function(){return n.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),a=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?a(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},647:(t,e,r)=>{var n=r(1702),o=r(7908),a=Math.floor,i=n("".charAt),u=n("".replace),s=n("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,p=/\$([$&'`]|\d{1,2})/g;t.exports=function(t,e,r,n,l,f){var v=r+t.length,d=n.length,g=p;return void 0!==l&&(l=o(l),g=c),u(f,g,(function(o,u){var c;switch(i(u,0)){case"$":return"$";case"&":return t;case"`":return s(e,0,r);case"'":return s(e,v);case"<":c=l[s(u,1,-1)];break;default:var p=+u;if(0===p)return o;if(p>d){var f=a(p/10);return 0===f?o:f<=d?void 0===n[f-1]?i(u,1):n[f-1]+i(u,1):o}c=n[p-1]}return void 0===c?"":c}))}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),a=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return a(o(t),e)}},3501:t=>{t.exports={}},490:(t,e,r)=>{var n=r(5005);t.exports=n("document","documentElement")},4664:(t,e,r)=>{var n=r(9781),o=r(7293),a=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(a("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),a=r(7293),i=r(4326),u=n.Object,s=o("".split);t.exports=a((function(){return!u("z").propertyIsEnumerable(0)}))?function(t){return"String"==i(t)?s(t,""):u(t)}:u},2788:(t,e,r)=>{var n=r(1702),o=r(614),a=r(5465),i=n(Function.toString);o(a.inspectSource)||(a.inspectSource=function(t){return i(t)}),t.exports=a.inspectSource},9909:(t,e,r)=>{var n,o,a,i=r(8536),u=r(7854),s=r(1702),c=r(111),p=r(8880),l=r(2597),f=r(5465),v=r(6200),d=r(3501),g="Object already initialized",y=u.TypeError,h=u.WeakMap;if(i||f.state){var m=f.state||(f.state=new h),x=s(m.get),b=s(m.has),S=s(m.set);n=function(t,e){if(b(m,t))throw new y(g);return e.facade=t,S(m,t,e),e},o=function(t){return x(m,t)||{}},a=function(t){return b(m,t)}}else{var O=v("state");d[O]=!0,n=function(t,e){if(l(t,O))throw new y(g);return e.facade=t,p(t,O,e),e},o=function(t){return l(t,O)?t[O]:{}},a=function(t){return l(t,O)}}t.exports={set:n,get:o,has:a,enforce:function(t){return a(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!c(e)||(r=o(e)).type!==t)throw y("Incompatible receiver, "+t+" required");return r}}}},614:t=>{t.exports=function(t){return"function"==typeof t}},4705:(t,e,r)=>{var n=r(7293),o=r(614),a=/#|\.prototype\./,i=function(t,e){var r=s[u(t)];return r==p||r!=c&&(o(e)?n(e):!!e)},u=i.normalize=function(t){return String(t).replace(a,".").toLowerCase()},s=i.data={},c=i.NATIVE="N",p=i.POLYFILL="P";t.exports=i},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),a=r(614),i=r(7976),u=r(3307),s=n.Object;t.exports=u?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return a(e)&&i(e.prototype,s(t))}},3383:(t,e,r)=>{"use strict";var n,o,a,i=r(7293),u=r(614),s=r(30),c=r(9518),p=r(1320),l=r(5112),f=r(1913),v=l("iterator"),d=!1;[].keys&&("next"in(a=[].keys())?(o=c(c(a)))!==Object.prototype&&(n=o):d=!0),void 0==n||i((function(){var t={};return n[v].call(t)!==t}))?n={}:f&&(n=s(n)),u(n[v])||p(n,v,(function(){return this})),t.exports={IteratorPrototype:n,BUGGY_SAFARI_ITERATORS:d}},7497:t=>{t.exports={}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),a=r(2788),i=n.WeakMap;t.exports=o(i)&&/native code/.test(a(i))},30:(t,e,r)=>{var n,o=r(9670),a=r(6048),i=r(748),u=r(3501),s=r(490),c=r(317),p=r(6200),l=p("IE_PROTO"),f=function(){},v=function(t){return"<script>"+t+"</"+"script>"},d=function(t){t.write(v("")),t.close();var e=t.parentWindow.Object;return t=null,e},g=function(){try{n=new ActiveXObject("htmlfile")}catch(t){}var t,e;g="undefined"!=typeof document?document.domain&&n?d(n):((e=c("iframe")).style.display="none",s.appendChild(e),e.src=String("javascript:"),(t=e.contentWindow.document).open(),t.write(v("document.F=Object")),t.close(),t.F):d(n);for(var r=i.length;r--;)delete g.prototype[i[r]];return g()};u[l]=!0,t.exports=Object.create||function(t,e){var r;return null!==t?(f.prototype=o(t),r=new f,f.prototype=null,r[l]=t):r=g(),void 0===e?r:a(r,e)}},6048:(t,e,r)=>{var n=r(9781),o=r(3070),a=r(9670),i=r(5656),u=r(1956);t.exports=n?Object.defineProperties:function(t,e){a(t);for(var r,n=i(e),s=u(e),c=s.length,p=0;c>p;)o.f(t,r=s[p++],n[r]);return t}},3070:(t,e,r)=>{var n=r(7854),o=r(9781),a=r(4664),i=r(9670),u=r(4948),s=n.TypeError,c=Object.defineProperty;e.f=o?c:function(t,e,r){if(i(t),e=u(e),i(r),a)try{return c(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),a=r(5296),i=r(9114),u=r(5656),s=r(4948),c=r(2597),p=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=u(t),e=s(e),p)try{return l(t,e)}catch(t){}if(c(t,e))return i(!o(a.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},9518:(t,e,r)=>{var n=r(7854),o=r(2597),a=r(614),i=r(7908),u=r(6200),s=r(8544),c=u("IE_PROTO"),p=n.Object,l=p.prototype;t.exports=s?p.getPrototypeOf:function(t){var e=i(t);if(o(e,c))return e[c];var r=e.constructor;return a(r)&&e instanceof r?r.prototype:e instanceof p?l:null}},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),a=r(5656),i=r(1318).indexOf,u=r(3501),s=n([].push);t.exports=function(t,e){var r,n=a(t),c=0,p=[];for(r in n)!o(u,r)&&o(n,r)&&s(p,r);for(;e.length>c;)o(n,r=e[c++])&&(~i(p,r)||s(p,r));return p}},1956:(t,e,r)=>{var n=r(6324),o=r(748);t.exports=Object.keys||function(t){return n(t,o)}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},7674:(t,e,r)=>{var n=r(1702),o=r(9670),a=r(6077);t.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var t,e=!1,r={};try{(t=n(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set))(r,[]),e=r instanceof Array}catch(t){}return function(r,n){return o(r),a(n),e?t(r,n):r.__proto__=n,r}}():void 0)},2140:(t,e,r)=>{var n=r(7854),o=r(6916),a=r(614),i=r(111),u=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&a(r=t.toString)&&!i(n=o(r,t)))return n;if(a(r=t.valueOf)&&!i(n=o(r,t)))return n;if("string"!==e&&a(r=t.toString)&&!i(n=o(r,t)))return n;throw u("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),a=r(8006),i=r(5181),u=r(9670),s=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=a.f(u(t)),r=i.f;return r?s(e,r(t)):e}},1320:(t,e,r)=>{var n=r(7854),o=r(614),a=r(2597),i=r(8880),u=r(3505),s=r(2788),c=r(9909),p=r(6530).CONFIGURABLE,l=c.get,f=c.enforce,v=String(String).split("String");(t.exports=function(t,e,r,s){var c,l=!!s&&!!s.unsafe,d=!!s&&!!s.enumerable,g=!!s&&!!s.noTargetGet,y=s&&void 0!==s.name?s.name:e;o(r)&&("Symbol("===String(y).slice(0,7)&&(y="["+String(y).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!a(r,"name")||p&&r.name!==y)&&i(r,"name",y),(c=f(r)).source||(c.source=v.join("string"==typeof y?y:""))),t!==n?(l?!g&&t[e]&&(d=!0):delete t[e],d?t[e]=r:i(t,e,r)):d?t[e]=r:u(e,r)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||s(this)}))},7651:(t,e,r)=>{var n=r(7854),o=r(6916),a=r(9670),i=r(614),u=r(4326),s=r(2261),c=n.TypeError;t.exports=function(t,e){var r=t.exec;if(i(r)){var n=o(r,t,e);return null!==n&&a(n),n}if("RegExp"===u(t))return o(s,t,e);throw c("RegExp#exec called on incompatible receiver")}},2261:(t,e,r)=>{"use strict";var n,o,a=r(6916),i=r(1702),u=r(1340),s=r(7066),c=r(2999),p=r(2309),l=r(30),f=r(9909).get,v=r(9441),d=r(7168),g=p("native-string-replace",String.prototype.replace),y=RegExp.prototype.exec,h=y,m=i("".charAt),x=i("".indexOf),b=i("".replace),S=i("".slice),O=(o=/b*/g,a(y,n=/a/,"a"),a(y,o,"a"),0!==n.lastIndex||0!==o.lastIndex),w=c.UNSUPPORTED_Y||c.BROKEN_CARET,E=void 0!==/()??/.exec("")[1];(O||E||w||v||d)&&(h=function(t){var e,r,n,o,i,c,p,v=this,d=f(v),j=u(t),P=d.raw;if(P)return P.lastIndex=v.lastIndex,e=a(h,P,j),v.lastIndex=P.lastIndex,e;var T=d.groups,L=w&&v.sticky,A=a(s,v),k=v.source,R=0,C=j;if(L&&(A=b(A,"y",""),-1===x(A,"g")&&(A+="g"),C=S(j,v.lastIndex),v.lastIndex>0&&(!v.multiline||v.multiline&&"\n"!==m(j,v.lastIndex-1))&&(k="(?: "+k+")",C=" "+C,R++),r=new RegExp("^(?:"+k+")",A)),E&&(r=new RegExp("^"+k+"$(?!\\s)",A)),O&&(n=v.lastIndex),o=a(y,L?r:v,C),L?o?(o.input=S(o.input,R),o[0]=S(o[0],R),o.index=v.lastIndex,v.lastIndex+=o[0].length):v.lastIndex=0:O&&o&&(v.lastIndex=v.global?o.index+o[0].length:n),E&&o&&o.length>1&&a(g,o[0],r,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(o[i]=void 0)})),o&&T)for(o.groups=c=l(null),i=0;i<T.length;i++)c[(p=T[i])[0]]=o[p[1]];return o}),t.exports=h},7066:(t,e,r)=>{"use strict";var n=r(9670);t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},2999:(t,e,r)=>{var n=r(7293),o=r(7854).RegExp;e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},9441:(t,e,r)=>{var n=r(7293),o=r(7854).RegExp;t.exports=n((function(){var t=o(".","s");return!(t.dotAll&&t.exec("\n")&&"s"===t.flags)}))},7168:(t,e,r)=>{var n=r(7293),o=r(7854).RegExp;t.exports=n((function(){var t=o("(?<a>b)","g");return"b"!==t.exec("b").groups.a||"bc"!=="b".replace(t,"$<a>c")}))},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(void 0==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},8003:(t,e,r)=>{var n=r(3070).f,o=r(2597),a=r(5112)("toStringTag");t.exports=function(t,e,r){t&&!o(t=r?t:t.prototype,a)&&n(t,a,{configurable:!0,value:e})}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),a=n("keys");t.exports=function(t){return a[t]||(a[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),a="__core-js_shared__",i=n[a]||o(a,{});t.exports=i},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:n?"pure":"global",copyright:"\xa9 2021 Denis Pushkarev (zloirock.ru)"})},8710:(t,e,r)=>{var n=r(1702),o=r(9303),a=r(1340),i=r(4488),u=n("".charAt),s=n("".charCodeAt),c=n("".slice),p=function(t){return function(e,r){var n,p,l=a(i(e)),f=o(r),v=l.length;return f<0||f>=v?t?"":void 0:(n=s(l,f))<55296||n>56319||f+1===v||(p=s(l,f+1))<56320||p>57343?t?u(l,f):n:t?c(l,f,f+2):p-56320+(n-55296<<10)+65536}};t.exports={codeAt:p(!1),charAt:p(!0)}},1400:(t,e,r)=>{var n=r(9303),o=Math.max,a=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):a(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!==n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),a=n.Object;t.exports=function(t){return a(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),a=r(111),i=r(2190),u=r(8173),s=r(2140),c=r(5112),p=n.TypeError,l=c("toPrimitive");t.exports=function(t,e){if(!a(t)||i(t))return t;var r,n=u(t,l);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!a(r)||i(r))return r;throw p("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(7854),o=r(648),a=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return a(t)}},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,a=Math.random(),i=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+i(++o+a,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),a=r(2597),i=r(9711),u=r(133),s=r(3307),c=o("wks"),p=n.Symbol,l=p&&p.for,f=s?p:p&&p.withoutSetter||i;t.exports=function(t){if(!a(c,t)||!u&&"string"!=typeof c[t]){var e="Symbol."+t;u&&a(p,t)?c[t]=p[t]:c[t]=s&&l?l(e):f(e)}return c[t]}},6992:(t,e,r)=>{"use strict";var n=r(5656),o=r(1223),a=r(7497),i=r(9909),u=r(654),s="Array Iterator",c=i.set,p=i.getterFor(s);t.exports=u(Array,"Array",(function(t,e){c(this,{type:s,target:n(t),index:0,kind:e})}),(function(){var t=p(this),e=t.target,r=t.kind,n=t.index++;return!e||n>=e.length?(t.target=void 0,{value:void 0,done:!0}):"keys"==r?{value:n,done:!1}:"values"==r?{value:e[n],done:!1}:{value:[n,e[n]],done:!1}}),"values"),a.Arguments=a.Array,o("keys"),o("values"),o("entries")},4916:(t,e,r)=>{"use strict";var n=r(2109),o=r(2261);n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},5306:(t,e,r)=>{"use strict";var n=r(2104),o=r(6916),a=r(1702),i=r(7007),u=r(7293),s=r(9670),c=r(614),p=r(9303),l=r(7466),f=r(1340),v=r(4488),d=r(1530),g=r(8173),y=r(647),h=r(7651),m=r(5112)("replace"),x=Math.max,b=Math.min,S=a([].concat),O=a([].push),w=a("".indexOf),E=a("".slice),j="$0"==="a".replace(/./,"$0"),P=!!/./[m]&&""===/./[m]("a","$0");i("replace",(function(t,e,r){var a=P?"$":"$0";return[function(t,r){var n=v(this),a=void 0==t?void 0:g(t,m);return a?o(a,t,n,r):o(e,f(n),t,r)},function(t,o){var i=s(this),u=f(t);if("string"==typeof o&&-1===w(o,a)&&-1===w(o,"$<")){var v=r(e,i,u,o);if(v.done)return v.value}var g=c(o);g||(o=f(o));var m=i.global;if(m){var j=i.unicode;i.lastIndex=0}for(var P=[];;){var T=h(i,u);if(null===T)break;if(O(P,T),!m)break;""===f(T[0])&&(i.lastIndex=d(u,l(i.lastIndex),j))}for(var L,A="",k=0,R=0;R<P.length;R++){for(var C=f((T=P[R])[0]),I=x(b(p(T.index),u.length),0),M=[],_=1;_<T.length;_++)O(M,void 0===(L=T[_])?L:String(L));var N=T.groups;if(g){var F=S([C],M,I,u);void 0!==N&&O(F,N);var D=f(n(o,void 0,F))}else D=y(C,u,I,M,N,o);I>=k&&(A+=E(u,k,I)+D,k=I+C.length)}return A+E(u,k)}]}),!!u((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")}))||!j||P)},3948:(t,e,r)=>{var n=r(7854),o=r(8324),a=r(8509),i=r(6992),u=r(8880),s=r(5112),c=s("iterator"),p=s("toStringTag"),l=i.values,f=function(t,e){if(t){if(t[c]!==l)try{u(t,c,l)}catch(e){t[c]=l}if(t[p]||u(t,p,e),o[e])for(var r in i)if(t[r]!==i[r])try{u(t,r,i[r])}catch(e){t[r]=i[r]}}};for(var v in o)f(n[v]&&n[v].prototype,v);f(a,"DOMTokenList")}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var a=e[n]={exports:{}};return t[n](a,a.exports,r),a.exports}r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}(),(()=>{"use strict";const t=Symbol("Comlink.proxy"),e=Symbol("Comlink.endpoint"),n=Symbol("Comlink.releaseProxy"),o=Symbol("Comlink.thrown"),a=t=>"object"===typeof t&&null!==t||"function"===typeof t,i=new Map([["proxy",{canHandle:e=>a(e)&&e[t],serialize(t){const{port1:e,port2:r}=new MessageChannel;return u(t,e),[r,[r]]},deserialize(t){return t.start(),p(t,[],e);var e}}],["throw",{canHandle:t=>a(t)&&o in t,serialize({value:t}){let e;return e=t instanceof Error?{isError:!0,value:{message:t.message,name:t.name,stack:t.stack}}:{isError:!1,value:t},[e,[]]},deserialize(t){if(t.isError)throw Object.assign(new Error(t.value.message),t.value);throw t.value}}]]);function u(e,r=self){r.addEventListener("message",(function n(a){if(!a||!a.data)return;const{id:i,type:c,path:p}=Object.assign({path:[]},a.data),l=(a.data.argumentList||[]).map(d);let g;try{const r=p.slice(0,-1).reduce(((t,e)=>t[e]),e),n=p.reduce(((t,e)=>t[e]),e);switch(c){case"GET":g=n;break;case"SET":r[p.slice(-1)[0]]=d(a.data.value),g=!0;break;case"APPLY":g=n.apply(r,l);break;case"CONSTRUCT":g=function(e){return Object.assign(e,{[t]:!0})}(new n(...l));break;case"ENDPOINT":{const{port1:t,port2:r}=new MessageChannel;u(e,r),g=function(t,e){return f.set(t,e),t}(t,[t])}break;case"RELEASE":g=void 0;break;default:return}}catch(t){g={value:t,[o]:0}}Promise.resolve(g).catch((t=>({value:t,[o]:0}))).then((t=>{const[e,o]=v(t);r.postMessage(Object.assign(Object.assign({},e),{id:i}),o),"RELEASE"===c&&(r.removeEventListener("message",n),s(r))}))})),r.start&&r.start()}function s(t){(function(t){return"MessagePort"===t.constructor.name})(t)&&t.close()}function c(t){if(t)throw new Error("Proxy has been released and is not useable")}function p(t,r=[],o=function(){}){let a=!1;const i=new Proxy(o,{get(e,o){if(c(a),o===n)return()=>g(t,{type:"RELEASE",path:r.map((t=>t.toString()))}).then((()=>{s(t),a=!0}));if("then"===o){if(0===r.length)return{then:()=>i};const e=g(t,{type:"GET",path:r.map((t=>t.toString()))}).then(d);return e.then.bind(e)}return p(t,[...r,o])},set(e,n,o){c(a);const[i,u]=v(o);return g(t,{type:"SET",path:[...r,n].map((t=>t.toString())),value:i},u).then(d)},apply(n,o,i){c(a);const u=r[r.length-1];if(u===e)return g(t,{type:"ENDPOINT"}).then(d);if("bind"===u)return p(t,r.slice(0,-1));const[s,f]=l(i);return g(t,{type:"APPLY",path:r.map((t=>t.toString())),argumentList:s},f).then(d)},construct(e,n){c(a);const[o,i]=l(n);return g(t,{type:"CONSTRUCT",path:r.map((t=>t.toString())),argumentList:o},i).then(d)}});return i}function l(t){const e=t.map(v);return[e.map((t=>t[0])),(r=e.map((t=>t[1])),Array.prototype.concat.apply([],r))];var r}const f=new WeakMap;function v(t){for(const[e,r]of i)if(r.canHandle(t)){const[n,o]=r.serialize(t);return[{type:"HANDLER",name:e,value:n},o]}return[{type:"RAW",value:t},f.get(t)||[]]}function d(t){switch(t.type){case"HANDLER":return i.get(t.name).deserialize(t.value);case"RAW":return t.value}}function g(t,e,r){return new Promise((n=>{const o=new Array(4).fill(0).map((()=>Math.floor(Math.random()*Number.MAX_SAFE_INTEGER).toString(16))).join("-");t.addEventListener("message",(function e(r){r.data&&r.data.id&&r.data.id===o&&(t.removeEventListener("message",e),n(r.data))})),t.start&&t.start(),t.postMessage(Object.assign({id:o},e),r)}))}r(5306),r(3948);const y={gmail:"Gmail",outlook:"Outlook",yahoo:"Yahoo! Mail","apple-mail":"Apple Mail",aol:"AOL",thunderbird:"Mozilla Thunderbird",microsoft:"Microsoft","samsung-email":"Samsung Email",sfr:"SFR",orange:"Orange",protonmail:"ProtonMail",hey:"HEY","mail-ru":"Mail.ru",fastmail:"Fastmail",laposte:"LaPoste.net","t-online-de":"T-online.de","free-fr":"Free.fr"},h={"desktop-app":"Desktop","desktop-webmail":"Desktop Webmail","mobile-webmail":"Mobile Webmail",webmail:"Webmail",ios:"iOS",android:"Android",windows:"Windows",macos:"macOS","windows-mail":"Windows Mail","outlook-com":"Outlook.com"},m=t=>{var e;return null!==(e=y[t])&&void 0!==e?e:t},x=t=>{var e;return null!==(e=h[t])&&void 0!==e?e:t},b=(t,e=2)=>Math.round((t+Number.EPSILON)*Math.pow(10,e))/Math.pow(10,e);u({clientsListWithStats:t=>{const e=Object.keys(t.stats).reduce(((e,r)=>(Object.keys(t.stats[r]).forEach((n=>{const o=Object.keys(t.stats[r][n]).length;Object.keys(t.stats[r][n]).forEach((a=>{const[i,...u]=t.stats[r][n][a],s={title:`${m(r)} ${x(n)}${o>1?`(${a})`:""}`,notes:u};e="y"===i?{...e,supported:[...e.supported,s],supportedCount:e.supportedCount+1}:"n"===i?{...e,unsupported:[...e.unsupported,s],unsupportedCount:e.unsupportedCount+1}:{...e,mitigated:[...e.mitigated,s],mitigatedCount:e.mitigatedCount+1}}))})),e)),{supported:[],supportedCount:0,mitigated:[],mitigatedCount:0,unsupported:[],unsupportedCount:0}),r=e.supportedCount+e.mitigatedCount+e.unsupportedCount;return{...e,supportedPercentage:b(100*e.supportedCount/r),mitigatedPercentage:b(100*e.mitigatedCount/r),unsupportedPercentage:b(100*e.unsupportedCount/r)}}})})()})();
//# sourceMappingURL=ww-a40371ee0ba4c517e745.js.map