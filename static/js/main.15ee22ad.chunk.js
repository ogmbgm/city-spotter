(this["webpackJsonpcity-spotter"]=this["webpackJsonpcity-spotter"]||[]).push([[0],[,,,,function(e,t,n){},,,,,,,function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var i=n(1),s=n(5),a=n.n(s),c=(n(11),n(2)),l=(n(4),n(12),n(6)),o=n.n(l),r=n(0);function d(e){var t=e.cityOptions,n=e.cityList,s=e.back,a=(e.startRound,Object(i.useState)([])),l=Object(c.a)(a,2),d=l[0],j=l[1],u=Object(i.useState)(""),h=Object(c.a)(u,2),b=h[0],O=h[1],m=Object(i.useState)(0),g=Object(c.a)(m,2),x=g[0],v=g[1],p=Object(i.useState)(0),S=Object(c.a)(p,2),f=S[0],C=S[1],k=Object(i.useState)(500),A=Object(c.a)(k,2),N=A[0],y=A[1],L=Object(i.useState)(0),q=Object(c.a)(L,2),M=q[0],B=q[1],P=Object(i.useState)(!0),F=Object(c.a)(P,2),D=F[0],R=F[1],w=Object(i.useState)(!1),I=Object(c.a)(w,2),J=I[0],T=I[1],E=Object(i.useState)(!1),W=Object(c.a)(E,2),H=W[0],G=W[1],V=Object(i.useState)(""),U=Object(c.a)(V,2),Y=U[0],Z=U[1];function K(){var e=n[f];O(e),C(f+1);for(var i=[e],s=0;s<7;){var a=t[Math.floor(Math.random()*t.length)];i.includes(a)||(i.push(a),s++)}j(function(e){for(var t,n=e.length;0!==n;){t=Math.floor(Math.random()*n),n--;var i=[e[t],e[n]];e[n]=i[0],e[t]=i[1]}return e}(i))}Object(i.useEffect)((function(){K()}),[]);var z={angle:90,spread:90,startVelocity:50,elementCount:50,dragFriction:.3,duration:2e3,stagger:3,width:"10px",height:"10px",perspective:"63vh",colors:["#a864fd","#29cdff","#78ff44","#ff718d","#fdff6a"]};return Object(r.jsx)("div",{children:D?Object(r.jsxs)("div",{id:"main-level-div",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("div",{id:"status-div",children:[Object(r.jsxs)("h3",{children:[f,"/10"]}),Object(r.jsxs)("h3",{className:"float-end",children:["Score: ",N]})]}),Object(r.jsx)("img",{src:"/city-spotter/Cities/"+b+"/"+b+x+".png",className:"",alt:"..."}),Object(r.jsxs)("div",{id:"zoom-div",children:[Object(r.jsx)("button",{onClick:function(){x>-2&&(v(x-1),y(N-50))},children:"Zoom Out"}),Object(r.jsxs)("h4",{id:"zoom-display",children:["Zoom: ",x]}),Object(r.jsx)("button",{onClick:function(){x<2&&(v(x+1),y(N-50))},children:"Zoom In"})]})]}),Object(r.jsx)("div",{id:"cities-div",children:d.map((function(e,t){return Object(r.jsxs)("button",{id:t,className:"",onClick:function(){return function(e,t){e===b?(document.getElementById(t).className="light-green",T(!0),G(!1),setTimeout((function(){for(document.getElementById(t).className="",v(0),K(),B(M+N),y(500),t=0;t<8;)document.getElementById(t).disabled=!1,t++;T(!1),10!==f||R(!1)}),1e3)):(document.getElementById(t).disabled=!0,y(N-100))}(e,t)},disabled:!1,children:[e,e===b?Object(r.jsx)(o.a,{className:"confetti",active:J,config:z}):Object(r.jsx)(r.Fragment,{})]},t)}))}),Object(r.jsxs)("div",{id:"options-div",children:[Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:["Total Score: ",M]}),Object(r.jsxs)("div",{id:"hint-div",children:[Object(r.jsx)("button",{onClick:function(){G(!0),Z("Landmark"),y(N-250)},children:"Landmark Hint"}),Object(r.jsx)("button",{onClick:function(){G(!0),Z("Skyline"),y(N-200)},children:"Skyline Hint"})]})]}),H?Object(r.jsx)("img",{src:"/city-spotter/Cities/"+b+"/"+b+Y+".png",id:"hint",alt:"..."}):Object(r.jsx)(r.Fragment,{}),Object(r.jsxs)("div",{id:"endgame-div",children:[Object(r.jsx)("button",{onClick:s,children:"Main Menu"}),Object(r.jsx)("button",{children:"Restart"})]})]})]}):Object(r.jsxs)("div",{id:"level-end-div",children:[Object(r.jsx)("h1",{children:"Round Over"}),Object(r.jsxs)("h2",{children:["Score: ",M,"/5000"]}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:s,children:"Main Menu"})]})})}n(15);function j(e){var t=e.startRound,n=e.levels,s=e.setGame,a=Object(i.useState)(0),l=Object(c.a)(a,2),o=l[0],d=l[1];return Object(r.jsxs)("div",{id:"main-menu-div",children:[Object(r.jsxs)("div",{className:"title-div",children:[Object(r.jsx)("h1",{id:"title",children:"City Spotter"}),Object(r.jsxs)("div",{id:"start-div",children:[Object(r.jsx)("h2",{children:n[o]}),Object(r.jsx)("button",{onClick:t,children:"Play"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{onClick:function(){o===n.length-1?(s(n[0]),d(0)):(s(n[o+1]),d(o+1))},children:"Change Game"})]})]}),Object(r.jsxs)("div",{className:"title-div",children:[Object(r.jsxs)("div",{className:"menu-div",children:[Object(r.jsx)("h2",{className:"green",children:"Login"}),Object(r.jsxs)("form",{children:[Object(r.jsx)("input",{className:"green",placeholder:"username",type:"text"}),Object(r.jsx)("input",{className:"green",placeholder:"password",type:"password"})]})]}),Object(r.jsxs)("div",{className:"menu-div",children:[Object(r.jsx)("h2",{className:"green",children:"High Scores"}),Object(r.jsxs)("ul",{children:[Object(r.jsxs)("li",{className:"green",children:[Object(r.jsx)("span",{children:"Dave"}),"--",Object(r.jsx)("span",{children:"5000"})]}),Object(r.jsxs)("li",{className:"green",children:[Object(r.jsx)("span",{children:"John"}),"--",Object(r.jsx)("span",{children:"4000"})]}),Object(r.jsxs)("li",{className:"green",children:[Object(r.jsx)("span",{children:"Sean"}),"--",Object(r.jsx)("span",{children:"3000"})]}),Object(r.jsxs)("li",{className:"green",children:[Object(r.jsx)("span",{children:"Ted"}),"--",Object(r.jsx)("span",{children:"2000"})]}),Object(r.jsxs)("li",{className:"green",children:[Object(r.jsx)("span",{children:"Redmond"}),"--",Object(r.jsx)("span",{children:"1500"})]}),Object(r.jsxs)("li",{className:"green",children:[Object(r.jsx)("span",{children:"Mike"}),"--",Object(r.jsx)("span",{children:"1000"})]}),Object(r.jsxs)("li",{className:"green",children:[Object(r.jsx)("span",{children:"Luke"}),"--",Object(r.jsx)("span",{children:"500"})]})]})]})]})]})}var u=function(){var e=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","Indianapolis","Charlotte","San Francisco","Seattle","Denver","Washington","Nashville","Oklahoma City","El Paso","Boston","Portland"],t=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","Indianapolis","Charlotte","San Francisco","Seattle","Denver","Washington","Nashville","Oklahoma City","El Paso","Boston","Portland","Las Vegas","Detroit","Memphis","Louisville","Baltimore","Milwaukee","Albuquerque","Tucson","Fresno","Sacramento","Kansas City","Mesa","Atlanta","Omaha","Colorado Springs","Raleigh","Long Beach","Virginia Beach","Miami","Oakland","Minneapolis","Tulsa","Bakersfield","Wichita","Arlington"],n=["New York","Los Angeles","Chicago","Houston","Phoenix","Philadelphia","San Antonio","San Diego","Dallas","San Jose","Austin","Jacksonville","Fort Worth","Columbus","Indianapolis","Charlotte","San Francisco","Seattle","Denver","Washington","Nashville","Oklahoma City","El Paso","Boston","Portland","Las Vegas","Detroit","Memphis","Louisville","Baltimore","Milwaukee","Albuquerque","Tucson","Fresno","Sacramento","Kansas City","Mesa","Atlanta","Omaha","Colorado Springs","Raleigh","Long Beach","Virginia Beach","Miami","Oakland","Minneapolis","Tulsa","Bakersfield","Wichita","Arlington","Aurora","Tampa","New Orleans","Cleveland","Honolulu","Anaheim","Lexington KY","Stockton","Corpus Christi","Henderson","Riverside CA","Newark NJ","Saint Paul","Santa Ana","Cincinnati","Irvine","Orlando","Pittsburgh","St. Louis","Greensboro","Jersey City","Anchorage","Lincoln NE","Plano","Durham","Buffalo","Chandler","Chula Vista","Toledo","Madison","Gilbert","Reno","Fort Wayne","North Las Vegas","St. Petersburg","Lubbock","Irving","Laredo","Winston-Salem","Chesapeake","Glendale AZ","Garland","Scottsdale","Norfolk","Boise","Fremont","Spokane","Santa Clarita","Baton Rouge","Richmond"],s=Object(i.useState)([]),a=Object(c.a)(s,2),l=a[0],o=a[1],u=Object(i.useState)(!1),h=Object(c.a)(u,2),b=h[0],O=h[1],m=Object(i.useState)(e),g=Object(c.a)(m,2),x=g[0],v=g[1];function p(){var e=0,t=[];for(console.log(x);e<10;){var n=x[Math.floor(Math.random()*x.length)];t.includes(n)||(t.push(n),e++)}o(t),O(!0)}return Object(r.jsx)("div",{children:b?Object(r.jsx)(d,{cityOptions:x,cityList:l,back:function(){O(!1)},startRound:p}):Object(r.jsx)(j,{setGame:function(i){"USA 25 Largest Cities"===i?v(e):"USA 50 Largest Cities"===i?v(t):"USA 100 Largest Cities"===i?v(n):"alb"===i&&v(["Albuquerque","Albuquerque1","Albuquerque2","Albuquerque3","Albuquerque4","Albuquerque5","Albuquerque6","Albuquerque7","Albuquerque8","Albuquerque9"])},cityOptions:x,levels:["USA 25 Largest Cities","USA 50 Largest Cities","USA 100 Largest Cities","alb"],startRound:p})})},h=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,i=t.getFID,s=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),s(e),a(e),c(e)}))};a.a.render(Object(r.jsx)(u,{}),document.getElementById("root")),h()}],[[16,1,2]]]);
//# sourceMappingURL=main.15ee22ad.chunk.js.map