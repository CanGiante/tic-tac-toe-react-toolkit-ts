(this["webpackJsonptic-tac-toe-react-toolkit-ts"]=this["webpackJsonptic-tac-toe-react-toolkit-ts"]||[]).push([[0],{21:function(e,t,r){},26:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),c=r(8),s=r.n(c),i=(r(21),r(7)),o=r(10),l=r(15);function u(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],r=0;r<t.length;r++){var a=Object(l.a)(t[r],3),n=a[0],c=a[1],s=a[2];if(e[n]&&e[n]===e[c]&&e[n]===e[s])return{player:e[n],line:[n,c,s]}}return null}var d={history:[{squares:Array(9).fill(null)}],xIsNext:!0,stepNumber:0},j=Object(o.b)({name:"game",initialState:d,reducers:{jumpTo:function(e,t){e.stepNumber=t.payload,e.xIsNext=t.payload%2===0},handleClick:function(e,t){var r,a=null===(r=e.history)||void 0===r?void 0:r.slice(0,e.stepNumber+1),n=a[a.length-1].squares.slice();u(n)||n[t.payload]||(n[t.payload]=e.xIsNext?"X":"O",e.history=a.concat([{squares:n}]),e.stepNumber=a.length,e.xIsNext=!e.xIsNext)}}}),b=j.actions,m=b.jumpTo,h=b.handleClick,x=function(e){return e.game},v=j.reducer,p=i.c,f=r(30),O=r(2);function N(e){return Object(O.jsx)("button",{className:"square",onClick:e.onClick,style:{backgroundColor:e.isWinner},children:e.value})}var y=Object(f.a)({palette:{primary:{light:"#757ce8",main:"#3f50b5",dark:"#002884",contrastText:"#fff"},secondary:{light:"#ff7961",main:"#f44336",dark:"#ba000d",contrastText:"#000"}}});var g=function(e){for(var t=u(e.squares),r=null===t||void 0===t?void 0:t.line,a=function(t){return Object(O.jsx)(N,{value:e.squares[t],onClick:function(){return e.onClick(t)},isWinner:(null===r||void 0===r?void 0:r.includes(t))?y.palette.primary.light:""},t)},n=[],c=[],s=[],i=0;i<3;i++)n.push(a(i)),c.push(a(i+3)),s.push(a(i+6));return Object(O.jsxs)("div",{className:"board",children:[Object(O.jsx)("div",{className:"board-row",children:n}),Object(O.jsx)("div",{className:"board-row",children:c}),Object(O.jsx)("div",{className:"board-row",children:s})]})};var k=function(){var e,t=p(x),r=Object(i.b)(),a=t.history,n=a[t.stepNumber],c=u(n.squares),s=a.map((function(e,t){var a=t?"Got to move #".concat(t):"Go to game start";return Object(O.jsx)("li",{children:Object(O.jsx)("button",{onClick:function(){return r(m(t))},children:Object(O.jsx)("span",{children:a})})},t)}));return e=c||9!==t.stepNumber?c?"winner: ".concat(c.player):"next player: ".concat(t.xIsNext?"X":"O"):"draw!",Object(O.jsxs)("div",{className:"game-container",children:[Object(O.jsx)("div",{className:"game",children:Object(O.jsx)("div",{className:"game-board",children:Object(O.jsx)(g,{squares:n.squares,onClick:function(e){return r(h(e))}})})}),Object(O.jsxs)("div",{className:"game-info",children:[Object(O.jsx)("div",{className:"status",children:e}),Object(O.jsx)("ol",{className:"moves",children:s})]})]})},q=Object(o.a)({reducer:{game:v}});s.a.render(Object(O.jsx)(n.a.StrictMode,{children:Object(O.jsx)(i.a,{store:q,children:Object(O.jsx)(k,{})})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.da31584f.chunk.js.map