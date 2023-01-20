import{S as Et,i as It,s as Rt,C as pt,D as V,k as Y,l as j,m as H,h as O,E as k,b as U,F as w,G as $,H as _t,I as bt,J as St,K as J,L as ct,f as P,t as M,M as wt,N as ut,O as kt,o as Mt,P as Yt,Q as G,v as Jt,w as nt,e as Ct,x as ht,y as rt,R as Pt,g as Vt,z as lt,d as Kt,T as Qt,U as Ft,a as Ot,c as Dt,n as Tt,V as x,W as me,X as pe,Y as _e,Z as be,q as fe,r as de,u as Se}from"../../chunks/index-698f7898.js";import{g as yt}from"../../chunks/navigation-f1e2d34f.js";import{_ as at,a as ft,M as jt,c as F,u as mt,f as Ht,R as xt,d as Nt,B as ve,A as Ae,b as Te,p as Ce}from"../../chunks/index-fb353fed.js";import{p as B,e as dt}from"../../chunks/prefixFilter-69369360.js";import{L as Ee}from"../../chunks/index-8926a8d7.js";/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ie={ACTIVE:"mdc-tab-indicator--active",FADE:"mdc-tab-indicator--fade",NO_TRANSITION:"mdc-tab-indicator--no-transition"},Re={CONTENT_SELECTOR:".mdc-tab-indicator__content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var et=function(r){at(t,r);function t(e){return r.call(this,ft(ft({},t.defaultAdapter),e))||this}return Object.defineProperty(t,"cssClasses",{get:function(){return Ie},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Re},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},computeContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},setContentStyleProperty:function(){}}},enumerable:!1,configurable:!0}),t.prototype.computeContentClientRect=function(){return this.adapter.computeContentClientRect()},t}(jt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Le=function(r){at(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.activate=function(){this.adapter.addClass(et.cssClasses.ACTIVE)},t.prototype.deactivate=function(){this.adapter.removeClass(et.cssClasses.ACTIVE)},t}(et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var $t=function(r){at(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.activate=function(e){if(!e){this.adapter.addClass(et.cssClasses.ACTIVE);return}var n=this.computeContentClientRect(),l=e.width/n.width,a=e.left-n.left;this.adapter.addClass(et.cssClasses.NO_TRANSITION),this.adapter.setContentStyleProperty("transform","translateX("+a+"px) scaleX("+l+")"),this.computeContentClientRect(),this.adapter.removeClass(et.cssClasses.NO_TRANSITION),this.adapter.addClass(et.cssClasses.ACTIVE),this.adapter.setContentStyleProperty("transform","")},t.prototype.deactivate=function(){this.adapter.removeClass(et.cssClasses.ACTIVE)},t}(et);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Wt={ACTIVE:"mdc-tab--active"},Lt={ARIA_SELECTED:"aria-selected",CONTENT_SELECTOR:".mdc-tab__content",INTERACTED_EVENT:"MDCTab:interacted",RIPPLE_SELECTOR:".mdc-tab__ripple",TABINDEX:"tabIndex",TAB_INDICATOR_SELECTOR:".mdc-tab-indicator"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ye=function(r){at(t,r);function t(e){var n=r.call(this,ft(ft({},t.defaultAdapter),e))||this;return n.focusOnActivate=!0,n}return Object.defineProperty(t,"cssClasses",{get:function(){return Wt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Lt},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},activateIndicator:function(){},deactivateIndicator:function(){},notifyInteracted:function(){},getOffsetLeft:function(){return 0},getOffsetWidth:function(){return 0},getContentOffsetLeft:function(){return 0},getContentOffsetWidth:function(){return 0},focus:function(){}}},enumerable:!1,configurable:!0}),t.prototype.handleClick=function(){this.adapter.notifyInteracted()},t.prototype.isActive=function(){return this.adapter.hasClass(Wt.ACTIVE)},t.prototype.setFocusOnActivate=function(e){this.focusOnActivate=e},t.prototype.activate=function(e){this.adapter.addClass(Wt.ACTIVE),this.adapter.setAttr(Lt.ARIA_SELECTED,"true"),this.adapter.setAttr(Lt.TABINDEX,"0"),this.adapter.activateIndicator(e),this.focusOnActivate&&this.adapter.focus()},t.prototype.deactivate=function(){!this.isActive()||(this.adapter.removeClass(Wt.ACTIVE),this.adapter.setAttr(Lt.ARIA_SELECTED,"false"),this.adapter.setAttr(Lt.TABINDEX,"-1"),this.adapter.deactivateIndicator())},t.prototype.computeDimensions=function(){var e=this.adapter.getOffsetWidth(),n=this.adapter.getOffsetLeft(),l=this.adapter.getContentOffsetWidth(),a=this.adapter.getContentOffsetLeft();return{contentLeft:n+a,contentRight:n+a+l,rootLeft:n,rootRight:n+e}},t}(jt);function Oe(r){let t,e,n,l,a,c,o,s,g,p,v;const h=r[21].default,m=pt(h,r,r[20],null);let R=[{class:n=F({[r[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":r[3]==="underline","mdc-tab-indicator__content--icon":r[3]==="icon"})},{style:l=Object.entries(r[10]).map(te).join(" ")},{"aria-hidden":a=r[3]==="icon"?"true":void 0},B(r[12],"content$")],E={};for(let d=0;d<R.length;d+=1)E=V(E,R[d]);let b=[{class:o=F({[r[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":r[0],"mdc-tab-indicator--fade":r[4]==="fade",...r[9]})},dt(r[12],["content$"])],f={};for(let d=0;d<b.length;d+=1)f=V(f,b[d]);return{c(){t=Y("span"),e=Y("span"),m&&m.c(),this.h()},l(d){t=j(d,"SPAN",{class:!0});var T=H(t);e=j(T,"SPAN",{class:!0,style:!0,"aria-hidden":!0});var A=H(e);m&&m.l(A),A.forEach(O),T.forEach(O),this.h()},h(){k(e,E),k(t,f)},m(d,T){U(d,t,T),w(t,e),m&&m.m(e,null),r[22](e),r[23](t),g=!0,p||(v=[$(c=mt.call(null,e,r[5])),$(s=mt.call(null,t,r[1])),$(r[11].call(null,t))],p=!0)},p(d,[T]){m&&m.p&&(!g||T&1048576)&&_t(m,h,d,d[20],g?St(h,d[20],T,null):bt(d[20]),null),k(e,E=J(R,[(!g||T&72&&n!==(n=F({[d[6]]:!0,"mdc-tab-indicator__content":!0,"mdc-tab-indicator__content--underline":d[3]==="underline","mdc-tab-indicator__content--icon":d[3]==="icon"})))&&{class:n},(!g||T&1024&&l!==(l=Object.entries(d[10]).map(te).join(" ")))&&{style:l},(!g||T&8&&a!==(a=d[3]==="icon"?"true":void 0))&&{"aria-hidden":a},T&4096&&B(d[12],"content$")])),c&&ct(c.update)&&T&32&&c.update.call(null,d[5]),k(t,f=J(b,[(!g||T&533&&o!==(o=F({[d[2]]:!0,"mdc-tab-indicator":!0,"mdc-tab-indicator--active":d[0],"mdc-tab-indicator--fade":d[4]==="fade",...d[9]})))&&{class:o},T&4096&&dt(d[12],["content$"])])),s&&ct(s.update)&&T&2&&s.update.call(null,d[1])},i(d){g||(P(m,d),g=!0)},o(d){M(m,d),g=!1},d(d){d&&O(t),m&&m.d(d),r[22](null),r[23](null),p=!1,wt(v)}}}const te=([r,t])=>`${r}: ${t};`;function De(r,t,e){const n=["use","class","active","type","transition","content$use","content$class","activate","deactivate","computeContentClientRect","getElement"];let l=ut(t,n),{$$slots:a={},$$scope:c}=t;const o=Ht(kt());let{use:s=[]}=t,{class:g=""}=t,{active:p=!1}=t,{type:v="underline"}=t,{transition:h="slide"}=t,{content$use:m=[]}=t,{content$class:R=""}=t,E,b,f,d={},T={},A=[],L=h;Mt(()=>(e(17,b=y()),b.init(),()=>{b.destroy()}));function y(){const S={fade:Le,slide:$t}[h]||$t;return new S({addClass:(...u)=>_(()=>I(...u)),removeClass:(...u)=>_(()=>N(...u)),computeContentClientRect:X,setContentStyleProperty:(...u)=>_(()=>z(...u))})}function _(S){A.length?A[A.length-1].push(S):S()}function I(S){d[S]||e(9,d[S]=!0,d)}function N(S){(!(S in d)||d[S])&&e(9,d[S]=!1,d)}function z(S,u){T[S]!=u&&(u===""||u==null?(delete T[S],e(10,T),e(19,L),e(4,h),e(17,b)):e(10,T[S]=u,T))}function Q(S){e(0,p=!0),b.activate(S)}function ot(){e(0,p=!1),b.deactivate()}function X(){return A.push([]),e(18,A),f.getBoundingClientRect()}function gt(){return E}function it(S){G[S?"unshift":"push"](()=>{f=S,e(8,f)})}function st(S){G[S?"unshift":"push"](()=>{E=S,e(7,E)})}return r.$$set=S=>{t=V(V({},t),Yt(S)),e(12,l=ut(t,n)),"use"in S&&e(1,s=S.use),"class"in S&&e(2,g=S.class),"active"in S&&e(0,p=S.active),"type"in S&&e(3,v=S.type),"transition"in S&&e(4,h=S.transition),"content$use"in S&&e(5,m=S.content$use),"content$class"in S&&e(6,R=S.content$class),"$$scope"in S&&e(20,c=S.$$scope)},r.$$.update=()=>{r.$$.dirty&655376&&L!==h&&(e(19,L=h),b&&b.destroy(),e(9,d={}),e(10,T={}),e(17,b=y()),b.init()),r.$$.dirty&262144&&A.length&&requestAnimationFrame(()=>{var S;const u=(S=A.shift())!==null&&S!==void 0?S:[];e(18,A);for(const C of u)C()})},[p,s,g,v,h,m,R,E,f,d,T,o,l,Q,ot,X,gt,b,A,L,c,a,it,st]}class he extends Et{constructor(t){super(),It(this,t,De,Oe,Rt,{use:1,class:2,active:0,type:3,transition:4,content$use:5,content$class:6,activate:13,deactivate:14,computeContentClientRect:15,getElement:16})}get activate(){return this.$$.ctx[13]}get deactivate(){return this.$$.ctx[14]}get computeContentClientRect(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}const Pe=r=>({}),ee=r=>({}),Me=r=>({}),ne=r=>({});function re(r){let t,e;const n=[{active:r[18]},B(r[24],"tabIndicator$")];let l={$$slots:{default:[We]},$$scope:{ctx:r}};for(let a=0;a<n.length;a+=1)l=V(l,n[a]);return t=new he({props:l}),r[31](t),{c(){nt(t.$$.fragment)},l(a){ht(t.$$.fragment,a)},m(a,c){rt(t,a,c),e=!0},p(a,c){const o=c[0]&17039360?J(n,[c[0]&262144&&{active:a[18]},c[0]&16777216&&Pt(B(a[24],"tabIndicator$"))]):{};c[1]&32&&(o.$$scope={dirty:c,ctx:a}),t.$set(o)},i(a){e||(P(t.$$.fragment,a),e=!0)},o(a){M(t.$$.fragment,a),e=!1},d(a){r[31](null),lt(t,a)}}}function We(r){let t;const e=r[30]["tab-indicator"],n=pt(e,r,r[36],ne);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,a){n&&n.m(l,a),t=!0},p(l,a){n&&n.p&&(!t||a[1]&32)&&_t(n,e,l,l[36],t?St(e,l[36],a,Me):bt(l[36]),ne)},i(l){t||(P(n,l),t=!0)},o(l){M(n,l),t=!1},d(l){n&&n.d(l)}}}function le(r){let t,e;const n=[{active:r[18]},B(r[24],"tabIndicator$")];let l={$$slots:{default:[Ne]},$$scope:{ctx:r}};for(let a=0;a<n.length;a+=1)l=V(l,n[a]);return t=new he({props:l}),r[33](t),{c(){nt(t.$$.fragment)},l(a){ht(t.$$.fragment,a)},m(a,c){rt(t,a,c),e=!0},p(a,c){const o=c[0]&17039360?J(n,[c[0]&262144&&{active:a[18]},c[0]&16777216&&Pt(B(a[24],"tabIndicator$"))]):{};c[1]&32&&(o.$$scope={dirty:c,ctx:a}),t.$set(o)},i(a){e||(P(t.$$.fragment,a),e=!0)},o(a){M(t.$$.fragment,a),e=!1},d(a){r[33](null),lt(t,a)}}}function Ne(r){let t;const e=r[30]["tab-indicator"],n=pt(e,r,r[36],ee);return{c(){n&&n.c()},l(l){n&&n.l(l)},m(l,a){n&&n.m(l,a),t=!0},p(l,a){n&&n.p&&(!t||a[1]&32)&&_t(n,e,l,l[36],t?St(e,l[36],a,Pe):bt(l[36]),ee)},i(l){t||(P(n,l),t=!0)},o(l){M(n,l),t=!1},d(l){n&&n.d(l)}}}function Ve(r){let t,e,n,l,a,c,o,s,g,p;const v=r[30].default,h=pt(v,r,r[36],null);let m=r[6]&&re(r),R=[{class:n=F({[r[9]]:!0,"mdc-tab__content":!0})},B(r[24],"content$")],E={};for(let f=0;f<R.length;f+=1)E=V(E,R[f]);let b=!r[6]&&le(r);return{c(){t=Y("span"),h&&h.c(),e=Ot(),m&&m.c(),a=Ot(),b&&b.c(),c=Ot(),o=Y("span"),this.h()},l(f){t=j(f,"SPAN",{class:!0});var d=H(t);h&&h.l(d),e=Dt(d),m&&m.l(d),d.forEach(O),a=Dt(f),b&&b.l(f),c=Dt(f),o=j(f,"SPAN",{class:!0}),H(o).forEach(O),this.h()},h(){k(t,E),Tt(o,"class","mdc-tab__ripple")},m(f,d){U(f,t,d),h&&h.m(t,null),w(t,e),m&&m.m(t,null),r[32](t),U(f,a,d),b&&b.m(f,d),U(f,c,d),U(f,o,d),s=!0,g||(p=$(l=mt.call(null,t,r[8])),g=!0)},p(f,d){h&&h.p&&(!s||d[1]&32)&&_t(h,v,f,f[36],s?St(v,f[36],d,null):bt(f[36]),null),f[6]?m?(m.p(f,d),d[0]&64&&P(m,1)):(m=re(f),m.c(),P(m,1),m.m(t,null)):m&&(Vt(),M(m,1,1,()=>{m=null}),Kt()),k(t,E=J(R,[(!s||d[0]&512&&n!==(n=F({[f[9]]:!0,"mdc-tab__content":!0})))&&{class:n},d[0]&16777216&&B(f[24],"content$")])),l&&ct(l.update)&&d[0]&256&&l.update.call(null,f[8]),f[6]?b&&(Vt(),M(b,1,1,()=>{b=null}),Kt()):b?(b.p(f,d),d[0]&64&&P(b,1)):(b=le(f),b.c(),P(b,1),b.m(c.parentNode,c))},i(f){s||(P(h,f),P(m),P(b),s=!0)},o(f){M(h,f),M(m),M(b),s=!1},d(f){f&&O(t),h&&h.d(f),m&&m.d(),r[32](null),f&&O(a),b&&b.d(f),f&&O(c),f&&O(o),g=!1,p()}}}function Ke(r){let t,e,n;const l=[{use:[[xt,{ripple:r[3],unbounded:!1,addClass:r[21],removeClass:r[22],addStyle:r[23]}],r[20],...r[0]]},{class:F({[r[1]]:!0,"mdc-tab":!0,"mdc-tab--active":r[18],"mdc-tab--stacked":r[4],"mdc-tab--min-width":r[5],...r[15]})},{style:Object.entries(r[16]).map(ae).concat([r[2]]).join(" ")},{role:"tab"},{"aria-selected":r[18]?"true":"false"},{tabindex:r[18]||r[19]?"0":"-1"},{href:r[7]},r[17],dt(r[24],["content$","tabIndicator$"])];var a=r[10];function c(o){let s={$$slots:{default:[Ve]},$$scope:{ctx:o}};for(let g=0;g<l.length;g+=1)s=V(s,l[g]);return{props:s}}return a&&(t=Jt(a,c(r)),r[34](t),t.$on("click",r[35])),{c(){t&&nt(t.$$.fragment),e=Ct()},l(o){t&&ht(t.$$.fragment,o),e=Ct()},m(o,s){t&&rt(t,o,s),U(o,e,s),n=!0},p(o,s){const g=s[0]&33521855?J(l,[s[0]&15728649&&{use:[[xt,{ripple:o[3],unbounded:!1,addClass:o[21],removeClass:o[22],addStyle:o[23]}],o[20],...o[0]]},s[0]&294962&&{class:F({[o[1]]:!0,"mdc-tab":!0,"mdc-tab--active":o[18],"mdc-tab--stacked":o[4],"mdc-tab--min-width":o[5],...o[15]})},s[0]&65540&&{style:Object.entries(o[16]).map(ae).concat([o[2]]).join(" ")},l[3],s[0]&262144&&{"aria-selected":o[18]?"true":"false"},s[0]&786432&&{tabindex:o[18]||o[19]?"0":"-1"},s[0]&128&&{href:o[7]},s[0]&131072&&Pt(o[17]),s[0]&16777216&&Pt(dt(o[24],["content$","tabIndicator$"]))]):{};if(s[0]&17064768|s[1]&32&&(g.$$scope={dirty:s,ctx:o}),a!==(a=o[10])){if(t){Vt();const p=t;M(p.$$.fragment,1,0,()=>{lt(p,1)}),Kt()}a?(t=Jt(a,c(o)),o[34](t),t.$on("click",o[35]),nt(t.$$.fragment),P(t.$$.fragment,1),rt(t,e.parentNode,e)):t=null}else a&&t.$set(g)},i(o){n||(t&&P(t.$$.fragment,o),n=!0)},o(o){t&&M(t.$$.fragment,o),n=!1},d(o){r[34](null),o&&O(e),t&&lt(t,o)}}}const ae=([r,t])=>`${r}: ${t};`;function Fe(r,t,e){const n=["use","class","style","tab","ripple","stacked","minWidth","indicatorSpanOnlyContent","href","content$use","content$class","component","activate","deactivate","focus","getElement"];let l=ut(t,n),{$$slots:a={},$$scope:c}=t;const o=Ht(kt());let{use:s=[]}=t,{class:g=""}=t,{style:p=""}=t,{tab:v}=t,{ripple:h=!0}=t,{stacked:m=!1}=t,{minWidth:R=!1}=t,{indicatorSpanOnlyContent:E=!1}=t,{href:b=void 0}=t,{content$use:f=[]}=t,{content$class:d=""}=t,T,A,L,y,_={},I={},N={},z=Qt("SMUI:tab:focusOnActivate"),Q=v===Qt("SMUI:tab:initialActive"),ot=!1,{component:X=b==null?ve:Ae}=t;if(Ft("SMUI:label:context","tab"),Ft("SMUI:icon:context","tab"),!v)throw new Error("The tab property is required! It should be passed down from the TabBar to the Tab.");Mt(()=>{e(11,A=new ye({setAttr:u,addClass:it,removeClass:st,hasClass:gt,activateIndicator:D=>y.activate(D),deactivateIndicator:()=>y.deactivate(),notifyInteracted:()=>Nt(q(),"SMUITab:interacted",{tabId:v},void 0,!0),getOffsetLeft:()=>q().offsetLeft,getOffsetWidth:()=>q().offsetWidth,getContentOffsetLeft:()=>L.offsetLeft,getContentOffsetWidth:()=>L.offsetWidth,focus:tt}));const i={tabId:v,get element(){return q()},get active(){return Q},forceAccessible(D){e(19,ot=D)},computeIndicatorClientRect:()=>y.computeContentClientRect(),computeDimensions:()=>A.computeDimensions(),focus:tt,activate:C,deactivate:K};return Nt(q(),"SMUITab:mount",i),A.init(),()=>{Nt(q(),"SMUITab:unmount",i),A.destroy()}});function gt(i){return i in _?_[i]:q().classList.contains(i)}function it(i){_[i]||e(15,_[i]=!0,_)}function st(i){(!(i in _)||_[i])&&e(15,_[i]=!1,_)}function S(i,D){I[i]!=D&&(D===""||D==null?(delete I[i],e(16,I)):e(16,I[i]=D,I))}function u(i,D){N[i]!==D&&e(17,N[i]=D,N)}function C(i,D){e(18,Q=!0),D&&A.setFocusOnActivate(!1),A.activate(i),D&&A.setFocusOnActivate(z)}function K(){e(18,Q=!1),A.deactivate()}function tt(){q().focus()}function q(){return T.getElement()}function Bt(i){G[i?"unshift":"push"](()=>{y=i,e(14,y)})}function Ut(i){G[i?"unshift":"push"](()=>{L=i,e(13,L)})}function Xt(i){G[i?"unshift":"push"](()=>{y=i,e(14,y)})}function Gt(i){G[i?"unshift":"push"](()=>{T=i,e(12,T)})}const zt=i=>!i.defaultPrevented&&A&&A.handleClick();return r.$$set=i=>{t=V(V({},t),Yt(i)),e(24,l=ut(t,n)),"use"in i&&e(0,s=i.use),"class"in i&&e(1,g=i.class),"style"in i&&e(2,p=i.style),"tab"in i&&e(25,v=i.tab),"ripple"in i&&e(3,h=i.ripple),"stacked"in i&&e(4,m=i.stacked),"minWidth"in i&&e(5,R=i.minWidth),"indicatorSpanOnlyContent"in i&&e(6,E=i.indicatorSpanOnlyContent),"href"in i&&e(7,b=i.href),"content$use"in i&&e(8,f=i.content$use),"content$class"in i&&e(9,d=i.content$class),"component"in i&&e(10,X=i.component),"$$scope"in i&&e(36,c=i.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&2048&&A&&A.setFocusOnActivate(z)},[s,g,p,h,m,R,E,b,f,d,X,A,T,L,y,_,I,N,Q,ot,o,it,st,S,l,v,C,K,tt,q,a,Bt,Ut,Xt,Gt,zt,c]}class ke extends Et{constructor(t){super(),It(this,t,Fe,Ke,Rt,{use:0,class:1,style:2,tab:25,ripple:3,stacked:4,minWidth:5,indicatorSpanOnlyContent:6,href:7,content$use:8,content$class:9,component:10,activate:26,deactivate:27,focus:28,getElement:29},null,[-1,-1])}get activate(){return this.$$.ctx[26]}get deactivate(){return this.$$.ctx[27]}get focus(){return this.$$.ctx[28]}get getElement(){return this.$$.ctx[29]}}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var ge={ANIMATING:"mdc-tab-scroller--animating",SCROLL_AREA_SCROLL:"mdc-tab-scroller__scroll-area--scroll",SCROLL_TEST:"mdc-tab-scroller__test"},Ye={AREA_SELECTOR:".mdc-tab-scroller__scroll-area",CONTENT_SELECTOR:".mdc-tab-scroller__scroll-content"};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Zt=function(){function r(t){this.adapter=t}return r}();/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var je=function(r){at(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(){var e=this.adapter.getScrollAreaScrollLeft(),n=this.calculateScrollEdges().right;return Math.round(n-e)},t.prototype.scrollToRTL=function(e){var n=this.calculateScrollEdges(),l=this.adapter.getScrollAreaScrollLeft(),a=this.clampScrollValue(n.right-e);return{finalScrollPosition:a,scrollDelta:a-l}},t.prototype.incrementScrollRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(n-e);return{finalScrollPosition:l,scrollDelta:l-n}},t.prototype.getAnimatingScrollPosition=function(e){return e},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-n}},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,e),n.right)},t}(Zt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var He=function(r){at(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(e-n)},t.prototype.scrollToRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(-e);return{finalScrollPosition:l,scrollDelta:l-n}},t.prototype.incrementScrollRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(n-e);return{finalScrollPosition:l,scrollDelta:l-n}},t.prototype.getAnimatingScrollPosition=function(e,n){return e-n},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:n-e,right:0}},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.max(Math.min(n.right,e),n.left)},t}(Zt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Be=function(r){at(t,r);function t(){return r!==null&&r.apply(this,arguments)||this}return t.prototype.getScrollPositionRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft();return Math.round(n-e)},t.prototype.scrollToRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(e);return{finalScrollPosition:l,scrollDelta:n-l}},t.prototype.incrementScrollRTL=function(e){var n=this.adapter.getScrollAreaScrollLeft(),l=this.clampScrollValue(n+e);return{finalScrollPosition:l,scrollDelta:n-l}},t.prototype.getAnimatingScrollPosition=function(e,n){return e+n},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:e-n,right:0}},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.min(Math.max(n.right,e),n.left)},t}(Zt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var Ue=function(r){at(t,r);function t(e){var n=r.call(this,ft(ft({},t.defaultAdapter),e))||this;return n.isAnimating=!1,n}return Object.defineProperty(t,"cssClasses",{get:function(){return ge},enumerable:!1,configurable:!0}),Object.defineProperty(t,"strings",{get:function(){return Ye},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{eventTargetMatchesSelector:function(){return!1},addClass:function(){},removeClass:function(){},addScrollAreaClass:function(){},setScrollAreaStyleProperty:function(){},setScrollContentStyleProperty:function(){},getScrollContentStyleValue:function(){return""},setScrollAreaScrollLeft:function(){},getScrollAreaScrollLeft:function(){return 0},getScrollContentOffsetWidth:function(){return 0},getScrollAreaOffsetWidth:function(){return 0},computeScrollAreaClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeScrollContentClientRect:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},computeHorizontalScrollbarHeight:function(){return 0}}},enumerable:!1,configurable:!0}),t.prototype.init=function(){var e=this.adapter.computeHorizontalScrollbarHeight();this.adapter.setScrollAreaStyleProperty("margin-bottom",-e+"px"),this.adapter.addScrollAreaClass(t.cssClasses.SCROLL_AREA_SCROLL)},t.prototype.getScrollPosition=function(){if(this.isRTL())return this.computeCurrentScrollPositionRTL();var e=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return n-e},t.prototype.handleInteraction=function(){!this.isAnimating||this.stopScrollAnimation()},t.prototype.handleTransitionEnd=function(e){var n=e.target;!this.isAnimating||!this.adapter.eventTargetMatchesSelector(n,t.strings.CONTENT_SELECTOR)||(this.isAnimating=!1,this.adapter.removeClass(t.cssClasses.ANIMATING))},t.prototype.incrementScroll=function(e){e!==0&&this.animate(this.getIncrementScrollOperation(e))},t.prototype.incrementScrollImmediate=function(e){if(e!==0){var n=this.getIncrementScrollOperation(e);n.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(n.finalScrollPosition))}},t.prototype.scrollTo=function(e){if(this.isRTL()){this.scrollToImplRTL(e);return}this.scrollToImpl(e)},t.prototype.getRTLScroller=function(){return this.rtlScrollerInstance||(this.rtlScrollerInstance=this.rtlScrollerFactory()),this.rtlScrollerInstance},t.prototype.calculateCurrentTranslateX=function(){var e=this.adapter.getScrollContentStyleValue("transform");if(e==="none")return 0;var n=/\((.+?)\)/.exec(e);if(!n)return 0;var l=n[1],a=Te(l.split(","),6);a[0],a[1],a[2],a[3];var c=a[4];return a[5],parseFloat(c)},t.prototype.clampScrollValue=function(e){var n=this.calculateScrollEdges();return Math.min(Math.max(n.left,e),n.right)},t.prototype.computeCurrentScrollPositionRTL=function(){var e=this.calculateCurrentTranslateX();return this.getRTLScroller().getScrollPositionRTL(e)},t.prototype.calculateScrollEdges=function(){var e=this.adapter.getScrollContentOffsetWidth(),n=this.adapter.getScrollAreaOffsetWidth();return{left:0,right:e-n}},t.prototype.scrollToImpl=function(e){var n=this.getScrollPosition(),l=this.clampScrollValue(e),a=l-n;this.animate({finalScrollPosition:l,scrollDelta:a})},t.prototype.scrollToImplRTL=function(e){var n=this.getRTLScroller().scrollToRTL(e);this.animate(n)},t.prototype.getIncrementScrollOperation=function(e){if(this.isRTL())return this.getRTLScroller().incrementScrollRTL(e);var n=this.getScrollPosition(),l=e+n,a=this.clampScrollValue(l),c=a-n;return{finalScrollPosition:a,scrollDelta:c}},t.prototype.animate=function(e){var n=this;e.scrollDelta!==0&&(this.stopScrollAnimation(),this.adapter.setScrollAreaScrollLeft(e.finalScrollPosition),this.adapter.setScrollContentStyleProperty("transform","translateX("+e.scrollDelta+"px)"),this.adapter.computeScrollAreaClientRect(),requestAnimationFrame(function(){n.adapter.addClass(t.cssClasses.ANIMATING),n.adapter.setScrollContentStyleProperty("transform","none")}),this.isAnimating=!0)},t.prototype.stopScrollAnimation=function(){this.isAnimating=!1;var e=this.getAnimatingScrollPosition();this.adapter.removeClass(t.cssClasses.ANIMATING),this.adapter.setScrollContentStyleProperty("transform","translateX(0px)"),this.adapter.setScrollAreaScrollLeft(e)},t.prototype.getAnimatingScrollPosition=function(){var e=this.calculateCurrentTranslateX(),n=this.adapter.getScrollAreaScrollLeft();return this.isRTL()?this.getRTLScroller().getAnimatingScrollPosition(n,e):n-e},t.prototype.rtlScrollerFactory=function(){var e=this.adapter.getScrollAreaScrollLeft();this.adapter.setScrollAreaScrollLeft(e-1);var n=this.adapter.getScrollAreaScrollLeft();if(n<0)return this.adapter.setScrollAreaScrollLeft(e),new He(this.adapter);var l=this.adapter.computeScrollAreaClientRect(),a=this.adapter.computeScrollContentClientRect(),c=Math.round(a.right-l.right);return this.adapter.setScrollAreaScrollLeft(e),c===n?new Be(this.adapter):new je(this.adapter)},t.prototype.isRTL=function(){return this.adapter.getScrollContentStyleValue("direction")==="rtl"},t}(jt);/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var qt;function Xe(r,t){if(t===void 0&&(t=!0),t&&typeof qt<"u")return qt;var e=r.createElement("div");e.classList.add(ge.SCROLL_TEST),r.body.appendChild(e);var n=e.offsetHeight-e.clientHeight;return r.body.removeChild(e),t&&(qt=n),n}/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var W={ARROW_LEFT_KEY:"ArrowLeft",ARROW_RIGHT_KEY:"ArrowRight",END_KEY:"End",ENTER_KEY:"Enter",HOME_KEY:"Home",SPACE_KEY:"Space",TAB_ACTIVATED_EVENT:"MDCTabBar:activated",TAB_SCROLLER_SELECTOR:".mdc-tab-scroller",TAB_SELECTOR:".mdc-tab"},Z={ARROW_LEFT_KEYCODE:37,ARROW_RIGHT_KEYCODE:39,END_KEYCODE:35,ENTER_KEYCODE:13,EXTRA_SCROLL_AMOUNT:20,HOME_KEYCODE:36,SPACE_KEYCODE:32};/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var vt=new Set;vt.add(W.ARROW_LEFT_KEY);vt.add(W.ARROW_RIGHT_KEY);vt.add(W.END_KEY);vt.add(W.HOME_KEY);vt.add(W.ENTER_KEY);vt.add(W.SPACE_KEY);var At=new Map;At.set(Z.ARROW_LEFT_KEYCODE,W.ARROW_LEFT_KEY);At.set(Z.ARROW_RIGHT_KEYCODE,W.ARROW_RIGHT_KEY);At.set(Z.END_KEYCODE,W.END_KEY);At.set(Z.HOME_KEYCODE,W.HOME_KEY);At.set(Z.ENTER_KEYCODE,W.ENTER_KEY);At.set(Z.SPACE_KEYCODE,W.SPACE_KEY);var Ge=function(r){at(t,r);function t(e){var n=r.call(this,ft(ft({},t.defaultAdapter),e))||this;return n.useAutomaticActivation=!1,n}return Object.defineProperty(t,"strings",{get:function(){return W},enumerable:!1,configurable:!0}),Object.defineProperty(t,"numbers",{get:function(){return Z},enumerable:!1,configurable:!0}),Object.defineProperty(t,"defaultAdapter",{get:function(){return{scrollTo:function(){},incrementScroll:function(){},getScrollPosition:function(){return 0},getScrollContentWidth:function(){return 0},getOffsetWidth:function(){return 0},isRTL:function(){return!1},setActiveTab:function(){},activateTabAtIndex:function(){},deactivateTabAtIndex:function(){},focusTabAtIndex:function(){},getTabIndicatorClientRectAtIndex:function(){return{top:0,right:0,bottom:0,left:0,width:0,height:0}},getTabDimensionsAtIndex:function(){return{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:function(){return-1},getFocusedTabIndex:function(){return-1},getIndexOfTabById:function(){return-1},getTabListLength:function(){return 0},notifyTabActivated:function(){}}},enumerable:!1,configurable:!0}),t.prototype.setUseAutomaticActivation=function(e){this.useAutomaticActivation=e},t.prototype.activateTab=function(e){var n=this.adapter.getPreviousActiveTabIndex();if(!(!this.indexIsInRange(e)||e===n)){var l;n!==-1&&(this.adapter.deactivateTabAtIndex(n),l=this.adapter.getTabIndicatorClientRectAtIndex(n)),this.adapter.activateTabAtIndex(e,l),this.scrollIntoView(e),this.adapter.notifyTabActivated(e)}},t.prototype.handleKeyDown=function(e){var n=this.getKeyFromEvent(e);if(n!==void 0)if(this.isActivationKey(n)||e.preventDefault(),this.useAutomaticActivation){if(this.isActivationKey(n))return;var l=this.determineTargetFromKey(this.adapter.getPreviousActiveTabIndex(),n);this.adapter.setActiveTab(l),this.scrollIntoView(l)}else{var a=this.adapter.getFocusedTabIndex();if(this.isActivationKey(n))this.adapter.setActiveTab(a);else{var l=this.determineTargetFromKey(a,n);this.adapter.focusTabAtIndex(l),this.scrollIntoView(l)}}},t.prototype.handleTabInteraction=function(e){this.adapter.setActiveTab(this.adapter.getIndexOfTabById(e.detail.tabId))},t.prototype.scrollIntoView=function(e){if(!!this.indexIsInRange(e)){if(e===0){this.adapter.scrollTo(0);return}if(e===this.adapter.getTabListLength()-1){this.adapter.scrollTo(this.adapter.getScrollContentWidth());return}if(this.isRTL()){this.scrollIntoViewImplRTL(e);return}this.scrollIntoViewImpl(e)}},t.prototype.determineTargetFromKey=function(e,n){var l=this.isRTL(),a=this.adapter.getTabListLength()-1,c=n===W.END_KEY,o=n===W.ARROW_LEFT_KEY&&!l||n===W.ARROW_RIGHT_KEY&&l,s=n===W.ARROW_RIGHT_KEY&&!l||n===W.ARROW_LEFT_KEY&&l,g=e;return c?g=a:o?g-=1:s?g+=1:g=0,g<0?g=a:g>a&&(g=0),g},t.prototype.calculateScrollIncrement=function(e,n,l,a){var c=this.adapter.getTabDimensionsAtIndex(n),o=c.contentLeft-l-a,s=c.contentRight-l,g=s-Z.EXTRA_SCROLL_AMOUNT,p=o+Z.EXTRA_SCROLL_AMOUNT;return n<e?Math.min(g,0):Math.max(p,0)},t.prototype.calculateScrollIncrementRTL=function(e,n,l,a,c){var o=this.adapter.getTabDimensionsAtIndex(n),s=c-o.contentLeft-l,g=c-o.contentRight-l-a,p=g+Z.EXTRA_SCROLL_AMOUNT,v=s-Z.EXTRA_SCROLL_AMOUNT;return n>e?Math.max(p,0):Math.min(v,0)},t.prototype.findAdjacentTabIndexClosestToEdge=function(e,n,l,a){var c=n.rootLeft-l,o=n.rootRight-l-a,s=c+o,g=c<0||s<0,p=o>0||s>0;return g?e-1:p?e+1:-1},t.prototype.findAdjacentTabIndexClosestToEdgeRTL=function(e,n,l,a,c){var o=c-n.rootLeft-a-l,s=c-n.rootRight-l,g=o+s,p=o>0||g>0,v=s<0||g<0;return p?e+1:v?e-1:-1},t.prototype.getKeyFromEvent=function(e){return vt.has(e.key)?e.key:At.get(e.keyCode)},t.prototype.isActivationKey=function(e){return e===W.SPACE_KEY||e===W.ENTER_KEY},t.prototype.indexIsInRange=function(e){return e>=0&&e<this.adapter.getTabListLength()},t.prototype.isRTL=function(){return this.adapter.isRTL()},t.prototype.scrollIntoViewImpl=function(e){var n=this.adapter.getScrollPosition(),l=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),c=this.findAdjacentTabIndexClosestToEdge(e,a,n,l);if(!!this.indexIsInRange(c)){var o=this.calculateScrollIncrement(e,c,n,l);this.adapter.incrementScroll(o)}},t.prototype.scrollIntoViewImplRTL=function(e){var n=this.adapter.getScrollPosition(),l=this.adapter.getOffsetWidth(),a=this.adapter.getTabDimensionsAtIndex(e),c=this.adapter.getScrollContentWidth(),o=this.findAdjacentTabIndexClosestToEdgeRTL(e,a,n,l,c);if(!!this.indexIsInRange(o)){var s=this.calculateScrollIncrementRTL(e,o,n,l,c);this.adapter.incrementScroll(s)}},t}(jt);function ze(r){let t,e,n,l,a,c,o,s,g,p,v,h,m,R;const E=r[23].default,b=pt(E,r,r[22],null);let f=[{class:l=F({[r[6]]:!0,"mdc-tab-scroller__scroll-content":!0})},{style:a=Object.entries(r[14]).map(oe).join(" ")},B(r[16],"scrollContent$")],d={};for(let _=0;_<f.length;_+=1)d=V(d,f[_]);let T=[{class:o=F({[r[4]]:!0,"mdc-tab-scroller__scroll-area":!0,...r[12]})},{style:s=Object.entries(r[13]).map(ie).join(" ")},B(r[16],"scrollArea$")],A={};for(let _=0;_<T.length;_+=1)A=V(A,T[_]);let L=[{class:p=F({[r[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":r[2]==="start","mdc-tab-scroller--align-end":r[2]==="end","mdc-tab-scroller--align-center":r[2]==="center",...r[11]})},dt(r[16],["scrollArea$","scrollContent$"])],y={};for(let _=0;_<L.length;_+=1)y=V(y,L[_]);return{c(){t=Y("div"),e=Y("div"),n=Y("div"),b&&b.c(),this.h()},l(_){t=j(_,"DIV",{class:!0});var I=H(t);e=j(I,"DIV",{class:!0,style:!0});var N=H(e);n=j(N,"DIV",{class:!0,style:!0});var z=H(n);b&&b.l(z),z.forEach(O),N.forEach(O),I.forEach(O),this.h()},h(){k(n,d),k(e,A),k(t,y)},m(_,I){U(_,t,I),w(t,e),w(e,n),b&&b.m(n,null),r[24](n),r[26](e),r[32](t),h=!0,m||(R=[$(c=mt.call(null,n,r[5])),x(n,"transitionend",r[25]),$(g=mt.call(null,e,r[3])),x(e,"wheel",r[27],{passive:!0}),x(e,"touchstart",r[28],{passive:!0}),x(e,"pointerdown",r[29]),x(e,"mousedown",r[30]),x(e,"keydown",r[31]),$(v=mt.call(null,t,r[0])),$(r[15].call(null,t))],m=!0)},p(_,I){b&&b.p&&(!h||I[0]&4194304)&&_t(b,E,_,_[22],h?St(E,_[22],I,null):bt(_[22]),null),k(n,d=J(f,[(!h||I[0]&64&&l!==(l=F({[_[6]]:!0,"mdc-tab-scroller__scroll-content":!0})))&&{class:l},(!h||I[0]&16384&&a!==(a=Object.entries(_[14]).map(oe).join(" ")))&&{style:a},I[0]&65536&&B(_[16],"scrollContent$")])),c&&ct(c.update)&&I[0]&32&&c.update.call(null,_[5]),k(e,A=J(T,[(!h||I[0]&4112&&o!==(o=F({[_[4]]:!0,"mdc-tab-scroller__scroll-area":!0,..._[12]})))&&{class:o},(!h||I[0]&8192&&s!==(s=Object.entries(_[13]).map(ie).join(" ")))&&{style:s},I[0]&65536&&B(_[16],"scrollArea$")])),g&&ct(g.update)&&I[0]&8&&g.update.call(null,_[3]),k(t,y=J(L,[(!h||I[0]&2054&&p!==(p=F({[_[1]]:!0,"mdc-tab-scroller":!0,"mdc-tab-scroller--align-start":_[2]==="start","mdc-tab-scroller--align-end":_[2]==="end","mdc-tab-scroller--align-center":_[2]==="center",..._[11]})))&&{class:p},I[0]&65536&&dt(_[16],["scrollArea$","scrollContent$"])])),v&&ct(v.update)&&I[0]&1&&v.update.call(null,_[0])},i(_){h||(P(b,_),h=!0)},o(_){M(b,_),h=!1},d(_){_&&O(t),b&&b.d(_),r[24](null),r[26](null),r[32](null),m=!1,wt(R)}}}const oe=([r,t])=>`${r}: ${t};`,ie=([r,t])=>`${r}: ${t};`;function qe(r,t,e){const n=["use","class","align","scrollArea$use","scrollArea$class","scrollContent$use","scrollContent$class","getScrollPosition","getScrollContentWidth","incrementScroll","scrollTo","getElement"];let l=ut(t,n),{$$slots:a={},$$scope:c}=t;const{matches:o}=Ce,s=Ht(kt());let{use:g=[]}=t,{class:p=""}=t,{align:v=void 0}=t,{scrollArea$use:h=[]}=t,{scrollArea$class:m=""}=t,{scrollContent$use:R=[]}=t,{scrollContent$class:E=""}=t,b,f,d,T,A={},L={},y={},_={};Mt(()=>(e(8,f=new Ue({eventTargetMatchesSelector:(i,D)=>o(i,D),addClass:I,removeClass:N,addScrollAreaClass:z,setScrollAreaStyleProperty:Q,setScrollContentStyleProperty:ot,getScrollContentStyleValue:X,setScrollAreaScrollLeft:i=>e(9,d.scrollLeft=i,d),getScrollAreaScrollLeft:()=>d.scrollLeft,getScrollContentOffsetWidth:()=>T.offsetWidth,getScrollAreaOffsetWidth:()=>d.offsetWidth,computeScrollAreaClientRect:()=>d.getBoundingClientRect(),computeScrollContentClientRect:()=>T.getBoundingClientRect(),computeHorizontalScrollbarHeight:()=>Xe(document)})),f.init(),()=>{f.destroy()}));function I(i){A[i]||e(11,A[i]=!0,A)}function N(i){(!(i in A)||A[i])&&e(11,A[i]=!1,A)}function z(i){L[i]||e(12,L[i]=!0,L)}function Q(i,D){y[i]!=D&&(D===""||D==null?(delete y[i],e(13,y)):e(13,y[i]=D,y))}function ot(i,D){_[i]!=D&&(D===""||D==null?(delete _[i],e(14,_)):e(14,_[i]=D,_))}function X(i){return i in _?_[i]:getComputedStyle(T).getPropertyValue(i)}function gt(){return f.getScrollPosition()}function it(){return T.offsetWidth}function st(i){f.incrementScroll(i)}function S(i){f.scrollTo(i)}function u(){return b}function C(i){G[i?"unshift":"push"](()=>{T=i,e(10,T)})}const K=i=>f&&f.handleTransitionEnd(i);function tt(i){G[i?"unshift":"push"](()=>{d=i,e(9,d)})}const q=()=>f&&f.handleInteraction(),Bt=()=>f&&f.handleInteraction(),Ut=()=>f&&f.handleInteraction(),Xt=()=>f&&f.handleInteraction(),Gt=()=>f&&f.handleInteraction();function zt(i){G[i?"unshift":"push"](()=>{b=i,e(7,b)})}return r.$$set=i=>{t=V(V({},t),Yt(i)),e(16,l=ut(t,n)),"use"in i&&e(0,g=i.use),"class"in i&&e(1,p=i.class),"align"in i&&e(2,v=i.align),"scrollArea$use"in i&&e(3,h=i.scrollArea$use),"scrollArea$class"in i&&e(4,m=i.scrollArea$class),"scrollContent$use"in i&&e(5,R=i.scrollContent$use),"scrollContent$class"in i&&e(6,E=i.scrollContent$class),"$$scope"in i&&e(22,c=i.$$scope)},[g,p,v,h,m,R,E,b,f,d,T,A,L,y,_,s,l,gt,it,st,S,u,c,a,C,K,tt,q,Bt,Ut,Xt,Gt,zt]}class we extends Et{constructor(t){super(),It(this,t,qe,ze,Rt,{use:0,class:1,align:2,scrollArea$use:3,scrollArea$class:4,scrollContent$use:5,scrollContent$class:6,getScrollPosition:17,getScrollContentWidth:18,incrementScroll:19,scrollTo:20,getElement:21},null,[-1,-1])}get getScrollPosition(){return this.$$.ctx[17]}get getScrollContentWidth(){return this.$$.ctx[18]}get incrementScroll(){return this.$$.ctx[19]}get scrollTo(){return this.$$.ctx[20]}get getElement(){return this.$$.ctx[21]}}function se(r,t,e){const n=r.slice();return n[30]=t[e],n}const Ze=r=>({tab:r[0]&4}),ce=r=>({tab:r[30]});function ue(r,t){let e,n;const l=t[20].default,a=pt(l,t,t[25],ce);return{key:r,first:null,c(){e=Ct(),a&&a.c(),this.h()},l(c){e=Ct(),a&&a.l(c),this.h()},h(){this.first=e},m(c,o){U(c,e,o),a&&a.m(c,o),n=!0},p(c,o){t=c,a&&a.p&&(!n||o[0]&33554436)&&_t(a,l,t,t[25],n?St(l,t[25],o,Ze):bt(t[25]),ce)},i(c){n||(P(a,c),n=!0)},o(c){M(a,c),n=!1},d(c){c&&O(e),a&&a.d(c)}}}function Je(r){let t=[],e=new Map,n,l,a=r[2];const c=o=>o[3](o[30]);for(let o=0;o<a.length;o+=1){let s=se(r,a,o),g=c(s);e.set(g,t[o]=ue(g,s))}return{c(){for(let o=0;o<t.length;o+=1)t[o].c();n=Ct()},l(o){for(let s=0;s<t.length;s+=1)t[s].l(o);n=Ct()},m(o,s){for(let g=0;g<t.length;g+=1)t[g].m(o,s);U(o,n,s),l=!0},p(o,s){s[0]&33554444&&(a=o[2],Vt(),t=me(t,s,c,1,o,a,e,n.parentNode,pe,ue,n,se),Kt())},i(o){if(!l){for(let s=0;s<a.length;s+=1)P(t[s]);l=!0}},o(o){for(let s=0;s<t.length;s+=1)M(t[s]);l=!1},d(o){for(let s=0;s<t.length;s+=1)t[s].d(o);o&&O(n)}}}function Qe(r){let t,e,n,l,a,c,o;const s=[B(r[10],"tabScroller$")];let g={$$slots:{default:[Je]},$$scope:{ctx:r}};for(let h=0;h<s.length;h+=1)g=V(g,s[h]);e=new we({props:g}),r[21](e);let p=[{class:n=F({[r[1]]:!0,"mdc-tab-bar":!0})},{role:"tablist"},dt(r[10],["tabScroller$"])],v={};for(let h=0;h<p.length;h+=1)v=V(v,p[h]);return{c(){t=Y("div"),nt(e.$$.fragment),this.h()},l(h){t=j(h,"DIV",{class:!0,role:!0});var m=H(t);ht(e.$$.fragment,m),m.forEach(O),this.h()},h(){k(t,v)},m(h,m){U(h,t,m),rt(e,t,null),r[22](t),a=!0,c||(o=[$(l=mt.call(null,t,r[0])),$(r[7].call(null,t)),x(t,"SMUITab:mount",r[8]),x(t,"SMUITab:unmount",r[9]),x(t,"SMUITab:interacted",r[23]),x(t,"keydown",r[24])],c=!0)},p(h,m){const R=m[0]&1024?J(s,[Pt(B(h[10],"tabScroller$"))]):{};m[0]&33554436&&(R.$$scope={dirty:m,ctx:h}),e.$set(R),k(t,v=J(p,[(!a||m[0]&2&&n!==(n=F({[h[1]]:!0,"mdc-tab-bar":!0})))&&{class:n},{role:"tablist"},m[0]&1024&&dt(h[10],["tabScroller$"])])),l&&ct(l.update)&&m[0]&1&&l.update.call(null,h[0])},i(h){a||(P(e.$$.fragment,h),a=!0)},o(h){M(e.$$.fragment,h),a=!1},d(h){h&&O(t),r[21](null),lt(e),r[22](null),c=!1,wt(o)}}}function xe(r,t,e){const n=["use","class","tabs","key","focusOnActivate","focusOnProgrammatic","useAutomaticActivation","active","scrollIntoView","getElement"];let l=ut(t,n),{$$slots:a={},$$scope:c}=t;const o=Ht(kt());let{use:s=[]}=t,{class:g=""}=t,{tabs:p=[]}=t,{key:v=u=>u}=t,{focusOnActivate:h=!0}=t,{focusOnProgrammatic:m=!1}=t,{useAutomaticActivation:R=!0}=t,{active:E=void 0}=t,b,f,d,T=p.indexOf(E),A={},L=new WeakMap,y=!1;Ft("SMUI:tab:focusOnActivate",h),Ft("SMUI:tab:initialActive",E),Mt(()=>(e(4,f=new Ge({scrollTo:u=>d.scrollTo(u),incrementScroll:u=>d.incrementScroll(u),getScrollPosition:()=>d.getScrollPosition(),getScrollContentWidth:()=>d.getScrollContentWidth(),getOffsetWidth:()=>X().offsetWidth,isRTL:()=>getComputedStyle(X()).getPropertyValue("direction")==="rtl",setActiveTab:u=>{e(11,E=p[u]),e(17,T=u),f.activateTab(u)},activateTabAtIndex:(u,C)=>{var K;return(K=N(p[u]))===null||K===void 0?void 0:K.activate(C,y)},deactivateTabAtIndex:u=>{var C;return(C=N(p[u]))===null||C===void 0?void 0:C.deactivate()},focusTabAtIndex:u=>{var C;return(C=N(p[u]))===null||C===void 0?void 0:C.focus()},getTabIndicatorClientRectAtIndex:u=>{var C,K;return(K=(C=N(p[u]))===null||C===void 0?void 0:C.computeIndicatorClientRect())!==null&&K!==void 0?K:new DOMRect},getTabDimensionsAtIndex:u=>{var C,K;return(K=(C=N(p[u]))===null||C===void 0?void 0:C.computeDimensions())!==null&&K!==void 0?K:{rootLeft:0,rootRight:0,contentLeft:0,contentRight:0}},getPreviousActiveTabIndex:()=>{var u;for(let C=0;C<p.length;C++)if(!((u=N(p[C]))===null||u===void 0)&&u.active)return C;return-1},getFocusedTabIndex:()=>{const u=p.map(K=>{var tt;return(tt=N(K))===null||tt===void 0?void 0:tt.element}),C=document.activeElement;return u.indexOf(C)},getIndexOfTabById:u=>p.indexOf(u),getTabListLength:()=>p.length,notifyTabActivated:u=>Nt(X(),"SMUITabBar:activated",{index:u},void 0,!0)})),f.init(),()=>{f.destroy()}));function _(u){const C=u.detail;z(C.tabId,C)}function I(u){const C=u.detail;Q(C.tabId)}function N(u){return u instanceof Object?L.get(u):A[u]}function z(u,C){u instanceof Object?(L.set(u,C),e(19,L)):(e(18,A[u]=C,A),e(18,A))}function Q(u){u instanceof Object?(L.delete(u),e(19,L)):(delete A[u],e(18,A))}function ot(u){f.scrollIntoView(u)}function X(){return b}function gt(u){G[u?"unshift":"push"](()=>{d=u,e(6,d)})}function it(u){G[u?"unshift":"push"](()=>{b=u,e(5,b)})}const st=u=>f&&f.handleTabInteraction(u),S=u=>f&&f.handleKeyDown(u);return r.$$set=u=>{t=V(V({},t),Yt(u)),e(10,l=ut(t,n)),"use"in u&&e(0,s=u.use),"class"in u&&e(1,g=u.class),"tabs"in u&&e(2,p=u.tabs),"key"in u&&e(3,v=u.key),"focusOnActivate"in u&&e(12,h=u.focusOnActivate),"focusOnProgrammatic"in u&&e(13,m=u.focusOnProgrammatic),"useAutomaticActivation"in u&&e(14,R=u.useAutomaticActivation),"active"in u&&e(11,E=u.active),"$$scope"in u&&e(25,c=u.$$scope)},r.$$.update=()=>{if(r.$$.dirty[0]&141332&&E!==p[T]&&(e(17,T=p.indexOf(E)),f&&(y=!m,f.activateTab(T),y=!1)),r.$$.dirty[0]&917508&&p.length){const u=p[0]instanceof Object?L.get(p[0]):A[p[0]];u&&u.forceAccessible(T===-1)}r.$$.dirty[0]&16400&&f&&f.setUseAutomaticActivation(R)},[s,g,p,v,f,b,d,o,_,I,l,E,h,m,R,ot,X,T,A,L,a,gt,it,st,S,c]}class $e extends Et{constructor(t){super(),It(this,t,xe,Qe,Rt,{use:0,class:1,tabs:2,key:3,focusOnActivate:12,focusOnProgrammatic:13,useAutomaticActivation:14,active:11,scrollIntoView:15,getElement:16},null,[-1,-1])}get scrollIntoView(){return this.$$.ctx[15]}get getElement(){return this.$$.ctx[16]}}function tn(r){let t=r[3]+"",e;return{c(){e=fe(t)},l(n){e=de(n,t)},m(n,l){U(n,e,l)},p(n,l){l&8&&t!==(t=n[3]+"")&&Se(e,t)},d(n){n&&O(e)}}}function en(r){let t,e;return t=new Ee({props:{$$slots:{default:[tn]},$$scope:{ctx:r}}}),{c(){nt(t.$$.fragment)},l(n){ht(t.$$.fragment,n)},m(n,l){rt(t,n,l),e=!0},p(n,l){const a={};l&24&&(a.$$scope={dirty:l,ctx:n}),t.$set(a)},i(n){e||(P(t.$$.fragment,n),e=!0)},o(n){M(t.$$.fragment,n),e=!1},d(n){lt(t,n)}}}function nn(r){let t,e;return t=new ke({props:{tab:r[3],$$slots:{default:[en]},$$scope:{ctx:r}}}),t.$on("click",function(){ct(r[1](r[3]))&&r[1](r[3]).apply(this,arguments)}),{c(){nt(t.$$.fragment)},l(n){ht(t.$$.fragment,n)},m(n,l){rt(t,n,l),e=!0},p(n,l){r=n;const a={};l&8&&(a.tab=r[3]),l&24&&(a.$$scope={dirty:l,ctx:r}),t.$set(a)},i(n){e||(P(t.$$.fragment,n),e=!0)},o(n){M(t.$$.fragment,n),e=!1},d(n){lt(t,n)}}}function rn(r){let t,e,n,l,a;function c(s){r[2](s)}let o={tabs:["\u767B\u5F55","\u4FE1\u606F\u7BA1\u7406","\u6587\u4EF6\u7BA1\u7406","\u7528\u6237\u804A\u5929"],$$slots:{default:[nn,({tab:s})=>({3:s}),({tab:s})=>s?8:0]},$$scope:{ctx:r}};return r[0]!==void 0&&(o.active=r[0]),n=new $e({props:o}),G.push(()=>_e(n,"active",c)),{c(){t=Y("header"),e=Y("div"),nt(n.$$.fragment),this.h()},l(s){t=j(s,"HEADER",{class:!0});var g=H(t);e=j(g,"DIV",{class:!0});var p=H(e);ht(n.$$.fragment,p),p.forEach(O),g.forEach(O),this.h()},h(){Tt(e,"class","nav svelte-13aygw3"),Tt(t,"class","header svelte-13aygw3")},m(s,g){U(s,t,g),w(t,e),rt(n,e,null),a=!0},p(s,[g]){const p={};g&24&&(p.$$scope={dirty:g,ctx:s}),!l&&g&1&&(l=!0,p.active=s[0],be(()=>l=!1)),n.$set(p)},i(s){a||(P(n.$$.fragment,s),a=!0)},o(s){M(n.$$.fragment,s),a=!1},d(s){s&&O(t),lt(n)}}}function ln(r,t,e){let n="Home";function l(c){switch(c){case"\u767B\u5F55":yt("login");break;case"\u4FE1\u606F\u7BA1\u7406":yt("msgmanage");break;case"\u6587\u4EF6\u7BA1\u7406":yt("filemanage");break;case"\u7528\u6237\u804A\u5929":yt("chat");break}}function a(c){n=c,e(0,n)}return[n,l,a]}class an extends Et{constructor(t){super(),It(this,t,ln,rn,Rt,{})}}function on(r){let t,e,n,l,a,c,o,s,g;e=new an({});const p=r[1].default,v=pt(p,r,r[0],null);return{c(){t=Y("div"),nt(e.$$.fragment),n=Ot(),l=Y("main"),v&&v.c(),a=Ot(),c=Y("footer"),o=Y("p"),s=fe("create by HZ"),this.h()},l(h){t=j(h,"DIV",{class:!0});var m=H(t);ht(e.$$.fragment,m),n=Dt(m),l=j(m,"MAIN",{class:!0});var R=H(l);v&&v.l(R),R.forEach(O),a=Dt(m),c=j(m,"FOOTER",{class:!0});var E=H(c);o=j(E,"P",{});var b=H(o);s=de(b,"create by HZ"),b.forEach(O),E.forEach(O),m.forEach(O),this.h()},h(){Tt(l,"class","svelte-1bwzyxf"),Tt(c,"class","svelte-1bwzyxf"),Tt(t,"class","app svelte-1bwzyxf")},m(h,m){U(h,t,m),rt(e,t,null),w(t,n),w(t,l),v&&v.m(l,null),w(t,a),w(t,c),w(c,o),w(o,s),g=!0},p(h,[m]){v&&v.p&&(!g||m&1)&&_t(v,p,h,h[0],g?St(p,h[0],m,null):bt(h[0]),null)},i(h){g||(P(e.$$.fragment,h),P(v,h),g=!0)},o(h){M(e.$$.fragment,h),M(v,h),g=!1},d(h){h&&O(t),lt(e),v&&v.d(h)}}}function sn(r,t,e){let{$$slots:n={},$$scope:l}=t;return Mt(()=>{yt("login")}),r.$$set=a=>{"$$scope"in a&&e(0,l=a.$$scope)},[l,n]}class gn extends Et{constructor(t){super(),It(this,t,sn,on,Rt,{})}}export{gn as default};
