(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{177:function(e,t,a){},178:function(e,t,a){"use strict";a.r(t);var n=a(29),l=a(13),r=a(14),m=a(17),s=a(16),c=a(15),i=a(18),o=a(1),u=a.n(o),d=a(66),b=a.n(d),p=(a(74),a(67)),f=(a(177),function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).measurementOnClick=function(e){var t=[];a.tableData.map(function(a){t.push({time:a.time,value:a[e.target.dataset.rowlabel]})}),a.props.updateTableState({name:e.target.dataset.rowlabel,data:t})},a.colOnClick=function(e){var t,n=e.target.className.split(" "),l=Number(n[1]),r=parseInt(n[2]);t=1===a.tableData.length?0:r===a.tableData.length-1?r-1:r+1,a.props.updateTableState({selectedCol1:l,selectedCol2:a.tableData[t].time})},a.tableKeys=a.props.data.keys,a.tableData=a.props.data.data,a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this;if(!this.props.data)return null;this.tableKeys=this.props.data.keys,this.tableData=this.props.data.data;var t=function(t){var a=t.m,n=t.rowIndex;return u.a.createElement("tr",{key:a+1,style:{background:n%2===0?"#EEEEEE":"white"}},"time"===a?u.a.createElement("td",{className:"folder-table-"+a,key:a}):u.a.createElement("td",{className:"".concat("folder-table-"+a," ","firsttd"),"data-rowlabel":a,key:a,onClick:e.measurementOnClick},a),e.tableData.map(function(t,l){var r,m=e.tableData[l].time;if(0===n){var s=new Date(1e3*m);r=Object(p.format)(s,"hh:MMA")}else r=t[a];return u.a.createElement("td",{className:"".concat("folder-table-"+a," ").concat(m," ").concat(l+"td"),"data-unixtime":m,key:l,onClick:e.colOnClick,style:e.props.selectedCol1===m||e.props.selectedCol2===m?{background:"rgba(247, 173, 229, 0.3)"}:{}},r)}))};return u.a.createElement("div",{className:"folder-table-container"},u.a.createElement("div",{className:"folder-table",style:{overflowX:"auto"}},u.a.createElement("table",{key:"folder-table"},u.a.createElement("tbody",{key:"folder-table-body"},u.a.createElement(function(e){return e.measurements.map(function(e,a){return u.a.createElement(t,{key:e,m:e,rowIndex:a})})},{measurements:this.tableKeys}))),u.a.createElement("br",{style:{clear:"both"}})))}}]),t}(o.PureComponent)),h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(m.a)(this,Object(s.a)(t).call(this,e))).handleSubmit=function(e){e&&e.preventDefault();var t=a.data.value.replace(/(\w+:)|(\w+ :)/g,function(e){return'"'+e.substring(0,e.length-1)+'":'}),l=JSON.parse(t);a.setState(Object(n.a)({},a.state,{data:l}))},a.state={data:{data:[{time:14324324,m1:54,m2:443},{time:14394324,m1:45,m2:403},{time:1439434324,m1:45,m2:403},{time:1432435424,m1:54,m2:443},{time:16394324,m1:45,m2:403},{time:15394344,m1:45,m2:403},{time:154355444,m1:54,m2:443},{time:1639555424,m1:45,m2:403},{time:153945454,m1:45,m2:403}],keys:["time","m1","m2"]},selectedCol1:null,selectedCol2:null},a.updateTableState=a.updateTableState.bind(Object(c.a)(a)),a}return Object(i.a)(t,e),Object(r.a)(t,[{key:"updateTableState",value:function(e){this.setState(Object(n.a)({},this.state,e))}},{key:"selectedMeasurement",value:function(){}},{key:"render",value:function(){var e=this;return u.a.createElement(u.a.Fragment,null,u.a.createElement("div",null,"Pass in data in the form: ",'{data: [{time: 156565656, m1: 54, m2: 443}, {time: 1654654546, m1: 54, m2: 443 }, {time: 16546546546, m1: 54, m2: 443 },  {time: 1654663146, m1: 54, m2: 443 },  {time: 1656546546, m1: 54, m2: 443 }, {time: 16534546, m1: 54, m2: 443 }, {time: 1656346546, m1: 54, m2: 443 }], keys: ["time", "m1", "m2"]} '),u.a.createElement("form",{onSubmit:this.handleSubmit},u.a.createElement("input",{style:{height:"50px",width:"50%",fontSize:"14pt"},placeholder:"data",type:"text",ref:function(t){e.data=t}}),u.a.createElement("button",null,"UPDATE TABLE")),u.a.createElement(f,{data:this.state.data,updateTableState:this.updateTableState,selectedMeasurement:this.selectedMeasurement,selectedCol1:this.state.selectedCol1,selectedCol2:this.state.selectedCol2}))}}]),t}(o.Component);b.a.render(u.a.createElement(h,null),document.getElementById("root"))},68:function(e,t,a){e.exports=a(178)},74:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.9caf2bd9.chunk.js.map