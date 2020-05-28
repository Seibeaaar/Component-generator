(this["webpackJsonpjappware-test"]=this["webpackJsonpjappware-test"]||[]).push([[0],{17:function(e,t,a){},21:function(e,t,a){e.exports=a(36)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(10),o=a.n(l),r=a(3),i=a(11),p=a(2),s=a(19),u={components:[]},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0,a=Object(s.a)(e.components);switch(t.type){case"ADD_COMPONENT":return Object(p.a)(Object(p.a)({},e),{},{components:a.concat(t.payload)});case"CHANGE_LABEL":return a[t.payload.id].label=t.payload.label,Object(p.a)(Object(p.a)({},e),{},{components:a});case"CHANGE_TYPE":return a[t.payload.id].type=t.payload.type,Object(p.a)(Object(p.a)({},e),{},{components:a});case"TOGGLE_OPTIONS":return a[t.payload.id].additional.hasOwnProperty("options")||(a[t.payload.id].additional=t.payload.condition?{options:[]}:{}),Object(p.a)(Object(p.a)({},e),{},{components:a});case"TOGGLE_RANGE":return a[t.payload.id].additional=t.payload.condition?{min:"",max:"",step:""}:{},Object(p.a)(Object(p.a)({},e),{},{components:a});case"GET_RANGE":return a[t.payload.id].additional=t.payload.config,Object(p.a)(Object(p.a)({},e),{},{components:a});case"GET_OPTIONS":return a[t.payload.id].additional.options=t.payload.config,Object(p.a)(Object(p.a)({},e),{},{components:a});default:return e}},d=Object(i.b)(m,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),b=(a(31),a(5)),E=(a(32),Object(r.b)(null,{getRange:function(e,t){return{type:"GET_RANGE",payload:{id:e,config:t}}}})((function(e){var t=e.id,a=e.getRange,l=Object(n.useState)(""),o=Object(b.a)(l,2),r=o[0],i=o[1],p=Object(n.useState)(""),s=Object(b.a)(p,2),u=s[0],m=s[1],d=Object(n.useState)(""),E=Object(b.a)(d,2),_=E[0],f=E[1];return Object(n.useEffect)((function(){a(t,{min:r,max:u,step:_})})),c.a.createElement("div",{className:"range__wrapper"},"Set range parameters",c.a.createElement("div",{className:"range__config"},c.a.createElement("label",{className:"range__label"},"Min",c.a.createElement("input",{type:"number",min:"1",max:"50",value:r,onChange:function(e){return i(e.target.value)},className:"range__input"})),c.a.createElement("label",{className:"range__label"},"Max",c.a.createElement("input",{type:"number",min:"1",max:"50",value:u,onChange:function(e){return m(e.target.value)},className:"range__input"})),c.a.createElement("label",{className:"range__label"},"Step",c.a.createElement("input",{type:"number",min:"1",max:"50",value:_,onChange:function(e){return f(e.target.value)},className:"range__input"}))))}))),_=a(49),f=a(50),O=(a(33),Object(r.b)(null,{getOptions:function(e,t){return{type:"GET_OPTIONS",payload:{id:e,config:t}}}})((function(e){var t=e.id,a=e.getOptions,l=Object(n.useState)([]),o=Object(b.a)(l,2),r=o[0],i=o[1],p=Object(n.useState)(!1),s=Object(b.a)(p,2),u=s[0],m=s[1],d=Object(n.useState)(""),E=Object(b.a)(d,2),O=E[0],g=E[1];Object(n.useEffect)((function(){a(t,r)}));return c.a.createElement("div",{className:"options__wrapper"},r.length?r.map((function(e){return c.a.createElement("div",{className:"options__item"},e)})):!u&&"Add options",u?c.a.createElement("div",{className:"options__config"},c.a.createElement("input",{type:"text",value:O,onChange:function(e){return g(e.target.value)},className:"options__input"}),c.a.createElement("button",{onClick:function(){O&&(i(r.concat(O)),g(""),m(!1))}},c.a.createElement(_.a,null))):c.a.createElement("button",{onClick:function(){return m(!0)},className:"options__add"},c.a.createElement(f.a,null)))}))),g=Object(r.b)(null,{changeLabel:function(e,t){return{type:"CHANGE_LABEL",payload:{id:e,label:t}}},changeType:function(e,t){return{type:"CHANGE_TYPE",payload:{id:e,type:t}}},toggleOptions:function(e,t){return{type:"TOGGLE_OPTIONS",payload:{id:e,condition:t}}},toggleRange:function(e,t){return{type:"TOGGLE_RANGE",payload:{id:e,condition:t}}}})((function(e){var t=e.id,a=e.changeLabel,l=e.changeType,o=e.toggleOptions,r=e.toggleRange,i=Object(n.useState)(""),p=Object(b.a)(i,2),s=p[0],u=p[1],m=Object(n.useState)(""),d=Object(b.a)(m,2),_=d[0],f=d[1];return Object(n.useEffect)((function(){a(t,_)}),[_]),Object(n.useEffect)((function(){"checkbox"===s||"radio"===s?o(t,!0):"range"===s?r(t,!0):(o(t,!1),r(t,!1)),l(t,s)}),[s]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"config__wrapper"},c.a.createElement("select",{onChange:function(e){u(e.target.value)},className:"config__select input"},c.a.createElement("option",{disabled:!0,selected:!0},"Type"),c.a.createElement("option",{value:"text"},"Text"),c.a.createElement("option",{value:"password"},"Password"),c.a.createElement("option",{value:"checkbox"},"Checkbox"),c.a.createElement("option",{value:"radio"},"Radio"),c.a.createElement("option",{value:"range"},"Range")),c.a.createElement("input",{type:"text",placeholder:"Message",onChange:function(e){return f(e.target.value)},className:"config__input input"})),("radio"===s||"checkbox"===s)&&c.a.createElement(O,{id:t}),"range"===s&&c.a.createElement(E,{id:t}))})),y=(a(34),Object(r.b)((function(e){return{components:e.components}}),{addComponent:function(e){return{type:"ADD_COMPONENT",payload:e}}})((function(e){var t=e.components,a=e.addComponent;return c.a.createElement("div",{className:"app__component"},c.a.createElement("h2",null,"Components config"),c.a.createElement("div",{className:"component__wrapper"},c.a.createElement("div",{className:"component__block"},t.map((function(e,t){return c.a.createElement(g,{key:t,id:t})}))),c.a.createElement("button",{className:"config__add",onClick:function(){return a({type:"",label:"",additional:{}})}},"Add component")))}))),N=function(e){var t=e.type,a=e.label;return c.a.createElement("div",{className:"display ".concat((!t||!a)&&"none")},c.a.createElement("label",{className:"preview__label"},a),c.a.createElement("input",{type:t,className:"input"}))},v=(a(17),function(e){var t=e.type,a=e.label,n=e.additional.options;return c.a.createElement("div",{className:"".concat((!t||!a||!n.length)&&"none")},c.a.createElement("p",{className:"preview__label"},a),n.map((function(e,a){return c.a.createElement("label",{className:"fieldset__label"},c.a.createElement("input",{type:t,value:e,name:"radio-group",className:"fieldset__input"}),e)})))}),j=function(e){var t=e.type,a=e.label,n=e.additional.options;return c.a.createElement("div",{className:"".concat((!t||!a||!n.length)&&"none")},c.a.createElement("p",{className:"preview__label"},a),n.map((function(e){return c.a.createElement("label",{className:"fieldset__label"},c.a.createElement("input",{type:t,value:e,className:"fieldset__input"}),e)})))},h=function(e){var t=e.type,a=e.label,n=e.additional,l=n.min,o=n.max,r=n.step;return c.a.createElement("div",{className:"".concat(!(t&&a&&l&&o&&r&&l<o)&&"none")},c.a.createElement("label",{className:"preview__label"},a),c.a.createElement("input",{type:t,min:l,max:o,step:r}))},T=Object(r.b)((function(e){return{components:e.components}}),null)((function(e){var t=e.components;return c.a.createElement("div",{className:"app__component"},c.a.createElement("h2",null,"Components preview"),c.a.createElement("div",{className:"component__wrapper"},c.a.createElement("div",{className:"component__block"},t.map((function(e){switch(e.type){case"radio":return c.a.createElement(v,{type:e.type,label:e.label,additional:e.additional});case"checkbox":return c.a.createElement(j,{type:e.type,label:e.label,additional:e.additional});case"range":return c.a.createElement(h,{type:e.type,label:e.label,additional:e.additional});default:return c.a.createElement(N,{type:e.type,label:e.label})}})))))})),w=(a(35),function(){return c.a.createElement("div",{className:"app__container"},c.a.createElement(y,null),c.a.createElement(T,null))});o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(r.a,{store:d},c.a.createElement(w,null))),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.fe3141f2.chunk.js.map