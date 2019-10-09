(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{35:function(e,t,a){e.exports=a(59)},49:function(e,t,a){},50:function(e,t,a){},52:function(e,t,a){},57:function(e,t,a){},59:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(27),c=a.n(l),i=a(18),s=a.n(i),o=a(28),m=a(7),u=a(8),d=a(10),p=a(9),h=a(11),f=a(14),b=a(5),v=a(29),g=a.n(v),E=(a(49),a(50),a(34)),y=a(17),O=a(30),j={ADD_NEW_FILM:"FILM::ADD"},N=function(e){return{type:j.ADD_NEW_FILM,payload:e}};var w=Object(y.createStore)(function(e,t){var a=j.ADD_NEW_FILM;switch(t.type){case a:if(e.find(function(e){return e.id===t.payload.id}))throw new Error("The film is present");return[].concat(Object(E.a)(e),[t.payload]);default:return e}},[{id:"1",title:"Groundhog Day",description:"A weatherman finds himself inexplicably\n living the same day over and over again.",imgUrl:"https://m.media-amazon.com/images/M/MV5BZWIxNzM5YzQtY2FmMS00Yjc3LWI1ZjUtNGVjMjMzZTIxZTIxXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SY1000_CR0,0,671,1000_AL_.jpg",imdbUrl:"https://www.imdb.com/title/tt0107048/"}],Object(O.devToolsEnhancer)(N())),S=(a(52),function(e){var t=e.id,a=e.title,r=e.description,l=e.imgUrl,c=e.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement(f.b,{to:"/film/".concat(t)},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-4"},a))),n.a.createElement("div",{className:"content"},r,n.a.createElement("br",null)))),n.a.createElement("a",{href:c},"IMDB"))});S.defaultProps={description:""};var U=S,x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={films:w.getState()},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.films;return n.a.createElement("div",{className:"films"},e.map(function(e){return n.a.createElement(U,Object.assign({key:e.id},e))}))}}]),t}(r.Component),D=a(23),C=a(15),I=a(22),k=a.n(I),F=(a(57),Object(r.memo)(function(e){var t=e.error,a=e.name,r=e.label,l=e.type,c=e.onChange,i=e.placeholder,s=e.value,o=k()("input",{"is-danger":!!t}),m=k()("control",{"has-icons-right":!!t}),u="textarea"===l?l:"input";return n.a.createElement("div",{className:"field"},n.a.createElement("label",{htmlFor:a,className:"label"},r),n.a.createElement("div",{className:m},n.a.createElement(u,{name:a,id:a,className:o,type:l,placeholder:i,value:s,onChange:c}),t&&n.a.createElement("span",{className:"icon is-small is-right"},n.a.createElement("i",{className:"fas fa-exclamation-triangle"}))),t&&n.a.createElement("p",{className:"help is-danger"},t))}));F.defaultProps={error:"",type:"text",placeholder:"Type text here"};var A=F,M=function(e,t){return t?null:"Field ".concat(e," is required")};function _(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,r)}return a}var P={title:{value:"",error:null},description:{value:"",error:null},imgUrl:{value:"",error:null},imdbUrl:{value:"",error:null}},W={title:M,imgUrl:M,imdbUrl:M},T=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state=P,a.handleChange=function(e){var t=e.target,r=t.name,n=t.value;a.setState(function(e){return Object(C.a)({},r,{value:n,error:e[r].error})})},a.handleSubmit=function(e){e.preventDefault();var t=a.props.onAdd,r=a.getFormValue(),n=a.validate(),l=n.hasError,c=n.errors;l?a.setState(function(e){var t=c.map(function(t){var a=Object(D.a)(t,2),r=a[0];return[r,{error:a[1],value:e[r].value}]});return Object.fromEntries(t)}):(a.setState(P),t(r))},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"getFormValue",value:function(){return Object.entries(this.state).reduce(function(e,t){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?_(a,!0).forEach(function(t){Object(C.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):_(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}({},e,Object(C.a)({},t[0],t[1].value))},{})}},{key:"validate",value:function(){var e=Object.entries(this.state).map(function(e){var t=Object(D.a)(e,2),a=t[0],r=t[1],n=W[a];return[a,n?n(a,r.value):null]});return{hasError:e.some(function(e){return!!e[1]}),errors:e}}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,r=e.imgUrl,l=e.imdbUrl;return n.a.createElement("form",{onSubmit:this.handleSubmit},n.a.createElement(A,Object.assign({},t,{name:"title",placeholder:"Input film title",label:"Title",onChange:this.handleChange})),n.a.createElement(A,Object.assign({},a,{type:"textarea",name:"description",placeholder:"Input film description",label:"Description",onChange:this.handleChange})),n.a.createElement(A,Object.assign({},r,{name:"imgUrl",placeholder:"Paste image url",label:"Image url",onChange:this.handleChange})),n.a.createElement(A,Object.assign({},l,{name:"imdbUrl",placeholder:"Paste IMDB url",label:"IMDB url",onChange:this.handleChange})),n.a.createElement("button",{type:"submit",className:"button is-primary"},"Add film"))}}]),t}(r.Component),z=function(e){var t=e.id,a=w.getState().find(function(e){return e.id===t}),r=a.title,l=a.imgUrl,c=a.description,i=a.imdbUrl;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card-image"},n.a.createElement("figure",{className:"image is-4by3"},n.a.createElement("img",{src:l,alt:"Film logo"}))),n.a.createElement("div",{className:"card-content"},n.a.createElement("div",{className:"media"},n.a.createElement("div",{className:"media-left"},n.a.createElement("figure",{className:"image is-48x48"},n.a.createElement("img",{src:"https://images-na.ssl-images-amazon.com/images/I/315W5zxAnTL._SY355_.png",alt:"imdb"}))),n.a.createElement("div",{className:"media-content"},n.a.createElement("p",{className:"title is-4"},r))),n.a.createElement("div",{className:"content"},c,n.a.createElement("br",null),n.a.createElement("a",{href:i},"IMDB"))))},L="https://www.omdbapi.com/?apikey=2f4a38c9&t=",Y=function(e){function t(){var e,a;Object(m.a)(this,t);for(var r=arguments.length,n=new Array(r),l=0;l<r;l++)n[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(n)))).state={searchWord:"",error:null},a.handleAddFilm=function(e){var t=e.title,a=e.description,r=e.imgUrl,n=e.imdbUrl;w.dispatch(N({id:g.a.generate(),title:t,description:a,imgUrl:r,imdbUrl:n}))},a.handleSearchChange=function(e){var t=e.target;return a.setState({searchWord:t.value,error:null})},a.searchFilm=function(){var e=Object(o.a)(s.a.mark(function e(t){var r,n,l,c,i,o,m;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("".concat(L).concat(t));case 3:return r=e.sent,e.next=6,r.json();case 6:if(n=e.sent,l=n.Title,c=n.Plot,i=n.Poster,o=n.Website,void 0!==(m=n.imdbID)){e.next=14;break}throw new Error("Film not found");case 14:w.dispatch(N({id:m,title:l,description:c,imgUrl:i,imdbUrl:o})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),a.setState({error:e.t0.message});case 20:case"end":return e.stop()}},e,null,[[0,17]])}));return function(t){return e.apply(this,arguments)}}(),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.unSubscribe=w.subscribe(function(){e.setState({error:null}),e.forceUpdate()})}},{key:"componentWillUnmount",value:function(){this.unSubscribe()}},{key:"render",value:function(){var e=this,t=this.state,a=t.searchWord,r=t.error;return n.a.createElement(f.a,null,n.a.createElement("div",{className:"page"},n.a.createElement("div",{className:"content"},n.a.createElement("div",{className:"box"},n.a.createElement(A,{error:r,value:a,name:"searchWord",placeholder:"Type search word",label:"Search film",onChange:this.handleSearchChange}),n.a.createElement("button",{onClick:function(){return e.searchFilm(a)},type:"button",className:"button is-primary"},"Search film")),n.a.createElement(b.c,null,n.a.createElement(b.a,{exact:!0,path:"/",component:function(){return n.a.createElement(x,null)}}),n.a.createElement(b.a,{exact:!0,path:"/film/:id",component:function(e){var t=e.match;return n.a.createElement(z,{id:t.params.id})}}))),n.a.createElement("div",{className:"sidebar"},n.a.createElement(T,{onAdd:this.handleAddFilm}))))}}]),t}(r.Component);a(58);c.a.render(n.a.createElement(Y,null),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.03298d58.chunk.js.map