/*! For license information please see 49.25a57a6f.chunk.js.LICENSE.txt */
(self.webpackChunkinfotech=self.webpackChunkinfotech||[]).push([[49],{49:(e,r,t)=>{"use strict";t.r(r),t.d(r,{default:()=>f});var s=t(791),o=t(287),c=t(689),a=t(694),n=t.n(a),i=t(184);const l=e=>{let{selectedFighters:r,activeFighterCell:t}=e;return(0,i.jsx)("table",{className:"fighters__table",children:(0,i.jsx)("tbody",{children:Array.from({length:o.HI}).map(((e,s)=>(0,i.jsx)("tr",{children:Array.from({length:o._T}).map(((e,c)=>{const a=s*o._T+c,{name:l,id:d,avatar:h}=o.dX[a],u=Object.values(r).indexOf(d),f=-1!==u,w=0===u;return(0,i.jsx)("td",{id:d,"data-selected-user-number":w?1:2,className:n()("fighters__table__cell",{active:t.row===s&&t.col===c,selected:f,"first--selected":w,"second--selected":!w}),children:(0,i.jsx)("img",{src:h,alt:l,className:"avatar"})},d)}))},s)))})})},d=(0,s.memo)(l);var h=t(912);const u=()=>{const e=(0,c.s0)(),{selectedFighters:r,setSelectedFighters:t,isSelectedFighters:a}=(0,h.b)(),[n,l]=(0,s.useState)({row:0,col:0});(0,s.useEffect)((()=>{if(a){const r=setTimeout((()=>{e(o.EV)}),2e3);return()=>clearTimeout(r)}}),[a,e]);const u=(0,s.useCallback)((()=>{if(!a){const e=n.row*o._T+n.col,r=o.dX[e].id;t((e=>{const{first:t,second:s}=e,o=!t;return t===r||s===r?e:{first:o?r:t,second:o?s:r}}))}}),[a,n,t]),f=(0,s.useCallback)((e=>{l((r=>{let t,s;switch(e){case"ArrowUp":t=(r.row-1+o.HI)%o.HI,s=r.col;break;case"ArrowDown":t=(r.row+1)%o.HI,s=r.col;break;case"ArrowLeft":t=r.row,s=(r.col-1+o._T)%o._T;break;case"ArrowRight":t=r.row,s=(r.col+1)%o._T}if("number"===typeof t&&"number"===typeof s)return{row:t,col:s};throw new Error("Arrow button error")}))}),[]),w=e=>{const{key:r}=e;switch(r){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":f(r);break;case"Enter":u()}};return(0,s.useEffect)((()=>(window.addEventListener("keydown",w),()=>{window.removeEventListener("keydown",w)})),[n]),(0,i.jsxs)("div",{className:"fighter--selection",children:[a&&(0,i.jsx)("div",{className:"fight--start",children:(0,i.jsx)("span",{children:"Prepare!"})}),(0,i.jsx)("h1",{className:"title",children:"select your fighter"}),(0,i.jsx)(d,{selectedFighters:r,activeFighterCell:n}),(0,i.jsx)("div",{className:"zone--label",children:"kombat zone: soul chamber"})]})},f=(0,s.memo)(u)},694:(e,r)=>{var t;!function(){"use strict";var s={}.hasOwnProperty;function o(){for(var e=[],r=0;r<arguments.length;r++){var t=arguments[r];if(t){var c=typeof t;if("string"===c||"number"===c)e.push(t);else if(Array.isArray(t)){if(t.length){var a=o.apply(null,t);a&&e.push(a)}}else if("object"===c){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){e.push(t.toString());continue}for(var n in t)s.call(t,n)&&t[n]&&e.push(n)}}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(t=function(){return o}.apply(r,[]))||(e.exports=t)}()}}]);
//# sourceMappingURL=49.25a57a6f.chunk.js.map