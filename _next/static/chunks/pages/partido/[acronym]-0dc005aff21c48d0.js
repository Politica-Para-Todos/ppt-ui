(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{23900:function(e,a,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/partido/[acronym]",function(){return r(33299)}])},70336:function(e,a,r){"use strict";var l=r(85893),s=r(5789),n=r(16373),t=r(55673),o=r(41664),c=r.n(o),i=r(67294),d=r(3751),u=r(48033),p=r(73309),A=r(35743);a.Z=(0,i.memo)(()=>{let{Footer:e}=n.default;return(0,l.jsx)(e,{className:"footer",children:(0,l.jsxs)(t.Z,{justify:"space-between",children:[(0,l.jsxs)(s.Z,{span:24,md:{offset:4,span:16},lg:{offset:0,span:6},className:"footer-social",children:[(0,l.jsx)(A.Z,{onlinePlatforms:d.b}),(0,l.jsx)(p.wi,{})]}),(0,l.jsxs)(s.Z,{span:24,md:{offset:4,span:16},lg:{offset:0,span:12},className:"footer-info",children:[(0,l.jsx)("h2",{children:"Quem Somos"}),(0,l.jsxs)("p",{children:["Podes consultar ",(0,l.jsx)(()=>(0,l.jsx)(c(),{rel:"noopener",href:"/about-us",children:"aqui"}),{})," a equipa por detr\xe1s do projecto e as suas motiva\xe7\xf5es."]}),(0,l.jsx)("br",{}),(0,l.jsxs)("p",{children:["Quem esteve envolvido no projecto: ",(0,l.jsx)(u.Z,{})]})]})]})})})},89156:function(e,a,r){"use strict";var l=r(85893),s=r(84960),n=r(65400),t=r(5789),o=r(74253),c=r(55673),i=r(41664),d=r.n(i),u=r(67294),p=r(45863),A=r(23733),x=r(35743);a.Z=e=>{let{party:a,subtitle:r}=e,i=a.onlinePlatforms.filter(e=>e.type==p.f.WEBSITE)[0];return(0,l.jsxs)("section",{className:"party-header",children:[(0,l.jsx)(c.Z,{children:(0,l.jsxs)(t.Z,{span:24,children:[(0,l.jsx)("h1",{className:"party-header-title",children:a.name}),a.acronym&&(0,l.jsxs)(u.Fragment,{children:[(0,l.jsx)(o.Z,{}),(0,l.jsx)("p",{className:"party-header-subtitle",children:r})]})]})}),(0,l.jsx)(c.Z,{typeof:"flex",justify:"center",children:(0,l.jsxs)(t.Z,{children:[(0,l.jsx)(s.ZP,{size:200,src:"/party-logos/".concat(a.logoFileName),icon:"user"}),(0,l.jsx)("div",{className:"party-header__program-cta",children:a.hasManifesto&&(0,l.jsx)(n.default,{className:"button--grey party-header__program-button",children:(0,l.jsx)(d(),{href:"/partido/".concat((0,A.A3)(a.acronym,A.uz.TO_URL),"/manifesto"),rel:"noopener",children:"Ver Programa ".concat(a.acronym)})},a.name)}),!a.hasManifesto&&(0,l.jsx)("div",{className:"party-header__program-cta",children:(0,l.jsxs)("p",{children:["Este partido ainda n\xe3o apresentou programa eleitoral. ",(0,l.jsx)("br",{}),"Para qualquer corre\xe7\xe3o entra em contacto connosco via"," ",(0,l.jsx)("a",{href:"mailto:contacto@politicaparatodos.pt",children:"e-mail."})]})})]})}),(0,l.jsxs)(c.Z,{typeof:"flex",justify:"end",align:"middle",className:"party-header__social",children:[(0,l.jsx)("a",{href:i.address,rel:"noopener noreferrer",target:"_blank",children:i.address}),(0,l.jsx)(x.Z,{onlinePlatforms:a.onlinePlatforms,theme:"#c4c4c4"})]})]})}},79171:function(e,a,r){"use strict";var l=r(85893),s=r(84960),n=r(5789),t=r(55673),o=r(53740);r(67294);let{Title:c,Paragraph:i}=o.default;a.Z=e=>{let{spokesperson:a,title:r,children:o}=e;return(0,l.jsx)("section",{className:"party-intro",children:(0,l.jsxs)(t.Z,{children:[(0,l.jsxs)(n.Z,{md:{offset:4,span:16},lg:{offset:0,span:16},children:[(0,l.jsx)(c,{level:2,children:r}),(0,l.jsx)("div",{className:"party-intro__text",children:o})]}),a&&(0,l.jsxs)(n.Z,{span:24,lg:8,className:"party-intro__spokesperson",children:[(0,l.jsx)(s.ZP,{size:160,src:"/party-candidates/".concat(a.profilePhotoFileName),icon:"user"}),(0,l.jsx)(c,{className:"party-intro__spokesperson-name",level:3,children:a.name}),(0,l.jsx)(i,{className:"party-intro__spokesperson-description",children:"Cabe\xe7a de lista"})]})]})})}},33299:function(e,a,r){"use strict";r.r(a),r.d(a,{__N_SSG:function(){return b},default:function(){return N}});var l=r(85893),s=r(16373),n=r(53740),t=r(70336),o=r(65991),c=r(88002),i=r(84960),d=r(5789),u=r(55673),p=r(64749),A=r(41664),x=r.n(A),h=r(67294),m=r(11877),f=r(23733);let{Title:j,Paragraph:R}=n.default,{Option:_}=p.default;var L=e=>{let{candidates:a,partyAcronym:r}=e,[s,n]=(0,h.useState)(m.Dg.ALL);return(0,l.jsxs)("section",{className:"party-candidates",children:[(0,l.jsxs)(u.Z,{children:[(0,l.jsx)(d.Z,{lg:17,span:24,children:(0,l.jsx)(j,{level:2,children:"Cabe\xe7as de Lista"})}),(0,l.jsx)(d.Z,{lg:7,span:24,className:"party-candidates__circles",children:(0,l.jsx)(p.default,{style:{width:"100%"},placeholder:"Escolha o C\xedrculo Eleitoral",onChange:e=>n(null!=e?e:m.Dg.ALL),children:m.R9.map((e,a)=>(0,l.jsx)(_,{value:e.value,children:e.label},a))})}),(0,l.jsx)(d.Z,{lg:24,span:24,children:(0,l.jsx)(R,{children:"Clica na imagem do cabe\xe7a de lista para acederes \xe0 lista completa de candidatos efetivos e suplentes desse c\xedrculo eleitoral."})})]}),(0,l.jsx)(u.Z,{typeof:"flex",className:"party-candidates__list",children:a.filter(e=>(0,m.Jo)(s)===e.electoralCircle||s===m.Dg.ALL).map((e,a)=>(0,l.jsx)(d.Z,{span:12,sm:8,lg:6,xl:4,className:"party-candidate",children:(0,l.jsx)(x(),{className:"avatar-list-item",href:"/partido/".concat((0,f.A3)(r,f.uz.TO_URL),"/candidatos/").concat(encodeURI((0,m.vs)(e.electoralCircle))),legacyBehavior:!1,children:(0,l.jsxs)("div",{className:"party-candidate__content",children:[(0,l.jsx)(i.ZP,{size:120,src:"/party-candidates/".concat(e.profileFileName),icon:"user"}),e.electoralCircle&&(0,l.jsx)(R,{className:"party-candidate__content-circle",children:e.electoralCircle}),e.name&&(0,l.jsx)(j,{className:"party-candidate__content-title",level:3,children:e.name})]})})},a))})]})},O=r(89156),E=r(79171);let{Paragraph:v}=n.default;var b=!0,N=e=>{let{party:a}=e;return(0,l.jsxs)(s.default,{children:[a.name&&(0,l.jsx)(c.Z,{pageTitle:"Pol\xedtica Para Todos - Conhece o programa e os candidatos do ".concat(a.acronym),pageDescription:"Nesta p\xe1gina encontrar\xe1s o programa e os candidatos, por c\xedrculo eleitoral, do ".concat(a.name),socialTitle:"Pol\xedtica Para Todos - Conhece o programa e os candidatos do ".concat(a.acronym),socialDescription:"Nesta p\xe1gina encontrar\xe1s o programa e os candidatos, por c\xedrculo eleitoral, do ".concat(a.name),socialImage:"/party-logos/".concat(a.logoFileName)}),(0,l.jsx)(o.Z,{}),(0,l.jsxs)(s.default.Content,{className:"party-section",children:[(0,l.jsx)(O.Z,{party:a,subtitle:""}),(0,l.jsxs)(E.Z,{spokesperson:null,title:"Descri\xe7\xe3o do Partido",children:[(0,l.jsx)(v,{children:a.description}),a.descriptionSource.split("\n").map((e,a)=>(0,l.jsxs)(v,{children:["Fonte:"," ",(0,l.jsx)("a",{href:e,target:"_blank",rel:"noopener noreferrer",children:"Wikipedia"})]},a))]}),(0,l.jsx)(L,{candidates:a.leadCandidates,partyAcronym:a.acronym})]}),(0,l.jsx)(t.Z,{})]})}},11877:function(e,a,r){"use strict";r.d(a,{Dg:function(){return s},Jo:function(){return o},R9:function(){return t},vs:function(){return c}});var l,s,n=r(26725);(l=s||(s={})).ALL="all",l.ACORES="acores",l.AVEIRO="aveiro",l.BEJA="beja",l.BRAGA="braga",l.BRAGANCA="braganca",l.CASTELO_BRANCO="castelo-branco",l.COIMBRA="coimbra",l.EVORA="evora",l.EUROPA="europa",l.FARO="faro",l.FORA_EUROPA="fora-europa",l.GUARDA="guarda",l.LEIRIA="leiria",l.LISBOA="lisboa",l.MADEIRA="madeira",l.PORTALEGRE="portalegre",l.PORTO="porto",l.SANTAREM="santarem",l.SETUBAL="setubal",l.VIANA_DO_CASTELO="viana-do-castelo",l.VILA_REAL="vila-real",l.VISEU="viseu";let t=[{value:s.ALL,label:"Todos"},{value:s.ACORES,label:n.L5.ACORES},{value:s.AVEIRO,label:n.L5.AVEIRO},{value:s.BEJA,label:n.L5.BEJA},{value:s.BRAGA,label:n.L5.BRAGA},{value:s.BRAGANCA,label:n.L5.BRAGANCA},{value:s.CASTELO_BRANCO,label:n.L5.CASTELO_BRANCO},{value:s.COIMBRA,label:n.L5.COIMBRA},{value:s.EVORA,label:n.L5.EVORA},{value:s.EUROPA,label:n.L5.EUROPA},{value:s.FARO,label:n.L5.FARO},{value:s.FORA_EUROPA,label:n.L5.FORA_DA_EUROPA},{value:s.GUARDA,label:n.L5.GUARDA},{value:s.LEIRIA,label:n.L5.LEIRIA},{value:s.LISBOA,label:n.L5.LISBOA},{value:s.MADEIRA,label:n.L5.MADEIRA},{value:s.PORTALEGRE,label:n.L5.PORTALEGRE},{value:s.PORTO,label:n.L5.PORTO},{value:s.SANTAREM,label:n.L5.SANATREM},{value:s.SETUBAL,label:n.L5.SETUBAL},{value:s.VIANA_DO_CASTELO,label:n.L5.VIANA_DO_CASTELO},{value:s.VILA_REAL,label:n.L5.VILA_REAL},{value:s.VISEU,label:n.L5.VISEU}],o=e=>t.filter(a=>a.value==e)[0].label,c=e=>t.filter(a=>a.label==e)[0].value},23733:function(e,a,r){"use strict";var l,s;function n(e){let a=[...e];return a.forEach((e,r)=>{let l=Math.floor(Math.random()*(r+1));[a[r],a[l]]=[a[l],a[r]]}),a}function t(e,a){switch(a){case l.TO_URL:return e.replace("/","-").toLowerCase();case l.TO_OFFICIAL_ACRONYM:return e.replace("-","/").toUpperCase();default:throw Error("Something went wrong.")}}r.d(a,{A3:function(){return t},b8:function(){return n},uz:function(){return l}}),(s=l||(l={})).TO_URL="URL",s.TO_OFFICIAL_ACRONYM="OFICIAL"}},function(e){e.O(0,[128,749,116,178,740,207,774,888,179],function(){return e(e.s=23900)}),_N_E=e.O()}]);