(this["webpackJsonphoa-systems"]=this["webpackJsonphoa-systems"]||[]).push([[0],{120:function(e){e.exports=JSON.parse('[{"id":1,"createdBy":1,"createAt":"2020-04-29","title":"bob first message","details":"happy happy joy joy","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":2,"createdBy":1,"createAt":"2020-04-26","title":"bob second message","details":"message content","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":3,"createdBy":1,"createAt":"2020-04-20","title":"bob third message","details":"walla!!","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":2},{"id":4,"createdBy":2,"createAt":"2002-04-29","title":"bugs first message","details":"shalom!","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":5,"createdBy":2,"createAt":"2002-04-26","title":"bugs second message","details":"whats up falks?","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":6,"createdBy":2,"createAt":"2002-04-20","title":"bugs third message","details":"wow!!!","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":2}]')},121:function(e){e.exports=JSON.parse('[{"id":1,"createdBy":1,"createdAt":"2002-04-26","text":"this is my first comment","messageId":1},{"id":2,"createdBy":2,"createdAt":"2002-05-26","text":"this is my second comment","messageId":1},{"id":3,"createdBy":3,"createdAt":"2002-06-26","text":"this is my third comment","messageId":1},{"id":4,"createdBy":4,"createdAt":"2002-04-26","text":"this is my first comment","messageId":2},{"id":5,"createdBy":5,"createdAt":"2002-05-26","text":"this is my second comment","messageId":2}]')},122:function(e){e.exports=JSON.parse('[{"id":1,"createdBy":1,"createAt":"2020-04-26","title":"New front door","details":"message content","options":["yes","no"],"dueDate":"2021-04-26 22:00"},{"id":2,"createdBy":1,"createAt":"2020-05-26","title":"Replace roof","details":"The roof is too old and has leaks","options":["yes","no"],"dueDate":"2021-05-26 22:00"},{"id":3,"createdBy":1,"createAt":"2020-05-26","title":"New chairman","details":"Fraiser has left the building, vote for a new chariman","options":["Winnie ThePooh","Mickey Mouse","Daffy Duck"],"dueDate":"2020-05-26 22:00"}]')},152:function(e,t,n){},153:function(e,t,n){},154:function(e,t,n){},162:function(e,t,n){},164:function(e,t,n){},166:function(e,t,n){},167:function(e,t,n){},168:function(e,t,n){},169:function(e,t,n){},170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},269:function(e,t,n){},270:function(e,t,n){},271:function(e,t,n){},272:function(e,t,n){},273:function(e,t,n){},274:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(0),s=n(11),c=n.n(s),o=(n(152),n(41)),r=n(8),l=n(44),d=n(12),m=(n(153),n(48)),j=Object(i.createContext)(null);n(154);var u=function(e){return Object(i.useContext)(j)?Object(a.jsx)("div",{className:"p-home",children:Object(a.jsx)(m.a,{variant:"h4",children:"Homeowner Association Management System"})}):Object(a.jsx)(d.a,{to:"/login"})},b=n(307),g=n(337),h=n(314),f=n(333);n(162);var O=function(e){var t=Object(i.useState)("bob.sponge@gmail.com"),n=Object(r.a)(t,2),s=n[0],c=n[1],o=Object(i.useState)("123"),l=Object(r.a)(o,2),j=l[0],u=l[1],O=Object(i.useState)(!1),p=Object(r.a)(O,2),x=p[0],v=p[1],y=Object(i.useState)(!1),N=Object(r.a)(y,2),C=N[0],w=N[1],S=e.users,B=e.onLogin;return C?Object(a.jsx)(d.a,{to:"/"}):Object(a.jsx)("div",{className:"p-login",children:Object(a.jsx)(b.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"50vh"},children:Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)(m.a,{component:"h1",variant:"h5",children:"Log in"}),x?Object(a.jsx)(f.a,{severity:"error",children:"Invalid Credentials!"}):null,Object(a.jsxs)("form",{children:[Object(a.jsx)(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Email Address",value:s,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)(g.a,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Password",type:"password",value:j,onChange:function(e){return u(e.target.value)}}),Object(a.jsx)(h.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e=S.find((function(e){return e.email.toLowerCase()===s.toLowerCase()&&e.pwd===j}));e?(B(e),w(!0)):v(!0)},children:"Log In"})]})]})})})};var p=function(){return Object(a.jsx)("div",{className:"p-signup",children:"SignupPage"})},x=n(94),v=n(120),y=n(121),N=n(122),C=n(95),w=n(315),S=n(316),B=n(317),A=n(339),V=n(308),I=n(318),k=n(124),M=n.n(k),D=n(125),W=n.n(D),P=n(123),L=n.n(P);n(164);var J=function(e){var t=Object(i.useContext)(j),n=e.onLogout,s=e.msgNum,c=e.votingsNum;return Object(a.jsx)("div",{className:"c-hoa-navbar",children:Object(a.jsx)(w.a,{position:"static",className:"menu-container",children:Object(a.jsxs)(S.a,{className:"nav-container",children:[Object(a.jsx)(B.a,{href:"#",children:Object(a.jsx)(m.a,{variant:"h4",children:"HOA Systems"})}),t?Object(a.jsxs)("div",{className:"user-container",children:[Object(a.jsxs)("h3",{children:["Hello ",t.fname," ",t.lname]}),Object(a.jsx)(A.a,{alt:t.fname+" "+t.lname,src:t.img,className:"user-img"})]}):null,t?Object(a.jsxs)("div",{children:[Object(a.jsx)(B.a,{href:"#dashboard",children:Object(a.jsx)(V.a,{"aria-label":"show dashboard",color:"inherit",children:Object(a.jsx)(L.a,{fontSize:"large"})})}),Object(a.jsx)(B.a,{href:"#/messages",children:Object(a.jsx)(V.a,{"aria-label":"show new messages",color:"inherit",children:Object(a.jsx)(I.a,{badgeContent:s,color:"secondary",children:Object(a.jsx)(M.a,{fontSize:"large"})})})}),Object(a.jsx)(B.a,{href:"#/votings",children:Object(a.jsx)(V.a,{"aria-label":"show votings",color:"inherit",children:Object(a.jsx)(I.a,{badgeContent:c,color:"secondary",children:Object(a.jsx)(W.a,{fontSize:"large"})})})})]}):null,t?null:Object(a.jsxs)("div",{className:"links-container",children:[Object(a.jsx)(B.a,{href:"#/login",children:"Login"})," ",Object(a.jsx)(B.a,{href:"#/signup",children:"Signup"})]}),t?Object(a.jsx)(B.a,{href:"#",onClick:n,children:"Logout"}):null]})})})},T=n(311),U=n(332),q=n(312),_=n(319),G=(n(166),n(76)),Q=n.n(G),E=n(275),R=n(340),F=n(320),Y=n(335);var H=function(e){var t=e.filterByPriority,n=e.filterBy,s=e.updSortBy,c=Object(i.useState)(""),o=Object(r.a)(c,2),l=o[0],d=o[1],m=Object(i.useState)("date"),j=Object(r.a)(m,2),u=j[0],b=j[1];return Object(a.jsx)("div",{className:"c-filter-messages",children:Object(a.jsxs)("form",{noValidate:!0,autoComplete:"off",children:[Object(a.jsxs)("div",{className:"filter-control",children:[Object(a.jsx)(Q.a,{className:"search-icon"}),Object(a.jsx)(g.a,{className:"form-control",label:"filter messages by text in title or details",onChange:function(e){return n(e.target.value)}})]}),Object(a.jsxs)(T.a,{className:"form-control",children:[Object(a.jsx)(q.a,{id:"filter-priority-label",children:"Filter by priority"}),Object(a.jsxs)(U.a,{labelId:"filter-priority-label",id:"filter-priority",value:l,onChange:function(e){d(e.target.value),t(e.target.value)},children:[Object(a.jsx)(_.a,{value:"",children:"ALL"}),Object(a.jsx)(_.a,{value:"1",children:"Alert"}),Object(a.jsx)(_.a,{value:"2",children:"Information"})]})]}),Object(a.jsx)(T.a,{component:"fieldset",children:Object(a.jsxs)("div",{className:"sort-container",children:[Object(a.jsx)(E.a,{component:"legend",className:"sort-label",children:"Sort By"}),Object(a.jsxs)(R.a,{row:!0,"aria-label":"sortBy",name:"sortBy1",value:u,onChange:function(e){b(e.target.value),s(e.target.value)},children:[Object(a.jsx)(F.a,{value:"date",control:Object(a.jsx)(Y.a,{}),label:"Date"}),Object(a.jsx)(F.a,{value:"priority",control:Object(a.jsx)(Y.a,{}),label:"Priority"})]})]})})]})})},z=n(276),K=n(321),X=n(322),Z=n(323),$=n(313);n(167);var ee=function(e){var t=e.messageId,n=e.users,s=e.comments,c=e.addComment,o=Object(i.useState)(""),l=Object(r.a)(o,2),d=l[0],j=l[1],u=s.map((function(e){var t=n.find((function(t){return t.id===e.createdBy}));return Object(a.jsxs)(z.a,{button:!0,children:[Object(a.jsx)(K.a,{children:Object(a.jsx)(A.a,{alt:t.fname+" "+t.lname,src:t.img})}),Object(a.jsx)(X.a,{children:e.text})]},e.id)}));return Object(a.jsx)("div",{className:"c-comments-card",children:Object(a.jsxs)(Z.a,{className:"comments-card-content",children:[Object(a.jsx)(m.a,{children:Object(a.jsx)("span",{className:"bold-font",children:"Comments:"})}),Object(a.jsx)($.a,{component:"nav","aria-label":"components list",children:u}),Object(a.jsx)(g.a,{id:"outlined-basic",label:"New Comment",variant:"outlined",multiline:!0,value:d,fullWidth:!0,rows:4,onChange:function(e){return j(e.target.value)}}),Object(a.jsx)(h.a,{variant:"contained",color:"secondary",onClick:function(e){""!==d&&(c(t,d),j(""))},children:"Add Comment"})]})})},te=n(324),ne=n(325),ae=n(326);n(168);var ie=function(e){var t=e.message,n=e.createdBy;return Object(a.jsx)("div",{className:"c-message-details-card",children:Object(a.jsx)(Z.a,{className:"card",children:Object(a.jsxs)(te.a,{className:"area",children:[Object(a.jsx)(ne.a,{className:"media",image:t.img,title:"Contemplative Reptile"}),Object(a.jsxs)(ae.a,{className:"details-content",children:[Object(a.jsxs)(m.a,{children:[Object(a.jsx)("span",{className:"bold-font",children:" Details:"}),Object(a.jsx)("br",{}),t.details]}),Object(a.jsx)(m.a,{gutterBottom:!0,children:Object(a.jsx)("span",{className:"bold-font",children:"Created By:"})}),Object(a.jsx)(A.a,{alt:n.fname+" "+n.lname,src:n.img}),Object(a.jsxs)(m.a,{gutterBottom:!0,children:[Object(a.jsx)("span",{className:"bold-font",children:"Date:"})," ",t.createAt]}),Object(a.jsxs)(m.a,{gutterBottom:!0,children:[Object(a.jsx)("span",{className:"bold-font",children:"Priority:"})," ",1===t.priority?"Alert":"Information"]})]})]})})})},se=n(126),ce=n.n(se),oe=n(127),re=n.n(oe);n(169);var le=function(e){var t=e.message,n=e.users,s=e.comments,c=e.addComment,o=Object(i.useState)(!1),l=Object(r.a)(o,2),d=l[0],m=l[1];return Object(a.jsxs)("div",{className:"c-message-card",children:[Object(a.jsxs)("dt",{className:d?"title is-expanded":"title",onClick:function(){return m(!d)},children:[Object(a.jsx)("span",{className:"title-icon",children:2===t.priority?Object(a.jsx)(ce.a,{}):Object(a.jsx)("span",{className:"red-color",children:Object(a.jsx)(re.a,{})})})," ",t.title]}),Object(a.jsx)("dd",{className:d?"content is-expanded":"content",children:Object(a.jsxs)("div",{className:"message-card-content",children:[Object(a.jsx)("div",{className:"content-item",children:Object(a.jsx)(ie,{message:t,createdBy:n.find((function(e){return e.id===t.createdBy}))})}),Object(a.jsx)("div",{className:"content-item",children:Object(a.jsx)(ee,{messageId:t.id,users:n,comments:s,addComment:c})})]})})]})},de=(n(170),n(129)),me=n.n(de),je=n(336),ue=n(328),be=n(329),ge=n(330),he=n(331),fe=(n(171),n(128)),Oe=n.n(fe),pe=n(327),xe=Object(pe.a)((function(e){return{dialog:{backgroundColor:"#e8f4fc"},form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content",backgroundColor:"#e8f4fc"},formControl:{marginTop:e.spacing(2),minWidth:500},formControlLabel:{marginTop:e.spacing(1)},imgPreview:{width:200}}}));var ve=function(e){var t=e.show,n=e.handleClose,s=e.addMessage,c=Object(i.useState)(""),o=Object(r.a)(c,2),l=o[0],d=o[1],m=Object(i.useState)(""),j=Object(r.a)(m,2),u=j[0],b=j[1],f=Object(i.useState)("alert"),O=Object(r.a)(f,2),p=O[0],x=O[1],v=Object(i.useState)(null),y=Object(r.a)(v,2),N=y[0],C=y[1],w=xe();function S(){d(""),b(""),x("alert"),C(null),n()}var B=N?URL.createObjectURL(N):"";return Object(a.jsx)("div",{className:"c-new-message-modal",children:Object(a.jsxs)(je.a,{open:t,keepMounted:!0,onClose:n,"aria-labelledby":"message-dialog-slide-title","aria-describedby":"message-dialog-slide-description",fullWidth:!0,maxWidth:"md",children:[Object(a.jsx)(ue.a,{className:w.dialog,id:"message-dialog-slide-title",children:"Add A New Message"}),Object(a.jsx)(be.a,{className:w.dialog,children:Object(a.jsxs)("form",{className:w.form,noValidate:!0,children:[Object(a.jsx)(T.a,{className:w.formControl,children:Object(a.jsx)(g.a,{id:"message-title",variant:"filled",label:"Message Title",value:l,onChange:function(e){return d(e.target.value)}})}),Object(a.jsx)(T.a,{className:w.formControl,children:Object(a.jsx)(g.a,{id:"message-details",variant:"filled",multiline:!0,rows:8,label:"Message Details",value:u,onChange:function(e){return b(e.target.value)}})}),Object(a.jsxs)(T.a,{className:w.formControl,children:[Object(a.jsx)(q.a,{id:"filter-priority-label",children:"Priority"}),Object(a.jsxs)(U.a,{labelId:"filter-priority-label",id:"filter-priority",value:p,onChange:function(e){return x(e.target.value)},children:[Object(a.jsx)(_.a,{value:"alert",children:"Alert"}),Object(a.jsx)(_.a,{value:"information",children:"Information"})]})]}),Object(a.jsx)(T.a,{className:w.formControl,children:Object(a.jsxs)("label",{htmlFor:"upload-photo",children:[Object(a.jsx)("input",{style:{display:"none"},id:"upload-photo",name:"upload-photo",type:"file",accept:"image/*",onChange:function(e){1===e.target.files.length?C(e.target.files[0]):C(null)}}),Object(a.jsxs)(ge.a,{color:"secondary",size:"small",component:"span","aria-label":"add",variant:"extended",children:[Object(a.jsx)(Oe.a,{})," Upload Image"]})]})}),Object(a.jsx)("img",{alt:"new message",src:B,className:w.imgPreview,style:B?{display:"block"}:{display:"none"}})]})}),Object(a.jsxs)(he.a,{className:w.dialog,children:[Object(a.jsx)(h.a,{onClick:S,variant:"contained",color:"secondary",type:"button",children:"Cancel"}),Object(a.jsx)(h.a,{onClick:function(){""!==l&&""!==u&&s(l,u,p,B),S()},variant:"contained",color:"primary",type:"button",children:"Add Message"})]})]})})};var ye=function(e){var t=Object(i.useContext)(j),n=e.messages,s=e.users,c=e.comments,o=e.addComment,l=e.addMessage,m=Object(i.useState)(""),u=Object(r.a)(m,2),b=u[0],g=u[1],h=Object(i.useState)(""),f=Object(r.a)(h,2),O=f[0],p=f[1],x=Object(i.useState)("date"),v=Object(r.a)(x,2),y=v[0],N=v[1],C=Object(i.useState)(!1),w=Object(r.a)(C,2),S=w[0],B=w[1];function A(e,t){return new Date(t.date)-new Date(e.date)}function V(e,t){return e.priority-t.priority}return t?Object(a.jsxs)("div",{className:"p-messages",children:[Object(a.jsxs)("div",{className:"messages-container",children:[Object(a.jsx)(H,{filterBy:function(e){g(e)},filterByPriority:function(e){return function(e){p(e)}(e)},updSortBy:function(e){return function(e){N(e)}(e)}}),Object(a.jsx)(me.a,{className:"add-msg-img",onClick:function(){return B(!0)}})]}),Object(a.jsx)("dl",{className:"accordion",children:function(){var e=n.filter((function(e){return(e.title+" "+e.details).toLowerCase().includes(b.toLowerCase())}));return""!==O&&(e=e.filter((function(e){return e.priority===parseInt(O)}))),"date"===y?e.sort(A):"priority"===y&&e.sort(V),e.map((function(e){return Object(a.jsx)(le,{message:e,users:s,addComment:o,comments:c.filter((function(t){return t.messageId===e.id}))},e.id)}))}()}),Object(a.jsx)(ve,{show:S,handleClose:function(){return B(!1)},addMessage:l})]}):Object(a.jsx)(d.a,{to:"/login"})},Ne=function(){return Ce(null)},Ce=function(e){var t=e?new Date(e):new Date;return(t=new Date(t.getTime()-3e6)).getFullYear().toString()+"-"+(2===(t.getMonth()+1).toString().length?(t.getMonth()+1).toString():"0"+(t.getMonth()+1).toString())+"-"+(2===t.getDate().toString().length?t.getDate().toString():"0"+t.getDate().toString())+" "+(2===t.getHours().toString().length?t.getHours().toString():"0"+t.getHours().toString())+":"+(2===(5*parseInt(t.getMinutes()/5)).toString().length?(5*parseInt(t.getMinutes()/5)).toString():"0"+(5*parseInt(t.getMinutes()/5)).toString())+":00"},we=function(e){for(var t=[];t.length<e;)t.push("#"+Math.floor(16777215*Math.random()).toString(16));return t},Se=(n(172),n(173),Object(pe.a)((function(e){return{dialog:{backgroundColor:"#e8f4fc"},form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content",backgroundColor:"#e8f4fc"},formControl:{marginTop:e.spacing(2),minWidth:500},formControlLabel:{marginTop:e.spacing(1)},imgPreview:{width:200}}})));var Be=function(e){var t=e.voting,n=e.addVote,s=Object(i.useState)(""),c=Object(r.a)(s,2),o=c[0],l=c[1],d=Se();return Object(a.jsx)("div",{children:Object(a.jsxs)("form",{className:d.form,noValidate:!0,children:[Object(a.jsxs)(T.a,{className:d.formControl,children:[Object(a.jsx)(q.a,{id:"filter-option-label",children:"Your Vote"}),Object(a.jsx)(U.a,{labelId:"filter-option-label",variant:"filled",id:"filter-option",value:o,onChange:function(e){return l(e.target.value)},children:t.options.map((function(e){return Object(a.jsx)(_.a,{value:e,children:e})}))})]}),Object(a.jsx)(h.a,{variant:"contained",color:"primary",type:"button",onClick:function(){n(t.id,o),l("")},children:"Submit Vote"})]})})},Ae=n(96);n(269);var Ve=function(e){var t=e.voting,n=e.usersNum;return Object(a.jsx)("div",{className:"c-voting-card-content",children:Object(a.jsx)(Z.a,{className:"card",children:Object(a.jsx)(te.a,{className:"area",children:Object(a.jsx)(ae.a,{children:Object(a.jsxs)("div",{className:"voting-content",children:[Object(a.jsxs)("div",{className:"voting-item details-title",children:[Object(a.jsxs)(m.a,{children:[Object(a.jsx)("span",{className:"bold-font",children:" Details:"}),Object(a.jsx)("br",{}),t.details]}),Object(a.jsxs)(m.a,{gutterBottom:!0,children:[Object(a.jsx)("span",{className:"bold-font",children:t.isActiveVoting()?"End Date: ":"Ended: "})," ",t.dueDate]})]}),Object(a.jsx)("div",{className:"voting-item",children:t.isActiveVoting()?null:Object(a.jsx)(Ae.Pie,{data:function(){return{labels:t.options,datasets:[{label:"Voting Percentage",data:t.calculatedVotes,backgroundColor:we(t.options.length),hoverBackgroundColor:we(t.options.length)}]}},width:10,height:5,options:{title:{display:!0,align:"center",text:"Voting Results",fontSize:20},legend:{display:!0,position:"right"},responsive:!0,maintainAspectRatio:!1}})}),Object(a.jsx)("div",{className:"voting-item",children:Object(a.jsx)(Ae.Pie,{data:function(){var e=t.calculatedVotes.filter((function(e){return e>=0})).reduce((function(e,t){return e+t}),0);return{labels:["Voted","DidNotVoted"],datasets:[{label:"Voting Percentage",data:[e,n-e],backgroundColor:we(2),hoverBackgroundColor:we(2)}]}},options:{title:{display:!0,align:"center",text:"Voting Percentage",fontSize:20},legend:{display:!0,position:"right"},responsive:!0,maintainAspectRatio:!1}})})]})})})})})};n(270);var Ie=function(e){var t=e.voting,n=e.usersNum,s=e.addVote,c=Object(i.useState)(!1),o=Object(r.a)(c,2),l=o[0],d=o[1];return Object(a.jsxs)("div",{className:"c-voting-card",children:[Object(a.jsxs)("dt",{className:l?"title is-expanded":"title",onClick:function(){return d(!l)},children:[Object(a.jsx)("span",{className:"title-icon",children:t.title})," ",Object(a.jsx)("span",{className:"result-title",children:t.isActiveVoting()?null:"Result: "+t.result})]}),Object(a.jsx)("dd",{className:l?"content is-expanded":"content",children:Object(a.jsx)("div",{className:"voting-card-content",children:Object(a.jsx)("div",{className:"content-item",children:s?Object(a.jsx)(Be,{voting:t,addVote:s}):Object(a.jsx)(Ve,{voting:t,usersNum:n})})})})]})};var ke=function(e){var t=e.votings,n=e.usersNum,i=e.addVote;return Object(a.jsx)("div",{className:"c-votings-card",children:t.length>0?Object(a.jsx)("dl",{className:"accordion",children:t.map((function(e){return Object(a.jsx)(Ie,{voting:e,usersNum:n,addVote:i},e.id)}))}):Object(a.jsx)(f.a,{severity:"error",children:"There are no votes"})})},Me=n(131),De=n.n(Me),We=(n(271),n(130)),Pe=n.n(We),Le=(n(272),Object(pe.a)((function(e){return{dialog:{backgroundColor:"rgba(0, 151, 19, 0.1)"},form:{display:"flex",flexDirection:"column",margin:"auto",width:"fit-content"},formControl:{marginTop:e.spacing(2),minWidth:500},formControlLabel:{marginTop:e.spacing(1)},imgPreview:{width:200},newOption:{display:"flex",alignItems:"center"}}})));var Je=function(e){var t=e.show,n=e.handleClose,s=e.addVoting,c=Object(i.useState)(""),l=Object(r.a)(c,2),d=l[0],m=l[1],j=Object(i.useState)(""),u=Object(r.a)(j,2),b=u[0],f=u[1],O=Object(i.useState)(""),p=Object(r.a)(O,2),x=p[0],v=p[1],y=Object(i.useState)([""]),N=Object(r.a)(y,2),C=N[0],w=N[1],S=Le();function B(){m(""),f(""),v(""),w([""]),n()}var A=function(){w([].concat(Object(o.a)(C),[""]))};return Object(a.jsx)("div",{className:"c-new-voting-modal",children:Object(a.jsxs)(je.a,{open:t,keepMounted:!0,onClose:n,"aria-labelledby":"voting-dialog-slide-title","aria-describedby":"voting-dialog-slide-description",fullWidth:!0,maxWidth:"md",children:[Object(a.jsx)(ue.a,{className:S.dialog,id:"voting-dialog-slide-title",children:"Add A New Voting"}),Object(a.jsx)(be.a,{className:S.dialog,children:Object(a.jsxs)("form",{className:S.form,noValidate:!0,children:[Object(a.jsx)(T.a,{className:S.formControl,children:Object(a.jsx)(g.a,{id:"voting-title",variant:"filled",label:"Voting Title",value:d,onChange:function(e){return m(e.target.value)}})}),Object(a.jsx)(T.a,{className:S.formControl,children:Object(a.jsx)(g.a,{id:"voting-details",variant:"filled",multiline:!0,rows:8,label:"Voting Details",value:b,onChange:function(e){return f(e.target.value)}})}),C.map((function(e,t){return Object(a.jsxs)("div",{className:S.newOption,children:[Object(a.jsx)(T.a,{className:S.formControl,children:Object(a.jsx)(g.a,{id:"new-option",variant:"filled",label:"Voting option",value:e,onChange:function(e){return function(e,t){var n=e.target.value,a=Object(o.a)(C);a[t]=n,w(a)}(e,t)}})}),C.length-1===t&&Object(a.jsx)(Pe.a,{onClick:A})]},t)})),Object(a.jsx)(g.a,{id:"datetime-local",label:"End Date",type:"datetime-local",variant:"filled",defaultValue:x,onChange:function(e){return v(e.target.value)},className:S.formControl,InputLabelProps:{shrink:!0}})]})}),Object(a.jsxs)(he.a,{className:S.dialog,children:[Object(a.jsx)(h.a,{onClick:B,variant:"contained",color:"secondary",type:"button",children:"Cancel"}),Object(a.jsx)(h.a,{onClick:function(){""!==d&&""!==b&&s(d,b,C,x),B()},variant:"contained",color:"primary",type:"button",children:"Add Voting"})]})]})})};var Te=function(e){var t=e.votings,n=e.usersNum,s=e.addVoting,c=Object(i.useState)(""),o=Object(r.a)(c,2),l=o[0],m=o[1],u=Object(i.useState)(!1),b=Object(r.a)(u,2),h=b[0],f=b[1],O=Object(i.useContext)(j),p=t.filter((function(e){return!e.isActiveVoting()&&(e.title+" "+e.details).toLowerCase().includes(l.toLowerCase())}));return O?Object(a.jsxs)("div",{className:"p-votings",children:[Object(a.jsxs)("div",{className:"content-item",children:[Object(a.jsx)("h1",{children:"Active Votings"}),Object(a.jsx)("div",{className:"add-voting-container",children:Object(a.jsx)(De.a,{className:"add-voting-img",onClick:function(){return f(!0)}})}),Object(a.jsx)(ke,{className:"content-item",votings:t.filter((function(e){return e.isActiveVoting()})),usersNum:n})]}),Object(a.jsx)(Je,{show:h,handleClose:function(){return f(!1)},addVoting:s}),Object(a.jsxs)("div",{className:"content-item",children:[Object(a.jsx)("h1",{children:"Voting Results"}),Object(a.jsxs)("div",{className:"filter-control",children:[Object(a.jsx)(Q.a,{className:"search-icon"}),Object(a.jsx)(g.a,{className:"form-control",label:"filter by text in title or details",onChange:function(e){return m(e.target.value)}})]}),Object(a.jsx)(ke,{className:"content-item",votings:p,usersNum:n})]})]}):Object(a.jsx)(d.a,{to:"/login"})},Ue=n(132),qe=n(133),_e=n(134),Ge=function(){function e(t,n,a,i,s,c,o){var r=this;Object(qe.a)(this,e),this.isActiveVoting=function(){return new Date<new Date(r.dueDate)},"object"===typeof t?(this.id=t.id,this.createdBy=t.createdBy,this.createAt=t.createAt,this.title=t.title,this.details=t.details,this.options=t.options,this.dueDate=t.dueDate):(this.id=t,this.createdBy=n,this.createAt=a,this.title=i,this.details=s,this.options=c,this.dueDate=o);for(var l=[],d=0;d<this.options.length;d++)l.push(0);this.calculatedVotes=l,this.result=""}return Object(_e.a)(e,[{key:"calculateVotes",value:function(e){var t,n=this,a=this.calculatedVotes,i=this.options[0],s=0,c=Object(Ue.a)(e);try{var o=function(){var e=t.value,c=n.options.findIndex((function(t){return t===e.vote}));c>=0&&(a[c]++,a[c]>s&&(s=a[c],i=n.options[c]))};for(c.s();!(t=c.n()).done;)o()}catch(r){c.e(r)}finally{c.f()}this.calculatedVotes=a,this.result=i}}]),e}();n(273);var Qe=function(e){var t=e.messages,n=e.users,s=e.addComment,c=e.comments,o=e.calculatedVotings,r=e.votes,l=e.addVote,m=Object(i.useContext)(j);function u(e,t){return new Date(t.date)-new Date(e.date)}return m?Object(a.jsxs)("div",{className:"p-dashboard",children:[Object(a.jsxs)("div",{className:"new-messages",children:[Object(a.jsx)("h1",{children:"New Messages"}),Object(a.jsx)("dl",{className:"accordion",children:t.sort(u).slice(0,3).map((function(e){return Object(a.jsx)(le,{message:e,users:n,addComment:s,comments:c.filter((function(t){return t.messageId===e.id}))},e.id)}))})]}),Object(a.jsxs)("div",{className:"votings",children:[Object(a.jsxs)("div",{className:"content-item",children:[Object(a.jsx)("h1",{children:"Voting Results"}),Object(a.jsx)(ke,{votings:o.filter((function(e){return!e.isActiveVoting()})),usersNum:n.length})]}),Object(a.jsxs)("div",{className:"content-item",children:[Object(a.jsx)("h1",{children:"Pending Votings"}),Object(a.jsx)(ke,{addVote:l,votings:o.filter((function(e){return e.isActiveVoting()&&!r.some((function(t){return t.votingId===e.id&&t.votedBy===m.id}))})),usersNum:n.length})]})]})]}):Object(a.jsx)(d.a,{to:"/login"})};var Ee=function(){var e=Object(i.useState)(x),t=Object(r.a)(e,2),n=t[0],s=(t[1],Object(i.useState)(v)),c=Object(r.a)(s,2),m=c[0],b=c[1],g=Object(i.useState)(y),h=Object(r.a)(g,2),f=h[0],w=h[1],S=Object(i.useState)(C),B=Object(r.a)(S,2),A=B[0],V=B[1],I=Object(i.useState)(N.map((function(e){var t=new Ge(e);return t.calculateVotes(C.filter((function(e){return e.votingId===t.id}))),t}))),k=Object(r.a)(I,2),M=k[0],D=k[1],W=Object(i.useState)(x[0]),P=Object(r.a)(W,2),L=P[0],T=P[1];function U(e,t){var n=0;f.length>0&&(n=Math.max.apply(Math,Object(o.a)(f.map((function(e){return e.id})))));var a={id:n+1,createdBy:L.id,createdAt:Ne(),text:t,messageId:e};w(f.concat(a))}return Object(a.jsx)("div",{className:"App",children:M?Object(a.jsxs)(j.Provider,{value:L,children:[Object(a.jsx)(J,{onLogout:function(){T(null)},msgNum:m.length,votingsNum:M.length}),Object(a.jsx)(l.a,{children:Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{exact:!0,path:"/",children:Object(a.jsx)(u,{})}),Object(a.jsx)(d.b,{exact:!0,path:"/login",children:Object(a.jsx)(O,{users:n,onLogin:function(e){T(e)}})}),Object(a.jsx)(d.b,{exact:!0,path:"/signup",children:Object(a.jsx)(p,{})}),Object(a.jsx)(d.b,{exact:!0,path:"/messages",children:Object(a.jsx)(ye,{messages:m,users:n,addComment:U,comments:f,addMessage:function(e,t,n,a){var i=0;f.length>0&&(i=Math.max.apply(Math,Object(o.a)(f.map((function(e){return e.id})))));var s={id:i+1,createdBy:L.id,createAt:Ne(),title:e,details:t,img:a,priority:"alert"===n?1:2};b(m.concat(s))}})}),Object(a.jsx)(d.b,{exact:!0,path:"/votings",children:Object(a.jsx)(Te,{votings:M,usersNum:n.length,addVoting:function(e,t,n,a){var i=0;M.length>0&&(i=Math.max.apply(Math,Object(o.a)(M.map((function(e){return e.id})))));var s=new Ge(i+1,L.id,Ne(),e,t,n,Ce(a));D(M.concat(s))}})}),Object(a.jsx)(d.b,{exact:!0,path:"/dashboard",children:Object(a.jsx)(Qe,{messages:m,users:n,addComment:U,comments:f,calculatedVotings:M,votes:A,addVote:function(e,t){var n=0;A.length>0&&(n=Math.max.apply(Math,Object(o.a)(A.map((function(e){return e.id})))));var a={id:n+1,votingId:e,votedBy:L.id,vote:t};V(A.concat(a))}})})]})})]}):Object(a.jsx)("div",{})})},Re=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,342)).then((function(t){var n=t.getCLS,a=t.getFID,i=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),i(e),s(e),c(e)}))};c.a.render(Object(a.jsx)(Ee,{}),document.getElementById("root")),Re()},94:function(e){e.exports=JSON.parse('[{"id":1,"fname":"Bob","lname":"Sponge","email":"bob.sponge@gmail.com","pwd":"123","appartment":1,"isCommitteeMember":true,"communityId":1,"img":"https://imgix.ranker.com/node_img/128/2558573/original/spongebob-squarepants-tv-characters-photo-1?fit=crop&fm=pjpg"},{"id":2,"fname":"Bugs","lname":"Bunny","email":"bugs.bunny@gmail.com","pwd":"123","appartment":2,"isCommitteeMember":false,"communityId":1,"img":"https://imgix.ranker.com/user_node_img/33/641410/original/bugs-bunny-people-in-tv-photo-u6?fit=crop&fm=pjpg"},{"id":3,"fname":"Scooby","lname":"Doo","email":"scooby.doo@gmail.com","pwd":"123","appartment":3,"isCommitteeMember":false,"communityId":1,"img":"https://imgix.ranker.com/user_node_img/140/2782457/original/scooby-doo-photo-u9?fit=crop&fm=pjpg"},{"id":4,"fname":"Tom","lname":"Cat","email":"tom.cat@gmail.com","pwd":"123","appartment":4,"isCommitteeMember":true,"communityId":1,"img":"https://imgix.ranker.com/node_img/473/9458716/original/tom-cat-film-characters-photo-1?fit=crop&fm=pjpg"},{"id":5,"fname":"Jerry","lname":"Mouse","email":"jerry.mouse@gmail.com","pwd":"123","appartment":1,"isCommitteeMember":true,"communityId":2,"img":"https://imgix.ranker.com/node_img/473/9458918/original/jerry-mouse-film-characters-photo-1?fit=crop&fm=pjpg"},{"id":6,"fname":"Daffy","lname":"Duck","email":"daffy.duck@gmail.com","pwd":"123","appartment":2,"isCommitteeMember":false,"communityId":2,"img":"https://imgix.ranker.com/user_node_img/41/802683/original/daffy-duck-photo-u13?fit=crop&fm=pjpg"},{"id":7,"fname":"Mickey","lname":"Mouse","email":"mickey.mouse@gmail.com","pwd":"123","appartment":3,"isCommitteeMember":false,"communityId":2,"img":"https://imgix.ranker.com/user_node_img/79/1579031/original/mickey-mouse-photo-u16?fit=crop&fm=pjpg"},{"id":8,"fname":"Winnie","lname":"ThePooh","email":"winnie.thepooh@gmail.com","pwd":"123","appartment":4,"isCommitteeMember":true,"communityId":2,"img":"https://imgix.ranker.com/user_node_img/121/2402445/original/winnie-the-pooh-books-photo-u1?fit=crop&fm=pjpg"}]')},95:function(e){e.exports=JSON.parse('[{"id":1,"votingId":1,"votedBy":1,"vote":"yes"},{"id":2,"votingId":1,"votedBy":2,"vote":"yes"},{"id":3,"votingId":1,"votedBy":3,"vote":"no"},{"id":4,"votingId":2,"votedBy":5,"vote":"yes"},{"id":5,"votingId":2,"votedBy":2,"vote":"yes"},{"id":6,"votingId":2,"votedBy":3,"vote":"no"},{"id":7,"votingId":3,"votedBy":1,"vote":"Winnie ThePooh"},{"id":8,"votingId":3,"votedBy":2,"vote":"Winnie ThePooh"},{"id":9,"votingId":3,"votedBy":3,"vote":"Daffy Duck"},{"id":10,"votingId":3,"votedBy":4,"vote":"Winnie ThePooh"}]')}},[[274,1,2]]]);
//# sourceMappingURL=main.2207dedd.chunk.js.map