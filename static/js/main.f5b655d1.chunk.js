(this.webpackJsonpcurriculum_vitae=this.webpackJsonpcurriculum_vitae||[]).push([[0],{32:function(e,t,i){},34:function(e,t,i){},39:function(e,t,i){},40:function(e,t,i){"use strict";i.r(t);var n=i(3),r=i.n(n),a=i(19),c=i.n(a),s=(i(32),i(2)),o=i(52),l=i(56),j=i(0);function d(e){var t=e.children,i=e.color,n=void 0===i?"#3EB489":i;return Object(j.jsx)("div",{style:{display:"inline",color:n},children:t})}var m=i(26),b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"up",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=Object(n.useRef)(),a=function(e){switch(e){case"up":return"translate3d(0, 1vh, 0)";case"down":return"translate3d(0, -3vh, 0)";case"left":return"translate3d(50%, 0, 0)";case"right":return"translate3d(-50%, 0, 0)";default:return}},c=Object(n.useCallback)((function(e){var t=Object(m.a)(e,1)[0],i=r.current;t.isIntersecting&&(i.style.opacity=1,i.style.transform="translate3d(0, 0, 0)")}),[]);return Object(n.useEffect)((function(){var e;return r.current&&(e=new IntersectionObserver(c,{threshold:.7})).observe(r.current),function(){return e&&e.disconnect()}}),[c]),{ref:r,style:{opacity:0,transform:a(e),transitionProperty:"opacity, transform",transitionDuration:"".concat(t,"s"),transitionTimingFunction:"cubic-bezier(0.22, 1, 0.36, 1)",transitionDelay:"".concat(i,"s")}}};i(34);function h(){var e=Object(o.a)("(max-width:960px)"),t=e?{fontSize:"1rem"}:{fontSize:"1.2rem"},i=e?{fontSize:"0.75rem"}:{fontSize:"0.85rem"},n=e?{marginBottom:"1rem",fontSize:"2.4rem"}:{marginBottom:"1rem"},r={title:b("up"),greeting:b("up"),contact:b("up")};return Object(j.jsxs)("section",{style:{padding:"0 2rem"},children:[Object(j.jsxs)(l.a,{ref:r.title.ref,variant:"h3",style:Object(s.a)(Object(s.a)({},n),r.title.style),children:[Object(j.jsx)(d,{children:"Sum"}),"mary"]}),Object(j.jsx)(l.a,{ref:r.greeting.ref,style:Object(s.a)(Object(s.a)({},t),r.greeting.style),children:"\ubc18\uac11\uc2b5\ub2c8\ub2e4. \uc800\ub294 \ud504\ub860\ud2b8\uc5d4\ub4dc \uac1c\ubc1c\uc790 \uae40\uae30\ud658\uc785\ub2c8\ub2e4. \uc778\uac04\uacfc AI \uc0ac\uc774 \uc0c1\ud638\uc791\uc6a9\uc744 \uac1c\uc120\ud558\ub294 \uc77c\uc744 \ud574\uc624\uace0 \uc788\uc2b5\ub2c8\ub2e4. \n    \ud604\uc7ac\ub294 \ube14\ub799\ubc15\uc2a4 \ubaa8\ub378\uc758 \ud574\uc11d\uc744 \ub3d5\ub294 \ub370\uc774\ud130 \uc2dc\uac01\ud654 \uae30\ubc95\uc744 \uc5f0\uad6c \uc911 \uc785\ub2c8\ub2e4. \n    \uacfc\uac70\uc5d0\ub294 \uc0ac\uc6a9\uc790 \ub85c\uadf8 \ub370\uc774\ud130\uc758 \uac00\uce58\ub97c AI \uce21\uba74\uc5d0\uc11c \ud3c9\uac00\ud558\uace0, \n    \uc774\ub97c \ud1b5\ud574 \ub354 \ub098\uc740 \uc778\ud130\ud398\uc774\uc2a4\uac00 \ubb34\uc5c7\uc778\uc9c0\ub97c \ube44\uad50\ud558\ub294 \uc5f0\uad6c\ub97c \uc218\ud589\ud588\uc2b5\ub2c8\ub2e4."}),Object(j.jsxs)("div",{ref:r.contact.ref,style:r.contact.style,id:"contact",children:[Object(j.jsx)("a",{id:"email",href:"mailto:juljin1875@gmail.com",children:Object(j.jsx)(l.a,{style:i,children:"juljin1875@gmail.com"})}),Object(j.jsx)("a",{id:"blog",href:"https://kihwan.vercel.app/",children:Object(j.jsx)(l.a,{style:i,children:"Blog"})}),Object(j.jsx)("a",{id:"github",href:"https://github.com/simulacre7/",children:Object(j.jsx)(l.a,{style:i,children:"GitHub"})})]})]})}function O(){var e=Object(o.a)("(max-width:960px)")?{margin:".67em 0",fontSize:"3rem"}:{margin:".67em 0"},t={name:b("up")};return Object(j.jsx)("section",{ref:t.name.ref,style:Object(s.a)(Object(s.a)({},t.name.style),{},{padding:"0 2rem"}),children:Object(j.jsxs)(l.a,{variant:"h1",style:e,children:[Object(j.jsx)(d,{children:"<"}),"\uae40\uae30\ud658",Object(j.jsxs)(d,{children:[Object(j.jsx)(d,{color:"#5E5E5E",children:" /"}),">"]})]})})}i(39);function u(e){var t=e.children,i=e.key,n={item:b("up")};return Object(j.jsx)("li",Object(s.a)(Object(s.a)({},n.item),{},{children:Object(j.jsx)(l.a,{children:t})}),i)}function p(e){var t=e.details;return Object(j.jsx)("div",{className:"detail-container",children:Object(j.jsx)("ul",{children:t.map((function(e,t){return Object(j.jsx)(u,{children:e},"detail-".concat(t))}))})})}function x(e){var t=e.children,i=e.style,n={badge:b("up")};return Object(j.jsx)("div",{ref:n.badge.ref,style:Object(s.a)(Object(s.a)({},n.badge.style),{},{backgroundColor:"#e3f5ef",color:"teal",borderRadius:"0.2rem",margin:"0.1rem",paddingTop:"0.2rem",paddingBottom:"0.3rem",paddingRight:"0.66rem",paddingLeft:"0.66rem",display:"inline-flex"}),children:Object(j.jsx)(l.a,{style:i,children:t})})}function g(e){var t=e.title,i=e.time,n=e.description,r=e.did,a=e.techStack,c=e.isFirst,d=void 0!==c&&c,m=Object(o.a)("(max-width:960px)"),h=m?{paddingTop:"0.2rem",paddingBottom:"0.2rem"}:{paddingBottom:"1.5rem"},O=m?{marginBottom:"0.5rem",fontSize:"1.25rem"}:{marginBottom:"0.5rem",fontSize:"2.0rem"},u=m?{fontSize:"0.75rem"}:{fontSize:"0.9rem"},g={title:b("up"),time:b("up"),description:b("up")};return Object(j.jsxs)("div",{style:d?h:{padding:"1.5rem 0"},children:[Object(j.jsx)(l.a,{ref:g.title.ref,variant:"h4",style:Object(s.a)(Object(s.a)({},O),g.title.style),children:t}),Object(j.jsx)(l.a,{ref:g.time.ref,style:Object(s.a)(Object(s.a)({},g.time.style),{},{marginBottom:"1rem"}),children:i}),Object(j.jsx)(l.a,{ref:g.description.ref,style:Object(s.a)(Object(s.a)({},g.description.style),{},{marginBottom:"1rem"}),children:n}),r&&Object(j.jsx)(p,{details:r}),a&&a.map((function(e,t){return Object(j.jsx)(x,{style:u,children:e},"tech-".concat(t))}))]})}function f(e){var t=e.children,i=Object(o.a)("(max-width:960px)")?{display:"flex",padding:"1rem 0",webkitBoxOrient:"vertical",webkitBoxDirection:"normal",msFlexDirection:"column",flexDirection:"column"}:{display:"flex",padding:"1rem 0"};return Object(j.jsx)("div",{style:i,children:t})}function y(e){var t=e.companyName,i=e.position,n=e.time,r=e.position2,a=e.time2,c=Object(o.a)("(max-width:960px)"),d=c?{marginBottom:"0.5rem",fontSize:"1.7rem"}:{marginBottom:"0.5rem"},m=c?{flexBasis:"100%",paddingRight:"0",flexShrink:"0",msFlexPreferredSize:"100%",paddingBottom:"1rem"}:{flexBasis:"18rem",paddingRight:"1rem",flexShrink:"0"},h={company:b("up"),position:b("up"),position2:b("up"),time:b("up"),time2:b("up")};return Object(j.jsxs)("div",{style:m,children:[Object(j.jsx)(l.a,{ref:h.company.ref,variant:"h4",style:Object(s.a)(Object(s.a)({},h.company.style),d),children:t}),Object(j.jsx)(l.a,{ref:h.position.ref,style:Object(s.a)(Object(s.a)({},h.position.style),{},{display:"block"}),children:i}),Object(j.jsx)(l.a,Object(s.a)(Object(s.a)({},h.time),{},{children:n})),Object(j.jsx)(l.a,{ref:h.position2.ref,style:Object(s.a)(Object(s.a)({},h.position2.style),{},{display:"block"}),children:r}),Object(j.jsx)(l.a,Object(s.a)(Object(s.a)({},h.time2),{},{children:a}))]})}var v={flexGrow:1};function S(e){var t=e.children;return Object(j.jsx)("div",{style:v,children:t})}function w(){var e=Object(o.a)("(max-width:960px)"),t=e?{marginBottom:"1rem",fontSize:"2.4rem"}:{marginBottom:"1rem"},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("up")};return Object(j.jsxs)("section",{style:i,children:[Object(j.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(s.a)(Object(s.a)({},t),n.title.style),children:[Object(j.jsx)(d,{children:"Exp"}),"erience"]}),Object(j.jsxs)(f,{children:[Object(j.jsx)(y,{companyName:"\ub9ac\ub514\uc8fc\uc2dd\ud68c\uc0ac",position:"Frontend Engineer",time:"2022.05\u2013\ud604\uc7ac"}),Object(j.jsx)(S,{children:Object(j.jsx)(g,{isFirst:!0,title:"\uc628\ubcf4\ub529 \ud504\ub85c\uc138\uc2a4",time:"2022.05\u2013\ud604\uc7ac",description:Object(j.jsx)(j.Fragment,{children:"\uacbd\ub825\uc9c1 \uc2e0\uaddc \uc785\uc0ac\uc790\ub85c\uc11c \uc870\uc9c1\uc5d0 \uc801\uc751 \uc911"})})})]}),Object(j.jsxs)(f,{children:[Object(j.jsx)(y,{companyName:"\ud2f0\ub9e5\uc2a4\ub370\uc774\ud130",position:"Researcher",time:"2020.02\u20132022.04"}),Object(j.jsxs)(S,{children:[Object(j.jsx)(g,{isFirst:!0,title:"\ub808\uac70\uc2dc \uc2dc\uc2a4\ud15c \ub9ac\uc561\ud2b8 \ud3ec\ud305",time:"2021.01\u20132022.04",description:Object(j.jsxs)(j.Fragment,{children:["jQuery \uae30\ubc18 \uc0ac\ub0b4 \ud504\ub860\ud2b8\uc5d4\ub4dc \ub77c\uc774\ube0c\ub7ec\ub9ac \u2014 TOP",Object(j.jsx)("i",{children:"(Tmax One Platform)"}),"\ub85c \uad6c\ud604\ub41c \uc81c\ud488\ub4e4\uc744 \ub9ac\uc561\ud2b8\ub85c \uc804\ud658\ud568"]}),did:["\ubaa8\ub4c8\ud654\uac00 \ubbf8\ud761\ud55c \uae30\uc874 \ucf54\ub4dc\ub97c \uc6a9\ub3c4\uc5d0 \ub9de\uac8c \ubd84\ud560\ud558\uace0 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uac1c\uc120","\uac01\uc885 \ucef4\ud3ec\ub10c\ud2b8 \uc2e0\uaddc \uac1c\ubc1c"],techStack:["Typescript","React","Sass","Material-UI","jQuery"]}),Object(j.jsx)(g,{title:"AutoML \ud50c\ub7ab\ud3fc",time:"2020.02\u20132022.04",description:"\uc18c\ubaa8\uc801\uc774\uace0 \ubc18\ubcf5\uc801\uc778 \uae30\uacc4\ud559\uc2b5 \ubaa8\ub378 \uac1c\ubc1c \uc791\uc5c5\uc744 \uc790\ub3d9\ud654\ud574\uc8fc\ub294 \ud50c\ub7ab\ud3fc\uc744 \uac1c\ubc1c \ud588\uc2b5\ub2c8\ub2e4.",did:["\ube44\uc804\ubb38\uac00\ub97c \uc704\ud55c Codeless \ud658\uacbd\uc758 \uac1c\ubc1c \uc2a4\ud29c\ub514\uc624 \uad6c\ud604",Object(j.jsxs)(j.Fragment,{children:["\uc124\uba85 \uac00\ub2a5\ud55c AI \u2014 XAI",Object(j.jsx)("i",{children:"(eXplainable Artificial Intelligence)"})," \uae30\uc220 \uc5f0\uad6c \ubc0f \uac1c\ubc1c"]}),"AutoML \uc5d4\uc9c4\uc774 \ubaa8\ub378 \uac1c\ubc1c\uc790\uc640 \ud6a8\uacfc\uc801\uc73c\ub85c interaction \uc744 \ud560 \uc218 \uc788\ub294 \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc5f0\uad6c",Object(j.jsx)(j.Fragment,{children:"\uae30\uacc4\ud559\uc2b5 \ubaa8\ub378\uc758 \uac1c\ubc1c, \uad00\ub9ac \ubc0f \uc6b4\uc601\uc744 \uc704\ud55c \ub300\uc2dc\ubcf4\ub4dc \uac1c\ubc1c"})],techStack:["Typescript","React","Sass","Material-UI","Python"]})]})]})]})}function k(){var e=Object(o.a)("(max-width:960px)"),t=e?{marginBottom:"1rem",fontSize:"2.4rem"}:{marginBottom:"1rem"},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("up")};return Object(j.jsxs)("section",{style:i,children:[Object(j.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(s.a)(Object(s.a)({},t),n.title.style),children:[Object(j.jsx)(d,{children:"Edu"}),"cation"]}),Object(j.jsxs)(f,{children:[Object(j.jsx)(y,{companyName:"\uc6b8\uc0b0\uacfc\ud559\uae30\uc220\uc6d0 (UNIST)",position:"\ucef4\ud4e8\ud130\uacf5\ud559 \uc11d\uc0ac",time:"2018.03\u20132020.02",position2:e?"\uae30\uc220\uacbd\uc601\ud559 \ud559\uc0ac":"\uae30\uc220\uacbd\uc601\ud559 \ud559\uc0ac (\ucef4\ud4e8\ud130\uacf5\ud559 \uc735\ud569\uc804\uacf5)",time2:"2013.03\u20132018.02"}),Object(j.jsxs)(S,{children:[Object(j.jsx)(g,{isFirst:!0,title:"AI \uc911\uc2ec UI/UX \uc124\uacc4",time:"2019.01\u20132020.02",description:Object(j.jsx)(j.Fragment,{children:'"\uc5b4\ub5bb\uac8c UI\ub97c \uad6c\uc131\ud574\uc57c \uc0ac\uc6a9\uc790\uc758 \ucde8\ud5a5\uc774 \ub2f4\uae34 \ub370\uc774\ud130\ub97c \ub354 \uc798 \uc218\uc9d1\ud560 \uc218 \uc788\uc744\uae4c?"\ub77c\ub294 \uc9c8\ubb38\uc5d0 \ub2f5\ud558\ub294 \uc5f0\uad6c\ub97c \uc218\ud589\ud558\uc600\uc2b5\ub2c8\ub2e4.'}),did:["\ucd94\ucc9c\uc2dc\uc2a4\ud15c\uc758 Explore-Exploit \ubb38\uc81c\uc5d0\uc11c \ud22c\uba85\uc131\uc774 \ub370\uc774\ud130\uc758 \ud488\uc9c8\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \uce21\uc815","\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc758 \uac00\uce58\ub97c AI \uce21\uba74\uc5d0\uc11c \ud3c9\uac00\ud558\ub294 metric \uc81c\uc548","\uc2e4\ud5d8 \ud658\uacbd\uc6a9 \uc6f9 \uae30\ubc18 \uc601\ud654 \ucd94\ucc9c \uc2dc\uc2a4\ud15c \uad6c\ud604"],techStack:["Python","Flask","jQuery","Surprise"]}),Object(j.jsx)(g,{title:"\uc6f9 \uc0ac\uc6a9\uc790 \ud589\ub3d9 \ubaa8\ub378\ub9c1",time:"2019.02\u2013\ud604\uc7ac",description:Object(j.jsx)(j.Fragment,{children:"\uc6f9 \ud658\uacbd\uc5d0\uc11c \uc0ac\uc6a9\uc790\ub4e4\uc758 \ud589\ub3d9 \ud328\ud134\ub4e4\uc744 \ud30c\uc545\ud558\uace0, \uc774\ub97c \ubaa8\ub378\ub9c1\ud558\ub294 \uc5f0\uad6c\ub97c \ud588\uc2b5\ub2c8\ub2e4."}),did:[Object(j.jsxs)(j.Fragment,{children:["\uc5ed\uac15\ud654\ud559\uc2b5 \u2014 ",Object(j.jsx)("i",{children:"(Inverse Reinforcement Learning)"})," ","\ubc29\ubc95\ub860\uc744 \ud1b5\ud574, \uc0ac\uc6a9\uc790\ub4e4\uc758 \ud589\ub3d9 \uc774\ub825\uc73c\ub85c \uc0ac\uc6a9\uc790\uc758 \ubcf4\uc0c1 \ud568\uc218\ub97c \ucd94\uc815"]}),"Tableau\uc640 \uac19\uc740 \ub370\uc774\ud130 \ubd84\uc11d \ub3c4\uad6c, \uc704\ud0a4\ud53c\ub514\uc544 \ubb38\uc11c \uae30\ubc18 \uc5ed\uc0ac \uad50\uc721 \ub3c4\uad6c, \uce74\ub4dc \uac8c\uc784\uacfc \uac19\uc740 \ub2e4\uc591\ud55c \uc6f9 \ud658\uacbd\uc744 \ub2e4\ub8f8"],techStack:["Python","TensorFlow","Keras","scikit-learn"]})]})]})]})}function A(e){var t=e.url,i=e.title,n=e.author,r=e.journal,a=e.details,c=Object(o.a)("(max-width:960px)"),d=c?{margin:"0 0 0.5rem",fontSize:"1.25rem"}:{margin:"0 0 0.5rem"},m=c?{fontSize:"0.80rem"}:{fontSize:"1rem"},h=c?{padding:"0.2rem 0"}:{padding:"1rem 0"},O={title:b("up"),author:b("up"),journal:b("up")};return Object(j.jsxs)("div",{style:h,children:[Object(j.jsx)(l.a,{ref:O.title.ref,variant:"h5",style:Object(s.a)(Object(s.a)({},d),O.title.style),children:Object(j.jsx)("a",{target:"_blank",href:t,rel:"noopener noreferrer",children:i})}),Object(j.jsx)(l.a,{ref:O.author.ref,style:Object(s.a)(Object(s.a)(Object(s.a)({},O.author.style),m),{},{display:"block"}),children:n}),Object(j.jsx)(l.a,{ref:O.journal.ref,style:Object(s.a)(Object(s.a)({},m),O.journal.style),children:r}),Object(j.jsx)(p,{details:a})]})}function B(){var e=Object(o.a)("(max-width:960px)"),t=e?{fontSize:"2.4rem",marginBottom:"1rem"}:{marginBottom:"1rem"},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("up")};return Object(j.jsxs)("section",{style:i,children:[Object(j.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(s.a)(Object(s.a)({},t),n.title.style),children:[Object(j.jsx)(d,{children:"Pub"}),"lications"]}),Object(j.jsx)(A,{title:"An Empirical Analysis on Transparent Algorithmic Exploration in Recommender Systems",url:"https://arxiv.org/abs/2108.00151",author:Object(j.jsx)("b",{children:"Kihwan Kim"}),journal:"A Computing Research Repository (CoRR), 2108.00151, 2021",details:["\ucd94\ucc9c \uc2dc\uc2a4\ud15c\uc5d0\uc11c \uc0ac\uc6a9\uc790 \ucde8\ud5a5\uc744 \ud30c\uc545\ud558\uae30 \uc704\ud55c \ub79c\ub364 \uc544\uc774\ud15c\ub4e4\uc744 \uc5b4\ub5bb\uac8c \uc804\ub2ec\ud574\uc57c \ud560\uae4c?","\uc2e4\ud5d8 \ud658\uacbd\uc73c\ub85c \uc0ac\uc6a9\ub41c \uc6f9 \uae30\ubc18 \uc601\ud654 \ucd94\ucc9c \uc2dc\uc2a4\ud15c \uad6c\ud604","\uc0ac\uc6a9\uc790 \ub85c\uadf8\uc758 \uac00\uce58\ub97c AI \uce21\uba74\uc5d0\uc11c \ud3c9\uac00\ud558\ub294 metric \uc81c\uc548","\ucd94\ucc9c\uc2dc\uc2a4\ud15c\uc758 Explore-Exploit \ubb38\uc81c\uc5d0\uc11c \ud22c\uba85\uc131\uc774 \ub370\uc774\ud130\uc758 \ud488\uc9c8\uc5d0 \ubbf8\uce58\ub294 \uc601\ud5a5\uc744 \uce21\uc815","94\uba85\uc758 \ud53c\ud5d8\uc790\ub97c Amazon MTurk\uc5d0\uc11c \uad6c\uc778","\ud53c\ud5d8\uc790\ub4e4\uc5d0\uac8c \ub137\ud50c\ub9ad\uc2a4\uc640 \uc720\uc0ac\ud55c \uc2e4\ud5d8 \ud658\uacbd\uc744 \uc774\uc6a9\ud558\ub3c4\ub85d \ud558\uc5ec, \uc2e4\uc0ac\uc6a9 \ub85c\uadf8 \ub370\uc774\ud130\uc640 \uc124\ubb38 \uc751\ub2f5\uc744 \uc218\uc9d1"]}),Object(j.jsx)(A,{title:"ST-GRAT: A Novel Spatio-temporal Graph Attention Networks for Accurately Forecasting Dynamically Changing Road Speed",url:"https://dl.acm.org/doi/10.1145/3340531.3411940",author:Object(j.jsxs)(j.Fragment,{children:["Cheonbok Park, Chunggi Lee, Hyojin Bahng, Yunwon Tae,",Object(j.jsx)("b",{children:" Kihwan Kim"}),", Seungmin Jin, Sungahn Ko, Jaegul Choo"]}),journal:"ACM International Conference on Information and Knowledge Management (CIKM), 2020",details:["\ud55c\uad6d\ub3c4\ub85c\uacf5\uc0ac\uc758 \ub3c4\ub85c \ubc14\ub2e5\uc5d0 \uc124\uce58\ub41c \ucc28\ub7c9 \uac10\uc9c0 \uc13c\uc11c \ub370\uc774\ud130\ub97c \uc804\ucc98\ub9ac","Attention\uc774 \ud6a8\uacfc\uc801\uc73c\ub85c \ub3d9\uc791\ud55c \uacbd\uc6b0\ub4e4\uc744 \ud328\ud134 \ubcc4\ub85c \ubb36\uc5b4 \uce74\ud14c\uace0\ub9ac\ud654"]}),Object(j.jsx)(A,{title:"Modeling Exploration/Exploitation Decisions through Mobile Sensing for Understanding Mechanisms of Addiction",url:"https://dl.acm.org/citation.cfm?doid=3307334.3328599",author:Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("b",{children:"Kihwan Kim"}),", Sanghoon Kim, Chunggi Lee, Sungahn Ko"]}),journal:"ACM International Conference on Mobile Systems, Applications, and Services (MobiSys), 2019",details:["Inverse Reinforcement Learning\uc744 \ud1b5\ud574, \uc2a4\ub9c8\ud2b8\ud3f0 \uc0ac\uc6a9 \ub85c\uadf8\ub85c \uc911\ub3c5 \uc9c8\ud658 \uc5ec\ubd80\ub97c \uac10\uc9c0\ud558\ub294 \uc2dc\uc2a4\ud15c\uc744 \uc81c\uc548"]}),Object(j.jsx)(A,{title:"An Empirical Study on the Relationship Between the Number of Coordinated Views and Visual Analysis",url:"https://arxiv.org/abs/2108.00151",author:Object(j.jsxs)(j.Fragment,{children:["Juyoung Oh, Chunggi Lee, Hwiyeon Kim,",Object(j.jsx)("b",{children:" Kihwan Kim"}),", Osang Kwon, Eric D. Ragan, Bum Chul Kwon, Sungahn Ko"]}),journal:"A Computing Research Repository (CoRR), 2204.09524, 2018",details:["\uc2dc\uac01\ud654 \ucc28\ud2b8\uc758 \uac2f\uc218\uac00 \ub370\uc774\ud130\uc758 \uc2dc\uac01\uc801 \ubd84\uc11d\uc5d0 \uc5b4\ub5a4 \uc601\ud5a5\uc744 \ubbf8\uce58\ub294\uc9c0 \uc2e4\ud5d8","44\uba85 \ud53c\ud5d8\uc790\uc5d0\uac8c \uc2dc\uac01\uc801 \ubd84\uc11d \ub3c4\uad6c\ub97c \uc8fc\uace0, \ub370\uc774\ud130 \ubd84\uc11d \uacfc\uc81c\ub97c \ud480\ub3c4\ub85d \ud568","Think-aloud \ud504\ub85c\ud1a0\ucf5c\uacfc \ub179\ud654\ub41c \ud654\uba74, \uadf8\ub9ac\uace0 \ub85c\uadf8 \ub370\uc774\ud130\ub97c \ud1b5\ud574 \uc0ac\uc6a9\uc790\uc758 \ubd84\uc11d \ud328\ud134\uc744 \uce74\ud14c\uace0\ub9ac\ud654","\ucc28\ud2b8\uc758 \uac2f\uc218\uc640 \uacfc\uc81c \uc810\uc218 \uac04 \uc591\uc758 \uc0c1\uad00\uad00\uacc4\ub97c \uad00\ucc30"]}),Object(j.jsx)(A,{title:"\uc2dc\uac01\ud654 \uae30\ubc18 \ub525\ub7ec\ub2dd \ubd84\uc11d \uae30\uc220",url:"http://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE07266060&language=ko_KR",author:Object(j.jsxs)(j.Fragment,{children:["\uc774\uc7ac\uc131, ",Object(j.jsx)("b",{children:"\uae40\uae30\ud658"}),", \uc774\ucda9\uae30, \uace0\uc131\uc548"]}),journal:"\uc18c\uc74c\uc9c4\ub3d9 \uc81c27\uad8c \uc81c6\ud638 2017.11",details:["\ub525 \ub7ec\ub2dd \ubaa8\ub378\uc744 \ud574\uc11d\ud558\uae30 \uc704\ud55c \uc2dc\uac01\ud654 \uae30\ubc95\ub4e4\uc744 \uc815\ub9ac \ubc0f \uc870\uc0ac"]})]})}function F(e){var t=e.title,i=e.details,n=Object(o.a)("(max-width:960px)")?{margin:"0 0 0.5rem",fontSize:"1.25rem"}:{margin:"0 0 0.5rem",fontSize:"2rem"},r={title:b("up")};return Object(j.jsxs)("div",{style:{paddingTop:"1rem"},children:[Object(j.jsx)(l.a,{ref:r.title.ref,variant:"h5",style:Object(s.a)(Object(s.a)({},n),r.title.style),children:t}),Object(j.jsx)(p,{details:i})]})}function T(){var e=Object(o.a)("(max-width:960px)"),t=e?{fontSize:"2.4rem"}:{},i=e?{padding:"0 2rem",marginTop:"2.5rem"}:{padding:"0 2rem",marginTop:"4rem"},n={title:b("up")};return Object(j.jsxs)("section",{style:i,children:[Object(j.jsxs)(l.a,{ref:n.title.ref,variant:"h3",style:Object(s.a)(Object(s.a)({},t),n.title.style),children:[Object(j.jsx)(d,{children:"Ski"}),"lls"]}),Object(j.jsx)(F,{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc",details:["Visual analytics \ub3c4\uad6c \uac1c\ubc1c; Shneiderman's mantra (overview first, zoom and filter, details on demand)\uc5d0 \uae30\ubc18\ud55c \uc124\uacc4\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4.","ES6 \uc774\uc0c1 \ubb38\ubc95\uc744 \uc801\uadf9 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.","\ud0c0\uc785\uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc0ac\uc6a9\ud574 \uac1c\ubc1c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","Vanilla JS \ub97c \uc774\uc6a9\ud574 DOM \uc744 \uc870\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","React hooks\ub97c \ub2a5\uc219\ud558\uac8c \uc0ac\uc6a9\ud558\uace0, \uac70\uc758 \ubaa8\ub4e0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \ud568\uc218\ub85c \ub9cc\ub4ed\ub2c8\ub2e4. hook\uc744 \uc774\uc6a9\ud574 \uacf5\ud1b5 \ube44\uc988\ub2c8\uc2a4 \ub85c\uc9c1\uc744 \uc801\uc808\ud788 \ubaa8\ub4c8\ud654\ud574 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","\ucef4\ud3ec\ub10c\ud2b8 \ub77c\uc774\ud504 \uc0ac\uc774\ud074\uc744 \uc54c\uace0 \uc788\uc73c\uba70 \uad00\ub828 \uba54\uc18c\ub4dc\ub97c \uc0c1\ud669\uc5d0 \ub530\ub77c \uc801\uc808\ud788 \uc0ac\uc6a9\ud569\ub2c8\ub2e4.","Context API, Recoil\uc744 \uc0ac\uc6a9\ud574 \uc0c1\ud0dc \uad00\ub9ac \ubc0f \ub370\uc774\ud130 \ubaa8\ub378\ub9c1\uc744 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),Object(j.jsx)(F,{title:"\ubc31\uc5d4\ub4dc",details:["Flask\ub97c \ud65c\uc6a9\ud558\uc5ec \uac04\ub2e8\ud55c \uc6f9 \uc11c\ubc84\ub97c \uad6c\ucd95\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.","MongoDB, SQLite3, Tibero \ub4f1 \uad00\uacc4\ud615 \ubc0f \ube44\uad00\uacc4\ud615 \ub370\uc774\ud130\ubca0\uc774\uc2a4\ub97c \ub2e4\ub8f0 \uc904 \uc555\ub2c8\ub2e4."]}),Object(j.jsx)(F,{title:"AI",details:["TensorFlow, Keras \ub4f1\uc744 \ud65c\uc6a9\ud55c \ub525\ub7ec\ub2dd \ubaa8\ub378\uc758 \uad6c\ud604\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.","XGBoost, AutoScikit \ub4f1\uc744 \ud65c\uc6a9\ud55c \uc815\ud615\ub370\uc774\ud130 \uae30\ubc18 \uba38\uc2e0\ub7ec\ub2dd \ubaa8\ub378\uc758 \uad6c\ud604\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4.",Object(j.jsx)(j.Fragment,{children:"AutoML \uc54c\uace0\ub9ac\uc998\ub4e4\uc744 \uad6c\ud604 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4 \u2014 Bayesian optimization, hyperband, evolutionary algorithm."}),Object(j.jsx)(j.Fragment,{children:"\uc124\uba85 \uac00\ub2a5\ud55c AI \uae30\uc220\ub4e4\uc5d0 \uc775\uc219\ud569\ub2c8\ub2e4 \u2014 Shap, partial dependence plot, local surrogate model."})]})]})}var I=function(){return Object(j.jsxs)("div",{style:{width:"100%",maxWidth:"50rem",margin:"auto"},children:[Object(j.jsx)(O,{}),Object(j.jsx)(h,{}),Object(j.jsx)(w,{}),Object(j.jsx)(k,{}),Object(j.jsx)(B,{}),Object(j.jsx)(T,{}),Object(j.jsx)("div",{style:{height:"5rem"}})]})},R=i(25),z=i(55),C=Object(R.a)({typography:{fontFamily:["Spoqa Han Sans","Sans-serif"].join(","),h1:{fontWeight:"bold"},h2:{fontWeight:"bold"},h3:{fontWeight:"bold"},h4:{fontWeight:"bold"},h5:{fontWeight:"bold"},h6:{fontWeight:"bold"}}});c.a.render(Object(j.jsx)(z.a,{theme:C,children:Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(I,{})})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.f5b655d1.chunk.js.map