import{aG as b,aH as k,z as u,o as n,b as d,e as s,ad as l,x as f,aI as T,i as m,f as p,g as v}from"./modules/vue-B88np0SC.js";import{u as $}from"./slidev/context-dSmCr_eT.js";import{_ as q}from"./index-B68Xw_ew.js";function h(r){switch(r){case"ct":return"ns-c-center ns-c-top";case"cm":return"ns-c-center ns-c-middle";case"cb":return"ns-c-center ns-c-bottom";case"lt":return"ns-c-left ns-c-top";case"lm":return"ns-c-left ns-c-middle";case"lb":return"ns-c-left ns-c-bottom";case"rt":return"ns-c-right ns-c-top";case"rm":return"ns-c-right ns-c-middle";case"rb":return"ns-c-right ns-c-bottom";case"c":return"ns-c-center ns-c-top";case"l":return"ns-c-left ns-c-top";case"r":return"ns-c-right ns-c-top";default:return"error"}}function o(r){return{l:r,r:12-r}}function I(r){switch(r){case"is-1":case"is-1-11":case"is-one-twelfth":return o(1);case"is-2":case"is-2-10":case"is-one-sixth":return o(2);case"is-3":case"is-3-9":case"is-one-quarter":return o(3);case"is-4":case"is-4-8":case"is-one-third":return o(4);case"is-5":case"is-5-7":return o(5);case"is-6":case"is-6-6":case"is-two-quarters":case"is-two-fourths":case"is-one-half":case"is-half":return o(6);case"is-7":case"is-7-5":return o(7);case"is-8":case"is-8-4":case"is-two-thirds":return o(8);case"is-9":case"is-9-3":case"is-three-quarters":case"three-fourths":return o(9);case"is-10":case"is-10-2":return o(10);case"is-11":case"is-11-1":return o(11);default:return"error"}}const S={key:0,class:"slidev-layout default error"},C={key:3,class:"end"},V={__name:"two-cols-title",props:{columns:{default:"is-one-half"},align:{default:"l-lt-lt"},color:{default:"white"},titlepos:{default:"t",validator:r=>["t","b","n"].includes(r)}},setup(r){b(t=>({"05e7a8c0":c.value.l,"04747a1c":c.value.l+1,"05e7a8c6":c.value.r})),$();const g=k(),a=r,i=u(()=>{const t=a.align.split("-");return{t:h(t[0]),l:h(t[1]),r:h(t[2])}}),c=u(()=>I(a.columns)),w=u(()=>`neversink-${a.color}-scheme`),y=u(()=>g.title!=null?a.titlepos=="t"?"slidev-layout two-cols-header":a.titlepos=="b"?"slidev-layout two-cols-footer":"slidev-layout two-cols":"slidev-layout two-cols");return(t,e)=>c.value=="error"||i.value.t=="error"||i.value.l=="error"||i.value.r=="error"?(n(),d("div",S,[e[13]||(e[13]=s("span",{class:"ns-c-warning"},[s("b",null,"Error"),l(": invalid layout params.")],-1)),e[14]||(e[14]=s("hr",null,null,-1)),s("p",null,[e[0]||(e[0]=l(" There are four parameters: ")),e[1]||(e[1]=s("code",null,"columns",-1)),e[2]||(e[2]=l(", ")),e[3]||(e[3]=s("code",null,"align",-1)),e[4]||(e[4]=l(", ")),e[5]||(e[5]=s("code",null,"color",-1)),e[6]||(e[6]=l(", and ")),e[7]||(e[7]=s("code",null,"titlepos",-1)),e[8]||(e[8]=l(". Currently: ")),s("code",null,"columns: "+f(a.columns),1),e[9]||(e[9]=l(", ")),s("code",null,"align: "+f(a.align),1),e[10]||(e[10]=l(", ")),s("code",null,"color: "+f(a.color),1),e[11]||(e[11]=l(", and ")),s("code",null,"titlepos: "+f(a.titlepos),1),e[12]||(e[12]=l(". "))]),e[15]||(e[15]=T("<p data-v-a92282d8> Options for <code data-v-a92282d8>columns</code> are divided into 12 column units. So with <code data-v-a92282d8>columns: is-1-11</code> the left column is 1/12 wide and the the right columns is 11/12 wide. The component admits a short had of only specifying the left column (<code data-v-a92282d8>columns: is-1</code> does the same thing). In addition there are short hands like <code data-v-a92282d8>columns: is-one-quarter</code> which resolves to <code data-v-a92282d8>is-3-9</code>, etc... </p><p data-v-a92282d8> Here are a bunch of examples: <code data-v-a92282d8> is-1, is-2, is-3, is-4, is-5, is-6, is-7, is-8, is-9, is-10, is-11, is-1-11, is-2-10, is-3-9, is-4-8, is-5-7, is-6-6, is-7-5, is-8-4, is-9-3, is-10-2, is-11-1, is-one-quarter, is-one-third, is-one-half, is-two-thirds, is-three-quarters </code></p><p data-v-a92282d8> In addition you can specify &quot;slots&quot; of the page with <code data-v-a92282d8>:: title ::</code>, <code data-v-a92282d8>:: left ::</code>, and <code data-v-a92282d8>:: right::</code>. Title is optional. </p><p data-v-a92282d8> The <code data-v-a92282d8>align</code> parameter determines how the columns look. The notation is for example <code data-v-a92282d8>align: c-cm-cm</code>. The first part is for the title, the second for the left column, and the third part is for the right column. The first letter is (<code data-v-a92282d8>c</code> for center, <code data-v-a92282d8>l</code> for left, <code data-v-a92282d8>r</code> for right). This applies to all three second. For the columns the second letter is vertical alignment (<code data-v-a92282d8>t</code> for top, <code data-v-a92282d8>m</code> for middle, <code data-v-a92282d8>b</code> for bottom). </p>",4))])):(n(),d("div",{key:1,class:m(["slidecolor",y.value+" "+w.value])},[t.$slots.title&&a.titlepos!="n"?(n(),d("div",{key:0,class:m(["title",i.value.t])},[p(t.$slots,"title",{},void 0,!0)],2)):v("",!0),t.$slots.left?(n(),d("div",{key:1,class:m(["left-col",i.value.l])},[p(t.$slots,"left",{},void 0,!0)],2)):v("",!0),t.$slots.right?(n(),d("div",{key:2,class:m(["right-col",i.value.r])},[p(t.$slots,"right",{},void 0,!0)],2)):v("",!0),t.$slots.default?(n(),d("div",C,[p(t.$slots,"default",{},void 0,!0)])):v("",!0)],2))}},B=q(V,[["__scopeId","data-v-a92282d8"]]);export{B as I};
