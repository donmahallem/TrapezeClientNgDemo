(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{BA7n:function(t,n,e){"use strict";e.r(n);var o,c=e("ofXK"),i=e("fXoL"),r=e("kEI4"),a=e("TY1r"),s=e("3uU/"),p=[1,"header"],b=((o=function(){}).ngComponentDef=i.Pb({type:o,selectors:[["app-common-error"]],factory:function(t){return new(t||o)},consts:7,vars:0,template:function(t,n){1&t&&(i.bc(0,"div",p),i.bc(1,"mat-icon"),i.Qc(2,"help_outline"),i.Zb(),i.Zb(),i.bc(3,"h3"),i.Qc(4,"Error Occured"),i.Zb(),i.bc(5,"p"),i.Qc(6,"An error occured while performing an action."),i.Zb())},directives:[a.a],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-flow:column;height:100%;background:#f9f9f9}.header[_ngcontent-%COMP%]{position:relative;height:calc(100vw / 4 * 3);width:100%;max-height:250px;min-height:150px;background:#999}.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:64px;height:64px;font-size:64px}"]}),o),h=e("tyNb"),u=e("lJxs"),f=e("UsLG"),l=[1,"info",3,"ngSwitch"],d=[4,"ngSwitchCase"],g=[4,"ngSwitchDefault"];function m(t,n){1&t&&(i.Yb(0),i.bc(1,"p"),i.Qc(2,"The passage could not be found. It either expired or has yet to start."),i.Zb(),i.bc(3,"p"),i.Qc(4,"Please select another passage."),i.Zb(),i.Xb())}function w(t,n){1&t&&(i.Yb(0),i.bc(1,"p"),i.Qc(2,"The requested vehicle could not be found. It might not be active at the moment."),i.Zb(),i.Xb())}function v(t,n){1&t&&(i.Yb(0),i.bc(1,"p"),i.Qc(2,"The requested resource can not be found."),i.Zb(),i.Xb())}var y,x=((y=function(t){this.route=t,this.errorTypeObservable=this.route.queryParams.pipe(Object(u.a)((function(t){return t.type?t.type:f.a.UNKNOWN})))}).ngComponentDef=i.Pb({type:y,selectors:[["app-not-found-msg-switch"]],factory:function(t){return new(t||y)(i.Vb(h.a))},consts:5,vars:5,template:function(t,n){1&t&&(i.bc(0,"div",l),i.sc(1,"async"),i.Pc(2,m,5,0,"ng-container",d),i.Pc(3,w,3,0,"ng-container",d),i.Pc(4,v,3,0,"ng-container",g),i.Zb()),2&t&&(i.wc("ngSwitch",i.tc(1,3,n.errorTypeObservable)),i.Hc(2),i.wc("ngSwitchCase",1),i.Hc(3),i.wc("ngSwitchCase",2))},directives:[c.m,c.n,c.o],pipes:[c.b],styles:["[_nghost-%COMP%]{display:block}"]}),y),P=e("j14s"),C=[1,"header"],Z=[1,"content"],O=["role","list"],M=["role","listitem",3,"routerLink",4,"ngFor","ngForOf"],Q=["role","listitem",3,"routerLink"],_=["matListIcon",""],k=["matLine",""],S=function(t){return[t]};function T(t,n){if(1&t&&(i.bc(0,"mat-list-item",Q),i.bc(1,"mat-icon",_),i.Qc(2),i.Zb(),i.bc(3,"h3",k),i.Qc(4),i.Zb(),i.Zb()),2&t){var e=n.$implicit;i.wc("routerLink",i.Ac(3,S,e.path)),i.Hc(2),i.Rc(e.icon),i.Hc(4),i.Rc(e.title)}}var D,L,H=[{component:b,path:""},{component:(D=function(){this.endpoints=[{icon:"home",path:"/",title:"Home"},{icon:"place",path:"/stops",title:"Stops"}]},D.ngComponentDef=i.Pb({type:D,selectors:[["app-not-found"]],factory:function(t){return new(t||D)},consts:12,vars:1,template:function(t,n){1&t&&(i.bc(0,"div",C),i.bc(1,"mat-icon"),i.Qc(2,"help_outline"),i.Zb(),i.Zb(),i.bc(3,"div",Z),i.bc(4,"h3"),i.Qc(5,"Not Found"),i.Zb(),i.Wb(6,"app-not-found-msg-switch"),i.Wb(7,"mat-divider"),i.bc(8,"h5"),i.Qc(9,"You might want to go to:"),i.Zb(),i.bc(10,"mat-nav-list",O),i.Pc(11,T,5,5,"mat-list-item",M),i.Zb(),i.Zb()),2&t&&(i.Hc(11),i.wc("ngForOf",n.endpoints))},directives:[a.a,x,s.a,r.f,c.j,r.c,h.g,r.b,P.f],styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;flex-flow:column;height:100%;background:#f9f9f9}.header[_ngcontent-%COMP%]{position:relative;height:calc(100vw / 4 * 3);width:100%;max-height:250px;min-height:150px;background:#999}.header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%]{position:absolute;top:0;right:0;bottom:0;left:0;margin:auto;width:64px;height:64px;font-size:64px}div.content[_ngcontent-%COMP%]{margin:10px 20px}"]}),D),path:"not-found"},{path:"**",redirectTo:"not-found"}],I=((L=function(){}).ngModuleDef=i.Tb({type:L}),L.ngInjectorDef=i.Sb({factory:function(t){return new(t||L)},imports:[[h.i.forChild(H)],h.i]}),L);h.i.forChild(H),e.d(n,"ErrorModule",(function(){return N}));var j,N=((j=function(){}).ngModuleDef=i.Tb({type:j}),j.ngInjectorDef=i.Sb({factory:function(t){return new(t||j)},providers:[],imports:[[I,c.c,r.d,a.b,s.b]]}),j)}}]);