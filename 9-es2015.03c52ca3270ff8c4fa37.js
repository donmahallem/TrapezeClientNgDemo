(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{AXxw:function(t,e,n){"use strict";n.r(e);var r=n("ofXK"),s=n("fXoL"),a=n("TY1r"),i=n("kEI4"),c=n("IzEk"),o=n("lJxs"),l=n("actC");let u=(()=>{class t{constructor(t){this.stopService=t}resolve(t,e){return this.stopService.stopLocationsObservable.pipe(Object(c.a)(1),Object(o.a)(e=>e.filter(e=>e.name.toLowerCase().includes(t.queryParams.q)).sort((t,e)=>t.name.localeCompare(e.name))))}}return t.ngInjectableDef=s.Rb({token:t,factory:function(e){return new(e||t)(s.kc(l.a))},providedIn:null}),t})();var p=n("tyNb"),b=n("5yfJ"),h=n("jhN1"),d=n("j14s");const m=["role","navigation"],f=["role","listitem",3,"routerLink",4,"ngFor","ngForOf"],v=["role","listitem",3,"routerLink"],g=["mat-list-icon",""],w=["mat-line",""],O=function(t){return["/stop",t]};function y(t,e){if(1&t&&(s.bc(0,"a",v),s.bc(1,"mat-list-item"),s.bc(2,"mat-icon",g),s.Qc(3,"place"),s.Zb(),s.bc(4,"h4",w),s.Qc(5),s.Zb(),s.Zb(),s.Zb()),2&t){const t=e.$implicit;s.wc("routerLink",s.Ac(2,O,t.shortName)),s.Hc(5),s.Rc(null==t?null:t.name)}}const P=[{component:(()=>{class t{constructor(t,e){this.activatedRoute=t,this.titleService=e,this.data="",this.resultObservable=b.a}get results(){return this.resultObservable}ngOnInit(){this.searchParamSubscription=this.activatedRoute.queryParams.subscribe(t=>{this.data=t.q?t.q:"",this.titleService.setTitle('Search - "'+this.data+'"')}),this.resultObservable=this.activatedRoute.data.pipe(Object(o.a)(t=>t.results?t.results:[]))}ngOnDestroy(){this.searchParamSubscription&&this.searchParamSubscription.unsubscribe()}}return t.ngComponentDef=s.Pb({type:t,selectors:[["app-search"]],factory:function(e){return new(e||t)(s.Vb(p.a),s.Vb(h.e))},consts:3,vars:3,template:function(t,e){1&t&&(s.bc(0,"mat-nav-list",m),s.Pc(1,y,6,4,"a",f),s.sc(2,"async"),s.Zb()),2&t&&(s.Hc(1),s.wc("ngForOf",s.tc(2,1,e.results)))},directives:[i.f,r.j,p.h,i.c,a.a,i.b,d.f],pipes:[r.b],styles:["[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:100px}@media (max-width:440px) and (min-width:401px){[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:calc(50px + 1.25*(100vw - 400px))}}@media (max-width:400px){[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:0}}"]}),t})(),path:"",resolve:{results:u},runGuardsAndResolvers:"paramsOrQueryParamsChange"}];let C=(()=>{class t{}return t.ngModuleDef=s.Tb({type:t}),t.ngInjectorDef=s.Sb({factory:function(e){return new(e||t)},imports:[[p.i.forChild(P)],p.i]}),t})();p.i.forChild(P),n.d(e,"SearchModule",(function(){return S}));let S=(()=>{class t{}return t.ngModuleDef=s.Tb({type:t}),t.ngInjectorDef=s.Sb({factory:function(e){return new(e||t)},providers:[u],imports:[[r.c,C,a.b,i.d]]}),t})()}}]);