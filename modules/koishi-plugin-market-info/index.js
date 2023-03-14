var y=Object.defineProperty;var q=Object.getOwnPropertyDescriptor;var C=Object.getOwnPropertyNames;var M=Object.prototype.hasOwnProperty;var I=(t,e)=>()=>(t&&(e=t(t=0)),e);var S=(t,e)=>()=>(e||t((e={exports:{}}).exports,e),e.exports);var w=(t,e,c,h)=>{if(e&&typeof e=="object"||typeof e=="function")for(let n of C(e))!M.call(t,n)&&n!==c&&y(t,n,{get:()=>e[n],enumerable:!(h=q(e,n))||h.enumerable});return t},g=(t,e,c)=>(w(t,e,"default"),c&&w(c,e,"default"));var O=t=>w(y({},"__esModule",{value:!0}),t);import{Buffer as k}from"https://registry.koishi.chat/modules/buffer/index.js";import j from"https://registry.koishi.chat/modules/process/index.js";var m=I(()=>{});var f={};import*as E from"https://registry.koishi.chat/modules/koishi/index.js";var $=I(()=>{m();g(f,E)});var D=S((F,P)=>{P.exports={commands:{market:{description:"插件市场信息",messages:{overview:"当前共有 {0} 个插件。"}}}}});var z=S(r=>{m();Object.defineProperty(r,"__esModule",{value:!0});r.apply=r.Config=r.Rule=r.name=void 0;var i=($(),O(f)),R=new i.Logger("market");r.name="market-info";r.Rule=i.Schema.object({platform:i.Schema.string().description("平台名称。").required(),channelId:i.Schema.string().description("频道 ID。").required(),guildId:i.Schema.string().description("群组 ID。"),selfId:i.Schema.string().description("机器人 ID。")});r.Config=i.Schema.object({rules:i.Schema.array(r.Rule).description("推送规则。"),interval:i.Schema.number().default(i.Time.minute*30).description("轮询间隔 (毫秒)。"),showHidden:i.Schema.boolean().default(!1).description("是否显示隐藏的插件。"),showDeletion:i.Schema.boolean().default(!1).description("是否显示删除的插件。"),showPublisher:i.Schema.boolean().default(!1).description("是否显示插件发布者。"),showDescription:i.Schema.boolean().default(!1).description("是否显示插件描述。")});function _(t,e){t.i18n.define("zh",D());let c=n=>{let o={};for(let l of n.objects)l.manifest.hidden&&!e.showHidden||(o[l.shortname]=l);return o},h=async()=>{let n=await t.http.get("https://registry.koishi.chat/market.json");return c(n)};t.on("ready",async()=>{let n=await h();t.command("market").action(async({session:o})=>o.text(".overview",[Object.keys(n).length])),t.setInterval(async()=>{let o=await h(),l=Object.keys({...n,...o}).map(s=>{let d=n[s]?.version,a=o[s]?.version;if(d!==a){if(!d){let u=`新增：${s}`;if(e.showPublisher&&(u+=` (@${o[s].publisher.username})`),e.showDescription){let{description:b}=o[s].manifest;u+=`
  ${b.zh||b.en}`}return u}if(a)return`更新：${s} (${d} → ${a})`;if(e.showDeletion)return`删除：${s}`}}).filter(Boolean).sort();if(n=o,!l.length)return;let v=["[插件市场更新]",...l].join(`
`);R.info(v);for(let{channelId:s,platform:d,selfId:a,guildId:u}of e.rules){if(!a){let p=await t.database.getChannel(d,s,["assignee","guildId"]);if(!p||!p.assignee)return;a=p.assignee,u=p.guildId}t.bots[`${d}:${a}`]?.sendMessage(s,v,u)}},e.interval)})}r.apply=_});export default z();
