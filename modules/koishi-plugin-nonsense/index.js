var f=Object.defineProperty;var _=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var w=Object.prototype.hasOwnProperty;var l=(n,e)=>()=>(n&&(e=n(n=0)),e);var b=(n,e)=>()=>(e||n((e={exports:{}}).exports,e),e.exports);var p=(n,e,t,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of h(e))!w.call(n,r)&&r!==t&&f(n,r,{get:()=>e[r],enumerable:!(a=_(e,r))||a.enumerable});return n},m=(n,e,t)=>(p(n,e,"default"),t&&p(t,e,"default"));var O=n=>p(f({},"__esModule",{value:!0}),n);import{Buffer as j}from"https://registry.koishi.chat/modules/buffer/index.js";import v from"https://registry.koishi.chat/modules/process/index.js";var s=l(()=>{});var i={};import*as P from"https://registry.koishi.chat/modules/koishi/index.js";var g=l(()=>{s();m(i,P)});var y=b((S,R)=>{R.exports={tf:["昨天","今天","明天","每一天","今年下半年","星期四","就在刚刚"],tp:["两年半","三个月","五秒钟"],n:["神","黑衣人","主人","触手怪","小仓唯"],vt:["爱抚着","偷走了","吃掉了","杀死了","爱上了"],vi:["跳广场舞","喝醉了","写代码","打羽毛球","倒立","游泳"],pl:["地铁站里","房间里","电梯里","电影院里","屋顶上","泳池里","球场上"],adj:["可怕的","如飞龙一般的","极度美艳的","阴暗的","香香的","小小的","史诗级","巨型","软软的","可怜的","可爱的","罪大恶极的","病娇的","善良的","眼前一黑的"],adv:["用力","突然","轻轻","温柔的","迅速","立即","疯狂","如闪电般"]}});var M=b(o=>{s();Object.defineProperty(o,"__esModule",{value:!0});o.apply=o.Config=o.name=void 0;var u=(g(),O(i));o.name="nonsense";o.Config=u.Schema.object({});var k=y(),x=Object.keys(k);x.push("m");var $=new RegExp(`%(${x.join("|")})`,"g"),q={vt:"及物动词",vi:"不及物动词",adj:"形容词",adv:"副词",pl:"地点",n:"名词",m:"群成员",tf:"时间点",tp:"时间段"};function C(n){n.command("nonsense <text:rawtext>","输出随机句子").alias("ns").action(async({session:e},t)=>{if(!t)return Object.entries(q).map(([r,c])=>`${r}: ${c}`).join(`
`);let a=t.includes("%m")?await e.bot.getGuildMemberList(e.guildId):[];return t.replace($,(r,c)=>{if(c==="m"){let d=u.Random.pick(a);return d.nickname||d.username}else return u.Random.pick(k[c])})})}o.apply=C});export default M();
