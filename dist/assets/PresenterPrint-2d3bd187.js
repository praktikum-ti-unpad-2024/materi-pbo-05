import{d as _,u as d,a as p,c as m,b as u,r as h,o as s,e as n,f as t,t as o,g as l,F as f,h as g,n as v,i as x,j as b,k as y,l as k,m as N,_ as P}from"./index-222b0139.js";import{N as w}from"./NoteDisplay-88c0ebe2.js";const D={class:"m-4"},V={class:"mb-10"},B={class:"text-4xl font-bold mt-2"},L={class:"opacity-50"},S={class:"text-lg"},T={class:"font-bold flex gap-2"},C={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),j={key:0,class:"border-gray-400/50 mb-8"},z=_({__name:"PresenterPrint",setup(F){d(`
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
`),p({title:`Notes - ${m.title}`});const i=u(()=>h.map(a=>{var r;return(r=a.meta)==null?void 0:r.slide}).filter(a=>a!==void 0&&a.noteHTML!==""));return(a,r)=>(s(),n("div",{id:"page-root",style:v(l(x))},[t("div",D,[t("div",V,[t("h1",B,o(l(m).title),1),t("div",L,o(new Date().toLocaleString()),1)]),(s(!0),n(f,null,g(i.value,(e,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",S,[t("div",T,[t("div",C,o(e==null?void 0:e.no)+"/"+o(l(b)),1),y(" "+o(e==null?void 0:e.title)+" ",1),H])]),k(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(s(),n("hr",j)):N("v-if",!0)]))),128))])],4))}}),E=P(z,[["__file","C:/Users/Diatama/Desktop/PrakPBO/materi-pbo-05/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
