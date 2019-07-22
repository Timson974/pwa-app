(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{162:function(e,a,t){},163:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),i=t(55),r=t.n(i),o=(t(65),t(56)),s=t.n(o),c=(t(66),t(36)),u=t.n(c),d=t(57),m=t(2),h=t(3),p=t(6),E=t(4),v=t(14),b=t(5),g=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).canvas=l.a.createRef(),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"draw",value:function(){var e=this.props.audioData,a=this.canvas.current,t=a.height,n=a.width,l=a.getContext("2d"),i=0,r=1*n/e.length;l.lineWidth=2,l.strokeStyle="#000000",l.clearRect(0,0,n,t),l.beginPath(),l.moveTo(0,t/2);var o=!0,s=!1,c=void 0;try{for(var u,d=e[Symbol.iterator]();!(o=(u=d.next()).done);o=!0){var m=u.value/255*t;l.lineTo(i,m),i+=r}}catch(h){s=!0,c=h}finally{try{o||null==d.return||d.return()}finally{if(s)throw c}}l.lineTo(i,t/2),l.stroke()}},{key:"componentDidUpdate",value:function(){this.draw()}},{key:"render",value:function(){return l.a.createElement("canvas",{width:"300",height:"300",ref:this.canvas})}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).state={audioData:new Uint8Array(0)},t.tick=t.tick.bind(Object(v.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"componentDidMount",value:function(){this.audioContext=new(window.AudioContext||window.webkitAudioContext),this.analyser=this.audioContext.createAnalyser(),this.dataArray=new Uint8Array(this.analyser.frequencyBinCount),this.source=this.audioContext.createMediaStreamSource(this.props.audio),this.source.connect(this.analyser),this.rafId=requestAnimationFrame(this.tick)}},{key:"tick",value:function(){this.analyser.getByteTimeDomainData(this.dataArray),this.setState({audioData:this.dataArray}),this.rafId=requestAnimationFrame(this.tick)}},{key:"componentWillUnmount",value:function(){cancelAnimationFrame(this.rafId),this.analyser.disconnect(),this.source.disconnect()}},{key:"render",value:function(){return l.a.createElement(g,{audioData:this.state.audioData})}}]),a}(n.Component),f=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).state={audio:null},t.toggleMicrophone=t.toggleMicrophone.bind(Object(v.a)(t)),t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"getMicrophone",value:function(){var e=Object(d.a)(u.a.mark(function e(){var a;return u.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.mediaDevices.getUserMedia({audio:!0,video:!1});case 2:a=e.sent,this.setState({audio:a});case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"stopMicrophone",value:function(){this.state.audio.getTracks().forEach(function(e){return e.stop()}),this.setState({audio:null})}},{key:"toggleMicrophone",value:function(){this.state.audio?this.stopMicrophone():this.getMicrophone()}},{key:"render",value:function(){return l.a.createElement("div",{className:"Sound"},l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Noise & Vibration Measurement"),l.a.createElement("main",null,l.a.createElement("div",{className:"controls"},l.a.createElement("button",{onClick:this.toggleMicrophone},this.state.audio?"Stop Measurement":"Measure Noise & Vibration Level")),this.state.audio?l.a.createElement(y,{audio:this.state.audio}):"risk: high, medium, low")))}}]),a}(n.Component),k=t(37);var w=function(e){return l.a.createElement("main",null,l.a.createElement("form",null,l.a.createElement("fieldset",{className:"research"},l.a.createElement("legend",null,"Research Area"),l.a.createElement("input",{name:"Location",value:e.data.Location,onChange:e.handleChange,placeholder:"Location"}),l.a.createElement("br",null),l.a.createElement("input",{name:"NoiseLevel",value:e.data.NoiseLevel,onChange:e.handleChange,placeholder:"Noise Level"}),l.a.createElement("br",null),l.a.createElement("input",{name:"VibrationLevel",value:e.data.VibrationLevel,onChange:e.handleChange,placeholder:"Vibration Level"}),l.a.createElement("br",null),l.a.createElement("input",{name:"Probability",value:e.data.Probability,onChange:e.handleChange,placeholder:"Probability"}),l.a.createElement("br",null),l.a.createElement("input",{name:"Impact",value:e.data.Impact,onChange:e.handleChange,placeholder:"Impact"}),l.a.createElement("br",null),l.a.createElement("input",{name:"RiskValue",value:e.data.RiskValue,onChange:e.handleChange,placeholder:"Risk Value"}),l.a.createElement("br",null),l.a.createElement("input",{name:"RiskType",value:e.data.RiskType,onChange:e.handleChange,placeholder:"Risk type"})),l.a.createElement("br",null),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Noise and Vibration Value"),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"RiskType",value:"Very Low",checked:"Very Low"===e.data.RiskType,onChange:e.handleChange})," 0-39 (dB) = [0-0.33] (m/s2)"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"RiskType",value:"Low",checked:"Low"===e.data.RiskType,onChange:e.handleChange})," 40-50 (dB) = [0.34-0.99] (m/s2)"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"RiskType",value:"Medium",checked:"Medium"===e.data.RiskType,onChange:e.handleChange})," 51-65 (dB) = [1.0-1.98] (m/s2)"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"RiskType",value:"High",checked:"High"===e.data.RiskType,onChange:e.handleChange})," 66-90 (dB) = [1.99-2.97] (m/s2)"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"radio",name:"RiskType",value:"Very High",checked:"Very High"===e.data.RiskType,onChange:e.handleChange})," 91-140(dB) = [2.98-3.30] (m/s2)"),l.a.createElement("br",null)),l.a.createElement("br",null),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Quantitative Risk Analysis (Probability * Impact)"),l.a.createElement("select",{value:e.data.Probability,name:"Probability",onChange:e.handleChange},l.a.createElement("option",{value:""},"---Please choose Probability value---"),l.a.createElement("option",{value:"1"},"1.Very High"),l.a.createElement("option",{value:"2"},"2.High"),l.a.createElement("option",{value:"3"},"3.Medium"),l.a.createElement("option",{value:"4"},"4.Low"),l.a.createElement("option",{value:"5"},"5.Very Low")),l.a.createElement("select",{value:e.data.Impact,name:"Impact",onChange:e.handleChange},l.a.createElement("option",{value:""},"---Please choose Noise Impact value---"),l.a.createElement("option",{value:"1"},"1.No injuries"),l.a.createElement("option",{value:"2"},"2.Trouble of communicating"),l.a.createElement("option",{value:"3"},"3.Mental health problem"),l.a.createElement("option",{value:"4"},"4.Cardiovascular issues"),l.a.createElement("option",{value:"5"},"5.Hearing loss")),l.a.createElement("br",null),l.a.createElement("select",{value:e.data.Impact,name:"Impact",onChange:e.handleChange},l.a.createElement("option",{value:""},"---Please choose HAV Impact value---"),l.a.createElement("option",{value:"1"},"1.No injuries"),l.a.createElement("option",{value:"2"},"2.Muscle and joint damage in the hands and arms"),l.a.createElement("option",{value:"3"},"3.Sensory nerve damage"),l.a.createElement("option",{value:"4"},"4.Carpel tunnel syndrome"),l.a.createElement("option",{value:"5"},'5."White fingers"')),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isProtected",onChange:e.handleChange,checked:e.data.isProtected})," 1-2"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isProtected",onChange:e.handleChange,checked:e.data.isProtected})," 3-4"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isAnalysed",onChange:e.handleChange,checked:e.data.isAnalysed})," 5-9"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isPpeUsed",onChange:e.handleChange,checked:e.data.isPpeUsed})," 10-15"),l.a.createElement("br",null),l.a.createElement("label",null,l.a.createElement("input",{type:"checkbox",name:"isWorkStoped",onChange:e.handleChange,checked:e.data.isWorkStoped})," 16-25"))),l.a.createElement("hr",null),l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Qualitative Risk Analysis"),l.a.createElement("p",null,"UWL Location: ",e.data.Location),l.a.createElement("p",null,"Measured Noise Level: ",e.data.NoiseLevel," (dB)"),l.a.createElement("p",null,"Measured Vibration Level: ",e.data.VibrationLevel," (m/s2)"),l.a.createElement("p",null,"Probability: ",e.data.Probability),l.a.createElement("p",null,"Impact: ",e.data.Impact),l.a.createElement("p",null,"Risk Value: ",e.data.RiskValue),l.a.createElement("p",null,"Risk Type: ",e.data.RiskType),l.a.createElement("hr",null),l.a.createElement("p",null,"Risk Analysis: "),l.a.createElement("p",null,"Area Protected:   ",e.data.isProtected?"Yes":"No"),l.a.createElement("p",null,"Use PPE: ",e.data.isAnalysed?"Yes":"No"),l.a.createElement("p",null,"Change equipment: ",e.data.isPpeUsed?"Yes":"No"),l.a.createElement("p",null,"Stop work: ",e.data.isWorkStoped?"Yes":"No")))},C=function(e){function a(){var e,t;Object(m.a)(this,a);for(var n=arguments.length,l=new Array(n),i=0;i<n;i++)l[i]=arguments[i];return(t=Object(p.a)(this,(e=Object(E.a)(a)).call.apply(e,[this].concat(l)))).state={Location:"",NoiseLevel:"",VibrationLevel:"",Probability:"",Impact:"",RiskValue:"",RiskType:"",isProtected:!1,isChanged:!1,isPpeUsed:!1,isWorkStoped:!1},t.countRiskValue=function(){return 0<=t.state.RiskValue<=2?"Very Low":3<=t.state.RiskValue<=4?"Low":5<=t.state.RiskValue<=9?"Medium":10<=t.state.RiskValue<=15?"High":"Very High"},t.handleChange=function(e){var a=e.target,n=a.name,l=a.value,i=a.type,r=a.checked;"checkbox"===i?t.setState(Object(k.a)({},n,r)):t.setState(Object(k.a)({},n,l))},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement(w,{handleChange:this.handleChange,data:this.state})}}]),a}(n.Component),j=t(26),P=function(e){function a(e){var t;return Object(m.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).state={chartData:{labels:["1.Library, level 1","2.Library, level 2","3.Library, level 3","4.Printing Area, Street","5.Classroom, floor 3","6.Canteen","7.Back yard"],datasets:[{label:"Risk Value",data:[20,9,5,22,15,12,18],backgroundColor:["rgba(255, 99, 132, 0.6)","rgba(54, 162, 235, 0.6)","rgba(75, 192, 192, 0.6)","rgba(153, 102, 255, 0.6)","rgba(255, 159, 64, 0.6)","rgba(255, 79, 130, 0.6)","rgba(250, 100, 32, 0.6)","rgba(255, 99, 132, 0.6)"]}]}},t}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("fieldset",null,l.a.createElement("legend",null,"Results & Analysis"),l.a.createElement("form",{className:"chart"},l.a.createElement(j.a,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Bar view: Risk Analysis of Noise and Vibration",fontSize:15},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}),l.a.createElement(j.b,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Line view: Risk Analysis of Noise and Vibration",fontSize:15},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}),l.a.createElement(j.c,{data:this.state.chartData,options:{title:{display:this.props.displayTitle,text:"Pie view: Risk Analysis of Noise and Vibration",fontSize:15},legend:{display:this.props.displayLegend,position:this.props.legendPosition}}}))))}}]),a}(n.Component);P.defaultProps={displayTitle:!0,displayLegend:!0,legendPosition:"right"};var R=P,N=t(165),T=t(166),L=t(167),A=t(168),V=(t(162),function(e){function a(){return Object(m.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(b.a)(a,e),Object(h.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(N.a,null,l.a.createElement("h2",null,"Project Info"),l.a.createElement(T.a,null,l.a.createElement(L.a,{xs:12,sm:8,className:"main-section"},l.a.createElement("p",null,"The project focuses on how risk value affects to the productivity of IT users"),l.a.createElement("p",null,"The project areas are the Library levels 1,2,3, the Printing area, Street, others"),l.a.createElement("p",null,"During the project development the PWA, quantitative risk analysis (QRA) and "),l.a.createElement("p",null,"qualitative factor risk analysis (QFRA) were developed for UWL facilities")),l.a.createElement(L.a,{xs:12,sm:4,className:"sidebar-selection"},l.a.createElement(A.a,{src:"assets/Timur Utepov.png",width:"280"}),l.a.createElement("p",null,"Developer")),l.a.createElement("h2",null,"Project Method"),l.a.createElement(L.a,{xs:12,sm:8,className:"main-section"},l.a.createElement("p",null,"The project methododology are the Prototyping, Waterfall and Risk assessment"),l.a.createElement("p",null,"The development method is a risk value calculation, where probability and impact "),l.a.createElement("p",null,"The method for the PWA development is React.js")),l.a.createElement(L.a,{xs:12,sm:4,className:"sidebar-selection"},l.a.createElement(A.a,{src:"assets/risk-analysis.png",width:"280"}),l.a.createElement("p",null,"Risk Analysis matrix")),l.a.createElement("h2",null,"Project Measurement and Control"),l.a.createElement(L.a,{xs:12,sm:8,className:"main-section"},l.a.createElement("p",null,"Tools for the measurement were chosen as a Noise meter and Vibration meter"),l.a.createElement("p",null,"The developed sensor based on analysing and visualising sound data"),l.a.createElement("p",null,"The measured data compared with OHS standards for offices and promises")),l.a.createElement(L.a,{xs:12,sm:4,className:"sidebar-selection"},l.a.createElement(A.a,{src:"assets/noise-2.jpg",width:"280"}),l.a.createElement("p",null,"Noise and Vibration control equipment")),l.a.createElement("h2",null,"Project Recommendation"),l.a.createElement(L.a,{xs:12,sm:8,className:"main-section"},l.a.createElement("p",null,"The personal protective equipment was recommended for decrease noise impact"),l.a.createElement("p",null,"A isolation of noise and vibration materials were advised to avoid vibration impact"),l.a.createElement("p",null,"To increase the distance from source of noise and vibtation exposure were advised")),l.a.createElement(L.a,{xs:12,sm:4,className:"sidebar-selection"},l.a.createElement(A.a,{src:"assets/ppe-2.jpg",width:"280"}),l.a.createElement("p",null,"Noise and Vibration PPE equipment")))))}}]),a}(n.Component));var O=function(){return l.a.createElement("footer",{className:"navbar"},l.a.createElement("h2",null,"copywrited by Utepov Timur, 2019"))};var x=function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement("img",{src:s.a,className:"App-logo",alt:"logo"}),l.a.createElement("p",null,"Project - Utepov Timur"),l.a.createElement("a",{className:"App-link",href:"https://react-risk-analysis.stackblitz.io",alt:"pwa",target:"_blank",rel:"noopener noreferrer"},"This PWA about Risk Analysis of Noise and Vibration exposure")),l.a.createElement(V,null),l.a.createElement(C,null),l.a.createElement(f,null),l.a.createElement(R,null),l.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function S(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(l.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()}),function(){if("serviceWorker"in navigator){if(new URL("/pwa-app",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/pwa-app","/service-worker.js");M?(function(e){fetch(e).then(function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):S(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):S(e)})}}()},56:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},60:function(e,a,t){e.exports=t(163)},65:function(e,a,t){},66:function(e,a,t){}},[[60,1,2]]]);
//# sourceMappingURL=main.7c4802be.chunk.js.map