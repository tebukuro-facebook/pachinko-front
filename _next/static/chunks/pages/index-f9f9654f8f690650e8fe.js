(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5719:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return le}});var r=t(5893),i=t(809),a=t.n(i),s=t(2447),c=t(7294),o=t(9008),l=t(3434),u=t(5636),d=t(3457),p=t(5834),h=t(2516),m=t(9669),x=t.n(m);x().interceptors.request.use((function(e){return console.log({url:e.url,requestParams:e.params}),e})),x().interceptors.response.use((function(e){return console.log({responseData:e.data}),e}));var f="https://tebukuro.npkn.net/pachinko",g=function(){var e=(0,s.Z)(a().mark((function e(n,t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n,e.next=4;break;case 4:return t(!0),i=x().get(f,{params:r}).then((function(e){return e.data})).catch((function(e){console.error(e)})).finally((function(){t(!1)})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),j=t(282),v=t(2863),Z=function(e){return"number"===typeof e},b=t(1749),y=t(2318),k=t(4845),w=t(5378),_=(0,l.ZP)(w.Z).withConfig({displayName:"InputSlider__SideInput",componentId:"sc-1d757yq-0"})(["max-width:40px"]),P=function(e){var n=e.title,t=e.value,i=e.max,a=e.min,s=e.step,c=e.changeHandler;return(0,r.jsxs)("div",{children:[(0,r.jsx)(y.Z,{gutterBottom:!0,children:n}),(0,r.jsxs)(b.Z,{container:!0,spacing:2,children:[(0,r.jsx)(b.Z,{item:!0,xs:!0,children:(0,r.jsx)(k.Z,{value:t,max:i,min:a,step:s||.1,color:"secondary",onChange:c,"aria-labelledby":"continuous-slider"})}),(0,r.jsx)(b.Z,{item:!0,children:(0,r.jsx)(_,{value:t,margin:"dense",onChange:function(e){return c(e,parseFloat(e.target.value))},onBlur:function(e){return function(e){parseFloat(e.target.value)>i?c(e,i):parseFloat(e.target.value)<a&&c(e,a)}(e)},inputProps:{step:.1,min:{min:a},max:{max:i},type:"number","aria-labelledby":"input-slider"}})})]})]})},S=l.ZP.div.withConfig({displayName:"InputForm__FormArea",componentId:"sc-yobs1e-0"})(["margin:0 10px;"]),C=l.ZP.div.withConfig({displayName:"InputForm__SliderArea",componentId:"sc-yobs1e-1"})(["margin-bottom:15px;"]);function O(e){var n=e.getPachinko,t=(0,c.useState)(199),i=t[0],a=t[1],s=(0,c.useState)(60),o=s[0],l=s[1],u=(0,c.useState)(50),d=u[0],p=u[1],h=(0,c.useState)(60),m=h[0],x=h[1];return(0,r.jsxs)(S,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),(0,r.jsxs)(C,{children:[(0,r.jsx)(P,{title:"\u4f4e\u78ba\u7387\u72b6\u614b\u3067\u306e\u5927\u5f53\u305f\u308a\u78ba\u7387[1/n]",value:i,max:400,min:100,changeHandler:function(e,n){Z(n)&&(console.log("changeNormal"),a(n))}},0),(0,r.jsx)(P,{title:"\u9ad8\u78ba\u7387\u72b6\u614b\u3067\u306e\u5927\u5f53\u305f\u308a\u78ba\u7387[1/n]",value:o,max:400,min:10,changeHandler:function(e,n){Z(n)&&l(n)}},1),(0,r.jsx)(P,{title:"\u9ad8\u78ba\u7387\u72b6\u614b\u7a81\u5165\u7387[%]",value:d,max:100,min:0,changeHandler:function(e,n){Z(n)&&p(n)}},2),(0,r.jsx)(P,{title:"\u9ad8\u78ba\u7387\u72b6\u614b\u7d99\u7d9a\u7387[%]",value:m,max:100,min:0,changeHandler:function(e,n){Z(n)&&x(n)}},3)]}),(0,r.jsx)(j.Z,{variant:"contained",color:"primary",endIcon:(0,r.jsx)(v.Z,{children:"send"}),onClick:function(){n({normal:i,koukaku:o,kakuhen:d,keizoku:m})},children:"Send"})]})}var I=t(2302),N=t(9613),H=t(8222),E=t(6847),F=t(3750),q=t(7394),z=t(9895),T=(0,l.ZP)(z.Z).withConfig({displayName:"ResultTable__TableCellPaper",componentId:"sc-sr7muc-0"})(["min-width:350px;max-width:80%;"]),D=(0,l.ZP)(F.Z).withConfig({displayName:"ResultTable__StyledTableHeader",componentId:"sc-sr7muc-1"})(["border-bottom:2px double white;"]),A=function(e){var n,t=e.results;return t.length<=0?(0,r.jsx)("div",{}):"object"===typeof(n=t)&&null!==n&&n.length>=1&&"number"===typeof n[0].kaiten&&"string"===typeof n[0].mode&&"string"===typeof n[0].next?(0,r.jsx)("div",{children:(0,r.jsx)(E.Z,{component:T,children:(0,r.jsxs)(I.Z,{size:"small","aria-label":"simple table",children:[(0,r.jsx)(D,{children:(0,r.jsxs)(q.Z,{children:[(0,r.jsx)(H.Z,{align:"center",children:"index"}),(0,r.jsx)(H.Z,{align:"center",children:"\u56de\u8ee2\u6570"}),(0,r.jsx)(H.Z,{align:"center",children:"\u72b6\u614b"}),(0,r.jsx)(H.Z,{align:"center",children:"\u6b21\u56de"})]})}),(0,r.jsx)(N.Z,{children:t.map((function(e,n){return(0,r.jsxs)(q.Z,{children:[(0,r.jsx)(H.Z,{align:"right",children:n}),(0,r.jsx)(H.Z,{align:"right",children:e.kaiten}),(0,r.jsx)(H.Z,{align:"right",children:e.mode}),(0,r.jsx)(H.Z,{align:"right",children:e.next})]},n)}))})]})})}):(0,r.jsx)("div",{children:(0,r.jsx)(E.Z,{component:T,children:(0,r.jsxs)(I.Z,{size:"small","aria-label":"simple table",children:[(0,r.jsx)(D,{children:(0,r.jsxs)(q.Z,{children:[(0,r.jsx)(H.Z,{align:"center",children:"index"}),(0,r.jsx)(H.Z,{align:"center",children:"\u56de\u8ee2\u6570"}),(0,r.jsx)(H.Z,{align:"center",children:"\u5927\u5f53\u305f\u308a"})]})}),(0,r.jsx)(N.Z,{children:t.map((function(e,n){return(0,r.jsxs)(q.Z,{children:[(0,r.jsx)(H.Z,{align:"right",children:n}),(0,r.jsx)(H.Z,{align:"right",children:e.kaiten}),(0,r.jsx)(H.Z,{align:"right",children:e.ooatari})]},n)}))})]})})})},L=t(2888),M=function(e){var n=e.isLoading,t=e.children;return(0,r.jsx)(L.Z,{active:n,spinner:!0,text:"now loading...",children:t})};x().interceptors.request.use((function(e){return console.log({url:e.url,requestParams:e.params}),e})),x().interceptors.response.use((function(e){return console.log({responseData:e.data}),e}));var B="https://tebukuro.npkn.net/pachinko-symphogear",R=function(){var e=(0,s.Z)(a().mark((function e(n,t){var r,i;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=n,e.next=4;break;case 4:return t(!0),i=x().get(B,{params:r}).then((function(e){return e.data})).catch((function(e){console.error(e)})).finally((function(){t(!1)})),e.abrupt("return",i);case 7:case"end":return e.stop()}}),e)})));return function(n,t){return e.apply(this,arguments)}}(),X=l.ZP.div.withConfig({displayName:"SymphogearForm__FormArea",componentId:"sc-18q4gav-0"})(["margin:0 10px;"]),G=l.ZP.div.withConfig({displayName:"SymphogearForm__SliderArea",componentId:"sc-18q4gav-1"})(["margin-bottom:15px;"]),J=function(e){var n=e.getSymphogear,t=(0,c.useState)(199),i=t[0],a=t[1],s=(0,c.useState)(60),o=s[0],l=s[1],u=(0,c.useState)(10),d=u[0],p=u[1],h=(0,c.useState)(10),m=h[0],x=h[1],f=(0,c.useState)(1e3),g=f[0],b=f[1];return(0,r.jsxs)(X,{children:[(0,r.jsx)("link",{rel:"stylesheet",href:"https://fonts.googleapis.com/icon?family=Material+Icons"}),(0,r.jsxs)(G,{children:[(0,r.jsx)(P,{title:"\u7279\u56f32\u3067\u306e\u5927\u5f53\u305f\u308a\u78ba\u7387[1/n]",value:i,max:400,min:100,changeHandler:function(e,n){Z(n)&&a(n)}},0),(0,r.jsx)(P,{title:"\u7279\u56f32\u3067\u306e\u5c0f\u5f53\u305f\u308a\u78ba\u7387[1/n]",value:o,max:400,min:10,changeHandler:function(e,n){Z(n)&&l(n)}},1),(0,r.jsx)(P,{title:"\u7279\u56f31\u5f53\u305b\u3093\u6642\u306e\u96fb\u30b5\u30dd\u56de\u6570[\u56de]",value:d,max:100,min:0,changeHandler:function(e,n){Z(n)&&p(n)}},2),(0,r.jsx)(P,{title:"\u7279\u56f32\u5f53\u305b\u3093\u6642\u306e\u96fb\u30b5\u30dd\u56de\u6570[\u56de]",value:m,max:100,min:0,changeHandler:function(e,n){Z(n)&&x(n)}},3),(0,r.jsx)(P,{title:"\u8a66\u884c\u56de\u6570",value:g,max:1e4,min:0,step:1,changeHandler:function(e,n){Z(n)&&b(n)}},4)]}),(0,r.jsx)(j.Z,{variant:"contained",color:"primary",endIcon:(0,r.jsx)(v.Z,{children:"send"}),onClick:function(){n({normal:i,koukaku:o,tokuzu1:d,tokuzu2:m,challenge:g})},children:"Send"})]})},K=t(9227),Q=t(6265),U=t(8347),V=t(1120),W=t(5258),Y=t(65),$=t(1423),ee=t(9956);function ne(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function te(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ne(Object(t),!0).forEach((function(n){(0,Q.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ne(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function re(e){var n=e.children,t=e.value,i=e.index,a=(0,U.Z)(e,["children","value","index"]);return(0,r.jsx)("div",te(te({role:"tabpanel",hidden:t!==i,id:"simple-tabpanel-".concat(i),"aria-labelledby":"simple-tab-".concat(i)},a),{},{children:t===i&&(0,r.jsx)(ee.Z,{py:4,children:(0,r.jsx)(y.Z,{children:n})})}))}var ie=(0,V.Z)((function(e){return{root:{flexGrow:1,backgroundColor:e.palette.background.paper}}})),ae=function(e){var n=e.titleList,t=e.children,i=ie(),a=c.useState(0),s=(0,K.Z)(a,2),o=s[0],l=s[1];return(0,r.jsxs)("div",{className:i.root,children:[(0,r.jsx)(W.Z,{position:"static",children:(0,r.jsx)(Y.Z,{value:o,onChange:function(e,n){l(n)},"aria-label":"simple tabs example",children:n.map((function(e,n){return(0,c.createElement)($.Z,te(te({label:e},function(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}(n)),{},{key:"tab-".concat(n)}))}))})}),t.map((function(e,n){return(0,r.jsx)(re,{value:o,index:n,children:e},"tabPanel-".concat(n))}))]})},se=l.ZP.main.withConfig({displayName:"pages__StyledMain",componentId:"sc-j6l5u8-0"})(["margin:0 20px;"]),ce=l.ZP.h1.withConfig({displayName:"pages__Title",componentId:"sc-j6l5u8-1"})(["font-size:35px;"]),oe=l.ZP.h2.withConfig({displayName:"pages__StyledH2",componentId:"sc-j6l5u8-2"})(["font-size:20px;margin-top:40px;"]);function le(){var e=(0,c.useState)([]),n=e[0],t=e[1],i=(0,c.useState)([]),l=i[0],m=i[1],x=(0,c.useState)([]),f=x[0],j=x[1];(0,c.useEffect)((function(){j(n)}),[n]),(0,c.useEffect)((function(){j(l)}),[l]);var v=(0,c.useState)(!1),Z=v[0],b=v[1],y=(0,u.Z)({palette:{type:"dark"}}),k=function(){var e=(0,s.Z)(a().mark((function e(n){var r;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g(n,b);case 2:(r=e.sent)&&t(r);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),w=function(){var e=(0,s.Z)(a().mark((function e(n){var t;return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,R(n,b);case 2:(t=e.sent)&&m(t);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}();return(0,r.jsxs)(d.Z,{theme:y,children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Pachinko"}),(0,r.jsx)("meta",{name:"description",content:"\u3071\u3061\u3093\u3053\u30d7\u30ed\u30b0\u30e9\u30e0"})]}),(0,r.jsx)(M,{isLoading:Z,children:(0,r.jsxs)(se,{children:[(0,r.jsx)(p.ZP,{}),(0,r.jsx)(ce,{children:"pachinko"}),(0,r.jsx)("a",{href:"https://github.com/tebukuro-facebook/pachinko-front",children:(0,r.jsx)(h.Z,{})}),(0,r.jsx)(oe,{children:"\u8a2d\u5b9a"}),(0,r.jsxs)(ae,{titleList:["Pachinko1","Symphogear"],children:[(0,r.jsx)(O,{getPachinko:k}),(0,r.jsx)(J,{getSymphogear:w})]}),(0,r.jsx)(oe,{children:"\u7d50\u679c"}),(0,r.jsx)(A,{results:f})]})})]})}},5301:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5719)}])}},function(e){e.O(0,[774,209,888,179],(function(){return n=5301,e(e.s=n);var n}));var n=e.O();_N_E=n}]);