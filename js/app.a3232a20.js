(function(t){function n(n){for(var a,s,r=n[0],c=n[1],l=n[2],p=0,g=[];p<r.length;p++)s=r[p],o[s]&&g.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(n);while(g.length)g.shift()();return i.push.apply(i,l||[]),e()}function e(){for(var t,n=0;n<i.length;n++){for(var e=i[n],a=!0,r=1;r<e.length;r++){var c=e[r];0!==o[c]&&(a=!1)}a&&(i.splice(n--,1),t=s(s.s=e[0]))}return t}var a={},o={app:0},i=[];function s(n){if(a[n])return a[n].exports;var e=a[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,s),e.l=!0,e.exports}s.m=t,s.c=a,s.d=function(t,n,e){s.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,n){if(1&n&&(t=s(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(s.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var a in t)s.d(e,a,function(n){return t[n]}.bind(null,a));return e},s.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(n,"a",n),n},s.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},s.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=n,r=r.slice();for(var l=0;l<r.length;l++)n(r[l]);var d=c;i.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"034f":function(t,n,e){"use strict";var a=e("64a9"),o=e.n(a);o.a},"087c":function(t,n,e){t.exports=e.p+"img/flow1.8bf75c74.png"},"0fe1":function(t,n,e){t.exports=e.p+"img/lyanna.a4459dc4.png"},1275:function(t,n,e){t.exports=e.p+"img/mobile.7c9dbc49.gif"},"14b3":function(t,n,e){"use strict";var a=e("7ad6"),o=e.n(a);o.a},"151b":function(t,n,e){"use strict";var a=e("8c85"),o=e.n(a);o.a},"1f20":function(t,n,e){t.exports=e.p+"img/connect.0bcaab9b.png"},"24d9":function(t,n,e){t.exports=e.p+"img/personal.a621c230.png"},"26a0":function(t,n,e){t.exports=e.p+"img/gie.5b06168c.png"},"27d5":function(t,n,e){t.exports=e.p+"img/baldie.8cd07f30.png"},"28d1":function(t,n,e){"use strict";var a=e("c63a"),o=e.n(a);o.a},"2cd0":function(t,n,e){t.exports=e.p+"img/yesno.c0a29d77.png"},"2cd5":function(t,n,e){t.exports=e.p+"img/checkmark.a223d2ce.png"},"2e43":function(t,n,e){},"31d6":function(t,n,e){},3633:function(t,n,e){t.exports=e.p+"img/vinegar.56c1307c.png"},"3bc4":function(t,n,e){t.exports=e.p+"img/wireframe.ec6d62fe.png"},"3cbf":function(t,n,e){},"4bee":function(t,n,e){t.exports=e.p+"img/corgi.d3761534.png"},"4d2b":function(t,n,e){t.exports=e.p+"img/community_event.45431bd2.png"},"52ce":function(t,n,e){"use strict";var a=e("3cbf"),o=e.n(a);o.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("097d");var a=e("2b0e"),o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("Navbar"),e("router-view",{attrs:{isMobile:t.isMobile}})],1)},i=[],s=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("nav",{staticClass:"container navbar"},[e("router-link",{staticClass:"navbar-home hover",attrs:{tag:"a",to:"/"}},[e("img",{staticClass:"navbar-img",attrs:{src:t.IdenticonImg,alt:"identicon"}})]),e("span",{staticClass:"navbar-span"},[e("router-link",{staticClass:"marginRight hover hover2",class:"/about"===this.$route.path&&"active",attrs:{tag:"a",to:"/about"}},[t._v("\n      About\n    ")]),e("router-link",{staticClass:"marginRight hover hover2",class:"/portfolio"===this.$route.path&&"active",attrs:{tag:"a",to:"/portfolio"}},[t._v("\n      Portfolio\n    ")]),e("a",{staticClass:"hover hover2",attrs:{href:"https://www.linkedin.com/in/lyanna-ho/",target:"_blank"}},[t._v("\n      LinkedIn\n    ")])],1)],1)},r=[],c=e("d07d"),l=e.n(c),d={data:function(){return{IdenticonImg:l.a}}},p=d,g=(e("f44f"),e("2877")),m=Object(g["a"])(p,s,r,!1,null,"06d07678",null),u=m.exports,h={created:function(){window.addEventListener("resize",this.onResize)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},name:"app",components:{Navbar:u},data:function(){return{isMobile:window.innerWidth<=580}},methods:{onResize:function(){this.isMobile=window.innerWidth<=580}}},f=h,v=(e("034f"),Object(g["a"])(f,o,i,!1,null,null,null)),b=v.exports,C=e("8c4f"),w=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[t.show?e("div",[e("div",{staticClass:"container tight paddingBottom small"},[e("div",{staticClass:"content paddingBottom"},[e("h1",{staticClass:"header marginBottom"},[t._v("About me")]),e("p",{staticClass:"message marginBottom large"},[t._v("\n          "+t._s("I am passionate about product design and creating satisfying user experiences.")+"\n          "),e("br"),t._v("\n          "+t._s("In my free time, I enjoy scrolling through dribbble, playing guitar, doodling, hanging out with ")+"\n          "),e("span",{staticClass:"strikethrough"},[t._v("dogs")]),t._v("\n          "+t._s("my friends, playing badminton, and photographing memories.")+"\n        ")]),e("div",{staticClass:"grid marginBottom large"},t._l(t.ABOUT_IMGS,function(n,a){return e("img",{key:a,staticClass:"item-img hover",attrs:{src:n.imgSrc,alt:n.class},on:{click:function(e){t.changeModal(n)}}})}),0)]),e("div",{staticClass:"contact-me-wrapper"},[e("a",{staticClass:"contact-me hover marginBottom large",attrs:{href:"mailto:lyannaho0@gmail.com",target:"_top"}},[t._v("\n          Contact Me\n        ")])])]),e("transition",{attrs:{name:"fadeNoDelay"}},[t.isModalOpen?e("Modal",{attrs:{onClose:t.closeModal}},[e("img",{staticClass:"modal-img",attrs:{src:t.currentEntry.imgSrc,alt:t.currentEntry.class},on:{click:t.closeModal}})]):t._e()],1)],1):t._e()])},y=[],_=(e("7514"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"bg-overlay",on:{click:t.onClose}}),e("div",{ref:"content",staticClass:"content"},[t._t("default")],2)])}),x=[],k=[{opacity:0,transform:"translate(-50%, -50%) scale(0.8)"},{opacity:1,transform:"translate(-50%, -50%) scale(1)"}],I={delay:300,duration:250,easing:"cubic-bezier(0.8, 0, 0.2, 1.5)",fill:"forwards"},A=[{opacity:1,transform:"translate(-50%, -50%) scale(1)"},{opacity:0,transform:"translate(-50%, -50%) scale(0.8)"}],M={duration:200,easing:"cubic-bezier(0.8, 0, 0.2, 1.5)",fill:"forwards"},B={beforeCreate:function(){document.body.classList.add("overflow")},mounted:function(){this.$refs.content.animate(k,I)},props:{onClose:Function},beforeDestroy:function(){this.$refs.content.animate(A,M),document.body.classList.remove("overflow")}},T=B,S=(e("f01e"),e("cef8"),Object(g["a"])(T,_,x,!1,null,"7c83cf65",null)),E=S.exports,O=e("db0c"),N=e.n(O),j=e("75fc"),G=e("27d5"),z=e.n(G),Y=e("4bee"),D=e.n(Y),P=e("d8ff"),R=e.n(P),U=e("26a0"),F=e.n(U),W=e("0fe1"),L=e.n(W),$=e("84b1"),J=e.n($),V=e("3633"),q=e.n(V),X=[{imgSrc:D.a,class:"corgi",entry:"corgi"},{imgSrc:J.a,class:"smile",entry:"techforgood"},{imgSrc:q.a,class:"vinegar",entry:"vinegar"},{imgSrc:L.a,class:"lyanna",entry:"lyanna"}],H={santacruz:{entry:"santacruz"}},Q=[].concat(X,Object(j["a"])(N()(H))),Z=[{imgSrc:F.a,class:"gie",entry:"gie"},{imgSrc:z.a,class:"baldie",entry:"baldie"},{imgSrc:R.a,class:"doodle",entry:"doodle"}],K={components:{Modal:E},data:function(){var t=this;return{show:!1,isModalOpen:!1,currentEntry:Z.find(function(n){return n.entry===t.$route.hash.slice(1)}),ABOUT_IMGS:Z}},methods:{changeModal:function(t){this.isModalOpen=!0,this.currentEntry=t,window.location.hash=t.entry},closeModal:function(){this.isModalOpen=!1,this.currentEntry=null,history.pushState(null,null," ")}},mounted:function(){this.show=!0,this.currentEntry&&(this.isModalOpen=!0)},beforeRouteUpdate:function(t,n,e){var a=t.hash;a?(this.currentEntry=Z.find(function(t){return t.entry===a.slice(1)}),this.isModalOpen=!0):(this.currentEntry=null,this.isModalOpen=!1),e()}},tt=K,nt=(e("14b3"),Object(g["a"])(tt,w,y,!1,null,"552c6d05",null)),et=nt.exports,at=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[t.show?e("div",[e("div",{staticClass:"container tight"},[e("div",{staticClass:"content"},[e("h1",{staticClass:"header marginBottom"},[t._v("Hi! My name is Lyanna.")]),e("p",{staticClass:"message marginBottom large"},[t._v("\n          "+t._s("Current a student at the University of California, ")+"\n          "),e("a",{staticClass:"special message hover hover3",on:{click:function(n){t.changeModal(t.SPECIAL_ENTRIES.santacruz)}}},[t._v("\n            Santa Cruz\n          ")]),t._v("\n          "+t._s(".")+"\n          "),e("br"),t._v("\n          "+t._s("I love creating illustrations, designing, and building products.")+"\n        ")]),e("div",{staticClass:"grid"},t._l(t.PORTFOLIO_ENTRIES,function(n,a){return e("a",{key:a,staticClass:"item hover",on:{click:function(e){t.changeModal(n)}}},[e("img",{staticClass:"item-img",class:n.class,attrs:{src:n.imgSrc,alt:n.entry}})])}),0)])]),e("transition",{attrs:{name:"fadeNoDelay"}},[t.isModalOpen?e("Modal",{attrs:{onClose:t.closeModal}},[e(t.currentEntry.entry,{tag:"component",attrs:{isMobile:t.isMobile,onClose:t.closeModal}})],1):t._e()],1)],1):t._e()])},ot=[],it=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"content-modal"},[e("button",{staticClass:"close hover",on:{click:t.onClose}},[t._v("x")]),e("img",{staticClass:"corgi",attrs:{src:t.isMobile?t.CorgiGroupMobile:t.CorgiGroupDesktop,alt:"corgi group"}}),e("a",{staticClass:"link hover marginTop",attrs:{href:"https://store.line.me/stickershop/product/3907989",target:"_blank"}},[t._v("\n    Open in LINE Store\n  ")])])},st=[],rt=e("75c9"),ct=e.n(rt),lt=e("5bba"),dt=e.n(lt),pt={data:function(){return{CorgiGroupDesktop:ct.a,CorgiGroupMobile:dt.a}},props:{isMobile:Boolean,onClose:Function}},gt=pt,mt=(e("e58c"),Object(g["a"])(gt,it,st,!1,null,"9ef297e4",null)),ut=mt.exports,ht=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"content-modal"},[e("button",{staticClass:"close hover",on:{click:t.onClose}},[t._v("x")]),e("a",{attrs:{href:"https://www.figma.com/file/RLVOfYzJOfvNrjnbpbxlIsMc/Personal?node-id=0%3A1",target:"_blank"}},[e("img",{staticClass:"wave hover",attrs:{src:t.PersonalImg,alt:"personal figma"}})])]),t._m(0)])},ft=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"textAlign paddingBottom"},[e("a",{staticClass:"link hover",attrs:{href:"https://www.figma.com/file/RLVOfYzJOfvNrjnbpbxlIsMc/Personal?node-id=0%3A1",target:"_blank"}},[t._v("\n      Open in Figma\n    ")])])}],vt=e("24d9"),bt=e.n(vt),Ct={data:function(){return{PersonalImg:bt.a}},props:{onClose:Function}},wt=Ct,yt=(e("151b"),Object(g["a"])(wt,ht,ft,!1,null,"779523c6",null)),_t=yt.exports,xt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"content-modal"},[e("button",{staticClass:"close hover",on:{click:t.onClose}},[t._v("x")]),e("img",{staticClass:"santacruz",attrs:{src:t.isMobile?t.SantaCruzMobileImg:t.SantaCruzImg,alt:"Santa Cruz"}})]),e("div",{staticClass:"textAlign paddingBottom"},[e("a",{staticClass:"link hover",on:{click:t.onClose}},[t._v("\n      Close\n    ")])])])},kt=[],It=e("85c3"),At=e.n(It),Mt=e("bb3f"),Bt=e.n(Mt),Tt={data:function(){return{SantaCruzImg:At.a,SantaCruzMobileImg:Bt.a}},props:{isMobile:Boolean,onClose:Function}},St=Tt,Et=(e("28d1"),Object(g["a"])(St,xt,kt,!1,null,"53e66e7d",null)),Ot=Et.exports,Nt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"content-modal"},[e("button",{staticClass:"close hover",on:{click:t.onClose}},[t._v("x")]),e("p",{staticClass:"p"},[t._v("Working with Professor David Lee")]),e("a",{staticClass:"tech-link hover marginBottom",attrs:{href:"https://www.figma.com/file/0b9MheMHBV8CZcrqwWpCpXlQ/causeway-stuff?node-id=1%3A1254",target:"_blank"}},[t._v("Causeway")]),e("img",{staticClass:"smile marginBottom",attrs:{src:t.SmileImg,alt:"tech for good"}}),e("div",{staticClass:"in-progress"},[t._v("\n      In Progress\n    ")])]),e("div",{staticClass:"textAlign paddingBottom"},[e("a",{staticClass:"link hover marginTop",on:{click:t.onClose}},[t._v("\n      Close\n    ")])])])},jt=[],Gt={data:function(){return{SmileImg:J.a}},props:{onClose:Function}},zt=Gt,Yt=(e("628b"),Object(g["a"])(zt,Nt,jt,!1,null,"4fc66c2e",null)),Dt=Yt.exports,Pt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"content-modal"},[e("button",{staticClass:"close hover",on:{click:t.onClose}},[t._v("x")]),e("a",{attrs:{href:"https://www.figma.com/file/MjWyfxSPRzoWxUWEcDUIu22e/cruzhacks?node-id=0%3A1",target:"_blank"}},[e("img",{staticClass:"wave",attrs:{src:t.WaveImg,alt:"vinegar"}})])]),t._m(0)])},Rt=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"textAlign paddingBottom"},[e("a",{staticClass:"link hover",attrs:{href:"https://www.figma.com/file/MjWyfxSPRzoWxUWEcDUIu22e/cruzhacks?node-id=0%3A1",target:"_blank"}},[t._v("\n      Open in Figma\n    ")])])}],Ut=e("da3a"),Ft=e.n(Ut),Wt={data:function(){return{WaveImg:Ft.a}},props:{onClose:Function}},Lt=Wt,$t=(e("96d2"),Object(g["a"])(Lt,Pt,Rt,!1,null,"06286bf5",null)),Jt=$t.exports,Vt={components:{corgi:ut,lyanna:_t,santacruz:Ot,techforgood:Dt,vinegar:Jt,Modal:E},data:function(){var t=this;return{show:!1,isModalOpen:!1,currentEntry:Q.find(function(n){return n.entry===t.$route.hash.slice(1)}),PORTFOLIO_ENTRIES:X,SPECIAL_ENTRIES:H}},methods:{changeModal:function(t){this.isModalOpen=!0,this.currentEntry=t,window.location.hash=t.entry},closeModal:function(){this.isModalOpen=!1,this.currentEntry=null,history.pushState(null,null," ")}},mounted:function(){this.show=!0,this.currentEntry&&(this.isModalOpen=!0)},beforeRouteUpdate:function(t,n,e){var a=t.hash;a?(this.currentEntry=Q.find(function(t){return t.entry===a.slice(1)}),this.isModalOpen=!0):(this.currentEntry=null,this.isModalOpen=!1),e()},props:{isMobile:Boolean}},qt=Vt,Xt=(e("a6c1"),Object(g["a"])(qt,at,ot,!1,null,"10db214c",null)),Ht=Xt.exports,Qt=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[t.show?e("div",[e("div",{staticClass:"container tight"},[e("div",{staticClass:"content"},[e("h1",{staticClass:"header paddingBottom"},[t._v("\n          "+t._s("Portfolio")+"\n        ")]),e("div",{staticClass:"grid first"},[e("div",{staticClass:"item"},[e("h4",{staticClass:"item-header"},[t._v("Nextdoor Redesign")]),e("router-link",{staticClass:"nextdoor hover hover3",attrs:{tag:"a",to:"/portfolio/kleinerperkins"}},[t._v("\n              Enter\n            ")])],1)]),e("h3",{staticClass:"header-3 marginTop large"},[t._v("Meanwhile,")]),e("p",{staticClass:"message marginBottom large"},[t._v("\n          check out my fun projects and illustrations!\n        ")]),e("div",{staticClass:"grid"},[e("div",{staticClass:"item"},[e("h4",{staticClass:"item-header"},[t._v("Vinegar")]),e("a",{staticClass:"vinegar hover hover3",attrs:{href:"https://www.figma.com/file/MjWyfxSPRzoWxUWEcDUIu22e/cruzhacks?node-id=0%3A1",target:"_blank"}},[t._v("Figma")])]),e("div",{staticClass:"item"},[e("h4",{staticClass:"item-header"},[t._v("Personal")]),e("a",{staticClass:"hover hover3",attrs:{href:"https://www.figma.com/file/RLVOfYzJOfvNrjnbpbxlIsMc/Personal?node-id=0%3A1",target:"_blank"}},[t._v("Figma")])]),e("div",{staticClass:"item"},[e("h4",{staticClass:"item-header"},[t._v("Causeway")]),e("a",{staticClass:"causeway hover hover3",attrs:{href:"https://www.figma.com/file/0b9MheMHBV8CZcrqwWpCpXlQ/causeway-stuff?node-id=1%3A1254",target:"_blank"}},[t._v("Figma")])]),e("div",{staticClass:"item"},[e("h4",{staticClass:"item-header"},[t._v("Spotify")]),e("a",{staticClass:"spotify hover hover3",attrs:{href:"https://www.figma.com/file/UJzGtjkjeTrxh12IqGwHeHGC/Spotify?node-id=0%3A1",target:"_blank"}},[t._v("Figma")])]),e("div",{staticClass:"item"},[e("h4",{staticClass:"item-header"},[t._v("LinkedIn")]),e("a",{staticClass:"linkedin hover hover3",attrs:{href:"https://www.figma.com/file/LDesFquzxt2PGyER9LShjVBo/LinkedIn-Job-Search?node-id=0%3A1",target:"_blank"}},[t._v("Figma")])]),e("div",{staticClass:"item"},[e("h4",{staticClass:"item-header"},[t._v("Patatap")]),e("a",{staticClass:"patatap hover hover3",attrs:{href:"/patatap/patatap.html",target:"_blank"}},[t._v("JavaScript")])])])])])]):t._e()])},Zt=[],Kt={data:function(){return{show:!1}},mounted:function(){this.show=!0}},tn=Kt,nn=(e("52ce"),Object(g["a"])(tn,Qt,Zt,!1,null,"370fcaca",null)),en=nn.exports,an=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("transition",{attrs:{name:"fade"}},[e("div",{staticClass:"content"},[e("div",{staticClass:"container tight"},[e("h1",{staticClass:"h1"},[t._v("\n        Nextdoor Redesign\n      ")]),e("h3",{staticClass:"h3 marginTop marginBottom small"},[t._v("\n        Kleiner Perkins Design Challenge 2019\n      ")]),e("img",{staticClass:"landingImg paddingTop large",attrs:{src:t.communityEventImg,alt:"community event"}}),e("div",{staticClass:"text-body paddingTop large"},[e("h4",{staticClass:"h4 marginTop paddingBottom small"},[t._v("\n          Inspiration\n        ")]),e("p",{staticClass:"p marginTop small"},[t._v("\n          I created an account on Nextdoor in 2016 to get involved within my community in Santa Clara.\n          Scrolling through the social network, most of the posts illuminated nearby events or items that people\n          were selling. While away during college, I would use Nextdoor to inform my family of events and warn\n          them about crimes that were happening near them. With a large community using the app, I felt safe\n          knowing that my neighbors were looking after each other.\n        ")]),e("p",{staticClass:"p quote marginTop large"},[t._v("\n          \"Nextdoor is the world's largest social network for the neighborhood. Nextdoor enables truly\n          local conversations that empower neighbors to build stronger and safer communities.\n          "),e("span",{staticClass:"bold"},[t._v("Building connections in the real world is a universal human need.")]),t._v('\n          That truth, and the reality that neighborhoods are one of the most imporant useful communities\n          in our lives have been a guiding principle for Nextdoor since it was founded in 2011."\n        ')]),e("p",{staticClass:"p caption"},[t._v("\n          Taken from "),e("a",{staticClass:"hover",attrs:{href:"https://about.nextdoor.com",target:"_blank"}},[t._v("https://about.nextdoor.com")])]),e("p",{staticClass:"p marginTop marginBottom large"},[t._v("\n          Differing from most social media networks that encompass users from anywhere around the world,\n          I chose to redesign Nextdoor as I admired Nextdoor's product and mission towards creating a strong\n          and safe community for their users.\n        ")]),e("h4",{staticClass:"h4 paddingTop small"},[t._v("\n          My Role\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v("\n          Perform user research, understand specific user needs, create mockups, produce high-fidelity\n          designs, and provide a successful user experience.\n        ")]),e("h4",{staticClass:"h4 paddingTop large"},[t._v("\n          Research\n        ")]),e("p",{staticClass:"p paddingTop"},[t._v("\n          With the context of Nextdoor's focus on building communities, I asked a few questions to a group\n          of 30 random people who use or have used Nextdoor.\n        ")]),e("img",{staticClass:"surveyImg-age paddingTop large",attrs:{src:t.ageImg,alt:"age demographics"}}),e("p",{staticClass:"p caption"},[t._v("\n          Age demographics of survey participants.\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom large"},[t._v("\n          The survey participants consisted of people from varying age groups in order to accurately\n          represent the Nextdoor user age demographics.\n        ")]),e("img",{staticClass:"surveyImg-connect paddingTop large",attrs:{src:t.connectImg,alt:"connect survey"}}),e("p",{staticClass:"p caption"},[t._v("\n          Many people do not connect with their neighbors.\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom large"},[t._v("\n          The users of Nextdoor does not have a centralized method of connecting with their neighbors.\n        ")]),e("img",{staticClass:"surveyImg-in-person paddingTop large",attrs:{src:t.inPersonImg,alt:"in-person survey"}}),e("p",{staticClass:"p caption marginTop small"},[t._v("\n          Many people have not met their neighbors through Nextdoor.\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom large"},[t._v("\n          Despite Nextdoor being an effective platform for neighbors to connect online, Most users of\n          Nextdoor do not connect on a face-to-face basis.\n        ")]),e("h4",{staticClass:"h4 paddingTop small"},[t._v("\n          Challenge\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v("\n          According to the user research, Nextdoor has opportunity for improvement in providing more\n          in-person experiences. Therefore, the Nextdoor's challenge is to being able to leverage their\n          mission of building communities to promote in-person interactions.\n        ")]),e("h4",{staticClass:"h4 paddingTop"},[t._v("\n          Proposal\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v('\n          To actively promote in-person events and community bondings within Nextdoor, For this specific\n          challenge, I specifically will be talking about adding a "community event" for each neighborhood.\n        ')]),e("h4",{staticClass:"h4 paddingTop"},[t._v("\n          Flowchart/User-Flow\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v('\n          To finalize my idea without running into issues while prototyping, I decied to create a flowchart.\n          For both the mobile and web view, the first poll will have the goal of recording the number of interest\n          in "community event" in each neighborhood.\n        ')]),e("img",{staticClass:"flow-1",attrs:{src:t.flow1Img,alt:"flowchart/user-flow"}}),e("p",{staticClass:"p caption"},[t._v('\n          Flow of introduction poll prior to introducing the "community event".\n        ')]),e("p",{staticClass:"p paddingTop paddingBottom large"},[t._v('\n          The introduction poll will exist prior to creating "community event" in order to gather relevant data from\n          Nextdoor users and smoothly introduce the idea of "community event".\n        ')]),e("img",{staticClass:"flow-2",attrs:{src:t.flow2Img,alt:"flowchart/user-flow"}}),e("p",{staticClass:"p caption"},[t._v('\n          Flow of user interaction with "community event"\n        ')]),e("p",{staticClass:"p paddingTop paddingBottom large"},[t._v('\n          If the "community event" is in high demand, Nextdoor will create the special event page with suggested data.\n          Nextdoor should actively promote this "community event" through its notification system, as well as occupying\n          a space on the news feed page in order to emphasize the event. The event will have a poll that suggests\n          the neighbors to decide on the event itself and its location.\n        ')]),e("h4",{staticClass:"h4 paddingTop paddingBottom"},[t._v("\n          Wireframing + Prototyping\n        ")]),e("img",{staticClass:"wireframe paddingTop paddingBottom",attrs:{src:t.wireframeImg,alt:"wireframe"}}),e("h4",{staticClass:"h4 paddingTop"},[t._v("\n          UI Design\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v('\n          I made sure to coincide with the consistency of Nextdoor\'s UI. Normally, a "yes or no"\n          poll would have this type of components:\n        ')]),e("img",{staticClass:"yes-no",attrs:{src:t.yesNoImg,alt:"yes or no"}}),e("p",{staticClass:"p caption paddingBottom"},[t._v("\n          Simple and common Yes or No selection option.\n        ")]),e("p",{staticClass:"p center paddingTop paddingBottom small"},[t._v("\n          Nextdoor's checkmark UI component:\n        ")]),e("img",{staticClass:"checkmark",attrs:{src:t.checkmarkImg,alt:"checkmark"}}),e("p",{staticClass:"p caption paddingBottom"},[t._v("\n          Taken from Nextdoor's privacy settings page.\n        ")]),e("p",{staticClass:"p center paddingTop paddingBottom small"},[t._v("\n          Testing and Iteration\n        ")]),e("img",{staticClass:"check-gif paddingBottom large",attrs:{src:t.checkGifImg,alt:"gif of clicking checkmark"}}),e("img",{staticClass:"submit-gif paddingBottom paddingTop large",attrs:{src:t.submitGifImg,alt:"gif of clicking submit"}}),e("img",{staticClass:"mobile-gif paddingBottom paddingTop large",attrs:{src:t.mobileGifImg,alt:"gif of mobile view"}}),e("img",{staticClass:"flow-desktop paddingBottom paddingTop large",attrs:{src:t.flowDesktopImg,alt:"flow on desktop view"}}),e("img",{staticClass:"overall-flow paddingBottom paddingTop large",attrs:{src:t.overallFlowImg,alt:"overall flow"}}),e("img",{staticClass:"desktop-view paddingBottom paddingTop large",attrs:{src:t.desktopViewImg,alt:"desktop full view"}}),e("img",{staticClass:"community-event paddingBottom paddingTop large",attrs:{src:t.communityImg,alt:"community view"}}),e("img",{staticClass:"event-page paddingBottom paddingTop large",attrs:{src:t.eventImg,alt:"event page"}}),e("h4",{staticClass:"h4 paddingTop"},[t._v("\n          Reflection\n        ")]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v('\n          I wanted to integrate an introduction poll for two reasons. First reasons was to smoothly introduce\n          new ideas (in this case, the "community event") to users. The poll hints the idea at the users, allowing\n          the "community event" to be introduced without a surprise or confusion. Second reason was to collect\n          relevant data to better execute the idea of creating a "community event" for the neighborhoods.\n        ')]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v('\n          I believe that the solution to Nextdoor\'s challenge is to actively promote community bonding, For the\n          purpose of this challenge, I specifically proposed adding a "community event" that actively promotes user\n          interactions through polls and that also enforces bodning by suggesting activities, location and date. While\n          "community event" focuses on neighborhoods, the event should be easily scalable to other groups, such as\n          interest groups.\n        ')]),e("p",{staticClass:"p paddingTop paddingBottom"},[t._v("\n          Nextdoor has a unique advantage of having a product that is centered around communities and neighborhood.\n          WIth this background in mind, I believe that Nextdoor should be able to use this advantage to smoothly\n          introduce user-friendly features that actively promote community bonding.\n        ")]),e("div",{staticClass:"a-wrapper p paddingTop paddingBottom"},[e("a",{staticClass:"a hover",attrs:{href:"https://www.figma.com/file/Q5xV0VNCL4n5b4YSiir2vnr3/next-door?node-id=43%3A0",target:"_blank"}},[t._v("Figma link")])])])])])])},on=[],sn=e("d84c"),rn=e.n(sn),cn=e("4d2b"),ln=e.n(cn),dn=e("1f20"),pn=e.n(dn),gn=e("7374"),mn=e.n(gn),un=e("087c"),hn=e.n(un),fn=e("72ac"),vn=e.n(fn),bn=e("3bc4"),Cn=e.n(bn),wn=e("2cd0"),yn=e.n(wn),_n=e("2cd5"),xn=e.n(_n),kn=e("deb5"),In=e.n(kn),An=e("6776"),Mn=e.n(An),Bn=e("1275"),Tn=e.n(Bn),Sn=e("a95e"),En=e.n(Sn),On=e("7610"),Nn=e.n(On),jn=e("a551"),Gn=e.n(jn),zn=e("c74e"),Yn=e.n(zn),Dn=e("e6ea"),Pn=e.n(Dn),Rn={data:function(){return{ageImg:rn.a,communityEventImg:ln.a,connectImg:pn.a,inPersonImg:mn.a,flow1Img:hn.a,flow2Img:vn.a,wireframeImg:Cn.a,yesNoImg:yn.a,checkmarkImg:xn.a,checkGifImg:In.a,submitGifImg:Mn.a,mobileGifImg:Tn.a,flowDesktopImg:En.a,overallFlowImg:Nn.a,desktopViewImg:Gn.a,communityImg:Yn.a,eventImg:Pn.a}}},Un=Rn,Fn=(e("77c4"),Object(g["a"])(Un,an,on,!1,null,"b1e6c3f4",null)),Wn=Fn.exports;a["a"].use(C["a"]);var Ln=new C["a"]({mode:"history",routes:[{path:"/",component:Ht},{path:"/portfolio",component:en},{path:"/portfolio/kleinerperkins",component:Wn},{path:"/about",component:et},{path:"*",redirect:"/"}]});a["a"].config.productionTip=!1,new a["a"]({router:Ln,render:function(t){return t(b)}}).$mount("#app")},"58ca":function(t,n,e){},"5bba":function(t,n,e){t.exports=e.p+"img/corgi_group_mobile.b4cc207a.png"},"628b":function(t,n,e){"use strict";var a=e("de9e"),o=e.n(a);o.a},"64a9":function(t,n,e){},6776:function(t,n,e){t.exports=e.p+"img/submit.0aff1be5.gif"},"72ac":function(t,n,e){t.exports=e.p+"img/flow2.5158bf1a.png"},7374:function(t,n,e){t.exports=e.p+"img/in-person.9900116f.png"},"75c9":function(t,n,e){t.exports=e.p+"img/corgi_group_desktop.49b4195b.png"},7610:function(t,n,e){t.exports=e.p+"img/mobileflow.61afeb19.png"},"77c4":function(t,n,e){"use strict";var a=e("58ca"),o=e.n(a);o.a},"7ad6":function(t,n,e){},"84b1":function(t,n,e){t.exports=e.p+"img/smile.cfe018b2.png"},"85c3":function(t,n,e){t.exports=e.p+"img/santacruz_pics.720fe4dd.jpg"},"8c85":function(t,n,e){},"96d2":function(t,n,e){"use strict";var a=e("a42f"),o=e.n(a);o.a},a42f:function(t,n,e){},a551:function(t,n,e){t.exports=e.p+"img/desktop.ab1115e9.png"},a6c1:function(t,n,e){"use strict";var a=e("31d6"),o=e.n(a);o.a},a95e:function(t,n,e){t.exports=e.p+"img/overallFlow.4315a632.png"},b10a:function(t,n,e){},bb3f:function(t,n,e){t.exports=e.p+"img/santacruz_pics_mobile.74e64ae4.jpg"},c63a:function(t,n,e){},c74e:function(t,n,e){t.exports=e.p+"img/community.04efc959.png"},cef8:function(t,n,e){"use strict";var a=e("b10a"),o=e.n(a);o.a},d07d:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABGCAYAAABxLuKEAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAF/SURBVHgB7dzBSgJBAIDhWd0WNfdQYeAlIapDt06dOvUmvWRPEZ68FtShbgoGmUrmnt0fdkjdDv93XAYZ/mXAYUaTyWSyCtrQCCplGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBhgGGAYYBiQlj2cL1dh9DoLVR3naRj0DiqPH719h/nip/L4m/N25bHv42X4GC8qjz/rZeEkb248xzDDl+phLvtZXJh19M/ZbsIUUWLm3m03SsO4lIBhgGGAYYBhgGGAYYBhgGGAYUAaanB71Vnvlf73XYJawsTsq+riUgKGAYYBhgGGAYYBhgGGAYYBtXzznUacEBTy1v7fXy1hHp+mUccnD/dHYd9cSsAwwDDAMMAwwDDAMMAwwDDAMKB0S5ClSbjoZyHG8Pmr8tjixtauPrvYasTMvdtqlj5PtvFj0WLiMde7dqm49nZ3fRj+yqUEDAMMAwwDDAMMAwwDDAMMAwwDtnJ8MjjNcM+xb3lnO+868Y91yrmUgGGAYYBhwC+S+06rCDLIwAAAAABJRU5ErkJggg=="},d53a:function(t,n,e){},d84c:function(t,n,e){t.exports=e.p+"img/age.75bebd14.png"},d8ff:function(t,n,e){t.exports=e.p+"img/doodle.773f8581.png"},da3a:function(t,n,e){t.exports=e.p+"img/wave.cfe5fb34.png"},de9e:function(t,n,e){},deb5:function(t,n,e){t.exports=e.p+"img/check.481890a8.gif"},e58c:function(t,n,e){"use strict";var a=e("d53a"),o=e.n(a);o.a},e6ea:function(t,n,e){t.exports=e.p+"img/event.9d69b239.png"},f01e:function(t,n,e){"use strict";var a=e("2e43"),o=e.n(a);o.a},f44f:function(t,n,e){"use strict";var a=e("f9f9"),o=e.n(a);o.a},f9f9:function(t,n,e){}});
//# sourceMappingURL=app.a3232a20.js.map