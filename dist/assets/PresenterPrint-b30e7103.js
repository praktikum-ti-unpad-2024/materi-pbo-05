import{d,u as _,a as p,c as m,b as u,r as h,o as s,e as n,f as t,t as a,g as r,F as f,h as g,n as v,i as x,j as b,k as y,l as k,m as N,_ as P}from"./index-f755c2d0.js";import{N as V}from"./NoteDisplay-17d34683.js";const w={class:"m-4"},S={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},D={class:"opacity-50"},L={class:"text-lg"},T={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=d({__name:"PresenterPrint",setup(A){_(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(s(),n("div",{id:"page-root",style:v(r(x))},[t("div",w,[t("div",S,[t("h1",B,a(r(m).title),1),t("div",D,a(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(i.value,(e,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",L,[t("div",T,[t("div",C,a(e==null?void 0:e.no)+"/"+a(r(b)),1),y(" "+a(e==null?void 0:e.title)+" ",1),H])]),k(V,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(s(),n("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","D:/Visual Studio Code/Asprak/PBO/materi-pbo-05/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
