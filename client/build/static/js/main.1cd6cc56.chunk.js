(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(49)},23:function(e,t,a){},25:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(16),r=a.n(c),o=(a(23),a(24),a(25),a(1)),s=a(2),m=a(4),i=a.n(m),u=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){i.a.get("http://localhost:8000/api/pets").then((function(e){console.log(e),r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement("div",null,l.a.createElement("h3",{className:"mt-3"},"These pets are looking for a good home!"),l.a.createElement(s.a,{className:"btn btn-outline-primary mt-3",to:"/new"},"Add a Pet"),c.map((function(e,t){return l.a.createElement("table",{className:"table mt-4",key:t},l.a.createElement("thead",{className:"thead-light"},l.a.createElement("tr",null,l.a.createElement("th",{scope:"col"},"Name"),l.a.createElement("th",{scope:"col"},"Type"),l.a.createElement("th",{scope:"col"},"Action"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",{scope:"row"},e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(s.a,{className:"btn btn-outline-primary",to:"/edit/".concat(e._id)},"Edit"),l.a.createElement(s.a,{className:"btn btn-outline-primary",to:"/view/".concat(e._id)},"Details")))))})))},p=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),p=u[0],b=u[1],E=Object(n.useState)(""),d=Object(o.a)(E,2),f=d[0],g=d[1],h=Object(n.useState)(""),N=Object(o.a)(h,2),v=N[0],j=N[1],O=Object(n.useState)(""),y=Object(o.a)(O,2),S=y[0],k=y[1],x=Object(n.useState)(""),w=Object(o.a)(x,2),C=w[0],_=w[1],D=Object(n.useState)({}),T=Object(o.a)(D,2),A=T[0],P=T[1];return l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{className:"btn btn-outline-primary",to:"/"},"Home"),l.a.createElement("h3",{className:"mt-3"},"Do you know a pet who needs a home?"),l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col-sm-8",onSubmit:function(e){e.preventDefault();var t={name:c,type:p,description:f,skill1:v,skill2:S,skill3:C};i.a.post("http://localhost:8000/api/pets",t).then((function(e){console.log(e),e.data.errors?P(e.data.errors):Object(s.c)("/")})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return r(e.target.value)}}),A.name?l.a.createElement("p",{className:"text-danger"},A.name.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Type"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return b(e.target.value)}}),A.type?l.a.createElement("p",{className:"text-danger"},A.type.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{className:"form-control",onChange:function(e){return g(e.target.value)}}),A.description?l.a.createElement("p",{className:"text-danger"},A.description.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("h4",null,"Skills: (Optional)"),l.a.createElement("label",null,"Skill 1"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return j(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 2"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return k(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 3"),l.a.createElement("input",{type:"text",className:"form-control",onChange:function(e){return _(e.target.value)}})),l.a.createElement("input",{type:"submit",className:"btn btn-success btn-block mt-3",value:"Add New Pet"}))))},b=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),p=u[0],b=u[1],E=Object(n.useState)(""),d=Object(o.a)(E,2),f=d[0],g=d[1],h=Object(n.useState)(""),N=Object(o.a)(h,2),v=N[0],j=N[1],O=Object(n.useState)(""),y=Object(o.a)(O,2),S=y[0],k=y[1],x=Object(n.useState)(""),w=Object(o.a)(x,2),C=w[0],_=w[1],D=Object(n.useState)({}),T=Object(o.a)(D,2),A=T[0],P=T[1];Object(n.useEffect)((function(){console.log(e._id),i.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){console.log(e),r(e.data.name),b(e.data.type),g(e.data.description),j(e.data.skill1),k(e.data.skill2),_(e.data.skill3)})).catch((function(e){return console.log(e)}))}),[e._id]);return l.a.createElement("div",{className:"container"},l.a.createElement(s.a,{className:"btn btn-outline-primary",to:"/"},"Home"),l.a.createElement("h3",{className:"mt-3"},"Edit ",c),l.a.createElement("div",{className:"row"},l.a.createElement("form",{className:"col-sm-8",onSubmit:function(t){t.preventDefault();var a={name:c,type:p,description:f,skill1:v,skill2:S,skill3:C};i.a.put("http://localhost:8000/api/pets/".concat(e._id),a).then((function(e){console.log(e),e.data.errors?P(e.data.errors):Object(s.c)("/")})).catch((function(e){return console.log(e)}))}},l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Name"),l.a.createElement("input",{type:"text",className:"form-control",value:c,onChange:function(e){return r(e.target.value)}}),A.name?l.a.createElement("p",{className:"text-danger"},A.name.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Type"),l.a.createElement("input",{type:"text",className:"form-control",value:p,onChange:function(e){return b(e.target.value)}}),A.type?l.a.createElement("p",{className:"text-danger"},A.type.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Description"),l.a.createElement("textarea",{className:"form-control",value:f,onChange:function(e){return g(e.target.value)}}),A.description?l.a.createElement("p",{className:"text-danger"},A.description.properties.message):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 1"),l.a.createElement("input",{type:"text",className:"form-control",value:v,onChange:function(e){return j(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 2"),l.a.createElement("input",{type:"text",className:"form-control",value:S,onChange:function(e){return k(e.target.value)}})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",null,"Skill 3"),l.a.createElement("input",{type:"text",className:"form-control",value:C,onChange:function(e){return _(e.target.value)}})),l.a.createElement("input",{type:"submit",className:"btn btn-success btn-block mt-3",value:"Update Pet Info"}))))},E=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),c=a[0],r=a[1],m=Object(n.useState)(""),u=Object(o.a)(m,2),p=u[0],b=u[1],E=Object(n.useState)(""),d=Object(o.a)(E,2),f=d[0],g=d[1],h=Object(n.useState)(""),N=Object(o.a)(h,2),v=N[0],j=N[1],O=Object(n.useState)(""),y=Object(o.a)(O,2),S=y[0],k=y[1],x=Object(n.useState)(""),w=Object(o.a)(x,2),C=w[0],_=w[1],D=Object(n.useState)(0),T=Object(o.a)(D,2),A=T[0],P=T[1];Object(n.useEffect)((function(){console.log(e._id),i.a.get("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){console.log(e),r(e.data.name),b(e.data.type),g(e.data.description),j(e.data.skill1),k(e.data.skill2),_(e.data.skill3)})).catch((function(e){return console.log(e)}))}),[e._id]);return l.a.createElement("div",{className:"conainer"},l.a.createElement(s.a,{className:"btn btn-outline-primary",to:"/"},"Home"),l.a.createElement("h2",{className:"mt-3 mb-3"},"Details about ",c,"!!!"),l.a.createElement("h4",null,"Type: ",p),l.a.createElement("h4",null,"Description: ",f),l.a.createElement("h4",null,"Skills:"),l.a.createElement("ul",null,l.a.createElement("li",null,v),l.a.createElement("li",null,S),l.a.createElement("li",null,C)),0===A?l.a.createElement("button",{className:"btn btn-success text-light",onClick:function(e){P(A+1)}}," \ud83d\udc4d Likes: ",A):l.a.createElement("button",{disabled:!0,className:"btn btn-success text-light"}," \ud83d\udc4d Likes: ",A),l.a.createElement("button",{className:"btn btn-danger text-light",onClick:function(){i.a.delete("http://localhost:8000/api/pets/".concat(e._id)).then((function(e){console.log(e),Object(s.c)("/")})).catch((function(e){return console.log(e)}))}},"Adopt ",c,"!!"))};var d=function(){return l.a.createElement("div",{className:"container"},l.a.createElement("div",{className:"jumbotron bg-primary text-light"},l.a.createElement("h1",null,"Pet Shelter")),l.a.createElement(s.b,null,l.a.createElement(u,{path:"/"}),l.a.createElement(p,{path:"/new"}),l.a.createElement(b,{path:"/edit/:_id"}),l.a.createElement(E,{path:"/view/:_id"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.1cd6cc56.chunk.js.map