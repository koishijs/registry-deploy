var Y=Object.defineProperty;var N=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames;var T=Object.prototype.hasOwnProperty;var z=(s,t)=>()=>(s&&(t=s(s=0)),t);var A=(s,t)=>()=>(t||s((t={exports:{}}).exports,t),t.exports);var w=(s,t,n,e)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of P(t))!T.call(s,o)&&o!==n&&Y(s,o,{get:()=>t[o],enumerable:!(e=N(t,o))||e.enumerable});return s},x=(s,t,n)=>(w(s,t,"default"),n&&w(n,t,"default"));var E=s=>w(Y({},"__esModule",{value:!0}),s);import{Buffer as B}from"https://registry.koishi.chat/modules/buffer/index.js";import S from"https://registry.koishi.chat/modules/process/index.js";var g=z(()=>{});var p={};import*as V from"https://registry.koishi.chat/modules/koishi/index.js";var j=z(()=>{g();x(p,V)});var L=A((Z,H)=>{H.exports={commands:{maya:{description:"玛雅日历换算",messages:{"invalid-date":"请输入正确的日期。"}}}}});var W=A(u=>{g();Object.defineProperty(u,"__esModule",{value:!0});u.apply=u.Config=u.name=void 0;var J=(j(),E(p)),d=[0,31,28,31,30,31,30,31,31,30,31,30,31],O=["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],$=["Pop","Wo'","Sip","Sotz'","Sek","Xul","Yaxk'in","Mol","Ch'en","Yax","Sak'","Keh","Mak","K'ank'in","Muwan","Pax","K'ayab","Kumk'u","Wayeb"],q=["Kin","Uinal","Tun","Ka'tun","Bak'tun","Pictun","Kalabtun","K'inchiltun","Alautun"],y=["Ajaw","Imix","Ik'","Ak'bal","K'an","Chikchan","Kimi","Manik'","Lamat","Muluk","Ok","Chuwen","Eb","Ben","Ix","Men","K'ib","Kaban","Etz'nab","Kawak"];function v(s){return s%4===0&&(s%100!==0||s%400===0)}var l=class{constructor(t){this.stamp=t}compare(t){return this.stamp>t.stamp?1:this.stamp<t.stamp?-1:0}getDelta(t){return this.stamp-t.stamp}static fromGreg(t,n,e){let o=0,a=-3113,i=8,f=11;t<0&&(t+=1);let m=t-a-1;m<0&&(m=0);let C=0,h=a-a%4,k=t-1-(t>0?(t-1)%4:4+(t-1)%4);h<=k&&(C=Math.floor((k-h)/4)+1);let K=0,M=a-a%100,b=t-1-(t>0?(t-1)%100:100+(t-1)%100);M<=b&&(K=Math.floor((b-M)/100)+1);let c=0,G=a-a%400,I=t-1-(t>0?(t-1)%400:400+(t-1)%400);if(G<=I&&(c=Math.floor((I-G)/400)+1),o+=m*365+C-K+c,a<t){for(let r=i+1;r<=12;r++)o+=d[r];o+=d[i]-f;for(let r=1;r<n;r++)o+=d[r];o+=e}else if(a===t){for(let r=i+1;r<n;r++)o+=d[r];i<n?(o+=d[i]-f,o+=e):i===n&&(o+=e-f)}return v(t)&&n>2&&a<t&&o++,new l(o)}static fromMaya(t){let n=0,e=t.split(".");return e.forEach((o,a)=>{a===e.length-2?n*=18:n*=20,n+=+o}),new l(n)}toGreg(){let t=this.stamp,n=-3113,e=8,o=11,a=Math.floor(t/146097);if(n+=a*400,t%=146097,t>0){let i=!1,f=l.fromGreg(n+(n>0?400-n%400:-(n%400)),2,29),m=Math.floor(t/36524);if(n+=m*100,t%=36524,l.fromGreg(n,e,o).compare(f)>0&&(i=!0,o--),t>0){let h=n+(n>0?100-n%100:-(n%100));h%400===0&&(h+=100);let k=l.fromGreg(h,2,28),K=Math.floor(t/1461);n+=K*4,t%=1461;let M=l.fromGreg(n,e,o);for(M.compare(k)>0&&o++,!i&&M.compare(f)>0&&o--;t>0;){let b=v(n+1)?366:365;if(t>=b)n++,t-=b;else{let c=d[e];v(n)&&e===2&&c++,t>=c?(e++,t-=c,e>12&&(n++,e-=12)):(o+=t,t=0,o>c&&(e++,o-=c),e>12&&(n++,e-=12))}}}}return O[e]+" "+o+", "+(n<=0?Math.abs(n-1)+"BC":n)}toMLC(){let t=this.stamp,n=[];for(n.push(t%20),t=Math.floor(t/20),t>0&&(n.push(t%18),t=Math.floor(t/18));t>0;)n.push(t%20),t=Math.floor(t/20);for(;n.length<5;)n.push(0);return n.map((e,o)=>`${e} ${q[o]}`).reverse().join(", ")}toTzolkin(){let t=this.stamp,n=(t+4)%13,e=y[t%20];return n+" "+e}toHaab(){let t=this.stamp%365,n,e;return t<12?(n=17,e=t+8):t<17?(n=18,e=t-12):(t-=17,n=Math.floor(t/20),e=t%20),e+" "+$[n]}};u.name="maya";u.Config=J.Schema.object({});function U(s){s.i18n.define("zh",L()),s.command("maya <YYYY-MM-DD> [BC|AD]").example("maya 2012-12-21").action(({session:t},n,e)=>{if(!n)return t.text(".invalid-date");let o=n.match(/^(\d+)[-\.](\d+)[-\.](\d+)\.?$/);if(!o)return t.text(".invalid-date");let a=parseInt(o[1])*(e==="BC"?-1:1),i=parseInt(o[2]),f=parseInt(o[3]),m=l.fromGreg(a,i,f);return["Tzolk'in: "+m.toTzolkin(),"Haab: "+m.toHaab(),"Long Count: "+m.toMLC()].join(`
`)})}u.apply=U});export default W();
