"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[658],{6148:function(e,n,t){t.d(n,{Fr:function(){return r},Pv:function(){return o},RJ:function(){return a}});var o="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_1x_r5.png",a="https://ssl.gstatic.com/ui/v1/icons/mail/profile_mask2.png",r={inbox:{heading:"Your inbox is empty",subHeading:"Mails that don't appear in other tabs will be shown here."},drafts:{heading:"You don't have any saved drafts.",subHeading:"Saving a draft allows you to keep a message you aren't ready to send yet."},starred:{heading:"No starred messages",subHeading:"Stars let you give messages a special status to make them easier to find. To star a message, click on the star outline beside any message or conversation."},sent:{heading:"No sent messages!",subHeading:"Send one now!"},bin:{heading:"No conversations in Bin.",subHeading:""}}},4373:function(e,n,t){t.d(n,{Z:function(){return l}});var o=t(4165),a=t(5861),r=t(9439),i=t(2791),s=t(1243),c=function(){var e=(0,a.Z)((0,o.Z)().mark((function e(n,t,a){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,s.Z)({method:n.method,url:"".concat("","/").concat(n.endpoint,"/").concat(a),data:t});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(n,t,o){return e.apply(this,arguments)}}(),d=c,l=function(e){var n=(0,i.useState)(null),t=(0,r.Z)(n,2),s=t[0],c=t[1],l=(0,i.useState)(""),u=(0,r.Z)(l,2),p=u[0],f=u[1],m=(0,i.useState)(!1),g=(0,r.Z)(m,2),h=g[0],x=g[1],Z=function(){var n=(0,a.Z)((0,o.Z)().mark((function n(t){var a,r,i=arguments;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return a=i.length>1&&void 0!==i[1]?i[1]:"",c(null),f(""),x(!0),n.prev=4,n.next=7,d(e,t,a);case 7:r=n.sent,c(r.data),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(4),f(n.t0.message);case 14:return n.prev=14,x(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[4,11,14,17]])})));return function(e){return n.apply(this,arguments)}}();return{call:Z,response:s,error:p,isLoading:h}}},3658:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var o=t(9439),a=t(2791),r=t(7630),i=t(4395),s=t(4554),c=t(4663),d=t(6098),l=t(7607),u=t(2167),p=t(4035),f=t(4371),m=t(2155),g=t(3512),h=t(5652),x=t(6148),Z=t(184),b=(0,r.ZP)(i.Z)({background:"#f5f5f5",boxShadow:"none"}),j=(0,r.ZP)(s.Z)({background:"#eaf1fb",marginLeft:80,borderRadius:8,minWidth:690,maxWidth:720,height:48,display:"flex",alignItems:"center",justifyContent:"space-between",padding:"0 20px"," & > div":{width:"100%",padding:"0 10px"}}),v=(0,r.ZP)(s.Z)({width:"100%",display:"flex",justifyContent:"end","& > svg":{marginLeft:20}}),w=function(e){var n=e.toggleDrawer;return(0,Z.jsx)(b,{position:"static",children:(0,Z.jsxs)(c.Z,{children:[(0,Z.jsx)(l.Z,{color:"action",onClick:n}),(0,Z.jsx)("img",{src:x.Pv,alt:"logo",style:{width:110,marginLeft:15}}),(0,Z.jsxs)(j,{children:[(0,Z.jsx)(u.Z,{color:"action"}),(0,Z.jsx)(d.ZP,{placeholder:"Search mail"}),(0,Z.jsx)(p.Z,{color:"action"})]}),(0,Z.jsxs)(v,{children:[(0,Z.jsx)(f.Z,{color:"action"}),(0,Z.jsx)(m.Z,{color:"action"}),(0,Z.jsx)(g.Z,{color:"action"}),(0,Z.jsx)(h.Z,{color:"action"})]})]})})},k=t(9953),y=t(6151),S=t(493),P=t(4852),D=t(5905),C=t(4287),E=t(3026),R=t(2192),F=t(3513),T=t(9825),B=t(8265),H=[{name:"inbox",title:"Inbox",icon:C.Z},{name:"starred",title:"Starred",icon:E.Z},{name:"sent",title:"Sent",icon:R.Z},{name:"drafts",title:"Drafts",icon:F.Z},{name:"bin",title:"Bin",icon:T.Z},{name:"allmail",title:"All Mail",icon:B.Z}],M=t(4942),W=t(1413),_=t(9818),L=t(890),O=t(539),z=t(6739),A=t(4373),Y=t(5372),N={height:"90%",width:"80%",maxWidth:"100%",maxHeight:"100%",boxShadow:"none",borderRadius:"10px 10px 0 0"},I=(0,r.ZP)(s.Z)({display:"flex",justifyContent:"space-between",padding:"10px 15px",background:"#f2f6fc","& > p":{fontSize:14,fontWeight:500}}),G=(0,r.ZP)(s.Z)({display:"flex",justifyContent:"space-between",padding:"10px 15px"}),U=(0,r.ZP)(s.Z)({display:"flex",flexDirection:"column",padding:"0 15px","& > div":{fontSize:14,borderBottom:"1px solid #f5f5f5",marginTop:10}}),J=(0,r.ZP)(y.Z)({background:"#0b57d0",color:"#fff",fontWeight:500,textTransform:"none",borderRadius:18,width:100}),q=function(e){var n=e.openDialog,t=e.setOpenDialog,r=(0,a.useState)({}),i=(0,o.Z)(r,2),s=i[0],c=i[1],l=(0,A.Z)(Y.Y.saveSentEmail),u=(0,A.Z)(Y.Y.saveDraftEmails),p={Host:"smtp.elasticemail.com",Username:"ankur5125222@gmail.com",Password:"2FBE920EF40C130353F3FEE97AE2D201A356",Port:2525},f=function(e){c((0,W.Z)((0,W.Z)({},s),{},(0,M.Z)({},e.target.name,e.target.value)))};return(0,Z.jsxs)(_.Z,{open:n,PaperProps:{sx:N},children:[(0,Z.jsxs)(I,{children:[(0,Z.jsx)(L.Z,{children:"New Message"}),(0,Z.jsx)(z.Z,{fontSize:"small",onClick:function(e){return function(e){e.preventDefault();var n={to:s.to,from:"ankurknp0310@gmail.com",subject:s.subject,body:s.body,date:new Date,image:"",name:"Ankur Gautam",starred:!1,type:"drafts"};u.call(n),u.error?console.log(u.error):(t(!1),c({})),t(!1)}(e)}})]}),(0,Z.jsxs)(U,{children:[(0,Z.jsx)(d.ZP,{placeholder:"Recipients",name:"to",onChange:function(e){return f(e)}}),(0,Z.jsx)(d.ZP,{placeholder:"Subject",name:"subject",onChange:function(e){return f(e)}})]}),(0,Z.jsx)(O.Z,{multiline:!0,rows:25,sx:{"& .MuiOutlinedInput-notchedOutline":{border:"none"}},name:"body",onChange:function(e){return f(e)}}),(0,Z.jsxs)(G,{children:[(0,Z.jsx)(J,{onClick:function(e){return function(e){e.preventDefault(),window.Email&&window.Email.send((0,W.Z)((0,W.Z)({},p),{},{To:s.to,From:"ankurknp0310@gmail.com",Subject:s.subject,Body:s.body})).then((function(e){return alert(e)}));var n={to:s.to,from:"ankurknp0310@gmail.com",subject:s.subject,body:s.body,date:new Date,image:"",name:"Ankur Gautam",starred:!1,type:"sent"};l.call(n),l.error?console.log(l.error):(t(!1),c({})),t(!1)}(e)},children:"Send"}),(0,Z.jsx)(T.Z,{onClick:function(){return t(!1)}})]})]})},K=t(7689),Q=t(1087),V=t(5806),X=(0,r.ZP)(y.Z)({background:"#c2e7ff",color:"#001d35",padding:15,borderRadius:16,minWidth:140,textTransform:"none"}),$=(0,r.ZP)(s.Z)({padding:8,"& > ul":{padding:"10px 0 0 5px",fontSize:14,fontWeight:500,cursor:"pointer","& > a":{textDecoration:"none",color:"inherit"}},"&> ul > a > li> svg":{marginRight:20}}),ee=function(){var e=(0,a.useState)(!1),n=(0,o.Z)(e,2),t=n[0],r=n[1],i=(0,K.UO)().type;return(0,Z.jsxs)($,{children:[(0,Z.jsxs)(X,{onClick:function(){r(!0)},children:[(0,Z.jsx)(D.Z,{})," Compose"]}),(0,Z.jsx)(S.Z,{children:H.map((function(e){return(0,Z.jsx)(Q.OL,{to:"".concat(V._.emails.path,"/").concat(e.name),children:(0,Z.jsxs)(P.ZP,{style:i===e.name.toLowerCase()?{backgroundColor:"#d3e3fd",borderRadius:"0 16px 16px 0"}:{},children:[(0,Z.jsx)(e.icon,{fontSize:"small"}),e.title]})},e.name)}))}),(0,Z.jsx)(q,{openDialog:t,setOpenDialog:r})]})},ne=function(e){var n=e.openDrawer;return(0,Z.jsx)(k.ZP,{anchor:"left",open:n,hideBackdrop:!0,ModalProps:{keepMounted:!0},variant:"persistent",sx:{"& > .MuiDrawer-paper":{marginTop:"64px",width:250,background:"#f5f5f5",borderRight:"none",height:"calc(100vh-64px"}},children:(0,Z.jsx)(ee,{})})},te=t(2247),oe=function(){var e=(0,a.useState)(!0),n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(w,{toggleDrawer:function(){r((function(e){return!e}))}}),(0,Z.jsxs)(s.Z,{children:[(0,Z.jsx)(ne,{openDrawer:t}),(0,Z.jsx)(a.Suspense,{fallback:(0,Z.jsx)(te.Z,{}),children:(0,Z.jsx)(K.j3,{context:{openDrawer:t}})})]})]})}},5372:function(e,n,t){t.d(n,{Y:function(){return o}});var o={saveSentEmail:{endpoint:"save",method:"post"},getEmailFromType:{endpoint:"emails",method:"get"},saveDraftEmails:{endpoint:"save-draft",method:"post"},moveEmailsToBin:{endpoint:"bin",method:"post"},toggleStarredEmail:{endpoint:"starred",method:"post"},deleteEmail:{endpoint:"delete",method:"delete"}}}}]);
//# sourceMappingURL=658.de07b8a1.chunk.js.map