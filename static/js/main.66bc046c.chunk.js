(this["webpackJsonpexpense-manager"]=this["webpackJsonpexpense-manager"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),a=n.n(r),s=n(7),o=n.n(s);n(14),n(15);var i=function(){return Object(c.jsx)("div",{children:Object(c.jsx)("h2",{children:"Expense Tracker"})})},l=n(3),u=n(8),j=n(6),d=function(e,t){switch(console.log(e._transactions),t.type){case"DELETE_TRANS":return Object(j.a)(Object(j.a)({},e),{},{_transactions:e._transactions.filter((function(e){return e.id!==t.payload}))});case"ADD_TRANS":return{_transactions:[].concat(Object(u.a)(e._transactions),[t.payload])};default:return e}},b={_transactions:[{id:1,text:"Flower",amount:-20},{id:2,text:"Salary",amount:300},{id:3,text:"Book",amount:-10},{id:4,text:"Camera",amount:150}]},x=Object(r.createContext)(b),h=function(e){var t=e.children,n=Object(r.useReducer)(d,b),a=Object(l.a)(n,2),s=a[0],o=a[1];return Object(c.jsx)(x.Provider,{value:{transactions:s._transactions,deleteTransaction:function(e){console.log(e),o({type:"DELETE_TRANS",payload:e}),console.log(s._transactions)},addTrans:function(e){console.log(e),o({type:"ADD_TRANS",payload:e})}},children:t})};var O=function(){var e=Object(r.useContext)(x).transactions.map((function(e){return e.amount}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Your Balance"}),Object(c.jsx)("h1",{children:e.reduce((function(e,t){return e+t}),0)})]})};var m=function(){var e=Object(r.useContext)(x).transactions.map((function(e){return e.amount}));return Object(c.jsxs)("div",{className:"inc-exp-container",children:[Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Income"}),Object(c.jsxs)("p",{className:"money plus",children:["+$",e.filter((function(e){return e>0})).reduce((function(e,t){return e+t}),0)]})]}),Object(c.jsxs)("div",{children:[Object(c.jsx)("h4",{children:"Expense"}),Object(c.jsxs)("p",{className:"money minus",children:["-$",e.filter((function(e){return e<0})).reduce((function(e,t){return e+t}),0)]})]})]})};var f=function(){var e=Object(r.useContext)(x),t=e.transactions,n=e.deleteTransaction;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"History"}),Object(c.jsx)("ul",{className:"list",children:t.map((function(e){return Object(c.jsxs)("li",{className:"-"==e.amount.toString().split("")[0]?"minus":"plus",children:[e.text,Object(c.jsx)("span",{children:e.amount}),Object(c.jsx)("button",{className:"delete-btn",onClick:function(){return n(e.id)},children:"x"})]},e.id)}))})]})};var p=function(){var e=Object(r.useState)(""),t=Object(l.a)(e,2),n=t[0],a=t[1],s=Object(r.useState)(""),o=Object(l.a)(s,2),i=o[0],u=o[1],j=Object(r.useContext)(x).addTrans;return Object(c.jsxs)("div",{children:[Object(c.jsx)("h3",{children:"Add new transaction"}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.log(Math.floor(1e4*Math.random()+1)),console.log(typeof n);var t={id:Math.floor(10*Math.random()+1),text:i,amount:parseInt(n)};j(t)},children:[Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsx)("label",{htmlFor:"text",children:"Text"}),Object(c.jsx)("input",{type:"text",value:i,placeholder:"Enter text...",onChange:function(e){return u(e.target.value)}})]}),Object(c.jsxs)("div",{className:"form-control",children:[Object(c.jsxs)("label",{htmlFor:"amount",children:["Amount ",Object(c.jsx)("br",{}),"(negative - expense, positive - income)"]}),Object(c.jsx)("input",{type:"number",value:n,placeholder:"Enter amount...",onChange:function(e){return a(e.target.value)}})]}),Object(c.jsx)("button",{className:"btn",children:"Add transaction"})]})]})};var v=function(){return Object(c.jsxs)(h,{children:[Object(c.jsx)(i,{}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)(O,{}),Object(c.jsx)(m,{}),Object(c.jsx)(f,{}),Object(c.jsx)(p,{})]})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),a(e),s(e)}))};o.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(v,{})}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.66bc046c.chunk.js.map