(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{6318:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return J}});var r=t(5893),i=t(809),a=t.n(i),s=t(2447),o=t(7294),c=t(9008),l=t(3434),u=t(4275),d=t(3457),h=t(5834),p=t(2516),m=t(9669),x=t.n(m);x().interceptors.request.use((function(n){return console.log({url:n.url,requestParams:n.params}),n})),x().interceptors.response.use((function(n){return console.log({responseData:n.data}),n}));var f="https://tebukuro.npkn.net/pachinko",g=function(){var n=(0,s.Z)(a().mark((function n(e,t){var r,i;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:r=e,n.next=4;break;case 4:return t(!0),i=x().get(f,{params:r}).then((function(n){return n.data})).catch((function(n){console.error(n)})).finally((function(){t(!1)})),n.abrupt("return",i);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),j=t(6127),Z=t(2863),v=function(n){return"number"===typeof n},k=t(1749),b=t(2318),_=t(661),y=t(5378),w=function(n){var e=n.title,t=n.value,i=n.max,a=n.min,s=n.changeHandler;return(0,r.jsxs)("div",{children:[(0,r.jsx)(b.Z,{gutterBottom:!0,children:e}),(0,r.jsxs)(k.Z,{container:!0,spacing:4,children:[(0,r.jsx)(k.Z,{item:!0,xs:!0,children:(0,r.jsx)(_.Z,{value:t,max:i,min:a,step:.1,color:"secondary",onChange:s,"aria-labelledby":"continuous-slider"})}),(0,r.jsx)(k.Z,{item:!0,children:(0,r.jsx)(y.Z,{value:t,margin:"dense",onChange:function(n){return s(n,parseFloat(n.target.value))},onBlur:function(n){return function(n){parseFloat(n.target.value)>i?s(n,i):parseFloat(n.target.value)<a&&s(n,a)}(n)},inputProps:{step:.1,min:{min:a},max:{max:i},type:"number","aria-labelledby":"input-slider"}})})]})]})},P=l.ZP.div.withConfig({displayName:"InputForm__FormArea",componentId:"sc-yobs1e-0"})(["width:80%;margin:0 10px;"]),C=l.ZP.div.withConfig({displayName:"InputForm__SliderArea",componentId:"sc-yobs1e-1"})(["margin-bottom:20px;"]);function N(n){var e=n.getPachinko,t=(0,o.useState)(199),i=t[0],a=t[1],s=(0,o.useState)(60),c=s[0],l=s[1],u=(0,o.useState)(50),d=u[0],h=u[1],p=(0,o.useState)(60),m=p[0],x=p[1];return(0,r.jsxs)(P,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),(0,r.jsxs)(C,{children:[(0,r.jsx)(w,{title:"\u4f4e\u78ba\u7387\u72b6\u614b\u3067\u306e\u5927\u5f53\u305f\u308a\u78ba\u7387[1/n]",value:i,max:400,min:100,changeHandler:function(n,e){v(e)&&(console.log("changeNormal"),a(e))}},0),(0,r.jsx)(w,{title:"\u9ad8\u78ba\u7387\u72b6\u614b\u3067\u306e\u5927\u5f53\u305f\u308a\u78ba\u7387[1/n]",value:c,max:400,min:10,changeHandler:function(n,e){v(e)&&l(e)}},1),(0,r.jsx)(w,{title:"\u9ad8\u78ba\u7387\u72b6\u614b\u7a81\u5165\u7387[%]",value:d,max:100,min:0,changeHandler:function(n,e){v(e)&&h(e)}},2),(0,r.jsx)(w,{title:"\u9ad8\u78ba\u7387\u72b6\u614b\u7d99\u7d9a\u7387[%]",value:m,max:100,min:0,changeHandler:function(n,e){v(e)&&x(e)}},3)]}),(0,r.jsx)(j.Z,{variant:"contained",color:"primary",endIcon:(0,r.jsx)(Z.Z,{children:"send"}),onClick:function(){e({normal:i,koukaku:c,kakuhen:d,keizoku:m})},children:"Send"})]})}var I=t(2302),S=t(9613),H=t(8222),T=t(6847),F=t(3750),E=t(7394),z=t(9895),A=t(1385),q=function(n,e){return(0,A.Z)(Array(e-n+1)).map((function(e,t){return n+t}))},B=(0,l.ZP)(z.Z).withConfig({displayName:"ResultTable__TableCellPaper",componentId:"sc-sr7muc-0"})(["min-width:350px;max-width:80%;"]),L=(0,l.ZP)(F.Z).withConfig({displayName:"ResultTable__StyledTableHeader",componentId:"sc-sr7muc-1"})(["border-bottom:2px double white;"]),M=function(n){var e=n.results;return(0,r.jsx)("div",{children:(0,r.jsx)(T.Z,{component:B,children:(0,r.jsxs)(I.Z,{size:"small","aria-label":"simple table",children:[(0,r.jsx)(L,{children:(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(H.Z,{align:"center",children:"index"}),(0,r.jsx)(H.Z,{align:"center",children:"\u56de\u8ee2\u6570"}),(0,r.jsx)(H.Z,{align:"center",children:"\u72b6\u614b"}),(0,r.jsx)(H.Z,{align:"center",children:"\u6b21\u56de"})]})}),(0,r.jsxs)(S.Z,{children:[e.map((function(n,e){return(0,r.jsxs)(E.Z,{children:[(0,r.jsx)(H.Z,{align:"right",children:e}),(0,r.jsx)(H.Z,{align:"right",children:n.kaiten}),(0,r.jsx)(H.Z,{align:"right",children:n.mode}),(0,r.jsx)(H.Z,{align:"right",children:n.next})]},e)})),(!e||!e.length)&&q(0,20).map((function(n){E.Z,H.Z,H.Z,H.Z,H.Z}))]})]})})})},O=t(2888),R=function(n){var e=n.isLoading,t=n.children;return(0,r.jsx)(O.Z,{active:e,spinner:!0,text:"now loading...",children:t})},X=l.ZP.main.withConfig({displayName:"pages__StyledMain",componentId:"sc-j6l5u8-0"})(["margin:0 20px;"]),D=l.ZP.h1.withConfig({displayName:"pages__Title",componentId:"sc-j6l5u8-1"})(["font-size:35px;"]),G=l.ZP.h2.withConfig({displayName:"pages__StyledH2",componentId:"sc-j6l5u8-2"})(["font-size:20px;margin-top:40px;"]);function J(){var n=(0,o.useState)([]),e=n[0],t=n[1],i=(0,o.useState)(!1),l=i[0],m=i[1],x=(0,u.Z)({palette:{type:"dark"}}),f=function(){var n=(0,s.Z)(a().mark((function n(e){var r;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g(e,m);case 2:(r=n.sent)&&t(r);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}();return(0,r.jsxs)(d.Z,{theme:x,children:[(0,r.jsxs)(c.default,{children:[(0,r.jsx)("title",{children:"Pachinko"}),(0,r.jsx)("meta",{name:"description",content:"\u3071\u3061\u3093\u3053\u30d7\u30ed\u30b0\u30e9\u30e0"})]}),(0,r.jsx)(R,{isLoading:l,children:(0,r.jsxs)(X,{children:[(0,r.jsx)(h.ZP,{}),(0,r.jsx)(D,{children:"pachinko"}),(0,r.jsx)("a",{href:"https://github.com/tebukuro-facebook/pachinko-front",children:(0,r.jsx)(p.Z,{})}),(0,r.jsx)(G,{children:"\u8a2d\u5b9a"}),(0,r.jsx)(N,{getPachinko:f}),(0,r.jsx)(G,{children:"\u7d50\u679c"}),(0,r.jsx)(M,{results:e})]})})]})}},5301:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(6318)}])}},function(n){n.O(0,[774,756,888,179],(function(){return e=5301,n(n.s=e);var e}));var e=n.O();_N_E=e}]);