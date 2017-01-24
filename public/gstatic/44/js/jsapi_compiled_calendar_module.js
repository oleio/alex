google.charts.packageLoadedCallback("calendar", 'var dXa="noDataPattern.color",eXa="noDataPattern.backgroundColor",fXa="monthpath",gXa="gridpath",hXa="colorAxis.values",iXa="colorAxis.minValue",jXa="colorAxis.maxValue",kXa="colorAxis.colors",lXa="calendar.yearLabel",mXa="calendar.unusedMonthOutlineColor",nXa="calendar.underYearSpace",oXa="calendar.underMonthSpace",pXa="calendar.monthOutlineColor",qXa="calendar.monthLabel",rXa="calendar.focusedCellColor",sXa="calendar.daysOfWeek",tXa="calendar.dayOfWeekRightSpace",uXa="calendar.dayOfWeekLabel",vXa=\n"calendar.cellSize",wXa="calendar.cellColor",xXa="SMTWTFS",yXa="DATE",DW="2222",zXa="16",AXa="#f8f8f8",BXa="#dfdfdf",CXa="#ddd",DXa="#c9c9c9",EXa="#888";function EW(a,b){YJ.call(this);this.wa=a;this.na=null;this.Gi=b;this.W_=null;this.bV=new Sh;this.QY=new Kh;this.nd=new fl(fl.Format.LONG_DATE);this.C9=!1;rk(Gu)}O(EW,YJ);I=EW.prototype;\nI.dY=function(a){var b=NJ(a.bb()),c=[];P(this.wa.labels,function(a,e){var f=b.gs(a.text,a.x,a.y,a.width,a.angle,a.Cz,a.Dz,a.style),g=GJ(GJ(new EJ(sv),Ov,e),Sv,vA);c.push(new XJ(f,g,Jz))},this);P(this.wa.Ora,function(a,e){var f=b.Lc(a.Hc,a.brush),g=GJ(GJ(new EJ(sv),Ov,e),Sv,gXa);c.push(new XJ(f,g,Jz))},this);P(this.wa.rwa,function(a,e){var f=b.Lc(a.Hc,a.brush),g=GJ(GJ(new EJ(sv),Ov,e),Sv,fXa);c.push(new XJ(f,g,ez))},this);return c};\nI.hB=function(a){var b=NJ(a.bb()),c=[];this.na&&(this.wa.Cg?TK(this.na,this.Gi.getContainer()):c.push(new XJ(WK(this.na,b).j(),new EJ(Vv),Gp)),this.na=null);P(this.wa.cells,function(a){if(a.Jl){a.Jl=!1;var e=GJ(GJ(new EJ(Nv),yXa,a.za.getTime()),Sv,a.za.getTime());null!=a.KU&&GJ(e,Ov,a.KU);this.QY.set(a.za.getTime(),a);var f=a.brush,g=WC,h=e.ke();if(e.equals(this.W_)||this.bV.contains(h))f=this.wa.Rqa.clone(),f.Ze(a.fillColor),f.Cf(1),g=cw;a=b.Gl(a.x,a.y,a.width,a.height,f);c.push(new XJ(a,e,g))}},\nthis);return c};I.$b=function(){return this.wa.size};I.um=function(a,b,c){switch(b.type){case Gp:this.Fy(a,c);break;case Yc:FW(this,this.W_);FW(this,a);this.W_=c?a:null;break;case xp:Eh(this.bV,function(a){FW(this,JJ(a))},this),FW(this,a),c?this.bV.add(a.ke()):this.bV.remove(a.ke())}};function FW(a,b){null!=b&&(a.QY.get(b.sb.SUBTYPE).Jl=!0)}\nI.Fy=function(a,b){this.Gi.clear();this.na=null;if(b){var c=this.QY.get(a.sb.SUBTYPE),d=this.wa.size,d=new ij(0,d.width,d.height,0),e=null,e=new R(c.x,c.y),f=mi(e,new R(-1,1));if(c.xa&&this.wa.Cg)e={html:{name:y,content:c.xa.content,properties:{className:Hz}},YH:c.xa.oi,kL:f,anchor:e,YG:d,spacing:20,margin:5};else{var g={entries:[]},h=this.nd.format(c.za);g.entries.push(fL(c.xa?c.xa.content:k+h+(null!=c.value?bv+c.value:k),this.wa.tp));e=hL(g,this.wa.yc,!1,e,d,f,void 0,this.wa.Cg)}this.na=e}};function GW(a,b){this.zia=a;this.XB=b}new Zk(0,0,1);new Zk(9999,11,31);GW.prototype.getStartDate=function(){return this.zia};GW.prototype.contains=function(a){return a.valueOf()>=this.zia.valueOf()&&a.valueOf()<=this.XB.valueOf()};function HW(a,b,c,d,e,f,g){a=L(a)?Date.UTC(a,b||0,c||1,d||0,e||0,f||0,g||0):a?a.getTime():bf();this.za=new Date(a)}O(HW,cl);I=HW.prototype;I.clone=function(){var a=new HW(this.za);a.dC=this.dC;a.eC=this.eC;return a};I.add=function(a){(a.years||a.months)&&Zk.prototype.add.call(this,new Yk(a.years,a.months));a=1E3*(a.seconds+60*(a.minutes+60*(a.hours+24*a.days)));this.za=new Date(this.za.getTime()+a)};I.getTimezoneOffset=function(){return 0};I.getFullYear=cl.prototype.getUTCFullYear;I.getMonth=cl.prototype.getUTCMonth;\nI.getDate=cl.prototype.getUTCDate;I.getHours=cl.prototype.getUTCHours;I.getMinutes=cl.prototype.getUTCMinutes;I.getSeconds=cl.prototype.getUTCSeconds;I.getMilliseconds=cl.prototype.getUTCMilliseconds;I.getDay=cl.prototype.getUTCDay;I.setFullYear=cl.prototype.setUTCFullYear;I.setMonth=cl.prototype.setUTCMonth;I.setDate=cl.prototype.setUTCDate;I.setHours=cl.prototype.setUTCHours;I.setMinutes=cl.prototype.setUTCMinutes;I.setSeconds=cl.prototype.setUTCSeconds;I.setMilliseconds=cl.prototype.setUTCMilliseconds;function IW(a,b,c,d){this.r=a;this.g=b;this.b=c;this.a=d}var FXa=new IW(0,0,0,1);function GXa(a){if(!a)return null;try{var b=Hk(Ck(a).Ub);return new IW(b[0]/255,b[1]/255,b[2]/255,1)}catch(c){return null}}IW.prototype.qp=function(){return[this.r,this.g,this.b,this.a]};IW.prototype.multiply=function(a){return new IW(ph(this.r*a,0,1),ph(this.g*a,0,1),ph(this.b*a,0,1),this.a)};IW.prototype.equals=function(a){return!!a&&a.r==this.r&&a.g==this.g&&a.b==this.b&&a.a==this.a};var HXa=["#e7711c",Ae,"#4374e0"];function IXa(){this.U1=[0];this.Db=[FXa];this.Fwa=GXa(rma)}I=IXa.prototype;I.R5=function(a){this.U1=Array.prototype.slice.call(arguments);return this};I.fr=function(a){for(var b=[],c=0,d=arguments.length;c<d;++c)b.push(JXa(arguments[c]));this.Db=b;return this};I.getColors=function(){return this.Db};function JXa(a){return a instanceof IW?a:a instanceof Array?4<=a.length?new IW(a[0],a[1],a[2],a[3]):new IW(a[0],a[1],a[2],1):GXa(a)}\nI.color=function(a){if(null===a||void 0===a||isNaN(a))return this.Fwa;var b=this.U1;if(a<=b[0])return this.Db[0];for(var c=0,d=b.length-1;c<d;++c)if(b[c]<a&&a<=b[c+1]){var d=this.Db[c],e=this.Db[c+1];a=(a-b[c])/(b[c+1]-b[c]);return new IW(rh(d.r,e.r,a),rh(d.g,e.g,a),rh(d.b,e.b,a),rh(d.a,e.a,a))}return this.Db[this.Db.length-1]};I.pq=function(a){return JW(this.color(a))};function JW(a){a=a.qp();for(var b=0;3>b;++b)a[b]=Math.floor(255*a[b]);return Fk(a)};function KW(a){this.Or=new ni(100,10);this.lK=null;this.vc=new R;this.wh=a}KW.prototype.$E=function(a,b){this.vc=new R(a,b);return this};KW.prototype.$b=function(){return new ni(this.Or.width,this.Or.height+this.lK.fontSize+3)};\nKW.prototype.nh=function(){for(var a=[],b=this.wh.getColors(),c=b.length-1,d=this.Or.width/c,e=0;e<c;++e){var f=jm(fxa),g={gg:JW(b[e]),Jf:JW(b[e+1]),Nq:null,Oq:null,x1:0,x2:1,y1:0,y2:0,Cr:!0,gF:!1};f.mg=g;var g=new $E,h=this.vc.x+e*d,l=this.vc.y+this.lK.fontSize+3;g.move(h,l);h+=d;g.ya(h,l);l+=this.Or.height;g.ya(h,l);h-=d;g.ya(h,l);g.close();a.push({brush:f,Hc:g})}f=km(xu,1);g=new $E;h=this.vc.x;l=this.vc.y+this.lK.fontSize+3;g.move(h,l);h+=this.Or.width;g.ya(h,l);l+=this.Or.height;g.ya(h,l);h-=\nthis.Or.width;g.ya(h,l);g.close();a.push({brush:f,Hc:g});b=this.FY();return{paths:a,labels:b}};KW.prototype.FY=function(){var a=[],b=this.vc.x,c=this.vc.y,d=this.wh.U1,e=d.length,f=this.Or.width/(e-1);P(d,function(d,h){var l=Dx;0==h?l=CD:h==e-1&&(l=Vy);a.push({angle:0,Cz:l,Dz:CD,style:this.lK,text:k+d,width:1,x:b+f*h,y:c})},this);return a};function KXa(a,b,c){this.vc=new R;this.xw=c;this.ug=a;this.uW=b}I=KXa.prototype;I.$E=function(a,b){this.vc=new R(a,b);return this};I.setTitle=function(a){this.ug=a;return this};I.$b=function(){var a=this.uW.fontSize,b=this.xw(this.ug,this.uW).width;return new ni(b,a)};I.nh=function(){return{paths:[],labels:this.FY()}};I.FY=function(){var a=[];a.push({angle:0,Cz:CD,Dz:CD,style:this.uW,text:this.ug,width:1,x:this.vc.x,y:this.vc.y});return a};function LW(a,b,c,d){this.G=a;this.m=b;this.be=c;this.eb=d;this.ib=(new qs).Jc(a);this.zP=kn(b,uXa);this.RK=kn(b,qXa);this.gX=kn(b,lXa);this.kpa=V(b,tXa);this.vBa=V(b,oXa);this.uBa=6;this.oja=V(b,nXa);this.haa=Lm(b,sXa);this.Una=jn(b,wXa);this.nfa=jn(b,pXa);this.nfa.Ze(B);this.wja=jn(b,mXa);this.wja.Ze(B);a=this.yu=V(b,vXa);b=this.gX;if(null==b.fontSize){c=7*a;d=this.be;b.fontSize=3*a;var e=d(DW,b);if(e.width<c){for(var f=0;e.width<c;)f=b.fontSize,b.fontSize++,e=d(DW,b);b.fontSize=f}else for(;e.width>\nc;)b.fontSize--,e=d(DW,b)}b=this.zP;null==b.fontSize&&(b.fontSize=Math.max(a-6,5));a=this.RK;null==a.fontSize&&(a.fontSize=b.fontSize+2);this.Z7=LXa(this);this.Bm=1;this.fz=this.gX.fontSize+this.oja+this.Z7+this.kpa}function MXa(a,b,c,d){var e=new HW;e.setTime(a.getTime()-1);e=c(e);d(e);for(a=[];e<b;)a.push(new HW(e)),d(e);return a}function NXa(a,b){return MXa(a,b,function(a){return new HW(a.getFullYear(),a.getMonth(),a.getDate())},function(a){a.setDate(a.getDate()+1)})}\nfunction OXa(a,b){return MXa(a,b,function(a){return new HW(a.getFullYear(),a.getMonth(),1)},function(a){a.setMonth(a.getMonth()+1)})}\nLW.prototype.nh=function(){var a=PXa(this),b,c=a.LBa,d=c.end-c.start,d=this.OS(d?d:1),d=Math.pow(10,d-1);b=new Ql(Math.floor(c.start/d)*d,Math.ceil(c.end/d)*d);var c=this.m,d=c.Y(kXa,null,dn)||HXa,e=V(c,iXa,b.start);b=V(c,jXa,b.end);var f=c.Y(hXa,null,Cm),g=0>e&&0<b;if(2>d.length)throw Error("palette.colors must contain at least two values.");2==d.length&&(g=!1);c=new IXa;if(null!=f){if(d.length!=f.length)throw Error("colorAxis.colors must be the same length as colorAxis.values.");e=c.R5.apply(c,\nf)}else g?(e=Math.max(Math.abs(e),Math.abs(b)),e=c.R5(-e,0,e),d=d.slice(0,3)):(d=0>e?d.slice(0,2):d.slice(-2),e=c.R5(e,b));e.fr.apply(e,d);d=Lm(this.m,dE,k);d=(new KXa(d,this.RK,this.be)).$E(this.fz,this.Bm);e=Fg(this.RK);b=this.yu-1;f=new KW(c);f.lK=this.RK;f.Or=new ni(10*b,b);g=f.$b();f.$E(this.fz+53*this.yu-10*b,this.Bm);this.Bm+=g.height+this.uBa;e.fontSize=g.height;d.uW=e;b=f.nh();f=d.nh();d=[];e=b.labels;bg(e,f.labels);b=b.paths;bg(b,f.paths);for(var f=[],g=a.xP.getStartDate().getFullYear(),\nh=a.xP.XB.getFullYear(),l=0;g<=h;g++,l++){var m=new HW(g,0,1),n=new HW(g+1,0,1),p=OXa(m,n);0===l&&bg(e,QXa(this,p,this.yu));var q=m,t=new HW(q.getFullYear()+1,q.getMonth(),1,-24),q=RXa(this,q,t),t=Om(this.m,dXa,Do),u=Om(this.m,eXa,Do),t=new bm(LBa,t,u),u=new cm;u.Xd=t;bg(f,{brush:u,Hc:q});bg(e,SXa(this,g));bg(b,TXa(this,a.swa,p));bg(d,UXa(this,a.Vna,m,n,c));this.Bm+=9*this.yu}return{cells:d,labels:e,rwa:b,Ora:f,Cg:U(this.m,kE,!0),tp:kn(this.m,lE),Rqa:jn(this.m,rXa),size:this.eb,yc:this.be}};\nfunction PXa(a){for(var b=new Kh,c=new Sh,d=Number.MAX_VALUE,e=Number.MIN_VALUE,f=a.ib.YZ.index(),g=a.ib.zA.index(),h=a.ib.zA.j5.get(he),l=a.ib.zA.j5.get(Gp),m=0,n=a.G.aa();m<n;m++){var p=a.G.getValue(m,f),q=new HW(p.getFullYear(),p.getMonth(),1);c.add(q.getTime());var p=new HW(p.getFullYear(),p.getMonth(),p.getDate()),q=a.G.getValue(m,g),d=Math.min(d,q),e=Math.max(e,q),t=null;h&&(t=a.G.getValue(m,h),t===k&&(t=null));var u=null;l&&(u=a.G.getValue(m,l))&&(u={oi:!(!a.G.getProperty(m,l,od)&&!a.G.Bg(l,\nod)),content:u});p={color:t,za:p,KU:m,value:q,xa:u};b.set(p.za,p)}a=b.ab();ig(a,function(a,b){return bl(a.za,b.za)});g=f=new Zk;0<a.length&&(f=a[0].za,g=a[a.length-1].za);return{Vna:b,xP:new GW(f,g),swa:c,LBa:new Ql(d,e)}}LW.prototype.OS=function(a){return Math.floor(Math.log(Math.abs(a))/Math.log(10))};function MW(a){a=new HW(a);for(var b=a.getDate(),c=a.getFullYear(),d=a.getMonth()-1;0<=d;d--)b+=Xk(c,d);--b;a=(new HW(a.getFullYear(),0,1)).getDay();return Math.floor((b+a%7)/7)}var VXa=new pn({pattern:Iv});\nLW.prototype.Cza=M(VXa.tc,VXa);function LXa(a){var b=a.be,c=a.zP;return Mf(a.haa.split(k),function(a,e){var f=b(e,c);return Math.max(a,f.width)},0,a)}\nfunction UXa(a,b,c,d,e){var f=a.yu;c=NXa(c,d);return Q(c,function(a){var c=a.getDay(),d=MW(a),m=b.ze(a)?b.get(a):null,n=m?m.value:null,p=m?m.color:null,q=m?m.KU:null,m=m?m.xa:null,t=this.Una.clone();null!=n?(p=p||e.pq(n),t.Ze(p),t.Cf(1)):(p=la,t.Ze(p),t.Cf(0));return{brush:t,za:a,Jl:!0,xa:m,fillColor:p,height:f,KU:q,value:n,width:f,x:this.fz+d*f,y:this.Bm+c*f}},a)}\nfunction QXa(a,b,c){b=Q(b,function(a){var b=new HW(a.getFullYear(),a.getMonth()+1,1,-24),f=+MW(a),b=+MW(b);return{angle:0,Cz:Dx,Dz:CD,style:this.RK,text:this.Cza(a),width:(b-f+1)*c,x:this.fz+(f+b+1)*c/2,y:this.Bm}},a);a.Bm+=a.zP.fontSize+a.vBa;return b}\nfunction SXa(a,b){var c=a.yu,d=7*c,e=[{angle:270,Cz:Dx,Dz:CD,style:a.gX,text:k+b,width:d,x:0,y:a.Bm+d/2}],f=a.gX.fontSize+a.oja;P(a.haa.split(k),function(a,b){e.push({angle:0,Cz:Dx,Dz:Dx,style:this.zP,text:a,width:this.Z7,x:f+this.Z7/2,y:this.Bm+b*c+c/2})},a);return e}function TXa(a,b,c){var d=[],e=[];P(c,function(a){var c;c=new HW(a.getFullYear(),a.getMonth()+1,1,-24);c=RXa(this,a,c);b.contains(a.getTime())?e.push({brush:this.nfa,Hc:c}):d.push({brush:this.wja,Hc:c})},a);bg(d,e);return d}\nfunction RXa(a,b,c){var d=+b.getDay();b=+MW(b);var e=+c.getDay();c=+MW(c);var f=a.yu,g=a.Bm;a=a.fz;var h=new $E,l=g+d*f;h.move((b+1)*f+a,l);d=b*f+a;h.ya(d,l);l=g+7*f;h.ya(d,l);d=c*f+a;h.ya(d,l);l=g+(e+1)*f;h.ya(d,l);d=(c+1)*f+a;h.ya(d,l);l=g+0;h.ya(d,l);h.ya((b+1)*f+a,l);h.close();return h};function NW(a){WJ.call(this,a)}O(NW,WJ);I=NW.prototype;I.jq=function(){return{DATE:Pc,ROW_INDEX:vp}};\nI.mh=function(){return{backgroundColor:{fill:la,stroke:cu,strokeWidth:10,strokeOpacity:.2},tooltip:{isHtml:!0,textStyle:{fontName:qv,fontSize:zXa,color:Fc}},calendar:{cellColor:{stroke:la,strokeOpacity:1,strokeWidth:1},cellSize:16,dayOfWeekLabel:{fontName:ae,color:EXa,bold:!1,italic:!1},dayOfWeekRightSpace:4,daysOfWeek:xXa,focusedCellColor:{stroke:cu,strokeOpacity:1,strokeWidth:2},monthLabel:{fontName:ae,color:EXa,bold:!1,italic:!1},monthOutlineColor:{stroke:cu,strokeOpacity:1,strokeWidth:1},underMonthSpace:6,\nunderYearSpace:0,unusedMonthOutlineColor:{stroke:DXa,strokeOpacity:1,strokeWidth:1},yearLabel:{fontName:ae,color:BXa,bold:!1,italic:!1}},noDataPattern:{backgroundColor:CXa,color:AXa}}};I.Pp=function(a,b,c,d){a=NW.o.Pp.call(this,a,b,c,d);a.mw([Jz,WC,ez,dw,cw,Gp]);return a};I.qo=function(a,b){return new EW(a,b)};I.Um=function(a,b,c,d){return new LW(a,b,c,d)};I.fs=function(){return[new LJ([new EJ(Nv)]),new bK([new EJ(Nv)]),new ZP([new EJ(Nv)])]};K("google.visualization.Calendar",NW,void 0);NW.prototype.draw=NW.prototype.draw;NW.prototype.getDefaultOptions=NW.prototype.mh;;window.google&&window.google.loader&&window.google.loader.eval&&window.google.loader.eval.visualization&&(window.google.loader.eval.visualization=function(){eval(arguments[0])});\n');