(this.webpackJsonpfirst_react=this.webpackJsonpfirst_react||[]).push([[0],{44:function(e,t,s){},45:function(e,t,s){},46:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s(2),i=s.n(n),r=s(13),c=s.n(r),o=s(4),l=s.n(o),m=s(14),d=s(15),j=s(16),u=s(19),v=s(18),h=s(17),b=s.n(h);s(44);var p=function(e,t,s,n,i,r){return Object(a.jsxs)("div",{className:"movie",children:[Object(a.jsx)("img",{src:e.poster,alt:e.title,title:e.title}),Object(a.jsxs)("div",{className:"movie__data",children:[Object(a.jsx)("h3",{className:"movie__title",children:e.title}),Object(a.jsx)("h5",{className:"movie__year",children:e.year}),Object(a.jsx)("ul",{className:"movie__genres",children:e.genres.map((function(e,t){return Object(a.jsx)("li",{className:"genres_genre",children:e},t)}))}),Object(a.jsxs)("p",{className:"movie__summary",children:[e.summary.slice(0,180),"..."]})]})]})},O=(s(45),function(e){Object(u.a)(s,e);var t=Object(v.a)(s);function s(){var e;Object(d.a)(this,s);for(var a=arguments.length,n=new Array(a),i=0;i<a;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(m.a)(l.a.mark((function t(){var s,a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(a.jsx)("section",{className:"container",children:t?Object(a.jsx)("div",{className:"loader",children:Object(a.jsx)("span",{className:"loader__text",children:"Loading... "})}):Object(a.jsx)("div",{className:"movies",children:s.map((function(e){return Object(a.jsx)(p,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(i.a.Component));c.a.render(Object(a.jsx)(O,{}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.72d38209.chunk.js.map