(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{AXxw:function(t,e,n){"use strict";n.r(e);var r,i=n("ofXK"),o=n("fXoL"),a=n("TY1r"),c=n("kEI4"),s=n("IzEk"),u=n("lJxs"),p=n("actC"),l=((r=function(){function t(t){this.stopService=t}return t.prototype.resolve=function(t,e){return this.stopService.stopLocationsObservable.pipe(Object(s.a)(1),Object(u.a)((function(e){return e.filter((function(e){return e.name.toLowerCase().includes(t.queryParams.q)})).sort((function(t,e){return t.name.localeCompare(e.name)}))})))},t}()).ngInjectableDef=o.Rb({token:r,factory:function(t){return new(t||r)(o.kc(p.a))},providedIn:null}),r),f=n("tyNb"),b=n("5yfJ"),d=n("jhN1"),m=n("j14s"),h=["role","navigation"],v=["role","listitem",3,"routerLink",4,"ngFor","ngForOf"],g=["role","listitem",3,"routerLink"],y=["mat-list-icon",""],O=["mat-line",""],w=function(t){return["/stop",t]};function P(t,e){if(1&t&&(o.bc(0,"a",g),o.bc(1,"mat-list-item"),o.bc(2,"mat-icon",y),o.Qc(3,"place"),o.Zb(),o.bc(4,"h4",O),o.Qc(5),o.Zb(),o.Zb(),o.Zb()),2&t){var n=e.$implicit;o.wc("routerLink",o.Ac(2,w,n.shortName)),o.Hc(5),o.Rc(null==n?null:n.name)}}var C,S,j=[{component:(C=function(){function t(t,e){this.activatedRoute=t,this.titleService=e,this.data="",this.resultObservable=b.a}return Object.defineProperty(t.prototype,"results",{get:function(){return this.resultObservable},enumerable:!0,configurable:!0}),t.prototype.ngOnInit=function(){var t=this;this.searchParamSubscription=this.activatedRoute.queryParams.subscribe((function(e){t.data=e.q?e.q:"",t.titleService.setTitle('Search - "'+t.data+'"')})),this.resultObservable=this.activatedRoute.data.pipe(Object(u.a)((function(t){return t.results?t.results:[]})))},t.prototype.ngOnDestroy=function(){this.searchParamSubscription&&this.searchParamSubscription.unsubscribe()},t}(),C.ngComponentDef=o.Pb({type:C,selectors:[["app-search"]],factory:function(t){return new(t||C)(o.Vb(f.a),o.Vb(d.e))},consts:3,vars:3,template:function(t,e){1&t&&(o.bc(0,"mat-nav-list",h),o.Pc(1,P,6,4,"a",v),o.sc(2,"async"),o.Zb()),2&t&&(o.Hc(1),o.wc("ngForOf",o.tc(2,1,e.results)))},directives:[c.f,i.j,f.h,c.c,a.a,c.b,m.f],pipes:[i.b],styles:["[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:100px}@media (max-width:440px) and (min-width:401px){[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:calc(50px + 1.25*(100vw - 400px))}}@media (max-width:400px){[_nghost-%COMP%] > mat-nav-list[_ngcontent-%COMP%]{padding-top:0}}"]}),C),path:"",resolve:{results:l},runGuardsAndResolvers:"paramsOrQueryParamsChange"}],x=((S=function(){}).ngModuleDef=o.Tb({type:S}),S.ngInjectorDef=o.Sb({factory:function(t){return new(t||S)},imports:[[f.i.forChild(j)],f.i]}),S);f.i.forChild(j),n.d(e,"SearchModule",(function(){return M}));var k,M=((k=function(){}).ngModuleDef=o.Tb({type:k}),k.ngInjectorDef=o.Sb({factory:function(t){return new(t||k)},providers:[l],imports:[[i.c,x,a.b,c.d]]}),k)}}]);