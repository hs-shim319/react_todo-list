(this["webpackJsonptodo-list-practice"]=this["webpackJsonptodo-list-practice"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},22:function(e,t,n){},23:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(2),r=n.n(o),a=n(12),i=n.n(a),s=(n(20),n(11)),l=n(14),d=n(3),u=n(4),h=n(7),j=n(6),b=(n(21),function(e){var t=e.palette,n=e.form,o=e.list;e.color;return Object(c.jsxs)("main",{children:[Object(c.jsx)("section",{className:"palette-wrapper",children:t}),Object(c.jsx)("section",{className:"form-wrapper",children:n}),Object(c.jsx)("section",{className:"list-wrapper",children:o})]})}),f=(n(22),function(e){var t=e.color,n=e.active,o=e.onClick;return Object(c.jsx)("div",{className:"color-data ".concat(n?"active":""),style:{background:t},onClick:o})}),v=function(e){var t=e.colors,n=e.selected,o=e.onSelect,r=t.map((function(e){return Object(c.jsx)(f,{color:e,active:n===e,onClick:function(){return o(e)}},e)}));return Object(c.jsx)("div",{className:"color-list",children:r})},p=(n(23),function(e){var t=e.value,n=e.onChange,o=e.onKeyPress,r=e.onCreate,a=e.color;return Object(c.jsxs)("div",{className:"form",children:[Object(c.jsx)("input",{value:t,onChange:n,onKeyPress:o}),Object(c.jsx)("div",{className:"create-button",onClick:r,style:{background:a},children:"+"})]})}),O=(n(24),n(13)),m=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.text,n=e.checked,o=e.id,r=e.onToggle,a=e.onRemove,i=e.color;return Object(c.jsxs)("div",{className:"todo-item",onClick:function(){return r(o)},children:[Object(c.jsx)("div",{className:"checked-circle ".concat(n?"checked":""),style:{borderColor:i,color:n?"#fff":i,backgroundColor:n?i:""},children:"\u2713"}),Object(c.jsx)("div",{className:"todo-text ".concat(n?"checked":""),children:t}),Object(c.jsx)("div",{className:"remove",onClick:function(e){e.stopPropagation(),a(o)},children:Object(c.jsx)(O.a,{icon:"trash-alt"})})]})}}]),n}(o.Component),x=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var e=this.props,t=e.todos,n=e.onToggle,o=e.onRemove,r=t.map((function(e){var t=e.id,r=e.text,a=e.checked,i=e.color;return Object(c.jsx)(m,{id:t,text:r,checked:a,onToggle:n,onRemove:o,color:i},t)}));return Object(c.jsx)("div",{children:r})}}]),n}(o.Component),g=n(5),C=n(8);g.b.add(C.b,C.a);var k=function(e){Object(h.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(d.a)(this,n);for(var c=arguments.length,o=new Array(c),r=0;r<c;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).id=1,e.state={input:"",todos:[{id:0,text:"\uc548\ub140\uc6a9",checked:!1}],color:"#343a40"},e.handleChange=function(t){e.setState({input:t.target.value})},e.handleKeyPress=function(t){"Enter"===t.key&&e.handleCreate()},e.handleCreate=function(){var t=e.state,n=t.input,c=t.todos,o=t.color;n?e.setState({input:"",todos:c.concat({id:e.id++,text:n,checked:!1,color:o})}):alert("\ub0b4\uc6a9\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694.")},e.handleToggle=function(t){var n=e.state.todos,c=n.findIndex((function(e){return e.id===t})),o=n[c],r=Object(l.a)(n);r[c]=Object(s.a)(Object(s.a)({},o),{},{checked:!o.checked}),e.setState({todos:r})},e.handleRemove=function(t){var n=e.state.todos;e.setState({todos:n.filter((function(e){return e.id!==t}))})},e.handleSelectColor=function(t){e.setState({color:t})},e}return Object(u.a)(n,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.todos,o=e.color,r=this.handleChange,a=this.handleKeyPress,i=this.handleCreate,s=this.handleToggle,l=this.handleRemove,d=this.handleSelectColor;return Object(c.jsx)("div",{children:Object(c.jsx)(b,{form:Object(c.jsx)(p,{value:t,onChange:r,onKeyPress:a,onCreate:i,color:o}),list:Object(c.jsx)(x,{todos:n,onToggle:s,onRemove:l}),palette:Object(c.jsx)(v,{colors:["#343a40","#f03e3e","#12b886","#228ae6"],onSelect:d,selected:o})})})}}]),n}(o.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,r=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),r(e),a(e)}))};i.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(k,{})}),document.getElementById("root")),y()}},[[30,1,2]]]);
//# sourceMappingURL=main.100f9ffa.chunk.js.map