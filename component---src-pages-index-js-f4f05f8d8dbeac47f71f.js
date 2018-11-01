(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{216:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(226),o=(a(264),a(266),a(268)),s=a.n(o),c=a(269),l=a.n(c),p=a(270),A=a.n(p),u={github:l.a,pdf:s.a},g=function(e){var t=e.image,a=e.url,n=e.description,r=e.title,o=e.links;return i.a.createElement("div",{className:"card"},i.a.createElement("div",{className:"card-content"},i.a.createElement("a",{href:a,className:"title"}," ",i.a.createElement("h3",null," ",r," ")," "),i.a.createElement("div",{className:"description",dangerouslySetInnerHTML:{__html:n}}),i.a.createElement("div",{className:"links"},o.map(function(e){var t=e.icon,a=e.link,n=e.text;return i.a.createElement("a",{href:a,key:a,className:"button"},i.a.createElement("img",{className:"icon",src:u[t]}),n)}))),i.a.createElement("a",{className:"card-image",href:a},i.a.createElement("img",{src:t,className:"image"}),i.a.createElement("img",{className:"icon outlink",src:A.a})))},m=a(271),h=a.n(m),d=a(272),b=a.n(d),k=a(273),f=a.n(k),v=a(274),B=a.n(v),S=a(275),Q=a.n(S),E="35.197.46.142",w=i.a.createElement(g,{image:b.a,url:"http://"+E+":3000/",title:"Kaggle TrackML dataset visualization",description:"This app was developed to explore the Kaggle TrackML competition dataset. The data consists of multiple events, where each event consists of a set of 3D points specifying the locations of particles generated in a collision at the Large Hadron Collider at CERN. <br/><br/>\n  More information about the competition is available <a href='https://www.kaggle.com/c/trackml-particle-identification/data'>here</a>.",links:[{icon:"github",link:"https://github.com/viv-r/kaggle-trackml-event-viewer",text:"Source"}]}),C=i.a.createElement(g,{image:B.a,url:"http://"+E+":3001/",title:"LDA topic modelling on Reddit text",description:"\n    This app was developed as a part of the HCDE 556 course at the University of Washington.\n    (Team members:\n      <a href='http://pf.lukewaninger.com/'>Luke Waninger</a>, <a href='https://github.com/moefasa/'>Mohammed Helal</a> and Me.) <br /> <br />\n\n    This app is a d3.js visualization of the results of running a topic modelling algorithm on a text dataset obtained from scraping the /r/jokes subreddit. <br />",links:[{icon:"github",link:"https://github.com/viv-r/topic-modeling-reddit",text:"Source"},{icon:"pdf",link:"https://github.com/viv-r/topic-modeling-reddit/raw/master/docs/Final%20Paper.pdf",text:"Project report"}]}),K=i.a.createElement(g,{image:h.a,url:"https://github.com/viv-r/kernel-svm-implementation/blob/master/digits_dataset_demo.ipynb",title:"Kernel SVM implementation",description:"A library implementing the Kernel SVM algorithm using the huber-hinge loss function. The rbf, linear and polynomial kernels are currently implemented and multi-class classification is handled using the one-vs-one strategy.\n  ",links:[{icon:"github",link:"https://github.com/viv-r/kernel-svm-implementation",text:"Source"}]}),N=i.a.createElement(g,{image:f.a,url:"http://"+E+":8050/",title:"Asset allocation analysis",description:"\nThis app was developed as a part of the DATA 515 course at the University of Washington\n(Team members: <a href='https://github.com/whamsy'>Vamsy Alturi</a>, <a href='https://github.com/WillBishop12'>Will Bishop</a> and Me). <br /> <br />\nThis is a Dash application that allows the user to: <br />\n\n  - Compare asset portfolios composed of different stocks and bonds <br />\n    - Compare quantitative measures of risk <br />\n      - Standard deviation of return, historical probability of loss <br />\n        - View risk and return over different time horizons <br /> ",links:[{icon:"github",link:"https://github.com/viv-r/asset-allocation",text:"Source"},{icon:"pdf",link:"https://github.com/viv-r/asset-allocation/raw/master/doc/AssetAllocationDemo.pdf",text:"Project report"}]}),I=i.a.createElement(g,{image:Q.a,url:"http://"+E+":1317/",title:"Tracking the visibility of ads on a webpage",description:"This tool was developed as a POC in using the <a href='https://developer.mozilla.org/en-US/docs/Web/API/DocumentOrShadowRoot/elementFromPoint'>elementFromPoint API</a> to keep track of DOM elements on a webpage.<br /> <br /> A large number of overlapping rectangles are randomly positioned on the webpage, and the proportion of area visible in the viewport is updated as the user scrolls/drags the elements around the page.",links:[{icon:"github",link:"https://github.com/viv-r/viewability_tracking",text:"Source"}]});t.default=function(){return i.a.createElement(r.a,null,w,C,K,N,I)}},218:function(e,t,a){var n;e.exports=(n=a(222))&&n.default||n},222:function(e,t,a){"use strict";a.r(t);var n=a(1),i=a.n(n),r=a(20),o=a.n(r),s=a(62),c=a(5),l=function(e){var t=e.location,a=c.a.getResourcesForPathname(t.pathname);return i.a.createElement(s.a,{location:t,pageResources:a})};l.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=l},223:function(e,t,a){e.exports=a.p+"static/linkedin-Icon-6f9a03bd4554e5454de1c79f4c91aadf.png"},224:function(e,t,a){},226:function(e,t,a){"use strict";var n=a(1),i=a.n(n),r=a(20),o=a.n(r),s=a(227),c=a.n(s);a(217),a(218),i.a.createContext({}),o.a.object,o.a.string.isRequired,o.a.func,o.a.func,a(223);var l=function(e){return e.siteTitle,i.a.createElement("div",{style:{position:"sticky",background:"#444",marginBottom:"1.45rem"}},i.a.createElement("div",{className:"header",style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h2",{style:{margin:0}},i.a.createElement("a",{href:"https://www.github.com/viv-r/",style:{color:"white",textDecoration:"none"}},"PROJECTS")),i.a.createElement("a",{href:"https://www.linkedin.com/in/vivrdy/",className:"button linkedin"},"VIVEK PAGADALA ",i.a.createElement("br",null))))},p=(a(224),function(e){var t=e.children;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{title:"Vivek Pagadala",meta:[{name:"description",content:"Project portfolio"},{name:"keywords",content:"data science machine learning visualization"}]}),i.a.createElement(l,{siteTitle:"Project portfolio"}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t))});p.propTypes={children:o.a.node.isRequired},t.a=p},264:function(e,t,a){"use strict";a(265)("link",function(e){return function(t){return e(this,"a","href",t)}})},265:function(e,t,a){var n=a(13),i=a(14),r=a(35),o=/"/g,s=function(e,t,a,n){var i=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*i(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},266:function(e,t,a){},268:function(e,t,a){e.exports=a.p+"static/pdf-icon-552053913917544df58ce2d7c3c19780.png"},269:function(e,t,a){e.exports=a.p+"static/github-icon-9ce68bcab87f651b5a6bd16489896ef7.png"},270:function(e,t,a){e.exports=a.p+"static/outlink-icon-8ed9342e969a82c3522d11af40c7ac63.png"},271:function(e,t){e.exports="data:image/jpeg;base64,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"},272:function(e,t,a){e.exports=a.p+"static/track-ss-816114b4fa9241ab5324a8a30bb4639a.png"},273:function(e,t,a){e.exports=a.p+"static/asset-ss-f09b623710b0aa57286e25143f21c153.png"},274:function(e,t,a){e.exports=a.p+"static/reddit-ss-7316f60954bafc3c1e4849b835589112.png"},275:function(e,t,a){e.exports=a.p+"static/view-ss-f4be8c84aafa817458a5672a8496a724.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-f4f05f8d8dbeac47f71f.js.map