import{N as p,c as f}from"./NavBar-DZGeI4u5.js";import{a as v,c as m}from"./api-B4Bpbcl4.js";import{_,r as c,k as h,i as y,o as C,l as w,q as u,s as b,v as g,x as k,S as N,y as s,z as n,D as I,E as V,A as D,F as x,f as B}from"./index-Cv6Vz8a5.js";const H={components:{NavbarVue:p},setup(){const a=c({}),e=c(""),{locale:i}=h(),t=y();async function l(){const o=await v();console.log(o),o.code==200&&(a.value=o.data)}async function d(){if(!e.value)return D(i.value=="en"?"Please enter your friend assistance code":"请输入好友助力码");const o=await m(e.value);o.code==200&&(x(o.msg),l())}function r(o){t.push(o)}return C(()=>{l()}),{copy:f,userInfo:a,toHelp:d,code:e,jumpto:r}}},$={class:"page"},S={class:"wrap flex1"},T={class:"flex-bw codes"},U={class:"flex1"},j=["placeholder"],E={class:"fs-12"},F={class:"flex"},M={class:"mb-8"};function q(a,e,i,t,l,d){const r=w("NavbarVue");return u(),b("div",$,[(u(),g(N,null,{default:k(()=>[B(r)]),_:1})),s("div",S,[s("div",{class:"myCode",onClick:e[0]||(e[0]=o=>t.copy(t.userInfo.helpCode))},n(a.$t("我的助力码"))+"："+n(t.userInfo.helpCode),1),s("div",T,[s("span",null,n(a.$t("好友助力码"))+"：",1),s("div",U,[I(s("input",{type:"text","onUpdate:modelValue":e[1]||(e[1]=o=>t.code=o),placeholder:a.$t("请输入助力码")},null,8,j),[[V,t.code]]),s("span",E,n(a.$t("当前剩余助力次数"))+"："+n(t.userInfo.helpNum),1)])]),s("div",F,[s("button",{onClick:e[2]||(e[2]=(...o)=>t.toHelp&&t.toHelp(...o))},n(a.$t("给好友助力")),1),s("button",{onClick:e[3]||(e[3]=o=>t.jumpto("/invite"))},n(a.$t("邀请好友")),1)])]),s("div",M,n(a.$t("助力说明"))+"：",1),e[4]||(e[4]=s("div",null," 玩家之间可以相互助力孵化，但每天每个人仅有3次助力次数，且给同一个人助力时每天仅限助力2次，助力一次减少孵化时间20分钟，孵化时间不足20分钟则直接完成孵化（当孵化的用户进入页面时弹窗对应的孵化动作和提示），用户手动输入其他用户的助力码进行助力助力规则如上，助力说明内容后台配置 ",-1))])}const R=_(H,[["render",q],["__scopeId","data-v-e6c82a1e"]]);export{R as default};
