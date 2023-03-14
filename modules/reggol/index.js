var zt=Object.create;var ct=Object.defineProperty;var Ft=Object.getOwnPropertyDescriptor;var Ut=Object.getOwnPropertyNames;var Vt=Object.getPrototypeOf,Jt=Object.prototype.hasOwnProperty;var Ht=(t,e)=>()=>(t&&(e=t(t=0)),e);var U=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var bt=(t,e,o,l)=>{if(e&&typeof e=="object"||typeof e=="function")for(let c of Ut(e))!Jt.call(t,c)&&c!==o&&ct(t,c,{get:()=>e[c],enumerable:!(l=Ft(e,c))||l.enumerable});return t};var ft=(t,e,o)=>(o=t!=null?zt(Vt(t)):{},bt(e||!t||!t.__esModule?ct(o,"default",{value:t,enumerable:!0}):o,t));import{Buffer as I}from"https://registry.koishi.chat/modules/buffer/index.js";import R from"https://registry.koishi.chat/modules/process/index.js";var g=Ht(()=>{});var ut=U(()=>{g()});var Rt=U((xe,It)=>{g();var Y=typeof Map=="function"&&Map.prototype,V=Object.getOwnPropertyDescriptor&&Y?Object.getOwnPropertyDescriptor(Map.prototype,"size"):null,D=Y&&V&&typeof V.get=="function"?V.get:null,st=Y&&Map.prototype.forEach,j=typeof Set=="function"&&Set.prototype,J=Object.getOwnPropertyDescriptor&&j?Object.getOwnPropertyDescriptor(Set.prototype,"size"):null,P=j&&J&&typeof J.get=="function"?J.get:null,pt=j&&Set.prototype.forEach,Gt=typeof WeakMap=="function"&&WeakMap.prototype,C=Gt?WeakMap.prototype.has:null,Kt=typeof WeakSet=="function"&&WeakSet.prototype,q=Kt?WeakSet.prototype.has:null,Qt=typeof WeakRef=="function"&&WeakRef.prototype,yt=Qt?WeakRef.prototype.deref:null,Zt=Boolean.prototype.valueOf,Xt=Object.prototype.toString,Yt=Function.prototype.toString,jt=String.prototype.match,tt=String.prototype.slice,E=String.prototype.replace,te=String.prototype.toUpperCase,ht=String.prototype.toLowerCase,Et=RegExp.prototype.test,gt=Array.prototype.concat,v=Array.prototype.join,ee=Array.prototype.slice,mt=Math.floor,G=typeof BigInt=="function"?BigInt.prototype.valueOf:null,H=Object.getOwnPropertySymbols,K=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?Symbol.prototype.toString:null,A=typeof Symbol=="function"&&typeof Symbol.iterator=="object",y=typeof Symbol=="function"&&Symbol.toStringTag&&(typeof Symbol.toStringTag===A||"symbol")?Symbol.toStringTag:null,Mt=Object.prototype.propertyIsEnumerable,vt=(typeof Reflect=="function"?Reflect.getPrototypeOf:Object.getPrototypeOf)||([].__proto__===Array.prototype?function(t){return t.__proto__}:null);function St(t,e){if(t===1/0||t===-1/0||t!==t||t&&t>-1e3&&t<1e3||Et.call(/e/,e))return e;var o=/[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;if(typeof t=="number"){var l=t<0?-mt(-t):mt(t);if(l!==t){var c=String(l),r=tt.call(e,c.length+1);return E.call(c,o,"$&_")+"."+E.call(E.call(r,/([0-9]{3})/g,"$&_"),/_$/,"")}}return E.call(e,o,"$&_")}var Q=ut(),dt=Q.custom,Ot=Wt(dt)?dt:null;It.exports=function t(e,o,l,c){var r=o||{};if(_(r,"quoteStyle")&&r.quoteStyle!=="single"&&r.quoteStyle!=="double")throw new TypeError('option "quoteStyle" must be "single" or "double"');if(_(r,"maxStringLength")&&(typeof r.maxStringLength=="number"?r.maxStringLength<0&&r.maxStringLength!==1/0:r.maxStringLength!==null))throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');var f=_(r,"customInspect")?r.customInspect:!0;if(typeof f!="boolean"&&f!=="symbol")throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");if(_(r,"indent")&&r.indent!==null&&r.indent!=="	"&&!(parseInt(r.indent,10)===r.indent&&r.indent>0))throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');if(_(r,"numericSeparator")&&typeof r.numericSeparator!="boolean")throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');var n=r.numericSeparator;if(typeof e>"u")return"undefined";if(e===null)return"null";if(typeof e=="boolean")return e?"true":"false";if(typeof e=="string")return At(e,r);if(typeof e=="number"){if(e===0)return 1/0/e>0?"0":"-0";var a=String(e);return n?St(e,a):a}if(typeof e=="bigint"){var i=String(e)+"n";return n?St(e,i):i}var s=typeof r.depth>"u"?5:r.depth;if(typeof l>"u"&&(l=0),l>=s&&s>0&&typeof e=="object")return Z(e)?"[Array]":"[Object]";var p=de(r,l);if(typeof c>"u")c=[];else if(Nt(c,e)>=0)return"[Circular]";function u(N,T,kt){if(T&&(c=ee.call(c),c.push(T)),kt){var lt={depth:r.depth};return _(r,"quoteStyle")&&(lt.quoteStyle=r.quoteStyle),t(N,lt,l+1,c)}return t(N,r,l+1,c)}if(typeof e=="function"&&!wt(e)){var h=ue(e),O=x(e,u);return"[Function"+(h?": "+h:" (anonymous)")+"]"+(O.length>0?" { "+v.call(O,", ")+" }":"")}if(Wt(e)){var S=A?E.call(String(e),/^(Symbol\(.*\))_[^)]*$/,"$1"):K.call(e);return typeof e=="object"&&!A?L(S):S}if(me(e)){for(var d="<"+ht.call(String(e.nodeName)),W=e.attributes||[],$=0;$<W.length;$++)d+=" "+W[$].name+"="+$t(re(W[$].value),"double",r);return d+=">",e.childNodes&&e.childNodes.length&&(d+="..."),d+="</"+ht.call(String(e.nodeName))+">",d}if(Z(e)){if(e.length===0)return"[]";var w=x(e,u);return p&&!Se(w)?"["+X(w,p)+"]":"[ "+v.call(w,", ")+" ]"}if(oe(e)){var B=x(e,u);return!("cause"in Error.prototype)&&"cause"in e&&!Mt.call(e,"cause")?"{ ["+String(e)+"] "+v.call(gt.call("[cause]: "+u(e.cause),B),", ")+" }":B.length===0?"["+String(e)+"]":"{ ["+String(e)+"] "+v.call(B,", ")+" }"}if(typeof e=="object"&&f){if(Ot&&typeof e[Ot]=="function"&&Q)return Q(e,{depth:s-l});if(f!=="symbol"&&typeof e.inspect=="function")return e.inspect()}if(se(e)){var nt=[];return st&&st.call(e,function(N,T){nt.push(u(T,e,!0)+" => "+u(N,e))}),_t("Map",D.call(e),nt,p)}if(he(e)){var ot=[];return pt&&pt.call(e,function(N){ot.push(u(N,e))}),_t("Set",P.call(e),ot,p)}if(pe(e))return b("WeakMap");if(ge(e))return b("WeakSet");if(ye(e))return b("WeakRef");if(ie(e))return L(u(Number(e)));if(ce(e))return L(u(G.call(e)));if(le(e))return L(Zt.call(e));if(ae(e))return L(u(String(e)));if(!ne(e)&&!wt(e)){var k=x(e,u),at=vt?vt(e)===Object.prototype:e instanceof Object||e.constructor===Object,z=e instanceof Object?"":"null prototype",it=!at&&y&&Object(e)===e&&y in e?tt.call(M(e),8,-1):z?"Object":"",Bt=at||typeof e.constructor!="function"?"":e.constructor.name?e.constructor.name+" ":"",F=Bt+(it||z?"["+v.call(gt.call([],it||[],z||[]),": ")+"] ":"");return k.length===0?F+"{}":p?F+"{"+X(k,p)+"}":F+"{ "+v.call(k,", ")+" }"}return String(e)};function $t(t,e,o){var l=(o.quoteStyle||e)==="double"?'"':"'";return l+t+l}function re(t){return E.call(String(t),/"/g,"&quot;")}function Z(t){return M(t)==="[object Array]"&&(!y||!(typeof t=="object"&&y in t))}function ne(t){return M(t)==="[object Date]"&&(!y||!(typeof t=="object"&&y in t))}function wt(t){return M(t)==="[object RegExp]"&&(!y||!(typeof t=="object"&&y in t))}function oe(t){return M(t)==="[object Error]"&&(!y||!(typeof t=="object"&&y in t))}function ae(t){return M(t)==="[object String]"&&(!y||!(typeof t=="object"&&y in t))}function ie(t){return M(t)==="[object Number]"&&(!y||!(typeof t=="object"&&y in t))}function le(t){return M(t)==="[object Boolean]"&&(!y||!(typeof t=="object"&&y in t))}function Wt(t){if(A)return t&&typeof t=="object"&&t instanceof Symbol;if(typeof t=="symbol")return!0;if(!t||typeof t!="object"||!K)return!1;try{return K.call(t),!0}catch{}return!1}function ce(t){if(!t||typeof t!="object"||!G)return!1;try{return G.call(t),!0}catch{}return!1}var fe=Object.prototype.hasOwnProperty||function(t){return t in this};function _(t,e){return fe.call(t,e)}function M(t){return Xt.call(t)}function ue(t){if(t.name)return t.name;var e=jt.call(Yt.call(t),/^function\s*([\w$]+)/);return e?e[1]:null}function Nt(t,e){if(t.indexOf)return t.indexOf(e);for(var o=0,l=t.length;o<l;o++)if(t[o]===e)return o;return-1}function se(t){if(!D||!t||typeof t!="object")return!1;try{D.call(t);try{P.call(t)}catch{return!0}return t instanceof Map}catch{}return!1}function pe(t){if(!C||!t||typeof t!="object")return!1;try{C.call(t,C);try{q.call(t,q)}catch{return!0}return t instanceof WeakMap}catch{}return!1}function ye(t){if(!yt||!t||typeof t!="object")return!1;try{return yt.call(t),!0}catch{}return!1}function he(t){if(!P||!t||typeof t!="object")return!1;try{P.call(t);try{D.call(t)}catch{return!0}return t instanceof Set}catch{}return!1}function ge(t){if(!q||!t||typeof t!="object")return!1;try{q.call(t,q);try{C.call(t,C)}catch{return!0}return t instanceof WeakSet}catch{}return!1}function me(t){return!t||typeof t!="object"?!1:typeof HTMLElement<"u"&&t instanceof HTMLElement?!0:typeof t.nodeName=="string"&&typeof t.getAttribute=="function"}function At(t,e){if(t.length>e.maxStringLength){var o=t.length-e.maxStringLength,l="... "+o+" more character"+(o>1?"s":"");return At(tt.call(t,0,e.maxStringLength),e)+l}var c=E.call(E.call(t,/(['\\])/g,"\\$1"),/[\x00-\x1f]/g,ve);return $t(c,"single",e)}function ve(t){var e=t.charCodeAt(0),o={8:"b",9:"t",10:"n",12:"f",13:"r"}[e];return o?"\\"+o:"\\x"+(e<16?"0":"")+te.call(e.toString(16))}function L(t){return"Object("+t+")"}function b(t){return t+" { ? }"}function _t(t,e,o,l){var c=l?X(o,l):v.call(o,", ");return t+" ("+e+") {"+c+"}"}function Se(t){for(var e=0;e<t.length;e++)if(Nt(t[e],`
`)>=0)return!1;return!0}function de(t,e){var o;if(t.indent==="	")o="	";else if(typeof t.indent=="number"&&t.indent>0)o=v.call(Array(t.indent+1)," ");else return null;return{base:o,prev:v.call(Array(e+1),o)}}function X(t,e){if(t.length===0)return"";var o=`
`+e.prev+e.base;return o+v.call(t,","+o)+`
`+e.prev}function x(t,e){var o=Z(t),l=[];if(o){l.length=t.length;for(var c=0;c<t.length;c++)l[c]=_(t,c)?e(t[c],t):""}var r=typeof H=="function"?H(t):[],f;if(A){f={};for(var n=0;n<r.length;n++)f["$"+r[n]]=r[n]}for(var a in t)_(t,a)&&(o&&String(Number(a))===a&&a<t.length||A&&f["$"+a]instanceof Symbol||(Et.call(/[^\w$]/,a)?l.push(e(a,t)+": "+e(t[a],t)):l.push(a+": "+e(t[a],t))));if(typeof H=="function")for(var i=0;i<r.length;i++)Mt.call(t,r[i])&&l.push("["+e(r[i])+"]: "+e(t[r[i]],t));return l}});var qt=U((Pe,Ct)=>{"use strict";g();function Oe(){let t=/(Chrome|Chromium)\/(?<chromeVersion>\d+)\./.exec(navigator.userAgent);if(t)return Number.parseInt(t.groups.chromeVersion,10)}var Lt=Oe()>=69?{level:1,hasBasic:!0,has256:!1,has16m:!1}:!1;Ct.exports={stdout:Lt,stderr:Lt}});g();var Pt=ft(Rt(),1);g();var et=ft(qt(),1);import{Time as xt}from"https://registry.koishi.chat/modules/cosmokit/index.js";var Dt=Object.defineProperty,we=Object.getOwnPropertyNames,_e=(t,e,o)=>e in t?Dt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Tt=(t,e)=>Dt(t,"name",{value:e,configurable:!0}),Ee=(t,e)=>function(){return e||(0,t[we(t)[0]])((e={exports:{}}).exports,e),e.exports},m=(t,e,o)=>(_e(t,typeof e!="symbol"?e+"":e,o),o),Me=Ee({"packages/reggol/src/shared.ts"(t,e){var o=[6,2,3,4,5,1],l=[20,21,26,27,32,33,38,39,40,41,42,43,44,45,56,57,62,63,68,69,74,75,76,77,78,79,80,81,92,93,98,99,112,113,129,134,135,148,149,160,161,162,163,164,165,166,167,168,169,170,171,172,173,178,179,184,185,196,197,198,199,200,201,202,203,204,205,206,207,208,209,214,215,220,221];function c(n){return n instanceof Error&&Array.isArray(n.errors)}Tt(c,"isAggregateError");var r=class{constructor(n){if(this.name=n,n in r.instances)return r.instances[n];r.instances[n]=this,this.createMethod("success","[S]",r.SUCCESS),this.createMethod("error","[E]",r.ERROR),this.createMethod("info","[I]",r.INFO),this.createMethod("warn","[W]",r.WARN),this.createMethod("warning","[W]",r.WARN),this.createMethod("debug","[D]",r.DEBUG)}static format(n,a){this.formatters[n]=a}static color(n,a,i,s=""){return n.colors?`\x1B[3${a<8?a:"8;5;"+a}${n.colors>=2?s:""}m${i}\x1B[0m`:""+i}static code(n,a){let i=0;for(let p=0;p<n.length;p++)i=(i<<3)-i+n.charCodeAt(p),i|=0;let s=a.colors>=2?l:a.colors>=1?o:[];return s[Math.abs(i)%s.length]}extend=n=>new r(`${this.name}:${n}`);createMethod(n,a,i){this[n]=(...s)=>{if(s.length===1&&c(s[0])){s[0].errors.forEach(u=>this[n](u));return}if(this.level<i)return;let p=Date.now();for(let u of r.targets){let h=" ".repeat(u.label?.margin??1),O=3+h.length,S="";u.showTime&&(O+=u.showTime.length+h.length,S+=r.color(u,8,xt.template(u.showTime))+h);let d=this.color(u,this.name,";1"),W=(u.label?.width??0)+d.length-this.name.length;if(u.label?.align==="right"?(S+=d.padStart(W)+h+a+h,O+=(u.label.width??0)+h.length):S+=a+h+d.padEnd(W)+h,S+=this.format(u,O,...s),u.showDiff){let w=r.timestamp&&p-r.timestamp;S+=this.color(u," +"+xt.format(w))}let{maxLength:$=1024}=u;u.print(S.split(/\r?\n/g).map(w=>w.slice(0,$)+(w.length>$?"...":"")).join(`
`))}r.timestamp=p}}color(n,a,i=""){let s=r.code(this.name,n);return r.color(n,s,a,i)}format(n,a,...i){i[0]instanceof Error?(i[0]=i[0].stack||i[0].message,i.unshift("%s")):typeof i[0]!="string"&&i.unshift("%o");let s=i.shift();s=s.replace(/%([a-zA-Z%])/g,(p,u)=>{if(p==="%%")return"%";let h=r.formatters[u];if(typeof h=="function"){let O=i.shift();return h(O,n,this)}return p}).replace(/\n/g,`
`+" ".repeat(a));for(let p of i)s+=" "+r.formatters.o(p,n,this);return s}get level(){let n=this.name.split(":"),a=r.levels;do a=a[n.shift()]??a.base;while(n.length&&typeof a=="object");return a}set level(n){let a=this.name.split(":"),i=r.levels;for(;a.length>1;){let s=a.shift(),p=i[s];typeof p=="object"?i=p:i=i[s]={base:p??i.base}}i[a[0]]=n}},f=r;Tt(f,"Logger"),m(f,"SILENT",0),m(f,"SUCCESS",1),m(f,"ERROR",1),m(f,"INFO",2),m(f,"WARN",2),m(f,"DEBUG",3),m(f,"timestamp",0),m(f,"targets",[{colors:et.stdout&&et.stdout.level,print(n){}}]),m(f,"formatters",Object.create(null)),m(f,"instances",Object.create(null)),m(f,"levels",{base:2}),f.format("s",n=>n),f.format("d",n=>+n),f.format("j",n=>JSON.stringify(n)),f.format("c",(n,a,i)=>f.color(a,f.code(i.name,a),n)),f.format("C",(n,a)=>f.color(a,15,n,";1")),e.exports=f}}),rt=Me();var $e=Object.getOwnPropertyNames,We=(t,e)=>function(){return e||(0,t[$e(t)[0]])((e={exports:{}}).exports,e),e.exports},Ne=We({"packages/reggol/src/browser.ts"(t,e){rt.format("o",(o,l)=>(0,Pt.default)(o).replace(/\s*\n\s*/g," ")),e.exports=rt}}),Je=Ne();export{Je as default};
