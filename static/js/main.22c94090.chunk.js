(this.webpackJsonppeople=this.webpackJsonppeople||[]).push([[0],{72:function(e,t,n){},77:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(13),c=n.n(r),s=n(18),i=n(19),d=n(20),l=n(24),j=n(22),b=n(14),u="ADD_PERSON",h="DELETE_PERSON",p="UPDATE_PERSON",O="GET_PERSON",g="GET_PEOPLE",x=n(25),f=n.n(x),m=n(12),v=function(){return function(e){f.a.get("https://crud-person-node.herokuapp.com/persons").then((function(t){e({type:g,payload:t.data})})).catch((function(e){return console.error(e)}))}},C=n(9),y=n(41),_=n(16),P=n(23),S=(n(72),n(2)),E=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).renderCard=function(t){return Object(S.jsxs)(C.a,{className:"displayPerson mb-2 ml-2 p-3",bg:"light",text:"dark",id:"".concat(t._id),border:"info",children:[Object(S.jsxs)(C.a.Header,{as:"h5",id:"".concat(t._id,"_").concat(t.name),children:[t.name," ",Object(S.jsx)(P.a,{variant:"outline",className:"deleteButton p-0",onClick:e.props.deletePerson.bind(Object(d.a)(e),t._id),children:"\ud83d\uddd1\ufe0f"})]}),Object(S.jsxs)(C.a.Body,{children:[Object(S.jsx)(C.a.Title,{id:"".concat(t._id,"_").concat(t.about,"}"),children:t.about}),Object(S.jsx)(C.a.Text,{id:"".concat(t._id)})]}),Object(S.jsxs)(_.a,{className:"list-group-flush",children:[Object(S.jsxs)(_.a.Item,{id:"".concat(t._id,"_").concat(t.languages),children:[Object(S.jsx)("b",{children:"Understands: "}),t.languages.join(", ")]},"".concat(t._id,"_").concat(t.languages)),Object(S.jsxs)(_.a.Item,{id:"".concat(t._id,"_").concat(t.dob),children:[Object(S.jsx)("b",{children:"Born On: "}),new Date(t.dob).toDateString()]},"".concat(t._id,"_").concat(t.dob)),Object(S.jsxs)(_.a.Item,{id:"".concat(t._id,"_").concat(t.profession),children:[Object(S.jsx)("b",{children:"Profession: "}),t.profession]},"".concat(t._id,"_").concat(t.profession))]})]},"".concat(t._id))},e.displayPeopleCards=function(){return Object.values(e.props.persons).map((function(t,n){return console.debug("INDEX:",t.name,n),e.renderCard(t)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.title="CRUD",this.props.fetchPersons()}},{key:"render",value:function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("h2",{children:"Exisiting People in Database"}),Object(S.jsx)(y.a,{children:this.displayPeopleCards()})]})}}]),n}(o.a.Component),D=Object(b.b)((function(e){return{persons:e.people.persons}}),{fetchPersons:v,deletePerson:function(e){return function(t){console.log("Triggering delete on",e),f.a.delete("https://crud-person-node.herokuapp.com/persons/".concat(e)).then((function(n){t({type:h,payload:n.data}),m.b.error("Deleted ".concat(e," from DataBase")),t(v())})).catch((function(e){console.error(e),m.b.error("Error while deleting person: ".concat(e))}))}}})(E),N=n(21),w=n(6),I=n(79),k=n(42),L=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onChange=function(e){console.debug(e.target.id),a.setState(Object(N.a)({},e.target.id,e.target.value)),console.debug("this.state",a.state,a.state.name)},a.onSubmit=function(e){e.preventDefault(),console.debug("Submit"),console.debug(a.state);var t=a.state;"Single"==t.maritalStatus?(console.log("Single => Set False"),t.married=!1):(console.log("Married => Set True"),t.married=!0),a.props.addPerson(t)},a.addPersonForm=function(){var e=a.state,t=e.name,n=e.dob,o=e.address,r=e.profession,c=e.maritalStatus,s=e.languages,i=e.about;return Object(S.jsx)(C.a,{children:Object(S.jsx)(C.a.Body,{children:Object(S.jsx)(I.a,{children:Object(S.jsxs)(w.a,{onSubmit:a.onSubmit,children:[Object(S.jsxs)(w.a.Row,{children:[Object(S.jsxs)(w.a.Group,{as:k.a,controlId:"name",children:[Object(S.jsx)(w.a.Label,{children:"Name"}),Object(S.jsx)(w.a.Control,{type:"text",placeholder:"Enter your Name",required:!0,onChange:a.onChange,value:t})]}),Object(S.jsxs)(w.a.Group,{as:k.a,controlId:"dob",children:[Object(S.jsx)(w.a.Label,{children:"Date of Birth"}),Object(S.jsx)(w.a.Control,{type:"date",placeholder:"Date of Birth",required:!0,value:n,onChange:a.onChange})]})]}),Object(S.jsxs)(w.a.Row,{children:[Object(S.jsxs)(w.a.Group,{as:k.a,controlId:"profession",children:[Object(S.jsx)(w.a.Label,{children:"Profession"}),Object(S.jsx)(w.a.Control,{onChange:a.onChange,value:r})]}),Object(S.jsxs)(w.a.Group,{as:k.a,controlId:"maritalStatus",children:[Object(S.jsx)(w.a.Label,{children:"Marital Status"}),Object(S.jsxs)(w.a.Control,{as:"select",onChange:a.onChange,value:c,children:[Object(S.jsx)("option",{children:"Single"}),Object(S.jsx)("option",{children:"Married"})]})]})]}),Object(S.jsxs)(w.a.Group,{controlId:"address",children:[Object(S.jsx)(w.a.Label,{children:"Address"}),Object(S.jsx)(w.a.Control,{placeholder:"1234 Main St",value:o,onChange:a.onChange})]}),Object(S.jsxs)(w.a.Group,{controlId:"languages",children:[Object(S.jsx)(w.a.Label,{children:"Languages"}),Object(S.jsx)(w.a.Control,{onChange:a.onChange,value:s})]}),Object(S.jsxs)(w.a.Group,{controlId:"about",children:[Object(S.jsx)(w.a.Label,{children:"About"}),Object(S.jsx)(w.a.Control,{placeholder:"Write something about yourself...",onChange:a.onChange,value:i})]}),Object(S.jsx)(P.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})},a.state={name:"",dob:"",address:"New Delhi, India",profession:"Software Engineer",maritalStatus:!1,languages:"English, Hindi, Python",about:"About me"},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(S.jsxs)("div",{className:"container",children:[Object(S.jsx)("h2",{children:"Add New Person to Database"}),this.addPersonForm()]})}}]),n}(o.a.Component),B=Object(b.b)((function(e){return{}}),{addPerson:function(e){return function(t){console.log(e),f.a.post("https://crud-person-node.herokuapp.com/persons",e).then((function(n){t({type:u,payload:n.data}),m.b.dark("Added ".concat(e.name," to DataBase")),t(v())})).catch((function(e){console.error(e),m.b.error("Error while adding person: ".concat(e))}))}}})(L);n(75),n(76);function T(){return Object(S.jsxs)("div",{className:"App",children:[Object(S.jsx)(m.a,{position:"top-right",autoClose:5e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0}),Object(S.jsx)("br",{}),Object(S.jsx)(B,{}),Object(S.jsx)("br",{}),Object(S.jsx)("br",{}),Object(S.jsx)(D,{})]})}var A=n(10),G=n(43),R=n(44),M=n(11),F={persons:[]},H=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(M.a)({},e);case g:return Object(M.a)(Object(M.a)({},e),{},{persons:t.payload});case u:return console.debug("add person:",t.payload),Object(M.a)({},e);case p:case h:default:return Object(M.a)({},e)}},U=Object(A.combineReducers)({people:H}),q=[R.a],J=Object(A.createStore)(U,{},Object(G.composeWithDevTools)(A.applyMiddleware.apply(void 0,q))),W=document.getElementById("root");c.a.render(Object(S.jsx)(b.a,{store:J,children:Object(S.jsx)(T,{})}),W)}},[[77,1,2]]]);
//# sourceMappingURL=main.22c94090.chunk.js.map