(this["webpackJsonpmovie-info-api"]=this["webpackJsonpmovie-info-api"]||[]).push([[0],{34:function(e,n,s){},35:function(e,n,s){},41:function(e,n,s){},59:function(e,n,s){},60:function(e,n,s){},61:function(e,n,s){},62:function(e,n,s){"use strict";s.r(n);var c=s(1),t=s(0),a=s(26),i=s.n(a),o=s(11),r=s(2),m=(s(34),s(8));s(35);var l=function(e){var n=Object(r.f)(),s=Object(r.g)().pathname;console.log(s);var a=Object(t.useState)(""),i=Object(m.a)(a,2),l=i[0],j=i[1],h=Object(t.useState)(!1),b=Object(m.a)(h,2),f=b[0],d=b[1];return Object(t.useEffect)((function(){console.log(s),d("/movieInfoApp/"!==s)}),[s]),Object(c.jsxs)("nav",{className:"navbar",children:[f&&Object(c.jsx)("button",{onClick:function(){n.goBack()},className:"navbar__backBtn",children:"\u25c4"}),Object(c.jsxs)(o.b,{to:"/movieInfoApp/",className:"navbar__logo",children:[Object(c.jsx)("span",{children:"Movie"})," Info App"]}),Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),n.push("/movieInfoApp/search/"+l),j("")},className:"navbar__form",children:[Object(c.jsx)("input",{type:"text",placeholder:"Search for movies, tv series & more...",value:l,onChange:function(e){j(e.target.value)},className:"navbar__input"}),Object(c.jsx)("button",{type:"submit",className:"navbar__submit",children:"Wyslij"})]})]})},j=s(28);s(41);var h=function(){var e=Object(j.a)()-220;return Object(c.jsxs)("div",{className:"start",style:{height:e},children:[Object(c.jsxs)("h1",{className:"start__header",children:[Object(c.jsx)("span",{className:"start__yellow",children:"THE BEST"})," MOVIE INFO APP WITH SEARCH ENGINE"]}),Object(c.jsxs)("h5",{className:"start__desc",children:["This movie info app is created by Hubert Kozik. It has a search engine to find the all informations about movie, series and more. ",Object(c.jsx)("br",{})," ",Object(c.jsx)("br",{}),"All you have to do is type something in search field above and click enter!"]})]})},b=s(12),f=s.n(b);s(59),s(60);var d=function(e){var n=Object(r.f)(),s=e.title,t=e.imgSrc,a=e.year,i=e.id;return Object(c.jsxs)("div",{className:"movieCard",children:[Object(c.jsx)("img",{src:t,alt:s,className:"movieCard__img"}),Object(c.jsxs)("div",{className:"movieCard__info",children:[Object(c.jsx)("h4",{className:"movieCard__title",children:s.length>15?s.slice(0,15)+"...":s}),Object(c.jsx)("h5",{className:"movieCard__year",children:a}),Object(c.jsx)("button",{onClick:function(){n.push("/movieInfoApp/movie/"+i)},className:"movieCard__btn",children:"Show me more"})]})]})};var v=function(e){var n=e.match,s=Object(t.useState)([]),a=Object(m.a)(s,2),i=a[0],o=a[1];return Object(t.useEffect)((function(){f.a.get("https://www.omdbapi.com/?apikey=d1dd04b&s="+n.params.inputSearch).then((function(e){o(e.data.Search)})).catch((function(e){console.log(e)})).then((function(){}))}),[n.params.inputSearch]),Object(c.jsx)("div",{className:i?"searchedMovies searchedMovies--noEmpty":"searchedMovies searchedMovies--empty",children:i?i.map((function(e){return Object(c.jsx)(d,{title:e.Title,imgSrc:e.Poster,year:e.Year,id:e.imdbID},e.imdbID)})):Object(c.jsx)("h4",{className:"searchedMovies__empty",children:"Ooops! There is no movie that matches your query."})})};s(61);var p=function(e){var n=e.match,s=Object(t.useState)(""),a=Object(m.a)(s,2),i=a[0],o=a[1];return Object(t.useEffect)((function(){f.a.get("http://www.omdbapi.com/?apikey=d1dd04b&i="+n.params.movieId).then((function(e){o(e.data)})).catch((function(e){console.log(e)})).then((function(){}))}),[n.params.movieId]),console.log(i),Object(c.jsxs)("div",{className:"movieInfo",children:[Object(c.jsx)("img",{src:i.Poster,alt:i.Title,className:"movieInfo__poster"}),Object(c.jsxs)("div",{className:"movieInfo__infos",children:[Object(c.jsx)("h3",{className:"movieInfo__title",children:i.Title}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["Director:"," ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.Director})]}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["Writer: ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.Writer})]}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["Production:"," ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.Production})]}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["Genre: ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.Genre})]}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["Country: ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.Country})]}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["Premiered Date:"," ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.Released})]}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["Actors: ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.Actors})]}),Object(c.jsxs)("h5",{className:"movieInfo__info",children:["imdb Rating:"," ",Object(c.jsx)("span",{className:"movieInfo__infoSpan",children:i.imdbRating})]}),Object(c.jsx)("p",{className:"movieInfo__plot",children:i.Plot})]})]})};var u=function(){return Object(c.jsxs)(o.a,{children:[Object(c.jsx)(l,{}),Object(c.jsxs)(r.c,{children:[Object(c.jsx)(r.a,{path:"/movieInfoApp/",exact:!0,component:h}),Object(c.jsx)(r.a,{path:"/movieInfoApp/search/:inputSearch",component:v}),Object(c.jsx)(r.a,{path:"/movieInfoApp/movie/:movieId",component:p})]})]})};i.a.render(Object(c.jsx)(u,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.faded754.chunk.js.map