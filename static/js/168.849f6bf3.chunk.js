"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[168],{168:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var r=t(861),a=t(439),u=t(757),c=t.n(u),s=t(689),i=t(791),o=t(883),f=t(409),p=t(686),v=t.n(p),h="Reviews_RevsList__n15fY",l="Reviews_RevAuthor__CkkPm",d="Reviews_RevContent__IIV8d",x="Reviews_ContentBox__kh9sU",_=t(184),g=function(){var e=(0,s.UO)().movieId,n=(0,i.useState)([]),t=(0,a.Z)(n,2),u=t[0],p=t[1],g=(0,i.useState)(!1),w=(0,a.Z)(g,2),m=w[0],k=w[1];return(0,i.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,k(!0),n.next=4,(0,f.Hx)(e);case 4:if(0!==(t=n.sent).length){n.next=7;break}return n.abrupt("return");case 7:p(t),n.next=13;break;case 10:n.prev=10,n.t0=n.catch(0),v().Notify.failure("Ooops... Something went wrong! Please, try again.");case 13:return n.prev=13,k(!1),n.finish(13);case 16:case"end":return n.stop()}}),n,null,[[0,10,13,16]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[e]),(0,_.jsxs)("div",{className:x,children:[m&&(0,_.jsx)(o.a,{}),0!==u.length?(0,_.jsx)("div",{children:(0,_.jsx)("ul",{className:h,children:u.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,_.jsxs)("li",{children:[(0,_.jsxs)("h2",{className:l,children:["Author: ",t]}),(0,_.jsx)("p",{className:d,children:r})]},n)}))})}):(0,_.jsx)("div",{children:(0,_.jsx)("p",{children:"We don't have any reviews for this movie."})})]})}},409:function(e,n,t){t.d(n,{Hx:function(){return v},PQ:function(){return p},Tg:function(){return i},Y5:function(){return f},bI:function(){return o}});var r=t(861),a=t(757),u=t.n(a),c=t(294),s="bbc7a6a5746daf74b8073dd6ff8b49f7";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(s));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()}}]);
//# sourceMappingURL=168.849f6bf3.chunk.js.map