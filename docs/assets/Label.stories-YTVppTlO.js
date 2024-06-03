import{j as T}from"./jsx-runtime-BZf_YgVj.js";import"./index-CEThVCg_.js";const f=({name:g,size:x="normal",capitalize:C=!1,color:z,customColor:v})=>T.jsx("span",{className:`label ${x} ${z}`,style:{color:v,textTransform:C?"capitalize":"unset"},children:g});f.__docgenInfo={description:"",methods:[],displayName:"Label",props:{name:{required:!0,tsType:{name:"string"},description:"Text to display"},size:{required:!1,tsType:{name:"union",raw:'"normal" | "h1" | "h2" | "h3"',elements:[{name:"literal",value:'"normal"'},{name:"literal",value:'"h1"'},{name:"literal",value:'"h2"'},{name:"literal",value:'"h3"'}]},description:"Font size",defaultValue:{value:'"normal"',computed:!1}},capitalize:{required:!1,tsType:{name:"boolean"},description:"Capitalizes first letter of each word",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:'"text-primary" | "text-secondary" | "text-tertiary"',elements:[{name:"literal",value:'"text-primary"'},{name:"literal",value:'"text-secondary"'},{name:"literal",value:'"text-tertiary"'}]},description:"What font color to use"},customColor:{required:!1,tsType:{name:"string"},description:"What custom color to use"}}};const q={title:"UI/Labels/Label",component:f,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{size:{control:"select"},customColor:{control:"color"}}},e={args:{name:"hola mundo"}},a={args:{name:"hola mundo",capitalize:!0}},r={args:{name:"hola mundo",color:"text-secondary"}},o={args:{name:"hola mundo",customColor:"cyan"}};var t,s,n;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    name: "hola mundo"
  }
}`,...(n=(s=e.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    name: "hola mundo",
    capitalize: true
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var i,u,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    name: "hola mundo",
    color: "text-secondary"
  }
}`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,y,h;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    name: "hola mundo",
    customColor: "cyan"
  }
}`,...(h=(y=o.parameters)==null?void 0:y.docs)==null?void 0:h.source}}};const L=["Basic","Capitalize","Secondary","CustomColor"];export{e as Basic,a as Capitalize,o as CustomColor,r as Secondary,L as __namedExportsOrder,q as default};
