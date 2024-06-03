import{j as k}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const b=({name:v,size:z="normal",capitalize:T=!1,color:S,customColor:q,backgroundColor:w="transparent"})=>k.jsx("span",{className:`label ${z} ${S}`,style:{color:q,textTransform:T?"capitalize":"unset",backgroundColor:w},children:v});b.__docgenInfo={description:"",methods:[],displayName:"Label",props:{name:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Font size",defaultValue:{value:'"normal"',computed:!1}},capitalize:{required:!1,tsType:{name:"boolean"},description:"Capitalizes first letter of each word",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"What font color to use"},customColor:{required:!1,tsType:{name:"string"},description:"What custom font color to use"},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use",defaultValue:{value:'"transparent"',computed:!1}}}};const _={title:"UI/Labels/Label",component:b,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select"},customColor:{control:"color"}}},e={args:{name:"hola mundo"}},a={args:{name:"hola mundo",capitalize:!0}},r={args:{name:"hola mundo",color:"text-secondary"}},o={args:{name:"hola mundo",customColor:"cyan"}},t={args:{name:"hola mundo",backgroundColor:"yellow"}};var s,n,l;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    name: "hola mundo"
  }
}`,...(l=(n=e.parameters)==null?void 0:n.docs)==null?void 0:l.source}}};var c,m,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    name: "hola mundo",
    capitalize: true
  }
}`,...(u=(m=a.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var i,d,p;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: "hola mundo",
    color: "text-secondary"
  }
}`,...(p=(d=r.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var g,y,h;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    name: "hola mundo",
    customColor: "cyan"
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};var f,C,x;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    name: "hola mundo",
    backgroundColor: "yellow"
  }
}`,...(x=(C=t.parameters)==null?void 0:C.docs)==null?void 0:x.source}}};const j=["Basic","Capitalize","Secondary","CustomColor","CustomBgColor"];export{e as Basic,a as Capitalize,t as CustomBgColor,o as CustomColor,r as Secondary,j as __namedExportsOrder,_ as default};
