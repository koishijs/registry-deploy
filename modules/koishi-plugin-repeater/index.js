var S=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var R=(e,t)=>()=>(e&&(t=e(e=0)),t);var q=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var l=(e,t,n,c)=>{if(t&&typeof t=="object"||typeof t=="function")for(let r of C(t))!T.call(e,r)&&r!==n&&S(e,r,{get:()=>t[r],enumerable:!(c=v(t,r))||c.enumerable});return e},d=(e,t,n)=>(l(e,t,"default"),n&&l(n,t,"default"));var w=e=>l(S({},"__esModule",{value:!0}),e);import{Buffer as j}from"https://registry.koishi.chat/modules/buffer/index.js";import g from"https://registry.koishi.chat/modules/process/index.js";var m=R(()=>{});var p={};import*as E from"https://registry.koishi.chat/modules/koishi/index.js";var I=R(()=>{m();d(p,E)});var M=q(a=>{m();Object.defineProperty(a,"__esModule",{value:!0});a.apply=a.Config=a.name=void 0;var u=(I(),w(p)),B=u.Schema.object({minTimes:u.Schema.natural().min(2).default(2).description("最少重复次数。"),probability:u.Schema.percent().default(1).description("复读发生概率。")});function F(e){if(!e||typeof e!="object")return e;let{minTimes:t=2,probability:n=1}=e;return({repeated:c,times:r,content:s})=>r>=t&&!c&&u.Random.bool(n)?s:""}a.name="repeater";a.Config=u.Schema.object({onRepeat:u.Schema.union([B,Function]).description("响应复读消息。"),onInterrupt:u.Schema.function().hidden().description("响应打断复读。")});function H(e,t={}){e=e.guild();let n={};function c(r){return n[r]||(n[r]={content:"",repeated:!1,times:0,users:{}})}e.before("send",({cid:r,content:s})=>{let o=c(r);o.repeated=!0,o.content===s?o.times+=1:(o.content=s,o.times=1,o.users={})}),e.middleware((r,s)=>{let{content:o,uid:_,userId:f}=r;if(e.bots[_])return;let i=c(r.cid),b=k=>{let y=k?.(i,r);return y&&s(y)};if(o===i.content)return i.times+=1,i.users[f]=(i.users[f]||0)+1,b(F(t.onRepeat))||s();let h=b(t.onInterrupt);return h||(i.content=o,i.repeated=!1,i.times=1,i.users={[f]:1},s())})}a.apply=H});export default M();
