(this["webpackJsonphoa-systems"]=this["webpackJsonphoa-systems"]||[]).push([[0],{100:function(e,t,s){"use strict";s.r(t);var a=s(3),n=s(0),i=s(10),c=s.n(i),r=(s(81),s(18)),o=s(36),m=s(11),l=(s(82),s(39)),d=Object(n.createContext)(null);s(83);var j=function(e){return Object(n.useContext)(d)?Object(a.jsx)("div",{className:"p-home",children:Object(a.jsx)(l.a,{variant:"h4",children:"Homeowner Association Management System"})}):Object(a.jsx)(m.a,{to:"/login"})},b=s(131),u=s(146),g=s(134),p=s(147);s(92);var h=function(e){var t=Object(n.useState)("bob.sponge@gmail.com"),s=Object(r.a)(t,2),i=s[0],c=s[1],o=Object(n.useState)("123"),d=Object(r.a)(o,2),j=d[0],h=d[1],x=Object(n.useState)(!1),f=Object(r.a)(x,2),O=f[0],y=f[1],v=Object(n.useState)(!1),N=Object(r.a)(v,2),C=N[0],w=N[1],A=e.users,I=e.onLogin;return C?Object(a.jsx)(m.a,{to:"/"}):Object(a.jsx)("div",{className:"p-login",children:Object(a.jsx)(b.a,{container:!0,spacing:0,direction:"column",alignItems:"center",justify:"center",style:{minHeight:"50vh"},children:Object(a.jsxs)("div",{className:"home-container",children:[Object(a.jsx)(l.a,{component:"h1",variant:"h5",children:"Log in"}),O?Object(a.jsx)(p.a,{severity:"error",children:"Invalid Credentials!"}):null,Object(a.jsxs)("form",{children:[Object(a.jsx)(u.a,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Email Address",value:i,onChange:function(e){return c(e.target.value)}}),Object(a.jsx)(u.a,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Password",type:"password",value:j,onChange:function(e){return h(e.target.value)}}),Object(a.jsx)(g.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",onClick:function(){var e=A.find((function(e){return e.email.toLowerCase()===i.toLowerCase()&&e.pwd===j}));e?(I(e),w(!0)):y(!0)},children:"Log In"})]})]})})})};var x=function(){return Object(a.jsx)("div",{className:"p-signup",children:"SignupPage"})},f=s(58),O=s(64),y=s(65),v=s(135),N=s(136),C=s(137),w=s(148),A=s(132),I=s(138),B=s(66),k=s.n(B);s(94);var S=function(e){var t=Object(n.useContext)(d),s=e.onLogout,i=e.msgNum;return Object(a.jsx)("div",{className:"c-hoa-navbar",children:Object(a.jsx)(v.a,{position:"static",className:"menu-container",children:Object(a.jsxs)(N.a,{className:"nav-container",children:[Object(a.jsx)(C.a,{href:"#",children:Object(a.jsx)(l.a,{variant:"h4",children:"HOA Systems"})}),t?Object(a.jsxs)("div",{className:"user-container",children:[Object(a.jsxs)("h3",{children:["Hello ",t.fname," ",t.lname]}),Object(a.jsx)(w.a,{alt:t.fname+" "+t.lname,src:t.img,className:"user-img"})]}):null,t?Object(a.jsx)(C.a,{href:"#/messages",children:Object(a.jsx)(A.a,{"aria-label":"show new messages",color:"inherit",children:Object(a.jsx)(I.a,{badgeContent:i,color:"secondary",children:Object(a.jsx)(k.a,{fontSize:"large"})})})}):null,t?null:Object(a.jsxs)("div",{className:"links-container",children:[Object(a.jsx)(C.a,{href:"#/login",children:"Login"})," ",Object(a.jsx)(C.a,{href:"#/signup",children:"Signup"})]}),t?Object(a.jsx)(C.a,{href:"#",onClick:s,children:"Logout"}):null]})})})},J=s(139),W=s(140),q=s(141),_=s(142),G=s(133);s(96);var L=function(e){e.messageId;var t=e.users,s=e.comments.map((function(e){var s=t.find((function(t){return t.id===e.createdBy}));return Object(a.jsxs)(J.a,{button:!0,children:[Object(a.jsx)(W.a,{children:Object(a.jsx)(w.a,{alt:s.fname+" "+s.lname,src:s.img})}),Object(a.jsx)(q.a,{children:e.text})]})}));return Object(a.jsx)("div",{className:"c-comments-card",children:Object(a.jsx)(_.a,{className:"comments-card-content",children:Object(a.jsxs)(l.a,{children:[Object(a.jsx)("span",{className:"bold-font",children:"Comments:"}),Object(a.jsx)("br",{}),Object(a.jsx)(G.a,{component:"nav","aria-label":"components list",children:s})]})})})},M=s(143),Q=s(144),U=s(145);s(97);var E=function(e){var t=e.message;return Object(a.jsx)("div",{className:"c-message-details-card",children:Object(a.jsx)(_.a,{className:"card",children:Object(a.jsxs)(M.a,{className:"area",children:[Object(a.jsx)(Q.a,{className:"media",image:t.img,title:"Contemplative Reptile"}),Object(a.jsxs)(U.a,{className:"details-content",children:[Object(a.jsxs)(l.a,{children:[Object(a.jsx)("span",{className:"bold-font",children:" Details:"}),Object(a.jsx)("br",{}),t.details]}),Object(a.jsxs)(l.a,{gutterBottom:!0,children:[Object(a.jsx)("span",{className:"bold-font",children:"Priority:"})," ",1===t.priority?"Alert":"Information"]})]})]})})})},P=s(67),V=s.n(P),Y=s(68),D=s.n(Y);s(98);var F=function(e){var t=e.message,s=e.users,i=e.comments,c=Object(n.useState)(!1),o=Object(r.a)(c,2),m=o[0],l=o[1];return Object(a.jsxs)("div",{className:"c-message-card",children:[Object(a.jsxs)("dt",{className:m?"title is-expanded":"title",onClick:function(){return l(!m)},children:[Object(a.jsx)("span",{className:"title-icon",children:1===t.priority?Object(a.jsx)(V.a,{}):Object(a.jsx)("span",{className:"red-color",children:Object(a.jsx)(D.a,{})})})," ",t.title]}),Object(a.jsx)("dd",{className:m?"content is-expanded":"content",onClick:function(){return l(!m)},children:Object(a.jsxs)("div",{className:"message-card-content",children:[Object(a.jsx)("div",{className:"content-item",children:Object(a.jsx)(E,{message:t})}),Object(a.jsx)("div",{className:"content-item",children:Object(a.jsx)(L,{messageId:t.id,users:s,comments:i})})]})})]})};s(99);var H=function(e){var t=Object(n.useContext)(d),s=e.messages,i=e.users,c=e.comments,r=s.map((function(e){return Object(a.jsx)(F,{message:e,users:i,comments:c.filter((function(t){return t.messageId===e.id}))},e.id)}));return t?Object(a.jsx)("div",{className:"p-messages",children:Object(a.jsx)("dl",{className:"accordion",children:r})}):Object(a.jsx)(m.a,{to:"/login"})};var T=function(){var e=Object(n.useState)(f),t=Object(r.a)(e,2),s=t[0],i=(t[1],Object(n.useState)(O)),c=Object(r.a)(i,2),l=c[0],b=(c[1],Object(n.useState)(y)),u=Object(r.a)(b,2),g=u[0],p=(u[1],Object(n.useState)(f[0])),v=Object(r.a)(p,2),N=v[0],C=v[1],w=N?l.filter((function(e){return e.createdBy===N.id})):[];return console.log(JSON.stringify(w)),console.log(JSON.stringify(N)),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(d.Provider,{value:N,children:[Object(a.jsx)(S,{onLogout:function(){C(null)},msgNum:w.length}),Object(a.jsx)(o.a,{children:Object(a.jsxs)(m.d,{children:[Object(a.jsx)(m.b,{exact:!0,path:"/",children:Object(a.jsx)(j,{})}),Object(a.jsx)(m.b,{exact:!0,path:"/login",children:Object(a.jsx)(h,{users:s,onLogin:function(e){C(e)}})}),Object(a.jsx)(m.b,{exact:!0,path:"/signup",children:Object(a.jsx)(x,{})}),Object(a.jsx)(m.b,{exact:!0,path:"/messages",children:Object(a.jsx)(H,{messages:w,users:s,comments:g})})]})})]})})},z=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,150)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,i=t.getLCP,c=t.getTTFB;s(e),a(e),n(e),i(e),c(e)}))};c.a.render(Object(a.jsx)(T,{}),document.getElementById("root")),z()},58:function(e){e.exports=JSON.parse('[{"id":1,"fname":"Bob","lname":"Sponge","email":"bob.sponge@gmail.com","pwd":"123","appartment":1,"isCommitteeMember":true,"communityId":1,"img":"https://imgix.ranker.com/node_img/128/2558573/original/spongebob-squarepants-tv-characters-photo-1?fit=crop&fm=pjpg"},{"id":2,"fname":"Bugs","lname":"Bunny","email":"bugs.bunny@gmail.com","pwd":"123","appartment":2,"isCommitteeMember":false,"communityId":1,"img":"https://imgix.ranker.com/user_node_img/33/641410/original/bugs-bunny-people-in-tv-photo-u6?fit=crop&fm=pjpg"},{"id":3,"fname":"Scooby","lname":"Doo","email":"scooby.doo@gmail.com","pwd":"123","appartment":3,"isCommitteeMember":false,"communityId":1,"img":"https://imgix.ranker.com/user_node_img/140/2782457/original/scooby-doo-photo-u9?fit=crop&fm=pjpg"},{"id":4,"fname":"Tom","lname":"Cat","email":"tom.cat@gmail.com","pwd":"123","appartment":4,"isCommitteeMember":true,"communityId":1,"img":"https://imgix.ranker.com/node_img/473/9458716/original/tom-cat-film-characters-photo-1?fit=crop&fm=pjpg"},{"id":5,"fname":"Jerry","lname":"Mouse","email":"jerry.mouse@gmail.com","pwd":"123","appartment":1,"isCommitteeMember":true,"communityId":2,"img":"https://imgix.ranker.com/node_img/473/9458918/original/jerry-mouse-film-characters-photo-1?fit=crop&fm=pjpg"},{"id":6,"fname":"Daffy","lname":"Duck","email":"daffy.duck@gmail.com","pwd":"123","appartment":2,"isCommitteeMember":false,"communityId":2,"img":"https://imgix.ranker.com/user_node_img/41/802683/original/daffy-duck-photo-u13?fit=crop&fm=pjpg"},{"id":7,"fname":"Mickey","lname":"Mouse","email":"mickey.mouse@gmail.com","pwd":"123","appartment":3,"isCommitteeMember":false,"communityId":2,"img":"https://imgix.ranker.com/user_node_img/79/1579031/original/mickey-mouse-photo-u16?fit=crop&fm=pjpg"},{"id":8,"fname":"Winnie","lname":"ThePooh","email":"winnie.thepooh@gmail.com","pwd":"123","appartment":4,"isCommitteeMember":true,"communityId":2,"img":"https://imgix.ranker.com/user_node_img/121/2402445/original/winnie-the-pooh-books-photo-u1?fit=crop&fm=pjpg"}]')},64:function(e){e.exports=JSON.parse('[{"id":1,"createdBy":1,"createAt":"2020-04-29","title":"bob first message","details":"happy happy joy joy","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":2,"createdBy":1,"createAt":"2020-04-26","title":"bob second message","details":"message content","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":3,"createdBy":1,"createAt":"2020-04-20","title":"bob third message","details":"walla!!","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":2},{"id":4,"createdBy":2,"createAt":"2002-04-29","title":"bugs first message","details":"shalom!","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":5,"createdBy":2,"createAt":"2002-04-26","title":"bugs second message","details":"whats up falks?","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":1},{"id":6,"createdBy":2,"createAt":"2002-04-20","title":"bugs third message","details":"wow!!!","img":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIUEoxWoVJNJN2fpCyba63gYgu5w4vBG2WdQ&usqp=CAU","priority":2}]')},65:function(e){e.exports=JSON.parse('[{"id":1,"createdBy":1,"createdAt":"2002-04-26","text":"this is my first comment","messageId":1},{"id":2,"createdBy":2,"createdAt":"2002-05-26","text":"this is my second comment","messageId":1},{"id":3,"createdBy":3,"createdAt":"2002-06-26","text":"this is my third comment","messageId":1},{"id":4,"createdBy":4,"createdAt":"2002-04-26","text":"this is my first comment","messageId":2},{"id":5,"createdBy":5,"createdAt":"2002-05-26","text":"this is my second comment","messageId":2}]')},81:function(e,t,s){},82:function(e,t,s){},83:function(e,t,s){},92:function(e,t,s){},94:function(e,t,s){},96:function(e,t,s){},97:function(e,t,s){},98:function(e,t,s){},99:function(e,t,s){}},[[100,1,2]]]);
//# sourceMappingURL=main.cc04cc40.chunk.js.map