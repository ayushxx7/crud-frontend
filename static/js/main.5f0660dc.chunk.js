(this.webpackJsonppeople=this.webpackJsonppeople||[]).push([[0],{71:function(e,t,n){},75:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(16),r=n.n(c),s=n(17),i=n(18),d=n(19),l=n(23),j=n(21),u=n(12),b="ADD_PERSON",h="DELETE_PERSON",p="UPDATE_PERSON",O="GET_PERSON",g="GET_PEOPLE",x=n(24),m=n.n(x),f=function(){return function(e){m.a.get("https://crud-person-node.herokuapp.com/persons").then((function(t){e({type:g,payload:t.data})})).catch((function(e){return console.error(e)}))}},v=n(9),C=n(40),y=n(14),S=n(22),_=(n(71),n(2)),P=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).renderCard=function(t){return Object(_.jsxs)(v.a,{className:"displayPerson mb-2 ml-2 p-3",bg:"light",text:"dark",id:"".concat(t._id),border:"info",children:[Object(_.jsxs)(v.a.Header,{as:"h5",id:"".concat(t._id,"_").concat(t.name),children:[t.name," ",Object(_.jsx)(S.a,{variant:"outline",className:"deleteButton p-0",onClick:e.props.deletePerson.bind(Object(d.a)(e),t._id),children:"\ud83d\uddd1\ufe0f"})]}),Object(_.jsxs)(v.a.Body,{children:[Object(_.jsx)(v.a.Title,{id:"".concat(t._id,"_").concat(t.about,"}"),children:t.about}),Object(_.jsx)(v.a.Text,{id:"".concat(t._id)})]}),Object(_.jsxs)(y.a,{className:"list-group-flush",children:[Object(_.jsxs)(y.a.Item,{id:"".concat(t._id,"_").concat(t.languages),children:[Object(_.jsx)("b",{children:"Understands: "}),t.languages.join(", ")]},"".concat(t._id,"_").concat(t.languages)),Object(_.jsxs)(y.a.Item,{id:"".concat(t._id,"_").concat(t.dob),children:[Object(_.jsx)("b",{children:"Born On: "}),new Date(t.dob).toDateString()]},"".concat(t._id,"_").concat(t.dob)),Object(_.jsxs)(y.a.Item,{id:"".concat(t._id,"_").concat(t.profession),children:[Object(_.jsx)("b",{children:"Profession: "}),t.profession]},"".concat(t._id,"_").concat(t.profession))]})]},"".concat(t._id))},e.displayPeopleCards=function(){return Object.values(e.props.persons).map((function(t,n){return console.debug("INDEX:",t.name,n),e.renderCard(t)}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){document.title="CRUD",this.props.fetchPersons()}},{key:"render",value:function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h2",{children:"Exisiting People in Database"}),Object(_.jsx)(C.a,{children:this.displayPeopleCards()})]})}}]),n}(o.a.Component),E=Object(u.b)((function(e){return{persons:e.people.persons}}),{fetchPersons:f,deletePerson:function(e){return function(t){console.log("Triggering delete on",e),m.a.delete("https://crud-person-node.herokuapp.com/persons/".concat(e)).then((function(e){t({type:h,payload:e.data}),t(f())})).catch((function(e){return console.error(e)}))}}})(P),D=n(20),N=n(6),I=n(78),w=n(41),k=function(e){Object(l.a)(n,e);var t=Object(j.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).onChange=function(e){console.debug(e.target.id),a.setState(Object(D.a)({},e.target.id,e.target.value)),console.debug("this.state",a.state,a.state.name)},a.onSubmit=function(e){e.preventDefault(),console.debug("Submit"),console.debug(a.state);var t=a.state;"Single"==t.maritalStatus?(console.log("Single => Set False"),t.married=!1):(console.log("Married => Set True"),t.married=!0),a.props.addPerson(t)},a.addPersonForm=function(){var e=a.state,t=e.name,n=e.dob,o=e.address,c=e.profession,r=e.maritalStatus,s=e.languages,i=e.about;return Object(_.jsx)(v.a,{children:Object(_.jsx)(v.a.Body,{children:Object(_.jsx)(I.a,{children:Object(_.jsxs)(N.a,{onSubmit:a.onSubmit,children:[Object(_.jsxs)(N.a.Row,{children:[Object(_.jsxs)(N.a.Group,{as:w.a,controlId:"name",children:[Object(_.jsx)(N.a.Label,{children:"Name"}),Object(_.jsx)(N.a.Control,{type:"text",placeholder:"Enter your Name",required:!0,onChange:a.onChange,value:t})]}),Object(_.jsxs)(N.a.Group,{as:w.a,controlId:"dob",children:[Object(_.jsx)(N.a.Label,{children:"Date of Birth"}),Object(_.jsx)(N.a.Control,{type:"date",placeholder:"Date of Birth",required:!0,value:n,onChange:a.onChange})]})]}),Object(_.jsxs)(N.a.Group,{controlId:"address",children:[Object(_.jsx)(N.a.Label,{children:"Address"}),Object(_.jsx)(N.a.Control,{placeholder:"1234 Main St",value:o,onChange:a.onChange})]}),Object(_.jsxs)(N.a.Row,{children:[Object(_.jsxs)(N.a.Group,{as:w.a,controlId:"profession",children:[Object(_.jsx)(N.a.Label,{children:"Profession"}),Object(_.jsx)(N.a.Control,{onChange:a.onChange,value:c})]}),Object(_.jsxs)(N.a.Group,{as:w.a,controlId:"maritalStatus",children:[Object(_.jsx)(N.a.Label,{children:"Marital Status"}),Object(_.jsxs)(N.a.Control,{as:"select",onChange:a.onChange,value:r,children:[Object(_.jsx)("option",{children:"Single"}),Object(_.jsx)("option",{children:"Married"})]})]}),Object(_.jsxs)(N.a.Group,{as:w.a,controlId:"languages",children:[Object(_.jsx)(N.a.Label,{children:"Languages You Know (Comma Separated)"}),Object(_.jsx)(N.a.Control,{onChange:a.onChange,value:s})]})]}),Object(_.jsxs)(N.a.Group,{controlId:"about",children:[Object(_.jsx)(N.a.Label,{children:"About"}),Object(_.jsx)(N.a.Control,{placeholder:"Write something about yourself...",onChange:a.onChange,value:i})]}),Object(_.jsx)(S.a,{variant:"primary",type:"submit",children:"Submit"})]})})})})},a.state={name:"",dob:"",address:"New Delhi, India",profession:"Software Engineer",maritalStatus:!1,languages:"English, Hindi, Python",about:"About me"},a}return Object(i.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("div",{className:"container",children:[Object(_.jsx)("h2",{children:"Add New Person to Database"}),this.addPersonForm()]})}}]),n}(o.a.Component),L=Object(u.b)((function(e){return{}}),{addPerson:function(e){return function(t){console.log(e),m.a.post("https://crud-person-node.herokuapp.com/persons",e).then((function(e){t({type:b,payload:e.data}),t(f())})).catch((function(e){return console.error(e)}))}}})(k);n(74);function G(){return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("br",{}),Object(_.jsx)(L,{}),Object(_.jsx)("br",{}),Object(_.jsx)("br",{}),Object(_.jsx)(E,{})]})}var T=n(10),A=n(42),R=n(43),B=n(11),M={persons:[]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return Object(B.a)({},e);case g:return Object(B.a)(Object(B.a)({},e),{},{persons:t.payload});case b:return console.debug("add person:",t.payload),Object(B.a)({},e);case p:case h:default:return Object(B.a)({},e)}},U=Object(T.combineReducers)({people:F}),q=[R.a],H=Object(T.createStore)(U,{},Object(A.composeWithDevTools)(T.applyMiddleware.apply(void 0,q))),J=document.getElementById("root");r.a.render(Object(_.jsx)(u.a,{store:H,children:Object(_.jsx)(G,{})}),J)}},[[75,1,2]]]);
//# sourceMappingURL=main.5f0660dc.chunk.js.map