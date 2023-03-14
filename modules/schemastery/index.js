import{Buffer as E}from"https://registry.koishi.chat/modules/buffer/index.js";import O from"https://registry.koishi.chat/modules/process/index.js";import{clone as _,deepEqual as N,isNullable as y,isPlainObject as w,pick as v,valueMap as a}from"https://registry.koishi.chat/modules/cosmokit/index.js";var T=Object.defineProperty,j=Object.getOwnPropertyNames,c=(m,l)=>T(m,"name",{value:l,configurable:!0}),k=(m,l)=>function(){return l||(0,m[j(m)[0]])((l={exports:{}}).exports,l),l.exports},q=k({"packages/schemastery/packages/core/src/index.ts"(m,l){var x=Symbol.for("schemastery");globalThis.__schemastery_index__??=0;var n=c(function(e){let t=c(function(r){return n.resolve(r,t)[0]},"schema");if(e.refs){let r=a(e.refs,i=>new n(i)),o=c(i=>r[i],"getRef");for(let i in r){let s=r[i];s.sKey=o(s.sKey),s.inner=o(s.inner),s.list=s.list&&s.list.map(o),s.dict=s.dict&&a(s.dict,o)}return r[e.uid]}return Object.assign(t,e),Object.defineProperty(t,"uid",{value:globalThis.__schemastery_index__++}),Object.setPrototypeOf(t,n.prototype),t.meta||={},t.toString=t.toString.bind(t),t},"Schema");n.prototype=Object.create(Function.prototype),n.prototype[x]=!0;var h;n.prototype.toJSON=c(function(){if(h)return h[this.uid]??=JSON.parse(JSON.stringify({...this})),this.uid;h={[this.uid]:{...this}},h[this.uid]=JSON.parse(JSON.stringify({...this}));let t={uid:this.uid,refs:h};return h=void 0,t},"toJSON"),n.prototype.set=c(function(t,r){return this.dict[t]=r,this},"set"),n.prototype.push=c(function(t){return this.list.push(t),this},"push");for(let e of["required","hidden"])Object.assign(n.prototype,{[e](t=!0){let r=n(this);return r.meta={...r.meta,[e]:t},r}});n.prototype.pattern=c(function(t){let r=n(this),o=v(t,["source","flags"]);return r.meta={...r.meta,pattern:o},r},"pattern"),n.prototype.simplify=c(function(t){if(N(t,this.meta.default))return null;if(y(t))return t;if(this.type==="object"||this.type==="dict"){let r={};for(let o in t){let s=(this.type==="object"?this.dict[o]:this.inner)?.simplify(t[o]);y(s)||(r[o]=s)}return r}else if(this.type==="array"||this.type==="tuple"){let r=[];for(let o of t){let i=this.type==="array"?this.inner:this.list[o],s=i?i.simplify(t[o]):t[o];r.push(s)}return r}else if(this.type==="intersect"){let r={};for(let o of this.list)Object.assign(r,o.simplify(t));return r}else if(this.type==="union")for(let r of this.list)try{return n.resolve(t,r),r.simplify(t)}catch{}return t},"simplify"),n.prototype.toString=c(function(t){return S[this.type]?.(this,t)??`Schema<${this.type}>`},"toString"),n.prototype.role=c(function(e,t){let r=n(this);return r.meta={...r.meta,role:e,extra:t},r},"role");for(let e of["default","link","comment","description","max","min","step"])Object.assign(n.prototype,{[e](t){let r=n(this);return r.meta={...r.meta,[e]:t},r}});var d={};n.extend=c(function(t,r){d[t]=r},"extend"),n.resolve=c(function(t,r,o){if(!r)return[t];if(y(t)){if(r.meta.required)throw new TypeError("missing required value");let s=r,u=r.meta.default;for(;s?.type==="intersect"&&y(u);)s=s.list[0],u=s?.meta.default;if(y(u))return[t];t=_(u)}let i=d[r.type];if(i)return i(t,r,o);throw new TypeError(`unsupported type "${r.type}"`)},"resolve"),n.from=c(function(t){if(y(t))return n.any();if(["string","number","boolean"].includes(typeof t))return n.const(t).required();if(t[x])return t;if(typeof t=="function")switch(t){case String:return n.string().required();case Number:return n.number().required();case Boolean:return n.boolean().required();case Function:return n.function().required();default:return n.is(t).required()}else throw new TypeError(`cannot infer schema from ${t}`)},"from"),n.natural=c(function(){return n.number().step(1).min(0)},"natural"),n.percent=c(function(){return n.number().step(.01).min(0).max(1).role("slider")},"percent"),n.date=c(function(){return n.union([n.is(Date),n.transform(n.string().role("datetime"),t=>{let r=new Date(t);if(isNaN(+r))throw new TypeError(`invalid date "${t}"`);return r},!0)])},"date"),n.extend("any",e=>[e]),n.extend("never",e=>{throw new TypeError(`expected nullable but got ${e}`)}),n.extend("const",(e,{value:t})=>{if(e===t)return[t];throw new TypeError(`expected ${t} but got ${e}`)});function g(e,t,r){let{max:o=1/0,min:i=-1/0}=t;if(e>o)throw new TypeError(`expected ${r} <= ${o} but got ${e}`);if(e<i)throw new TypeError(`expected ${r} >= ${i} but got ${e}`)}c(g,"checkWithinRange"),n.extend("string",(e,{meta:t})=>{if(typeof e!="string")throw new TypeError(`expected string but got ${e}`);if(t.pattern){let r=new RegExp(t.pattern.source,t.pattern.flags);if(!r.test(e))throw new TypeError(`expect string to match regexp ${r}`)}return g(e.length,t,"string length"),[e]}),n.extend("number",(e,{meta:t})=>{if(typeof e!="number")throw new TypeError(`expected number but got ${e}`);g(e,t,"number");let{step:r}=t;if(r){let o=Math.abs(e-(t.min??0))%r;if(o>=Number.EPSILON&&o<r-Number.EPSILON)throw new TypeError(`expected number multiple of ${r} but got ${e}`)}return[e]}),n.extend("boolean",e=>{if(typeof e=="boolean")return[e];throw new TypeError(`expected boolean but got ${e}`)}),n.extend("bitset",(e,{bits:t})=>{if(typeof e=="number")return[e];if(!Array.isArray(e))throw new TypeError(`expected array but got ${e}`);let r=0;for(let o of e){if(typeof o!="string")throw new TypeError(`expected string but got ${o}`);if(!(o in t))throw new TypeError(`unknown value ${o}`);r|=t[o]}return[r,r]}),n.extend("function",e=>{if(typeof e=="function")return[e];throw new TypeError(`expected function but got ${e}`)}),n.extend("is",(e,{callback:t})=>{if(e instanceof t)return[e];throw new TypeError(`expected ${t.name} but got ${e}`)});function b(e,t,r){let[o,i]=n.resolve(e[t],r);return y(i)||(e[t]=i),o}c(b,"property"),n.extend("array",(e,{inner:t,meta:r})=>{if(!Array.isArray(e))throw new TypeError(`expected array but got ${e}`);return g(e.length,r,"array length"),[e.map((o,i)=>b(e,i,t))]}),n.extend("dict",(e,{inner:t,sKey:r},o)=>{if(!w(e))throw new TypeError(`expected object but got ${e}`);let i={};for(let s in e){let u;try{u=n.resolve(s,r)[0]}catch(p){if(o)continue;throw p}i[u]=b(e,s,t),e[u]=e[s],s!==u&&delete e[s]}return[i]}),n.extend("tuple",(e,{list:t},r)=>{if(!Array.isArray(e))throw new TypeError(`expected array but got ${e}`);let o=t.map((i,s)=>b(e,s,i));return r?[o]:(o.push(...e.slice(t.length)),[o])});function $(e,t){for(let r in t)r in e||(e[r]=t[r])}c($,"merge"),n.extend("object",(e,{dict:t},r)=>{if(!w(e))throw new TypeError(`expected object but got ${e}`);let o={};for(let i in t){let s=b(e,i,t[i]);(!y(s)||i in e)&&(o[i]=s)}return r||$(o,e),[o]}),n.extend("union",(e,{list:t,toString:r})=>{let o=[];for(let i of t)try{return n.resolve(e,i)}catch{}throw new TypeError(`expected ${r()} but got ${JSON.stringify(e)}`)}),n.extend("intersect",(e,{list:t,toString:r},o)=>{let i;for(let s of t){let u=n.resolve(e,s,!0)[0];if(!y(u))if(y(i))i=u;else{if(typeof i!=typeof u)throw new TypeError(`expected ${r()} but got ${JSON.stringify(e)}`);if(typeof u=="object")i={...i,...u};else if(i!==u)throw new TypeError(`expected ${r()} but got ${JSON.stringify(e)}`)}}return!o&&w(e)&&$(i,e),[i]}),n.extend("transform",(e,{inner:t,callback:r,preserve:o})=>{let[i,s=e]=n.resolve(e,t,!0);if(w(e)){let u={};for(let p in i)p in e&&(u[p]=e[p],delete e[p]);return Object.assign(e,r(u)),[r(i)]}else return o?[r(i)]:[r(i),r(s)]});var S={};function f(e,t,r){S[e]=r,Object.assign(n,{[e](...o){let i=new n({type:e});return t.forEach((s,u)=>{switch(s){case"sKey":i.sKey=o[u]??n.string();break;case"inner":i.inner=n.from(o[u]);break;case"list":i.list=o[u].map(n.from);break;case"dict":i.dict=a(o[u],n.from);break;case"bits":{i.bits={};for(let p in o[u])typeof o[u][p]=="number"&&(i.bits[p]=o[u][p]);break}default:i[s]=o[u]}}),e==="object"||e==="dict"?i.meta.default={}:e==="array"||e==="tuple"?i.meta.default=[]:e==="bitset"&&(i.meta.default=0),i}})}c(f,"defineMethod"),f("is",["callback"],({callback:e})=>e.name),f("any",[],()=>"any"),f("never",[],()=>"never"),f("const",["value"],({value:e})=>typeof e=="string"?JSON.stringify(e):e),f("string",[],()=>"string"),f("number",[],()=>"number"),f("boolean",[],()=>"boolean"),f("bitset",["bits"],()=>"bitset"),f("function",[],()=>"function"),f("array",["inner"],({inner:e})=>`${e.toString(!0)}[]`),f("dict",["inner","sKey"],({inner:e,sKey:t})=>`{ [key: ${t.toString()}]: ${e.toString()} }`),f("tuple",["list"],({list:e})=>`[${e.map(t=>t.toString()).join(", ")}]`),f("object",["dict"],({dict:e})=>Object.keys(e).length===0?"{}":`{ ${Object.entries(e).map(([t,r])=>`${t}${r.meta.required?"":"?"}: ${r.toString()}`).join(", ")} }`),f("union",["list"],({list:e},t)=>{let r=e.map(({toString:o})=>o()).join(" | ");return t?`(${r})`:r}),f("intersect",["list"],({list:e})=>`${e.map(t=>t.toString(!0)).join(" & ")}`),f("transform",["inner","callback","preserve"],({inner:e},t)=>e.toString(t)),l.exports=n}}),R=q();export{R as default};
