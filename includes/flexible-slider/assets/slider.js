(function(e){var B=0;var i=0;var k=0;var g=10;var n=0;var j="ontouchstart" in window;var c="onorientationchange" in window;var o=false;var D=false;var q=false;var p=false;var l=false;var F=false;var t=false;var z="pointer";var E="pointer";var w=new Array();var u=new Array();var a=new Array();var b=new Array();var A=new Array();var f=new Array();var x=new Array();var d=new Array();var h=new Array();var m=new Array();var s=new Array();var r=new Array();var y=new Array();var v={showScrollbar:function(G,H){if(G.scrollbarHide){e("."+H).css({opacity:G.scrollbarOpacity,filter:"alpha(opacity:"+(G.scrollbarOpacity*100)+")"})}},hideScrollbar:function(I,J,K,H,P,O,Q,N,M,G){if(I.scrollbar&&I.scrollbarHide){for(var L=K;L<K+25;L++){J[J.length]=v.hideScrollbarIntervalTimer(g*L,H[K],((K+24)-L)/24,P,O,Q,N,M,G,I)}}},hideScrollbarInterval:function(K,M,N,L,O,J,I,G,H){n=(K*-1)/(s[G])*(O-J-I-L);v.setSliderOffset("."+N,n);e("."+N).css({opacity:H.scrollbarOpacity*M,filter:"alpha(opacity:"+(H.scrollbarOpacity*M*100)+")"})},slowScrollHorizontalInterval:function(V,M,O,W,ad,ae,Z,aa,ag,L,J,Q,S,X,I,R,N,ac){if(ac.infiniteSlider){if(O<=(s[I]*-1)){var ah=e(V).width();if(O<=(r[I]*-1)){var H=J[0]*-1;e(M).each(function(aj){v.setSliderOffset(e(M)[aj],H+R);if(aj<Q.length){Q[aj]=H*-1}H=H+e(this).outerWidth(true)});O=O+Q[0]*-1;m[I]=Q[0]*-1+R;s[I]=m[I]+ah-ae;h[I]=0}else{var T=0;var Y=v.getSliderOffset(e(M[0]),"x");e(M).each(function(aj){if(v.getSliderOffset(this,"x")<Y){Y=v.getSliderOffset(this,"x");T=aj}});var af=m[I]+ah;v.setSliderOffset(e(M)[T],af);m[I]=Q[1]*-1+R;s[I]=m[I]+ah-ae;Q.splice(0,1);Q.splice(Q.length,0,af*-1+R);h[I]++}}if((O>=(m[I]*-1))||(O>=0)){var ah=e(V).width();if(O>=0){var H=J[0]*-1;e(M).each(function(aj){v.setSliderOffset(e(M)[aj],H+R);if(aj<Q.length){Q[aj]=H*-1}H=H+e(this).outerWidth(true)});O=O-Q[0]*-1;m[I]=Q[0]*-1+R;s[I]=m[I]+ah-ae;h[I]=X;while(((Q[0]*-1-ah+R)>(v.getSliderOffset(V,"x")*-1))&&ac.snapSlideCenter){var K=0;var P=v.getSliderOffset(e(M[0]),"x");e(M).each(function(aj){if(v.getSliderOffset(this,"x")>P){P=v.getSliderOffset(this,"x");K=aj}});var af=m[I]-e(M[K]).outerWidth(true);v.setSliderOffset(e(M)[K],af);Q.splice(0,0,af*-1+R);Q.splice(Q.length-1,1);m[I]=Q[0]*-1+R;s[I]=m[I]+ah-ae;h[I]--;x[I]++}}if(O<0){var K=0;var P=v.getSliderOffset(e(M[0]),"x");e(M).each(function(aj){if(v.getSliderOffset(this,"x")>P){P=v.getSliderOffset(this,"x");K=aj}});var af=m[I]-e(M[K]).outerWidth(true);v.setSliderOffset(e(M)[K],af);Q.splice(0,0,af*-1+R);Q.splice(Q.length-1,1);m[I]=Q[0]*-1+R;s[I]=m[I]+ah-ae;h[I]--}}}var ab=false;var ai=v.calcActiveOffset(ac,O,Q,ae,h[I],X,L,I);var af=(ai+h[I]+X)%X;if(ac.infiniteSlider){if(af!=d[I]){ab=true}}else{if(ai!=x[I]){ab=true}}if(ab){var G=new v.args(ac,V,e(V).children(":eq("+af+")"),af,N,true);e(V).parent().data("args",G);if(ac.onSlideChange!=""){ac.onSlideChange(G)}}x[I]=ai;d[I]=af;O=Math.floor(O);v.setSliderOffset(V,O);if(ac.scrollbar){n=Math.floor((O*-1-m[I])/(s[I]-m[I])*(Z-aa-ad));var U=ad-ag;if(O>=(m[I]*-1)){U=ad-ag-(n*-1);v.setSliderOffset(e("."+W),0);e("."+W).css({width:U+"px"})}else{if(O<=((s[I]*-1)+1)){U=Z-aa-ag-n;v.setSliderOffset(e("."+W),n);e("."+W).css({width:U+"px"})}else{v.setSliderOffset(e("."+W),n);e("."+W).css({width:U+"px"})}}}},slowScrollHorizontal:function(aj,az,H,ac,ah,S,O,I,U,af,ak,aB,ag,R,ap,aa,an,T,at,aw){var Y=new Array();var aA=new Array();var ae=v.getSliderOffset(aj,"x");var K=0;var Z=25/1024*I;var aq=false;frictionCoefficient=aw.frictionCoefficient;elasticFrictionCoefficient=aw.elasticFrictionCoefficient;snapFrictionCoefficient=aw.snapFrictionCoefficient;if((ah>5)&&aw.snapToChildren&&!T){K=1}else{if((ah<-5)&&aw.snapToChildren&&!T){K=-1}}if(ah<(Z*-1)){ah=Z*-1}else{if(ah>Z){ah=Z}}if(!(e(aj)[0]===e(an)[0])){K=K*-1;ah=ah*-2}var W=h[R];if(aw.infiniteSlider){var M=m[R];var ai=s[R]}var ao=new Array();var X=new Array();for(var av=0;av<ag.length;av++){ao[av]=ag[av];if(av<az.length){X[av]=v.getSliderOffset(e(az[av]),"x")}}while((ah>1)||(ah<-1)){ah=ah*frictionCoefficient;ae=ae+ah;if(((ae>(m[R]*-1))||(ae<(s[R]*-1)))&&!aw.infiniteSlider){ah=ah*elasticFrictionCoefficient;ae=ae+ah}if(aw.infiniteSlider){if(ae<=(ai*-1)){var L=e(aj).width();var al=0;var ad=X[0];for(var av=0;av<X.length;av++){if(X[av]<ad){ad=X[av];al=av}}var V=M+L;X[al]=V;M=ao[1]*-1+at;ai=M+L-I;ao.splice(0,1);ao.splice(ao.length,0,V*-1+at);W++}if(ae>=(M*-1)){var L=e(aj).width();var ab=0;var P=X[0];for(var av=0;av<X.length;av++){if(X[av]>P){P=X[av];ab=av}}var V=M-e(az[ab]).outerWidth(true);X[ab]=V;ao.splice(0,0,V*-1+at);ao.splice(ao.length-1,1);M=ao[0]*-1+at;ai=M+L-I;W--}}Y[Y.length]=ae;aA[aA.length]=ah}var ax=false;var am=v.calcActiveOffset(aw,ae,ao,I,W,aa,x[R],R);var Q=(am+W+aa)%aa;if(aw.snapToChildren){if(aw.infiniteSlider){if(Q!=d[R]){ax=true}}else{if(am!=x[R]){ax=true}}if((K<0)&&!ax){am++;if((am>=ag.length)&&!aw.infinteSlider){am=ag.length-1}}else{if((K>0)&&!ax){am--;if((am<0)&&!aw.infinteSlider){am=0}}}}if(aw.snapToChildren||(((ae>(m[R]*-1))||(ae<(s[R]*-1)))&&!aw.infiniteSlider)){ae=v.getSliderOffset(aj,"x");Y.splice(0,Y.length);while((ae<(ao[am]-0.5))||(ae>(ao[am]+0.5))){ae=((ae-(ao[am]))*snapFrictionCoefficient)+(ao[am]);Y[Y.length]=ae}Y[Y.length]=ao[am]}var ay=1;if((Y.length%2)!=0){ay=0}var G=0;var ar=0;for(var au=0;au<H.length;au++){clearTimeout(H[au])}var N=(am+W+aa)%aa;var J=0;for(var au=ay;au<Y.length;au=au+2){if((au==ay)||(Math.abs(Y[au]-J)>1)||(au>=(Y.length-2))){J=Y[au];H[H.length]=v.slowScrollHorizontalIntervalTimer(g*au,aj,az,Y[au],ac,O,I,U,af,ak,am,aB,ag,ap,aa,R,at,N,aw)}}var ax=false;var Q=(am+h[R]+aa)%aa;if(aw.infiniteSlider){if(Q!=d[R]){ax=true}}else{if(am!=x[R]){ax=true}}if(aw.onSlideComplete!=""){H[H.length]=v.onSlideCompleteTimer(g*(au+1),aw,aj,e(aj).children(":eq("+Q+")"),Q,R)}f[R]=H;v.hideScrollbar(aw,H,au,Y,ac,O,I,af,ak,R)},onSlideComplete:function(J,L,K,M,I){var G=(w[I]!=M)?true:false;var H=new v.args(J,e(L),K,M,M,G);e(L).parent().data("args",H);if(J.onSlideComplete!=""){J.onSlideComplete(H)}w[I]=M},getSliderOffset:function(I,K){var J=0;if(K=="x"){K=4}else{K=5}if(D&&!q&&!p){var H=new Array("-webkit-transform","-moz-transform","transform");for(var G=0;G<H.length;G++){if(e(I).css(H[G])!=undefined){if(e(I).css(H[G]).length>0){var L=e(I).css(H[G]).split(",");break}}}J=parseInt(L[K],10)}else{J=parseInt(e(I).css("left"),10)}return J},setSliderOffset:function(G,H){if(D&&!q&&!p){e(G).css({webkitTransform:"matrix(1,0,0,1,"+H+",0)",MozTransform:"matrix(1,0,0,1,"+H+",0)",transform:"matrix(1,0,0,1,"+H+",0)"})}else{e(G).css({left:H+"px"})}},setBrowserInfo:function(){if(navigator.userAgent.match("WebKit")!=null){o=true;z="-webkit-grab";E="-webkit-grabbing"}else{if(navigator.userAgent.match("Gecko")!=null){t=true;z="-moz-grab";E="-moz-grabbing"}else{if(navigator.userAgent.match("MSIE 7")!=null){q=true;F=true}else{if(navigator.userAgent.match("MSIE 8")!=null){p=true;F=true}else{if(navigator.userAgent.match("MSIE 9")!=null){l=true;F=true}}}}}},has3DTransform:function(){var G=false;var H=e("<div />").css({webkitTransform:"matrix(1,1,1,1,1,1)",MozTransform:"matrix(1,1,1,1,1,1)",transform:"matrix(1,1,1,1,1,1)"});if(H.attr("style")==""){G=false}else{if(H.attr("style")!=undefined){G=true}}return G},getSlideNumber:function(G,I,H){return(G-h[I]+H)%H},calcActiveOffset:function(J,Q,U,S,K,I,L,G){var P=false;var O=new Array();var N;for(var R=0;R<U.length;R++){if((U[R]<=Q)&&(U[R]>(Q-S))){if(!P&&(U[R]!=Q)){O[O.length]=U[R-1]}O[O.length]=U[R];P=true}}if(O.length==0){O[0]=U[U.length-1]}var H=S;var M=0;for(var R=0;R<O.length;R++){var T=Math.abs(Q-O[R]);if(T<H){M=O[R];H=T}}for(var R=0;R<U.length;R++){if(M==U[R]){N=R}}return N},changeSlide:function(G,V,K,O,W,ag,ai,ad,ae,ak,J,P,I,T,X,Q,ah){v.autoSlidePause(I);for(var Y=0;Y<O.length;Y++){clearTimeout(O[Y])}var ac=Math.ceil(ah.autoSlideTransTimer/10)+1;var aa=v.getSliderOffset(V,"x");var M=P[G];var U=M-aa;if(ah.infiniteSlider){G=(G-h[I]+X*2)%X;var S=false;if((G==0)&&(X==2)){G=X;P[G]=P[G-1]-e(K).eq(0).outerWidth(true);S=true}M=P[G];U=M-aa;var L=new Array(P[G]-e(V).width(),P[G]+e(V).width());if(S){P.splice(P.length-1,1)}for(var Z=0;Z<L.length;Z++){if(Math.abs(L[Z]-aa)<Math.abs(U)){U=(L[Z]-aa)}}}var H=new Array();var R;var ab;v.showScrollbar(ah,W);for(var Z=0;Z<=ac;Z++){R=Z;R/=ac;R--;ab=aa+U*(Math.pow(R,5)+1);H[H.length]=ab}var N=0;for(var Z=0;Z<H.length;Z++){if((Z==0)||(Math.abs(H[Z]-N)>1)||(Z>=(H.length-2))){N=H[Z];O[Z]=v.slowScrollHorizontalIntervalTimer(g*(Z+1),V,K,H[Z],W,ag,ai,ad,ae,ak,G,J,P,T,X,I,Q,G,ah)}if((Z==0)&&(ah.onSlideStart!="")){var aj=(x[I]+h[I]+X)%X;ah.onSlideStart(new v.args(ah,V,e(V).children(":eq("+aj+")"),aj,G,false))}}var af=false;var aj=(G+h[I]+X)%X;if(ah.infiniteSlider){if(aj!=d[I]){af=true}}else{if(G!=x[I]){af=true}}if(af&&(ah.onSlideComplete!="")){O[O.length]=v.onSlideCompleteTimer(g*(Z+1),ah,V,e(V).children(":eq("+aj+")"),aj,I)}f[I]=O;v.hideScrollbar(ah,O,Z,H,W,ag,ai,ae,ak,I);v.autoSlide(V,K,O,W,ag,ai,ad,ae,ak,J,P,I,T,X,Q,ah)},autoSlide:function(O,I,L,R,P,U,J,N,M,T,V,G,Q,H,S,K){if(!K.autoSlide){return false}v.autoSlidePause(G);u[G]=setTimeout(function(){if(!K.infiniteSlider&&(x[G]>V.length-1)){x[G]=x[G]-H}var W=(x[G]+h[G]+H+1)%H;v.changeSlide(W,O,I,L,R,P,U,J,N,M,T,V,G,Q,H,S,K);v.autoSlide(O,I,L,R,P,U,J,N,M,T,V,G,Q,H,S,K)},K.autoSlideTimer+K.autoSlideTransTimer)},autoSlidePause:function(G){clearTimeout(u[G])},isUnselectable:function(H,G){if(G.unselectableSelector!=""){if(e(H).closest(G.unselectableSelector).size()==1){return true}}return false},slowScrollHorizontalIntervalTimer:function(M,R,J,L,S,X,Y,U,V,Z,G,I,N,P,T,H,O,K,W){var Q=setTimeout(function(){v.slowScrollHorizontalInterval(R,J,L,S,X,Y,U,V,Z,G,I,N,P,T,H,O,K,W)},M);return Q},onSlideCompleteTimer:function(J,K,M,L,G,I){var H=setTimeout(function(){v.onSlideComplete(K,M,L,G,I)},J);return H},hideScrollbarIntervalTimer:function(O,K,M,N,L,P,J,I,G,H){var Q=setTimeout(function(){v.hideScrollbarInterval(K,M,N,L,P,J,I,G,H)},O);return Q},args:function(J,K,H,L,G,I){this.settings=J;this.data=e(K).parent().data("iosslider");this.slideChanged=I;this.sliderObject=K;this.sliderContainerObject=e(K).parent();this.currentSlideObject=H;this.currentSlideNumber=L+1;this.targetSlideObject=e(K).children(":eq("+G+")");this.targetSlideNumber=G+1;this.currentSliderOffset=v.getSliderOffset(K,"x")*-1},preventDrag:function(G){G.preventDefault()},preventClick:function(G){G.stopImmediatePropagation();return false},enableClick:function(){return true}};v.setBrowserInfo();var C={init:function(G,I){D=v.has3DTransform();var H=e.extend(true,{elasticPullResistance:0.6,frictionCoefficient:0.92,elasticFrictionCoefficient:0.6,snapFrictionCoefficient:0.92,snapToChildren:true,snapSlideCenter:false,startAtSlide:1,scrollbar:false,scrollbarDrag:false,scrollbarHide:true,scrollbarLocation:"top",scrollbarContainer:"",scrollbarOpacity:0.4,scrollbarHeight:"4px",scrollbarBorder:"0",scrollbarMargin:"5px",scrollbarBackground:"#000",scrollbarBorderRadius:"100px",scrollbarShadow:"0 0 0 #000",scrollbarElasticPullResistance:0.9,desktopClickDrag:true,keyboardControls:false,responsiveSlideContainer:true,responsiveSlides:true,navSlideSelector:"",navPrevSelector:"",navNextSelector:"",autoSlideToggleSelector:"",autoSlide:false,autoSlideTimer:5000,autoSlideTransTimer:750,infiniteSlider:false,stageCSS:{position:"relative",top:"0",left:"0",overflow:"hidden",zIndex:1},unselectableSelector:"",onSliderLoaded:"",onSliderUpdate:"",onSlideStart:"",onSlideChange:"",onSlideComplete:""},G);if(I==undefined){I=this}return e(I).each(function(aP){B++;var W=B;var J=new Array();b[W]=H;m[W]=0;s[W]=0;var aD=0;var aE=new Array(0,0);var U=new Array(0,0);var aF="scrollbarBlock"+B;var ao="scrollbar"+B;var aL;var ak;var Z;var R;var ah;var aO;var aM=0;var aj=e(this);var L;var au;var ae;var aw;var ay;var an;var ap=true;var aB=-1;var M=new Array();var ax;var aW=new Array();var X=0;var az=0;var av=0;var ac=0;var ag=e(this).children(":first-child");var aT;var am=e(ag).children().not("script").size();var aa=false;var ar=0;var ai=false;var at=undefined;var S=0;var aG;h[W]=0;var ab=false;w[W]=-1;var N=false;a[W]=aj;A[W]=false;var aC;var K=0;var al=0;var aV=false;var Y=false;var P;var aU=j?"touchstart.iosSliderEvent":"click.iosSliderEvent";var Q;var aq;var O;y[W]=false;f[W]=new Array();if(H.scrollbarDrag){H.scrollbar=true;H.scrollbarHide=false}var ad=e(this);var aS=ad.data("iosslider");if(aS!=undefined){return true}e(this).find("img").bind("dragstart.iosSliderEvent",function(aX){aX.preventDefault()});if(H.infiniteSlider){H.scrollbar=false}if(H.scrollbar){if(H.scrollbarContainer!=""){e(H.scrollbarContainer).append("<div class = '"+aF+"'><div class = '"+ao+"'></div></div>")}else{e(ag).parent().append("<div class = '"+aF+"'><div class = '"+ao+"'></div></div>")}}if(!aN()){return true}e(this).find("a").bind("mousedown",v.preventDrag);e(this).find("[onclick]").bind("click",v.preventDrag).each(function(){e(this).data("onclick",this.onclick)});var aB=v.calcActiveOffset(H,v.getSliderOffset(e(ag),"x"),ax,L,h[W],am,undefined,W);var V=(aB+h[W]+am)%am;var aJ=new v.args(H,ag,e(ag).children(":eq("+V+")"),V,V,false);e(aj).data("args",aJ);if(H.onSliderLoaded!=""){H.onSliderLoaded(aJ)}w[W]=V;function aN(){v.autoSlidePause(W);Q=e(ag).find("a");aq=e(ag).find("[onclick]");O=e(ag).find("*");e(aj).css("width","");e(aj).css("height","");e(ag).css("width","");aT=e(ag).children().not("script");e(aT).css("width","");s[W]=0;ax=new Array();ah=e(aj).parent().width();L=e(aj).outerWidth(true);if(H.responsiveSlideContainer){L=(e(aj).outerWidth(true)>ah)?ah:e(aj).outerWidth(true);au=L*e(aj).outerHeight(true)/e(aj).outerWidth(true)}e(aj).css({position:H.stageCSS.position,top:H.stageCSS.top,left:H.stageCSS.left,overflow:H.stageCSS.overflow,zIndex:H.stageCSS.zIndex,webkitPerspective:1000,webkitBackfaceVisibility:"hidden",width:L,height:au});e(H.unselectableSelector).css({cursor:"default"});if(H.responsiveSlides){e(aT).each(function(a6){var a5=e(this).outerWidth(true);if(a5>L){a5=L+(e(this).outerWidth(true)-e(this).width())*-1}else{a5=e(this).width()}e(this).css({width:a5})})}e(aT).each(function(a5){e(this).css({webkitBackfaceVisibility:"hidden",position:"absolute",top:0});ax[a5]=s[W]*-1;s[W]=s[W]+e(this).outerWidth(true)});if(H.snapSlideCenter){aM=(L-(e(aT[0]).outerWidth(true)))*0.5}r[W]=s[W]*2;e(aT).each(function(a5){v.setSliderOffset(e(this),ax[a5]*-1+s[W]+aM);ax[a5]=ax[a5]-s[W]});if(!H.infiniteSlider&&!H.snapSlideCenter){for(var aZ=0;aZ<ax.length;aZ++){if(ax[aZ]<=((s[W]*2-L)*-1)){break}ar=aZ}ax.splice(ar+1,ax.length);ax[ax.length]=(s[W]*2-L)*-1}for(var aZ=0;aZ<ax.length;aZ++){aW[aZ]=ax[aZ]}if(ap){H.startAtSlide=(H.startAtSlide>ax.length)?ax.length:H.startAtSlide;x[W]=H.startAtSlide-1;d[W]=x[W];ap=false}m[W]=s[W]+aM;e(ag).css({position:"relative",cursor:z,webkitPerspective:"0",webkitBackfaceVisibility:"hidden",width:s[W]+"px"});P=s[W];s[W]=s[W]*2-L+aM*2;ab=(P<L)?true:false;if(ab){e(ag).css({cursor:"default"})}aO=e(aj).parent().outerHeight(true);au=e(aj).height();if(H.responsiveSlideContainer){au=(e(aj).height()>aO)?aO:e(aj).height()}e(aj).css({height:au});if(H.infiniteSlider&&!ab){var a2=v.getSliderOffset(e(ag),"x");var a1=(h[W]+am)%am*-1;while(a1<0){var aY=0;var a0=v.getSliderOffset(e(aT[0]),"x");e(aT).each(function(a5){if(v.getSliderOffset(this,"x")<a0){a0=v.getSliderOffset(this,"x");aY=a5}});var a4=m[W]+P;v.setSliderOffset(e(aT)[aY],a4);m[W]=ax[1]*-1+aM;s[W]=m[W]+P-L;ax.splice(0,1);ax.splice(ax.length,0,a4*-1+aM);a1++}while(((ax[0]*-1-P+aM)>(v.getSliderOffset(ag,"x")*-1))&&H.snapSlideCenter){var a3=0;var aX=v.getSliderOffset(e(aT[0]),"x");e(aT).each(function(a5){if(v.getSliderOffset(this,"x")>aX){aX=v.getSliderOffset(this,"x");a3=a5}});var a4=m[W]-e(aT[a3]).outerWidth(true);v.setSliderOffset(e(aT)[a3],a4);ax.splice(0,0,a4*-1+aM);ax.splice(ax.length-1,1);m[W]=ax[0]*-1+aM;s[W]=m[W]+P-L;h[W]--;x[W]++}}v.setSliderOffset(ag,ax[x[W]]);if(!j&&!H.desktopClickDrag){e(ag).css({cursor:"default"})}if(H.scrollbar){e("."+aF).css({margin:H.scrollbarMargin,overflow:"hidden",display:"none"});e("."+aF+" ."+ao).css({border:H.scrollbarBorder});aw=parseInt(e("."+aF).css("marginLeft"))+parseInt(e("."+aF).css("marginRight"));ay=parseInt(e("."+aF+" ."+ao).css("borderLeftWidth"),10)+parseInt(e("."+aF+" ."+ao).css("borderRightWidth"),10);Z=(H.scrollbarContainer!="")?e(H.scrollbarContainer).width():L;R=(Z-aw)/am;if(!H.scrollbarHide){X=H.scrollbarOpacity}e("."+aF).css({position:"absolute",left:0,width:Z-aw+"px",margin:H.scrollbarMargin});if(H.scrollbarLocation=="top"){e("."+aF).css("top","0")}else{e("."+aF).css("bottom","0")}e("."+aF+" ."+ao).css({borderRadius:H.scrollbarBorderRadius,background:H.scrollbarBackground,height:H.scrollbarHeight,width:R-ay+"px",minWidth:H.scrollbarHeight,border:H.scrollbarBorder,webkitPerspective:1000,webkitBackfaceVisibility:"hidden",position:"relative",opacity:X,filter:"alpha(opacity:"+(X*100)+")",boxShadow:H.scrollbarShadow});v.setSliderOffset(e("."+aF+" ."+ao),Math.floor((ax[x[W]]*-1-m[W]+aM)/(s[W]-m[W])*(Z-aw-R)));e("."+aF).css({display:"block"});aL=e("."+aF+" ."+ao);ak=e("."+aF)}if(H.scrollbarDrag&&!ab){e("."+aF+" ."+ao).css({cursor:z})}if(H.infiniteSlider){aG=(s[W]+L)/3}if(H.navSlideSelector!=""){e(H.navSlideSelector).each(function(a5){e(this).css({cursor:"pointer"});e(this).unbind(aU).bind(aU,function(){v.changeSlide(a5,ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)})})}if(H.navPrevSelector!=""){e(H.navPrevSelector).css({cursor:"pointer"});e(H.navPrevSelector).unbind(aU).bind(aU,function(){var a5=(x[W]+h[W]+am)%am;if((a5>0)||H.infiniteSlider){v.changeSlide(a5-1,ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)}})}if(H.navNextSelector!=""){e(H.navNextSelector).css({cursor:"pointer"});e(H.navNextSelector).unbind(aU).bind(aU,function(){var a5=(x[W]+h[W]+am)%am;if((a5<ax.length-1)||H.infiniteSlider){v.changeSlide(a5+1,ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)}})}if(H.autoSlide&&!ab){if(H.autoSlideToggleSelector!=""){e(H.autoSlideToggleSelector).css({cursor:"pointer"});e(H.autoSlideToggleSelector).unbind(aU).bind(aU,function(){if(!N){v.autoSlidePause(W);N=true;e(H.autoSlideToggleSelector).addClass("on")}else{v.autoSlide(ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H);N=false;e(H.autoSlideToggleSelector).removeClass("on")}})}if(!N&&!ab){v.autoSlide(ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)}if(!j){e(aj).bind("mouseenter.iosSliderEvent",function(){v.autoSlidePause(W)});e(aj).bind("mouseleave.iosSliderEvent",function(){if(!N&&!ab){v.autoSlide(ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)}})}else{e(aj).bind("touchend.iosSliderEvent",function(){if(!N&&!ab){v.autoSlide(ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)}})}}e(aj).data("iosslider",{obj:ad,settings:H,scrollerNode:ag,slideNodes:aT,numberOfSlides:am,centeredSlideOffset:aM,sliderNumber:W,originalOffsets:aW,childrenOffsets:ax,sliderMax:s[W],scrollbarClass:ao,scrollbarWidth:R,scrollbarStageWidth:Z,stageWidth:L,scrollMargin:aw,scrollBorder:ay,infiniteSliderOffset:h[W],infiniteSliderWidth:aG});return true}if(b[W].responsiveSlides||b[W].responsiveSlideContainer){var af=c?"orientationchange":"resize";e(window).bind(af+".iosSliderEvent",function(){if(!aN()){return true}})}if(H.keyboardControls&&!ab){e(document).bind("keydown.iosSliderEvent",function(aY){if((!q)&&(!p)){var aY=aY.originalEvent}switch(aY.keyCode){case 37:var aX=(x[W]+h[W]+am)%am;if((aX>0)||H.infiniteSlider){v.changeSlide(aX-1,ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)}break;case 39:var aX=(x[W]+h[W]+am)%am;if((aX<ax.length-1)||H.infiniteSlider){v.changeSlide(aX+1,ag,aT,J,ao,R,L,Z,aw,ay,aW,ax,W,aG,am,aM,H)}break}})}if(j||H.desktopClickDrag){var aK=j?"touchstart.iosSliderEvent":"mousedown.iosSliderEvent";var aR=e(ag);var aI=e(ag);var aA=null;var T=false;if(H.scrollbarDrag){aR=aR.add(aL);aI=aI.add(ak)}e(aR).bind(aK,function(a0){if(y[W]||ab){return true}T=v.isUnselectable(a0.target,H);if(T){return true}aC=(e(this)[0]===e(aL)[0])?aL:ag;if((!q)&&(!p)){var a0=a0.originalEvent}v.autoSlidePause(W);if(!j){if(window.getSelection){if(window.getSelection().empty){window.getSelection().empty()}else{if(window.getSelection().removeAllRanges){window.getSelection().removeAllRanges()}}}else{if(document.selection){document.selection.empty()}}eventX=a0.pageX;eventY=a0.pageY;ai=true;at=ag;e(this).css({cursor:E})}else{eventX=a0.touches[0].pageX;eventY=a0.touches[0].pageY}aE=new Array(0,0);U=new Array(0,0);i=0;aa=false;for(var aY=0;aY<J.length;aY++){clearTimeout(J[aY])}var aX=v.getSliderOffset(ag,"x");if(aX>(m[W]*-1+aM+P)){aX=m[W]*-1+aM+P;v.setSliderOffset(e("."+ao),aX);e("."+ao).css({width:(R-ay)+"px"})}else{if(aX<(s[W]*-1)){aX=s[W]*-1;v.setSliderOffset(e("."+ao),(Z-aw-R));e("."+ao).css({width:(R-ay)+"px"})}}var aZ=(e(this)[0]===e(aL)[0])?(m[W]):0;az=(v.getSliderOffset(this,"x")-eventX-aZ)*-1;av=(v.getSliderOffset(this,"y")-eventY)*-1;aE[1]=eventX;U[1]=eventY;Y=false});var aQ=j?"touchmove.iosSliderEvent":"mousemove.iosSliderEvent";e(aI).bind(aQ,function(bc){if((!q)&&(!p)){var bc=bc.originalEvent}if(y[W]||ab){return true}if(T){return true}var a7=0;if(!j){if(window.getSelection){if(window.getSelection().empty){window.getSelection().empty()}else{if(window.getSelection().removeAllRanges){window.getSelection().removeAllRanges()}}}else{if(document.selection){document.selection.empty()}}}if(j){eventX=bc.touches[0].pageX;eventY=bc.touches[0].pageY}else{eventX=bc.pageX;eventY=bc.pageY;if(!ai){return false}}aE[0]=aE[1];aE[1]=eventX;i=(aE[1]-aE[0])/2;U[0]=U[1];U[1]=eventY;k=(U[1]-U[0])/2;if(!aa){var aX=(x[W]+h[W]+am)%am;var aY=new v.args(H,ag,e(ag).children(":eq("+aX+")"),aX,aX,false);e(aj).data("args",aY);if(H.onSlideStart!=""){H.onSlideStart(aY)}}if(((k>3)||(k<-3))&&((i<3)&&(i>-3))&&(j)&&(!aa)){aV=true}if(((i>5)||(i<-5))&&(j)){bc.preventDefault();aa=true}else{if(!j){aa=true}}if(aa&&!aV){var a1=v.getSliderOffset(ag,"x");var a3=(e(this)[0]===e(ak)[0])?(m[W]):0;var a2=(e(this)[0]===e(ak)[0])?((m[W]-s[W])/(Z-aw-R)):1;var a6=(e(this)[0]===e(ak)[0])?H.scrollbarElasticPullResistance:H.elasticPullResistance;if(j){if(ac!=bc.touches.length){az=(a1*-1)+eventX}ac=bc.touches.length}if(H.infiniteSlider){if(a1<=(s[W]*-1)){var be=e(ag).width();if(a1<=(r[W]*-1)){var aZ=aW[0]*-1;e(aT).each(function(bg){v.setSliderOffset(e(aT)[bg],aZ+aM);if(bg<ax.length){ax[bg]=aZ*-1}aZ=aZ+e(this).outerWidth(true)});az=az-ax[0]*-1;m[W]=ax[0]*-1+aM;s[W]=m[W]+be-L;h[W]=0}else{var a8=0;var ba=v.getSliderOffset(e(aT[0]),"x");e(aT).each(function(bg){if(v.getSliderOffset(this,"x")<ba){ba=v.getSliderOffset(this,"x");a8=bg}});var a4=m[W]+be;v.setSliderOffset(e(aT)[a8],a4);m[W]=ax[1]*-1+aM;s[W]=m[W]+be-L;ax.splice(0,1);ax.splice(ax.length,0,a4*-1+aM);h[W]++}}if((a1>=(m[W]*-1))||(a1>=0)){var be=e(ag).width();if(a1>=0){var aZ=aW[0]*-1;e(aT).each(function(bg){v.setSliderOffset(e(aT)[bg],aZ+aM);if(bg<ax.length){ax[bg]=aZ*-1}aZ=aZ+e(this).outerWidth(true)});az=az+ax[0]*-1;m[W]=ax[0]*-1+aM;s[W]=m[W]+be-L;h[W]=am;while(((ax[0]*-1-be+aM)>(v.getSliderOffset(ag,"x")*-1))&&H.snapSlideCenter){var a0=0;var a5=v.getSliderOffset(e(aT[0]),"x");e(aT).each(function(bg){if(v.getSliderOffset(this,"x")>a5){a5=v.getSliderOffset(this,"x");a0=bg}});var a4=m[W]-e(aT[a0]).outerWidth(true);v.setSliderOffset(e(aT)[a0],a4);ax.splice(0,0,a4*-1+aM);ax.splice(ax.length-1,1);m[W]=ax[0]*-1+aM;s[W]=m[W]+be-L;h[W]--;x[W]++}}else{var a0=0;var a5=v.getSliderOffset(e(aT[0]),"x");e(aT).each(function(bg){if(v.getSliderOffset(this,"x")>a5){a5=v.getSliderOffset(this,"x");a0=bg}});var a4=m[W]-e(aT[a0]).outerWidth(true);v.setSliderOffset(e(aT)[a0],a4);ax.splice(0,0,a4*-1+aM);ax.splice(ax.length-1,1);m[W]=ax[0]*-1+aM;s[W]=m[W]+be-L;h[W]--}}}else{var be=e(ag).width();if(a1>(m[W]*-1+aM)){a7=(m[W]+((az-a3-eventX+aM)*-1*a2)-a3)*a6*-1/a2}if(a1<(s[W]*-1)){a7=(s[W]+((az-a3-eventX)*-1*a2)-a3)*a6*-1/a2}}v.setSliderOffset(ag,((az-a3-eventX-a7)*-1*a2)-a3);if(H.scrollbar){v.showScrollbar(H,ao);n=Math.floor((az-eventX-a7-m[W]+aM)/(s[W]-m[W])*(Z-aw-R)*a2);var a9=R;if(a1>=(m[W]*-1+aM+be)){a9=R-ay-(n*-1);v.setSliderOffset(e("."+ao),0);e("."+ao).css({width:a9+"px"})}else{if(a1<=((s[W]*-1)+1)){a9=Z-aw-ay-n;v.setSliderOffset(e("."+ao),n);e("."+ao).css({width:a9+"px"})}else{v.setSliderOffset(e("."+ao),n)}}}if(j){an=bc.touches[0].pageX}var bb=false;var bf=v.calcActiveOffset(H,(az-eventX-a7)*-1,ax,L,h[W],am,undefined,W);var bd=(bf+h[W]+am)%am;if(H.infiniteSlider){if(bd!=d[W]){bb=true}}else{if(bf!=x[W]){bb=true}}if(bb){x[W]=bf;d[W]=bd;Y=true;var aY=new v.args(H,ag,e(ag).children(":eq("+bd+")"),bd,bd,true);e(aj).data("args",aY);if(H.onSlideChange!=""){H.onSlideChange(aY)}}}});e(aR).bind("touchend.iosSliderEvent",function(aY){var aY=aY.originalEvent;if(y[W]||ab){return true}if(T){return true}if(aY.touches.length!=0){for(var aX=0;aX<aY.touches.length;aX++){if(aY.touches[aX].pageX==an){v.slowScrollHorizontal(ag,aT,J,ao,i,k,R,L,Z,aw,ay,aW,ax,W,aG,am,aC,Y,aM,H)}}}else{v.slowScrollHorizontal(ag,aT,J,ao,i,k,R,L,Z,aw,ay,aW,ax,W,aG,am,aC,Y,aM,H)}aV=false});if(!j){var aH=e(window);if(p||q){var aH=e(document)}e(aH).bind("mouseup.iosSliderEvent"+W,function(aX){if(aa){Q.unbind("click.disableClick").bind("click.disableClick",v.preventClick)}else{Q.unbind("click.disableClick").bind("click.disableClick",v.enableClick)}aq.each(function(){this.onclick=function(aY){if(aa){return false}e(this).data("onclick").call(this,aY||window.event)}});if(parseFloat(e().jquery)>=1.8){O.each(function(){var a0=e._data(this,"events");if(a0!=undefined){if(a0.click!=undefined){if(a0.click[0].namespace!="iosSliderEvent"){if(!aa){return false}e(this).one("click.disableClick",v.preventClick);var aY=e._data(this,"events").click;var aZ=aY.pop();aY.splice(0,0,aZ)}}}})}else{if(parseFloat(e().jquery)>=1.6){O.each(function(){var a0=e(this).data("events");if(a0!=undefined){if(a0.click!=undefined){if(a0.click[0].namespace!="iosSliderEvent"){if(!aa){return false}e(this).one("click.disableClick",v.preventClick);var aY=e(this).data("events").click;var aZ=aY.pop();aY.splice(0,0,aZ)}}}})}else{}}if(!A[W]){if(ab){return true}e(aR).css({cursor:z});ai=false;if(at==undefined){return false}v.slowScrollHorizontal(at,aT,J,ao,i,k,R,L,Z,aw,ay,aW,ax,W,aG,am,aC,Y,aM,H);at=undefined}aV=false})}}})},destroy:function(H,G){if(G==undefined){G=this}return e(G).each(function(){var L=e(this);var K=L.data("iosslider");if(K==undefined){return false}if(H==undefined){H=true}v.autoSlidePause(K.sliderNumber);A[K.sliderNumber]=true;e(window).unbind(".iosSliderEvent-"+K.sliderNumber);e(document).unbind(".iosSliderEvent-"+K.sliderNumber);e(this).unbind(".iosSliderEvent");e(this).children(":first-child").unbind(".iosSliderEvent");e(this).children(":first-child").children().unbind(".iosSliderEvent");if(H){e(this).attr("style","");e(this).children(":first-child").attr("style","");e(this).children(":first-child").children().attr("style","");e(K.settings.navSlideSelector).attr("style","");e(K.settings.navPrevSelector).attr("style","");e(K.settings.navNextSelector).attr("style","");e(K.settings.autoSlideToggleSelector).attr("style","");e(K.settings.unselectableSelector).attr("style","")}if(K.settings.scrollbar){e(".scrollbarBlock"+K.sliderNumber).remove()}var J=f[K.sliderNumber];for(var I=0;I<J.length;I++){clearTimeout(J[I])}L.removeData("iosslider")})},update:function(G){if(G==undefined){G=this}return e(G).each(function(){var J=e(this);var I=J.data("iosslider");if(I==undefined){return false}C.destroy(false,this);I.settings.startAtSlide=(I.numberOfSlides==1)?I.settings.startAtSlide:(x[I.sliderNumber]+1+h[I.sliderNumber]+I.numberOfSlides)%I.numberOfSlides;C.init(I.settings,this);var H=new v.args(I.settings,I.scrollerNode,e(I.scrollerNode).children(":eq("+(I.settings.startAtSlide-1)+")"),I.settings.startAtSlide-1,I.settings.startAtSlide-1,false);e(stageNode).data("args",H);if(I.settings.onSliderUpdate!=""){I.settings.onSliderUpdate(H)}})},addSlide:function(G,H){return this.each(function(){var J=e(this);var I=J.data("iosslider");if(I==undefined){return false}if(H<=I.numberOfSlides){e(I.scrollerNode).children(":eq("+(H-1)+")").before(G)}else{e(I.scrollerNode).children(":eq("+(H-2)+")").after(G)}if(x[I.sliderNumber]>(H-2)){x[I.sliderNumber]++}C.update(this)})},removeSlide:function(G){return this.each(function(){var I=e(this);var H=I.data("iosslider");if(H==undefined){return false}e(H.scrollerNode).children(":eq("+(G-1)+")").remove();if(x[H.sliderNumber]>(G-1)){x[H.sliderNumber]--}C.update(this)})},goToSlide:function(G,H){if(H==undefined){H=this}return e(H).each(function(){var J=e(this);var I=J.data("iosslider");if(I==undefined){return false}G=(G-1+I.numberOfSlides)%I.numberOfSlides;v.changeSlide(G,e(I.scrollerNode),e(I.slideNodes),f[I.sliderNumber],I.scrollbarClass,I.scrollbarWidth,I.stageWidth,I.scrollbarStageWidth,I.scrollMargin,I.scrollBorder,I.originalOffsets,I.childrenOffsets,I.sliderNumber,I.infiniteSliderWidth,I.numberOfSlides,I.centeredSlideOffset,I.settings);x[I.sliderNumber]=G})},lock:function(){return this.each(function(){var H=e(this);var G=H.data("iosslider");if(G==undefined){return false}y[G.sliderNumber]=true})},unlock:function(){return this.each(function(){var H=e(this);var G=H.data("iosslider");if(G==undefined){return false}y[G.sliderNumber]=false})},getData:function(){return this.each(function(){var H=e(this);var G=H.data("iosslider");if(G==undefined){return false}return G})}};e.fn.flexibleSlider=function(G){if(C[G]){return C[G].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof G==="object"||!G){return C.init.apply(this,arguments)}else{e.error("invalid method call!")}}}})(jQuery);