(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[749],{2164:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_login",function(){return n(1365)}])},1072:function(e,s,n){"use strict";var a=n(8945),t=n(1391);let i=a.Z.create({baseURL:"http://127.0.0.1:7412/api/",timeout:5e3});i.interceptors.request.use(e=>{let s=(0,t.LP)("ZJS-7579-Admin-Token");return s&&(e.headers={"ZJS-7579-Admin-Token":s}),e},e=>Promise.reject(e)),i.interceptors.response.use(e=>e.data,e=>Promise.reject(e)),s.Z=i},1365:function(e,s,n){"use strict";n.r(s),n.d(s,{default:function(){return p}});var a=n(5893),t=n(7294),i=n(9008),o=n.n(i),l=n(1072);function c(e){return l.Z.request({url:"/login",method:"POST",data:e})}var r=n(1163),d=n.n(r),u=n(1391);function p(){let[e,s]=(0,t.useState)(""),[n,i]=(0,t.useState)(!1),[r,p]=(0,t.useState)(""),[m,h]=(0,t.useState)(!1),[x,f]=(0,t.useState)(""),[j,g]=(0,t.useState)(!1),[N,w]=(0,t.useState)(!1),[v,k]=(0,t.useState)(!1),[S,_]=(0,t.useState)(""),b=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,y=e=>{s(e.target.value)},T=()=>{i(!0),l.Z.request({url:"/login?email=".concat(e),method:"GET"}).then(e=>{console.log(e),w(e.isLogin)}).catch(e=>{console.log(e)})},Z=e=>{p(e.target.value)},A=()=>{c({email:e,password:r}).then(e=>{console.log(e),h(!0),"false"==e.isEmail&&(_("邮箱验证码发送失败！！！"),k(!0)),e.isLogin&&(g(!0),(0,u.o4)("Admin-Email",e.email),(0,u.o4)("ZJS-7579-Admin-Token",e.Token),d().push("/"))}).catch(e=>{console.log(e)})},C=e=>{f(e.target.value)},E=()=>{c({email:e,password:r,verify:x}).then(e=>{console.log(e),e.isLogin&&(g(!0),(0,u.o4)("Admin-Email",e.email),(0,u.o4)("ZJS-7579-Admin-Token",e.Token),d().push("/"))}).catch(e=>{console.log(e)})};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o(),{children:[(0,a.jsx)("title",{children:"Login"}),(0,a.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,a.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,a.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,a.jsxs)("main",{children:[(0,a.jsx)("div",{className:"back",children:v?(0,a.jsxs)("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert",children:[S,(0,a.jsx)("span",{"aria-hidden":"true",style:{cursor:"pointer",float:"right"},onClick:()=>k(!1),children:"\xd7"})]}):""}),(0,a.jsxs)("div",{className:"registration-form",children:[(0,a.jsxs)("header",{children:[(0,a.jsxs)("h1",{children:["Login",(0,a.jsx)("span",{style:{float:"right",cursor:"pointer"},children:(0,a.jsx)("i",{className:"fa fa-qrcode",children:(0,a.jsx)("div",{className:"help-tip",children:(0,a.jsx)("p",{children:"二维码"})})})})]}),(0,a.jsx)("p",{children:"登录 / 注册 "})]}),(0,a.jsxs)("form",{children:[(0,a.jsxs)("div",{className:n?"input-section email-section fold-up":"input-section email-section ",children:[(0,a.jsx)("input",{className:"email",type:"email",placeholder:"邮箱",value:e,onChange:y}),(0,a.jsxs)("div",{className:"animated-button",children:[(0,a.jsx)("span",{className:b.test(e)?"icon-paper-plane next":"icon-paper-plane",children:(0,a.jsx)("i",{className:"fa fa-envelope-o"})}),(0,a.jsx)("span",{className:"next-button email",style:{cursor:b.test(e)?"pointer":"none"},onClick:T,children:(0,a.jsx)("i",{className:"fa fa-arrow-up"})})]})]}),(0,a.jsxs)("div",{className:n?"input-section password-section":"input-section password-section folded",children:[(0,a.jsx)("input",{className:"password",type:"password",placeholder:"密码",value:r,onChange:Z}),(0,a.jsxs)("div",{className:"animated-button",children:[(0,a.jsx)("span",{className:r.length>=6?"icon-lock next":"icon-lock",children:(0,a.jsx)("i",{className:"fa fa-lock"})}),(0,a.jsx)("span",{className:"next-button password",style:{cursor:r.length>=6?"pointer":"none"},onClick:A,children:(0,a.jsx)("i",{className:"fa fa-arrow-up"})})]})]}),N?"":(0,a.jsxs)("div",{className:m?"input-section repeat-password-section":"input-section repeat-password-section folded",children:[(0,a.jsx)("input",{className:"repeat-password",type:"text",placeholder:"验证码",value:x,onChange:C}),(0,a.jsxs)("div",{className:"animated-button",children:[(0,a.jsx)("span",{className:8==x.length?"icon-repeat-lock next":"icon-repeat-lock",children:(0,a.jsx)("i",{className:"fa fa-comment"})}),(0,a.jsx)("span",{className:"next-button repeat-password",style:{cursor:8==x.length?"pointer":"none"},onClick:E,children:(0,a.jsx)("i",{className:"fa fa-paper-plane"})})]})]}),(0,a.jsx)("div",{className:"success",style:{marginTop:j?"0":"none"},children:(0,a.jsx)("p",{children:"登录中，请稍后。。。"})})]})]})]})]})}},1391:function(e,s,n){"use strict";function a(e){return window.localStorage.getItem(e)}function t(e,s){window.localStorage.setItem(e,s)}n.d(s,{LP:function(){return a},o4:function(){return t}})},9008:function(e,s,n){e.exports=n(3121)},1163:function(e,s,n){e.exports=n(880)}},function(e){e.O(0,[945,774,888,179],function(){return e(e.s=2164)}),_N_E=e.O()}]);