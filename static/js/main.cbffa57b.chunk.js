(this.webpackJsonpapi=this.webpackJsonpapi||[]).push([[0],{12:function(e,t,a){},13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(1),o=a.n(r),l=(a(12),a(3)),i=a(4),s=a(5),u=a(6),m=function(e){var t=e.contacts;return c.a.createElement("div",null,c.a.createElement("div",{class:"text-center py-3 mb-2 text-white bg-primary"},c.a.createElement("h1",null,"Contact List")),c.a.createElement("div",{class:"container"},c.a.createElement("div",{class:"row"},c.a.createElement("div",{class:"col-md-12"},t.map((function(e){return c.a.createElement("div",{class:"card"},c.a.createElement("div",{class:"card-body"},c.a.createElement("h5",{class:"card-title"},e.name),c.a.createElement("h6",{class:"card-subtitle mb-2 text-muted"},e.email),c.a.createElement("p",{class:"card-text"},e.company.catchPhrase)))}))))))},d=(a(13),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={contacts:[],isLoading:!0},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){e.setState({contacts:t,isLoading:!1})})).catch(console.log)}},{key:"render",value:function(){return this.state.isLoading?c.a.createElement("p",null,"Nunggu ya ..."):c.a.createElement(m,{contacts:this.state.contacts})}}]),a}(n.Component));var h=function(){return c.a.createElement("div",{class:"text-center py-4 mt-2 bg-primary text-white"},c.a.createElement("h5",null,"React JS API"),c.a.createElement("a",{target:"blank",href:"https://github.com/muhyiabdulb/react-api/",class:"text-white"},"Muhyi Abdul Basith"))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(d,null)),document.getElementById("root")),o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("footer")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,a){e.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.cbffa57b.chunk.js.map