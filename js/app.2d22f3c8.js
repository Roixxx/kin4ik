(function(){"use strict";var e={9635:function(e,t,n){n(2166);var o=n(9242),a=n(3396);const i={class:"container"};function r(e,t,n,o,r,l){const s=(0,a.up)("the-header"),c=(0,a.up)("router-view"),u=(0,a.up)("the-footer");return(0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(s),(0,a._)("div",i,[(0,a.Wm)(c)]),(0,a.Wm)(u)],64)}const l={class:"header bg-dark"},s={class:"container"},c={class:"row align-items-center"},u={class:"col-3 col-md-2"},d=(0,a.Uk)("Kin4ik"),m={class:"col"},v=(0,a.Uk)("Популярные фильмы"),f=(0,a.Uk)("Топ 250");function p(e,t,n,o,i,r){const p=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("header",l,[(0,a._)("div",s,[(0,a._)("div",c,[(0,a._)("div",u,[(0,a.Wm)(p,{class:"text-light header__title fs-3",to:"/"},{default:(0,a.w5)((()=>[d])),_:1})]),(0,a._)("div",m,[(0,a.Wm)(p,{to:"/"},{default:(0,a.w5)((()=>[v])),_:1}),(0,a.Wm)(p,{to:{name:"top250"}},{default:(0,a.w5)((()=>[f])),_:1})])])])])}var g=(0,a.aZ)({name:"TheHeader"}),y=n(89);const h=(0,y.Z)(g,[["render",p]]);var w=h;const b={class:"footer bg-dark py-4 py-lg-5"},_={class:"container"},k={class:"row gy-3"},U={class:"col-2"},S=(0,a.Uk)("Kin4ik"),C={class:"col-lg-3 d-flex flex-column align-items-start"},x=(0,a._)("div",{class:"text-warning fs-6"},"Фильмы",-1),M=(0,a.Uk)("Популярные фильмы"),D=(0,a.Uk)("Топ 250"),j=(0,a._)("div",{class:"col-lg-3"},[(0,a._)("div",{class:"footer__dev"},[(0,a._)("div",null,[(0,a.Uk)("Сайт разработан: "),(0,a._)("a",{class:"text-secondary",target:"_blank",href:"https://github.com/Roixxx"},"Roixxx")]),(0,a._)("div",null,[(0,a.Uk)("Api: "),(0,a._)("a",{class:"text-secondary",href:"https://kinopoiskapiunofficial.tech/",target:"_blank"}," Kinopoisk Api Unofficial ")])])],-1);function O(e,t){const n=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)("footer",b,[(0,a._)("div",_,[(0,a._)("div",k,[(0,a._)("div",U,[(0,a.Wm)(n,{class:"text-light footer__title fs-3",to:"/"},{default:(0,a.w5)((()=>[S])),_:1})]),(0,a._)("div",C,[x,(0,a.Wm)(n,{to:"/"},{default:(0,a.w5)((()=>[M])),_:1}),(0,a.Wm)(n,{to:{name:"top250"}},{default:(0,a.w5)((()=>[D])),_:1})]),j])])])}const Z={},T=(0,y.Z)(Z,[["render",O]]);var q=T,E=(0,a.aZ)({components:{TheFooter:q,TheHeader:w}});const F=(0,y.Z)(E,[["render",r]]);var W=F,A=(0,a.aZ)({setup(e){return(e,t)=>((0,a.wg)(),(0,a.j4)(W))}});const L=A;var R=L,I=n(678),P=n(7139),$=n(4870),V=n(65);const Y={class:"blog-post o-media movie-card card mb-3"},H=(0,a.uE)('<div class="o-media__figure" data-v-412f66f3><span class="skeleton-box" style="width:100px;height:100%;" data-v-412f66f3></span></div><div class="o-media__body" data-v-412f66f3><div class="o-vertical-spacing" data-v-412f66f3><div class="blog-post__headline" data-v-412f66f3><span class="skeleton-box" style="width:55%;" data-v-412f66f3></span></div><p data-v-412f66f3><span class="skeleton-box" style="width:40%;" data-v-412f66f3></span></p><div class="blog-post__meta" data-v-412f66f3><span class="skeleton-box" style="width:70px;" data-v-412f66f3></span></div></div></div>',2),K=[H];function z(e,t){return(0,a.wg)(),(0,a.iD)("div",Y,K)}const N={},B=(0,y.Z)(N,[["render",z],["__scopeId","data-v-412f66f3"]]);var J=B,G=n(2477);const X={key:0,class:"movie-card card mb-3"},Q={class:"row g-0"},ee={class:"col-3 col-sm-2"},te=["src","alt"],ne={class:"col-9 col-sm-10"},oe={class:"card-body"},ae={class:"mb-1 movie-card__text"},ie={class:"mb-1 movie-card__text"},re={class:"movie-card__year"},le={key:0},se={key:1};var ce=(0,a.aZ)({props:{movie:null},setup(e){const t=e;function n(e){return e.map((e=>Object.values(e))).flat().join(", ")}const o=(0,V.oR)(),i=(0,$.iH)(t.movie),r=i.value,l=r.nameRu||r.nameEn||r.nameOriginal,s=r.filmId||r.kinopoiskId,c=+r.rating||+r.ratingKinopoisk,u=n(r.countries)||"",d=n(r.genres)||"",{posterUrlPreview:m,year:v}=r,f=(0,a.Fl)((()=>o.getters.loading));return(e,n)=>{const o=(0,a.up)("router-link");return(0,$.SU)(f)?((0,a.wg)(),(0,a.iD)("li",se,[(0,a.Wm)(J)])):((0,a.wg)(),(0,a.iD)("li",X,[(0,a._)("div",Q,[(0,a._)("div",ee,[(0,a._)("img",{src:(0,$.SU)(m),class:"img-fluid movie-card__img rounded-start",alt:(0,$.SU)(l)},null,8,te)]),(0,a._)("div",ne,[(0,a._)("div",oe,[(0,a.Wm)(o,{class:"card-title",to:{name:"movie",params:{id:(0,$.SU)(s)}}},{default:(0,a.w5)((()=>[(0,a.Uk)((0,P.zw)((0,$.SU)(l)),1)])),_:1},8,["to"]),(0,a._)("div",ae,"Жанр: "+(0,P.zw)((0,$.SU)(d)),1),(0,a._)("div",ie,"Страна: "+(0,P.zw)((0,$.SU)(u)),1),(0,a._)("div",re,[(0,a.Uk)((0,P.zw)((0,$.SU)(v)),1),t.movie.filmLength?((0,a.wg)(),(0,a.iD)("span",le,", "+(0,P.zw)(t.movie.filmLength),1)):(0,a.kq)("",!0)]),(0,a.Wm)(G.Z,{rating:(0,$.SU)(c)},null,8,["rating"])])])])]))}}});const ue=(0,y.Z)(ce,[["__scopeId","data-v-13241caa"]]);var de=ue;function me(e,t,n){let o=[e-2,e-1,e,e+1,e+2];"xs"===n&&(o=[e-1,e,e+1]);const a=o.filter((e=>e>1&&e<t)),i=5===e,r=e===t-4,l=e>5,s=e<t-4;return"xs"!==n&&(i&&a.unshift(2),r&&a.push(t-1),l&&a.unshift("..."),s&&a.push("...")),[1,...a,t]}var ve=n(2913);function fe(){const e=(0,$.iH)(window.innerWidth),t=(0,ve.D)((()=>{e.value=window.innerWidth}),400);(0,a.bv)((()=>window.addEventListener("resize",t))),(0,a.Ah)((()=>window.removeEventListener("resize",t)));const n=(0,a.Fl)((()=>e.value<576?"xs":e.value<768?"sm":"desktop")),o=(0,a.Fl)((()=>e.value));return{width:o,deviceType:n}}function pe(e,t=0){const n=e.getBoundingClientRect(),o=n.top+window.pageYOffset+t;return window.scrollTo({top:o,behavior:"smooth"}),new Promise(((e,t)=>{const n=setTimeout((()=>{t()}),500),a=()=>{window.pageYOffset===o&&(window.removeEventListener("scroll",a),clearTimeout(n),e(null))};window.pageYOffset===o?(clearTimeout(n),e(null)):window.addEventListener("scroll",a)})).catch((e=>e))}const ge={class:"pagination-block"},ye=["href"],he={class:"pagination"},we=["href"],be=["href","onClick","onKeypress"],_e=["href"];var ke=(0,a.aZ)({props:{scrollTo:null},setup(e){const t=e,n=(0,I.tv)(),i=(0,V.oR)(),r=(0,I.yj)(),{deviceType:l}=fe(),s=(0,a.f3)("category"),c=(0,a.Fl)((()=>i.getters.pagesCountVal)),u=(0,a.Fl)((()=>Number(r.query.page)||1)),d=(0,$.iH)(!1),m=(0,a.Fl)((()=>me(u.value,c.value,l.value)));async function v(e,o=!1){if("next"===e&&(e=u.value+1),"prev"===e&&(e=u.value-1),e>c.value)return;if(e<1)return;if("..."===e)return;o||await pe(t.scrollTo,-200);const a={...r.query};a.page=e,await n.push({query:a}),d.value=!0,await i.dispatch("loadMovies",{category:s,append:o}),d.value=!1}return(e,t)=>((0,a.wg)(),(0,a.iD)("div",ge,[(0,$.SU)(u)!==(0,$.SU)(c)?((0,a.wg)(),(0,a.iD)("a",{key:0,href:`?page=${(0,$.SU)(u)+1}`,class:(0,P.C_)(["btn btn-primary w-100 btn-lg",{disabled:d.value}]),onClick:t[0]||(t[0]=(0,o.iM)((e=>v("next",!0)),["prevent"])),onKeypress:t[1]||(t[1]=(0,o.iM)((e=>v("next",!0)),["prevent"]))},(0,P.zw)(d.value?"Загрузка...":"Показать ещё"),43,ye)):(0,a.kq)("",!0),(0,a._)("ul",he,[(0,a._)("li",{class:(0,P.C_)(["page-item",{disabled:1===(0,$.SU)(u)}])},[(0,a._)("a",{class:"page-link",href:"?page="+((0,$.SU)(u)-1),onClick:t[2]||(t[2]=(0,o.iM)((e=>v("prev")),["prevent"])),onKeypress:t[3]||(t[3]=(0,o.iM)((e=>v("prev")),["prevent"]))},"Предыдущая",40,we)],2),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,$.SU)(m),(e=>((0,a.wg)(),(0,a.iD)("li",{class:(0,P.C_)(["page-item",{active:e===(0,$.SU)(u),disabled:"..."===e}]),key:e},[(0,a._)("a",{class:"page-link",href:`?page=${e}`,onClick:(0,o.iM)((t=>v(e)),["prevent"]),onKeypress:(0,o.iM)((t=>v(e)),["prevent"])},(0,P.zw)(e),41,be)],2)))),128)),(0,a._)("li",{class:(0,P.C_)(["page-item",{disabled:(0,$.SU)(u)===(0,$.SU)(c)}])},[(0,a._)("a",{class:"page-link",href:`?page=${(0,$.SU)(u)+1}`,onClick:t[4]||(t[4]=(0,o.iM)((e=>v("next")),["prevent"])),onKeypress:t[5]||(t[5]=(0,o.iM)((e=>v("next")),["prevent"]))},"Следующая",40,_e)],2)])]))}});const Ue=(0,y.Z)(ke,[["__scopeId","data-v-1937b346"]]);var Se=Ue;const Ce={key:0},xe={key:1};var Me=(0,a.aZ)({setup(e){const t=(0,V.oR)(),n=(0,$.iH)(),o=(0,a.f3)("category");t.dispatch("loadMovies",{category:o});const i=(0,a.Fl)((()=>t.getters.movies));return(e,t)=>0!==(0,$.SU)(i).length?((0,a.wg)(),(0,a.iD)("div",Ce,[(0,a._)("ul",{ref_key:"list",ref:n},[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)((0,$.SU)(i),(e=>((0,a.wg)(),(0,a.j4)(de,{key:e.filmId||e.kinopoiskId,movie:e},null,8,["movie"])))),128))],512),(0,a.Wm)(Se,{scrollTo:n.value},null,8,["scrollTo"])])):((0,a.wg)(),(0,a.iD)("div",xe,[((0,a.wg)(),(0,a.iD)(a.HY,null,(0,a.Ko)([1,2,3,4,5],(e=>(0,a.Wm)(J,{key:e}))),64))]))}});const De=Me;var je=De;const Oe="https://kinopoiskapiunofficial.tech/api/v1",Ze="https://kinopoiskapiunofficial.tech/api/v2.2",Te={movies:{top250:{url:`${Ze}/films/top/`,title:"Топ 250"},popular:{url:`${Ze}/films/`,title:"Популярыне фильмы",query:"type=FILM&order=NUM_VOTE"}},singleMovie:{main:{url:`${Ze}/films/`},staff:{url:`${Oe}/staff/`}},filters:{url:`${Ze}/films/filters/`}};var qe=n(6265),Ee=n.n(qe),Fe=n(2482),We=n(3365),Ae=function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Le=class extends We.g4{constructor(...e){super(...e),(0,Fe.Z)(this,"moviesList",[]),(0,Fe.Z)(this,"pagesCount",0)}get pagesCountVal(){return this.pagesCount}get movies(){return this.moviesList}updateMovies(e){if(!e.data)return;const t=e.data.films||e.data.items;this.moviesList=e.append?this.moviesList.concat(t):t,this.pagesCount=e.data.pagesCount||e.data.totalPages}async loadMovies(e){const{append:t}=e,{query:n}=e.category;let{url:o}=e.category;o+=window.location.search,n&&(o+=(window.location.search?"&":"?")+n);const a=await ze(o,{loading:!t,abortPrev:!0});return{data:a,append:t}}};Ae([We.mm],Le.prototype,"updateMovies",null),Ae([(0,We.aU)({commit:"updateMovies"})],Le.prototype,"loadMovies",null),Le=Ae([We.Yl],Le);var Re=Le,Ie=function(e,t,n,o){var a,i=arguments.length,r=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"===typeof Reflect&&"function"===typeof Reflect.decorate)r=Reflect.decorate(e,t,n,o);else for(var l=e.length-1;l>=0;l--)(a=e[l])&&(r=(i<3?a(r):i>3?a(t,n,r):a(t,n))||r);return i>3&&r&&Object.defineProperty(t,n,r),r};let Pe=class extends We.g4{constructor(...e){super(...e),(0,Fe.Z)(this,"movie",null),(0,Fe.Z)(this,"staff",null),(0,Fe.Z)(this,"videos",null),(0,Fe.Z)(this,"similarMovies",null),(0,Fe.Z)(this,"videosWhiteList",["фрагмент","фан-ролик","промо-ролик","телевизионный трейлер","русский ТВ-ролик","международный трейлер","трейлер (русский язык)","русский тв-ролик"])}get getMovie(){return this.movie}get getStaff(){return this.staff}get getVideos(){return this.videos}get getSimilarMovies(){return this.similarMovies?.items}setMovie(e){this.movie=e}setStaff(e){this.staff=e}setVideos(e){this.videos=e.items.filter((e=>{const t=e.name.toLowerCase().trim(),n="YOUTUBE"===e.site,o=this.videosWhiteList.includes(t),a="трейлер"===t||"тизер"===t;return n&&(o||a)}))}setSimilarMovies(e){this.similarMovies=e}async loadMovie(e){const t=Te.singleMovie.main.url+e;return ze(t)}async loadStaff(e){const t=`${Te.singleMovie.staff.url}?filmId=${e}`;return ze(t)}async loadVideos(e){const t=`${Te.singleMovie.main.url}${e}/videos`;return ze(t)}async loadSimilarMovies(e){const t=`${Te.singleMovie.main.url}${e}/similars`;return ze(t)}};Ie([We.mm],Pe.prototype,"setMovie",null),Ie([We.mm],Pe.prototype,"setStaff",null),Ie([We.mm],Pe.prototype,"setVideos",null),Ie([We.mm],Pe.prototype,"setSimilarMovies",null),Ie([(0,We.aU)({rawError:!0,commit:"setMovie"})],Pe.prototype,"loadMovie",null),Ie([(0,We.aU)({rawError:!0,commit:"setStaff"})],Pe.prototype,"loadStaff",null),Ie([(0,We.aU)({rawError:!0,commit:"setVideos"})],Pe.prototype,"loadVideos",null),Ie([(0,We.aU)({rawError:!0,commit:"setSimilarMovies"})],Pe.prototype,"loadSimilarMovies",null),Pe=Ie([(0,We.Yl)({namespaced:!0})],Pe);var $e=Pe;const Ve=(0,V.MT)({state(){return{loading:!1,currentPage:1}},getters:{loading(e){return e.loading}},mutations:{toggleLoading(e){e.loading=!e.loading}},modules:{moviesModule:Re,SingleMovie:$e}});var Ye=Ve;const He={headers:{"X-API-KEY":"17bc2778-ec19-4c92-8a7b-e11508d408a9","Content-Type":"application/json"}};let Ke=new AbortController;async function ze(e,t){t?.abortPrev&&(Ke.abort(),Ke=new AbortController,He.signal=Ke.signal),t?.loading&&Ye.commit("toggleLoading");const n=await Ee().get(e,He).catch((e=>{console.log(e)}));return t?.loading&&Ye.commit("toggleLoading"),n?.data}var Ne=n(9661);const Be={class:"form-check"},Je=["name","id","value","checked"],Ge=["for"];var Xe=(0,a.aZ)({props:{name:null,id:null,value:null,label:null,modelValue:null},setup(e){return(t,n)=>((0,a.wg)(),(0,a.iD)("div",Be,[(0,a._)("input",{class:"form-check-input",type:"radio",name:e.name,id:e.id,value:e.value,checked:e.modelValue==e.value,onInput:n[0]||(n[0]=e=>t.$emit("update:modelValue",e.target.value))},null,40,Je),(0,a._)("label",{class:"form-check-label",for:e.id},(0,P.zw)(e.label),9,Ge)]))}});const Qe=Xe;var et=Qe;const tt={class:"d-lg-none filter-mobile-head"},nt=(0,a.Uk)(" Фильтры "),ot={class:"accordion mb-lg-3",id:"filtersAcc"},at={class:"accordion-header"},it=["data-bs-target"],rt={class:"badge bg-primary rounded-pill ms-2"},lt=["id"],st={class:"accordion-body"},ct={key:0,class:"filter__list"},ut={key:1,class:"filter__show-mobile d-lg-none"};var dt=(0,a.aZ)({props:{isOpened:{type:Boolean}},async setup(e){let t,n;const o=(0,V.oR)(),i=(0,I.tv)(),r=(0,I.yj)(),l=([t,n]=(0,a.mv)((()=>ze(Te.filters.url))),t=await t,n(),t),s=(0,a.Fl)((()=>o.getters.loading)),c=(0,a.f3)("category");function u(e){return e.filter((e=>Object.values(e).some((e=>e.length>0))))}const d=(0,$.iH)([{name:"Жанр",name_en:"genres",value:"genre",data:u(l.genres),type:"RadioInput",model:r.query.genres||null},{name:"Страна",name_en:"countries",value:"country",data:l.countries.slice(0,35),type:"RadioInput",model:r.query.countries||null},{name:"Год",name_en:"year",value:"year",data:[1],type:"Range",min:1950,max:(new Date).getFullYear(),modelDefault:[1980,(new Date).getFullYear()],model:(()=>r.query.yearFrom?[r.query.yearFrom,r.query.yearTo]:[1980,(new Date).getFullYear()])()},{name:"Рейтинг",name_en:"rating",value:"rating",data:[1],type:"Range",min:2,max:10,modelDefault:[2,10],model:r.query.ratingFrom?[r.query.ratingFrom,r.query.ratingTo]:[2,10]}]);function m(){d.value.forEach((e=>{e.model=e.modelDefault||null}))}const v=(0,a.Fl)((()=>d.value.some((e=>"Range"===e.type&&Array.isArray(e.model)?e.modelDefault?.join("")!==e.model?.join(""):e.model))));function f(){const e={};return d.value.forEach((t=>{if(t.model){if("Range"===t.type&&Array.isArray(t.model)){if(t.modelDefault?.join("")===t.model?.join(""))return;return e[`${t.name_en}From`]=t.model[0],void(e[`${t.name_en}To`]=t.model[1])}e[t.name_en]=Number(t.model)}})),e}return(0,a.YP)(d,(async()=>{const e=r.query.page,t=e?{page:e}:null;await i.push({query:{...f(),...t}}),o.dispatch("loadMovies",{category:c})}),{deep:!0}),(t,n)=>((0,a.wg)(),(0,a.iD)("aside",{class:(0,P.C_)(["filter",{"filter-loading":(0,$.SU)(s),"filter-opened":e.isOpened}])},[(0,a._)("div",tt,[(0,a._)("button",{onClick:n[0]||(n[0]=e=>t.$emit("close")),class:"btn filter-back"}),nt,(0,$.SU)(v)?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn btn-secondary py-1",onClick:m},"Сбросить ")):(0,a.kq)("",!0)]),(0,a._)("div",ot,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(d.value,(e=>((0,a.wg)(),(0,a.iD)("div",{class:"accordion-item",key:e.name},[(0,a._)("div",at,[(0,a._)("button",{class:"accordion-button collapsed",type:"button","data-bs-toggle":"collapse","data-bs-target":`#${e.name_en}`,"aria-expanded":"false","aria-controls":"genres"},[(0,a.Uk)((0,P.zw)(e.name)+" ",1),(0,a._)("span",rt,(0,P.zw)(e.data.length),1)],8,it)]),(0,a._)("div",{id:e.name_en,"data-bs-parent":"#filtersAcc",class:"accordion-collapse collapse"},[(0,a._)("div",st,["RadioInput"===e.type?((0,a.wg)(),(0,a.iD)("div",ct,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.data,((t,n)=>((0,a.wg)(),(0,a.j4)(et,{key:e.value+n,name:e.name_en,id:e.value+n,value:t.id,label:t[e.value],modelValue:e.model,"onUpdate:modelValue":t=>e.model=t},null,8,["name","id","value","label","modelValue","onUpdate:modelValue"])))),128))])):(0,a.kq)("",!0),"Range"===e.type?((0,a.wg)(),(0,a.j4)((0,$.SU)(Ne.Z),{key:1,merge:"year"===e.name_en?15:-1,min:e.min,max:e.max,class:"filter__range",modelValue:e.model,"onUpdate:modelValue":t=>e.model=t},null,8,["merge","min","max","modelValue","onUpdate:modelValue"])):(0,a.kq)("",!0)])],8,lt)])))),128))]),(0,$.SU)(v)?((0,a.wg)(),(0,a.iD)("button",{key:0,class:"btn btn-secondary w-100 d-none d-lg-block",onClick:m},"Сбросить фильтры ")):(0,a.kq)("",!0),(0,$.SU)(v)?((0,a.wg)(),(0,a.iD)("div",ut,[(0,a._)("button",{class:"btn btn-primary w-100",onClick:n[1]||(n[1]=e=>t.$emit("close"))},"Показать фильмы")])):(0,a.kq)("",!0)],2))}});const mt=(0,y.Z)(dt,[["__scopeId","data-v-fd52fec0"]]);var vt=mt;const ft={class:"row section"},pt={class:"mb-3 mb-lg-4"},gt={class:"col-lg-8"},yt=(0,a._)("div",{class:"d-none d-lg-block col"},null,-1),ht={key:0,class:"col-lg-3"};var wt=(0,a.aZ)({props:{filters:{type:Boolean}},setup(e){const t=(0,$.iH)(!1),n=(0,a.f3)("category");function o(){t.value=!0,document.body.style.overflow="hidden"}function i(){t.value=!1,document.body.style.overflow=""}return(r,l)=>((0,a.wg)(),(0,a.iD)("div",ft,[(0,a._)("h2",pt,(0,P.zw)((0,$.SU)(n).title),1),(0,a._)("div",gt,[e.filters?((0,a.wg)(),(0,a.iD)("button",{key:0,onClick:o,class:"btn btn-primary w-100 mb-4 d-lg-none"}," Фильтры ")):(0,a.kq)("",!0),(0,a.Wm)(je)]),yt,e.filters?((0,a.wg)(),(0,a.iD)("div",ht,[((0,a.wg)(),(0,a.j4)(a.n4,null,{default:(0,a.w5)((()=>[(0,a.Wm)(vt,{isOpened:t.value,onClose:i},null,8,["isOpened"])])),_:1}))])):(0,a.kq)("",!0)]))}});const bt=wt;var _t=bt;const kt={key:0,class:"toast mb-5 align-items-center fade show w-100",role:"alert","aria-live":"assertive","aria-atomic":"true"},Ut={class:"d-flex"},St={class:"toast-body"};var Ct=(0,a.aZ)({props:{msg:null},setup(e){const t=(0,a.Fl)((()=>!localStorage.getItem("toastClosed")));function n(){localStorage.setItem("toastClosed","true")}return(o,i)=>(0,$.SU)(t)?((0,a.wg)(),(0,a.iD)("div",kt,[(0,a._)("div",Ut,[(0,a._)("div",St,(0,P.zw)(e.msg),1),(0,a._)("button",{type:"button",class:"btn-close me-2 m-auto","data-bs-dismiss":"toast","aria-label":"Close",onClick:n})])])):(0,a.kq)("",!0)}});const xt=(0,y.Z)(Ct,[["__scopeId","data-v-75fda80f"]]);var Mt=xt,Dt=(0,a.aZ)({setup(e){const t="В настоящее время у API популряных фильмов имеются проблемы. В сввзяи с этим время загрузки фильмов может достигать 40 сек.";return(0,a.JJ)("category",Te.movies.popular),(e,n)=>((0,a.wg)(),(0,a.iD)(a.HY,null,[(0,a.Wm)(Mt,{msg:t}),(0,a.Wm)(_t,(0,a.dG)(e.$attrs,{filters:!0}),null,16)],64))}});const jt=Dt;var Ot=jt,Zt=(0,a.aZ)({setup(e){return(0,a.JJ)("category",Te.movies.top250),(e,t)=>((0,a.wg)(),(0,a.j4)(_t))}});const Tt=Zt;var qt=Tt;const Et=[{path:"/:page?:countries?",name:"home",component:Ot,props:!0},{path:"/movies/top250/:page?",name:"top250",component:qt},{path:"/movie/:id",name:"movie",component:()=>n.e(929).then(n.bind(n,9442))}],Ft=(0,I.p7)({history:(0,I.PO)(),routes:Et,linkActiveClass:"active",scrollBehavior(e,t,n){return n&&"movie"!==e.name?n:{top:0}}});var Wt=Ft;(0,o.ri)(R).use(Ye).use(Wt).mount("#app")},2477:function(e,t,n){n.d(t,{Z:function(){return u}});var o=n(3396),a=n(6960),i=n.n(a),r=n(4870),l=(0,o.aZ)({props:{rating:null},setup(e){const t=e,n=(0,r.iH)();return(0,o.bv)((()=>{if(!n.value)return;const e=new(i().Circle)(n.value,{color:"#48ad0a",strokeWidth:7,trailWidth:7,text:{value:t.rating.toString()}});e.set(t.rating/10)})),(e,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"movie__rating",ref_key:"ratingEl",ref:n},null,512))}}),s=n(89);const c=(0,s.Z)(l,[["__scopeId","data-v-ea653b4e"]]);var u=c}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(u=0;u<e.length;u++){o=e[u][0],a=e[u][1],i=e[u][2];for(var l=!0,s=0;s<o.length;s++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(l=!1,i<r&&(r=i));if(l){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}i=i||0;for(var u=e.length;u>0&&e[u-1][2]>i;u--)e[u]=e[u-1];e[u]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/movie.58882c90.js"}}(),function(){n.miniCssF=function(e){return"css/movie.a618629b.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="kin4ik:";n.l=function(o,a,i,r){if(e[o])e[o].push(a);else{var l,s;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==o||d.getAttribute("data-webpack")==t+i){l=d;break}}l||(s=!0,l=document.createElement("script"),l.charset="utf-8",l.timeout=120,n.nc&&l.setAttribute("nonce",n.nc),l.setAttribute("data-webpack",t+i),l.src=o),e[o]=[a];var m=function(t,n){l.onerror=l.onload=null,clearTimeout(v);var a=e[o];if(delete e[o],l.parentNode&&l.parentNode.removeChild(l),a&&a.forEach((function(e){return e(n)})),t)return t(n)},v=setTimeout(m.bind(null,void 0,{type:"timeout",target:l}),12e4);l.onerror=m.bind(null,l.onerror),l.onload=m.bind(null,l.onload),s&&document.head.appendChild(l)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/kin4ik/"}(),function(){var e=function(e,t,n,o){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(i){if(a.onerror=a.onload=null,"load"===i.type)n();else{var r=i&&("load"===i.type?"missing":i.type),l=i&&i.target&&i.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+l+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=r,s.request=l,a.parentNode.removeChild(a),o(s)}};return a.onerror=a.onload=i,a.href=t,document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var a=n[o],i=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(i===e||i===t))return a}var r=document.getElementsByTagName("style");for(o=0;o<r.length;o++){a=r[o],i=a.getAttribute("data-href");if(i===e||i===t)return a}},o=function(o){return new Promise((function(a,i){var r=n.miniCssF(o),l=n.p+r;if(t(r,l))return a();e(o,l,a,i)}))},a={143:0};n.f.miniCss=function(e,t){var n={929:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=o(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,o){var a=n.o(e,t)?e[t]:void 0;if(0!==a)if(a)o.push(a[2]);else{var i=new Promise((function(n,o){a=e[t]=[n,o]}));o.push(a[2]=i);var r=n.p+n.u(t),l=new Error,s=function(o){if(n.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var i=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;l.message="Loading chunk "+t+" failed.\n("+i+": "+r+")",l.name="ChunkLoadError",l.type=i,l.request=r,a[1](l)}};n.l(r,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],l=o[1],s=o[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in l)n.o(l,a)&&(n.m[a]=l[a]);if(s)var u=s(n)}for(t&&t(o);c<r.length;c++)i=r[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(u)},o=self["webpackChunkkin4ik"]=self["webpackChunkkin4ik"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(9635)}));o=n.O(o)})();
//# sourceMappingURL=app.2d22f3c8.js.map