google.charts.packageLoadedCallback("wordtree", 'var Jab=" more",Kab=" more...",Lab="#a0a0a0",Mab="#aaaaaa",Nab="... ",Oab="8.0",Pab="All weights in tree must be positive (at row ",Qab="The string color column format is deprecated, please use style role instead.",Rab="Weight",Sab="colors.0",Uab="google.visualization.WordTree",Vab="lineHeight",Wab="maxFontSize",z0="mono",A0="specified",Xab="texttree",Yab="wordtree.format",Zab="wordtree.renderer",$ab="wordtree.sentenceSeparator",abb="wordtree.type",bbb="wordtree.word",cbb="wordtree.wordSeparator";\nfunction B0(a){a=a||{};this.xp=a.word||k;this.label=a.label||this.xp;this.weight=a.weight||0;this.properties=a.properties||{};this.O={};this.ye=[];this.Cu={};this.id=a.id||Ze(this)}I=B0.prototype;I.Zw=function(a){for(var b=0;b<this.ye.length;b++)this.ye[b].Zw(a);a.call(this)};I.Ka=function(a){this.Cu[a.xp]||(this.ye.push(a),this.Cu[a.xp]=a,a.parent=this)};I.nC=function(a){return this.Cu[a]};I.aD=function(){return!this.ye||0==this.ye.length};function dbb(a){return a.parent?dbb(a.parent):a}\nI.ix=function(a){if(this.aD())this.weight||(this.weight=1);else{for(var b=0,c=0;c<this.ye.length;c++)this.ye[c].ix(a),b+=this.ye[c].weight;this.weight=b}if(a&&a.propertyCalculators)for(c=0;c<a.propertyCalculators.length;c++)a.propertyCalculators[c](this)};function C0(a){this.gV=a&&a.gV||/\\s*(.+?(?:[?!]+|$|\\.(?=\\s+[A-Z]|$)))\\s*/;this.YW=a&&a.YW||/([!?,;:.&"-]+|\\S*(?:[^!?,;":.\\s&-]))/;Wh&&fi==Oab&&(this.gV=/[!?.]/,this.YW=/[ ,;]|[\'$][^[\']]/);this.root=new B0({});this.iO=a&&a.iO}K("gviz.wordtree.SuffixTree",C0,void 0);\nC0.prototype.$A=function(a,b,c,d,e){a=ebb(this,a);for(c=0;c<a.length;c++){var f=a[c],g=b,h=d,l=e;if(0!=f.length){f=fbb(this,f);this.iO&&(f=f.reverse());for(var m=0;m<f.length;m++){var n=this.root,p=f,q=m,t=h,u=l,v=g||1;n.weight+=v;var w=q||0;if(!(w>=p.length))for(q=n;w<p.length;w++)n=q.Cu[p[w]],n||(n=new B0({word:mf(p[w]),weight:0,properties:{color:t||0,style:u}}),q.Ka(n)),n.weight+=v,q=n}}}};function ebb(a,b){var c=b.split(a.gV);return c=Lf(c,function(a){return 0!=a&&void 0!=a})}\nfunction fbb(a,b){var c=b.split(a.YW);return c=Lf(c,function(a){return 0!=a&&void 0!=a})};var gbb={GEa:ie,v8:Sd,WCa:"double"},hbb={vma:QE,JEa:Xab},ibb={wordtree:{word:k,type:ie,renderer:QE},colors:["#4184f3",mu,"#f3b300"],colorAxis:{values:null,colors:null,minValue:null,maxValue:null},maxFontSize:36,fontName:ae,backgroundColor:Ae};function D0(a,b){this.root=a;this.margin=10;this.Zh=b.Zh||!1;this.sz=b.sz||!1;this.outlineStyle=Wla;this.aqa=Lab;this.n3=b.Yva||30;this.Fq=6;this.xK=20;this.rna=.75;this.fontFamily=b.kb;this.A_={};this.vr={};this.colorType=b.colorType;this.PV=b.PV;this.S0=b.S0;this.labels=b.labels;this.backgroundColor=b.backgroundColor||Ae;this.Axa=(new lm).setColor(Fc).Uz(this.fontFamily).lw(10).Zc();this.Dk=new ij(0,0,0,0);this.N_=!1}I=D0.prototype;\nI.Jv=function(a,b,c,d,e,f,g){this.zS(a,b,c,d,e,f,g?this.root.Cu[g[0]]:this.root)};\nI.zS=function(a,b,c,d,e,f,g){function h(a,b){a.O.cA=!1;a.O.Ax=[];a.O.ZT=void 0;for(var c=0;c<a.ye.length;c++)b(a.ye[c],b)}this.Dk=new ij(c,b+d,c+e,b);this.root=g||this.root;this.N_=!1;this.root.Zw(function(){this.O=this.O||{}});var l={};if(f)for(var m in f)l[m]=f[m];this.root.ix(l);h(this.root,h);this.colorType===Iz?(this.root.Zw(function(){this.min=this.properties.color||0;this.max=this.properties.color||0;for(var a=0;a<this.ye.length;a++)this.min=this.ye[a].min<this.min?this.ye[a].min:this.min,\nthis.max=this.ye[a].max>this.max?this.ye[a].max:this.max}),this.root.Zw(function(){if(!this.aD()){for(var a=0,b=0,c=0;c<this.ye.length;c++)var d=this.ye[c],b=b+d.properties.color*d.weight,a=a+d.weight;this.weight=a;this.properties.color=b/a}}),f=this.root.max,l=Zl(null,this.root.min),l=Zl(l,f),f=SM(this.S0,l),f=M(function(a,b){return RM(a,b.properties.color)},this,f)):f=this.colorType===A0||this.colorType===z0?function(a){return a.properties.color}:function(){return ia};l=c+this.margin;c=c+e-2*this.margin;\nb=this.Zh?b+d:b;d=this.root;e=0;for(m=jbb(this,c,l,this.root.weight);d.parent&&0<d.parent.label.length;){d=d.parent;var n=this.xd(d,this.xK),p=(new lm).setColor(Fc).Uz(this.fontFamily).lw(m).Zc();null!=d.properties.style&&MM(d.properties.style,p);n=a(n,p).width+Math.ceil(m/3);e+=n}b+=(this.Zh?-1:1)*e;b+=(this.Zh?-1:1)*this.margin;g?E0(this,g,b,l,c,a,f):E0(this,this.root,b,l,c,a,f)};\nfunction jbb(a,b,c,d){var e=5*Math.sqrt(b-c),e=Math.min(e,.8*(b-c));1==d&&(e=Math.min(e,2*a.n3/3));e=Math.round(e);e>a.n3&&(e=a.n3);return e}\nfunction E0(a,b,c,d,e,f,g){b.O.cCa=d;b.O.bCa=e;a.colorType==Iz&&b.ye.sort(function(a,b){return void 0===a.properties.color&&void 0===b.properties.color?0:void 0===a.properties.color?-1:void 0===b.properties.color?1:b.properties.color-a.properties.color});var h=jbb(a,e,d,b.weight);if(e-d<a.Fq)return b.O.cA=!0,!1;b.O.cA=!1;var l=a.sz&&b==a.root,m=a.xd(b,a.xK),h=(new lm).setColor(Fc).Uz(a.fontFamily).lw(h||1).Zc();b.O.style=h;l=l?0:f(m,h).width;h=f(m,h).height;b.O.Z$?(b.O.width&&(l=b.O.width),b.O.height&&\n(h=b.O.height)):b.O.style.color=g(b);null!=b.properties.style&&MM(b.properties.style,b.O.style);b.O.x=a.Zh?c-l:c;b.O.width=l;b.O.y=(d+e)/2-h/2;b.O.height=h;h=d;m=1==b.ye.length?Math.ceil(b.O.style.fontSize/3):Math.max(60,Math.round(.2*l));c=a.Zh?b.O.x-m:c+l+m;if(!a.Zh&&c>a.Dk.right||a.Zh&&c<a.Dk.left)a.N_=!0;a.Fq&&1<b.ye.length&&(e-=a.Fq);for(var l=[],n=m=0;n<b.ye.length;n++){var p=b.ye[n],q=h+p.weight/b.weight*(e-d);E0(a,p,c,h,q,f,g)?h=q:(m+=p.weight,p.O.cA=!0,l.push(p))}a.Fq&&1<l.length?(n=new B0({word:a.Zh?\nl.length+Kab:Nab+(l.length+Jab)}),n.O={},n.O.Ax=l,n.parent=b,d=m/b.weight*(e-d)*.8,d=d>a.Fq?d:a.Fq+.1,d=d<3*a.Fq?d:3*a.Fq,E0(a,n,c,e-d,e,f,g),b.O.ZT=n,n.O.height=d,h=5*Math.sqrt(d),h=Math.min(h,.8*d),h=Math.round(h),n.O.style=Pea((new lm(a.Axa)).lw(h).setColor(Mab)).Zc(),null!=n.properties.style&&MM(n.properties.style,n.O.style)):a.Fq&&1==l.length&&(l[0].O.cA=!1,E0(a,l[0],c,h,h+a.Fq,f,g));return!0}I.xd=function(a,b){return b?xf(a.label,b):a.label};\nI.draw=function(a,b){a.dc(b);this.element=b.j();this.Xs=null;this.A_={};this.vr={};var c=new cm;c.Ze(this.backgroundColor);a.tb(this.Dk.left,this.Dk.top,this.Dk.yb(),this.Dk.getHeight(),c,b);for(var c=this.root,d=c.O.style.fontSize,e=Math.ceil(d/3),f=c.O.x+(this.Zh?this.root.O.width+e:0),g=c.O.y,h=c.O.style.color;c.parent&&0<c.parent.label.length;){var c=c.parent,l=this.xd(c,this.xK),m=(new lm).setColor(h).Uz(this.fontFamily).lw(d).Zc();null!=c.properties.style&&MM(c.properties.style,m);var n=a.ff(l,\nm),l=n.width;this.Zh||(f-=l+e);c.O.style=m;c.O.x=f;c.O.y=g;c.O.height=n.height;c.O.width=n.width;m=a.fe(this.xd(c,this.xK),c.O.x,c.O.y,l,CD,CD,c.O.style,b);this.Zh&&(f+=l+e);m.id=c.id;this.A_[c.id]=m;this.vr[c.id]=c}this.VB(this.root,a,b);this.N_&&(d=this.Zh,e=this.Dk.yb()/12,c=new cm,c.mg={gg:this.backgroundColor,Jf:this.backgroundColor,Nq:0,Oq:1,x1:d?Lu:Iu,x2:d?Iu:Lu,y1:Iu,y2:Iu,gF:!1,Cr:!0},a.tb(d?0:this.Dk.right-e,this.Dk.top,e,this.Dk.getHeight(),c,b))};\nI.VB=function(a,b,c){if(!a.O.cA){if(a.O.Z$)a.O.Z$(a,b);else if(!this.sz||a!=this.root){a.O.strokeWidth=0;var d=b.fe(this.xd(a,this.xK),a.O.x,a.O.y,a.O.width,CD,CD,a.O.style,c);d.id=a.id;this.A_[a.id]=d;this.vr[a.id]=a}for(d=0;d<a.ye.length;d++){var e=a.ye[d];e.O.cA||(kbb(this,e,a,b,c),this.VB(e,b,c))}a.O.ZT&&(kbb(this,a.O.ZT,a,b,c),this.VB(a.O.ZT,b,c))}};\nfunction kbb(a,b,c,d,e){if(!b.O.cA&&1<c.ye.length){var f=a.Zh?c.O.x-a.margin:c.O.x+c.O.width+a.margin,g=c.O.y+c.O.height/2-c.O.height/25,h=a.Zh?b.O.x+b.O.width+a.margin:b.O.x-a.margin,l=(f+h)/2,m=b.O.y+b.O.height/2,n=new $E;n.move(f,g);var p=m+b.O.height/30;c=g+c.O.height/10;n.yp(l,g,l,m,h,m);n.ya(h,p);h=(g-m)/60*(a.Zh?-1:1);n.yp(l+h,p,l+h,c,f,c);n.ya(f,g);f=new cm;null==a.colorType||a.colorType===B||a.colorType===z0?f.Ze(a.aqa):f.Ze(b.O.style.color);d.Ga(n,f,e)}}\nI.Laa=function(a,b){var c=new $E,d=a.O,e=d.y+d.height;c.move(d.x,e);c.ya(d.x+d.width,e);d=new cm;d.td(this.outlineStyle);b.Ga(c,d,this.Xs)};\nI.Zx=function(a,b,c,d,e){var f=a.tagName.toLowerCase(),g;if(f===Dp||f===pD||f===cd||f===Oz){for(;a&&!a.id;)a=Qi(a);if(g=this.vr[a.id])return g}else if(f==IC&&a.namespaceURI==AE){f=a;if(f.parentNode!=this.element&&f.parentNode.parentNode!=this.element)return null;b-=this.element.clientLeft;c-=this.element.clientTop;e=e||0;d=d||this.root;if(b>=d.O.x-e&&b<d.O.x+d.O.width+e&&c>=d.O.y-e&&c<=d.O.y+d.O.height+e)return d;for(f=0;f<d.ye.length;f++)if(g=d.ye[f],c>=g.O.cCa-e&&c<g.O.bCa+e&&(g=this.Zx(a,b,c,g,\ne)))return g}return null};function F0(a){D0.call(this,null,a);var b=Fg(a);b.iO=!0;this.qK=new C0(b);this.EU=new C0(a);this.options=a;this.k$={color:Fc,kb:this.fontFamily,fontSize:40,bold:!0,Oc:!1,$e:!1}}O(F0,D0);I=F0.prototype;I.$A=function(a,b,c,d,e){this.qK.$A(a,b,c,d,e);this.EU.$A(a,b,c,d,e)};I.Zw=function(a){this.qK.root.Zw(a);this.EU.root.Zw(a)};I.ix=function(a){this.qK.root.ix(a);this.EU.root.ix(a)};I.zS=function(a,b,c,d,e,f,g){this.Jv(a,b,c,d,e,f,[(g||this.qK.root).xp])};\nI.Jv=function(a,b,c,d,e,f,g){this.Dk=new ij(c,b+d,c+e,b);f=f||{};var h=[];g&&(h=Se(g)?g:[g]);var l=this.qK.root;this.VY=k;for(var m=h.length-1;0<=m;m--)l=l.nC(h[m]);for(var n=this.EU.root,m=0;m<h.length;m++)n=n.nC(h[m]);if(!l&&!n)throw Error("Word "+g+" not present in word tree.");n=n||new B0;l=l||new B0;this.VY=h.join(r);h={};if(f)for(var p in f)h[p]=f[p];l.ix(h);n.ix(h);p=Fg(this.options);p.sz=!0;p.Zh=!0;g=Fg(this.options);g.sz=!0;this.gz=new D0(l,p);this.wE=new D0(n,g);p=(5+(e-10))/2;m=a(this.VY,\nthis.k$);g=d-(m.width+5);this.Xna=g/2+2.5;this.Yna=(e-m.height)/2-8;this.Wna=m.width;this.gz.Jv(a,b,c,g/2,e,h);this.wE.Jv(a,b+g/2,c,g/2,e,h);b=Math.max(l.weight,n.weight);c=p-5;l=c*l.weight/b;n=c*n.weight/b;this.gz.Jv(a,0,p-l,g/2,2*l,f);this.wE.Jv(a,this.Dk.yb()-g/2,p-n,g/2,2*n,f);this.va=new ni(d,e)};\nI.draw=function(a,b){a.dc(b);this.Xs=null;var c=a.Oa(),d=a.Oa();a.appendChild(b,c);a.appendChild(b,d);a.fe(this.VY,this.Xna,this.Yna,this.Wna,CD,CD,this.k$,b);this.gz.draw(a,c);this.wE.draw(a,d);for(var e in this.gz.vr)this.vr[e]=this.gz.vr[e];for(e in this.wE.vr)this.vr[e]=this.wE.vr[e]};I.Zx=function(a,b,c,d,e){return this.gz.Zx(a,b,c,null,e)||this.wE.Zx(a,b,c,null,e)};function lbb(a,b){this.root=a;this.Paa=b}I=lbb.prototype;I.Jv=function(){};I.zS=function(){};I.draw=function(){Ii(this.Paa);this.VB(this.root,this.Paa)};I.VB=function(a,b){a.xp&&b.appendChild(S(JA,{},document.createTextNode(String(a.xp+St+a.weight+Aa))));var c=S(vE);b.appendChild(c);for(var d in a.Cu)this.VB(a.Cu[d],c)};I.Laa=function(a){a.O.element.style[qz]=Uw};I.Zx=function(){return null};function G0(a,b,c,d,e,f,g){dq.call(this);this.A=a;this.ek=this.Cm=null;this.ba=d;this.Ea=e;this.Xf=b;this.Bj=c;this.kja=g;this.A5=f;a=this.A.Tm(this.ba,this.Ea);if(null==a)throw"Error creating canvas element.";this.ad=a;this.jg=this.A.Oa()}O(G0,dq);K("gviz.wordtree.TreeEvents",G0,void 0);G0.prototype.N=function(){this.A.clear();delete this.A;G0.o.N.call(this)};G0.prototype.update=function(a){a?H0(this,a):H0(this,this.node)};\nG0.prototype.Ss=function(a){!(a=this.Cm.Zx(a.target,a.clientX,a.clientY,this.ek))||a.O.Ax&&0<a.O.Ax.length||(a==this.ek?this.ek&&this.ek.parent&&(this.update(this.ek.parent),this.A5(xp,{word:this.ek.xp,weight:this.ek.weight,color:this.ek.properties.color})):(this.update(a),this.A5(xp)))};\nG0.prototype.lR=function(a){a=this.Cm.Zx(a.target,a.clientX,a.clientY,this.ek);if(!a||a.O.Ax&&0<a.O.Ax.length){if(a=this.Cm,a.Xs)for(a=a.Xs.j();a.firstChild;)a.removeChild(a.firstChild)}else{var b=this.Cm,c=this.A,d=this.jg;if(b.Xs)for(d=b.Xs.j();d.firstChild;)d.removeChild(d.firstChild);else b.Xs=c.Oa(),c.appendChild(d,b.Xs);var d=mm((new lm).setColor(Fc).Uz(b.fontFamily).lw(13),!0).Zc(),e=mm(new lm(d),!1).Zc(),f=[fL(a.xp,e)];a.O.Ax&&0<a.O.Ax.length||(f.push(fL(a.weight+k,d,b.labels[0],e)),b.colorType!=\nIz&&b.colorType!=A0||f.push(fL(a.properties.color+k,d,b.labels[1],e)));d=hL({entries:f},M(c.ff,c),!0,new R(a.O.x,a.O.y+a.O.height*b.rna),b.Dk,new R(a.O.x+a.O.width/2,a.O.y+a.O.height/2));VK(d,c,b.Xs);this.Cm.Laa(a,this.A,this.jg)}};function H0(a,b){We(b)&&(b=dbb(a.ek).Cu[b]);a.ek=b;var c=M(a.A.ff,a.A);a.Cm.zS(c,a.Xf,a.Bj,a.ba,a.Ea,null,b);a.Cm.draw(a.A,a.jg)};function I0(a){Ss.call(this,a);T(a,Vab,CB);this.E2=this.tree=this.eaa=this.Ux=null;this.kea=ie}O(I0,Ss);K(Uab,I0,void 0);I=I0.prototype;\nI.Pj=function(a,b,c){c=new sm([c,ibb]);var d=ek(this.oa,c,900),e=gk(this.oa,c,600);if(this.Ra)this.Ra.update(new ni(d,e),a);else{var f=U(c,xz);this.Ra=new bG(this.oa,new ni(d,e),a,f)}var f=gn(c,Yab,rka),g=(new Ms).Jc(b,f),h;null!=g.columns.color?(f=b.R(g.columns.color),f===H?(Rs(this.xo,Qab,!1),h=A0):f===C&&(h=Iz)):h=Lm(c,Sab)!==ibb.colors[0]?z0:B;var l=h!==Iz?cn(c,by)[0]:null,f=null!=g.columns.color&&b.Pa(g.columns.color)||zv,m=[null!=g.columns.weight&&b.Pa(g.columns.weight)||Rab,f],f=fn(c,Zab,hbb,\nQE),n=fn(c,abb,gbb,ie),p=V(c,Wab,36),q=Lm(c,vz);h={S0:h===Iz?c:null,format:g,Yva:p,PV:l,colorType:h,labels:m,sz:!1,kb:q,Zh:n==Sd,gV:c.Y($ab),YW:c.Y(cbb),backgroundColor:Om(c,Fw,Ae)};l=Ze(b);if(l!=this.eaa||n!=this.kea||!this.E2||!Aca(h,this.E2))if(this.eaa=l,this.E2=h,this.kea=n,g.format==Eo){n==ie?new C0:new F0(h);g=h.format;n={};m=null!=g.columns.color;p=null!=g.columns.style;for(l=0;l<b.aa();++l){var q=b.getValue(l,g.columns.id),t=b.getValue(l,g.columns.xp),u=b.getValue(l,g.columns.parent),u=b.getValue(l,\ng.columns.weight);if(0>=u)throw Error(Pab+l+").");var v;v=m?b.getValue(l,g.columns.color):h.colorType===z0?h.PV:Fc;var w=p?b.getStringValue(l,g.columns.style):null,w=null!=w?new sm([LM(w,kKa)]):null,t=new B0({label:t,word:t,weight:u,properties:{color:v,style:w}});if(n[q])throw Error("Non-unique ID: id "+q+" found again at row "+l+Fa);n[q]=t}for(l=0;l<b.aa();++l)m=b.getValue(l,g.columns.parent),0<=m&&(u=n[m],m=n[b.getValue(l,g.columns.id)],u.Ka(m),m.parent=u);this.tree=n[0]}else{n==ie||n==Sd?(h.iO=\nn==Sd,g=new C0(h)):g=new F0(h);n=h.format;l=null!=n.columns.weight;m=null!=n.columns.color;p=null!=n.columns.style;for(q=0;q<b.aa();++q){t=l?b.getValue(q,n.columns.weight):1;if(0>=t)throw Error(Pab+q+").");u=b.getValue(q,h.format.columns.text);v=m?b.getValue(q,n.columns.color):h.colorType===z0?h.PV:Fc;w=p?new sm([LM(b.getStringValue(q,n.columns.style),kKa)]):null;g.$A(u,t,!0,v,w)}this.tree=g;this.tree.root&&(this.tree=this.tree.root)}f==Xab?(new lbb(this.tree.root?this.tree.root:this.tree,this.oa)).draw():\nthis.Ra.vp(M(this.rAa,this,d,e,af(Pr,this),c.Y(bbb),this.tree,h),a)};\nI.rAa=function(a,b,c,d,e,f){var g=this.Ra.bb();fq(this.Ux);a=this.Ux=new G0(g,0,0,a,b,c,f);e instanceof D0?a.Cm=e:(a.kja.sz=!1,a.Cm=new D0(e,a.kja));e=M(a.A.ff,a.A);a.Cm.Jv(e,a.Xf,a.Bj,a.ba,a.Ea,null,[d]);a.A.appendChild(a.ad,a.jg);a.Cm.draw(a.A,a.jg);a.ek=a.Cm.root||a.Cm.gz.root;d=new cm;d.Cf(0);d.Ze(B);dm(d,0);d.td(B);e=a.A.Oa();a.A.appendChild(a.ad,e);a.A.tb(0,0,a.ba,a.Ea,d,e);d=a.ad.j();a.A.wc(d,to,M(a.Ss,a));a.A.wc(d,uB,M(a.lR,a));a.A.wc(d,np,M(a.lR,a));a.A5(rp,{})};\nI.getSelection=function(){var a=this.Ux;return{word:a.ek.xp,weight:a.ek.weight,color:a.ek.properties.color}};I.setSelection=function(a){H0(this.Ux,a)};I.N=function(){fq(this.Ux);delete this.Ux;fq(this.Ra);delete this.Ra;I0.o.N.call(this)};I.If=function(){};K(Uab,I0,void 0);I0.prototype.draw=I0.prototype.draw;I0.prototype.clearChart=I0.prototype.hc;I0.prototype.getSelection=I0.prototype.getSelection;I0.prototype.setSelection=I0.prototype.setSelection;;window.google&&window.google.loader&&window.google.loader.eval&&window.google.loader.eval.visualization&&(window.google.loader.eval.visualization=function(){eval(arguments[0])});\n');
