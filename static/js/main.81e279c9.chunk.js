(this.webpackJsonpmovie_app_2019=this.webpackJsonpmovie_app_2019||[]).push([[0],{20:function(e,t,a){e.exports=a(45)},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(12),o=a.n(r),i=a(2),c=a.n(i),m=a(13),l=a(14),u=a(15),v=a(18),p=a(16),d=a(19),g=a(17),_=a.n(g);a(43);var y=function(e){var t=e.year,a=e.title,n=e.summary,r=e.poster,o=e.genres;return s.a.createElement("div",{className:"movie"},s.a.createElement("img",{src:r,alt:a,title:a}),s.a.createElement("div",{className:"movie__data"},s.a.createElement("h3",{className:"movie__title"},a),s.a.createElement("h5",{className:"movie__year"},t),s.a.createElement("ul",{className:"movie__genres"},o.map((function(e,t){return s.a.createElement("li",{key:t,className:"genres__genre"},e)}))),s.a.createElement("p",{className:"movie__summary"},n.slice(0,140),"...")))},f=(a(44),function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(v.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(s)))).state={isLoading:!0,movies:[]},a.getMovies=Object(m.a)(c.a.mark((function e(){var t,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,_.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({movies:n,isLoading:!1});case 5:case"end":return e.stop()}}),e)}))),a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){console.log("component did mount"),this.getMovies()}},{key:"componentDidUpdate",value:function(){console.log("i just update")}},{key:"render",value:function(){console.log("component rendering");var e=this.state,t=e.isLoading,a=e.movies;return s.a.createElement("section",{className:"container"},t?s.a.createElement("div",{className:"loader"},s.a.createElement("span",{className:"loader_text"},"Loading...")):s.a.createElement("div",{className:"movies"},a.map((function(e){return s.a.createElement(y,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(s.a.Component));o.a.render(s.a.createElement(f,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.81e279c9.chunk.js.map