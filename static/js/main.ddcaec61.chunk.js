(this["webpackJsonpccbp-timeline"]=this["webpackJsonpccbp-timeline"]||[]).push([[0],{23:function(e,t,c){},25:function(e,t,c){},26:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(4),r=c.n(s),i=c(3),o=c(5),j=c(10),l=c(16),u=c(17),d=c(14),b=c(13),h=c.n(b),p=c(7),O=c(11),x=c(12),g=c.n(x),m=c(15),f=(c(22),c(23),c(1)),v=function(e){var t=e.category,c=Object(n.useState)(""),a=Object(p.a)(c,2),s=a[0],r=a[1],j=Object(n.useState)(!0),l=Object(p.a)(j,2),u=l[0],d=l[1],b=function(){var e=Object(o.a)(Object(i.a)().mark((function e(){var c,n,a;return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),c="https://api.chucknorris.io/jokes/random?category=".concat(t),e.next=4,fetch(c);case 4:return n=e.sent,e.next=7,n.json();case 7:a=e.sent,r(a.value),d(!1);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){b()}),[t]);var h=t.charAt(0).toUpperCase()+t.slice(1);return Object(f.jsx)(O.a,{trigger:Object(f.jsxs)("div",{className:"joke-box",children:[Object(f.jsx)("h1",{className:"category",children:h}),Object(f.jsxs)("p",{className:"text",children:["Unlimited Jokes on ",t]})]}),modal:!0,children:function(e){return Object(f.jsxs)("div",{className:"modal-content",children:[Object(f.jsx)("button",{type:"button",className:"close-button",onClick:e,children:Object(f.jsx)(m.a,{className:"icon"})}),Object(f.jsx)("h1",{className:"popup-heading",children:h}),Object(f.jsxs)("div",{className:"content-container",children:[u?Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(g.a,{color:"white",loading:true,size:150,"aria-label":"Loading Spinner","data-testid":"loader"})}):Object(f.jsx)("p",{className:"joke",children:s}),Object(f.jsx)("button",{className:"next-joke-button",type:"button",onClick:b,children:"Next Joke"})]})]})}})},k=(c(25),function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;Object(j.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={categories:[],isLoading:!0},e.getCategories=Object(o.a)(Object(i.a)().mark((function t(){var c,n;return Object(i.a)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({isLoading:!0}),"https://api.chucknorris.io/jokes/categories",t.next=4,fetch("https://api.chucknorris.io/jokes/categories");case 4:return c=t.sent,t.next=7,c.json();case 7:n=t.sent,e.setState({categories:n,isLoading:!1});case 9:case"end":return t.stop()}}),t)}))),e}return Object(l.a)(c,[{key:"componentDidMount",value:function(){this.getCategories()}},{key:"render",value:function(){var e=this.state,t=e.categories,c=e.isLoading;return Object(f.jsxs)("div",{className:"bg-container",children:[Object(f.jsx)("h1",{className:"heading",children:"Chuck Norries"}),c?Object(f.jsx)("div",{className:"loader",children:Object(f.jsx)(h.a,{color:"white",loading:!0,size:150,"aria-label":"Loading Spinner","data-testid":"loader"})}):Object(f.jsx)("div",{className:"jokes-container",children:t.map((function(e){return Object(f.jsx)(v,{category:e},e)}))})]})}}]),c}(n.Component)),N=k,y=function(){return Object(f.jsx)(N,{})};r.a.render(Object(f.jsx)(a.a.StrictMode,{children:Object(f.jsx)(y,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.ddcaec61.chunk.js.map