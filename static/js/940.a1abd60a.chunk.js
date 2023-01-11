"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[940],{7940:function(n,e,t){t.r(e),t.d(e,{default:function(){return S}});var r,a,i,o,s,d,p=t(2791),x=t(9434),c=function(n){return n.contacts.items},l=function(n){return n.contacts.isLoading},u=function(n){return n.contacts.error},b=function(n){return n.filter},h=t(3634),m=t(9439),g=t(5984),f=t(168),v=t(6444),j=v.ZP.form(r||(r=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n  -webkit-box-align: center;\n  align-items: center;\n  margin-bottom: 50px;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  box-shadow: rgb(34 60 80 / 20%) 0px 5px 10px 2px;\n"]))),w=v.ZP.label(a||(a=(0,f.Z)(["\n  display: flex;\n  -webkit-box-pack: justify;\n  justify-content: space-between;\n  width: 340px;\n  padding: 12px;\n\n  input {\n    width: 75%;\n\n    height: 20px;\n    padding-left: 10px;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n    outline: none;\n    :hover,\n    :focus {\n      box-shadow: rgb(38, 57, 77) 0px 5px 30px -7px;\n    }\n  }\n"]))),k=v.ZP.button(i||(i=(0,f.Z)(["\n  transition: all 200ms linear 0s;\n  border: 1px solid grey;\n  border-radius: 10px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 15px;\n\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n  :hover {\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    background: rgb(169, 219, 216);\n  }\n"]))),Z=t(184);function y(){var n=(0,p.useState)(""),e=(0,m.Z)(n,2),t=e[0],r=e[1],a=(0,p.useState)(""),i=(0,m.Z)(a,2),o=i[0],s=i[1],d=(0,x.v9)(c),l=(0,x.I0)(),u=(0,g.x0)(),b=(0,g.x0)(),f=function(n){var e=n.name,t=n.number,r={name:e.trim(),number:t.trim()};d.find((function(n){return n.name===r.name}))?alert("".concat(e," is already in the contacts")):l((0,h.uK)(r))},v=function(){r(""),s("")},y=function(n){switch(n.target.name){case"name":r(n.target.value);break;case"number":s(n.target.value);break;default:return}};return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(j,{action:"",onSubmit:function(n){n.preventDefault(),f({name:t,number:o}),v()},children:[(0,Z.jsxs)(w,{htmlFor:u,children:["Name",(0,Z.jsx)("input",{onChange:y,value:t,type:"text",name:"name",placeholder:"Input name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,Z.jsxs)(w,{htmlFor:b,children:["Number",(0,Z.jsx)("input",{onChange:y,value:o,type:"tel",name:"number",placeholder:"Input number xxx-xx-xx",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,Z.jsx)(k,{type:"submit",children:"Add contact"})]})})}var C=v.ZP.ol(o||(o=(0,f.Z)(["\n  height: 200px;\n  overflow-x: auto;\n"]))),P=v.ZP.li(s||(s=(0,f.Z)(["\n  :not(:last-child) {\n    margin-bottom: 10px;\n  }\n\n  div {\n    display: flex;\n    justify-content: space-between;\n    padding-top: 10px;\n    padding-bottom: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    border-radius: 10px;\n  }\n"]))),z=v.ZP.button(d||(d=(0,f.Z)(["\n  transition: all 200ms linear 0s;\n  border: 1px solid grey;\n  border-radius: 10px;\n  background-color: white;\n  cursor: pointer;\n  font-size: 15px;\n  :not(:last-child) {\n    margin-right: 10px;\n  }\n  :hover {\n    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;\n    background: rgb(169, 219, 216);\n  }\n"])));function F(){var n=(0,x.v9)(b),e=(0,x.v9)(c),t=(0,x.I0)();return(0,Z.jsx)(C,{children:function(){var t=n.toLowerCase().trim();return e.filter((function(n){return n.name.toLowerCase().includes(t)}))}().map((function(n){var e=n.name,r=n.number,a=n.id;return(0,Z.jsx)(P,{children:(0,Z.jsxs)("div",{children:[(0,Z.jsxs)("span",{children:[e,": ",r]}),(0,Z.jsx)(z,{data:"",onClick:function(){return t((0,h.GK)(a))},children:"Delete"})]})},a)}))})}var _,I,A=t(4808),q=v.ZP.label(_||(_=(0,f.Z)(["\n  display: flex;\n  flex-direction: column;\n  -webkit-box-pack: center;\n  justify-content: center;\n  align-items: flex-start;\n  margin-bottom: 20px;\n\n  input {\n    margin-top: 10px;\n    width: 97%;\n\n    height: 20px;\n    padding-left: 10px;\n    border: 1px solid rgba(33, 33, 33, 0.2);\n    border-radius: 4px;\n    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;\n\n    outline: none;\n    :hover,\n    :focus {\n      box-shadow: rgb(38, 57, 77) 0px 5px 30px -7px;\n    }\n  }\n"])));function L(){var n=(0,x.v9)(b),e=(0,x.I0)(),t=(0,g.x0)();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(q,{htmlFor:t,children:["Find contacts by name",(0,Z.jsx)("input",{onChange:function(n){return e((0,A.T)(n.target.value))},value:n,name:"filter",type:"text",placeholder:"Input name to find"})]})})}var N=v.ZP.div(I||(I=(0,f.Z)(["\n  border-radius: 10px;\n  box-shadow: 0 0 10px teal;\n  margin: 20px auto;\n  padding: 20px;\n  text-align: center;\n  max-width: 500px;\n\n  h1,\n  h2 {\n    color: teal;\n  }\n\n  div {\n    box-shadow: rgb(34 60 80 / 20%) 0px 5px 10px 2px;\n    padding-top: 20px;\n    padding-bottom: 20px;\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n"]))),S=function(){var n=(0,x.I0)(),e=(0,x.v9)(l),t=(0,x.v9)(u);return(0,p.useEffect)((function(){n((0,h.yF)())}),[n]),(0,Z.jsx)("main",{children:(0,Z.jsxs)(N,{children:[(0,Z.jsx)("h1",{children:"Phonebook"}),(0,Z.jsx)(y,{}),(0,Z.jsx)("h2",{children:"Contacts"}),(0,Z.jsxs)("div",{children:[(0,Z.jsx)(L,{}),e&&!t&&(0,Z.jsx)("b",{children:"Request in progress..."}),(0,Z.jsx)(F,{})]})]})})}}}]);
//# sourceMappingURL=940.a1abd60a.chunk.js.map