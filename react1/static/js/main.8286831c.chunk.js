(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){e.exports=n(35)},,,,,,,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(10),c=n.n(o),r=(n(17),n(19),n(8)),l=n(2),u=n(3),s=n(4),d=n(6),b=n(5),m=n(7),f=n(1),h=(n(21),function(e){var t=e.liked,n=e.allPosts;return i.a.createElement("div",{className:"app-header d-flex"},i.a.createElement("h1",null,"Sisesta oma nimi siia"),i.a.createElement("h2",null,n," plaadid, meeldisid ",t))}),p=(n(23),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={term:""},n.onUpdateSearch=n.onUpdateSearch.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onUpdateSearch",value:function(e){var t=e.target.value;this.setState({term:t}),this.props.onUpdateSearch(t)}},{key:"render",value:function(){return i.a.createElement("input",{className:"form-control search-input",type:"text",placeholder:"Otsi kirjete j\xe4rgi",value:this.state.term,onChange:this.onUpdateSearch})}}]),t}(a.Component)),j=(n(25),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).buttons=[{name:"all",label:"K\xf5ik"},{name:"like",label:"Meeldis"}],n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.buttons.map(function(t){var n=t.name,a=t.label,o=e.props,c=o.filter,r=o.onFilterSelect,l=c===n?"btn-info":"btn-outline-secondary";return i.a.createElement("button",{type:"button",className:"btn ".concat(l),key:n,onClick:function(){return r(n)}},a)});return i.a.createElement("div",{className:"btn-group"},t)}}]),t}(a.Component)),O=n(11),g=(n(27),function(e){function t(){var e,n;Object(u.a)(this,t);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(n=Object(d.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(i)))).state={items:[{id:1,label:"\u0421\u0434\u0435\u043b\u0430\u0442\u044c \u0437\u0430\u0434\u0430\u043d\u0438\u0435",done:!1,important:!1,like:!1},{id:2,label:"\u041a\u0443\u043f\u0438\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u044b",done:!1,important:!1,like:!1}]},n.onToggleDone=function(e){n.setState(function(t){var n=t.items,a=n.findIndex(function(t){return t.id===e}),i=n[a],o=Object(r.a)({},i,{done:!i.done});return{items:[].concat(Object(l.a)(n.slice(0,a)),[o],Object(l.a)(n.slice(a+1)))}})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement("div",{className:"post-list"},this.state.items.map(function(n){return i.a.createElement(t,{key:n.id,label:n.label,done:n.done,important:n.important,like:n.like,onToggleDone:function(){return e.onToggleDone(n.id)}})}))}}]),t}(a.Component)),v=(n(29),function(e){var t=e.posts,n=e.onDelete,a=e.onToggleImportant,o=e.onToggleLiked,c=t.map(function(e){var t=e.id,c=Object(O.a)(e,["id"]);return i.a.createElement("li",{key:t,className:"list-group-item"},i.a.createElement(g,Object.assign({},c,{onDelete:function(){return n(t)},onToggleImportant:function(){return a(t)},onToggleLiked:function(){return o(t)}})))});return i.a.createElement("ul",{className:"app-list list-group"},c)}),k=(n(31),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={text:""},n.onValueChange=n.onValueChange.bind(Object(f.a)(Object(f.a)(n))),n.onSubmit=n.onSubmit.bind(Object(f.a)(Object(f.a)(n))),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"onValueChange",value:function(e){this.setState({text:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault(),this.props.onAdd(this.state.text),this.setState({text:""})}},{key:"render",value:function(){return i.a.createElement("form",{className:"bottom-panel d-flex",onSubmit:this.onSubmit},i.a.createElement("input",{type:"text",placeholder:"Mille kohta te m\xf5tlete praegu?",className:"form-control new-post-label",onChange:this.onValueChange,value:this.state.text}),i.a.createElement("button",{type:"submit",className:"btn btn-outline-secondary"},"Lisada"))}}]),t}(a.Component)),S=(n(33),function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(d.a)(this,Object(b.a)(t).call(this,e))).state={data:[{label:"L\xe4hen Reacti \xf5ppima",important:!0,like:!1,done:!1,id:1},{label:"See on nii hea",important:!1,like:!1,done:!1,id:2},{label:"Ma vajan pausi...",important:!1,like:!1,done:!1,id:3}],term:"",filter:"all"},n.deleteItem=n.deleteItem.bind(Object(f.a)(Object(f.a)(n))),n.addItem=n.addItem.bind(Object(f.a)(Object(f.a)(n))),n.onToggleImportant=n.onToggleImportant.bind(Object(f.a)(Object(f.a)(n))),n.onToggleLiked=n.onToggleLiked.bind(Object(f.a)(Object(f.a)(n))),n.onToggleDone=n.onToggleDone.bind(Object(f.a)(Object(f.a)(n))),n.onUpdateSearch=n.onUpdateSearch.bind(Object(f.a)(Object(f.a)(n))),n.onFilterSelect=n.onFilterSelect.bind(Object(f.a)(Object(f.a)(n))),n.maxId=4,n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"deleteItem",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e});return{data:[].concat(Object(l.a)(n.slice(0,a)),Object(l.a)(n.slice(a+1)))}})}},{key:"addItem",value:function(e){var t={label:e,important:!1,like:!1,done:!1,id:this.maxId++};this.setState(function(e){var n=e.data;return{data:[].concat(Object(l.a)(n),[t])}})}},{key:"onToggleImportant",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),i=n[a],o=Object(r.a)({},i,{important:!i.important});return{data:[].concat(Object(l.a)(n.slice(0,a)),[o],Object(l.a)(n.slice(a+1)))}})}},{key:"onToggleLiked",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),i=n[a],o=Object(r.a)({},i,{like:!i.like});return{data:[].concat(Object(l.a)(n.slice(0,a)),[o],Object(l.a)(n.slice(a+1)))}})}},{key:"onToggleDone",value:function(e){this.setState(function(t){var n=t.data,a=n.findIndex(function(t){return t.id===e}),i=n[a],o=Object(r.a)({},i,{done:!i.done});return{data:[].concat(Object(l.a)(n.slice(0,a)),[o],Object(l.a)(n.slice(a+1)))}})}},{key:"searchPost",value:function(e,t){return 0===t.length?e:e.filter(function(e){return e.label.indexOf(t)>-1})}},{key:"filterPost",value:function(e,t){return"like"===t?e.filter(function(e){return e.like}):e}},{key:"onUpdateSearch",value:function(e){this.setState({term:e})}},{key:"onFilterSelect",value:function(e){this.setState({filter:e})}},{key:"render",value:function(){var e=this.state,t=e.data,n=e.term,a=e.filter,o=t.filter(function(e){return e.like}).length,c=t.length,r=this.filterPost(this.searchPost(t,n),a);return i.a.createElement("div",{className:"app"},i.a.createElement(h,{liked:o,allPosts:c}),i.a.createElement("div",{className:"search-panel d-flex"},i.a.createElement(p,{onUpdateSearch:this.onUpdateSearch}),i.a.createElement(j,{filter:a,onFilterSelect:this.onFilterSelect})),i.a.createElement(v,{posts:r,onDelete:this.deleteItem,onToggleImportant:this.onToggleImportant,onToggleLiked:this.onToggleLiked,onToggleDone:this.onToggleDone}),i.a.createElement(k,{onAdd:this.addItem}))}}]),t}(a.Component));c.a.render(i.a.createElement(S,null),document.getElementById("root"))}],[[12,2,1]]]);
//# sourceMappingURL=main.8286831c.chunk.js.map