(this.webpackJsonpcurriculum_vitae=this.webpackJsonpcurriculum_vitae||[]).push([[0],{32:function(e,t,i){},34:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var n=i(3),r=i.n(n),a=i(19),c=i.n(a),o=(i(32),i(2)),s=i(52),l=i(56),d=i(0);function j(e){var t=e.children,i=e.color,n=void 0===i?"#3EB489":i;return Object(d.jsx)("div",{style:{display:"inline",color:n},children:t})}var m=i(26),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"up",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Object(n.useRef)(),a=function(e){switch(e){case"up":return"translate3d(0, 50%, 0)";case"down":return"translate3d(0, -3vh, 0)";case"left":return"translate3d(50%, 0, 0)";case"right":return"translate3d(-50%, 0, 0)";case"paragraph":case"caption":return"translate3d(0, -3vh, 0)";default:return}},c=Object(n.useCallback)((function(e){var n=Object(m.a)(e,1)[0],a=r.current;n.isIntersecting&&(a.style.transitionProperty="all",a.style.transitionDuration="".concat(t,"s"),a.style.transitionTimingFunction="cubic-bezier(0, 0, 0.2, 1)",a.style.transitionDelay="".concat(i,"s"),a.style.opacity=1,a.style.transform="translate3d(0, 0, 0)")}),[i,t]);return Object(n.useEffect)((function(){var e;return r.current&&(e=new IntersectionObserver(c,{threshold:.7})).observe(r.current),function(){return e&&e.disconnect()}}),[c]),{ref:r,style:{opacity:0,transform:a(e)}}};i(34);function h(){var e=Object(s.a)("(max-width:960px)"),t=e?{fontSize:"1rem"}:{fontSize:"1.2rem"},i=e?{fontSize:"0.75rem"}:{fontSize:"0.85rem"},n=e?{marginBottom:"1rem",fontSize:"2.4rem"}:{marginBottom:"1rem"},r={title:b("down"),greeting:b("paragraph"),contact:b("caption")};return Object(d.jsxs)("section",{style:{padding:"0 2rem"},children:[Object(d.jsxs)(l.a,{ref:r.title.ref,variant:"h3",style:Object(o.a)(Object(o.a)({},n),r.title.style),children:[Object(d.jsx)(j,{children:"Sum"}),"mary"]}),Object(d.jsx)(l.a,{ref:r.greeting.ref,style:Object(o.a)(Object(o.a)({},t),r.greeting.style),children:"\ubc18\uac11\uc2b5\ub2c8\ub2e4. \uc800\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uae40\uae30\ud658\uc785\ub2c8\ub2e4. \uc778\uac04\uacfc AI\uc0ac\uc774 \uc0c1\ud638\uc791\uc6a9\uc744 \uac1c\uc120\ud558\ub294 \uc77c\uc744 \ud574\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4. \n    \ud604\uc7ac\ub294 \ube14\ub799\ubc15\uc2a4 \ubaa8\ub378\uc758 \ud574\uc11d\uc744 \ub3d5\ub294 \ub370\uc774\ud130 \uc2dc\uac01\ud654 \uae30\ubc95\uc744 \uc5f0\uad6c \uc911 \uc785\ub2c8\ub2e4. \n    \uacfc\uac70\uc5d0\ub294 \uc0ac\uc6a9\uc790 \ub85c\uadf8 \ub370\uc774\ud130\uc758 \uac00\uce58\ub97c AI \uce21\uba74\uc5d0\uc11c \ud3c9\uac00\ud558\uace0, \n    \uc774\ub97c \ud1b5\ud574 \ub354 \ub098\uc740 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ubb34\uc5c7\uc778\uc9c0\ub97c \ube44\uad50\ud558\ub294 \uc5f0\uad6c\ub97c \uc218\ud589\ud588\uc2b5\ub2c8\ub2e4."}),Object(d.jsxs)("div",{ref:r.contact.ref,style:r.contact.style,id:"contact",children:[Object(d.jsx)("a",{id:"email",href:"mailto:juljin1875@gmail.com",children:Object(d.jsx)(l.a,{style:i,children:"juljin1875@gmail.com"})}),Object(d.jsx)("a",{id:"github",href:"https://github.com/simulacre7/",children:Object(d.jsx)(l.a,{style:i,children:"GitHub"})})]})]})}function O(){var e=Object(s.a)("(max-width:960px)")?{margin:".67em 0",fontSize:"3rem"}:{margin:".67em 0"},t={name:b("down")};return Object(d.jsx)("section",{ref:t.name.ref,style:Object(o.a)(Object(o.a)({},t.name.style),{},{padding:"0 2rem"}),children:Object(d.jsxs)(l.a,{variant:"h1",style:e,children:[Object(d.jsx)(j,{children:"<"}),"\uae40\uae30\ud658",Object(d.jsxs)(j,{children:[Object(d.jsx)(j,{color:"#5E5E5E",children:" /"}),">"]})]})})}i(39);function x(e){var t=e.children,i=e.key,n={item:b("down")};return Object(d.jsx)("li",Object(o.a)(Object(o.a)({},n.item),{},{children:Object(d.jsx)(l.a,{children:t})}),i)}function p(e){var t=e.details;return Object(d.jsx)("div",{className:"detail-container",children:Object(d.jsx)("ul",{children:t.map((function(e,t){return Object(d.jsx)(x,{children:e},"detail-".concat(t))}))})})}function u(e){var t=e.children,i=e.style,n={badge:b("down")};return Object(d.jsx)("div",{ref:n.badge.ref,style:Object(o.a)(Object(o.a)({},n.badge.style),{},{backgroundColor:"#e3f5ef",color:"teal",borderRadius:"0.2rem",margin:"0.1rem",paddingTop:"0.2rem",paddingBottom:"0.3rem",paddingRight:"0.66rem",paddingLeft:"0.66rem",display:"inline-flex"}),children:Object(d.jsx)(l.a,{style:i,children:t})})}function f(e){var t=e.title,i=e.time,n=e.description,r=e.did,a=e.techStack,c=e.isFirst,j=void 0!==c&&c,m=Object(s.a)("(max-width:960px)"),h=m?{paddingTop:"0.2rem",paddingBottom:"0.2rem"}:{paddingBottom:"1.5rem"},O=m?{marginBottom:"0.5rem",fontSize:"1.25rem"}:{marginBottom:"0.5rem",fontSize:"2.0rem"},x=m?{fontSize:"0.75rem"}:{fontSize:"0.9rem"},f={title:b("down"),time:b("caption"),description:b("down")};return Object(d.jsxs)("div",{style:j?h:{padding:"1.5rem 0"},children:[Object(d.jsx)(l.a,{ref:f.title.ref,variant:"h4",style:Object(o.a)(Object(o.a)({},O),f.title.style),children:t}),Object(d.jsx)(l.a,{ref:f.time.ref,style:Object(o.a)(Object(o.a)({},f.time.style),{},{marginBottom:"1rem"}),children:i}),Object(d.jsx)(l.a,{ref:f.description.ref,style:Object(o.a)(Object(o.a)({},f.description.style),{},{marginBottom:"1rem"}),children:n}),Object(d.jsx)(p,{details:r}),a.map((function(e,t){return Object(d.jsx)(u,{style:x,children:e},"tech-".concat(t))}))]})}function g(e){var t=e.children,i=Object(s.a)("(max-width:960px)")?{display:"flex",padding:"1rem 0",webkitBoxOrient:"vertical",webkitBoxDirection:"normal",msFlexDirection:"column",flexDirection:"column"}:{display:"flex",padding:"1rem 0"};return Object(d.jsx)("div",{style:i,children:t})}function y(e){var t=e.companyName,i=e.position,n=e.time,r=e.position2,a=e.time2,c=Object(s.a)("(max-width:960px)"),j=c?{marginBottom:"0.5rem",fontSize:"1.7rem"}:{marginBottom:"0.5rem"},m=c?{flexBasis:"100%",paddingRight:"0",flexShrink:"0",msFlexPreferredSize:"100%",paddingBottom:"1rem"}:{flexBasis:"18rem",paddingRight:"1rem",flexShrink:"0"},h={company:b("down"),position:b("caption"),position2:b("caption"),time:b("caption"),time2:b("caption")};return Object(d.jsxs)("div",{style:m,children:[Object(d.jsx)(l.a,{ref:h.company.ref,variant:"h4",style:Object(o.a)(Object(o.a)({},h.company.style),j),children:t}),Object(d.jsx)(l.a,{ref:h.position.ref,style:Object(o.a)(Object(o.a)({},h.position.style),{},{display:"block"}),children:i}),Object(d.jsx)(l.a,Object(o.a)(Object(o.a)({},h.time),{},{children:n})),Object(d.jsx)(l.a,{ref:h.position2.ref,style:Object(o.a)(Object(o.a)({},h.position2.style),{},{display:"block"}),children:r}),Object(d.jsx)(l.a,Object(o.a)(Object(o.a)({},h.time2),{},{children:a}))]})}var v={flexGrow:1};function S(e){var t=e.children;return Object(d.jsx)("div",{style:v,children:t})}function w(){var e=Object(s.a)("(max-width:960px)"),t=e?{marginBottom:"1rem",fontSize:"2.4rem"}:{marginBottom:"1rem"},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("down")};return Object(d.jsxs)("section",{style:i,children:[Object(d.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(o.a)(Object(o.a)({},t),n.title.style),children:[Object(d.jsx)(j,{children:"Exp"}),"erience"]}),Object(d.jsxs)(g,{children:[Object(d.jsx)(y,{companyName:"\ud2f0\ub9e5\uc2a4\uc18c\ud504\ud2b8",position:"Researcher",time:"2020.02\u2013\ud604\uc7ac"}),Object(d.jsxs)(S,{children:[Object(d.jsx)(f,{isFirst:!0,title:"\ub808\uac70\uc2dc \uc2dc\uc2a4\ud15c \ub9ac\uc561\ud2b8 \ud3ec\ud305",time:"2021.01\u2013\ud604\uc7ac",description:Object(d.jsxs)(d.Fragment,{children:["jQuery \uae30\ubc18 \uc0ac\ub0b4 \ud504\ub860\ud2b8\uc5d4\ub4dc \ub77c\uc774\ube0c\ub7ec\ub9ac \u2014 TOP",Object(d.jsx)("i",{children:"(Tmax One Platform)"}),"\ub85c \uad6c\ud604\ub41c \uc81c\ud488\ub4e4\uc744 \ub9ac\uc561\ud2b8\ub85c \uc804\ud658\ud568"]}),did:["\ubaa8\ub4c8\ud654\uac00 \ubbf8\ud761\ud55c \uae30\uc874 \ucf54\ub4dc\ub97c \uc6a9\ub3c4\uc5d0 \ub9de\uac8c \ubd84\ud560\ud558\uace0 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac1c\uc120","\uac01\uc885 \ucef4\ud3ec\ub10c\ud2b8 \uc2e0\uaddc \uac1c\ubc1c"],techStack:["Typescript","React","Sass","Material-UI"]}),Object(d.jsx)(f,{title:"AutoML \ud50c\ub7ab\ud3fc",time:"2020.02\u2013\ud604\uc7ac",description:"\uc18c\ubaa8\uc801\uc774\uace0 \ubc18\ubcf5\uc801\uc778 \uae30\uacc4\ud559\uc2b5 \ubaa8\ub378 \uac1c\ubc1c \uc791\uc5c5\uc744 \uc790\ub3d9\ud654\ud574\uc8fc\ub294 \ud50c\ub7ab\ud3fc\uc744 \uac1c\ubc1c \ud588\uc2b5\ub2c8\ub2e4.",did:["\ube44\uc804\ubb38\uac00\ub97c \uc704\ud55c Codeless \ud658\uacbd\uc758 \uac1c\ubc1c \uc2a4\ud29c\ub514\uc624 \uad6c\ud604",Object(d.jsxs)(d.Fragment,{children:["\uc124\uba85 \uac00\ub2a5\ud55c AI \u2014 XAI",Object(d.jsx)("i",{children:"(eXplainable Artificial Intelligence)"})," \uae30\uc220 \uc5f0\uad6c \ubc0f \uac1c\ubc1c"]}),"\ucef4\ud4e8\ud305 \ub9ac\uc18c\uc2a4 \uad00\ub9ac \ub3c4\uad6c \uac1c\ubc1c"],techStack:["Typescript","React","Sass","Material-UI","Python"]})]})]})]})}function k(){var e=Object(s.a)("(max-width:960px)"),t=e?{marginBottom:"1rem",fontSize:"2.4rem"}:{marginBottom:"1rem"},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("down")};return Object(d.jsxs)("section",{style:i,children:[Object(d.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(o.a)(Object(o.a)({},t),n.title.style),children:[Object(d.jsx)(j,{children:"Edu"}),"cation"]}),Object(d.jsxs)(g,{children:[Object(d.jsx)(y,{companyName:"\uc6b8\uc0b0\uacfc\ud559\uae30\uc220\uc6d0 (UNIST)",position:"\ucef4\ud4e8\ud130\uacf5\ud559 \uc11d\uc0ac",time:"2018.03\u20132020.02",position2:e?"\uae30\uc220\uacbd\uc601\ud559 \ud559\uc0ac":"\uae30\uc220\uacbd\uc601\ud559 \ud559\uc0ac (\ucef4\ud4e8\ud130\uacf5\ud559 \uc735\ud569\uc804\uacf5)",time2:"2013.03\u20132018.02"}),Object(d.jsxs)(S,{children:[Object(d.jsx)(f,{isFirst:!0,title:"AI \uc911\uc2ec UI/UX \uc124\uacc4",time:"2019.01\u20132020.02",description:Object(d.jsx)(d.Fragment,{children:'"\uc5b4\ub5bb\uac8c UI\ub97c \uad6c\uc131\ud574\uc57c \uc0ac\uc6a9\uc790\uc758 \ucde8\ud5a5\uc774 \ub2f4\uae34 \ub370\uc774\ud130\ub97c \ub354 \uc798 \uc218\uc9d1\ud560 \uc218 \uc788\uc744\uae4c?"\ub77c\ub294 \uc9c8\ubb38\uc5d0 \ub2f5\ud558\ub294 \uc5f0\uad6c\ub97c \uc218\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4.'}),did:["\uc2e4\ud5d8 \ud658\uacbd\uc73c\ub85c \uc0ac\uc6a9\ub41c \uc6f9 \uae30\ubc18 \uc601\ud654 \ucd94\ucc9c \uc2dc\uc2a4\ud15c \uad6c\ud604","\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc758 \uac00\uce58\ub97c AI \uce21\uba74\uc5d0\uc11c \ud3c9\uac00\ud558\ub294 metric \uc81c\uc548","\ucd94\ucc9c\uc2dc\uc2a4\ud15c\uc758 Explore-Exploit \ubb38\uc81c\uc5d0\uc11c \ud22c\uba85\uc131\uc774 \ub370\uc774\ud130\uc758 \ud488\uc9c8\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \uce21\uc815"],techStack:["Python","Flask","jQuery","Surprise"]}),Object(d.jsx)(f,{title:"\uc0ac\uc6a9\uc790 \ud589\ub3d9 \ubaa8\ub378\ub9c1",time:"2019.02\u2013\ud604\uc7ac",description:"\uc124\uba852",did:["Association Rule","Inverse Reinforcement Learning"],techStack:["Python","TensorFlow","Keras","scikit-learn"]})]})]})]})}function B(e){var t=e.url,i=e.title,n=e.author,r=e.journal,a=e.details,c=Object(s.a)("(max-width:960px)"),j=c?{margin:"0 0 0.5rem",fontSize:"1.25rem"}:{margin:"0 0 0.5rem"},m=c?{fontSize:"0.80rem"}:{fontSize:"1rem"},h=c?{padding:"0.2rem 0"}:{padding:"1rem 0"},O={title:b("down"),author:b("caption"),journal:b("caption")};return Object(d.jsxs)("div",{style:h,children:[Object(d.jsx)(l.a,{ref:O.title.ref,variant:"h5",style:Object(o.a)(Object(o.a)({},j),O.title.style),children:Object(d.jsx)("a",{target:"_blank",href:t,rel:"noopener noreferrer",children:i})}),Object(d.jsx)(l.a,{ref:O.author.ref,style:Object(o.a)(Object(o.a)(Object(o.a)({},O.author.style),m),{},{display:"block"}),children:n}),Object(d.jsx)(l.a,{ref:O.journal.ref,style:Object(o.a)(Object(o.a)({},m),O.journal.style),children:r}),Object(d.jsx)(p,{details:a})]})}function A(){var e=Object(s.a)("(max-width:960px)"),t=e?{fontSize:"2.4rem",marginBottom:"1rem"}:{marginBottom:"1rem"},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("down")};return Object(d.jsxs)("section",{style:i,children:[Object(d.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(o.a)(Object(o.a)({},t),n.title.style),children:[Object(d.jsx)(j,{children:"Pub"}),"lications"]}),Object(d.jsx)(B,{title:"An Empirical analysis on Transparent Algorithmic Exploration in Recommender Systems",url:"https://arxiv.org/abs/2108.00151",author:Object(d.jsx)("b",{children:"Kihwan Kim"}),journal:"A Computing Research Repository (CoRR), 2108.00151, 2021",details:["\ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\uc790 \ucde8\ud5a5\uc744 \ud30c\uc545\ud558\uae30 \uc704\ud55c \ub79c\ub364 \uc544\uc774\ud15c\ub4e4\uc744 \uc5b4\ub5bb\uac8c \uc804\ub2ec\ud574\uc57c \ud560\uae4c?","\uc2e4\ud5d8 \ud658\uacbd\uc73c\ub85c \uc0ac\uc6a9\ub41c \uc6f9 \uae30\ubc18 \uc601\ud654 \ucd94\ucc9c \uc2dc\uc2a4\ud15c \uad6c\ud604","\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc758 \uac00\uce58\ub97c AI \uce21\uba74\uc5d0\uc11c \ud3c9\uac00\ud558\ub294 metric \uc81c\uc548","\ucd94\ucc9c\uc2dc\uc2a4\ud15c\uc758 Explore-Exploit \ubb38\uc81c\uc5d0\uc11c \ud22c\uba85\uc131\uc774 \ub370\uc774\ud130\uc758 \ud488\uc9c8\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \uce21\uc815"]}),Object(d.jsx)(B,{title:"ST-GRAT: A Novel Spatio-temporal Graph Attention Networks for Accurately Forecasting Dynamically Changing Road Speed",url:"https://dl.acm.org/doi/10.1145/3340531.3411940",author:Object(d.jsxs)(d.Fragment,{children:["Cheonbok Park, Chunggi Lee, Hyojin Bahng, Yunwon Tae,",Object(d.jsx)("b",{children:" Kihwan Kim"}),", Seungmin Jin, Sungahn Ko, Jaegul Choo"]}),journal:"ACM International Conference on Information and Knowledge Management (CIKM), 2020",details:["\ub3c4\ub85c \ubc0f \ud1b5\ud589 \ub370\uc774\ud130 \uc804\ucc98\ub9ac","Attention\uc774 \ud6a8\uacfc\uc801\uc73c\ub85c \ub3d9\uc791\ud55c \uacbd\uc6b0\ub4e4\uc744 \ud328\ud134 \ubcc4\ub85c \ubb36\uc5b4 \uce74\ud14c\uace0\ub9ac\ud654"]}),Object(d.jsx)(B,{title:"Modeling Exploration/Exploitation Decisions through Mobile Sensing for Understanding Mechanisms of Addiction",url:"https://dl.acm.org/citation.cfm?doid=3307334.3328599",author:Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("b",{children:"Kihwan Kim"}),", Sanghoon Kim, Chunggi Lee, Sungahn Ko"]}),journal:"ACM International Conference on Mobile Systems, Applications, and Services (MobiSys), 2019",details:["\uc131\uc2e4\ud558\uac8c \ub178\ub3d9\ud588\uc74c\uc744 \ud638\uc18c\ud558\ub294 \ubb38\uad6c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.","\ubb34\uc5b8\uac00\ub97c \ubc30\uc6e0\uc74c\ub3c4 \ud638\uc18c\ud569\ub2c8\ub2e4.","\uc5b4\uca4c\uad6c \uc800\uca4c\uad6c \uba38\uc2dc\uae30\uac00 \ub450\uc2dc\uae30"]}),Object(d.jsx)(B,{title:"\uc2dc\uac01\ud654 \uae30\ubc18 \ub525\ub7ec\ub2dd \ubd84\uc11d \uae30\uc220",url:"http://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07266060&language=ko_KR",author:Object(d.jsxs)(d.Fragment,{children:["\uc774\uc7ac\uc131, ",Object(d.jsx)("b",{children:"\uae40\uae30\ud658"}),", \uc774\ucda9\uae30, \uace0\uc131\uc548"]}),journal:"\uc18c\uc74c\uc9c4\ub3d9 \uc81c27\uad8c \uc81c6\ud638 2017.11",details:["\uc131\uc2e4\ud558\uac8c \ub178\ub3d9\ud588\uc74c\uc744 \ud638\uc18c\ud558\ub294 \ubb38\uad6c\uac00 \ud544\uc694\ud569\ub2c8\ub2e4.","\ubb34\uc5b8\uac00\ub97c \ubc30\uc6e0\uc74c\ub3c4 \ud638\uc18c\ud569\ub2c8\ub2e4.","\uc5b4\uca4c\uad6c \uc800\uca4c\uad6c \uba38\uc2dc\uae30\uac00 \ub450\uc2dc\uae30"]})]})}function I(e){var t=e.title,i=e.details,n=Object(s.a)("(max-width:960px)")?{margin:"0 0 0.5rem",fontSize:"1.25rem"}:{margin:"0 0 0.5rem",fontSize:"2rem"},r={title:b("down")};return Object(d.jsxs)("div",{style:{paddingTop:"1rem"},children:[Object(d.jsx)(l.a,{ref:r.title.ref,variant:"h5",style:Object(o.a)(Object(o.a)({},n),r.title.style),children:t}),Object(d.jsx)(p,{details:i})]})}function T(){var e=Object(s.a)("(max-width:960px)"),t=e?{fontSize:"2.4rem"}:{},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("down")};return Object(d.jsxs)("section",{style:i,children:[Object(d.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(o.a)(Object(o.a)({},t),n.title.style),children:[Object(d.jsx)(j,{children:"Ski"}),"lls"]}),Object(d.jsx)(I,{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc",details:["Visual analytics \ub3c4\uad6c \uac1c\ubc1c; Shneiderman's mantra (overview first, zoom and filter, details on demand)\uc5d0 \uae30\ubc18\ud55c \uc124\uacc4","XAI (Ex: Shap, PDP, Local Surrogate Model...)","UI\ub97c \uc0ac\uc6a9\uc790 \uce21\uba74\uc5d0\uc11c \ubc14\ub77c\ubcfc \ubfd0\ub9cc \uc544\ub2c8\ub77c, AI \uce21\uba74\uc5d0\uc11c\uc758 implicit feedback \uc218\uc9d1\uc6a9\uc73c\ub85c\ub3c4 \ubc14\ub77c\ubcfc \uc904 \uc548\ub2e4.","ES6 \uc774\uc0c1 \ubb38\ubc95\uc744 \uc801\uadf9 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.","\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud574 \uac1c\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","Vanilla JS \ub97c \uc774\uc6a9\ud574 DOM \uc744 \uc870\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","React hooks\ub97c \ub2a5\uc219\ud558\uac8c \uc0ac\uc6a9\ud558\uace0, \uac70\uc758 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud568\uc218\ub85c \ub9cc\ub4ed\ub2c8\ub2e4. hook\uc744 \uc774\uc6a9\ud574 \uacf5\ud1b5 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc801\uc808\ud788 \ubaa8\ub4c8\ud654\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ucef4\ud3ec\ub10c\ud2b8 \ub77c\uc774\ud504 \uc0ac\uc774\ud074\uc744 \uc54c\uace0 \uc788\uc73c\uba70 \uad00\ub828 \uba54\uc18c\ub4dc\ub97c \uc0c1\ud669\uc5d0 \ub530\ub77c \uc801\uc808\ud788 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.","Context API, Recoil\uc744 \uc0ac\uc6a9\ud574 \uc0c1\ud0dc \uad00\ub9ac \ubc0f \ub370\uc774\ud130 \ubaa8\ub378\ub9c1\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(d.jsx)(I,{title:"\ubc31\uc5d4\ub4dc",details:["Flask\ub97c \ud65c\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c \uc6f9 \uc11c\ubc84\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","MongoDB, SQLite3, Tibero \ub4f1 \uad00\uacc4\ud615 \ubc0f \ube44\uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ub2e4\ub8f0 \uc904 \uc555\ub2c8\ub2e4."]}),Object(d.jsx)(I,{title:"\uae30\uacc4\ud559\uc2b5",details:["TensorFlow, Keras \ub4f1\uc744 \ud65c\uc6a9\ud55c \ub525\ub7ec\ub2dd \uad6c\ud604 \uac00\ub2a5","XGBoost, AutoScikit \ub4f1\uc744 \ud65c\uc6a9\ud55c \uc815\ud615\ub370\uc774\ud130 \uae30\ubc18 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378 \uad6c\ud604 \uac00\ub2a5"]})]})}var z=function(){return Object(d.jsxs)("div",{style:{width:"100%",maxWidth:"50rem",margin:"auto"},children:[Object(d.jsx)(O,{}),Object(d.jsx)(h,{}),Object(d.jsx)(w,{}),Object(d.jsx)(k,{}),Object(d.jsx)(A,{}),Object(d.jsx)(T,{})]})},R=i(25),E=i(55),F=Object(R.a)({typography:{fontFamily:["Spoqa Han Sans","Sans-serif"].join(","),h1:{fontWeight:"bold"},h2:{fontWeight:"bold"},h3:{fontWeight:"bold"},h4:{fontWeight:"bold"},h5:{fontWeight:"bold"},h6:{fontWeight:"bold"}}});c.a.render(Object(d.jsx)(E.a,{theme:F,children:Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(z,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.711efd53.chunk.js.map