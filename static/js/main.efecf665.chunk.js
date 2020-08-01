(this.webpackJsonpmovie_api=this.webpackJsonpmovie_api||[]).push([[0],{10:function(e,t,a){e.exports={MovieInput:"MovieInput_MovieInput__19jJR",TextBox:"MovieInput_TextBox__3dQUP",SubmitButton:"MovieInput_SubmitButton__1NM4x"}},11:function(e,t,a){e.exports={MovieImage:"PopUp_MovieImage__3AtN8",MovieInfo:"PopUp_MovieInfo__PyiwV",popUp:"PopUp_popUp__2KxfP"}},16:function(e,t,a){e.exports={MovieDisplayBox:"MovieDisplayBox_MovieDisplayBox__28dQu",MovieBox:"MovieDisplayBox_MovieBox__dPor4"}},17:function(e,t,a){e.exports={MovieTile:"MovieTile_MovieTile__2bUaW",Poster:"MovieTile_Poster__2TReU"}},28:function(e,t,a){e.exports={Modal:"Modal_Modal__3ge8x"}},29:function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__r25Np"}},31:function(e,t,a){e.exports=a(61)},36:function(e,t,a){},37:function(e,t,a){},61:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),i=a.n(r),c=(a(36),a(3)),l=a(4),u=a(7),p=a(6),s=(a(37),function(e){return e.children}),m=a(2),v=a(5),d=a(10),f=a.n(d),h=a(15),E=a.n(h),_=function(e){return{type:"SETMOVIEDATA",movieData:e}},b=function(e){return console.log(e),{type:"SETFETCHEDDATA",data:e}},D=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={movieName:""},e.movieNameInputHandler=function(t){var a=Object(m.a)({},e.state.movieName);a=t.target.value,e.setState({movieName:a})},e.onSubmitHandler=function(t){t.preventDefault(),e.props.onSubmit(e.state.movieName)},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:f.a.MovieInput},o.a.createElement("form",{onSubmit:function(t){return e.onSubmitHandler(t)}},o.a.createElement("input",{className:f.a.TextBox,onChange:function(t){return e.movieNameInputHandler(t)},value:this.state.movieName,type:"text",placeholder:"Movie Name"}),o.a.createElement("button",{className:f.a.SubmitButton},"Submit")))}}]),a}(n.Component),M=Object(v.b)(null,(function(e){return{onSubmit:function(t){return e(function(e){return function(t){E.a.get("https://www.omdbapi.com/?apikey=fc1d8613&s="+e).then((function(e){t(_(e.data.Search))}))}}(t))}}}))(D),O=a(16),w=a.n(O),P=a(17),y=a.n(P),g=function(e){return o.a.createElement("div",{onClick:function(){return e.clicked(e.id)},className:y.a.MovieTile},o.a.createElement("img",{className:y.a.Poster,src:e.imgSource,alt:e.title}),o.a.createElement("p",null,e.title))},j=a(28),k=a.n(j),T=a(29),U=a.n(T),x=function(e){return e.show?o.a.createElement("div",{className:U.a.Backdrop,onClick:e.clicked}):null},N=function(e){return o.a.createElement(s,null,o.a.createElement(x,{show:e.show,clicked:e.closeModal}),o.a.createElement("div",{className:k.a.Modal,style:{transform:e.show?"translateY(0)":"translateY(-100vh)",opacity:e.show?"1":"0"}},e.children))},S=a(11),B=a.n(S),I=function(e){return o.a.createElement("div",{className:B.a.popUp},o.a.createElement("img",{className:B.a.MovieImage,src:e.imgSource,alt:e.title}),o.a.createElement("div",{className:B.a.MovieInfo},o.a.createElement("p",null,o.a.createElement("strong",null,"Title:"),e.title),o.a.createElement("p",null,o.a.createElement("strong",null,"Year of Release:"),e.year),o.a.createElement("p",null,o.a.createElement("strong",null,"Plot:"),e.plot)))},C=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){var e=this,t=null;this.props.movieData&&(t=this.props.movieData.map((function(t){return o.a.createElement(g,{title:t.Title,key:t.imdbID,imgSource:t.Poster,id:t.imdbID,clicked:function(t){return e.props.onTileClick(t)}})})));var a=null;return this.props.popUpData&&(a=o.a.createElement(I,{imgSource:this.props.popUpData.Poster,title:this.props.popUpData.Title,year:this.props.popUpData.Year,plot:this.props.popUpData.Plot})),o.a.createElement(s,null,o.a.createElement(N,{show:this.props.showPopUp,closeModal:this.props.onBackDropClick},a),o.a.createElement("div",{className:w.a.MovieDisplayBox},o.a.createElement("div",{className:w.a.MovieBox},t)))}}]),a}(n.Component),A=Object(v.b)((function(e){return{movieData:e.movieData,showPopUp:e.showPopUp,popUpData:e.fetchedData}}),(function(e){return{onTileClick:function(t){return e((a=t,function(e){E.a.get("https://www.omdbapi.com/?apikey=fc1d8613&i="+a).then((function(t){e(b(t.data))}))}));var a},onBackDropClick:function(){return e({type:"HIDEPOPUP"})}}}))(C),H=function(e){Object(u.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(s,null,o.a.createElement(M,null),o.a.createElement(A,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var R=a(8),V={movieData:null,showPopUp:!1,fetchedData:null},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SETMOVIEDATA":return Object(m.a)(Object(m.a)({},e),{},{movieData:t.movieData});case"SHOWPOPUP":return Object(m.a)(Object(m.a)({},e),{},{showPopUp:!0});case"HIDEPOPUP":return Object(m.a)(Object(m.a)({},e),{},{showPopUp:!1});case"SETFETCHEDDATA":return Object(m.a)(Object(m.a)({},e),{},{fetchedData:t.data,showPopUp:!0});default:return e}},Y=a(30),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||R.c,F=Object(R.d)(W,J(Object(R.a)(Y.a)));i.a.render(o.a.createElement(v.a,{store:F},o.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[31,1,2]]]);
//# sourceMappingURL=main.efecf665.chunk.js.map