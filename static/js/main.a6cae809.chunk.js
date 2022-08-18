(this["webpackJsonpreact_dynamic-list-of-posts"]=this["webpackJsonpreact_dynamic-list-of-posts"]||[]).push([[0],[,,,,,,,,,,,function(t,e,n){},function(t,e,n){},function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var c=n(6),s=n.n(c),o=n(2),a=n(1),r=(n(11),n(12),n(13),n(0)),i=function(t){var e=t.posts,n=t.selectedPostId,c=t.onSelectedPost;return Object(r.jsxs)("div",{className:"PostsList",children:[Object(r.jsx)("h2",{children:"Posts:"}),Object(r.jsx)("ul",{className:"PostsList__list","data-cy":"postDetails",children:e.map((function(t){return Object(r.jsxs)("li",{className:"PostsList__item",children:[Object(r.jsxs)("div",{children:[Object(r.jsx)("b",{children:"[User #".concat(t.userId,"]: ")}),t.title]}),n===t.id?Object(r.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(0)},children:"Close"}):Object(r.jsx)("button",{type:"button",className:"PostsList__button button",onClick:function(){return c(t.id)},children:"Open"})]},t.id)}))})]})},l=n(4),u=n(3),j=n.n(u),d=(n(16),"/posts"),b="/comments",m=function(t,e,n){return fetch("".concat("https://mate.academy/students-api").concat(t),n).then((function(t){if(!t.ok)throw new Error("Error: ".concat(t.status," - ").concat(t.statusText));return t.json()})).catch((function(){return{Response:"False",Error:"".concat(e)}}))},h=function(t){return m("".concat(b,"/").concat(t),"Comment did not find",{method:"DELETE"})},p=function(t,e,n,c){return m(b,"Comment did not add",{method:"POST",headers:{"content-type":"application/json; charset=utf-8"},body:JSON.stringify({postId:t,name:e,email:n,body:c})})};function O(t,e,n){(function(t){return m("".concat(b,"?postId=").concat(t),"Comments is not load")})(t).then((function(t){"Error"in t?console.warn(t.Error):e(t)})).finally((function(){return n(!1)}))}var f=function(t){var e=t.postId,n=t.setIsLoading,c=t.updateComments,s=Object(a.useState)(""),i=Object(o.a)(s,2),u=i[0],d=i[1],b=Object(a.useState)(""),m=Object(o.a)(b,2),h=m[0],f=m[1],x=Object(a.useState)(""),v=Object(o.a)(x,2),_=v[0],N=v[1],y=function(){var t=Object(l.a)(j.a.mark((function t(s){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return s.preventDefault(),n(!0),t.next=4,p(e,u,h,_);case 4:O(e,c,n),d(""),f(""),N("");case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("form",{className:"NewCommentForm",onSubmit:y,children:[Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("input",{type:"text",name:"name",placeholder:"Your name",className:"NewCommentForm__input",value:u,onChange:function(t){var e=t.target;return d(e.value)}})}),Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("input",{type:"text",name:"email",placeholder:"Your email",className:"NewCommentForm__input",value:h,onChange:function(t){var e=t.target;return f(e.value)}})}),Object(r.jsx)("div",{className:"form-field",children:Object(r.jsx)("textarea",{name:"body",placeholder:"Type comment here",className:"NewCommentForm__input",value:_,onChange:function(t){var e=t.target;return N(e.value)}})}),Object(r.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",disabled:0===u.trim().length||0===h.trim().length||0===_.trim().length,children:"Add a comment"})]})},x=(n(17),n(18),function(){return Object(r.jsx)("div",{className:"Loader",children:Object(r.jsx)("div",{className:"Loader__content"})})}),v=function(t){var e=t.post,n=t.postId,c=Object(a.useState)(!1),s=Object(o.a)(c,2),i=s[0],u=s[1],d=Object(a.useState)([]),b=Object(o.a)(d,2),m=b[0],p=b[1],v=Object(a.useState)(!0),_=Object(o.a)(v,2),N=_[0],y=_[1],C=Object(a.useMemo)((function(){var t="".concat(m.length," comment").concat(m.length>1?"s":"");return i?"Show ".concat(t):"Hide ".concat(t)}),[i,m]);Object(a.useEffect)((function(){O(n,p,y)}),[n]);var P=function(){var t=Object(l.a)(j.a.mark((function t(e){return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return y(!0),t.next=3,h(e);case 3:O(n,p,y);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(r.jsxs)("div",{className:"PostDetails",children:[Object(r.jsx)("h2",{children:"Post details:"}),Object(r.jsx)("section",{className:"PostDetails__post",children:Object(r.jsx)("p",{children:e.body})}),N?Object(r.jsx)(x,{}):Object(r.jsxs)("section",{className:"PostDetails__comments",children:[i?Object(r.jsx)("button",{type:"button",className:"button",onClick:function(){return u(!1)},children:C}):Object(r.jsx)("button",{type:"button",className:"button",onClick:function(){return u(!0)},children:C}),!i&&Object(r.jsx)("ul",{className:"PostDetails__list","data-cy":"postList",children:m.map((function(t){return Object(r.jsxs)("li",{className:"PostDetails__list-item",children:[Object(r.jsx)("button",{type:"button",className:"PostDetails__remove-button button",onClick:function(){return P(t.id)},children:"X"}),Object(r.jsx)("p",{children:t.body})]},t.id)}))})]}),Object(r.jsx)("section",{children:Object(r.jsx)("div",{className:"PostDetails__form-wrapper",children:Object(r.jsx)(f,{postId:n,setIsLoading:y,updateComments:p})})})]})},_=function(){var t=Object(a.useState)([]),e=Object(o.a)(t,2),n=e[0],c=e[1],s=Object(a.useState)(0),l=Object(o.a)(s,2),u=l[0],j=l[1],b=Object(a.useState)(0),h=Object(o.a)(b,2),p=h[0],O=h[1],f=Object(a.useState)(null),x=Object(o.a)(f,2),_=x[0],N=x[1];return Object(a.useEffect)((function(){(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=0===t?"".concat(d):"".concat(d,"?userId=").concat(t);return m(e,"Posts is not load")})(u).then((function(t){"Error"in t?console.warn(t.Error):c(t)}))}),[u]),Object(a.useEffect)((function(){var t;(t=p,m("".concat(d,"/").concat(t),"Post did not find")).then((function(t){"Error"in t?console.warn(t.Error):N(t)}))}),[p]),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("header",{className:"App__header",children:Object(r.jsxs)("label",{children:["Select a user: \xa0",Object(r.jsxs)("select",{className:"App__user-selector",value:u,onChange:function(t){var e=t.target;return j(+e.value)},children:[Object(r.jsx)("option",{value:"0",children:"All users"}),Object(r.jsx)("option",{value:"1",children:"Leanne Graham"}),Object(r.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(r.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(r.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(r.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(r.jsx)("option",{value:"6",children:"Mrs. Dennis Schulist"}),Object(r.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(r.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir V"}),Object(r.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(r.jsx)("option",{value:"10",children:"Leanne Graham"})]})]})}),Object(r.jsxs)("main",{className:"App__main",children:[Object(r.jsx)("div",{className:"App__sidebar",children:Object(r.jsx)(i,{posts:n,selectedPostId:p,onSelectedPost:O})}),0!==p&&_&&Object(r.jsx)("div",{className:"App__content",children:Object(r.jsx)(v,{post:_,postId:p})})]})]})};s.a.render(Object(r.jsx)(_,{}),document.getElementById("root"))}],[[19,1,2]]]);
//# sourceMappingURL=main.a6cae809.chunk.js.map