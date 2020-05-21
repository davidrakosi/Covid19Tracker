(this["webpackJsonpcovid-tracker"]=this["webpackJsonpcovid-tracker"]||[]).push([[0],{13:function(e,t,a){e.exports={container:"Cards_container__3bjn6",grid:"Cards_grid__37RC7",card:"Cards_card__eGUfZ",infected:"Cards_infected__-adYp",recovered:"Cards_recovered__1aizD",deaths:"Cards_deaths__Qdjzq"}},18:function(e,t,a){e.exports={cards:"App_cards__3Hut_",container:"App_container__1MQN3",subContainer:"App_subContainer__3hLX-",imgDiv:"App_imgDiv__8uzoi",image:"App_image__3byI1","image\xa0":"App_image\xa0__s_3H7"}},207:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(72),o=a.n(c),s=a(6),u=a.n(s),i=a(10),l=a(73),d=a(74),m=a(84),p=a(83),f=a(224),v=a(228),h=a(225),b=a(226),E=a(33),_=a.n(E),g=a(34),y=a.n(g),C=a(13),x=a.n(C),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:x.a.container},r.a.createElement(f.a,{container:!0,spacing:3,justify:"center",className:x.a.grid},r.a.createElement(f.a,{item:!0,component:v.a,className:y()(x.a.card,x.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:a.value,duration:2,separator:"."})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of active cases of Covid-19"))),r.a.createElement(f.a,{item:!0,component:v.a,className:y()(x.a.card,x.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:n.value,duration:2,separator:"."})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of recovered cases of Covid-19"))),r.a.createElement(f.a,{item:!0,component:v.a,className:y()(x.a.card,x.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{color:"textSecondary",gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h5"},r.a.createElement(_.a,{start:0,end:c.value,duration:2,separator:"."})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of dead cases of Covid-19"))))):"Loading..."},w=a(32),O=a(46),k=a(35),D=a.n(k),N="https://covid19.mathdro.id/api",S=function(){var e=Object(i.a)(u.a.mark((function e(t){var a,n,r,c,o,s,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=N,t&&(a="".concat(N,"/countries/").concat(t)),e.prev=2,e.next=5,D.a.get(a);case 5:return n=e.sent,r=n.data,c=r.recovered,o=r.confirmed,s=r.deaths,i=r.lastUpdate,e.abrupt("return",{recovered:c,confirmed:o,deaths:s,lastUpdate:i});case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/daily"));case 3:return t=e.sent,a=t.data,n=a.map((function(e){return{confirmed:e.confirmed.total,deaths:e.deaths.total,date:e.reportDate}})),e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.a.get("".concat(N,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:e.prev=8,e.t0=e.catch(0),console.log("Error: "+e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(80),U=a.n(B),z=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,s=e.country,l=Object(n.useState)({}),d=Object(w.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,A();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]);var f=m.length?r.a.createElement(O.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333FF",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba(255,0,0,0.5)",fill:!0}]}}):null,v=a?r.a.createElement(O.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["blue","green","red"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:TransitionEvent,text:"Current state in ".concat(s)}}}):null;return r.a.createElement("div",{className:U.a.container},s?v:f)},F=a(229),P=a(227),R=a(81),G=a.n(R),H=function(e){var t=e.handleCountry,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],s=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=s,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[s]),r.a.createElement(F.a,{className:G.a.formControl},r.a.createElement(P.a,{default:"",onChange:function(e){t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)}))))},J=a(18),L=a.n(J),M=a(82),Q=a.n(M),q=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountry=function(){var t=Object(i.a)(u.a.mark((function t(a){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.handleCountry();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:L.a.imgDiv},r.a.createElement("img",{className:L.a.image,src:Q.a,alt:"COVID-19"})),r.a.createElement("div",{className:L.a.container},r.a.createElement("div",{className:L.a.cards},r.a.createElement(j,{data:t})),r.a.createElement("div",{className:L.a.subContainer},r.a.createElement(H,{handleCountry:this.handleCountry}),r.a.createElement(z,{data:t,country:a}))))}}]),a}(r.a.Component);o.a.render(r.a.createElement(q,null),document.getElementById("root"))},80:function(e,t,a){e.exports={container:"Chart_container__1PIOn"}},81:function(e,t,a){e.exports={formControl:"CountryPicker_formControl__2p8f9"}},82:function(e,t,a){e.exports=a.p+"static/media/image.d7265326.png"},87:function(e,t,a){e.exports=a(207)}},[[87,1,2]]]);
//# sourceMappingURL=main.1774a4c7.chunk.js.map