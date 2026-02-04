(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();function Vi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Td(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var jn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Gs={duration:.5,overwrite:!1,delay:0},Yu,on,Pt,li=1e8,At=1/li,Ec=Math.PI*2,Bm=Ec/4,zm=0,bd=Math.sqrt,km=Math.cos,Vm=Math.sin,rn=function(e){return typeof e=="string"},Ft=function(e){return typeof e=="function"},ji=function(e){return typeof e=="number"},qu=function(e){return typeof e>"u"},Li=function(e){return typeof e=="object"},Ln=function(e){return e!==!1},$u=function(){return typeof window<"u"},io=function(e){return Ft(e)||rn(e)},Ad=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},_n=Array.isArray,Gm=/random\([^)]+\)/g,Hm=/,\s*/g,Lf=/(?:-?\.?\d|\.)+/gi,wd=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Rl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Cd=/[+-]=-?[.\d]+/,Wm=/[^,'"\[\]\s]+/gi,Xm=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,Si,Tc,Ku,Qn={},nl={},Rd,Pd=function(e){return(nl=Hs(e,Qn))&&On},Zu=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fa=function(e,t){return!t&&console.warn(e)},Dd=function(e,t){return e&&(Qn[e]=t)&&nl&&(nl[e]=t)||Qn},Oa=function(){return 0},Ym={suppressEvents:!0,isStart:!0,kill:!1},Vo={suppressEvents:!0,kill:!1},qm={suppressEvents:!0},ju={},vr=[],bc={},Ld,Xn={},Pl={},If=30,Go=[],Ju="",Qu=function(e){var t=e[0],n,i;if(Li(t)||Ft(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Go.length;i--&&!Go[i].targetTest(t););n=Go[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new np(e[i],n)))||e.splice(i,1);return e},qr=function(e){return e._gsap||Qu(ci(e))[0]._gsap},Id=function(e,t,n){return(n=e[t])&&Ft(n)?e[t]():qu(n)&&e.getAttribute&&e.getAttribute(t)||n},In=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Is=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},$m=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},il=function(){var e=vr.length,t=vr.slice(0),n,i;for(bc={},vr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},ef=function(e){return!!(e._initted||e._startAt||e.add)},Ud=function(e,t,n,i){vr.length&&!on&&il(),e.render(t,n,!!(on&&t<0&&ef(e))),vr.length&&!on&&il()},Nd=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Wm).length<2?t:rn(e)?e.trim():e},Fd=function(e){return e},ei=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Km=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Hs=function(e,t){for(var n in t)e[n]=t[n];return e},Uf=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Li(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},rl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ea=function(e){var t=e.parent||Lt,n=e.keyframes?Km(_n(e.keyframes)):ei;if(Ln(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Zm=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Od=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Sl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Mr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},$r=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},jm=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Ac=function(e,t,n,i){return e._startAt&&(on?e._startAt.revert(Vo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},Jm=function r(e){return!e||e._ts&&r(e.parent)},Nf=function(e){return e._repeat?Ws(e._tTime,e=e.duration()+e._rDelay)*e:0},Ws=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},sl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Ml=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||At)||0))},yl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Ml(e),n._dirty||$r(n,e)),e},Bd=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=sl(e.rawTime(),t),(!t._dur||ja(0,t.totalDuration(),n)-t._tTime>At)&&t.render(n,!0)),$r(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-At}},Ei=function(e,t,n,i){return t.parent&&Mr(t),t._start=Dt((ji(n)?n:n||e!==Lt?ii(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Od(e,t,"_first","_last",e._sort?"_start":0),wc(t)||(e._recent=t),i||Bd(e,t),e._ts<0&&yl(e,e._tTime),e},zd=function(e,t){return(Qn.ScrollTrigger||Zu("scrollTrigger",t))&&Qn.ScrollTrigger.create(t,e)},kd=function(e,t,n,i,s){if(nf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!on&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Ld!==qn.frame)return vr.push(e),e._lazy=[s,i],1},Qm=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},wc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},e_=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&Qm(e)&&!(!e._initted&&wc(e))||(e._ts<0||e._dp._ts<0)&&!wc(e))?0:1,o=e._rDelay,l=0,c,u,f;if(o&&e._repeat&&(l=ja(0,e._tDur,t),u=Ws(l,o),e._yoyo&&u&1&&(a=1-a),u!==Ws(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||on||i||e._zTime===At||!t&&e._zTime){if(!e._initted&&kd(e,t,i,n,l))return;for(f=e._zTime,e._zTime=t||(n?At:0),n||(n=t&&!f),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=l,c=e._pt;c;)c.r(a,c.d),c=c._next;t<0&&Ac(e,t,n,!0),e._onUpdate&&!n&&Kn(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Kn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&Mr(e,1),!n&&!on&&(Kn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},t_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Xs=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&yl(e,e._tTime=e._tDur*o),e.parent&&Ml(e),n||$r(e.parent,e),e},Ff=function(e){return e instanceof Tn?$r(e):Xs(e,e._dur)},n_={_start:0,endTime:Oa,totalDuration:Oa},ii=function r(e,t,n){var i=e.labels,s=e._recent||n_,a=e.duration()>=li?s.endTime(!1):e._dur,o,l,c;return rn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",o=t.indexOf("="),l==="<"||l===">"?(o>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(l=parseFloat(t.charAt(o-1)+t.substr(o+1)),c&&n&&(l=l/100*(_n(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+l:a+l)):t==null?a:+t},Ta=function(e,t,n){var i=ji(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,l;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,l=n;l&&!("immediateRender"in o);)o=l.vars.defaults||{},l=Ln(l.vars.inherit)&&l.parent;a.immediateRender=Ln(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},Ar=function(e,t){return e||e===0?t(e):t},ja=function(e,t,n){return n<e?e:n>t?t:n},dn=function(e,t){return!rn(e)||!(t=Xm.exec(e))?"":t[1]},i_=function(e,t,n){return Ar(n,function(i){return ja(e,t,i)})},Cc=[].slice,Vd=function(e,t){return e&&Li(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Li(e[0]))&&!e.nodeType&&e!==Si},r_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return rn(i)&&!t||Vd(i,1)?(s=n).push.apply(s,ci(i)):n.push(i)})||n},ci=function(e,t,n){return Pt&&!t&&Pt.selector?Pt.selector(e):rn(e)&&!n&&(Tc||!Ys())?Cc.call((t||Ku).querySelectorAll(e),0):_n(e)?r_(e,n):Vd(e)?Cc.call(e,0):e?[e]:[]},Rc=function(e){return e=ci(e)[0]||Fa("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ci(t,n.querySelectorAll?n:n===e?Fa("Invalid scope")||Ku.createElement("div"):e)}},Gd=function(e){return e.sort(function(){return .5-Math.random()})},Hd=function(e){if(Ft(e))return e;var t=Li(e)?e:{each:e},n=Kr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,l=isNaN(i)||o,c=t.axis,u=i,f=i;return rn(i)?u=f={center:.5,edges:.5,end:1}[i]||0:!o&&l&&(u=i[0],f=i[1]),function(d,h,g){var _=(g||t).length,m=a[_],p,E,T,M,y,A,w,P,v;if(!m){if(v=t.grid==="auto"?0:(t.grid||[1,li])[1],!v){for(w=-li;w<(w=g[v++].getBoundingClientRect().left)&&v<_;);v<_&&v--}for(m=a[_]=[],p=l?Math.min(v,_)*u-.5:i%v,E=v===li?0:l?_*f/v-.5:i/v|0,w=0,P=li,A=0;A<_;A++)T=A%v-p,M=E-(A/v|0),m[A]=y=c?Math.abs(c==="y"?M:T):bd(T*T+M*M),y>w&&(w=y),y<P&&(P=y);i==="random"&&Gd(m),m.max=w-P,m.min=P,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(v>_?_-1:c?c==="y"?_/v:v:Math.max(v,_/v))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=dn(t.amount||t.each)||0,n=n&&_<0?Qd(n):n}return _=(m[d]-m.min)/m.max||0,Dt(m.b+(n?n(_):_)*m.v)+m.u}},Pc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(ji(n)?0:dn(n))}},Wd=function(e,t){var n=_n(e),i,s;return!n&&Li(e)&&(i=n=e.radius||li,e.values?(e=ci(e.values),(s=!ji(e[0]))&&(i*=i)):e=Pc(e.increment)),Ar(t,n?Ft(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),l=parseFloat(s?a.y:0),c=li,u=0,f=e.length,d,h;f--;)s?(d=e[f].x-o,h=e[f].y-l,d=d*d+h*h):d=Math.abs(e[f]-o),d<c&&(c=d,u=f);return u=!i||c<=i?e[u]:a,s||u===a||ji(a)?u:u+dn(a)}:Pc(e))},Xd=function(e,t,n,i){return Ar(_n(e)?!t:n===!0?!!(n=0):!i,function(){return _n(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},s_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},a_=function(e,t){return function(n){return e(parseFloat(n))+(t||dn(n))}},o_=function(e,t,n){return qd(e,t,0,1,n)},Yd=function(e,t,n){return Ar(n,function(i){return e[~~t(i)]})},l_=function r(e,t,n){var i=t-e;return _n(e)?Yd(e,r(0,e.length),t):Ar(n,function(s){return(i+(s-e)%i)%i+e})},c_=function r(e,t,n){var i=t-e,s=i*2;return _n(e)?Yd(e,r(0,e.length-1),t):Ar(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},Ba=function(e){return e.replace(Gm,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(Hm);return Xd(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},qd=function(e,t,n,i,s){var a=t-e,o=i-n;return Ar(s,function(l){return n+((l-e)/a*o||0)})},u_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(h){return(1-h)*e+h*t};if(!s){var a=rn(e),o={},l,c,u,f,d;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(_n(e)&&!_n(t)){for(u=[],f=e.length,d=f-2,c=1;c<f;c++)u.push(r(e[c-1],e[c]));f--,s=function(g){g*=f;var _=Math.min(d,~~g);return u[_](g-_)},n=t}else i||(e=Hs(_n(e)?[]:{},e));if(!u){for(l in t)tf.call(o,e,l,"get",t[l]);s=function(g){return af(g,o)||(a?e.p:e)}}}return Ar(n,s)},Of=function(e,t,n){var i=e.labels,s=li,a,o,l;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(l=a,s=o);return l},Kn=function(e,t,n){var i=e.vars,s=i[t],a=Pt,o=e._ctx,l,c,u;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&vr.length&&il(),o&&(Pt=o),u=l?s.apply(c,l):s.call(c),Pt=a,u},pa=function(e){return Mr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!on),e.progress()<1&&Kn(e,"onInterrupt"),e},Ds,$d=[],Kd=function(e){if(e)if(e=!e.name&&e.default||e,$u()||e.headless){var t=e.name,n=Ft(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Oa,render:af,add:tf,kill:A_,modifier:b_,rawVars:0},a={targetTest:0,get:0,getSetter:sf,aliases:{},register:0};if(Ys(),e!==i){if(Xn[t])return;ei(i,ei(rl(e,s),a)),Hs(i.prototype,Hs(s,rl(e,a))),Xn[i.prop=t]=i,e.targetTest&&(Go.push(i),ju[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Dd(t,i),e.register&&e.register(On,i,Un)}else $d.push(e)},bt=255,ma={aqua:[0,bt,bt],lime:[0,bt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,bt],navy:[0,0,128],white:[bt,bt,bt],olive:[128,128,0],yellow:[bt,bt,0],orange:[bt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[bt,0,0],pink:[bt,192,203],cyan:[0,bt,bt],transparent:[bt,bt,bt,0]},Dl=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*bt+.5|0},Zd=function(e,t,n){var i=e?ji(e)?[e>>16,e>>8&bt,e&bt]:0:ma.black,s,a,o,l,c,u,f,d,h,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ma[e])i=ma[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&bt,i&bt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&bt,e&bt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(Lf),!t)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(c+1):u+c-u*c,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=Dl(l+1/3,s,a),i[1]=Dl(l,s,a),i[2]=Dl(l-1/3,s,a);else if(~e.indexOf("="))return i=e.match(wd),n&&i.length<4&&(i[3]=1),i}else i=e.match(Lf)||ma.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/bt,a=i[1]/bt,o=i[2]/bt,f=Math.max(s,a,o),d=Math.min(s,a,o),u=(f+d)/2,f===d?l=c=0:(h=f-d,c=u>.5?h/(2-f-d):h/(f+d),l=f===s?(a-o)/h+(a<o?6:0):f===a?(o-s)/h+2:(s-a)/h+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},jd=function(e){var t=[],n=[],i=-1;return e.split(xr).forEach(function(s){var a=s.match(Ps)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},Bf=function(e,t,n){var i="",s=(e+i).match(xr),a=t?"hsla(":"rgba(",o=0,l,c,u,f;if(!s)return e;if(s=s.map(function(d){return(d=Zd(d,t,1))&&a+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(u=jd(e),l=n.c,l.join(i)!==u.c.join(i)))for(c=e.replace(xr,"1").split(Ps),f=c.length-1;o<f;o++)i+=c[o]+(~l.indexOf(o)?s.shift()||a+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=e.split(xr),f=c.length-1;o<f;o++)i+=c[o]+s[o];return i+c[f]},xr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ma)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),f_=/hsl[a]?\(/,Jd=function(e){var t=e.join(" "),n;if(xr.lastIndex=0,xr.test(t))return n=f_.test(t),e[1]=Bf(e[1],n),e[0]=Bf(e[0],n,jd(e[1])),!0},za,qn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],l,c,u,f,d,h,g=function _(m){var p=r()-i,E=m===!0,T,M,y,A;if((p>e||p<0)&&(n+=p-t),i+=p,y=i-n,T=y-a,(T>0||E)&&(A=++f.frame,d=y-f.time*1e3,f.time=y=y/1e3,a+=T+(T>=s?4:s-T),M=1),E||(l=c(_)),M)for(h=0;h<o.length;h++)o[h](y,d,A,m)};return f={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return d/(1e3/(m||60))},wake:function(){Rd&&(!Tc&&$u()&&(Si=Tc=window,Ku=Si.document||{},Qn.gsap=On,(Si.gsapVersions||(Si.gsapVersions=[])).push(On.version),Pd(nl||Si.GreenSockGlobals||!Si.gsap&&Si||{}),$d.forEach(Kd)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&f.sleep(),c=u||function(m){return setTimeout(m,a-f.time*1e3+1|0)},za=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),za=0,c=Oa},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=f.time*1e3+s},add:function(m,p,E){var T=p?function(M,y,A,w){m(M,y,A,w),f.remove(T)}:m;return f.remove(m),o[E?"unshift":"push"](T),Ys(),T},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&h>=p&&h--},_listeners:o},f})(),Ys=function(){return!za&&qn.wake()},ot={},h_=/^[\d.\-M][\d.\-,\s]/,d_=/["']/g,p_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,l,c;s<a;s++)l=n[s],o=s!==a-1?l.lastIndexOf(","):l.length,c=l.substr(0,o),t[i]=isNaN(c)?c.replace(d_,"").trim():+c,i=l.substr(o+1).trim();return t},m_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},__=function(e){var t=(e+"").split("("),n=ot[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[p_(t[1])]:m_(e).split(",").map(Nd)):ot._CE&&h_.test(e)?ot._CE("",e):n},Qd=function(e){return function(t){return 1-e(1-t)}},ep=function r(e,t){for(var n=e._first,i;n;)n instanceof Tn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Kr=function(e,t){return e&&(Ft(e)?e:ot[e]||__(e))||t},ss=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return In(e,function(o){ot[o]=Qn[o]=s,ot[a=o.toLowerCase()]=n;for(var l in s)ot[a+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ot[o+"."+l]=s[l]}),s},tp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Ll=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Ec*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*Vm((u-a)*s)+1},l=e==="out"?o:e==="in"?function(c){return 1-o(1-c)}:tp(o);return s=Ec/s,l.config=function(c,u){return r(e,c,u)},l},Il=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:tp(n);return i.config=function(s){return r(e,s)},i};In("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;ss(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ot.Linear.easeNone=ot.none=ot.Linear.easeIn;ss("Elastic",Ll("in"),Ll("out"),Ll());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};ss("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);ss("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});ss("Circ",function(r){return-(bd(1-r*r)-1)});ss("Sine",function(r){return r===1?1:-km(r*Bm)+1});ss("Back",Il("in"),Il("out"),Il());ot.SteppedEase=ot.steps=Qn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-At;return function(o){return((i*ja(0,a,o)|0)+s)*n}}};Gs.ease=ot["quad.out"];In("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Ju+=r+","+r+"Params,"});var np=function(e,t){this.id=zm++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Id,this.set=t?t.getSetter:sf},ka=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Xs(this,+t.duration,1,1),this.data=t.data,Pt&&(this._ctx=Pt,Pt.data.push(this)),za||qn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Xs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ys(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(yl(this,n),!s._dp||s.parent||Bd(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Ei(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===At||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Ud(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Nf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Nf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ws(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-At?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?sl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-At?0:this._rts,this.totalTime(ja(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Ml(this),jm(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ys(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==At&&(this._tTime-=At)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Ei(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ln(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=qm);var i=on;return on=n,ef(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),on=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Ff(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Ff(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ii(this,n),Ln(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ln(i)),this._dur||(this._zTime=-At),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-At:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-At,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-At)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ft(n)?n:Fd,l=function(){var u=i.then;i.then=null,s&&s(),Ft(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){pa(this)},r})();ei(ka.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-At,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){Td(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ln(n.sortChildren),Lt&&Ei(n.parent||Lt,Vi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&zd(Vi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Ta(0,arguments,this),this},t.from=function(i,s,a){return Ta(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Ta(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,Ea(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,ii(this,a),1),this},t.call=function(i,s,a){return Ei(this,Wt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,l,c,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=c,a.onCompleteParams=u,a.parent=this,new Wt(i,a,ii(this,l)),this},t.staggerFrom=function(i,s,a,o,l,c,u){return a.runBackwards=1,Ea(a).immediateRender=Ln(a.immediateRender),this.staggerTo(i,s,a,o,l,c,u)},t.staggerFromTo=function(i,s,a,o,l,c,u,f){return o.startAt=a,Ea(o).immediateRender=Ln(o.immediateRender),this.staggerTo(i,s,o,l,c,u,f)},t.render=function(i,s,a){var o=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:Dt(i),f=this._zTime<0!=i<0&&(this._initted||!c),d,h,g,_,m,p,E,T,M,y,A,w;if(this!==Lt&&u>l&&i>=0&&(u=l),u!==this._tTime||a||f){if(o!==this._time&&c&&(u+=this._time-o,i+=this._time-o),d=u,M=this._start,T=this._ts,p=!T,f&&(c||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(A=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(d=Dt(u%m),u===l?(_=this._repeat,d=c):(y=Dt(u/m),_=~~y,_&&_===y&&(d=c,_--),d>c&&(d=c)),y=Ws(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),A&&_&1&&(d=c-d,w=1),_!==y&&!this._lock){var P=A&&y&1,v=P===(A&&_&1);if(_<y&&(P=!P),o=P?0:u%c?c:u,this._lock=1,this.render(o||(w?0:Dt(_*m)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&Kn(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,v&&(this._lock=2,o=P?c:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;ep(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(E=t_(this,Dt(o),Dt(d)),E&&(u-=d-(d=E._start))),this._tTime=u,this._time=d,this._act=!T,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&c&&!s&&!y&&(Kn(this,"onStart"),this._tTime!==u))return this;if(d>=o&&i>=0)for(h=this._first;h;){if(g=h._next,(h._act||d>=h._start)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(d-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(d-h._start)*h._ts,s,a),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=-At);break}}h=g}else{h=this._last;for(var S=i<0?i:d;h;){if(g=h._prev,(h._act||S<=h._end)&&h._ts&&E!==h){if(h.parent!==this)return this.render(i,s,a);if(h.render(h._ts>0?(S-h._start)*h._ts:(h._dirty?h.totalDuration():h._tDur)+(S-h._start)*h._ts,s,a||on&&ef(h)),d!==this._time||!this._ts&&!p){E=0,g&&(u+=this._zTime=S?-At:At);break}}h=g}}if(E&&!s&&(this.pause(),E.render(d>=o?0:-At)._zTime=d>=o?1:-1,this._ts))return this._start=M,Ml(this),this.render(i,s,a);this._onUpdate&&!s&&Kn(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&o)&&(M===this._start||Math.abs(T)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&Mr(this,1),!s&&!(i<0&&!o)&&(u||o||!l)&&(Kn(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(ji(s)||(s=ii(this,s,i)),!(i instanceof ka)){if(_n(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(Ft(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Ei(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-li);for(var l=[],c=this._first;c;)c._start>=o&&(c instanceof Wt?s&&l.push(c):(a&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,a)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return rn(i)?this.removeLabel(i):Ft(i)?this.killTweensOf(i):(i.parent===this&&Sl(this,i),i===this._recent&&(this._recent=this._last),$r(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(qn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ii(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Wt.delayedCall(0,s||Oa,a);return o.data="isPause",this._hasPause=1,Ei(this,o,ii(this,i))},t.removePause=function(i){var s=this._first;for(i=ii(this,i);s;)s._start===i&&s.data==="isPause"&&Mr(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),l=o.length;l--;)hr!==o[l]&&o[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ci(i),l=this._first,c=ji(s),u;l;)l instanceof Wt?$m(l._targets,o)&&(c?(!hr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&a.push(l):(u=l.getTweensOf(o,s)).length&&a.push.apply(a,u),l=l._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ii(a,i),l=s,c=l.startAt,u=l.onStart,f=l.onStartParams,d=l.immediateRender,h,g=Wt.to(a,ei({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale())||At,onStart:function(){if(a.pause(),!h){var m=s.duration||Math.abs((o-(c&&"time"in c?c.time:a._time))/a.timeScale());g._dur!==m&&Xs(g,m,0,1).render(g._time,!0,!0),h=1}u&&u.apply(g,f||[])}},s));return d?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,ei({startAt:{time:ii(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),Of(this,ii(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),Of(this,ii(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+At)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,l=this.labels,c;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(c in l)l[c]>=a&&(l[c]+=i);return $r(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),$r(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,l=li,c,u,f;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(f=a.parent;o;)c=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>l&&a._sort&&o._ts&&!a._lock?(a._lock=1,Ei(a,o,u-o._delay,1)._lock=0):l=u,u<0&&o._ts&&(s-=u,(!f&&!a._dp||f&&f.smoothChildTiming)&&(a._start+=Dt(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-1/0),l=0),o._end>s&&o._ts&&(s=o._end),o=c;Xs(a,a===Lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Lt._ts&&(Ud(Lt,sl(i,Lt)),Ld=qn.frame),qn.frame>=If){If+=jn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&jn.autoSleep&&qn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||qn.sleep()}}},e})(ka);ei(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var g_=function(e,t,n,i,s,a,o){var l=new Un(this._pt,e,t,0,1,lp,null,s),c=0,u=0,f,d,h,g,_,m,p,E;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Ba(i)),a&&(E=[n,i],a(E,e,t),n=E[0],i=E[1]),d=n.match(Rl)||[];f=Rl.exec(i);)g=f[0],_=i.substring(c,f.index),h?h=(h+1)%5:_.substr(-5)==="rgba("&&(h=1),g!==d[u++]&&(m=parseFloat(d[u-1])||0,l._pt={_next:l._pt,p:_||u===1?_:",",s:m,c:g.charAt(1)==="="?Is(m,g)-m:parseFloat(g)-m,m:h&&h<4?Math.round:0},c=Rl.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=o,(Cd.test(i)||p)&&(l.e=0),this._pt=l,l},tf=function(e,t,n,i,s,a,o,l,c,u){Ft(i)&&(i=i(s||0,e,a));var f=e[t],d=n!=="get"?n:Ft(f)?c?e[t.indexOf("set")||!Ft(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():f,h=Ft(f)?c?y_:ap:rf,g;if(rn(i)&&(~i.indexOf("random(")&&(i=Ba(i)),i.charAt(1)==="="&&(g=Is(d,i)+(dn(d)||0),(g||g===0)&&(i=g))),!u||d!==i||Dc)return!isNaN(d*i)&&i!==""?(g=new Un(this._pt,e,t,+d||0,i-(d||0),typeof f=="boolean"?T_:op,0,h),c&&(g.fp=c),o&&g.modifier(o,this,e),this._pt=g):(!f&&!(t in e)&&Zu(t,i),g_.call(this,e,t,d,i,h,l||jn.stringFilter,c))},v_=function(e,t,n,i,s){if(Ft(e)&&(e=ba(e,s,t,n,i)),!Li(e)||e.style&&e.nodeType||_n(e)||Ad(e))return rn(e)?ba(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=ba(e[o],s,t,n,i);return a},ip=function(e,t,n,i,s,a){var o,l,c,u;if(Xn[e]&&(o=new Xn[e]).init(s,o.rawVars?t[e]:v_(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=l=new Un(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ds))for(c=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)c[o._props[u]]=l;return o},hr,Dc,nf=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,f=i.yoyoEase,d=i.keyframes,h=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,E=p&&p.data==="nested"?p.vars.targets:m,T=e._overwrite==="auto"&&!Yu,M=e.timeline,y,A,w,P,v,S,D,I,F,k,G,z,B;if(M&&(!d||!s)&&(s="none"),e._ease=Kr(s,Gs.ease),e._yEase=f?Qd(Kr(f===!0?s:f,Gs.ease)):0,f&&e._yoyo&&!e._repeat&&(f=e._yEase,e._yEase=e._ease,e._ease=f),e._from=!M&&!!i.runBackwards,!M||d&&!i.stagger){if(I=m[0]?qr(m[0]).harness:0,z=I&&i[I.prop],y=rl(i,ju),_&&(_._zTime<0&&_.progress(1),t<0&&u&&o&&!h?_.render(-1,!0):_.revert(u&&g?Vo:Ym),_._lazy=0),a){if(Mr(e._startAt=Wt.set(m,ei({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Ln(l),startAt:null,delay:0,onUpdate:c&&function(){return Kn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on||!o&&!h)&&e._startAt.revert(Vo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(u&&g&&!_){if(t&&(o=!1),w=ei({overwrite:!1,data:"isFromStart",lazy:o&&!_&&Ln(l),immediateRender:o,stagger:0,parent:p},y),z&&(w[I.prop]=z),Mr(e._startAt=Wt.set(m,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(on?e._startAt.revert(Vo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,At,At);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ln(l)||l&&!g,A=0;A<m.length;A++){if(v=m[A],D=v._gsap||Qu(m)[A]._gsap,e._ptLookup[A]=k={},bc[D.id]&&vr.length&&il(),G=E===m?A:E.indexOf(v),I&&(F=new I).init(v,z||y,e,G,E)!==!1&&(e._pt=P=new Un(e._pt,v,F.name,0,1,F.render,F,0,F.priority),F._props.forEach(function(q){k[q]=P}),F.priority&&(S=1)),!I||z)for(w in y)Xn[w]&&(F=ip(w,y,e,G,v,E))?F.priority&&(S=1):k[w]=P=tf.call(e,v,w,"get",y[w],G,E,0,i.stringFilter);e._op&&e._op[A]&&e.kill(v,e._op[A]),T&&e._pt&&(hr=e,Lt.killTweensOf(v,k,e.globalTime(t)),B=!e.parent,hr=0),e._pt&&l&&(bc[D.id]=1)}S&&cp(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,d&&t<=0&&M.render(li,!0,!0)},x_=function(e,t,n,i,s,a,o,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,f,d,h;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return Dc=1,e.vars[t]="+=0",nf(e,o),Dc=0,l?Fa(t+" not eligible for reset"):1;c.push(u)}for(h=c.length;h--;)f=c[h],u=f._pt||f,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,f.e&&(f.e=Bt(n)+dn(f.e)),f.b&&(f.b=u.s+dn(f.b))},S_=function(e,t){var n=e[0]?qr(e[0]).harness:0,i=n&&n.aliases,s,a,o,l;if(!i)return t;s=Hs({},t);for(a in i)if(a in s)for(l=i[a].split(","),o=l.length;o--;)s[l[o]]=s[a];return s},M_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(_n(t))o=n[e]||(n[e]=[]),t.forEach(function(l,c){return o.push({t:c/(t.length-1)*100,v:l,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},ba=function(e,t,n,i,s){return Ft(e)?e.call(t,n,i,s):rn(e)&&~e.indexOf("random(")?Ba(e):e},rp=Ju+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",sp={};In(rp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return sp[r]=1});var Wt=(function(r){Td(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Ea(i))||this;var l=o.vars,c=l.duration,u=l.delay,f=l.immediateRender,d=l.stagger,h=l.overwrite,g=l.keyframes,_=l.defaults,m=l.scrollTrigger,p=l.yoyoEase,E=i.parent||Lt,T=(_n(n)||Ad(n)?ji(n[0]):"length"in i)?[n]:ci(n),M,y,A,w,P,v,S,D;if(o._targets=T.length?Qu(T):Fa("GSAP target "+n+" not found. https://gsap.com",!jn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=h,g||d||io(c)||io(u)){if(i=o.vars,M=o.timeline=new Tn({data:"nested",defaults:_||{},targets:E&&E.data==="nested"?E.vars.targets:T}),M.kill(),M.parent=M._dp=Vi(o),M._start=0,d||io(c)||io(u)){if(w=T.length,S=d&&Hd(d),Li(d))for(P in d)~rp.indexOf(P)&&(D||(D={}),D[P]=d[P]);for(y=0;y<w;y++)A=rl(i,sp),A.stagger=0,p&&(A.yoyoEase=p),D&&Hs(A,D),v=T[y],A.duration=+ba(c,Vi(o),y,v,T),A.delay=(+ba(u,Vi(o),y,v,T)||0)-o._delay,!d&&w===1&&A.delay&&(o._delay=u=A.delay,o._start+=u,A.delay=0),M.to(v,A,S?S(y,v,T):0),M._ease=ot.none;M.duration()?c=u=0:o.timeline=0}else if(g){Ea(ei(M.vars.defaults,{ease:"none"})),M._ease=Kr(g.ease||i.ease||"none");var I=0,F,k,G;if(_n(g))g.forEach(function(z){return M.to(T,z,">")}),M.duration();else{A={};for(P in g)P==="ease"||P==="easeEach"||M_(P,g[P],A,g.easeEach);for(P in A)for(F=A[P].sort(function(z,B){return z.t-B.t}),I=0,y=0;y<F.length;y++)k=F[y],G={ease:k.e,duration:(k.t-(y?F[y-1].t:0))/100*c},G[P]=k.v,M.to(T,G,I),I+=G.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||o.duration(c=M.duration())}else o.timeline=0;return h===!0&&!Yu&&(hr=Vi(o),Lt.killTweensOf(T),hr=0),Ei(E,Vi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(f||!c&&!g&&o._start===Dt(E._time)&&Ln(f)&&Jm(Vi(o))&&E.data!=="nested")&&(o._tTime=-At,o.render(Math.max(0,-u)||0)),m&&zd(Vi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,l=this._tDur,c=this._dur,u=i<0,f=i>l-At&&!u?l:i<At?0:i,d,h,g,_,m,p,E,T,M;if(!c)e_(this,i,s,a);else if(f!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(d=f,T=this.timeline,this._repeat){if(_=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(d=Dt(f%_),f===l?(g=this._repeat,d=c):(m=Dt(f/_),g=~~m,g&&g===m?(d=c,g--):d>c&&(d=c)),p=this._yoyo&&g&1,p&&(M=this._yEase,d=c-d),m=Ws(this._tTime,_),d===o&&!a&&this._initted&&g===m)return this._tTime=f,this;g!==m&&(T&&this._yEase&&ep(T,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==_&&this._initted&&(this._lock=a=1,this.render(Dt(_*g),!0).invalidate()._lock=0))}if(!this._initted){if(kd(this,u?i:d,a,s,f))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(c!==this._dur)return this.render(i,s,a)}if(this._tTime=f,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=E=(M||this._ease)(d/c),this._from&&(this.ratio=E=1-E),!o&&f&&!s&&!m&&(Kn(this,"onStart"),this._tTime!==f))return this;for(h=this._pt;h;)h.r(E,h.d),h=h._next;T&&T.render(i<0?i:T._dur*T._ease(d/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&Ac(this,i,s,a),Kn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Kn(this,"onRepeat"),(f===this._tDur||!f)&&this._tTime===f&&(u&&!this._onUpdate&&Ac(this,i,!0,!0),(i||!c)&&(f===this._tDur&&this._ts>0||!f&&this._ts<0)&&Mr(this,1),!s&&!(u&&!o)&&(f||o||p)&&(Kn(this,f===l?"onComplete":"onReverseComplete",!0),this._prom&&!(f<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,l){za||qn.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||nf(this,c),u=this._ease(c/this._dur),x_(this,i,s,a,o,u,c,l)?this.resetTo(i,s,a,o,1):(yl(this,0),this.parent||Od(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!on),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,hr&&hr.vars.overwrite!==!0)._first||pa(this),this.parent&&a!==this.timeline.totalDuration()&&Xs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,l=i?ci(i):o,c=this._ptLookup,u=this._pt,f,d,h,g,_,m,p;if((!s||s==="all")&&Zm(o,l))return s==="all"&&(this._pt=0),pa(this);for(f=this._op=this._op||[],s!=="all"&&(rn(s)&&(_={},In(s,function(E){return _[E]=1}),s=_),s=S_(o,s)),p=o.length;p--;)if(~l.indexOf(o[p])){d=c[p],s==="all"?(f[p]=s,g=d,h={}):(h=f[p]=f[p]||{},g=s);for(_ in g)m=d&&d[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Sl(this,m,"_pt"),delete d[_]),h!=="all"&&(h[_]=1)}return this._initted&&!this._pt&&u&&pa(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Ta(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Ta(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Lt.killTweensOf(i,s,a)},e})(ka);ei(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});In("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Tn,t=Cc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var rf=function(e,t,n){return e[t]=n},ap=function(e,t,n){return e[t](n)},y_=function(e,t,n,i){return e[t](i.fp,n)},E_=function(e,t,n){return e.setAttribute(t,n)},sf=function(e,t){return Ft(e[t])?ap:qu(e[t])&&e.setAttribute?E_:rf},op=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},T_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},lp=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},af=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},b_=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},A_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Sl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},w_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},cp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Un=(function(){function r(t,n,i,s,a,o,l,c,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||op,this.d=l||this,this.set=c||rf,this.pr=u||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=w_,this.m=n,this.mt=s,this.tween=i},r})();In(Ju+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ju[r]=1});Qn.TweenMax=Qn.TweenLite=Wt;Qn.TimelineLite=Qn.TimelineMax=Tn;Lt=new Tn({sortChildren:!1,defaults:Gs,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});jn.stringFilter=Jd;var Zr=[],Ho={},C_=[],zf=0,R_=0,Ul=function(e){return(Ho[e]||C_).map(function(t){return t()})},Lc=function(){var e=Date.now(),t=[];e-zf>2&&(Ul("matchMediaInit"),Zr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,l,c;for(o in i)a=Si.matchMedia(i[o]).matches,a&&(l=1),a!==s[o]&&(s[o]=a,c=1);c&&(n.revert(),l&&t.push(n))}),Ul("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),zf=e,Ul("matchMedia"))},up=(function(){function r(t,n){this.selector=n&&Rc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=R_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ft(n)&&(s=i,i=n,n=Ft);var a=this,o=function(){var c=Pt,u=a.selector,f;return c&&c!==a&&c.data.push(a),s&&(a.selector=Rc(s)),Pt=a,f=i.apply(a,arguments),Ft(f)&&a._r.push(f),Pt=c,a.selector=u,a.isReverted=!1,f};return a.last=o,n===Ft?o(a,function(l){return a.add(null,l)}):n?a[n]=o:o},e.ignore=function(n){var i=Pt;Pt=null,n(this),Pt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,f){return f.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Wt)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Zr.length;a--;)Zr[a].id===this.id&&Zr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),P_=(function(){function r(t){this.contexts=[],this.scope=t,Pt&&Pt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Li(n)||(n={matches:n});var a=new up(0,s||this.scope),o=a.conditions={},l,c,u;Pt&&!a.selector&&(a.selector=Pt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(c in n)c==="all"?u=1:(l=Si.matchMedia(n[c]),l&&(Zr.indexOf(a)<0&&Zr.push(a),(o[c]=l.matches)&&(u=1),l.addListener?l.addListener(Lc):l.addEventListener("change",Lc)));return u&&i(a,function(f){return a.add(null,f)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),al={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Kd(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=ci(e)[0]);var s=qr(e||{}).get,a=n?Fd:Nd;return n==="native"&&(n=""),e&&(t?a((Xn[t]&&Xn[t].get||s)(e,t,n,i)):function(o,l,c){return a((Xn[o]&&Xn[o].get||s)(e,o,l,c))})},quickSetter:function(e,t,n){if(e=ci(e),e.length>1){var i=e.map(function(u){return On.quickSetter(u,t,n)}),s=i.length;return function(u){for(var f=s;f--;)i[f](u)}}e=e[0]||{};var a=Xn[t],o=qr(e),l=o.harness&&(o.harness.aliases||{})[t]||t,c=a?function(u){var f=new a;Ds._pt=0,f.init(e,n?u+n:u,Ds,0,[e]),f.render(1,f),Ds._pt&&af(1,Ds)}:o.set(e,l);return a?c:function(u){return c(e,l,n?u+n:u,o,1)}},quickTo:function(e,t,n){var i,s=On.to(e,ei((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(l,c,u){return s.resetTo(t,l,c,u)};return a.tween=s,a},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Kr(e.ease,Gs.ease)),Uf(Gs,e||{})},config:function(e){return Uf(jn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Xn[o]&&!Qn[o]&&Fa(t+" effect requires "+o+" plugin.")}),Pl[t]=function(o,l,c){return n(ci(o),ei(l||{},s),c)},a&&(Tn.prototype[t]=function(o,l,c){return this.add(Pl[t](o,Li(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ot[e]=Kr(t)},parseEase:function(e,t){return arguments.length?Kr(e,t):ot},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=Ln(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Ei(n,i,i._start-i._delay),i=s;return Ei(Lt,n,0),n},context:function(e,t){return e?new up(e,t):Pt},matchMedia:function(e){return new P_(e)},matchMediaRefresh:function(){return Zr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Lc()},addEventListener:function(e,t){var n=Ho[e]||(Ho[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Ho[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:l_,wrapYoyo:c_,distribute:Hd,random:Xd,snap:Wd,normalize:o_,getUnit:dn,clamp:i_,splitColor:Zd,toArray:ci,selector:Rc,mapRange:qd,pipe:s_,unitize:a_,interpolate:u_,shuffle:Gd},install:Pd,effects:Pl,ticker:qn,updateRoot:Tn.updateRoot,plugins:Xn,globalTimeline:Lt,core:{PropTween:Un,globals:Dd,Tween:Wt,Timeline:Tn,Animation:ka,getCache:qr,_removeLinkedListItem:Sl,reverting:function(){return on},context:function(e){return e&&Pt&&(Pt.data.push(e),e._ctx=Pt),Pt},suppressOverwrites:function(e){return Yu=e}}};In("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return al[r]=Wt[r]});qn.add(Tn.updateRoot);Ds=al.to({},{duration:0});var D_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},L_=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=D_(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Nl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var l,c;if(rn(s)&&(l={},In(s,function(u){return l[u]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}L_(o,s)}}}},On=al.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,l;this.tween=n;for(a in t)l=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(l||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=l,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)on?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Nl("roundProps",Pc),Nl("modifiers"),Nl("snap",Wd))||al;Wt.version=Tn.version=On.version="3.14.2";Rd=1;$u()&&Ys();ot.Power0;ot.Power1;ot.Power2;ot.Power3;ot.Power4;ot.Linear;ot.Quad;ot.Cubic;ot.Quart;ot.Quint;ot.Strong;ot.Elastic;ot.Back;ot.SteppedEase;ot.Bounce;ot.Sine;ot.Expo;ot.Circ;var kf,dr,Us,of,Gr,Vf,lf,I_=function(){return typeof window<"u"},Ji={},Fr=180/Math.PI,Ns=Math.PI/180,cs=Math.atan2,Gf=1e8,cf=/([A-Z])/g,U_=/(left|right|width|margin|padding|x)/i,N_=/[\s,\(]\S/,Ti={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Ic=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},F_=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},O_=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},B_=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},z_=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},fp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},hp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},k_=function(e,t,n){return e.style[t]=n},V_=function(e,t,n){return e.style.setProperty(t,n)},G_=function(e,t,n){return e._gsap[t]=n},H_=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},W_=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},X_=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},It="transform",Nn=It+"Origin",Y_=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in Ji&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Ti[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Gi(i,o)}):this.tfm[e]=a.x?a[e]:Gi(i,e),e===Nn&&(this.tfm.zOrigin=a.zOrigin);else return Ti.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(It)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Nn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},dp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},q_=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(cf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=lf(),(!s||!s.isStart)&&!n[It]&&(dp(n),i.zOrigin&&n[Nn]&&(n[Nn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},pp=function(e,t){var n={target:e,props:[],revert:q_,save:Y_};return e._gsap||On.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},mp,Uc=function(e,t){var n=dr.createElementNS?dr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):dr.createElement(e);return n&&n.style?n:dr.createElement(e)},Zn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(cf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,qs(t)||t,1)||""},Hf="O,Moz,ms,Ms,Webkit".split(","),qs=function(e,t,n){var i=t||Gr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Hf[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Hf[a]:"")+e},Nc=function(){I_()&&window.document&&(kf=window,dr=kf.document,Us=dr.documentElement,Gr=Uc("div")||{style:{}},Uc("div"),It=qs(It),Nn=It+"Origin",Gr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",mp=!!qs("perspective"),lf=On.core.reverting,of=1)},Wf=function(e){var t=e.ownerSVGElement,n=Uc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Us.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Us.removeChild(n),s},Xf=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},_p=function(e){var t,n;try{t=e.getBBox()}catch{t=Wf(e),n=1}return t&&(t.width||t.height)||n||(t=Wf(e)),t&&!t.width&&!t.x&&!t.y?{x:+Xf(e,["x","cx","x1"])||0,y:+Xf(e,["y","cy","y1"])||0,width:0,height:0}:t},gp=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&_p(e))},yr=function(e,t){if(t){var n=e.style,i;t in Ji&&t!==Nn&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(cf,"-$1").toLowerCase())):n.removeAttribute(t)}},pr=function(e,t,n,i,s,a){var o=new Un(e._pt,t,n,0,1,a?hp:fp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Yf={deg:1,rad:1,turn:1},$_={grid:1,flex:1},Er=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Gr.style,l=U_.test(t),c=e.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),f=100,d=i==="px",h=i==="%",g,_,m,p;if(i===a||!s||Yf[i]||Yf[a])return s;if(a!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&gp(e),(h||a==="%")&&(Ji[t]||~t.indexOf("adius")))return g=p?e.getBBox()[l?"width":"height"]:e[u],Bt(h?s/g*f:s/100*g);if(o[l?"width":"height"]=f+(d?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===dr||!_.appendChild)&&(_=dr.body),m=_._gsap,m&&h&&m.width&&l&&m.time===qn.time&&!m.uncache)return Bt(s/m.width*f);if(h&&(t==="height"||t==="width")){var E=e.style[t];e.style[t]=f+i,g=e[u],E?e.style[t]=E:yr(e,t)}else(h||a==="%")&&!$_[Zn(_,"display")]&&(o.position=Zn(e,"position")),_===e&&(o.position="static"),_.appendChild(Gr),g=Gr[u],_.removeChild(Gr),o.position="absolute";return l&&h&&(m=qr(_),m.time=qn.time,m.width=_[u]),Bt(d?g*s/f:g&&s?f/g*s:0)},Gi=function(e,t,n,i){var s;return of||Nc(),t in Ti&&t!=="transform"&&(t=Ti[t],~t.indexOf(",")&&(t=t.split(",")[0])),Ji[t]&&t!=="transform"?(s=Ga(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ll(Zn(e,Nn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ol[t]&&ol[t](e,t,n)||Zn(e,t)||Id(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Er(e,t,s,n)+n:s},K_=function(e,t,n,i){if(!n||n==="none"){var s=qs(t,e,1),a=s&&Zn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Zn(e,"borderTopColor"))}var o=new Un(this._pt,e.style,t,0,1,lp),l=0,c=0,u,f,d,h,g,_,m,p,E,T,M,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Zn(e,t)||i,_?e.style[t]=_:yr(e,t)),u=[n,i],Jd(u),n=u[0],i=u[1],d=n.match(Ps)||[],y=i.match(Ps)||[],y.length){for(;f=Ps.exec(i);)m=f[0],E=i.substring(l,f.index),g?g=(g+1)%5:(E.substr(-5)==="rgba("||E.substr(-5)==="hsla(")&&(g=1),m!==(_=d[c++]||"")&&(h=parseFloat(_)||0,M=_.substr((h+"").length),m.charAt(1)==="="&&(m=Is(h,m)+M),p=parseFloat(m),T=m.substr((p+"").length),l=Ps.lastIndex-T.length,T||(T=T||jn.units[t]||M,l===i.length&&(i+=T,o.e+=T)),M!==T&&(h=Er(e,t,_,T)||0),o._pt={_next:o._pt,p:E||c===1?E:",",s:h,c:p-h,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=l<i.length?i.substring(l,i.length):""}else o.r=t==="display"&&i==="none"?hp:fp;return Cd.test(i)&&(o.e=0),this._pt=o,o},qf={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Z_=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=qf[n]||n,t[1]=qf[i]||i,t.join(" ")},j_=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)o=s[c],Ji[o]&&(l=1,o=o==="transformOrigin"?Nn:It),yr(n,o);l&&(yr(n,It),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Ga(n,1),a.uncache=1,dp(i)))}},ol={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Un(e._pt,t,n,0,0,j_);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Va=[1,0,0,1,0,0],vp={},xp=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},$f=function(e){var t=Zn(e,It);return xp(t)?Va:t.substr(7).match(wd).map(Bt)},uf=function(e,t){var n=e._gsap||qr(e),i=e.style,s=$f(e),a,o,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Va:s):(s===Va&&!e.offsetParent&&e!==Us&&!n.svg&&(l=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,o=e.nextElementSibling,Us.appendChild(e)),s=$f(e),l?i.display=l:yr(e,"display"),c&&(o?a.insertBefore(e,o):a?a.appendChild(e):Us.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Fc=function(e,t,n,i,s,a){var o=e._gsap,l=s||uf(e,!0),c=o.xOrigin||0,u=o.yOrigin||0,f=o.xOffset||0,d=o.yOffset||0,h=l[0],g=l[1],_=l[2],m=l[3],p=l[4],E=l[5],T=t.split(" "),M=parseFloat(T[0])||0,y=parseFloat(T[1])||0,A,w,P,v;n?l!==Va&&(w=h*m-g*_)&&(P=M*(m/w)+y*(-_/w)+(_*E-m*p)/w,v=M*(-g/w)+y*(h/w)-(h*E-g*p)/w,M=P,y=v):(A=_p(e),M=A.x+(~T[0].indexOf("%")?M/100*A.width:M),y=A.y+(~(T[1]||T[0]).indexOf("%")?y/100*A.height:y)),i||i!==!1&&o.smooth?(p=M-c,E=y-u,o.xOffset=f+(p*h+E*_)-p,o.yOffset=d+(p*g+E*m)-E):o.xOffset=o.yOffset=0,o.xOrigin=M,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Nn]="0px 0px",a&&(pr(a,o,"xOrigin",c,M),pr(a,o,"yOrigin",u,y),pr(a,o,"xOffset",f,o.xOffset),pr(a,o,"yOffset",d,o.yOffset)),e.setAttribute("data-svg-origin",M+" "+y)},Ga=function(e,t){var n=e._gsap||new np(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",l=getComputedStyle(e),c=Zn(e,Nn)||"0",u,f,d,h,g,_,m,p,E,T,M,y,A,w,P,v,S,D,I,F,k,G,z,B,q,ee,R,ne,be,Pe,Fe,We;return u=f=d=_=m=p=E=T=M=0,h=g=1,n.svg=!!(e.getCTM&&gp(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[It]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[It]!=="none"?l[It]:"")),i.scale=i.rotate=i.translate="none"),w=uf(e,n.svg),n.svg&&(n.uncache?(q=e.getBBox(),c=n.xOrigin-q.x+"px "+(n.yOrigin-q.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Fc(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,w)),y=n.xOrigin||0,A=n.yOrigin||0,w!==Va&&(D=w[0],I=w[1],F=w[2],k=w[3],u=G=w[4],f=z=w[5],w.length===6?(h=Math.sqrt(D*D+I*I),g=Math.sqrt(k*k+F*F),_=D||I?cs(I,D)*Fr:0,E=F||k?cs(F,k)*Fr+_:0,E&&(g*=Math.abs(Math.cos(E*Ns))),n.svg&&(u-=y-(y*D+A*F),f-=A-(y*I+A*k))):(We=w[6],Pe=w[7],R=w[8],ne=w[9],be=w[10],Fe=w[11],u=w[12],f=w[13],d=w[14],P=cs(We,be),m=P*Fr,P&&(v=Math.cos(-P),S=Math.sin(-P),B=G*v+R*S,q=z*v+ne*S,ee=We*v+be*S,R=G*-S+R*v,ne=z*-S+ne*v,be=We*-S+be*v,Fe=Pe*-S+Fe*v,G=B,z=q,We=ee),P=cs(-F,be),p=P*Fr,P&&(v=Math.cos(-P),S=Math.sin(-P),B=D*v-R*S,q=I*v-ne*S,ee=F*v-be*S,Fe=k*S+Fe*v,D=B,I=q,F=ee),P=cs(I,D),_=P*Fr,P&&(v=Math.cos(P),S=Math.sin(P),B=D*v+I*S,q=G*v+z*S,I=I*v-D*S,z=z*v-G*S,D=B,G=q),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),h=Bt(Math.sqrt(D*D+I*I+F*F)),g=Bt(Math.sqrt(z*z+We*We)),P=cs(G,z),E=Math.abs(P)>2e-4?P*Fr:0,M=Fe?1/(Fe<0?-Fe:Fe):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!xp(Zn(e,It)),B&&e.setAttribute("transform",B))),Math.abs(E)>90&&Math.abs(E)<270&&(s?(h*=-1,E+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,E+=E<=0?180:-180)),t=t||n.uncache,n.x=u-((n.xPercent=u&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-u)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=f-((n.yPercent=f&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-f)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=d+a,n.scaleX=Bt(h),n.scaleY=Bt(g),n.rotation=Bt(_)+o,n.rotationX=Bt(m)+o,n.rotationY=Bt(p)+o,n.skewX=E+o,n.skewY=T+o,n.transformPerspective=M+a,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Nn]=ll(c)),n.xOffset=n.yOffset=0,n.force3D=jn.force3D,n.renderTransform=n.svg?Q_:mp?Sp:J_,n.uncache=0,n},ll=function(e){return(e=e.split(" "))[0]+" "+e[1]},Fl=function(e,t,n){var i=dn(t);return Bt(parseFloat(t)+parseFloat(Er(e,"x",n+"px",i)))+i},J_=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Sp(e,t)},Cr="0deg",ia="0px",Rr=") ",Sp=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.z,c=n.rotation,u=n.rotationY,f=n.rotationX,d=n.skewX,h=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,E=n.target,T=n.zOrigin,M="",y=p==="auto"&&e&&e!==1||p===!0;if(T&&(f!==Cr||u!==Cr)){var A=parseFloat(u)*Ns,w=Math.sin(A),P=Math.cos(A),v;A=parseFloat(f)*Ns,v=Math.cos(A),a=Fl(E,a,w*v*-T),o=Fl(E,o,-Math.sin(A)*-T),l=Fl(E,l,P*v*-T+T)}m!==ia&&(M+="perspective("+m+Rr),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(y||a!==ia||o!==ia||l!==ia)&&(M+=l!==ia||y?"translate3d("+a+", "+o+", "+l+") ":"translate("+a+", "+o+Rr),c!==Cr&&(M+="rotate("+c+Rr),u!==Cr&&(M+="rotateY("+u+Rr),f!==Cr&&(M+="rotateX("+f+Rr),(d!==Cr||h!==Cr)&&(M+="skew("+d+", "+h+Rr),(g!==1||_!==1)&&(M+="scale("+g+", "+_+Rr),E.style[It]=M||"translate(0, 0)"},Q_=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,l=n.rotation,c=n.skewX,u=n.skewY,f=n.scaleX,d=n.scaleY,h=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,E=n.forceCSS,T=parseFloat(a),M=parseFloat(o),y,A,w,P,v;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Ns,c*=Ns,y=Math.cos(l)*f,A=Math.sin(l)*f,w=Math.sin(l-c)*-d,P=Math.cos(l-c)*d,c&&(u*=Ns,v=Math.tan(c-u),v=Math.sqrt(1+v*v),w*=v,P*=v,u&&(v=Math.tan(u),v=Math.sqrt(1+v*v),y*=v,A*=v)),y=Bt(y),A=Bt(A),w=Bt(w),P=Bt(P)):(y=f,P=d,A=w=0),(T&&!~(a+"").indexOf("px")||M&&!~(o+"").indexOf("px"))&&(T=Er(h,"x",a,"px"),M=Er(h,"y",o,"px")),(g||_||m||p)&&(T=Bt(T+g-(g*y+_*w)+m),M=Bt(M+_-(g*A+_*P)+p)),(i||s)&&(v=h.getBBox(),T=Bt(T+i/100*v.width),M=Bt(M+s/100*v.height)),v="matrix("+y+","+A+","+w+","+P+","+T+","+M+")",h.setAttribute("transform",v),E&&(h.style[It]=v)},eg=function(e,t,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf("rad")?Fr:1),c=l-i,u=i+c+"deg",f,d;return o&&(f=s.split("_")[1],f==="short"&&(c%=a,c!==c%(a/2)&&(c+=c<0?a:-a)),f==="cw"&&c<0?c=(c+a*Gf)%a-~~(c/a)*a:f==="ccw"&&c>0&&(c=(c-a*Gf)%a-~~(c/a)*a)),e._pt=d=new Un(e._pt,t,n,i,c,F_),d.e=u,d.u="deg",e._props.push(n),d},Kf=function(e,t){for(var n in t)e[n]=t[n];return e},tg=function(e,t,n){var i=Kf({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,l,c,u,f,d,h,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),a[It]=t,o=Ga(n,1),yr(n,It),n.setAttribute("transform",c)):(c=getComputedStyle(n)[It],a[It]=t,o=Ga(n,1),a[It]=c);for(l in Ji)c=i[l],u=o[l],c!==u&&s.indexOf(l)<0&&(h=dn(c),g=dn(u),f=h!==g?Er(n,l,c,g):parseFloat(c),d=parseFloat(u),e._pt=new Un(e._pt,o,l,f,d-f,Ic),e._pt.u=g||0,e._props.push(l));Kf(o,i)};In("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ol[e>1?"border"+r:r]=function(o,l,c,u,f){var d,h;if(arguments.length<4)return d=a.map(function(g){return Gi(o,g,c)}),h=d.join(" "),h.split(d[0]).length===5?d[0]:h;d=(u+"").split(" "),h={},a.forEach(function(g,_){return h[g]=d[_]=d[_]||d[(_-1)/2|0]}),o.init(l,h,f)}});var Mp={name:"css",register:Nc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,l=n.vars.startAt,c,u,f,d,h,g,_,m,p,E,T,M,y,A,w,P,v;of||Nc(),this.styles=this.styles||pp(e),P=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(u=t[_],!(Xn[_]&&ip(_,t,n,i,e,s)))){if(h=typeof u,g=ol[_],h==="function"&&(u=u.call(n,i,e,s),h=typeof u),h==="string"&&~u.indexOf("random(")&&(u=Ba(u)),g)g(this,e,_,u,n)&&(w=1);else if(_.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(_)+"").trim(),u+="",xr.lastIndex=0,xr.test(c)||(m=dn(c),p=dn(u),p?m!==p&&(c=Er(e,_,c,p)+p):m&&(u+=m)),this.add(o,"setProperty",c,u,i,s,0,0,_),a.push(_),P.push(_,0,o[_]);else if(h!=="undefined"){if(l&&_ in l?(c=typeof l[_]=="function"?l[_].call(n,i,e,s):l[_],rn(c)&&~c.indexOf("random(")&&(c=Ba(c)),dn(c+"")||c==="auto"||(c+=jn.units[_]||dn(Gi(e,_))||""),(c+"").charAt(1)==="="&&(c=Gi(e,_))):c=Gi(e,_),d=parseFloat(c),E=h==="string"&&u.charAt(1)==="="&&u.substr(0,2),E&&(u=u.substr(2)),f=parseFloat(u),_ in Ti&&(_==="autoAlpha"&&(d===1&&Gi(e,"visibility")==="hidden"&&f&&(d=0),P.push("visibility",0,o.visibility),pr(this,o,"visibility",d?"inherit":"hidden",f?"inherit":"hidden",!f)),_!=="scale"&&_!=="transform"&&(_=Ti[_],~_.indexOf(",")&&(_=_.split(",")[0]))),T=_ in Ji,T){if(this.styles.save(_),v=u,h==="string"&&u.substring(0,6)==="var(--"){if(u=Zn(e,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var S=e.style.perspective;e.style.perspective=u,u=Zn(e,"perspective"),S?e.style.perspective=S:yr(e,"perspective")}f=parseFloat(u)}if(M||(y=e._gsap,y.renderTransform&&!t.parseTransform||Ga(e,t.parseTransform),A=t.smoothOrigin!==!1&&y.smooth,M=this._pt=new Un(this._pt,o,It,0,1,y.renderTransform,y,0,-1),M.dep=1),_==="scale")this._pt=new Un(this._pt,y,"scaleY",y.scaleY,(E?Is(y.scaleY,E+f):f)-y.scaleY||0,Ic),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){P.push(Nn,0,o[Nn]),u=Z_(u),y.svg?Fc(e,u,0,A,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==y.zOrigin&&pr(this,y,"zOrigin",y.zOrigin,p),pr(this,o,_,ll(c),ll(u)));continue}else if(_==="svgOrigin"){Fc(e,u,1,A,0,this);continue}else if(_ in vp){eg(this,y,_,d,E?Is(d,E+u):u);continue}else if(_==="smoothOrigin"){pr(this,y,"smooth",y.smooth,u);continue}else if(_==="force3D"){y[_]=u;continue}else if(_==="transform"){tg(this,u,e);continue}}else _ in o||(_=qs(_)||_);if(T||(f||f===0)&&(d||d===0)&&!N_.test(u)&&_ in o)m=(c+"").substr((d+"").length),f||(f=0),p=dn(u)||(_ in jn.units?jn.units[_]:m),m!==p&&(d=Er(e,_,c,p)),this._pt=new Un(this._pt,T?y:o,_,d,(E?Is(d,E+f):f)-d,!T&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?z_:Ic),this._pt.u=p||0,T&&v!==u?(this._pt.b=c,this._pt.e=v,this._pt.r=B_):m!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=O_);else if(_ in o)K_.call(this,e,_,c,E?E+u:u);else if(_ in e)this.add(e,_,c||e[_],E?E+u:u,i,s);else if(_!=="parseTransform"){Zu(_,u);continue}T||(_ in o?P.push(_,0,o[_]):typeof e[_]=="function"?P.push(_,2,e[_]()):P.push(_,1,c||e[_])),a.push(_)}}w&&cp(this)},render:function(e,t){if(t.tween._time||!lf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Gi,aliases:Ti,getSetter:function(e,t,n){var i=Ti[t];return i&&i.indexOf(",")<0&&(t=i),t in Ji&&t!==Nn&&(e._gsap.x||Gi(e,"x"))?n&&Vf===n?t==="scale"?H_:G_:(Vf=n||{})&&(t==="scale"?W_:X_):e.style&&!qu(e.style[t])?k_:~t.indexOf("-")?V_:sf(e,t)},core:{_removeProperty:yr,_getMatrix:uf}};On.utils.checkPrefix=qs;On.core.getStyleSaver=pp;(function(r,e,t,n){var i=In(r+","+e+","+t,function(s){Ji[s]=1});In(e,function(s){jn.units[s]="deg",vp[s]=1}),Ti[i[13]]=r+","+e,In(n,function(s){var a=s.split(":");Ti[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");In("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){jn.units[r]="px"});On.registerPlugin(Mp);var Je=On.registerPlugin(Mp)||On;Je.core.Tween;var ng="1.3.15";function yp(r,e,t){return Math.max(r,Math.min(e,t))}function ig(r,e,t){return(1-t)*r+t*e}function rg(r,e,t,n){return ig(r,e,1-Math.exp(-t*n))}function sg(r,e){return(r%e+e)%e}var ag=class{isRunning=!1;value=0;from=0;to=0;currentTime=0;lerp;duration;easing;onUpdate;advance(r){if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=r;const t=yp(0,this.currentTime/this.duration,1);e=t>=1;const n=e?1:this.easing(t);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=rg(this.value,this.to,this.lerp*60,r),Math.round(this.value)===this.to&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),this.onUpdate?.(this.value,e)}stop(){this.isRunning=!1}fromTo(r,e,{lerp:t,duration:n,easing:i,onStart:s,onUpdate:a}){this.from=this.value=r,this.to=e,this.lerp=t,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,s?.(),this.onUpdate=a}};function og(r,e){let t;return function(...n){let i=this;clearTimeout(t),t=setTimeout(()=>{t=void 0,r.apply(i,n)},e)}}var lg=class{constructor(r,e,{autoResize:t=!0,debounce:n=250}={}){this.wrapper=r,this.content=e,t&&(this.debouncedResize=og(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize,!1):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}width=0;height=0;scrollHeight=0;scrollWidth=0;debouncedResize;wrapperResizeObserver;contentResizeObserver;destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize,!1)}resize=()=>{this.onWrapperResize(),this.onContentResize()};onWrapperResize=()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)};onContentResize=()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)};get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},Ep=class{events={};emit(r,...e){let t=this.events[r]||[];for(let n=0,i=t.length;n<i;n++)t[n]?.(...e)}on(r,e){return this.events[r]?.push(e)||(this.events[r]=[e]),()=>{this.events[r]=this.events[r]?.filter(t=>e!==t)}}off(r,e){this.events[r]=this.events[r]?.filter(t=>e!==t)}destroy(){this.events={}}},Zf=100/6,ir={passive:!1},cg=class{constructor(r,e={wheelMultiplier:1,touchMultiplier:1}){this.element=r,this.options=e,window.addEventListener("resize",this.onWindowResize,!1),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,ir),this.element.addEventListener("touchstart",this.onTouchStart,ir),this.element.addEventListener("touchmove",this.onTouchMove,ir),this.element.addEventListener("touchend",this.onTouchEnd,ir)}touchStart={x:0,y:0};lastDelta={x:0,y:0};window={width:0,height:0};emitter=new Ep;on(r,e){return this.emitter.on(r,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize,!1),this.element.removeEventListener("wheel",this.onWheel,ir),this.element.removeEventListener("touchstart",this.onTouchStart,ir),this.element.removeEventListener("touchmove",this.onTouchMove,ir),this.element.removeEventListener("touchend",this.onTouchEnd,ir)}onTouchStart=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:r})};onTouchMove=r=>{const{clientX:e,clientY:t}=r.targetTouches?r.targetTouches[0]:r,n=-(e-this.touchStart.x)*this.options.touchMultiplier,i=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:r})};onTouchEnd=r=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:r})};onWheel=r=>{let{deltaX:e,deltaY:t,deltaMode:n}=r;const i=n===1?Zf:n===2?this.window.width:1,s=n===1?Zf:n===2?this.window.height:1;e*=i,t*=s,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:r})};onWindowResize=()=>{this.window={width:window.innerWidth,height:window.innerHeight}}},jf=r=>Math.min(1,1.001-Math.pow(2,-10*r)),ug=class{_isScrolling=!1;_isStopped=!1;_isLocked=!1;_preventNextNativeScrollEvent=!1;_resetVelocityTimeout=null;__rafID=null;isTouching;time=0;userData={};lastVelocity=0;velocity=0;direction=0;options;targetScroll;animatedScroll;animate=new ag;emitter=new Ep;dimensions;virtualScroll;constructor({wrapper:r=window,content:e=document.documentElement,eventsTarget:t=r,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:s=.075,touchInertiaExponent:a=1.7,duration:o,easing:l,lerp:c=.1,infinite:u=!1,orientation:f="vertical",gestureOrientation:d=f==="horizontal"?"both":"vertical",touchMultiplier:h=1,wheelMultiplier:g=1,autoResize:_=!0,prevent:m,virtualScroll:p,overscroll:E=!0,autoRaf:T=!1,anchors:M=!1,autoToggle:y=!1,allowNestedScroll:A=!1,__experimental__naiveDimensions:w=!1}={}){window.lenisVersion=ng,(!r||r===document.documentElement)&&(r=window),typeof o=="number"&&typeof l!="function"?l=jf:typeof l=="function"&&typeof o!="number"&&(o=1),this.options={wrapper:r,content:e,eventsTarget:t,smoothWheel:n,syncTouch:i,syncTouchLerp:s,touchInertiaExponent:a,duration:o,easing:l,lerp:c,infinite:u,gestureOrientation:d,orientation:f,touchMultiplier:h,wheelMultiplier:g,autoResize:_,prevent:m,virtualScroll:p,overscroll:E,autoRaf:T,anchors:M,autoToggle:y,allowNestedScroll:A,__experimental__naiveDimensions:w},this.dimensions=new lg(r,e,{autoResize:_}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.addEventListener("click",this.onClick,!1),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown,!1),this.virtualScroll=new cg(t,{touchMultiplier:h,wheelMultiplier:g}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&this.rootElement.addEventListener("transitionend",this.onTransitionEnd,{passive:!0}),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll,!1),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown,!1),this.options.anchors&&this.options.wrapper===window&&this.options.wrapper.removeEventListener("click",this.onClick,!1),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this.__rafID&&cancelAnimationFrame(this.__rafID)}on(r,e){return this.emitter.on(r,e)}off(r,e){return this.emitter.off(r,e)}onScrollEnd=r=>{r instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&r.stopPropagation()};dispatchScrollendEvent=()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))};onTransitionEnd=r=>{if(r.propertyName.includes("overflow")){const e=this.isHorizontal?"overflow-x":"overflow-y",t=getComputedStyle(this.rootElement)[e];["hidden","clip"].includes(t)?this.internalStop():this.internalStart()}};setScroll(r){this.isHorizontal?this.options.wrapper.scrollTo({left:r,behavior:"instant"}):this.options.wrapper.scrollTo({top:r,behavior:"instant"})}onClick=r=>{const t=r.composedPath().find(n=>n instanceof HTMLAnchorElement&&n.getAttribute("href")?.includes("#"));if(t){const n=t.getAttribute("href");if(n){const i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,s=`#${n.split("#")[1]}`;this.scrollTo(s,i)}}};onPointerDown=r=>{r.button===1&&this.reset()};onVirtualScroll=r=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(r)===!1)return;const{deltaX:e,deltaY:t,event:n}=r;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:n}),n.ctrlKey||n.lenisStopPropagation)return;const i=n.type.includes("touch"),s=n.type.includes("wheel");this.isTouching=n.type==="touchstart"||n.type==="touchmove";const a=e===0&&t===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&a&&!this.isStopped&&!this.isLocked){this.reset();return}const l=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(a||l)return;let c=n.composedPath();c=c.slice(0,c.indexOf(this.rootElement));const u=this.options.prevent;if(c.find(m=>m instanceof HTMLElement&&(typeof u=="function"&&u?.(m)||m.hasAttribute?.("data-lenis-prevent")||i&&m.hasAttribute?.("data-lenis-prevent-touch")||s&&m.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.checkNestedScroll(m,{deltaX:e,deltaY:t}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&s)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=t;this.options.gestureOrientation==="both"?d=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(d=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();const h=i&&this.options.syncTouch,_=i&&n.type==="touchend";_&&(d=Math.sign(this.velocity)*Math.pow(Math.abs(this.velocity),this.options.touchInertiaExponent)),this.scrollTo(this.targetScroll+d,{programmatic:!1,...h?{lerp:_?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})};resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}onNativeScroll=()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const r=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-r,this.direction=Math.sign(this.animatedScroll-r),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}};reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}raf=r=>{const e=r-(this.time||r);this.time=r,this.animate.advance(e*.001),this.options.autoRaf&&(this.__rafID=requestAnimationFrame(this.raf))};scrollTo(r,{offset:e=0,immediate:t=!1,lock:n=!1,duration:i=this.options.duration,easing:s=this.options.easing,lerp:a=this.options.lerp,onStart:o,onComplete:l,force:c=!1,programmatic:u=!0,userData:f}={}){if(!((this.isStopped||this.isLocked)&&!c)){if(typeof r=="string"&&["top","left","start","#"].includes(r))r=0;else if(typeof r=="string"&&["bottom","right","end"].includes(r))r=this.limit;else{let d;if(typeof r=="string"?(d=document.querySelector(r),d||(r==="#top"?r=0:console.warn("Lenis: Target not found",r))):r instanceof HTMLElement&&r?.nodeType&&(d=r),d){if(this.options.wrapper!==window){const g=this.rootElement.getBoundingClientRect();e-=this.isHorizontal?g.left:g.top}const h=d.getBoundingClientRect();r=(this.isHorizontal?h.left:h.top)+this.animatedScroll}}if(typeof r=="number"){if(r+=e,r=Math.round(r),this.options.infinite){if(u){this.targetScroll=this.animatedScroll=this.scroll;const d=r-this.animatedScroll;d>this.limit/2?r=r-this.limit:d<-this.limit/2&&(r=r+this.limit)}}else r=yp(0,r,this.limit);if(r===this.targetScroll){o?.(this),l?.(this);return}if(this.userData=f??{},t){this.animatedScroll=this.targetScroll=r,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}u||(this.targetScroll=r),typeof i=="number"&&typeof s!="function"?s=jf:typeof s=="function"&&typeof i!="number"&&(i=1),this.animate.fromTo(this.animatedScroll,r,{duration:i,easing:s,lerp:a,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",o?.(this)},onUpdate:(d,h)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=d-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=d,this.setScroll(this.scroll),u&&(this.targetScroll=d),h||this.emit(),h&&(this.reset(),this.emit(),l?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}checkNestedScroll(r,{deltaX:e,deltaY:t}){const n=Date.now(),i=r._lenis??={};let s,a,o,l,c,u,f,d;const h=this.options.gestureOrientation;if(n-(i.time??0)>2e3){i.time=Date.now();const y=window.getComputedStyle(r);i.computedStyle=y;const A=y.overflowX,w=y.overflowY;if(s=["auto","overlay","scroll"].includes(A),a=["auto","overlay","scroll"].includes(w),i.hasOverflowX=s,i.hasOverflowY=a,!s&&!a||h==="vertical"&&!a||h==="horizontal"&&!s)return!1;c=r.scrollWidth,u=r.scrollHeight,f=r.clientWidth,d=r.clientHeight,o=c>f,l=u>d,i.isScrollableX=o,i.isScrollableY=l,i.scrollWidth=c,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=d}else o=i.isScrollableX,l=i.isScrollableY,s=i.hasOverflowX,a=i.hasOverflowY,c=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,d=i.clientHeight;if(!s&&!a||!o&&!l||h==="vertical"&&(!a||!l)||h==="horizontal"&&(!s||!o))return!1;let g;if(h==="horizontal")g="x";else if(h==="vertical")g="y";else{const y=e!==0,A=t!==0;y&&s&&o&&(g="x"),A&&a&&l&&(g="y")}if(!g)return!1;let _,m,p,E,T;if(g==="x")_=r.scrollLeft,m=c-f,p=e,E=s,T=o;else if(g==="y")_=r.scrollTop,m=u-d,p=t,E=a,T=l;else return!1;return(p>0?_<m:_>0)&&E&&T}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.__experimental__naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const r=this.options.wrapper;return this.isHorizontal?r.scrollX??r.scrollLeft:r.scrollY??r.scrollTop}get scroll(){return this.options.infinite?sg(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(r){this._isScrolling!==r&&(this._isScrolling=r,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(r){this._isStopped!==r&&(this._isStopped=r,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(r){this._isLocked!==r&&(this._isLocked=r,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get className(){let r="lenis";return this.options.autoToggle&&(r+=" lenis-autoToggle"),this.isStopped&&(r+=" lenis-stopped"),this.isLocked&&(r+=" lenis-locked"),this.isScrolling&&(r+=" lenis-scrolling"),this.isScrolling==="smooth"&&(r+=" lenis-smooth"),r}updateClassName(){this.cleanUpClassName(),this.rootElement.className=`${this.rootElement.className} ${this.className}`.trim()}cleanUpClassName(){this.rootElement.className=this.rootElement.className.replace(/lenis(-\w+)?/g,"").trim()}};function fg(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function hg(r,e,t){return e&&fg(r.prototype,e),r}var sn,Wo,$n,mr,_r,Fs,Tp,Or,Aa,bp,Xi,pi,Ap,wp=function(){return sn||typeof window<"u"&&(sn=window.gsap)&&sn.registerPlugin&&sn},Cp=1,Ls=[],st=[],Ci=[],wa=Date.now,Oc=function(e,t){return t},dg=function(){var e=Aa.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,st),i.push.apply(i,Ci),st=n,Ci=i,Oc=function(a,o){return t[a](o)}},Sr=function(e,t){return~Ci.indexOf(e)&&Ci[Ci.indexOf(e)+1][t]},Ca=function(e){return!!~bp.indexOf(e)},xn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},vn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ro="scrollLeft",so="scrollTop",Bc=function(){return Xi&&Xi.isPressed||st.cache++},cl=function(e,t){var n=function i(s){if(s||s===0){Cp&&($n.history.scrollRestoration="manual");var a=Xi&&Xi.isPressed;s=i.v=Math.round(s)||(Xi&&Xi.iOS?1:0),e(s),i.cacheID=st.cache,a&&Oc("ss",s)}else(t||st.cache!==i.cacheID||Oc("ref"))&&(i.cacheID=st.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},bn={s:ro,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:cl(function(r){return arguments.length?$n.scrollTo(r,Kt.sc()):$n.pageXOffset||mr[ro]||_r[ro]||Fs[ro]||0})},Kt={s:so,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:bn,sc:cl(function(r){return arguments.length?$n.scrollTo(bn.sc(),r):$n.pageYOffset||mr[so]||_r[so]||Fs[so]||0})},Dn=function(e,t){return(t&&t._ctx&&t._ctx.selector||sn.utils.toArray)(e)[0]||(typeof e=="string"&&sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},pg=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Tr=function(e,t){var n=t.s,i=t.sc;Ca(e)&&(e=mr.scrollingElement||_r);var s=st.indexOf(e),a=i===Kt.sc?1:2;!~s&&(s=st.push(e)-1),st[s+a]||xn(e,"scroll",Bc);var o=st[s+a],l=o||(st[s+a]=cl(Sr(e,n),!0)||(Ca(e)?i:cl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,o||(l.smooth=sn.getProperty(e,"scrollBehavior")==="smooth"),l},zc=function(e,t,n){var i=e,s=e,a=wa(),o=a,l=t||50,c=Math.max(500,l*3),u=function(g,_){var m=wa();_||m-a>l?(s=i,i=g,o=a,a=m):n?i+=g:i=s+(g-s)/(m-o)*(a-o)},f=function(){s=i=n?0:i,o=a=0},d=function(g){var _=o,m=s,p=wa();return(g||g===0)&&g!==i&&u(g),a===o||p-o>c?0:(i+(n?m:-m))/((n?p:a)-_)*1e3};return{update:u,reset:f,getVelocity:d}},ra=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},Jf=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Rp=function(){Aa=sn.core.globals().ScrollTrigger,Aa&&Aa.core&&dg()},Pp=function(e){return sn=e||wp(),!Wo&&sn&&typeof document<"u"&&document.body&&($n=window,mr=document,_r=mr.documentElement,Fs=mr.body,bp=[$n,mr,_r,Fs],sn.utils.clamp,Ap=sn.core.context||function(){},Or="onpointerenter"in Fs?"pointer":"mouse",Tp=kt.isTouch=$n.matchMedia&&$n.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in $n||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,pi=kt.eventTypes=("ontouchstart"in _r?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in _r?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cp=0},500),Rp(),Wo=1),Wo};bn.op=Kt;st.cache=0;var kt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){Wo||Pp(sn)||console.warn("Please gsap.registerPlugin(Observer)"),Aa||Rp();var i=n.tolerance,s=n.dragMinimum,a=n.type,o=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,f=n.onStop,d=n.onStopDelay,h=n.ignore,g=n.wheelSpeed,_=n.event,m=n.onDragStart,p=n.onDragEnd,E=n.onDrag,T=n.onPress,M=n.onRelease,y=n.onRight,A=n.onLeft,w=n.onUp,P=n.onDown,v=n.onChangeX,S=n.onChangeY,D=n.onChange,I=n.onToggleX,F=n.onToggleY,k=n.onHover,G=n.onHoverEnd,z=n.onMove,B=n.ignoreCheck,q=n.isNormalizer,ee=n.onGestureStart,R=n.onGestureEnd,ne=n.onWheel,be=n.onEnable,Pe=n.onDisable,Fe=n.onClick,We=n.scrollSpeed,K=n.capture,J=n.allowClicks,he=n.lockAxis,De=n.onLockAxis;this.target=o=Dn(o)||_r,this.vars=n,h&&(h=sn.utils.toArray(h)),i=i||1e-9,s=s||0,g=g||1,We=We||1,a=a||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat($n.getComputedStyle(Fs).lineHeight)||22);var Se,Ve,lt,Te,ze,Ke,Ne,H=this,U=0,pt=0,et=n.passive||!u&&n.passive!==!1,ke=Tr(o,bn),Me=Tr(o,Kt),C=ke(),x=Me(),N=~a.indexOf("touch")&&!~a.indexOf("pointer")&&pi[0]==="pointerdown",Z=Ca(o),j=o.ownerDocument||mr,$=[0,0,0],xe=[0,0,0],se=0,Ae=function(){return se=wa()},Ee=function(Re,Ze){return(H.event=Re)&&h&&pg(Re.target,h)||Ze&&N&&Re.pointerType!=="touch"||B&&B(Re,Ze)},re=function(){H._vx.reset(),H._vy.reset(),Ve.pause(),f&&f(H)},ae=function(){var Re=H.deltaX=Jf($),Ze=H.deltaY=Jf(xe),pe=Math.abs(Re)>=i,Xe=Math.abs(Ze)>=i;D&&(pe||Xe)&&D(H,Re,Ze,$,xe),pe&&(y&&H.deltaX>0&&y(H),A&&H.deltaX<0&&A(H),v&&v(H),I&&H.deltaX<0!=U<0&&I(H),U=H.deltaX,$[0]=$[1]=$[2]=0),Xe&&(P&&H.deltaY>0&&P(H),w&&H.deltaY<0&&w(H),S&&S(H),F&&H.deltaY<0!=pt<0&&F(H),pt=H.deltaY,xe[0]=xe[1]=xe[2]=0),(Te||lt)&&(z&&z(H),lt&&(m&&lt===1&&m(H),E&&E(H),lt=0),Te=!1),Ke&&!(Ke=!1)&&De&&De(H),ze&&(ne(H),ze=!1),Se=0},ye=function(Re,Ze,pe){$[pe]+=Re,xe[pe]+=Ze,H._vx.update(Re),H._vy.update(Ze),c?Se||(Se=requestAnimationFrame(ae)):ae()},we=function(Re,Ze){he&&!Ne&&(H.axis=Ne=Math.abs(Re)>Math.abs(Ze)?"x":"y",Ke=!0),Ne!=="y"&&($[2]+=Re,H._vx.update(Re,!0)),Ne!=="x"&&(xe[2]+=Ze,H._vy.update(Ze,!0)),c?Se||(Se=requestAnimationFrame(ae)):ae()},oe=function(Re){if(!Ee(Re,1)){Re=ra(Re,u);var Ze=Re.clientX,pe=Re.clientY,Xe=Ze-H.x,Ie=pe-H.y,Ye=H.isDragging;H.x=Ze,H.y=pe,(Ye||(Xe||Ie)&&(Math.abs(H.startX-Ze)>=s||Math.abs(H.startY-pe)>=s))&&(lt||(lt=Ye?2:1),Ye||(H.isDragging=!0),we(Xe,Ie))}},He=H.onPress=function(_e){Ee(_e,1)||_e&&_e.button||(H.axis=Ne=null,Ve.pause(),H.isPressed=!0,_e=ra(_e),U=pt=0,H.startX=H.x=_e.clientX,H.startY=H.y=_e.clientY,H._vx.reset(),H._vy.reset(),xn(q?o:j,pi[1],oe,et,!0),H.deltaX=H.deltaY=0,T&&T(H))},L=H.onRelease=function(_e){if(!Ee(_e,1)){vn(q?o:j,pi[1],oe,!0);var Re=!isNaN(H.y-H.startY),Ze=H.isDragging,pe=Ze&&(Math.abs(H.x-H.startX)>3||Math.abs(H.y-H.startY)>3),Xe=ra(_e);!pe&&Re&&(H._vx.reset(),H._vy.reset(),u&&J&&sn.delayedCall(.08,function(){if(wa()-se>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(j.createEvent){var Ie=j.createEvent("MouseEvents");Ie.initMouseEvent("click",!0,!0,$n,1,Xe.screenX,Xe.screenY,Xe.clientX,Xe.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(Ie)}}})),H.isDragging=H.isGesturing=H.isPressed=!1,f&&Ze&&!q&&Ve.restart(!0),lt&&ae(),p&&Ze&&p(H),M&&M(H,pe)}},ue=function(Re){return Re.touches&&Re.touches.length>1&&(H.isGesturing=!0)&&ee(Re,H.isDragging)},ie=function(){return(H.isGesturing=!1)||R(H)},fe=function(Re){if(!Ee(Re)){var Ze=ke(),pe=Me();ye((Ze-C)*We,(pe-x)*We,1),C=Ze,x=pe,f&&Ve.restart(!0)}},te=function(Re){if(!Ee(Re)){Re=ra(Re,u),ne&&(ze=!0);var Ze=(Re.deltaMode===1?l:Re.deltaMode===2?$n.innerHeight:1)*g;ye(Re.deltaX*Ze,Re.deltaY*Ze,0),f&&!q&&Ve.restart(!0)}},Q=function(Re){if(!Ee(Re)){var Ze=Re.clientX,pe=Re.clientY,Xe=Ze-H.x,Ie=pe-H.y;H.x=Ze,H.y=pe,Te=!0,f&&Ve.restart(!0),(Xe||Ie)&&we(Xe,Ie)}},ce=function(Re){H.event=Re,k(H)},Ue=function(Re){H.event=Re,G(H)},ut=function(Re){return Ee(Re)||ra(Re,u)&&Fe(H)};Ve=H._dc=sn.delayedCall(d||.25,re).pause(),H.deltaX=H.deltaY=0,H._vx=zc(0,50,!0),H._vy=zc(0,50,!0),H.scrollX=ke,H.scrollY=Me,H.isDragging=H.isGesturing=H.isPressed=!1,Ap(this),H.enable=function(_e){return H.isEnabled||(xn(Z?j:o,"scroll",Bc),a.indexOf("scroll")>=0&&xn(Z?j:o,"scroll",fe,et,K),a.indexOf("wheel")>=0&&xn(o,"wheel",te,et,K),(a.indexOf("touch")>=0&&Tp||a.indexOf("pointer")>=0)&&(xn(o,pi[0],He,et,K),xn(j,pi[2],L),xn(j,pi[3],L),J&&xn(o,"click",Ae,!0,!0),Fe&&xn(o,"click",ut),ee&&xn(j,"gesturestart",ue),R&&xn(j,"gestureend",ie),k&&xn(o,Or+"enter",ce),G&&xn(o,Or+"leave",Ue),z&&xn(o,Or+"move",Q)),H.isEnabled=!0,H.isDragging=H.isGesturing=H.isPressed=Te=lt=!1,H._vx.reset(),H._vy.reset(),C=ke(),x=Me(),_e&&_e.type&&He(_e),be&&be(H)),H},H.disable=function(){H.isEnabled&&(Ls.filter(function(_e){return _e!==H&&Ca(_e.target)}).length||vn(Z?j:o,"scroll",Bc),H.isPressed&&(H._vx.reset(),H._vy.reset(),vn(q?o:j,pi[1],oe,!0)),vn(Z?j:o,"scroll",fe,K),vn(o,"wheel",te,K),vn(o,pi[0],He,K),vn(j,pi[2],L),vn(j,pi[3],L),vn(o,"click",Ae,!0),vn(o,"click",ut),vn(j,"gesturestart",ue),vn(j,"gestureend",ie),vn(o,Or+"enter",ce),vn(o,Or+"leave",Ue),vn(o,Or+"move",Q),H.isEnabled=H.isPressed=H.isDragging=!1,Pe&&Pe(H))},H.kill=H.revert=function(){H.disable();var _e=Ls.indexOf(H);_e>=0&&Ls.splice(_e,1),Xi===H&&(Xi=0)},Ls.push(H),q&&Ca(o)&&(Xi=H),H.enable(_)},hg(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();kt.version="3.14.2";kt.create=function(r){return new kt(r)};kt.register=Pp;kt.getAll=function(){return Ls.slice()};kt.getById=function(r){return Ls.filter(function(e){return e.vars.id===r})[0]};wp()&&sn.registerPlugin(kt);var Ce,Cs,rt,Ct,Yn,mt,ff,ul,Ha,Ra,_a,ao,fn,El,kc,yn,Qf,eh,Rs,Dp,Ol,Lp,Mn,Vc,Ip,Up,ur,Gc,hf,Os,df,Pa,Hc,Bl,oo=1,hn=Date.now,zl=hn(),ui=0,ga=0,th=function(e,t,n){var i=Wn(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},nh=function(e,t){return t&&(!Wn(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},mg=function r(){return ga&&requestAnimationFrame(r)},ih=function(){return El=1},rh=function(){return El=0},Mi=function(e){return e},va=function(e){return Math.round(e*1e5)/1e5||0},Np=function(){return typeof window<"u"},Fp=function(){return Ce||Np()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},ts=function(e){return!!~ff.indexOf(e)},Op=function(e){return(e==="Height"?df:rt["inner"+e])||Yn["client"+e]||mt["client"+e]},Bp=function(e){return Sr(e,"getBoundingClientRect")||(ts(e)?function(){return Ko.width=rt.innerWidth,Ko.height=df,Ko}:function(){return Hi(e)})},_g=function(e,t,n){var i=n.d,s=n.d2,a=n.a;return(a=Sr(e,"getBoundingClientRect"))?function(){return a()[i]}:function(){return(t?Op(s):e["client"+s])||0}},gg=function(e,t){return!t||~Ci.indexOf(e)?Bp(e):function(){return Ko}},bi=function(e,t){var n=t.s,i=t.d2,s=t.d,a=t.a;return Math.max(0,(n="scroll"+i)&&(a=Sr(e,n))?a()-Bp(e)()[s]:ts(e)?(Yn[n]||mt[n])-Op(i):e[n]-e["offset"+i])},lo=function(e,t){for(var n=0;n<Rs.length;n+=3)(!t||~t.indexOf(Rs[n+1]))&&e(Rs[n],Rs[n+1],Rs[n+2])},Wn=function(e){return typeof e=="string"},pn=function(e){return typeof e=="function"},xa=function(e){return typeof e=="number"},Br=function(e){return typeof e=="object"},sa=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},kl=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},us=Math.abs,zp="left",kp="top",pf="right",mf="bottom",jr="width",Jr="height",Da="Right",La="Left",Ia="Top",Ua="Bottom",Ht="padding",si="margin",$s="Width",_f="Height",$t="px",ai=function(e){return rt.getComputedStyle(e)},vg=function(e){var t=ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},sh=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Hi=function(e,t){var n=t&&ai(e)[kc]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},fl=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Vp=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},xg=function(e){return function(t){return Ce.utils.snap(Vp(e),t)}},gf=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,a){a===void 0&&(a=.001);var o;if(!s)return t(i);if(s>0){for(i-=a,o=0;o<n.length;o++)if(n[o]>=i)return n[o];return n[o-1]}else for(o=n.length,i+=a;o--;)if(n[o]<=i)return n[o];return n[0]}:function(i,s,a){a===void 0&&(a=.001);var o=t(i);return!s||Math.abs(o-i)<a||o-i<0==s<0?o:t(s<0?i-e:i+e)}},Sg=function(e){return function(t,n){return gf(Vp(e))(t,n.direction)}},co=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},nn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},tn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},uo=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},ah={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},fo={toggleActions:"play",anticipatePin:0},hl={top:0,left:0,center:.5,bottom:1,right:1},Xo=function(e,t){if(Wn(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in hl?hl[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ho=function(e,t,n,i,s,a,o,l){var c=s.startColor,u=s.endColor,f=s.fontSize,d=s.indent,h=s.fontWeight,g=Ct.createElement("div"),_=ts(n)||Sr(n,"pinType")==="fixed",m=e.indexOf("scroller")!==-1,p=_?mt:n,E=e.indexOf("start")!==-1,T=E?c:u,M="border-color:"+T+";font-size:"+f+";color:"+T+";font-weight:"+h+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((m||l)&&_?"fixed;":"absolute;"),(m||l||!_)&&(M+=(i===Kt?pf:mf)+":"+(a+parseFloat(d))+"px;"),o&&(M+="box-sizing:border-box;text-align:left;width:"+o.offsetWidth+"px;"),g._isStart=E,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=M,g.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(g,p.children[0]):p.appendChild(g),g._offset=g["offset"+i.op.d2],Yo(g,0,i,E),g},Yo=function(e,t,n,i){var s={display:"block"},a=n[i?"os2":"p2"],o=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+a+$s]=1,s["border"+o+$s]=0,s[n.p]=t+"px",Ce.set(e,s)},tt=[],Wc={},Wa,oh=function(){return hn()-ui>34&&(Wa||(Wa=requestAnimationFrame(qi)))},fs=function(){(!Mn||!Mn.isPressed||Mn.startX>mt.clientWidth)&&(st.cache++,Mn?Wa||(Wa=requestAnimationFrame(qi)):qi(),ui||is("scrollStart"),ui=hn())},Vl=function(){Up=rt.innerWidth,Ip=rt.innerHeight},Sa=function(e){st.cache++,(e===!0||!fn&&!Lp&&!Ct.fullscreenElement&&!Ct.webkitFullscreenElement&&(!Vc||Up!==rt.innerWidth||Math.abs(rt.innerHeight-Ip)>rt.innerHeight*.25))&&ul.restart(!0)},ns={},Mg=[],Gp=function r(){return tn($e,"scrollEnd",r)||Hr(!0)},is=function(e){return ns[e]&&ns[e].map(function(t){return t()})||Mg},Hn=[],Hp=function(e){for(var t=0;t<Hn.length;t+=5)(!e||Hn[t+4]&&Hn[t+4].query===e)&&(Hn[t].style.cssText=Hn[t+1],Hn[t].getBBox&&Hn[t].setAttribute("transform",Hn[t+2]||""),Hn[t+3].uncache=1)},Wp=function(){return st.forEach(function(e){return pn(e)&&++e.cacheID&&(e.rec=e())})},vf=function(e,t){var n;for(yn=0;yn<tt.length;yn++)n=tt[yn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Pa=!0,t&&Hp(t),t||is("revert")},Xp=function(e,t){st.cache++,(t||!En)&&st.forEach(function(n){return pn(n)&&n.cacheID++&&(n.rec=0)}),Wn(e)&&(rt.history.scrollRestoration=hf=e)},En,Qr=0,lh,yg=function(){if(lh!==Qr){var e=lh=Qr;requestAnimationFrame(function(){return e===Qr&&Hr(!0)})}},Yp=function(){mt.appendChild(Os),df=!Mn&&Os.offsetHeight||rt.innerHeight,mt.removeChild(Os)},ch=function(e){return Ha(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Hr=function(e,t){if(Yn=Ct.documentElement,mt=Ct.body,ff=[rt,Ct,Yn,mt],ui&&!e&&!Pa){nn($e,"scrollEnd",Gp);return}Yp(),En=$e.isRefreshing=!0,Pa||Wp();var n=is("refreshInit");Dp&&$e.sort(),t||vf(),st.forEach(function(i){pn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),tt.slice(0).forEach(function(i){return i.refresh()}),Pa=!1,tt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",a=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-a),i.refresh()}}),Hc=1,ch(!0),tt.forEach(function(i){var s=bi(i.scroller,i._dir),a=i.vars.end==="max"||i._endClamp&&i.end>s,o=i._startClamp&&i.start>=s;(a||o)&&i.setPositions(o?s-1:i.start,a?Math.max(o?s:i.start+1,s):i.end,!0)}),ch(!1),Hc=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),st.forEach(function(i){pn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),Xp(hf,1),ul.pause(),Qr++,En=2,qi(2),tt.forEach(function(i){return pn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),En=$e.isRefreshing=!1,is("refresh")},Xc=0,qo=1,Na,qi=function(e){if(e===2||!En&&!Pa){$e.isUpdating=!0,Na&&Na.update(0);var t=tt.length,n=hn(),i=n-zl>=50,s=t&&tt[0].scroll();if(qo=Xc>s?-1:1,En||(Xc=s),i&&(ui&&!El&&n-ui>200&&(ui=0,is("scrollEnd")),_a=zl,zl=n),qo<0){for(yn=t;yn-- >0;)tt[yn]&&tt[yn].update(0,i);qo=1}else for(yn=0;yn<t;yn++)tt[yn]&&tt[yn].update(0,i);$e.isUpdating=!1}Wa=0},Yc=[zp,kp,mf,pf,si+Ua,si+Da,si+Ia,si+La,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],$o=Yc.concat([jr,Jr,"boxSizing","max"+$s,"max"+_f,"position",si,Ht,Ht+Ia,Ht+Da,Ht+Ua,Ht+La]),Eg=function(e,t,n){Bs(n);var i=e._gsap;if(i.spacerIsNative)Bs(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Gl=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=Yc.length,a=t.style,o=e.style,l;s--;)l=Yc[s],a[l]=n[l];a.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(a.display="inline-block"),o[mf]=o[pf]="auto",a.flexBasis=n.flexBasis||"auto",a.overflow="visible",a.boxSizing="border-box",a[jr]=fl(e,bn)+$t,a[Jr]=fl(e,Kt)+$t,a[Ht]=o[si]=o[kp]=o[zp]="0",Bs(i),o[jr]=o["max"+$s]=n[jr],o[Jr]=o["max"+_f]=n[Jr],o[Ht]=n[Ht],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Tg=/([A-Z])/g,Bs=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,a;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)a=e[i+1],s=e[i],a?t[s]=a:t[s]&&t.removeProperty(s.replace(Tg,"-$1").toLowerCase())}},po=function(e){for(var t=$o.length,n=e.style,i=[],s=0;s<t;s++)i.push($o[s],n[$o[s]]);return i.t=e,i},bg=function(e,t,n){for(var i=[],s=e.length,a=n?8:0,o;a<s;a+=2)o=e[a],i.push(o,o in t?t[o]:e[a+1]);return i.t=e.t,i},Ko={left:0,top:0},uh=function(e,t,n,i,s,a,o,l,c,u,f,d,h,g){pn(e)&&(e=e(l)),Wn(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?Xo("0"+e.substr(3),n):0));var _=h?h.time():0,m,p,E;if(h&&h.seek(0),isNaN(e)||(e=+e),xa(e))h&&(e=Ce.utils.mapRange(h.scrollTrigger.start,h.scrollTrigger.end,0,d,e)),o&&Yo(o,n,i,!0);else{pn(t)&&(t=t(l));var T=(e||"0").split(" "),M,y,A,w;E=Dn(t,l)||mt,M=Hi(E)||{},(!M||!M.left&&!M.top)&&ai(E).display==="none"&&(w=E.style.display,E.style.display="block",M=Hi(E),w?E.style.display=w:E.style.removeProperty("display")),y=Xo(T[0],M[i.d]),A=Xo(T[1]||"0",n),e=M[i.p]-c[i.p]-u+y+s-A,o&&Yo(o,A,i,n-A<20||o._isStart&&A>20),n-=n-A}if(g&&(l[g]=e||-.001,e<0&&(e=0)),a){var P=e+n,v=a._isStart;m="scroll"+i.d2,Yo(a,P,i,v&&P>20||!v&&(f?Math.max(mt[m],Yn[m]):a.parentNode[m])<=P+1),f&&(c=Hi(o),f&&(a.style[i.op.p]=c[i.op.p]-i.op.m-a._offset+$t))}return h&&E&&(m=Hi(E),h.seek(d),p=Hi(E),h._caScrollDist=m[i.p]-p[i.p],e=e/h._caScrollDist*d),h&&h.seek(_),h?e:Math.round(e)},Ag=/(webkit|moz|length|cssText|inset)/i,fh=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,a,o;if(t===mt){e._stOrig=s.cssText,o=ai(e);for(a in o)!+a&&!Ag.test(a)&&o[a]&&typeof s[a]=="string"&&a!=="0"&&(s[a]=o[a]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},qp=function(e,t,n){var i=t,s=i;return function(a){var o=Math.round(e());return o!==i&&o!==s&&Math.abs(o-i)>3&&Math.abs(o-s)>3&&(a=o,n&&n()),s=i,i=Math.round(a),i}},mo=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},hh=function(e,t){var n=Tr(e,t),i="_scroll"+t.p2,s=function a(o,l,c,u,f){var d=a.tween,h=l.onComplete,g={};c=c||n();var _=qp(n,c,function(){d.kill(),a.tween=0});return f=u&&f||0,u=u||o-c,d&&d.kill(),l[i]=o,l.inherit=!1,l.modifiers=g,g[i]=function(){return _(c+u*d.ratio+f*d.ratio*d.ratio)},l.onUpdate=function(){st.cache++,a.tween&&qi()},l.onComplete=function(){a.tween=0,h&&h.call(d)},d=a.tween=Ce.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},nn(e,"wheel",n.wheelHandler),$e.isTouch&&nn(e,"touchmove",n.wheelHandler),s},$e=(function(){function r(t,n){Cs||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Gc(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!ga){this.update=this.refresh=this.kill=Mi;return}n=sh(Wn(n)||xa(n)||n.nodeType?{trigger:n}:n,fo);var s=n,a=s.onUpdate,o=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,f=s.scrub,d=s.trigger,h=s.pin,g=s.pinSpacing,_=s.invalidateOnRefresh,m=s.anticipatePin,p=s.onScrubComplete,E=s.onSnapComplete,T=s.once,M=s.snap,y=s.pinReparent,A=s.pinSpacer,w=s.containerAnimation,P=s.fastScrollEnd,v=s.preventOverlaps,S=n.horizontal||n.containerAnimation&&n.horizontal!==!1?bn:Kt,D=!f&&f!==0,I=Dn(n.scroller||rt),F=Ce.core.getCache(I),k=ts(I),G=("pinType"in n?n.pinType:Sr(I,"pinType")||k&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=D&&n.toggleActions.split(" "),q="markers"in n?n.markers:fo.markers,ee=k?0:parseFloat(ai(I)["border"+S.p2+$s])||0,R=this,ne=n.onRefreshInit&&function(){return n.onRefreshInit(R)},be=_g(I,k,S),Pe=gg(I,k),Fe=0,We=0,K=0,J=Tr(I,S),he,De,Se,Ve,lt,Te,ze,Ke,Ne,H,U,pt,et,ke,Me,C,x,N,Z,j,$,xe,se,Ae,Ee,re,ae,ye,we,oe,He,L,ue,ie,fe,te,Q,ce,Ue;if(R._startClamp=R._endClamp=!1,R._dir=S,m*=45,R.scroller=I,R.scroll=w?w.time.bind(w):J,Ve=J(),R.vars=n,i=i||n.animation,"refreshPriority"in n&&(Dp=1,n.refreshPriority===-9999&&(Na=R)),F.tweenScroll=F.tweenScroll||{top:hh(I,Kt),left:hh(I,bn)},R.tweenTo=he=F.tweenScroll[S.p],R.scrubDuration=function(pe){ue=xa(pe)&&pe,ue?L?L.duration(pe):L=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ue,paused:!0,onComplete:function(){return p&&p(R)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!R.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),R.animation=i.pause(),i.scrollTrigger=R,R.scrubDuration(f),oe=0,l||(l=i.vars.id)),M&&((!Br(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in mt.style&&Ce.set(k?[mt,Yn]:I,{scrollBehavior:"auto"}),st.forEach(function(pe){return pn(pe)&&pe.target===(k?Ct.scrollingElement||Yn:I)&&(pe.smooth=!1)}),Se=pn(M.snapTo)?M.snapTo:M.snapTo==="labels"?xg(i):M.snapTo==="labelsDirectional"?Sg(i):M.directional!==!1?function(pe,Xe){return gf(M.snapTo)(pe,hn()-We<500?0:Xe.direction)}:Ce.utils.snap(M.snapTo),ie=M.duration||{min:.1,max:2},ie=Br(ie)?Ra(ie.min,ie.max):Ra(ie,ie),fe=Ce.delayedCall(M.delay||ue/2||.1,function(){var pe=J(),Xe=hn()-We<500,Ie=he.tween;if((Xe||Math.abs(R.getVelocity())<10)&&!Ie&&!El&&Fe!==pe){var Ye=(pe-Te)/ke,Ot=i&&!D?i.totalProgress():Ye,nt=Xe?0:(Ot-He)/(hn()-_a)*1e3||0,_t=Ce.utils.clamp(-Ye,1-Ye,us(nt/2)*nt/.185),Vt=Ye+(M.inertia===!1?0:_t),Rt,Et,ft=M,wn=ft.onStart,St=ft.onInterrupt,ln=ft.onComplete;if(Rt=Se(Vt,R),xa(Rt)||(Rt=Vt),Et=Math.max(0,Math.round(Te+Rt*ke)),pe<=ze&&pe>=Te&&Et!==pe){if(Ie&&!Ie._initted&&Ie.data<=us(Et-pe))return;M.inertia===!1&&(_t=Rt-Ye),he(Et,{duration:ie(us(Math.max(us(Vt-Ot),us(Rt-Ot))*.185/nt/.05||0)),ease:M.ease||"power3",data:us(Et-pe),onInterrupt:function(){return fe.restart(!0)&&St&&St(R)},onComplete:function(){R.update(),Fe=J(),i&&!D&&(L?L.resetTo("totalProgress",Rt,i._tTime/i._tDur):i.progress(Rt)),oe=He=i&&!D?i.totalProgress():R.progress,E&&E(R),ln&&ln(R)}},pe,_t*ke,Et-pe-_t*ke),wn&&wn(R,he.tween)}}else R.isActive&&Fe!==pe&&fe.restart(!0)}).pause()),l&&(Wc[l]=R),d=R.trigger=Dn(d||h!==!0&&h),Ue=d&&d._gsap&&d._gsap.stRevert,Ue&&(Ue=Ue(R)),h=h===!0?d:Dn(h),Wn(o)&&(o={targets:d,className:o}),h&&(g===!1||g===si||(g=!g&&h.parentNode&&h.parentNode.style&&ai(h.parentNode).display==="flex"?!1:Ht),R.pin=h,De=Ce.core.getCache(h),De.spacer?Me=De.pinState:(A&&(A=Dn(A),A&&!A.nodeType&&(A=A.current||A.nativeElement),De.spacerIsNative=!!A,A&&(De.spacerState=po(A))),De.spacer=N=A||Ct.createElement("div"),N.classList.add("pin-spacer"),l&&N.classList.add("pin-spacer-"+l),De.pinState=Me=po(h)),n.force3D!==!1&&Ce.set(h,{force3D:!0}),R.spacer=N=De.spacer,we=ai(h),Ae=we[g+S.os2],j=Ce.getProperty(h),$=Ce.quickSetter(h,S.a,$t),Gl(h,N,we),x=po(h)),q){pt=Br(q)?sh(q,ah):ah,H=ho("scroller-start",l,I,S,pt,0),U=ho("scroller-end",l,I,S,pt,0,H),Z=H["offset"+S.op.d2];var ut=Dn(Sr(I,"content")||I);Ke=this.markerStart=ho("start",l,ut,S,pt,Z,0,w),Ne=this.markerEnd=ho("end",l,ut,S,pt,Z,0,w),w&&(ce=Ce.quickSetter([Ke,Ne],S.a,$t)),!G&&!(Ci.length&&Sr(I,"fixedMarkers")===!0)&&(vg(k?mt:I),Ce.set([H,U],{force3D:!0}),re=Ce.quickSetter(H,S.a,$t),ye=Ce.quickSetter(U,S.a,$t))}if(w){var _e=w.vars.onUpdate,Re=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){R.update(0,0,1),_e&&_e.apply(w,Re||[])})}if(R.previous=function(){return tt[tt.indexOf(R)-1]},R.next=function(){return tt[tt.indexOf(R)+1]},R.revert=function(pe,Xe){if(!Xe)return R.kill(!0);var Ie=pe!==!1||!R.enabled,Ye=fn;Ie!==R.isReverted&&(Ie&&(te=Math.max(J(),R.scroll.rec||0),K=R.progress,Q=i&&i.progress()),Ke&&[Ke,Ne,H,U].forEach(function(Ot){return Ot.style.display=Ie?"none":"block"}),Ie&&(fn=R,R.update(Ie)),h&&(!y||!R.isActive)&&(Ie?Eg(h,N,Me):Gl(h,N,ai(h),Ee)),Ie||R.update(Ie),fn=Ye,R.isReverted=Ie)},R.refresh=function(pe,Xe,Ie,Ye){if(!((fn||!R.enabled)&&!Xe)){if(h&&pe&&ui){nn(r,"scrollEnd",Gp);return}!En&&ne&&ne(R),fn=R,he.tween&&!Ie&&(he.tween.kill(),he.tween=0),L&&L.pause(),_&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(ve){return ve.vars.immediateRender&&ve.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),R.isReverted||R.revert(!0,!0),R._subPinOffset=!1;var Ot=be(),nt=Pe(),_t=w?w.duration():bi(I,S),Vt=ke<=.01||!ke,Rt=0,Et=Ye||0,ft=Br(Ie)?Ie.end:n.end,wn=n.endTrigger||d,St=Br(Ie)?Ie.start:n.start||(n.start===0||!d?0:h?"0 0":"0 100%"),ln=R.pinnedContainer=n.pinnedContainer&&Dn(n.pinnedContainer,R),Bn=d&&Math.max(0,tt.indexOf(R))||0,Yt=Bn,qt,Jt,Ni,os,Qt,b,O,Y,W,V,le,ge,de;for(q&&Br(Ie)&&(ge=Ce.getProperty(H,S.p),de=Ce.getProperty(U,S.p));Yt-- >0;)b=tt[Yt],b.end||b.refresh(0,1)||(fn=R),O=b.pin,O&&(O===d||O===h||O===ln)&&!b.isReverted&&(V||(V=[]),V.unshift(b),b.revert(!0,!0)),b!==tt[Yt]&&(Bn--,Yt--);for(pn(St)&&(St=St(R)),St=th(St,"start",R),Te=uh(St,d,Ot,S,J(),Ke,H,R,nt,ee,G,_t,w,R._startClamp&&"_startClamp")||(h?-.001:0),pn(ft)&&(ft=ft(R)),Wn(ft)&&!ft.indexOf("+=")&&(~ft.indexOf(" ")?ft=(Wn(St)?St.split(" ")[0]:"")+ft:(Rt=Xo(ft.substr(2),Ot),ft=Wn(St)?St:(w?Ce.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Te):Te)+Rt,wn=d)),ft=th(ft,"end",R),ze=Math.max(Te,uh(ft||(wn?"100% 0":_t),wn,Ot,S,J()+Rt,Ne,U,R,nt,ee,G,_t,w,R._endClamp&&"_endClamp"))||-.001,Rt=0,Yt=Bn;Yt--;)b=tt[Yt]||{},O=b.pin,O&&b.start-b._pinPush<=Te&&!w&&b.end>0&&(qt=b.end-(R._startClamp?Math.max(0,b.start):b.start),(O===d&&b.start-b._pinPush<Te||O===ln)&&isNaN(St)&&(Rt+=qt*(1-b.progress)),O===h&&(Et+=qt));if(Te+=Rt,ze+=Rt,R._startClamp&&(R._startClamp+=Rt),R._endClamp&&!En&&(R._endClamp=ze||-.001,ze=Math.min(ze,bi(I,S))),ke=ze-Te||(Te-=.01)&&.001,Vt&&(K=Ce.utils.clamp(0,1,Ce.utils.normalize(Te,ze,te))),R._pinPush=Et,Ke&&Rt&&(qt={},qt[S.a]="+="+Rt,ln&&(qt[S.p]="-="+J()),Ce.set([Ke,Ne],qt)),h&&!(Hc&&R.end>=bi(I,S)))qt=ai(h),os=S===Kt,Ni=J(),xe=parseFloat(j(S.a))+Et,!_t&&ze>1&&(le=(k?Ct.scrollingElement||Yn:I).style,le={style:le,value:le["overflow"+S.a.toUpperCase()]},k&&ai(mt)["overflow"+S.a.toUpperCase()]!=="scroll"&&(le.style["overflow"+S.a.toUpperCase()]="scroll")),Gl(h,N,qt),x=po(h),Jt=Hi(h,!0),Y=G&&Tr(I,os?bn:Kt)(),g?(Ee=[g+S.os2,ke+Et+$t],Ee.t=N,Yt=g===Ht?fl(h,S)+ke+Et:0,Yt&&(Ee.push(S.d,Yt+$t),N.style.flexBasis!=="auto"&&(N.style.flexBasis=Yt+$t)),Bs(Ee),ln&&tt.forEach(function(ve){ve.pin===ln&&ve.vars.pinSpacing!==!1&&(ve._subPinOffset=!0)}),G&&J(te)):(Yt=fl(h,S),Yt&&N.style.flexBasis!=="auto"&&(N.style.flexBasis=Yt+$t)),G&&(Qt={top:Jt.top+(os?Ni-Te:Y)+$t,left:Jt.left+(os?Y:Ni-Te)+$t,boxSizing:"border-box",position:"fixed"},Qt[jr]=Qt["max"+$s]=Math.ceil(Jt.width)+$t,Qt[Jr]=Qt["max"+_f]=Math.ceil(Jt.height)+$t,Qt[si]=Qt[si+Ia]=Qt[si+Da]=Qt[si+Ua]=Qt[si+La]="0",Qt[Ht]=qt[Ht],Qt[Ht+Ia]=qt[Ht+Ia],Qt[Ht+Da]=qt[Ht+Da],Qt[Ht+Ua]=qt[Ht+Ua],Qt[Ht+La]=qt[Ht+La],C=bg(Me,Qt,y),En&&J(0)),i?(W=i._initted,Ol(1),i.render(i.duration(),!0,!0),se=j(S.a)-xe+ke+Et,ae=Math.abs(ke-se)>1,G&&ae&&C.splice(C.length-2,2),i.render(0,!0,!0),W||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Ol(0)):se=ke,le&&(le.value?le.style["overflow"+S.a.toUpperCase()]=le.value:le.style.removeProperty("overflow-"+S.a));else if(d&&J()&&!w)for(Jt=d.parentNode;Jt&&Jt!==mt;)Jt._pinOffset&&(Te-=Jt._pinOffset,ze-=Jt._pinOffset),Jt=Jt.parentNode;V&&V.forEach(function(ve){return ve.revert(!1,!0)}),R.start=Te,R.end=ze,Ve=lt=En?te:J(),!w&&!En&&(Ve<te&&J(te),R.scroll.rec=0),R.revert(!1,!0),We=hn(),fe&&(Fe=-1,fe.restart(!0)),fn=0,i&&D&&(i._initted||Q)&&i.progress()!==Q&&i.progress(Q||0,!0).render(i.time(),!0,!0),(Vt||K!==R.progress||w||_||i&&!i._initted)&&(i&&!D&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Te<-.001&&!K?Ce.utils.normalize(Te,ze,0):K,!0),R.progress=Vt||(Ve-Te)/ke===K?0:K),h&&g&&(N._pinOffset=Math.round(R.progress*se)),L&&L.invalidate(),isNaN(ge)||(ge-=Ce.getProperty(H,S.p),de-=Ce.getProperty(U,S.p),mo(H,S,ge),mo(Ke,S,ge-(Ye||0)),mo(U,S,de),mo(Ne,S,de-(Ye||0))),Vt&&!En&&R.update(),u&&!En&&!et&&(et=!0,u(R),et=!1)}},R.getVelocity=function(){return(J()-lt)/(hn()-_a)*1e3||0},R.endAnimation=function(){sa(R.callbackAnimation),i&&(L?L.progress(1):i.paused()?D||sa(i,R.direction<0,1):sa(i,i.reversed()))},R.labelToScroll=function(pe){return i&&i.labels&&(Te||R.refresh()||Te)+i.labels[pe]/i.duration()*ke||0},R.getTrailing=function(pe){var Xe=tt.indexOf(R),Ie=R.direction>0?tt.slice(0,Xe).reverse():tt.slice(Xe+1);return(Wn(pe)?Ie.filter(function(Ye){return Ye.vars.preventOverlaps===pe}):Ie).filter(function(Ye){return R.direction>0?Ye.end<=Te:Ye.start>=ze})},R.update=function(pe,Xe,Ie){if(!(w&&!Ie&&!pe)){var Ye=En===!0?te:R.scroll(),Ot=pe?0:(Ye-Te)/ke,nt=Ot<0?0:Ot>1?1:Ot||0,_t=R.progress,Vt,Rt,Et,ft,wn,St,ln,Bn;if(Xe&&(lt=Ve,Ve=w?J():Ye,M&&(He=oe,oe=i&&!D?i.totalProgress():nt)),m&&h&&!fn&&!oo&&ui&&(!nt&&Te<Ye+(Ye-lt)/(hn()-_a)*m?nt=1e-4:nt===1&&ze>Ye+(Ye-lt)/(hn()-_a)*m&&(nt=.9999)),nt!==_t&&R.enabled){if(Vt=R.isActive=!!nt&&nt<1,Rt=!!_t&&_t<1,St=Vt!==Rt,wn=St||!!nt!=!!_t,R.direction=nt>_t?1:-1,R.progress=nt,wn&&!fn&&(Et=nt&&!_t?0:nt===1?1:_t===1?2:3,D&&(ft=!St&&B[Et+1]!=="none"&&B[Et+1]||B[Et],Bn=i&&(ft==="complete"||ft==="reset"||ft in i))),v&&(St||Bn)&&(Bn||f||!i)&&(pn(v)?v(R):R.getTrailing(v).forEach(function(Ni){return Ni.endAnimation()})),D||(L&&!fn&&!oo?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",nt,i._tTime/i._tDur):(L.vars.totalProgress=nt,L.invalidate().restart())):i&&i.totalProgress(nt,!!(fn&&(We||pe)))),h){if(pe&&g&&(N.style[g+S.os2]=Ae),!G)$(va(xe+se*nt));else if(wn){if(ln=!pe&&nt>_t&&ze+1>Ye&&Ye+1>=bi(I,S),y)if(!pe&&(Vt||ln)){var Yt=Hi(h,!0),qt=Ye-Te;fh(h,mt,Yt.top+(S===Kt?qt:0)+$t,Yt.left+(S===Kt?0:qt)+$t)}else fh(h,N);Bs(Vt||ln?C:x),ae&&nt<1&&Vt||$(xe+(nt===1&&!ln?se:0))}}M&&!he.tween&&!fn&&!oo&&fe.restart(!0),o&&(St||T&&nt&&(nt<1||!Bl))&&Ha(o.targets).forEach(function(Ni){return Ni.classList[Vt||T?"add":"remove"](o.className)}),a&&!D&&!pe&&a(R),wn&&!fn?(D&&(Bn&&(ft==="complete"?i.pause().totalProgress(1):ft==="reset"?i.restart(!0).pause():ft==="restart"?i.restart(!0):i[ft]()),a&&a(R)),(St||!Bl)&&(c&&St&&kl(R,c),z[Et]&&kl(R,z[Et]),T&&(nt===1?R.kill(!1,1):z[Et]=0),St||(Et=nt===1?1:3,z[Et]&&kl(R,z[Et]))),P&&!Vt&&Math.abs(R.getVelocity())>(xa(P)?P:2500)&&(sa(R.callbackAnimation),L?L.progress(1):sa(i,ft==="reverse"?1:!nt,1))):D&&a&&!fn&&a(R)}if(ye){var Jt=w?Ye/w.duration()*(w._caScrollDist||0):Ye;re(Jt+(H._isFlipped?1:0)),ye(Jt)}ce&&ce(-Ye/w.duration()*(w._caScrollDist||0))}},R.enable=function(pe,Xe){R.enabled||(R.enabled=!0,nn(I,"resize",Sa),k||nn(I,"scroll",fs),ne&&nn(r,"refreshInit",ne),pe!==!1&&(R.progress=K=0,Ve=lt=Fe=J()),Xe!==!1&&R.refresh())},R.getTween=function(pe){return pe&&he?he.tween:L},R.setPositions=function(pe,Xe,Ie,Ye){if(w){var Ot=w.scrollTrigger,nt=w.duration(),_t=Ot.end-Ot.start;pe=Ot.start+_t*pe/nt,Xe=Ot.start+_t*Xe/nt}R.refresh(!1,!1,{start:nh(pe,Ie&&!!R._startClamp),end:nh(Xe,Ie&&!!R._endClamp)},Ye),R.update()},R.adjustPinSpacing=function(pe){if(Ee&&pe){var Xe=Ee.indexOf(S.d)+1;Ee[Xe]=parseFloat(Ee[Xe])+pe+$t,Ee[1]=parseFloat(Ee[1])+pe+$t,Bs(Ee)}},R.disable=function(pe,Xe){if(pe!==!1&&R.revert(!0,!0),R.enabled&&(R.enabled=R.isActive=!1,Xe||L&&L.pause(),te=0,De&&(De.uncache=1),ne&&tn(r,"refreshInit",ne),fe&&(fe.pause(),he.tween&&he.tween.kill()&&(he.tween=0)),!k)){for(var Ie=tt.length;Ie--;)if(tt[Ie].scroller===I&&tt[Ie]!==R)return;tn(I,"resize",Sa),k||tn(I,"scroll",fs)}},R.kill=function(pe,Xe){R.disable(pe,Xe),L&&!Xe&&L.kill(),l&&delete Wc[l];var Ie=tt.indexOf(R);Ie>=0&&tt.splice(Ie,1),Ie===yn&&qo>0&&yn--,Ie=0,tt.forEach(function(Ye){return Ye.scroller===R.scroller&&(Ie=1)}),Ie||En||(R.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Xe||i.kill()),Ke&&[Ke,Ne,H,U].forEach(function(Ye){return Ye.parentNode&&Ye.parentNode.removeChild(Ye)}),Na===R&&(Na=0),h&&(De&&(De.uncache=1),Ie=0,tt.forEach(function(Ye){return Ye.pin===h&&Ie++}),Ie||(De.spacer=0)),n.onKill&&n.onKill(R)},tt.push(R),R.enable(!1,!1),Ue&&Ue(R),i&&i.add&&!ke){var Ze=R.update;R.update=function(){R.update=Ze,st.cache++,Te||ze||R.refresh()},Ce.delayedCall(.01,R.update),ke=.01,Te=ze=0}else R.refresh();h&&yg()},r.register=function(n){return Cs||(Ce=n||Fp(),Np()&&window.document&&r.enable(),Cs=ga),Cs},r.defaults=function(n){if(n)for(var i in n)fo[i]=n[i];return fo},r.disable=function(n,i){ga=0,tt.forEach(function(a){return a[i?"kill":"disable"](n)}),tn(rt,"wheel",fs),tn(Ct,"scroll",fs),clearInterval(ao),tn(Ct,"touchcancel",Mi),tn(mt,"touchstart",Mi),co(tn,Ct,"pointerdown,touchstart,mousedown",ih),co(tn,Ct,"pointerup,touchend,mouseup",rh),ul.kill(),lo(tn);for(var s=0;s<st.length;s+=3)uo(tn,st[s],st[s+1]),uo(tn,st[s],st[s+2])},r.enable=function(){if(rt=window,Ct=document,Yn=Ct.documentElement,mt=Ct.body,Ce&&(Ha=Ce.utils.toArray,Ra=Ce.utils.clamp,Gc=Ce.core.context||Mi,Ol=Ce.core.suppressOverwrites||Mi,hf=rt.history.scrollRestoration||"auto",Xc=rt.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),mt)){ga=1,Os=document.createElement("div"),Os.style.height="100vh",Os.style.position="absolute",Yp(),mg(),kt.register(Ce),r.isTouch=kt.isTouch,ur=kt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Vc=kt.isTouch===1,nn(rt,"wheel",fs),ff=[rt,Ct,Yn,mt],Ce.matchMedia?(r.matchMedia=function(c){var u=Ce.matchMedia(),f;for(f in c)u.add(f,c[f]);return u},Ce.addEventListener("matchMediaInit",function(){Wp(),vf()}),Ce.addEventListener("matchMediaRevert",function(){return Hp()}),Ce.addEventListener("matchMedia",function(){Hr(0,1),is("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return Vl(),Vl})):console.warn("Requires GSAP 3.11.0 or later"),Vl(),nn(Ct,"scroll",fs);var n=mt.hasAttribute("style"),i=mt.style,s=i.borderTopStyle,a=Ce.core.Animation.prototype,o,l;for(a.revert||Object.defineProperty(a,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",o=Hi(mt),Kt.m=Math.round(o.top+Kt.sc())||0,bn.m=Math.round(o.left+bn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(mt.setAttribute("style",""),mt.removeAttribute("style")),ao=setInterval(oh,250),Ce.delayedCall(.5,function(){return oo=0}),nn(Ct,"touchcancel",Mi),nn(mt,"touchstart",Mi),co(nn,Ct,"pointerdown,touchstart,mousedown",ih),co(nn,Ct,"pointerup,touchend,mouseup",rh),kc=Ce.utils.checkPrefix("transform"),$o.push(kc),Cs=hn(),ul=Ce.delayedCall(.2,Hr).pause(),Rs=[Ct,"visibilitychange",function(){var c=rt.innerWidth,u=rt.innerHeight;Ct.hidden?(Qf=c,eh=u):(Qf!==c||eh!==u)&&Sa()},Ct,"DOMContentLoaded",Hr,rt,"load",Hr,rt,"resize",Sa],lo(nn),tt.forEach(function(c){return c.enable(0,1)}),l=0;l<st.length;l+=3)uo(tn,st[l],st[l+1]),uo(tn,st[l],st[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Bl=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ao)||(ao=i)&&setInterval(oh,i),"ignoreMobileResize"in n&&(Vc=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(lo(tn)||lo(nn,n.autoRefreshEvents||"none"),Lp=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Dn(n),a=st.indexOf(s),o=ts(s);~a&&st.splice(a,o?6:2),i&&(o?Ci.unshift(rt,i,mt,i,Yn,i):Ci.unshift(s,i))},r.clearMatchMedia=function(n){tt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var a=(Wn(n)?Dn(n):n).getBoundingClientRect(),o=a[s?jr:Jr]*i||0;return s?a.right-o>0&&a.left+o<rt.innerWidth:a.bottom-o>0&&a.top+o<rt.innerHeight},r.positionInViewport=function(n,i,s){Wn(n)&&(n=Dn(n));var a=n.getBoundingClientRect(),o=a[s?jr:Jr],l=i==null?o/2:i in hl?hl[i]*o:~i.indexOf("%")?parseFloat(i)*o/100:parseFloat(i)||0;return s?(a.left+l)/rt.innerWidth:(a.top+l)/rt.innerHeight},r.killAll=function(n){if(tt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ns.killAll||[];ns={},i.forEach(function(s){return s()})}},r})();$e.version="3.14.2";$e.saveStyles=function(r){return r?Ha(r).forEach(function(e){if(e&&e.style){var t=Hn.indexOf(e);t>=0&&Hn.splice(t,5),Hn.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Gc())}}):Hn};$e.revert=function(r,e){return vf(!r,e)};$e.create=function(r,e){return new $e(r,e)};$e.refresh=function(r){return r?Sa(!0):(Cs||$e.register())&&Hr(!0)};$e.update=function(r){return++st.cache&&qi(r===!0?2:0)};$e.clearScrollMemory=Xp;$e.maxScroll=function(r,e){return bi(r,e?bn:Kt)};$e.getScrollFunc=function(r,e){return Tr(Dn(r),e?bn:Kt)};$e.getById=function(r){return Wc[r]};$e.getAll=function(){return tt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};$e.isScrolling=function(){return!!ui};$e.snapDirectional=gf;$e.addEventListener=function(r,e){var t=ns[r]||(ns[r]=[]);~t.indexOf(e)||t.push(e)};$e.removeEventListener=function(r,e){var t=ns[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};$e.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,a=function(c,u){var f=[],d=[],h=Ce.delayedCall(i,function(){u(f,d),f=[],d=[]}).pause();return function(g){f.length||h.restart(!0),f.push(g.trigger),d.push(g),s<=f.length&&h.progress(1)}},o;for(o in e)n[o]=o.substr(0,2)==="on"&&pn(e[o])&&o!=="onRefreshInit"?a(o,e[o]):e[o];return pn(s)&&(s=s(),nn($e,"refresh",function(){return s=e.batchMax()})),Ha(r).forEach(function(l){var c={};for(o in n)c[o]=n[o];c.trigger=l,t.push($e.create(c))}),t};var dh=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Hl=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(kt.isTouch?" pinch-zoom":""):"none",e===Yn&&r(mt,t)},_o={auto:1,scroll:1},wg=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,a=s._gsap||Ce.core.getCache(s),o=hn(),l;if(!a._isScrollT||o-a._isScrollT>2e3){for(;s&&s!==mt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_o[(l=ai(s)).overflowY]||_o[l.overflowX]));)s=s.parentNode;a._isScroll=s&&s!==n&&!ts(s)&&(_o[(l=ai(s)).overflowY]||_o[l.overflowX]),a._isScrollT=o}(a._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},$p=function(e,t,n,i){return kt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&wg,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&nn(Ct,kt.eventTypes[0],mh,!1,!0)},onDisable:function(){return tn(Ct,kt.eventTypes[0],mh,!0)}})},Cg=/(input|label|select|textarea)/i,ph,mh=function(e){var t=Cg.test(e.target.tagName);(t||ph)&&(e._gsapAllow=!0,ph=t)},Rg=function(e){Br(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,a=t.onRelease,o,l,c=Dn(e.target)||Yn,u=Ce.core.globals().ScrollSmoother,f=u&&u.get(),d=ur&&(e.content&&Dn(e.content)||f&&e.content!==!1&&!f.smooth()&&f.content()),h=Tr(c,Kt),g=Tr(c,bn),_=1,m=(kt.isTouch&&rt.visualViewport?rt.visualViewport.scale*rt.visualViewport.width:rt.outerWidth)/rt.innerWidth,p=0,E=pn(i)?function(){return i(o)}:function(){return i||2.8},T,M,y=$p(c,e.type,!0,s),A=function(){return M=!1},w=Mi,P=Mi,v=function(){l=bi(c,Kt),P=Ra(ur?1:0,l),n&&(w=Ra(0,bi(c,bn))),T=Qr},S=function(){d._gsap.y=va(parseFloat(d._gsap.y)+h.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",h.offset=h.cacheID=0},D=function(){if(M){requestAnimationFrame(A);var q=va(o.deltaY/2),ee=P(h.v-q);if(d&&ee!==h.v+h.offset){h.offset=ee-h.v;var R=va((parseFloat(d&&d._gsap.y)||0)-h.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+R+", 0, 1)",d._gsap.y=R+"px",h.cacheID=st.cache,qi()}return!0}h.offset&&S(),M=!0},I,F,k,G,z=function(){v(),I.isActive()&&I.vars.scrollY>l&&(h()>l?I.progress(1)&&h(l):I.resetTo("scrollY",l))};return d&&Ce.set(d,{y:"+=0"}),e.ignoreCheck=function(B){return ur&&B.type==="touchmove"&&D()||_>1.05&&B.type!=="touchstart"||o.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){M=!1;var B=_;_=va((rt.visualViewport&&rt.visualViewport.scale||1)/m),I.pause(),B!==_&&Hl(c,_>1.01?!0:n?!1:"x"),F=g(),k=h(),v(),T=Qr},e.onRelease=e.onGestureStart=function(B,q){if(h.offset&&S(),!q)G.restart(!0);else{st.cache++;var ee=E(),R,ne;n&&(R=g(),ne=R+ee*.05*-B.velocityX/.227,ee*=dh(g,R,ne,bi(c,bn)),I.vars.scrollX=w(ne)),R=h(),ne=R+ee*.05*-B.velocityY/.227,ee*=dh(h,R,ne,bi(c,Kt)),I.vars.scrollY=P(ne),I.invalidate().duration(ee).play(.01),(ur&&I.vars.scrollY>=l||R>=l-1)&&Ce.to({},{onUpdate:z,duration:ee})}a&&a(B)},e.onWheel=function(){I._ts&&I.pause(),hn()-p>1e3&&(T=0,p=hn())},e.onChange=function(B,q,ee,R,ne){if(Qr!==T&&v(),q&&n&&g(w(R[2]===q?F+(B.startX-B.x):g()+q-R[1])),ee){h.offset&&S();var be=ne[2]===ee,Pe=be?k+B.startY-B.y:h()+ee-ne[1],Fe=P(Pe);be&&Pe!==Fe&&(k+=Fe-Pe),h(Fe)}(ee||q)&&qi()},e.onEnable=function(){Hl(c,n?!1:"x"),$e.addEventListener("refresh",z),nn(rt,"resize",z),h.smooth&&(h.target.style.scrollBehavior="auto",h.smooth=g.smooth=!1),y.enable()},e.onDisable=function(){Hl(c,!0),tn(rt,"resize",z),$e.removeEventListener("refresh",z),y.kill()},e.lockAxis=e.lockAxis!==!1,o=new kt(e),o.iOS=ur,ur&&!h()&&h(1),ur&&Ce.ticker.add(Mi),G=o._dc,I=Ce.to(o,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:qp(h,h(),function(){return I.pause()})},onUpdate:qi,onComplete:G.vars.onComplete}),o};$e.sort=function(r){if(pn(r))return tt.sort(r);var e=rt.pageYOffset||0;return $e.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+rt.innerHeight}),tt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};$e.observe=function(r){return new kt(r)};$e.normalizeScroll=function(r){if(typeof r>"u")return Mn;if(r===!0&&Mn)return Mn.enable();if(r===!1){Mn&&Mn.kill(),Mn=r;return}var e=r instanceof kt?r:Rg(r);return Mn&&Mn.target===e.target&&Mn.kill(),ts(e.target)&&(Mn=e),e};$e.core={_getVelocityProp:zc,_inputObserver:$p,_scrollers:st,_proxies:Ci,bridge:{ss:function(){ui||is("scrollStart"),ui=hn()},ref:function(){return fn}}};Fp()&&Ce.registerPlugin($e);let go=null;document.addEventListener("DOMContentLoaded",()=>Pg());function Pg(){const r=window.innerWidth<=1e3;go=new ug({duration:r?.8:1.2,lerp:r?.075:.1,smoothWheel:!0,syncTouch:!0,touchMultiplier:r?1.5:2}),go.on("scroll",$e.update),Je.ticker.add(e=>go.raf(e*1e3)),Je.ticker.lagSmoothing(0),window.lenis=go}Je.registerPlugin($e);let xf=[];document.addEventListener("DOMContentLoaded",Dg);function Dg(){const r=document.querySelector(".transition-grid");if(!r)return;const e=sessionStorage.getItem("pageTransition")==="true",t=Array.from(r.querySelectorAll(".transition-block"));if(xf=t.map(n=>({element:n})),e){sessionStorage.removeItem("pageTransition");const n=document.querySelector("style[data-transition]");n&&n.remove(),Je.set(t,{opacity:1}),setTimeout(()=>{r.style.backgroundColor="",Ig()},300)}else Je.set(t,{opacity:0});Fg()}function Lg(){return new Promise(r=>{const e=xf.map(i=>i.element),t=document.querySelector(".transition-grid");if(!e.length||!t){setTimeout(()=>r(),100);return}t.style.pointerEvents="auto",t.style.zIndex="1000",Je.set(e,{opacity:0});const n=[...e].sort(()=>Math.random()-.5);n.forEach((i,s)=>{Je.to(i,{opacity:1,duration:.075,ease:"power2.inOut",delay:s*.025,repeat:1,yoyo:!0,onComplete:()=>{Je.set(i,{opacity:1}),s===n.length-1&&setTimeout(()=>r(),300)}})})})}function Ig(){const r=xf.map(n=>n.element);if(r.length===0)return;const e=document.querySelector(".transition-grid"),t=[...r].sort(()=>Math.random()-.5);t.forEach((n,i)=>{Je.to(n,{opacity:0,duration:.075,ease:"power2.inOut",delay:i*.025,repeat:1,yoyo:!0,onComplete:()=>{Je.set(n,{opacity:0}),i===t.length-1&&(e&&(e.style.pointerEvents="none"),$e.refresh())}})})}function Ug(r){return r?r.startsWith("http")||r.startsWith("mailto:")||r.startsWith("tel:")||r.startsWith("#"):!1}function Ng(r){if(!r)return!0;let e=window.location.pathname;e=e.replace(/\.html$/,"").replace(/\/$/,"")||"/",e==="/index"&&(e="/");let t=r.trim();return t==="/"||t==="/index"||t==="/index.html"||t==="index.html"||!t?t="/":(t.startsWith("/")||(t="/"+t),t=t.replace(/\.html$/,"").replace(/\/$/,"")),e===t}function Fg(){let r=!1;const e=t=>{if(r){t.preventDefault(),t.stopPropagation();return}const n=t.target.closest("a");if(!n)return;const i=n.getAttribute("href");if(!i||Ug(i))return;if(Ng(i)){if(t.preventDefault(),t.stopPropagation(),n.classList.contains("menu-segment")){const a=window.toggleMenu;a&&typeof a=="function"&&a()}return}t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation(),r=!0;const s=document.querySelector(".transition-grid");s&&(s.style.pointerEvents="auto"),sessionStorage.setItem("pageTransition","true"),Lg().then(()=>{window.location.href=i}).catch(()=>{window.location.href=i})};document.addEventListener("click",e,{capture:!0,passive:!1})}const qc=document.querySelector(".nav-clock p"),_h=qc.querySelector("span");function Og(){const r=new Date,e=r.getHours().toString().padStart(2,"0"),t=r.getMinutes().toString().padStart(2,"0"),n=Intl.DateTimeFormat(void 0,{timeZoneName:"short"}).formatToParts(r).find(i=>i.type==="timeZoneName")?.value||"";return{hours:e,minutes:t,timeZone:n}}function Kp(){const{hours:r,minutes:e,timeZone:t}=Og();qc.childNodes[0].textContent=`${r} `,qc.childNodes[2].textContent=` ${e} ${t}`}function Bg(){_h.style.visibility=_h.style.visibility==="hidden"?"visible":"hidden"}Kp();setInterval(Kp,1e3);setInterval(Bg,500);const Sf="182",zg=0,gh=1,kg=2,Zo=1,Vg=2,Ma=3,br=0,Fn=1,Wi=2,$i=0,zs=1,vh=2,xh=3,Sh=4,Gg=5,kr=100,Hg=101,Wg=102,Xg=103,Yg=104,qg=200,$g=201,Kg=202,Zg=203,$c=204,Kc=205,jg=206,Jg=207,Qg=208,e0=209,t0=210,n0=211,i0=212,r0=213,s0=214,Zc=0,jc=1,Jc=2,Ks=3,Qc=4,eu=5,tu=6,nu=7,Zp=0,a0=1,o0=2,Ri=0,jp=1,Jp=2,Qp=3,em=4,tm=5,nm=6,im=7,rm=300,rs=301,Zs=302,iu=303,ru=304,Tl=306,su=1e3,Yi=1001,au=1002,an=1003,l0=1004,vo=1005,mn=1006,Wl=1007,Wr=1008,oi=1009,sm=1010,am=1011,Xa=1012,Mf=1013,Ii=1014,Ai=1015,Qi=1016,yf=1017,Ef=1018,Ya=1020,om=35902,lm=35899,cm=1021,um=1022,gi=1023,er=1026,Xr=1027,fm=1028,Tf=1029,js=1030,bf=1031,Af=1033,jo=33776,Jo=33777,Qo=33778,el=33779,ou=35840,lu=35841,cu=35842,uu=35843,fu=36196,hu=37492,du=37496,pu=37488,mu=37489,_u=37490,gu=37491,vu=37808,xu=37809,Su=37810,Mu=37811,yu=37812,Eu=37813,Tu=37814,bu=37815,Au=37816,wu=37817,Cu=37818,Ru=37819,Pu=37820,Du=37821,Lu=36492,Iu=36494,Uu=36495,Nu=36283,Fu=36284,Ou=36285,Bu=36286,c0=3200,u0=0,f0=1,fr="",ri="srgb",Js="srgb-linear",dl="linear",vt="srgb",hs=7680,Mh=519,h0=512,d0=513,p0=514,wf=515,m0=516,_0=517,Cf=518,g0=519,yh=35044,Eh="300 es",wi=2e3,pl=2001;function hm(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ml(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function v0(){const r=ml("canvas");return r.style.display="block",r}const Th={};function bh(...r){const e="THREE."+r.shift();console.log(e,...r)}function qe(...r){const e="THREE."+r.shift();console.warn(e,...r)}function dt(...r){const e="THREE."+r.shift();console.error(e,...r)}function qa(...r){const e=r.join(" ");e in Th||(Th[e]=!0,qe(...r))}function x0(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}class ea{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xl=Math.PI/180,zu=180/Math.PI;function Ja(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function at(r,e,t){return Math.max(e,Math.min(t,r))}function S0(r,e){return(r%e+e)%e}function Yl(r,e,t){return(1-t)*r+t*e}function aa(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Pn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class xt{constructor(e=0,t=0){xt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qa{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let l=n[i+0],c=n[i+1],u=n[i+2],f=n[i+3],d=s[a+0],h=s[a+1],g=s[a+2],_=s[a+3];if(o<=0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f;return}if(o>=1){e[t+0]=d,e[t+1]=h,e[t+2]=g,e[t+3]=_;return}if(f!==_||l!==d||c!==h||u!==g){let m=l*d+c*h+u*g+f*_;m<0&&(d=-d,h=-h,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const E=Math.acos(m),T=Math.sin(E);p=Math.sin(p*E)/T,o=Math.sin(o*E)/T,l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+_*o}else{l=l*p+d*o,c=c*p+h*o,u=u*p+g*o,f=f*p+_*o;const E=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=E,c*=E,u*=E,f*=E}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],l=n[i+1],c=n[i+2],u=n[i+3],f=s[a],d=s[a+1],h=s[a+2],g=s[a+3];return e[t]=o*g+u*f+l*h-c*d,e[t+1]=l*g+u*d+c*f-o*h,e[t+2]=c*g+u*h+o*d-l*f,e[t+3]=u*g-o*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(i/2),f=o(s/2),d=l(n/2),h=l(i/2),g=l(s/2);switch(a){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:qe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],f=t[10],d=n+o+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(a-i)*h}else if(n>o&&n>f){const h=2*Math.sqrt(1+n-o-f);this._w=(u-l)/h,this._x=.25*h,this._y=(i+a)/h,this._z=(s+c)/h}else if(o>f){const h=2*Math.sqrt(1+o-n-f);this._w=(s-c)/h,this._x=(i+a)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-n-o);this._w=(a-i)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(at(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+i*c-s*l,this._y=i*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-i*o,this._w=a*u-n*o-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),u=Math.sin(c);l=Math.sin(l*c)/u,t=Math.sin(t*c)/u,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{constructor(e=0,t=0,n=0){X.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ah.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ah.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*i-o*n),u=2*(o*t-s*i),f=2*(s*n-a*t);return this.x=t+l*c+a*f-o*u,this.y=n+l*u+o*c-s*f,this.z=i+l*f+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=i*l-s*o,this.y=s*a-n*l,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ql.copy(this).projectOnVector(e),this.sub(ql)}reflect(e){return this.sub(ql.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(at(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ql=new X,Ah=new Qa;class je{constructor(e,t,n,i,s,a,o,l,c){je.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c)}set(e,t,n,i,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],f=n[7],d=n[2],h=n[5],g=n[8],_=i[0],m=i[3],p=i[6],E=i[1],T=i[4],M=i[7],y=i[2],A=i[5],w=i[8];return s[0]=a*_+o*E+l*y,s[3]=a*m+o*T+l*A,s[6]=a*p+o*M+l*w,s[1]=c*_+u*E+f*y,s[4]=c*m+u*T+f*A,s[7]=c*p+u*M+f*w,s[2]=d*_+h*E+g*y,s[5]=d*m+h*T+g*A,s[8]=d*p+h*M+g*w,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+i*s*c-i*a*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=u*a-o*c,d=o*l-u*s,h=c*s-a*l,g=t*f+n*d+i*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=f*_,e[1]=(i*c-u*n)*_,e[2]=(o*n-i*a)*_,e[3]=d*_,e[4]=(u*t-i*l)*_,e[5]=(i*s-o*t)*_,e[6]=h*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-i*c,i*l,-i*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply($l.makeScale(e,t)),this}rotate(e){return this.premultiply($l.makeRotation(-e)),this}translate(e,t){return this.premultiply($l.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const $l=new je,wh=new je().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ch=new je().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function M0(){const r={enabled:!0,workingColorSpace:Js,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===vt&&(i.r=Ki(i.r),i.g=Ki(i.g),i.b=Ki(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===vt&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fr?dl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return qa("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return qa("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Js]:{primaries:e,whitePoint:n,transfer:dl,toXYZ:wh,fromXYZ:Ch,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ri},outputColorSpaceConfig:{drawingBufferColorSpace:ri}},[ri]:{primaries:e,whitePoint:n,transfer:vt,toXYZ:wh,fromXYZ:Ch,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ri}}}),r}const ct=M0();function Ki(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let ds;class y0{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ds===void 0&&(ds=ml("canvas")),ds.width=e.width,ds.height=e.height;const i=ds.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ds}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ml("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ki(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ki(t[n]/255)*255):t[n]=Ki(t[n]);return{data:t,width:e.width,height:e.height}}else return qe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let E0=0;class Rf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:E0++}),this.uuid=Ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(Kl(i[a].image)):s.push(Kl(i[a]))}else s=Kl(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function Kl(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?y0.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(qe("Texture: Unable to serialize Texture."),{})}let T0=0;const Zl=new X;class An extends ea{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,n=Yi,i=Yi,s=mn,a=Wr,o=gi,l=oi,c=An.DEFAULT_ANISOTROPY,u=fr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:T0++}),this.uuid=Ja(),this.name="",this.source=new Rf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new xt(0,0),this.repeat=new xt(1,1),this.center=new xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new je,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Zl).x}get height(){return this.source.getSize(Zl).y}get depth(){return this.source.getSize(Zl).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){qe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==rm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case su:e.x=e.x-Math.floor(e.x);break;case Yi:e.x=e.x<0?0:1;break;case au:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case su:e.y=e.y-Math.floor(e.y);break;case Yi:e.y=e.y<0?0:1;break;case au:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=rm;An.DEFAULT_ANISOTROPY=1;class zt{constructor(e=0,t=0,n=0,i=1){zt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],_=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const T=(c+1)/2,M=(h+1)/2,y=(p+1)/2,A=(u+d)/4,w=(f+_)/4,P=(g+m)/4;return T>M&&T>y?T<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(T),i=A/n,s=w/n):M>y?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=A/i,s=P/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=w/s,i=P/s),this.set(n,i,s,t),this}let E=Math.sqrt((m-g)*(m-g)+(f-_)*(f-_)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(f-_)/E,this.z=(d-u)/E,this.w=Math.acos((c+h+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=at(this.x,e.x,t.x),this.y=at(this.y,e.y,t.y),this.z=at(this.z,e.z,t.z),this.w=at(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=at(this.x,e,t),this.y=at(this.y,e,t),this.z=at(this.z,e,t),this.w=at(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(at(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class b0 extends ea{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new zt(0,0,e,t),this.scissorTest=!1,this.viewport=new zt(0,0,e,t);const i={width:e,height:t,depth:n.depth},s=new An(i);this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){const t={minFilter:mn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new Rf(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Pi extends b0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class dm extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class A0 extends An{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=an,this.minFilter=an,this.wrapR=Yi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eo{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(fi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(fi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=fi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,fi):fi.fromBufferAttribute(s,a),fi.applyMatrix4(e.matrixWorld),this.expandByPoint(fi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xo.copy(n.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,fi),fi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(oa),So.subVectors(this.max,oa),ps.subVectors(e.a,oa),ms.subVectors(e.b,oa),_s.subVectors(e.c,oa),rr.subVectors(ms,ps),sr.subVectors(_s,ms),Pr.subVectors(ps,_s);let t=[0,-rr.z,rr.y,0,-sr.z,sr.y,0,-Pr.z,Pr.y,rr.z,0,-rr.x,sr.z,0,-sr.x,Pr.z,0,-Pr.x,-rr.y,rr.x,0,-sr.y,sr.x,0,-Pr.y,Pr.x,0];return!jl(t,ps,ms,_s,So)||(t=[1,0,0,0,1,0,0,0,1],!jl(t,ps,ms,_s,So))?!1:(Mo.crossVectors(rr,sr),t=[Mo.x,Mo.y,Mo.z],jl(t,ps,ms,_s,So))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,fi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(fi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new X,new X,new X,new X,new X,new X,new X,new X],fi=new X,xo=new eo,ps=new X,ms=new X,_s=new X,rr=new X,sr=new X,Pr=new X,oa=new X,So=new X,Mo=new X,Dr=new X;function jl(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Dr.fromArray(r,s);const o=i.x*Math.abs(Dr.x)+i.y*Math.abs(Dr.y)+i.z*Math.abs(Dr.z),l=e.dot(Dr),c=t.dot(Dr),u=n.dot(Dr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const w0=new eo,la=new X,Jl=new X;class Pf{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):w0.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;la.subVectors(e,this.center);const t=la.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(la,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Jl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(la.copy(e.center).add(Jl)),this.expandByPoint(la.copy(e.center).sub(Jl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new X,Ql=new X,yo=new X,ar=new X,ec=new X,Eo=new X,tc=new X;class C0{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Oi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,t),Oi.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Ql.copy(e).add(t).multiplyScalar(.5),yo.copy(t).sub(e).normalize(),ar.copy(this.origin).sub(Ql);const s=e.distanceTo(t)*.5,a=-this.direction.dot(yo),o=ar.dot(this.direction),l=-ar.dot(yo),c=ar.lengthSq(),u=Math.abs(1-a*a);let f,d,h,g;if(u>0)if(f=a*l-o,d=a*o-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const _=1/u;f*=_,d*=_,h=f*(f+a*d+2*o)+d*(a*f+d+2*l)+c}else d=s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-a*s+o)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(a*s+o)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=a>0?-s:s,f=Math.max(0,-(a*d+o)),h=-f*f+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,f),i&&i.copy(Ql).addScaledVector(yo,d),h}intersectSphere(e,t){Oi.subVectors(e.center,this.origin);const n=Oi.dot(this.direction),i=Oi.dot(Oi)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),f>=0?(o=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(o=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),n>l||o>i)||((o>n||n!==n)&&(n=o),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,t,n,i,s){ec.subVectors(t,e),Eo.subVectors(n,e),tc.crossVectors(ec,Eo);let a=this.direction.dot(tc),o;if(a>0){if(i)return null;o=1}else if(a<0)o=-1,a=-a;else return null;ar.subVectors(this.origin,e);const l=o*this.direction.dot(Eo.crossVectors(ar,Eo));if(l<0)return null;const c=o*this.direction.dot(ec.cross(ar));if(c<0||l+c>a)return null;const u=-o*ar.dot(tc);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Xt{constructor(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){Xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m)}set(e,t,n,i,s,a,o,l,c,u,f,d,h,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const t=this.elements,n=e.elements,i=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=-l*f,t[8]=c,t[1]=h+g*c,t[5]=d-_*c,t[9]=-o*l,t[2]=_-d*c,t[6]=g+h*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d+_*o,t[4]=g*o-h,t[8]=a*c,t[1]=a*f,t[5]=a*u,t[9]=-o,t[2]=h*o-g,t[6]=_+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,_=c*f;t[0]=d-_*o,t[4]=-a*f,t[8]=g+h*o,t[1]=h+g*o,t[5]=a*u,t[9]=_-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,h=a*f,g=o*u,_=o*f;t[0]=l*u,t[4]=g*c-h,t[8]=d*c+_,t[1]=l*f,t[5]=_*c+d,t[9]=h*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=_-d*f,t[8]=g*f+h,t[1]=f,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=h*f+g,t[10]=d-_*f}else if(e.order==="XZY"){const d=a*l,h=a*c,g=o*l,_=o*c;t[0]=l*u,t[4]=-f,t[8]=c*u,t[1]=d*f+_,t[5]=a*u,t[9]=h*f-g,t[2]=g*f-h,t[6]=o*u,t[10]=_*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(R0,e,P0)}lookAt(e,t,n){const i=this.elements;return Vn.subVectors(e,t),Vn.lengthSq()===0&&(Vn.z=1),Vn.normalize(),or.crossVectors(n,Vn),or.lengthSq()===0&&(Math.abs(n.z)===1?Vn.x+=1e-4:Vn.z+=1e-4,Vn.normalize(),or.crossVectors(n,Vn)),or.normalize(),To.crossVectors(Vn,or),i[0]=or.x,i[4]=To.x,i[8]=Vn.x,i[1]=or.y,i[5]=To.y,i[9]=Vn.y,i[2]=or.z,i[6]=To.z,i[10]=Vn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],f=n[5],d=n[9],h=n[13],g=n[2],_=n[6],m=n[10],p=n[14],E=n[3],T=n[7],M=n[11],y=n[15],A=i[0],w=i[4],P=i[8],v=i[12],S=i[1],D=i[5],I=i[9],F=i[13],k=i[2],G=i[6],z=i[10],B=i[14],q=i[3],ee=i[7],R=i[11],ne=i[15];return s[0]=a*A+o*S+l*k+c*q,s[4]=a*w+o*D+l*G+c*ee,s[8]=a*P+o*I+l*z+c*R,s[12]=a*v+o*F+l*B+c*ne,s[1]=u*A+f*S+d*k+h*q,s[5]=u*w+f*D+d*G+h*ee,s[9]=u*P+f*I+d*z+h*R,s[13]=u*v+f*F+d*B+h*ne,s[2]=g*A+_*S+m*k+p*q,s[6]=g*w+_*D+m*G+p*ee,s[10]=g*P+_*I+m*z+p*R,s[14]=g*v+_*F+m*B+p*ne,s[3]=E*A+T*S+M*k+y*q,s[7]=E*w+T*D+M*G+y*ee,s[11]=E*P+T*I+M*z+y*R,s[15]=E*v+T*F+M*B+y*ne,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],_=e[7],m=e[11],p=e[15],E=l*h-c*d,T=o*h-c*f,M=o*d-l*f,y=a*h-c*u,A=a*d-l*u,w=a*f-o*u;return t*(_*E-m*T+p*M)-n*(g*E-m*y+p*A)+i*(g*T-_*y+p*w)-s*(g*M-_*A+m*w)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],_=e[13],m=e[14],p=e[15],E=f*m*c-_*d*c+_*l*h-o*m*h-f*l*p+o*d*p,T=g*d*c-u*m*c-g*l*h+a*m*h+u*l*p-a*d*p,M=u*_*c-g*f*c+g*o*h-a*_*h-u*o*p+a*f*p,y=g*f*l-u*_*l-g*o*d+a*_*d+u*o*m-a*f*m,A=t*E+n*T+i*M+s*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return e[0]=E*w,e[1]=(_*d*s-f*m*s-_*i*h+n*m*h+f*i*p-n*d*p)*w,e[2]=(o*m*s-_*l*s+_*i*c-n*m*c-o*i*p+n*l*p)*w,e[3]=(f*l*s-o*d*s-f*i*c+n*d*c+o*i*h-n*l*h)*w,e[4]=T*w,e[5]=(u*m*s-g*d*s+g*i*h-t*m*h-u*i*p+t*d*p)*w,e[6]=(g*l*s-a*m*s-g*i*c+t*m*c+a*i*p-t*l*p)*w,e[7]=(a*d*s-u*l*s+u*i*c-t*d*c-a*i*h+t*l*h)*w,e[8]=M*w,e[9]=(g*f*s-u*_*s-g*n*h+t*_*h+u*n*p-t*f*p)*w,e[10]=(a*_*s-g*o*s+g*n*c-t*_*c-a*n*p+t*o*p)*w,e[11]=(u*o*s-a*f*s-u*n*c+t*f*c+a*n*h-t*o*h)*w,e[12]=y*w,e[13]=(u*_*i-g*f*i+g*n*d-t*_*d-u*n*m+t*f*m)*w,e[14]=(g*o*i-a*_*i-g*n*l+t*_*l+a*n*m-t*o*m)*w,e[15]=(a*f*i-u*o*i+u*n*l-t*f*l-a*n*d+t*o*d)*w,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-i*l,c*l+i*o,0,c*o+i*l,u*o+n,u*l-i*a,0,c*l-i*o,u*l+i*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,f=o+o,d=s*c,h=s*u,g=s*f,_=a*u,m=a*f,p=o*f,E=l*c,T=l*u,M=l*f,y=n.x,A=n.y,w=n.z;return i[0]=(1-(_+p))*y,i[1]=(h+M)*y,i[2]=(g-T)*y,i[3]=0,i[4]=(h-M)*A,i[5]=(1-(d+p))*A,i[6]=(m+E)*A,i[7]=0,i[8]=(g+T)*w,i[9]=(m-E)*w,i[10]=(1-(d+_))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=gs.set(i[0],i[1],i[2]).length();const a=gs.set(i[4],i[5],i[6]).length(),o=gs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),hi.copy(this);const c=1/s,u=1/a,f=1/o;return hi.elements[0]*=c,hi.elements[1]*=c,hi.elements[2]*=c,hi.elements[4]*=u,hi.elements[5]*=u,hi.elements[6]*=u,hi.elements[8]*=f,hi.elements[9]*=f,hi.elements[10]*=f,t.setFromRotationMatrix(hi),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,i,s,a,o=wi,l=!1){const c=this.elements,u=2*s/(t-e),f=2*s/(n-i),d=(t+e)/(t-e),h=(n+i)/(n-i);let g,_;if(l)g=s/(a-s),_=a*s/(a-s);else if(o===wi)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===pl)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=f,c[9]=h,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=wi,l=!1){const c=this.elements,u=2/(t-e),f=2/(n-i),d=-(t+e)/(t-e),h=-(n+i)/(n-i);let g,_;if(l)g=1/(a-s),_=a/(a-s);else if(o===wi)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===pl)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=u,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=f,c[9]=0,c[13]=h,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new X,hi=new Xt,R0=new X(0,0,0),P0=new X(1,1,1),or=new X,To=new X,Vn=new X,Rh=new Xt,Ph=new Qa;class tr{constructor(e=0,t=0,n=0,i=tr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],l=i[1],c=i[5],u=i[9],f=i[2],d=i[6],h=i[10];switch(t){case"XYZ":this._y=Math.asin(at(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-at(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(at(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-at(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(at(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(o,h));break;case"XZY":this._z=Math.asin(-at(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:qe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Rh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Rh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ph.setFromEuler(this),this.setFromQuaternion(Ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}tr.DEFAULT_ORDER="XYZ";class pm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let D0=0;const Dh=new X,vs=new Qa,Bi=new Xt,bo=new X,ca=new X,L0=new X,I0=new Qa,Lh=new X(1,0,0),Ih=new X(0,1,0),Uh=new X(0,0,1),Nh={type:"added"},U0={type:"removed"},xs={type:"childadded",child:null},nc={type:"childremoved",child:null};class Jn extends ea{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:D0++}),this.uuid=Ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Jn.DEFAULT_UP.clone();const e=new X,t=new tr,n=new Qa,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Xt},normalMatrix:{value:new je}}),this.matrix=new Xt,this.matrixWorld=new Xt,this.matrixAutoUpdate=Jn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new pm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Lh,e)}rotateY(e){return this.rotateOnAxis(Ih,e)}rotateZ(e){return this.rotateOnAxis(Uh,e)}translateOnAxis(e,t){return Dh.copy(e).applyQuaternion(this.quaternion),this.position.add(Dh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Lh,e)}translateY(e){return this.translateOnAxis(Ih,e)}translateZ(e){return this.translateOnAxis(Uh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?bo.copy(e):bo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),ca.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Bi.lookAt(ca,bo,this.up):Bi.lookAt(bo,ca,this.up),this.quaternion.setFromRotationMatrix(Bi),i&&(Bi.extractRotation(i.matrixWorld),vs.setFromRotationMatrix(Bi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(dt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Nh),xs.child=e,this.dispatchEvent(xs),xs.child=null):dt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(U0),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Nh),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,e,L0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ca,I0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];i.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),f=a(e.shapes),d=a(e.skeletons),h=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),d.length>0&&(n.skeletons=d),h.length>0&&(n.animations=h),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}Jn.DEFAULT_UP=new X(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const di=new X,zi=new X,ic=new X,ki=new X,Ss=new X,Ms=new X,Fh=new X,rc=new X,sc=new X,ac=new X,oc=new zt,lc=new zt,cc=new zt;class _i{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),di.subVectors(e,t),i.cross(di);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){di.subVectors(i,t),zi.subVectors(n,t),ic.subVectors(e,t);const a=di.dot(di),o=di.dot(zi),l=di.dot(ic),c=zi.dot(zi),u=zi.dot(ic),f=a*c-o*o;if(f===0)return s.set(0,0,0),null;const d=1/f,h=(c*l-o*u)*d,g=(a*u-o*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,ki)===null?!1:ki.x>=0&&ki.y>=0&&ki.x+ki.y<=1}static getInterpolation(e,t,n,i,s,a,o,l){return this.getBarycoord(e,t,n,i,ki)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ki.x),l.addScaledVector(a,ki.y),l.addScaledVector(o,ki.z),l)}static getInterpolatedAttribute(e,t,n,i,s,a){return oc.setScalar(0),lc.setScalar(0),cc.setScalar(0),oc.fromBufferAttribute(e,t),lc.fromBufferAttribute(e,n),cc.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(oc,s.x),a.addScaledVector(lc,s.y),a.addScaledVector(cc,s.z),a}static isFrontFacing(e,t,n,i){return di.subVectors(n,t),zi.subVectors(e,t),di.cross(zi).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return di.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),di.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return _i.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;Ss.subVectors(i,n),Ms.subVectors(s,n),rc.subVectors(e,n);const l=Ss.dot(rc),c=Ms.dot(rc);if(l<=0&&c<=0)return t.copy(n);sc.subVectors(e,i);const u=Ss.dot(sc),f=Ms.dot(sc);if(u>=0&&f<=u)return t.copy(i);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(Ss,a);ac.subVectors(e,s);const h=Ss.dot(ac),g=Ms.dot(ac);if(g>=0&&h<=g)return t.copy(s);const _=h*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Ms,o);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return Fh.subVectors(s,i),o=(f-u)/(f-u+(h-g)),t.copy(i).addScaledVector(Fh,o);const p=1/(m+_+d);return a=_*p,o=d*p,t.copy(n).addScaledVector(Ss,a).addScaledVector(Ms,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const mm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Ao={h:0,s:0,l:0};function uc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class yt{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=ct.workingColorSpace){return this.r=e,this.g=t,this.b=n,ct.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=ct.workingColorSpace){if(e=S0(e,1),t=at(t,0,1),n=at(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=uc(a,s,e+1/3),this.g=uc(a,s,e),this.b=uc(a,s,e-1/3)}return ct.colorSpaceToWorking(this,i),this}setStyle(e,t=ri){function n(s){s!==void 0&&parseFloat(s)<1&&qe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:qe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);qe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ri){const n=mm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):qe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ki(e.r),this.g=Ki(e.g),this.b=Ki(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ct.workingToColorSpace(un.copy(this),e),Math.round(at(un.r*255,0,255))*65536+Math.round(at(un.g*255,0,255))*256+Math.round(at(un.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ct.workingColorSpace){ct.workingToColorSpace(un.copy(this),t);const n=un.r,i=un.g,s=un.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const f=a-o;switch(c=u<=.5?f/(a+o):f/(2-a-o),a){case n:l=(i-s)/f+(i<s?6:0);break;case i:l=(s-n)/f+2;break;case s:l=(n-i)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=ct.workingColorSpace){return ct.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=ri){ct.workingToColorSpace(un.copy(this),e);const t=un.r,n=un.g,i=un.b;return e!==ri?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+t,lr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(lr),e.getHSL(Ao);const n=Yl(lr.h,Ao.h,t),i=Yl(lr.s,Ao.s,t),s=Yl(lr.l,Ao.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new yt;yt.NAMES=mm;let N0=0;class bl extends ea{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:N0++}),this.uuid=Ja(),this.name="",this.type="Material",this.blending=zs,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=Kc,this.blendEquation=kr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hs,this.stencilZFail=hs,this.stencilZPass=hs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){qe(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){qe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(n.blending=this.blending),this.side!==br&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$c&&(n.blendSrc=this.blendSrc),this.blendDst!==Kc&&(n.blendDst=this.blendDst),this.blendEquation!==kr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ks&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==hs&&(n.stencilFail=this.stencilFail),this.stencilZFail!==hs&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==hs&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _m extends bl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new tr,this.combine=Zp,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Gt=new X,wo=new xt;let F0=0;class Di{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:F0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=yh,this.updateRanges=[],this.gpuType=Ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wo.fromBufferAttribute(this,t),wo.applyMatrix3(e),this.setXY(t,wo.x,wo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=aa(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=aa(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=aa(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=aa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=aa(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Pn(t,this.array),n=Pn(n,this.array),i=Pn(i,this.array),s=Pn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==yh&&(e.usage=this.usage),e}}class gm extends Di{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vm extends Di{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Zi extends Di{constructor(e,t,n){super(new Float32Array(e),t,n)}}let O0=0;const ni=new Xt,fc=new Jn,ys=new X,Gn=new eo,ua=new eo,en=new X;class nr extends ea{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:O0++}),this.uuid=Ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(hm(e)?vm:gm)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new je().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ni.makeRotationFromQuaternion(e),this.applyMatrix4(ni),this}rotateX(e){return ni.makeRotationX(e),this.applyMatrix4(ni),this}rotateY(e){return ni.makeRotationY(e),this.applyMatrix4(ni),this}rotateZ(e){return ni.makeRotationZ(e),this.applyMatrix4(ni),this}translate(e,t,n){return ni.makeTranslation(e,t,n),this.applyMatrix4(ni),this}scale(e,t,n){return ni.makeScale(e,t,n),this.applyMatrix4(ni),this}lookAt(e){return fc.lookAt(e),fc.updateMatrix(),this.applyMatrix4(fc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ys).negate(),this.translate(ys.x,ys.y,ys.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Zi(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&qe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];Gn.setFromBufferAttribute(s),this.morphTargetsRelative?(en.addVectors(this.boundingBox.min,Gn.min),this.boundingBox.expandByPoint(en),en.addVectors(this.boundingBox.max,Gn.max),this.boundingBox.expandByPoint(en)):(this.boundingBox.expandByPoint(Gn.min),this.boundingBox.expandByPoint(Gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&dt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Pf);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){dt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(Gn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ua.setFromBufferAttribute(o),this.morphTargetsRelative?(en.addVectors(Gn.min,ua.min),Gn.expandByPoint(en),en.addVectors(Gn.max,ua.max),Gn.expandByPoint(en)):(Gn.expandByPoint(ua.min),Gn.expandByPoint(ua.max))}Gn.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)en.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(en));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)en.fromBufferAttribute(o,c),l&&(ys.fromBufferAttribute(e,c),en.add(ys)),i=Math.max(i,n.distanceToSquared(en))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&dt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){dt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Di(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new X,l[P]=new X;const c=new X,u=new X,f=new X,d=new xt,h=new xt,g=new xt,_=new X,m=new X;function p(P,v,S){c.fromBufferAttribute(n,P),u.fromBufferAttribute(n,v),f.fromBufferAttribute(n,S),d.fromBufferAttribute(s,P),h.fromBufferAttribute(s,v),g.fromBufferAttribute(s,S),u.sub(c),f.sub(c),h.sub(d),g.sub(d);const D=1/(h.x*g.y-g.x*h.y);isFinite(D)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(f,-h.y).multiplyScalar(D),m.copy(f).multiplyScalar(h.x).addScaledVector(u,-g.x).multiplyScalar(D),o[P].add(_),o[v].add(_),o[S].add(_),l[P].add(m),l[v].add(m),l[S].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let P=0,v=E.length;P<v;++P){const S=E[P],D=S.start,I=S.count;for(let F=D,k=D+I;F<k;F+=3)p(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const T=new X,M=new X,y=new X,A=new X;function w(P){y.fromBufferAttribute(i,P),A.copy(y);const v=o[P];T.copy(v),T.sub(y.multiplyScalar(y.dot(v))).normalize(),M.crossVectors(A,v);const D=M.dot(l[P])<0?-1:1;a.setXYZW(P,T.x,T.y,T.z,D)}for(let P=0,v=E.length;P<v;++P){const S=E[P],D=S.start,I=S.count;for(let F=D,k=D+I;F<k;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Di(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,h=n.count;d<h;d++)n.setXYZ(d,0,0,0);const i=new X,s=new X,a=new X,o=new X,l=new X,c=new X,u=new X,f=new X;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=t.count;d<h;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),f.subVectors(i,s),u.cross(f),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)en.fromBufferAttribute(e,t),en.normalize(),e.setXYZ(t,en.x,en.y,en.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,f=o.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?h=l[_]*o.data.stride+o.offset:h=l[_]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new Di(d,u,f)}if(this.index===null)return qe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new nr,n=this.index.array,i=this.attributes;for(const o in i){const l=i[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,n);l.push(h)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(i[l]=u,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Oh=new Xt,Lr=new C0,Co=new Pf,Bh=new X,Ro=new X,Po=new X,Do=new X,hc=new X,Lo=new X,zh=new X,Io=new X;class Ui extends Jn{constructor(e=new nr,t=new _m){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){Lo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],f=s[l];u!==0&&(hc.fromBufferAttribute(f,e),a?Lo.addScaledVector(hc,u):Lo.addScaledVector(hc.sub(t),u))}t.add(Lo)}return t}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(s),Lr.copy(e.ray).recast(e.near),!(Co.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Co,Bh)===null||Lr.origin.distanceToSquared(Bh)>(e.far-e.near)**2))&&(Oh.copy(s).invert(),Lr.copy(e.ray).applyMatrix4(Oh),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Lr)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,h.start),T=Math.min(o.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,y=T;M<y;M+=3){const A=o.getX(M),w=o.getX(M+1),P=o.getX(M+2);i=Uo(this,p,e,n,c,u,f,A,w,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(o.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=o.getX(m),T=o.getX(m+1),M=o.getX(m+2);i=Uo(this,a,e,n,c,u,f,E,T,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=d.length;g<_;g++){const m=d[g],p=a[m.materialIndex],E=Math.max(m.start,h.start),T=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let M=E,y=T;M<y;M+=3){const A=M,w=M+1,P=M+2;i=Uo(this,p,e,n,c,u,f,A,w,P),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,h.start),_=Math.min(l.count,h.start+h.count);for(let m=g,p=_;m<p;m+=3){const E=m,T=m+1,M=m+2;i=Uo(this,a,e,n,c,u,f,E,T,M),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function B0(r,e,t,n,i,s,a,o){let l;if(e.side===Fn?l=n.intersectTriangle(a,s,i,!0,o):l=n.intersectTriangle(i,s,a,e.side===br,o),l===null)return null;Io.copy(o),Io.applyMatrix4(r.matrixWorld);const c=t.ray.origin.distanceTo(Io);return c<t.near||c>t.far?null:{distance:c,point:Io.clone(),object:r}}function Uo(r,e,t,n,i,s,a,o,l,c){r.getVertexPosition(o,Ro),r.getVertexPosition(l,Po),r.getVertexPosition(c,Do);const u=B0(r,e,t,n,Ro,Po,Do,zh);if(u){const f=new X;_i.getBarycoord(zh,Ro,Po,Do,f),i&&(u.uv=_i.getInterpolatedAttribute(i,o,l,c,f,new xt)),s&&(u.uv1=_i.getInterpolatedAttribute(s,o,l,c,f,new xt)),a&&(u.normal=_i.getInterpolatedAttribute(a,o,l,c,f,new X),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new X,materialIndex:0};_i.getNormal(Ro,Po,Do,d.normal),u.face=d,u.barycoord=f}return u}class to extends nr{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new Zi(c,3)),this.setAttribute("normal",new Zi(u,3)),this.setAttribute("uv",new Zi(f,2));function g(_,m,p,E,T,M,y,A,w,P,v){const S=M/w,D=y/P,I=M/2,F=y/2,k=A/2,G=w+1,z=P+1;let B=0,q=0;const ee=new X;for(let R=0;R<z;R++){const ne=R*D-F;for(let be=0;be<G;be++){const Pe=be*S-I;ee[_]=Pe*E,ee[m]=ne*T,ee[p]=k,c.push(ee.x,ee.y,ee.z),ee[_]=0,ee[m]=0,ee[p]=A>0?1:-1,u.push(ee.x,ee.y,ee.z),f.push(be/w),f.push(1-R/P),B+=1}}for(let R=0;R<P;R++)for(let ne=0;ne<w;ne++){const be=d+ne+G*R,Pe=d+ne+G*(R+1),Fe=d+(ne+1)+G*(R+1),We=d+(ne+1)+G*R;l.push(be,Pe,We),l.push(Pe,Fe,We),q+=6}o.addGroup(h,q,v),h+=q,d+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new to(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(qe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=Qs(r[t]);for(const i in n)e[i]=n[i]}return e}function z0(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function xm(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const k0={clone:Qs,merge:Sn};var V0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,G0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class vi extends bl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=V0,this.fragmentShader=G0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Qs(e.uniforms),this.uniformsGroups=z0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Sm extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xt,this.projectionMatrix=new Xt,this.projectionMatrixInverse=new Xt,this.coordinateSystem=wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cr=new X,kh=new xt,Vh=new xt;class mi extends Sm{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zu*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zu*2*Math.atan(Math.tan(Xl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){cr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(cr.x,cr.y).multiplyScalar(-e/cr.z),cr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(cr.x,cr.y).multiplyScalar(-e/cr.z)}getViewSize(e,t){return this.getViewBounds(e,kh,Vh),t.subVectors(Vh,kh)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*i/l,t-=a.offsetY*n/c,i*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Es=-90,Ts=1;class H0 extends Jn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new mi(Es,Ts,e,t);i.layers=this.layers,this.add(i);const s=new mi(Es,Ts,e,t);s.layers=this.layers,this.add(s);const a=new mi(Es,Ts,e,t);a.layers=this.layers,this.add(a);const o=new mi(Es,Ts,e,t);o.layers=this.layers,this.add(o);const l=new mi(Es,Ts,e,t);l.layers=this.layers,this.add(l);const c=new mi(Es,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===wi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pl)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),h=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,a),e.setRenderTarget(n,2,i),e.render(t,o),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(f,d,h),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Mm extends An{constructor(e=[],t=rs,n,i,s,a,o,l,c,u){super(e,t,n,i,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ym extends Pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Mm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new to(5,5,5),s=new vi({name:"CubemapFromEquirect",uniforms:Qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Fn,blending:$i});s.uniforms.tEquirect.value=t;const a=new Ui(i,s),o=t.minFilter;return t.minFilter===Wr&&(t.minFilter=mn),new H0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}class No extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const W0={type:"move"};class dc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(W0)))}return o!==null&&(o.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new No;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class X0 extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new tr,this.environmentIntensity=1,this.environmentRotation=new tr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Y0 extends An{constructor(e=null,t=1,n=1,i,s,a,o,l,c=an,u=an,f,d){super(null,a,o,l,c,u,i,s,f,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pc=new X,q0=new X,$0=new je;class zr{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=pc.subVectors(n,t).cross(q0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(pc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||$0.getNormalMatrix(e),i=this.coplanarPoint(pc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ir=new Pf,K0=new xt(.5,.5),Fo=new X;class Em{constructor(e=new zr,t=new zr,n=new zr,i=new zr,s=new zr,a=new zr){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=wi,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],u=s[4],f=s[5],d=s[6],h=s[7],g=s[8],_=s[9],m=s[10],p=s[11],E=s[12],T=s[13],M=s[14],y=s[15];if(i[0].setComponents(c-a,h-u,p-g,y-E).normalize(),i[1].setComponents(c+a,h+u,p+g,y+E).normalize(),i[2].setComponents(c+o,h+f,p+_,y+T).normalize(),i[3].setComponents(c-o,h-f,p-_,y-T).normalize(),n)i[4].setComponents(l,d,m,M).normalize(),i[5].setComponents(c-l,h-d,p-m,y-M).normalize();else if(i[4].setComponents(c-l,h-d,p-m,y-M).normalize(),t===wi)i[5].setComponents(c+l,h+d,p+m,y+M).normalize();else if(t===pl)i[5].setComponents(l,d,m,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(e){Ir.center.set(0,0,0);const t=K0.distanceTo(e.center);return Ir.radius=.7071067811865476+t,Ir.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Fo.x=i.normal.x>0?e.max.x:e.min.x,Fo.y=i.normal.y>0?e.max.y:e.min.y,Fo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Fo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class $a extends An{constructor(e,t,n=Ii,i,s,a,o=an,l=an,c,u=er,f=1){if(u!==er&&u!==Xr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:e,height:t,depth:f};super(d,i,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Z0 extends $a{constructor(e,t=Ii,n=rs,i,s,a=an,o=an,l,c=er){const u={width:e,height:e,depth:1},f=[u,u,u,u,u,u];super(e,e,t,n,i,s,a,o,l,c),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Tm extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class no extends nr{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(i),c=o+1,u=l+1,f=e/o,d=t/l,h=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const E=p*d-a;for(let T=0;T<c;T++){const M=T*f-s;g.push(M,-E,0),_.push(0,0,1),m.push(T/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let E=0;E<o;E++){const T=E+c*p,M=E+c*(p+1),y=E+1+c*(p+1),A=E+1+c*p;h.push(T,M,A),h.push(M,y,A)}this.setIndex(h),this.setAttribute("position",new Zi(g,3)),this.setAttribute("normal",new Zi(_,3)),this.setAttribute("uv",new Zi(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.widthSegments,e.heightSegments)}}class j0 extends vi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class J0 extends bl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=c0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Q0 extends bl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Df extends Sm{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ev extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}function Gh(r,e,t,n){const i=tv(n);switch(t){case cm:return r*e;case fm:return r*e/i.components*i.byteLength;case Tf:return r*e/i.components*i.byteLength;case js:return r*e*2/i.components*i.byteLength;case bf:return r*e*2/i.components*i.byteLength;case um:return r*e*3/i.components*i.byteLength;case gi:return r*e*4/i.components*i.byteLength;case Af:return r*e*4/i.components*i.byteLength;case jo:case Jo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Qo:case el:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case lu:case uu:return Math.max(r,16)*Math.max(e,8)/4;case ou:case cu:return Math.max(r,8)*Math.max(e,8)/2;case fu:case hu:case pu:case mu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case du:case _u:case gu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case vu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case xu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Su:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case yu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Eu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Tu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case bu:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Au:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case wu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Cu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Ru:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Pu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Du:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Lu:case Iu:case Uu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case Nu:case Fu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Ou:case Bu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function tv(r){switch(r){case oi:case sm:return{byteLength:1,components:1};case Xa:case am:case Qi:return{byteLength:2,components:1};case yf:case Ef:return{byteLength:2,components:4};case Ii:case Mf:case Ai:return{byteLength:4,components:1};case om:case lm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sf}}));typeof window<"u"&&(window.__THREE__?qe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sf);function bm(){let r=null,e=!1,t=null,n=null;function i(s,a){t(s,a),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function nv(r){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,f=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,u),o.onUploadCallback();let h;if(c instanceof Float32Array)h=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)h=r.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?h=r.HALF_FLOAT:h=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)h=r.SHORT;else if(c instanceof Uint32Array)h=r.UNSIGNED_INT;else if(c instanceof Int32Array)h=r.INT;else if(c instanceof Int8Array)h=r.BYTE;else if(c instanceof Uint8Array)h=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)h=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:h,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,c){const u=l.array,f=l.updateRanges;if(r.bindBuffer(c,o),f.length===0)r.bufferSubData(c,0,u);else{f.sort((h,g)=>h.start-g.start);let d=0;for(let h=1;h<f.length;h++){const g=f[d],_=f[h];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,f[d]=_)}f.length=d+1;for(let h=0,g=f.length;h<g;h++){const _=f[h];r.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(r.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:i,remove:s,update:a}}var iv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,rv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,sv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,av=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ov=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,uv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,fv=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,hv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,dv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,_v=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,vv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Sv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ev=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,bv=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Av=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,wv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Rv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Dv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Lv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Iv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Uv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Ov=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Bv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,kv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Vv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Gv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Wv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Xv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,$v=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Kv=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,jv=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Jv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ex=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ix=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rx=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,ax=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ox=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cx=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ux=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,px=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_x=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,gx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xx=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Sx=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ex=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ax=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,wx=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Cx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Rx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Px=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Dx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Lx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ix=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Ux=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ox=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vx=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Hx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wx=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xx=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Yx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,qx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,$x=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Kx=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,jx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Jx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,eS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_S=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,SS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,ES=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,TS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,wS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,RS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,DS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,LS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,US=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:iv,alphahash_pars_fragment:rv,alphamap_fragment:sv,alphamap_pars_fragment:av,alphatest_fragment:ov,alphatest_pars_fragment:lv,aomap_fragment:cv,aomap_pars_fragment:uv,batching_pars_vertex:fv,batching_vertex:hv,begin_vertex:dv,beginnormal_vertex:pv,bsdfs:mv,iridescence_fragment:_v,bumpmap_pars_fragment:gv,clipping_planes_fragment:vv,clipping_planes_pars_fragment:xv,clipping_planes_pars_vertex:Sv,clipping_planes_vertex:Mv,color_fragment:yv,color_pars_fragment:Ev,color_pars_vertex:Tv,color_vertex:bv,common:Av,cube_uv_reflection_fragment:wv,defaultnormal_vertex:Cv,displacementmap_pars_vertex:Rv,displacementmap_vertex:Pv,emissivemap_fragment:Dv,emissivemap_pars_fragment:Lv,colorspace_fragment:Iv,colorspace_pars_fragment:Uv,envmap_fragment:Nv,envmap_common_pars_fragment:Fv,envmap_pars_fragment:Ov,envmap_pars_vertex:Bv,envmap_physical_pars_fragment:Kv,envmap_vertex:zv,fog_vertex:kv,fog_pars_vertex:Vv,fog_fragment:Gv,fog_pars_fragment:Hv,gradientmap_pars_fragment:Wv,lightmap_pars_fragment:Xv,lights_lambert_fragment:Yv,lights_lambert_pars_fragment:qv,lights_pars_begin:$v,lights_toon_fragment:Zv,lights_toon_pars_fragment:jv,lights_phong_fragment:Jv,lights_phong_pars_fragment:Qv,lights_physical_fragment:ex,lights_physical_pars_fragment:tx,lights_fragment_begin:nx,lights_fragment_maps:ix,lights_fragment_end:rx,logdepthbuf_fragment:sx,logdepthbuf_pars_fragment:ax,logdepthbuf_pars_vertex:ox,logdepthbuf_vertex:lx,map_fragment:cx,map_pars_fragment:ux,map_particle_fragment:fx,map_particle_pars_fragment:hx,metalnessmap_fragment:dx,metalnessmap_pars_fragment:px,morphinstance_vertex:mx,morphcolor_vertex:_x,morphnormal_vertex:gx,morphtarget_pars_vertex:vx,morphtarget_vertex:xx,normal_fragment_begin:Sx,normal_fragment_maps:Mx,normal_pars_fragment:yx,normal_pars_vertex:Ex,normal_vertex:Tx,normalmap_pars_fragment:bx,clearcoat_normal_fragment_begin:Ax,clearcoat_normal_fragment_maps:wx,clearcoat_pars_fragment:Cx,iridescence_pars_fragment:Rx,opaque_fragment:Px,packing:Dx,premultiplied_alpha_fragment:Lx,project_vertex:Ix,dithering_fragment:Ux,dithering_pars_fragment:Nx,roughnessmap_fragment:Fx,roughnessmap_pars_fragment:Ox,shadowmap_pars_fragment:Bx,shadowmap_pars_vertex:zx,shadowmap_vertex:kx,shadowmask_pars_fragment:Vx,skinbase_vertex:Gx,skinning_pars_vertex:Hx,skinning_vertex:Wx,skinnormal_vertex:Xx,specularmap_fragment:Yx,specularmap_pars_fragment:qx,tonemapping_fragment:$x,tonemapping_pars_fragment:Kx,transmission_fragment:Zx,transmission_pars_fragment:jx,uv_pars_fragment:Jx,uv_pars_vertex:Qx,uv_vertex:eS,worldpos_vertex:tS,background_vert:nS,background_frag:iS,backgroundCube_vert:rS,backgroundCube_frag:sS,cube_vert:aS,cube_frag:oS,depth_vert:lS,depth_frag:cS,distance_vert:uS,distance_frag:fS,equirect_vert:hS,equirect_frag:dS,linedashed_vert:pS,linedashed_frag:mS,meshbasic_vert:_S,meshbasic_frag:gS,meshlambert_vert:vS,meshlambert_frag:xS,meshmatcap_vert:SS,meshmatcap_frag:MS,meshnormal_vert:yS,meshnormal_frag:ES,meshphong_vert:TS,meshphong_frag:bS,meshphysical_vert:AS,meshphysical_frag:wS,meshtoon_vert:CS,meshtoon_frag:RS,points_vert:PS,points_frag:DS,shadow_vert:LS,shadow_frag:IS,sprite_vert:US,sprite_frag:NS},me={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new je}},envmap:{envMap:{value:null},envMapRotation:{value:new je},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new je}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new je}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new je},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new je},normalScale:{value:new xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new je},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new je}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new je}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new je}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0},uvTransform:{value:new je}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new je},alphaMap:{value:null},alphaMapTransform:{value:new je},alphaTest:{value:0}}},yi={basic:{uniforms:Sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Sn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Sn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Sn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new yt(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Sn([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Sn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Sn([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Sn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Sn([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new je},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new je}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Sn([me.common,me.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Sn([me.lights,me.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};yi.physical={uniforms:Sn([yi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new je},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new je},clearcoatNormalScale:{value:new xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new je},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new je},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new je},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new je},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new je},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new je},transmissionSamplerSize:{value:new xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new je},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new je},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new je},anisotropyVector:{value:new xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new je}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const Oo={r:0,b:0,g:0},Ur=new tr,FS=new Xt;function OS(r,e,t,n,i,s,a){const o=new yt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(T){let M=T.isScene===!0?T.background:null;return M&&M.isTexture&&(M=(T.backgroundBlurriness>0?t:e).get(M)),M}function _(T){let M=!1;const y=g(T);y===null?p(o,l):y&&y.isColor&&(p(y,1),M=!0);const A=r.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function m(T,M){const y=g(M);y&&(y.isCubeTexture||y.mapping===Tl)?(u===void 0&&(u=new Ui(new to(1,1,1),new vi({name:"BackgroundCubeMaterial",uniforms:Qs(yi.backgroundCube.uniforms),vertexShader:yi.backgroundCube.vertexShader,fragmentShader:yi.backgroundCube.fragmentShader,side:Fn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ur.copy(M.backgroundRotation),Ur.x*=-1,Ur.y*=-1,Ur.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ur.y*=-1,Ur.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(FS.makeRotationFromEuler(Ur)),u.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,(f!==y||d!==y.version||h!==r.toneMapping)&&(u.material.needsUpdate=!0,f=y,d=y.version,h=r.toneMapping),u.layers.enableAll(),T.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Ui(new no(2,2),new vi({name:"BackgroundMaterial",uniforms:Qs(yi.background.uniforms),vertexShader:yi.background.vertexShader,fragmentShader:yi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ct.getTransfer(y.colorSpace)!==vt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(Oo,xm(r)),n.buffers.color.setClear(Oo.r,Oo.g,Oo.b,M,a)}function E(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(T,M=1){o.set(T),l=M,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,p(o,l)},render:_,addToRenderList:m,dispose:E}}function BS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null);let s=i,a=!1;function o(S,D,I,F,k){let G=!1;const z=f(F,I,D);s!==z&&(s=z,c(s.object)),G=h(S,F,I,k),G&&g(S,F,I,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,M(S,D,I,F),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(S){return r.bindVertexArray(S)}function u(S){return r.deleteVertexArray(S)}function f(S,D,I){const F=I.wireframe===!0;let k=n[S.id];k===void 0&&(k={},n[S.id]=k);let G=k[D.id];G===void 0&&(G={},k[D.id]=G);let z=G[F];return z===void 0&&(z=d(l()),G[F]=z),z}function d(S){const D=[],I=[],F=[];for(let k=0;k<t;k++)D[k]=0,I[k]=0,F[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:I,attributeDivisors:F,object:S,attributes:{},index:null}}function h(S,D,I,F){const k=s.attributes,G=D.attributes;let z=0;const B=I.getAttributes();for(const q in B)if(B[q].location>=0){const R=k[q];let ne=G[q];if(ne===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(ne=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(ne=S.instanceColor)),R===void 0||R.attribute!==ne||ne&&R.data!==ne.data)return!0;z++}return s.attributesNum!==z||s.index!==F}function g(S,D,I,F){const k={},G=D.attributes;let z=0;const B=I.getAttributes();for(const q in B)if(B[q].location>=0){let R=G[q];R===void 0&&(q==="instanceMatrix"&&S.instanceMatrix&&(R=S.instanceMatrix),q==="instanceColor"&&S.instanceColor&&(R=S.instanceColor));const ne={};ne.attribute=R,R&&R.data&&(ne.data=R.data),k[q]=ne,z++}s.attributes=k,s.attributesNum=z,s.index=F}function _(){const S=s.newAttributes;for(let D=0,I=S.length;D<I;D++)S[D]=0}function m(S){p(S,0)}function p(S,D){const I=s.newAttributes,F=s.enabledAttributes,k=s.attributeDivisors;I[S]=1,F[S]===0&&(r.enableVertexAttribArray(S),F[S]=1),k[S]!==D&&(r.vertexAttribDivisor(S,D),k[S]=D)}function E(){const S=s.newAttributes,D=s.enabledAttributes;for(let I=0,F=D.length;I<F;I++)D[I]!==S[I]&&(r.disableVertexAttribArray(I),D[I]=0)}function T(S,D,I,F,k,G,z){z===!0?r.vertexAttribIPointer(S,D,I,k,G):r.vertexAttribPointer(S,D,I,F,k,G)}function M(S,D,I,F){_();const k=F.attributes,G=I.getAttributes(),z=D.defaultAttributeValues;for(const B in G){const q=G[B];if(q.location>=0){let ee=k[B];if(ee===void 0&&(B==="instanceMatrix"&&S.instanceMatrix&&(ee=S.instanceMatrix),B==="instanceColor"&&S.instanceColor&&(ee=S.instanceColor)),ee!==void 0){const R=ee.normalized,ne=ee.itemSize,be=e.get(ee);if(be===void 0)continue;const Pe=be.buffer,Fe=be.type,We=be.bytesPerElement,K=Fe===r.INT||Fe===r.UNSIGNED_INT||ee.gpuType===Mf;if(ee.isInterleavedBufferAttribute){const J=ee.data,he=J.stride,De=ee.offset;if(J.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)p(q.location+Se,J.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let Se=0;Se<q.locationSize;Se++)T(q.location+Se,ne/q.locationSize,Fe,R,he*We,(De+ne/q.locationSize*Se)*We,K)}else{if(ee.isInstancedBufferAttribute){for(let J=0;J<q.locationSize;J++)p(q.location+J,ee.meshPerAttribute);S.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let J=0;J<q.locationSize;J++)m(q.location+J);r.bindBuffer(r.ARRAY_BUFFER,Pe);for(let J=0;J<q.locationSize;J++)T(q.location+J,ne/q.locationSize,Fe,R,ne*We,ne/q.locationSize*J*We,K)}}else if(z!==void 0){const R=z[B];if(R!==void 0)switch(R.length){case 2:r.vertexAttrib2fv(q.location,R);break;case 3:r.vertexAttrib3fv(q.location,R);break;case 4:r.vertexAttrib4fv(q.location,R);break;default:r.vertexAttrib1fv(q.location,R)}}}}E()}function y(){P();for(const S in n){const D=n[S];for(const I in D){const F=D[I];for(const k in F)u(F[k].object),delete F[k];delete D[I]}delete n[S]}}function A(S){if(n[S.id]===void 0)return;const D=n[S.id];for(const I in D){const F=D[I];for(const k in F)u(F[k].object),delete F[k];delete D[I]}delete n[S.id]}function w(S){for(const D in n){const I=n[D];if(I[S.id]===void 0)continue;const F=I[S.id];for(const k in F)u(F[k].object),delete F[k];delete I[S.id]}}function P(){v(),a=!0,s!==i&&(s=i,c(s.object))}function v(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:P,resetDefaultState:v,dispose:y,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function zS(r,e,t){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,f){f!==0&&(r.drawArraysInstanced(n,c,u,f),t.update(u,n,f))}function o(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,f);let h=0;for(let g=0;g<f;g++)h+=u[g];t.update(h,n,1)}function l(c,u,f,d){if(f===0)return;const h=e.get("WEBGL_multi_draw");if(h===null)for(let g=0;g<c.length;g++)a(c[g],u[g],d[g]);else{h.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,f);let g=0;for(let _=0;_<f;_++)g+=u[_]*d[_];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function kS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(w){return!(w!==gi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==oi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ai&&!P)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(qe("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),h=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),E=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),T=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),A=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:f,reversedDepthBuffer:d,maxTextures:h,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:E,maxVaryings:T,maxFragmentUniforms:M,maxSamples:y,samples:A}}function VS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new zr,o=new je,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||n!==0||i;return i=d,n=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){t=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,_=f.clipIntersection,m=f.clipShadows,p=r.get(f);if(!i||g===null||g.length===0||s&&!m)s?u(null):c();else{const E=s?0:n,T=E*4;let M=p.clippingState||null;l.value=M,M=u(g,d,T,h);for(let y=0;y!==T;++y)M[y]=t[y];p.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,d,h,g){const _=f!==null?f.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const p=h+_*4,E=d.matrixWorldInverse;o.getNormalMatrix(E),(m===null||m.length<p)&&(m=new Float32Array(p));for(let T=0,M=h;T!==_;++T,M+=4)a.copy(f[T]).applyMatrix4(E,o),a.normal.toArray(m,M),m[M+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function GS(r){let e=new WeakMap;function t(a,o){return o===iu?a.mapping=rs:o===ru&&(a.mapping=Zs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===iu||o===ru)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ym(l.height);return c.fromEquirectangularTexture(r,a),e.set(a,c),a.addEventListener("dispose",i),t(c.texture,a.mapping)}else return null}}return a}function i(a){const o=a.target;o.removeEventListener("dispose",i);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}const gr=4,Hh=[.125,.215,.35,.446,.526,.582],Vr=20,HS=256,fa=new Df,Wh=new yt;let mc=null,_c=0,gc=0,vc=!1;const WS=new X;class Xh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=WS}=s;mc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$h(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,_c,gc),this._renderer.xr.enabled=vc,e.scissorTest=!1,bs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===rs||e.mapping===Zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),_c=this._renderer.getActiveCubeFace(),gc=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:mn,minFilter:mn,generateMipmaps:!1,type:Qi,format:gi,colorSpace:Js,depthBuffer:!1},i=Yh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yh(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=XS(s)),this._blurMaterial=qS(s,e,t),this._ggxMaterial=YS(s,e,t)}return i}_compileMaterial(e){const t=new Ui(new nr,e);this._renderer.compile(t,fa)}_sceneToCubeUV(e,t,n,i,s){const l=new mi(90,1,t,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,d=f.autoClear,h=f.toneMapping;f.getClearColor(Wh),f.toneMapping=Ri,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(i),f.clearDepth(),f.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ui(new to,new _m({name:"PMREM.Background",side:Fn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const E=e.background;E?E.isColor&&(m.color.copy(E),e.background=null,p=!0):(m.color.copy(Wh),p=!0);for(let T=0;T<6;T++){const M=T%3;M===0?(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[T],s.y,s.z)):M===1?(l.up.set(0,0,c[T]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[T],s.z)):(l.up.set(0,c[T],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[T]));const y=this._cubeSize;bs(i,M*y,T>2?y:0,y,y),f.setRenderTarget(i),p&&f.render(_,l),f.render(e,l)}f.toneMapping=h,f.autoClear=d,e.background=E}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===rs||e.mapping===Zs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=$h()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qh());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;bs(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,fa)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),u=t/(this._lodMeshes.length-1),f=Math.sqrt(c*c-u*u),d=0+c*1.25,h=f*d,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-gr?n-g+gr:0),p=4*(this._cubeSize-_);l.envMap.value=e.texture,l.roughness.value=h,l.mipInt.value=g-t,bs(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,fa),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,bs(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,fa)}_blur(e,t,n,i,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,i,"latitudinal",s),this._halfBlur(a,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&dt("blur direction must be either latitudinal or longitudinal!");const u=3,f=this._lodMeshes[i];f.material=c;const d=c.uniforms,h=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*Vr-1),_=s/g,m=isFinite(s)?1+Math.floor(u*_):Vr;m>Vr&&qe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vr}`);const p=[];let E=0;for(let w=0;w<Vr;++w){const P=w/_,v=Math.exp(-P*P/2);p.push(v),w===0?E+=v:w<m&&(E+=2*v)}for(let w=0;w<p.length;w++)p[w]=p[w]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:T}=this;d.dTheta.value=g,d.mipInt.value=T-n;const M=this._sizeLods[i],y=3*M*(i>T-gr?i-T+gr:0),A=4*(this._cubeSize-M);bs(t,y,A,3*M,2*M),l.setRenderTarget(t),l.render(f,fa)}}function XS(r){const e=[],t=[],n=[];let i=r;const s=r-gr+1+Hh.length;for(let a=0;a<s;a++){const o=Math.pow(2,i);e.push(o);let l=1/o;a>r-gr?l=Hh[a-r+gr-1]:a===0&&(l=0),t.push(l);const c=1/(o-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,_=3,m=2,p=1,E=new Float32Array(_*g*h),T=new Float32Array(m*g*h),M=new Float32Array(p*g*h);for(let A=0;A<h;A++){const w=A%3*2/3-1,P=A>2?0:-1,v=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];E.set(v,_*g*A),T.set(d,m*g*A);const S=[A,A,A,A,A,A];M.set(S,p*g*A)}const y=new nr;y.setAttribute("position",new Di(E,_)),y.setAttribute("uv",new Di(T,m)),y.setAttribute("faceIndex",new Di(M,p)),n.push(new Ui(y,null)),i>gr&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Yh(r,e,t){const n=new Pi(r,e,t);return n.texture.mapping=Tl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function YS(r,e,t){return new vi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Al(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function qS(r,e,t){const n=new Float32Array(Vr),i=new X(0,1,0);return new vi({name:"SphericalGaussianBlur",defines:{n:Vr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function qh(){return new vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function $h(){return new vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Al(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $S(r){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===iu||l===ru,u=l===rs||l===Zs;if(c||u){let f=e.get(o);const d=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new Xh(r)),f=c?t.fromEquirectangular(o,f):t.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),f.texture;if(f!==void 0)return f.texture;{const h=o.image;return c&&h&&h.height>0||u&&h&&i(h)?(t===null&&(t=new Xh(r)),f=c?t.fromEquirectangular(o):t.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,e.set(o,f),o.addEventListener("dispose",s),f.texture):null}}}return o}function i(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function KS(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&qa("WebGLRenderer: "+n+" extension not supported."),i}}}function ZS(r,e,t,n){const i={},s=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete i[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(f,d){return i[d.id]===!0||(d.addEventListener("dispose",a),i[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const h in d)e.update(d[h],r.ARRAY_BUFFER)}function c(f){const d=[],h=f.index,g=f.attributes.position;let _=0;if(h!==null){const E=h.array;_=h.version;for(let T=0,M=E.length;T<M;T+=3){const y=E[T+0],A=E[T+1],w=E[T+2];d.push(y,A,A,w,w,y)}}else if(g!==void 0){const E=g.array;_=g.version;for(let T=0,M=E.length/3-1;T<M;T+=3){const y=T+0,A=T+1,w=T+2;d.push(y,A,A,w,w,y)}}else return;const m=new(hm(d)?vm:gm)(d,1);m.version=_;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:o,update:l,getWireframeAttribute:u}}function jS(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function c(d,h,g){g!==0&&(r.drawElementsInstanced(n,h,s,d*a,g),t.update(h,n,g))}function u(d,h,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,g);let m=0;for(let p=0;p<g;p++)m+=h[p];t.update(m,n,1)}function f(d,h,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/a,h[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,h,0,s,d,0,_,0,g);let p=0;for(let E=0;E<g;E++)p+=h[E]*_[E];t.update(p,n,1)}}this.setMode=i,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function JS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:dt("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function QS(r,e,t){const n=new WeakMap,i=new zt;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==f){let v=function(){w.dispose(),n.delete(o),o.removeEventListener("dispose",v)};d!==void 0&&d.texture.dispose();const h=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],E=o.morphAttributes.color||[];let T=0;h===!0&&(T=1),g===!0&&(T=2),_===!0&&(T=3);let M=o.attributes.position.count*T,y=1;M>e.maxTextureSize&&(y=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const A=new Float32Array(M*y*4*f),w=new dm(A,M,y,f);w.type=Ai,w.needsUpdate=!0;const P=T*4;for(let S=0;S<f;S++){const D=m[S],I=p[S],F=E[S],k=M*y*4*S;for(let G=0;G<D.count;G++){const z=G*P;h===!0&&(i.fromBufferAttribute(D,G),A[k+z+0]=i.x,A[k+z+1]=i.y,A[k+z+2]=i.z,A[k+z+3]=0),g===!0&&(i.fromBufferAttribute(I,G),A[k+z+4]=i.x,A[k+z+5]=i.y,A[k+z+6]=i.z,A[k+z+7]=0),_===!0&&(i.fromBufferAttribute(F,G),A[k+z+8]=i.x,A[k+z+9]=i.y,A[k+z+10]=i.z,A[k+z+11]=F.itemSize===4?i.w:1)}}d={count:f,texture:w,size:new xt(M,y)},n.set(o,d),o.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let h=0;for(let _=0;_<c.length;_++)h+=c[_];const g=o.morphTargetsRelative?1:1-h;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function eM(r,e,t,n){let i=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,f=e.get(l,u);if(i.get(f)!==c&&(e.update(f),i.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return f}function a(){i=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const tM={[jp]:"LINEAR_TONE_MAPPING",[Jp]:"REINHARD_TONE_MAPPING",[Qp]:"CINEON_TONE_MAPPING",[em]:"ACES_FILMIC_TONE_MAPPING",[nm]:"AGX_TONE_MAPPING",[im]:"NEUTRAL_TONE_MAPPING",[tm]:"CUSTOM_TONE_MAPPING"};function nM(r,e,t,n,i){const s=new Pi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),a=new Pi(e,t,{type:Qi,depthBuffer:!1,stencilBuffer:!1}),o=new nr;o.setAttribute("position",new Zi([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Zi([0,2,0,0,2,0],2));const l=new j0({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Ui(o,l),u=new Df(-1,1,1,-1,0,1);let f=null,d=null,h=!1,g,_=null,m=[],p=!1;this.setSize=function(E,T){s.setSize(E,T),a.setSize(E,T);for(let M=0;M<m.length;M++){const y=m[M];y.setSize&&y.setSize(E,T)}},this.setEffects=function(E){m=E,p=m.length>0&&m[0].isRenderPass===!0;const T=s.width,M=s.height;for(let y=0;y<m.length;y++){const A=m[y];A.setSize&&A.setSize(T,M)}},this.begin=function(E,T){if(h||E.toneMapping===Ri&&m.length===0)return!1;if(_=T,T!==null){const M=T.width,y=T.height;(s.width!==M||s.height!==y)&&this.setSize(M,y)}return p===!1&&E.setRenderTarget(s),g=E.toneMapping,E.toneMapping=Ri,!0},this.hasRenderPass=function(){return p},this.end=function(E,T){E.toneMapping=g,h=!0;let M=s,y=a;for(let A=0;A<m.length;A++){const w=m[A];if(w.enabled!==!1&&(w.render(E,y,M,T),w.needsSwap!==!1)){const P=M;M=y,y=P}}if(f!==E.outputColorSpace||d!==E.toneMapping){f=E.outputColorSpace,d=E.toneMapping,l.defines={},ct.getTransfer(f)===vt&&(l.defines.SRGB_TRANSFER="");const A=tM[d];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,E.setRenderTarget(_),E.render(c,u),_=null,h=!1},this.isCompositing=function(){return h},this.dispose=function(){s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Am=new An,ku=new $a(1,1),wm=new dm,Cm=new A0,Rm=new Mm,Kh=[],Zh=[],jh=new Float32Array(16),Jh=new Float32Array(9),Qh=new Float32Array(4);function ta(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Kh[i];if(s===void 0&&(s=new Float32Array(i),Kh[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Zt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function jt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function wl(r,e){let t=Zh[e];t===void 0&&(t=new Int32Array(e),Zh[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function iM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function rM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2fv(this.addr,e),jt(t,e)}}function sM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;r.uniform3fv(this.addr,e),jt(t,e)}}function aM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4fv(this.addr,e),jt(t,e)}}function oM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;Qh.set(n),r.uniformMatrix2fv(this.addr,!1,Qh),jt(t,n)}}function lM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;Jh.set(n),r.uniformMatrix3fv(this.addr,!1,Jh),jt(t,n)}}function cM(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Zt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),jt(t,e)}else{if(Zt(t,n))return;jh.set(n),r.uniformMatrix4fv(this.addr,!1,jh),jt(t,n)}}function uM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function fM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2iv(this.addr,e),jt(t,e)}}function hM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3iv(this.addr,e),jt(t,e)}}function dM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4iv(this.addr,e),jt(t,e)}}function pM(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function mM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;r.uniform2uiv(this.addr,e),jt(t,e)}}function _M(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;r.uniform3uiv(this.addr,e),jt(t,e)}}function gM(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;r.uniform4uiv(this.addr,e),jt(t,e)}}function vM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ku.compareFunction=t.isReversedDepthBuffer()?Cf:wf,s=ku):s=Am,t.setTexture2D(e||s,i)}function xM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Cm,i)}function SM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Rm,i)}function MM(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||wm,i)}function yM(r){switch(r){case 5126:return iM;case 35664:return rM;case 35665:return sM;case 35666:return aM;case 35674:return oM;case 35675:return lM;case 35676:return cM;case 5124:case 35670:return uM;case 35667:case 35671:return fM;case 35668:case 35672:return hM;case 35669:case 35673:return dM;case 5125:return pM;case 36294:return mM;case 36295:return _M;case 36296:return gM;case 35678:case 36198:case 36298:case 36306:case 35682:return vM;case 35679:case 36299:case 36307:return xM;case 35680:case 36300:case 36308:case 36293:return SM;case 36289:case 36303:case 36311:case 36292:return MM}}function EM(r,e){r.uniform1fv(this.addr,e)}function TM(r,e){const t=ta(e,this.size,2);r.uniform2fv(this.addr,t)}function bM(r,e){const t=ta(e,this.size,3);r.uniform3fv(this.addr,t)}function AM(r,e){const t=ta(e,this.size,4);r.uniform4fv(this.addr,t)}function wM(r,e){const t=ta(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function CM(r,e){const t=ta(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function RM(r,e){const t=ta(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function PM(r,e){r.uniform1iv(this.addr,e)}function DM(r,e){r.uniform2iv(this.addr,e)}function LM(r,e){r.uniform3iv(this.addr,e)}function IM(r,e){r.uniform4iv(this.addr,e)}function UM(r,e){r.uniform1uiv(this.addr,e)}function NM(r,e){r.uniform2uiv(this.addr,e)}function FM(r,e){r.uniform3uiv(this.addr,e)}function OM(r,e){r.uniform4uiv(this.addr,e)}function BM(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=ku:a=Am;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function zM(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||Cm,s[a])}function kM(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||Rm,s[a])}function VM(r,e,t){const n=this.cache,i=e.length,s=wl(t,i);Zt(n,s)||(r.uniform1iv(this.addr,s),jt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||wm,s[a])}function GM(r){switch(r){case 5126:return EM;case 35664:return TM;case 35665:return bM;case 35666:return AM;case 35674:return wM;case 35675:return CM;case 35676:return RM;case 5124:case 35670:return PM;case 35667:case 35671:return DM;case 35668:case 35672:return LM;case 35669:case 35673:return IM;case 5125:return UM;case 36294:return NM;case 36295:return FM;case 36296:return OM;case 35678:case 36198:case 36298:case 36306:case 35682:return BM;case 35679:case 36299:case 36307:return zM;case 35680:case 36300:case 36308:case 36293:return kM;case 36289:case 36303:case 36311:case 36292:return VM}}class HM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=yM(t.type)}}class WM{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=GM(t.type)}}class XM{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function ed(r,e){r.seq.push(e),r.map[e.id]=e}function YM(r,e,t){const n=r.name,i=n.length;for(xc.lastIndex=0;;){const s=xc.exec(n),a=xc.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===i){ed(t,c===void 0?new HM(o,r,e):new WM(o,r,e));break}else{let f=t.map[o];f===void 0&&(f=new XM(o),ed(t,f)),t=f}}}class tl{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);YM(o,l,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function td(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const qM=37297;let $M=0;function KM(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const nd=new je;function ZM(r){ct._getMatrix(nd,ct.workingColorSpace,r);const e=`mat3( ${nd.elements.map(t=>t.toFixed(4))} )`;switch(ct.getTransfer(r)){case dl:return[e,"LinearTransferOETF"];case vt:return[e,"sRGBTransferOETF"];default:return qe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function id(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+KM(r.getShaderSource(e),o)}else return s}function jM(r,e){const t=ZM(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const JM={[jp]:"Linear",[Jp]:"Reinhard",[Qp]:"Cineon",[em]:"ACESFilmic",[nm]:"AgX",[im]:"Neutral",[tm]:"Custom"};function QM(r,e){const t=JM[e];return t===void 0?(qe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bo=new X;function ey(){ct.getLuminanceCoefficients(Bo);const r=Bo.x.toFixed(4),e=Bo.y.toFixed(4),t=Bo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ty(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ya).join(`
`)}function ny(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function iy(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function ya(r){return r!==""}function rd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const ry=/^[ \t]*#include +<([\w\d./]+)>/gm;function Vu(r){return r.replace(ry,ay)}const sy=new Map;function ay(r,e){let t=Qe[e];if(t===void 0){const n=sy.get(e);if(n!==void 0)t=Qe[n],qe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Vu(t)}const oy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function ad(r){return r.replace(oy,ly)}function ly(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function od(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const cy={[Zo]:"SHADOWMAP_TYPE_PCF",[Ma]:"SHADOWMAP_TYPE_VSM"};function uy(r){return cy[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const fy={[rs]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE",[Tl]:"ENVMAP_TYPE_CUBE_UV"};function hy(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":fy[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const dy={[Zs]:"ENVMAP_MODE_REFRACTION"};function py(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":dy[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const my={[Zp]:"ENVMAP_BLENDING_MULTIPLY",[a0]:"ENVMAP_BLENDING_MIX",[o0]:"ENVMAP_BLENDING_ADD"};function _y(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":my[r.combine]||"ENVMAP_BLENDING_NONE"}function gy(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function vy(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=uy(t),c=hy(t),u=py(t),f=_y(t),d=gy(t),h=ty(t),g=ny(s),_=i.createProgram();let m,p,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ya).join(`
`),p.length>0&&(p+=`
`)):(m=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ya).join(`
`),p=[od(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ri?"#define TONE_MAPPING":"",t.toneMapping!==Ri?Qe.tonemapping_pars_fragment:"",t.toneMapping!==Ri?QM("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,jM("linearToOutputTexel",t.outputColorSpace),ey(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ya).join(`
`)),a=Vu(a),a=rd(a,t),a=sd(a,t),o=Vu(o),o=rd(o,t),o=sd(o,t),a=ad(a),o=ad(o),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[h,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const T=E+m+a,M=E+p+o,y=td(i,i.VERTEX_SHADER,T),A=td(i,i.FRAGMENT_SHADER,M);i.attachShader(_,y),i.attachShader(_,A),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function w(D){if(r.debug.checkShaderErrors){const I=i.getProgramInfoLog(_)||"",F=i.getShaderInfoLog(y)||"",k=i.getShaderInfoLog(A)||"",G=I.trim(),z=F.trim(),B=k.trim();let q=!0,ee=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(q=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,A);else{const R=id(i,y,"vertex"),ne=id(i,A,"fragment");dt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+G+`
`+R+`
`+ne)}else G!==""?qe("WebGLProgram: Program Info Log:",G):(z===""||B==="")&&(ee=!1);ee&&(D.diagnostics={runnable:q,programLog:G,vertexShader:{log:z,prefix:m},fragmentShader:{log:B,prefix:p}})}i.deleteShader(y),i.deleteShader(A),P=new tl(i,_),v=iy(i,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let v;this.getAttributes=function(){return v===void 0&&w(this),v};let S=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=i.getProgramParameter(_,qM)),S},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$M++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=A,this}let xy=0;class Sy{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(i)===!1&&(a.add(i),i.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new My(e),t.set(e,n)),n}}class My{constructor(e){this.id=xy++,this.code=e,this.usedTimes=0}}function yy(r,e,t,n,i,s,a){const o=new pm,l=new Sy,c=new Set,u=[],f=new Map,d=i.logarithmicDepthBuffer;let h=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(v){return c.add(v),v===0?"uv":`uv${v}`}function m(v,S,D,I,F){const k=I.fog,G=F.geometry,z=v.isMeshStandardMaterial?I.environment:null,B=(v.isMeshStandardMaterial?t:e).get(v.envMap||z),q=B&&B.mapping===Tl?B.image.height:null,ee=g[v.type];v.precision!==null&&(h=i.getMaxPrecision(v.precision),h!==v.precision&&qe("WebGLProgram.getParameters:",v.precision,"not supported, using",h,"instead."));const R=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ne=R!==void 0?R.length:0;let be=0;G.morphAttributes.position!==void 0&&(be=1),G.morphAttributes.normal!==void 0&&(be=2),G.morphAttributes.color!==void 0&&(be=3);let Pe,Fe,We,K;if(ee){const _e=yi[ee];Pe=_e.vertexShader,Fe=_e.fragmentShader}else Pe=v.vertexShader,Fe=v.fragmentShader,l.update(v),We=l.getVertexShaderID(v),K=l.getFragmentShaderID(v);const J=r.getRenderTarget(),he=r.state.buffers.depth.getReversed(),De=F.isInstancedMesh===!0,Se=F.isBatchedMesh===!0,Ve=!!v.map,lt=!!v.matcap,Te=!!B,ze=!!v.aoMap,Ke=!!v.lightMap,Ne=!!v.bumpMap,H=!!v.normalMap,U=!!v.displacementMap,pt=!!v.emissiveMap,et=!!v.metalnessMap,ke=!!v.roughnessMap,Me=v.anisotropy>0,C=v.clearcoat>0,x=v.dispersion>0,N=v.iridescence>0,Z=v.sheen>0,j=v.transmission>0,$=Me&&!!v.anisotropyMap,xe=C&&!!v.clearcoatMap,se=C&&!!v.clearcoatNormalMap,Ae=C&&!!v.clearcoatRoughnessMap,Ee=N&&!!v.iridescenceMap,re=N&&!!v.iridescenceThicknessMap,ae=Z&&!!v.sheenColorMap,ye=Z&&!!v.sheenRoughnessMap,we=!!v.specularMap,oe=!!v.specularColorMap,He=!!v.specularIntensityMap,L=j&&!!v.transmissionMap,ue=j&&!!v.thicknessMap,ie=!!v.gradientMap,fe=!!v.alphaMap,te=v.alphaTest>0,Q=!!v.alphaHash,ce=!!v.extensions;let Ue=Ri;v.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Ue=r.toneMapping);const ut={shaderID:ee,shaderType:v.type,shaderName:v.name,vertexShader:Pe,fragmentShader:Fe,defines:v.defines,customVertexShaderID:We,customFragmentShaderID:K,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:h,batching:Se,batchingColor:Se&&F._colorsTexture!==null,instancing:De,instancingColor:De&&F.instanceColor!==null,instancingMorph:De&&F.morphTexture!==null,outputColorSpace:J===null?r.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Js,alphaToCoverage:!!v.alphaToCoverage,map:Ve,matcap:lt,envMap:Te,envMapMode:Te&&B.mapping,envMapCubeUVHeight:q,aoMap:ze,lightMap:Ke,bumpMap:Ne,normalMap:H,displacementMap:U,emissiveMap:pt,normalMapObjectSpace:H&&v.normalMapType===f0,normalMapTangentSpace:H&&v.normalMapType===u0,metalnessMap:et,roughnessMap:ke,anisotropy:Me,anisotropyMap:$,clearcoat:C,clearcoatMap:xe,clearcoatNormalMap:se,clearcoatRoughnessMap:Ae,dispersion:x,iridescence:N,iridescenceMap:Ee,iridescenceThicknessMap:re,sheen:Z,sheenColorMap:ae,sheenRoughnessMap:ye,specularMap:we,specularColorMap:oe,specularIntensityMap:He,transmission:j,transmissionMap:L,thicknessMap:ue,gradientMap:ie,opaque:v.transparent===!1&&v.blending===zs&&v.alphaToCoverage===!1,alphaMap:fe,alphaTest:te,alphaHash:Q,combine:v.combine,mapUv:Ve&&_(v.map.channel),aoMapUv:ze&&_(v.aoMap.channel),lightMapUv:Ke&&_(v.lightMap.channel),bumpMapUv:Ne&&_(v.bumpMap.channel),normalMapUv:H&&_(v.normalMap.channel),displacementMapUv:U&&_(v.displacementMap.channel),emissiveMapUv:pt&&_(v.emissiveMap.channel),metalnessMapUv:et&&_(v.metalnessMap.channel),roughnessMapUv:ke&&_(v.roughnessMap.channel),anisotropyMapUv:$&&_(v.anisotropyMap.channel),clearcoatMapUv:xe&&_(v.clearcoatMap.channel),clearcoatNormalMapUv:se&&_(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ae&&_(v.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&_(v.iridescenceMap.channel),iridescenceThicknessMapUv:re&&_(v.iridescenceThicknessMap.channel),sheenColorMapUv:ae&&_(v.sheenColorMap.channel),sheenRoughnessMapUv:ye&&_(v.sheenRoughnessMap.channel),specularMapUv:we&&_(v.specularMap.channel),specularColorMapUv:oe&&_(v.specularColorMap.channel),specularIntensityMapUv:He&&_(v.specularIntensityMap.channel),transmissionMapUv:L&&_(v.transmissionMap.channel),thicknessMapUv:ue&&_(v.thicknessMap.channel),alphaMapUv:fe&&_(v.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(H||Me),vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!G.attributes.uv&&(Ve||fe),fog:!!k,useFog:v.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:v.flatShading===!0&&v.wireframe===!1,sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:F.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ne,morphTextureStride:be,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:v.dithering,shadowMapEnabled:r.shadowMap.enabled&&D.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ue,decodeVideoTexture:Ve&&v.map.isVideoTexture===!0&&ct.getTransfer(v.map.colorSpace)===vt,decodeVideoTextureEmissive:pt&&v.emissiveMap.isVideoTexture===!0&&ct.getTransfer(v.emissiveMap.colorSpace)===vt,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Wi,flipSided:v.side===Fn,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:ce&&v.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&v.extensions.multiDraw===!0||Se)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return ut.vertexUv1s=c.has(1),ut.vertexUv2s=c.has(2),ut.vertexUv3s=c.has(3),c.clear(),ut}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const D in v.defines)S.push(D),S.push(v.defines[D]);return v.isRawShaderMaterial===!1&&(E(S,v),T(S,v),S.push(r.outputColorSpace)),S.push(v.customProgramCacheKey),S.join()}function E(v,S){v.push(S.precision),v.push(S.outputColorSpace),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.mapUv),v.push(S.alphaMapUv),v.push(S.lightMapUv),v.push(S.aoMapUv),v.push(S.bumpMapUv),v.push(S.normalMapUv),v.push(S.displacementMapUv),v.push(S.emissiveMapUv),v.push(S.metalnessMapUv),v.push(S.roughnessMapUv),v.push(S.anisotropyMapUv),v.push(S.clearcoatMapUv),v.push(S.clearcoatNormalMapUv),v.push(S.clearcoatRoughnessMapUv),v.push(S.iridescenceMapUv),v.push(S.iridescenceThicknessMapUv),v.push(S.sheenColorMapUv),v.push(S.sheenRoughnessMapUv),v.push(S.specularMapUv),v.push(S.specularColorMapUv),v.push(S.specularIntensityMapUv),v.push(S.transmissionMapUv),v.push(S.thicknessMapUv),v.push(S.combine),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.numLightProbes),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function T(v,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),v.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),v.push(o.mask)}function M(v){const S=g[v.type];let D;if(S){const I=yi[S];D=k0.clone(I.uniforms)}else D=v.uniforms;return D}function y(v,S){let D=f.get(S);return D!==void 0?++D.usedTimes:(D=new vy(r,S,v,s),u.push(D),f.set(S,D)),D}function A(v){if(--v.usedTimes===0){const S=u.indexOf(v);u[S]=u[u.length-1],u.pop(),f.delete(v.cacheKey),v.destroy()}}function w(v){l.remove(v)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:A,releaseShaderCache:w,programs:u,dispose:P}}function Ey(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,l){r.get(a)[o]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Ty(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function ld(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function cd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(f,d,h,g,_,m){let p=r[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:_,group:m},r[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=m),e++,p}function o(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.push(p):h.transparent===!0?i.push(p):t.push(p)}function l(f,d,h,g,_,m){const p=a(f,d,h,g,_,m);h.transmission>0?n.unshift(p):h.transparent===!0?i.unshift(p):t.unshift(p)}function c(f,d){t.length>1&&t.sort(f||Ty),n.length>1&&n.sort(d||ld),i.length>1&&i.sort(d||ld)}function u(){for(let f=e,d=r.length;f<d;f++){const h=r[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:o,unshift:l,finish:u,sort:c}}function by(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new cd,r.set(n,[a])):i>=s.length?(a=new cd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ay(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new X,color:new yt};break;case"SpotLight":t={position:new X,direction:new X,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function wy(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Cy=0;function Ry(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Py(r){const e=new Ay,t=wy(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new X);const i=new X,s=new Xt,a=new Xt;function o(c){let u=0,f=0,d=0;for(let v=0;v<9;v++)n.probe[v].set(0,0,0);let h=0,g=0,_=0,m=0,p=0,E=0,T=0,M=0,y=0,A=0,w=0;c.sort(Ry);for(let v=0,S=c.length;v<S;v++){const D=c[v],I=D.color,F=D.intensity,k=D.distance;let G=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===js?G=D.shadow.map.texture:G=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)u+=I.r*F,f+=I.g*F,d+=I.b*F;else if(D.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(D.sh.coefficients[z],F);w++}else if(D.isDirectionalLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const B=D.shadow,q=t.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.directionalShadow[h]=q,n.directionalShadowMap[h]=G,n.directionalShadowMatrix[h]=D.shadow.matrix,E++}n.directional[h]=z,h++}else if(D.isSpotLight){const z=e.get(D);z.position.setFromMatrixPosition(D.matrixWorld),z.color.copy(I).multiplyScalar(F),z.distance=k,z.coneCos=Math.cos(D.angle),z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),z.decay=D.decay,n.spot[_]=z;const B=D.shadow;if(D.map&&(n.spotLightMap[y]=D.map,y++,B.updateMatrices(D),D.castShadow&&A++),n.spotLightMatrix[_]=B.matrix,D.castShadow){const q=t.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,n.spotShadow[_]=q,n.spotShadowMap[_]=G,M++}_++}else if(D.isRectAreaLight){const z=e.get(D);z.color.copy(I).multiplyScalar(F),z.halfWidth.set(D.width*.5,0,0),z.halfHeight.set(0,D.height*.5,0),n.rectArea[m]=z,m++}else if(D.isPointLight){const z=e.get(D);if(z.color.copy(D.color).multiplyScalar(D.intensity),z.distance=D.distance,z.decay=D.decay,D.castShadow){const B=D.shadow,q=t.get(D);q.shadowIntensity=B.intensity,q.shadowBias=B.bias,q.shadowNormalBias=B.normalBias,q.shadowRadius=B.radius,q.shadowMapSize=B.mapSize,q.shadowCameraNear=B.camera.near,q.shadowCameraFar=B.camera.far,n.pointShadow[g]=q,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=D.shadow.matrix,T++}n.point[g]=z,g++}else if(D.isHemisphereLight){const z=e.get(D);z.skyColor.copy(D.color).multiplyScalar(F),z.groundColor.copy(D.groundColor).multiplyScalar(F),n.hemi[p]=z,p++}}m>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=f,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==h||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==E||P.numPointShadows!==T||P.numSpotShadows!==M||P.numSpotMaps!==y||P.numLightProbes!==w)&&(n.directional.length=h,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=T,n.pointShadowMap.length=T,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=T,n.spotLightMatrix.length=M+y-A,n.spotLightMap.length=y,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,P.directionalLength=h,P.pointLength=g,P.spotLength=_,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=E,P.numPointShadows=T,P.numSpotShadows=M,P.numSpotMaps=y,P.numLightProbes=w,n.version=Cy++)}function l(c,u){let f=0,d=0,h=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,E=c.length;p<E;p++){const T=c[p];if(T.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),f++}else if(T.isSpotLight){const M=n.spot[h];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(m),h++}else if(T.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),a.identity(),s.copy(T.matrixWorld),s.premultiply(m),a.extractRotation(s),M.halfWidth.set(T.width*.5,0,0),M.halfHeight.set(0,T.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),g++}else if(T.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(T.matrixWorld),M.position.applyMatrix4(m),d++}else if(T.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(T.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function ud(r){const e=new Py(r),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function Dy(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new ud(r),e.set(i,[o])):s>=a.length?(o=new ud(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Ly=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Iy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Uy=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Ny=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],fd=new Xt,ha=new X,Sc=new X;function Fy(r,e,t){let n=new Em;const i=new xt,s=new xt,a=new zt,o=new J0,l=new Q0,c={},u=t.maxTextureSize,f={[br]:Fn,[Fn]:br,[Wi]:Wi},d=new vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new xt},radius:{value:4}},vertexShader:Ly,fragmentShader:Iy}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new nr;g.setAttribute("position",new Di(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ui(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Zo;let p=this.type;this.render=function(A,w,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===Vg&&(qe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=Zo);const v=r.getRenderTarget(),S=r.getActiveCubeFace(),D=r.getActiveMipmapLevel(),I=r.state;I.setBlending($i),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const F=p!==this.type;F&&w.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=A.length;k<G;k++){const z=A[k],B=z.shadow;if(B===void 0){qe("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);const q=B.getFrameExtents();if(i.multiply(q),s.copy(B.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/q.x),i.x=s.x*q.x,B.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/q.y),i.y=s.y*q.y,B.mapSize.y=s.y)),B.map===null||F===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ma){if(z.isPointLight){qe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new Pi(i.x,i.y,{format:js,type:Qi,minFilter:mn,magFilter:mn,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new $a(i.x,i.y,Ai),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=er,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=an,B.map.depthTexture.magFilter=an}else{z.isPointLight?(B.map=new ym(i.x),B.map.depthTexture=new Z0(i.x,Ii)):(B.map=new Pi(i.x,i.y),B.map.depthTexture=new $a(i.x,i.y,Ii)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=er;const R=r.state.buffers.depth.getReversed();this.type===Zo?(B.map.depthTexture.compareFunction=R?Cf:wf,B.map.depthTexture.minFilter=mn,B.map.depthTexture.magFilter=mn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=an,B.map.depthTexture.magFilter=an)}B.camera.updateProjectionMatrix()}const ee=B.map.isWebGLCubeRenderTarget?6:1;for(let R=0;R<ee;R++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,R),r.clear();else{R===0&&(r.setRenderTarget(B.map),r.clear());const ne=B.getViewport(R);a.set(s.x*ne.x,s.y*ne.y,s.x*ne.z,s.y*ne.w),I.viewport(a)}if(z.isPointLight){const ne=B.camera,be=B.matrix,Pe=z.distance||ne.far;Pe!==ne.far&&(ne.far=Pe,ne.updateProjectionMatrix()),ha.setFromMatrixPosition(z.matrixWorld),ne.position.copy(ha),Sc.copy(ne.position),Sc.add(Uy[R]),ne.up.copy(Ny[R]),ne.lookAt(Sc),ne.updateMatrixWorld(),be.makeTranslation(-ha.x,-ha.y,-ha.z),fd.multiplyMatrices(ne.projectionMatrix,ne.matrixWorldInverse),B._frustum.setFromProjectionMatrix(fd,ne.coordinateSystem,ne.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),M(w,P,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Ma&&E(B,P),B.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(v,S,D)};function E(A,w){const P=e.update(_);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,h.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Pi(i.x,i.y,{format:js,type:Qi})),d.uniforms.shadow_pass.value=A.map.depthTexture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,r.setRenderTarget(A.mapPass),r.clear(),r.renderBufferDirect(w,null,P,d,_,null),h.uniforms.shadow_pass.value=A.mapPass.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,r.setRenderTarget(A.map),r.clear(),r.renderBufferDirect(w,null,P,h,_,null)}function T(A,w,P,v){let S=null;const D=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(D!==void 0)S=D;else if(S=P.isPointLight===!0?l:o,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){const I=S.uuid,F=w.uuid;let k=c[I];k===void 0&&(k={},c[I]=k);let G=k[F];G===void 0&&(G=S.clone(),k[F]=G,w.addEventListener("dispose",y)),S=G}if(S.visible=w.visible,S.wireframe=w.wireframe,v===Ma?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:f[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,P.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const I=r.properties.get(S);I.light=P}return S}function M(A,w,P,v,S){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===Ma)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const F=e.update(A),k=A.material;if(Array.isArray(k)){const G=F.groups;for(let z=0,B=G.length;z<B;z++){const q=G[z],ee=k[q.materialIndex];if(ee&&ee.visible){const R=T(A,ee,v,S);A.onBeforeShadow(r,A,w,P,F,R,q),r.renderBufferDirect(P,null,F,R,A,q),A.onAfterShadow(r,A,w,P,F,R,q)}}}else if(k.visible){const G=T(A,k,v,S);A.onBeforeShadow(r,A,w,P,F,G,null),r.renderBufferDirect(P,null,F,G,A,null),A.onAfterShadow(r,A,w,P,F,G,null)}}const I=A.children;for(let F=0,k=I.length;F<k;F++)M(I[F],w,P,v,S)}function y(A){A.target.removeEventListener("dispose",y);for(const P in c){const v=c[P],S=A.target.uuid;S in v&&(v[S].dispose(),delete v[S])}}}const Oy={[Zc]:jc,[Jc]:tu,[Qc]:nu,[Ks]:eu,[jc]:Zc,[tu]:Jc,[nu]:Qc,[eu]:Ks};function By(r,e){function t(){let L=!1;const ue=new zt;let ie=null;const fe=new zt(0,0,0,0);return{setMask:function(te){ie!==te&&!L&&(r.colorMask(te,te,te,te),ie=te)},setLocked:function(te){L=te},setClear:function(te,Q,ce,Ue,ut){ut===!0&&(te*=Ue,Q*=Ue,ce*=Ue),ue.set(te,Q,ce,Ue),fe.equals(ue)===!1&&(r.clearColor(te,Q,ce,Ue),fe.copy(ue))},reset:function(){L=!1,ie=null,fe.set(-1,0,0,0)}}}function n(){let L=!1,ue=!1,ie=null,fe=null,te=null;return{setReversed:function(Q){if(ue!==Q){const ce=e.get("EXT_clip_control");Q?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),ue=Q;const Ue=te;te=null,this.setClear(Ue)}},getReversed:function(){return ue},setTest:function(Q){Q?J(r.DEPTH_TEST):he(r.DEPTH_TEST)},setMask:function(Q){ie!==Q&&!L&&(r.depthMask(Q),ie=Q)},setFunc:function(Q){if(ue&&(Q=Oy[Q]),fe!==Q){switch(Q){case Zc:r.depthFunc(r.NEVER);break;case jc:r.depthFunc(r.ALWAYS);break;case Jc:r.depthFunc(r.LESS);break;case Ks:r.depthFunc(r.LEQUAL);break;case Qc:r.depthFunc(r.EQUAL);break;case eu:r.depthFunc(r.GEQUAL);break;case tu:r.depthFunc(r.GREATER);break;case nu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}fe=Q}},setLocked:function(Q){L=Q},setClear:function(Q){te!==Q&&(ue&&(Q=1-Q),r.clearDepth(Q),te=Q)},reset:function(){L=!1,ie=null,fe=null,te=null,ue=!1}}}function i(){let L=!1,ue=null,ie=null,fe=null,te=null,Q=null,ce=null,Ue=null,ut=null;return{setTest:function(_e){L||(_e?J(r.STENCIL_TEST):he(r.STENCIL_TEST))},setMask:function(_e){ue!==_e&&!L&&(r.stencilMask(_e),ue=_e)},setFunc:function(_e,Re,Ze){(ie!==_e||fe!==Re||te!==Ze)&&(r.stencilFunc(_e,Re,Ze),ie=_e,fe=Re,te=Ze)},setOp:function(_e,Re,Ze){(Q!==_e||ce!==Re||Ue!==Ze)&&(r.stencilOp(_e,Re,Ze),Q=_e,ce=Re,Ue=Ze)},setLocked:function(_e){L=_e},setClear:function(_e){ut!==_e&&(r.clearStencil(_e),ut=_e)},reset:function(){L=!1,ue=null,ie=null,fe=null,te=null,Q=null,ce=null,Ue=null,ut=null}}}const s=new t,a=new n,o=new i,l=new WeakMap,c=new WeakMap;let u={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,E=null,T=null,M=null,y=null,A=null,w=new yt(0,0,0),P=0,v=!1,S=null,D=null,I=null,F=null,k=null;const G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let z=!1,B=0;const q=r.getParameter(r.VERSION);q.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(q)[1]),z=B>=1):q.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),z=B>=2);let ee=null,R={};const ne=r.getParameter(r.SCISSOR_BOX),be=r.getParameter(r.VIEWPORT),Pe=new zt().fromArray(ne),Fe=new zt().fromArray(be);function We(L,ue,ie,fe){const te=new Uint8Array(4),Q=r.createTexture();r.bindTexture(L,Q),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<ie;ce++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ue,0,r.RGBA,1,1,fe,0,r.RGBA,r.UNSIGNED_BYTE,te):r.texImage2D(ue+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,te);return Q}const K={};K[r.TEXTURE_2D]=We(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=We(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=We(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=We(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(r.DEPTH_TEST),a.setFunc(Ks),Ne(!1),H(gh),J(r.CULL_FACE),ze($i);function J(L){u[L]!==!0&&(r.enable(L),u[L]=!0)}function he(L){u[L]!==!1&&(r.disable(L),u[L]=!1)}function De(L,ue){return f[L]!==ue?(r.bindFramebuffer(L,ue),f[L]=ue,L===r.DRAW_FRAMEBUFFER&&(f[r.FRAMEBUFFER]=ue),L===r.FRAMEBUFFER&&(f[r.DRAW_FRAMEBUFFER]=ue),!0):!1}function Se(L,ue){let ie=h,fe=!1;if(L){ie=d.get(ue),ie===void 0&&(ie=[],d.set(ue,ie));const te=L.textures;if(ie.length!==te.length||ie[0]!==r.COLOR_ATTACHMENT0){for(let Q=0,ce=te.length;Q<ce;Q++)ie[Q]=r.COLOR_ATTACHMENT0+Q;ie.length=te.length,fe=!0}}else ie[0]!==r.BACK&&(ie[0]=r.BACK,fe=!0);fe&&r.drawBuffers(ie)}function Ve(L){return g!==L?(r.useProgram(L),g=L,!0):!1}const lt={[kr]:r.FUNC_ADD,[Hg]:r.FUNC_SUBTRACT,[Wg]:r.FUNC_REVERSE_SUBTRACT};lt[Xg]=r.MIN,lt[Yg]=r.MAX;const Te={[qg]:r.ZERO,[$g]:r.ONE,[Kg]:r.SRC_COLOR,[$c]:r.SRC_ALPHA,[t0]:r.SRC_ALPHA_SATURATE,[Qg]:r.DST_COLOR,[jg]:r.DST_ALPHA,[Zg]:r.ONE_MINUS_SRC_COLOR,[Kc]:r.ONE_MINUS_SRC_ALPHA,[e0]:r.ONE_MINUS_DST_COLOR,[Jg]:r.ONE_MINUS_DST_ALPHA,[n0]:r.CONSTANT_COLOR,[i0]:r.ONE_MINUS_CONSTANT_COLOR,[r0]:r.CONSTANT_ALPHA,[s0]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(L,ue,ie,fe,te,Q,ce,Ue,ut,_e){if(L===$i){_===!0&&(he(r.BLEND),_=!1);return}if(_===!1&&(J(r.BLEND),_=!0),L!==Gg){if(L!==m||_e!==v){if((p!==kr||M!==kr)&&(r.blendEquation(r.FUNC_ADD),p=kr,M=kr),_e)switch(L){case zs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFunc(r.ONE,r.ONE);break;case xh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Sh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:dt("WebGLState: Invalid blending: ",L);break}else switch(L){case zs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case vh:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xh:dt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Sh:dt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:dt("WebGLState: Invalid blending: ",L);break}E=null,T=null,y=null,A=null,w.set(0,0,0),P=0,m=L,v=_e}return}te=te||ue,Q=Q||ie,ce=ce||fe,(ue!==p||te!==M)&&(r.blendEquationSeparate(lt[ue],lt[te]),p=ue,M=te),(ie!==E||fe!==T||Q!==y||ce!==A)&&(r.blendFuncSeparate(Te[ie],Te[fe],Te[Q],Te[ce]),E=ie,T=fe,y=Q,A=ce),(Ue.equals(w)===!1||ut!==P)&&(r.blendColor(Ue.r,Ue.g,Ue.b,ut),w.copy(Ue),P=ut),m=L,v=!1}function Ke(L,ue){L.side===Wi?he(r.CULL_FACE):J(r.CULL_FACE);let ie=L.side===Fn;ue&&(ie=!ie),Ne(ie),L.blending===zs&&L.transparent===!1?ze($i):ze(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),a.setFunc(L.depthFunc),a.setTest(L.depthTest),a.setMask(L.depthWrite),s.setMask(L.colorWrite);const fe=L.stencilWrite;o.setTest(fe),fe&&(o.setMask(L.stencilWriteMask),o.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),o.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?J(r.SAMPLE_ALPHA_TO_COVERAGE):he(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(L){S!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),S=L)}function H(L){L!==zg?(J(r.CULL_FACE),L!==D&&(L===gh?r.cullFace(r.BACK):L===kg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):he(r.CULL_FACE),D=L}function U(L){L!==I&&(z&&r.lineWidth(L),I=L)}function pt(L,ue,ie){L?(J(r.POLYGON_OFFSET_FILL),(F!==ue||k!==ie)&&(r.polygonOffset(ue,ie),F=ue,k=ie)):he(r.POLYGON_OFFSET_FILL)}function et(L){L?J(r.SCISSOR_TEST):he(r.SCISSOR_TEST)}function ke(L){L===void 0&&(L=r.TEXTURE0+G-1),ee!==L&&(r.activeTexture(L),ee=L)}function Me(L,ue,ie){ie===void 0&&(ee===null?ie=r.TEXTURE0+G-1:ie=ee);let fe=R[ie];fe===void 0&&(fe={type:void 0,texture:void 0},R[ie]=fe),(fe.type!==L||fe.texture!==ue)&&(ee!==ie&&(r.activeTexture(ie),ee=ie),r.bindTexture(L,ue||K[L]),fe.type=L,fe.texture=ue)}function C(){const L=R[ee];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function x(){try{r.compressedTexImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function N(){try{r.compressedTexImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function Z(){try{r.texSubImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function j(){try{r.texSubImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function $(){try{r.compressedTexSubImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function se(){try{r.texStorage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function Ae(){try{r.texStorage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function Ee(){try{r.texImage2D(...arguments)}catch(L){dt("WebGLState:",L)}}function re(){try{r.texImage3D(...arguments)}catch(L){dt("WebGLState:",L)}}function ae(L){Pe.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Pe.copy(L))}function ye(L){Fe.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),Fe.copy(L))}function we(L,ue){let ie=c.get(ue);ie===void 0&&(ie=new WeakMap,c.set(ue,ie));let fe=ie.get(L);fe===void 0&&(fe=r.getUniformBlockIndex(ue,L.name),ie.set(L,fe))}function oe(L,ue){const fe=c.get(ue).get(L);l.get(ue)!==fe&&(r.uniformBlockBinding(ue,fe,L.__bindingPointIndex),l.set(ue,fe))}function He(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},ee=null,R={},f={},d=new WeakMap,h=[],g=null,_=!1,m=null,p=null,E=null,T=null,M=null,y=null,A=null,w=new yt(0,0,0),P=0,v=!1,S=null,D=null,I=null,F=null,k=null,Pe.set(0,0,r.canvas.width,r.canvas.height),Fe.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:J,disable:he,bindFramebuffer:De,drawBuffers:Se,useProgram:Ve,setBlending:ze,setMaterial:Ke,setFlipSided:Ne,setCullFace:H,setLineWidth:U,setPolygonOffset:pt,setScissorTest:et,activeTexture:ke,bindTexture:Me,unbindTexture:C,compressedTexImage2D:x,compressedTexImage3D:N,texImage2D:Ee,texImage3D:re,updateUBOMapping:we,uniformBlockBinding:oe,texStorage2D:se,texStorage3D:Ae,texSubImage2D:Z,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:xe,scissor:ae,viewport:ye,reset:He}}function zy(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new xt,u=new WeakMap;let f;const d=new WeakMap;let h=!1;try{h=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,x){return h?new OffscreenCanvas(C,x):ml("canvas")}function _(C,x,N){let Z=1;const j=Me(C);if((j.width>N||j.height>N)&&(Z=N/Math.max(j.width,j.height)),Z<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const $=Math.floor(Z*j.width),xe=Math.floor(Z*j.height);f===void 0&&(f=g($,xe));const se=x?g($,xe):f;return se.width=$,se.height=xe,se.getContext("2d").drawImage(C,0,0,$,xe),qe("WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+$+"x"+xe+")."),se}else return"data"in C&&qe("WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),C;return C}function m(C){return C.generateMipmaps}function p(C){r.generateMipmap(C)}function E(C){return C.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?r.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function T(C,x,N,Z,j=!1){if(C!==null){if(r[C]!==void 0)return r[C];qe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let $=x;if(x===r.RED&&(N===r.FLOAT&&($=r.R32F),N===r.HALF_FLOAT&&($=r.R16F),N===r.UNSIGNED_BYTE&&($=r.R8)),x===r.RED_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.R8UI),N===r.UNSIGNED_SHORT&&($=r.R16UI),N===r.UNSIGNED_INT&&($=r.R32UI),N===r.BYTE&&($=r.R8I),N===r.SHORT&&($=r.R16I),N===r.INT&&($=r.R32I)),x===r.RG&&(N===r.FLOAT&&($=r.RG32F),N===r.HALF_FLOAT&&($=r.RG16F),N===r.UNSIGNED_BYTE&&($=r.RG8)),x===r.RG_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RG8UI),N===r.UNSIGNED_SHORT&&($=r.RG16UI),N===r.UNSIGNED_INT&&($=r.RG32UI),N===r.BYTE&&($=r.RG8I),N===r.SHORT&&($=r.RG16I),N===r.INT&&($=r.RG32I)),x===r.RGB_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RGB8UI),N===r.UNSIGNED_SHORT&&($=r.RGB16UI),N===r.UNSIGNED_INT&&($=r.RGB32UI),N===r.BYTE&&($=r.RGB8I),N===r.SHORT&&($=r.RGB16I),N===r.INT&&($=r.RGB32I)),x===r.RGBA_INTEGER&&(N===r.UNSIGNED_BYTE&&($=r.RGBA8UI),N===r.UNSIGNED_SHORT&&($=r.RGBA16UI),N===r.UNSIGNED_INT&&($=r.RGBA32UI),N===r.BYTE&&($=r.RGBA8I),N===r.SHORT&&($=r.RGBA16I),N===r.INT&&($=r.RGBA32I)),x===r.RGB&&(N===r.UNSIGNED_INT_5_9_9_9_REV&&($=r.RGB9_E5),N===r.UNSIGNED_INT_10F_11F_11F_REV&&($=r.R11F_G11F_B10F)),x===r.RGBA){const xe=j?dl:ct.getTransfer(Z);N===r.FLOAT&&($=r.RGBA32F),N===r.HALF_FLOAT&&($=r.RGBA16F),N===r.UNSIGNED_BYTE&&($=xe===vt?r.SRGB8_ALPHA8:r.RGBA8),N===r.UNSIGNED_SHORT_4_4_4_4&&($=r.RGBA4),N===r.UNSIGNED_SHORT_5_5_5_1&&($=r.RGB5_A1)}return($===r.R16F||$===r.R32F||$===r.RG16F||$===r.RG32F||$===r.RGBA16F||$===r.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function M(C,x){let N;return C?x===null||x===Ii||x===Ya?N=r.DEPTH24_STENCIL8:x===Ai?N=r.DEPTH32F_STENCIL8:x===Xa&&(N=r.DEPTH24_STENCIL8,qe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ii||x===Ya?N=r.DEPTH_COMPONENT24:x===Ai?N=r.DEPTH_COMPONENT32F:x===Xa&&(N=r.DEPTH_COMPONENT16),N}function y(C,x){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==an&&C.minFilter!==mn?Math.log2(Math.max(x.width,x.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?x.mipmaps.length:1}function A(C){const x=C.target;x.removeEventListener("dispose",A),P(x),x.isVideoTexture&&u.delete(x)}function w(C){const x=C.target;x.removeEventListener("dispose",w),S(x)}function P(C){const x=n.get(C);if(x.__webglInit===void 0)return;const N=C.source,Z=d.get(N);if(Z){const j=Z[x.__cacheKey];j.usedTimes--,j.usedTimes===0&&v(C),Object.keys(Z).length===0&&d.delete(N)}n.remove(C)}function v(C){const x=n.get(C);r.deleteTexture(x.__webglTexture);const N=C.source,Z=d.get(N);delete Z[x.__cacheKey],a.memory.textures--}function S(C){const x=n.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),n.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let j=0;j<x.__webglFramebuffer[Z].length;j++)r.deleteFramebuffer(x.__webglFramebuffer[Z][j]);else r.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)r.deleteFramebuffer(x.__webglFramebuffer[Z]);else r.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&r.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&r.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&r.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&r.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const N=C.textures;for(let Z=0,j=N.length;Z<j;Z++){const $=n.get(N[Z]);$.__webglTexture&&(r.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(N[Z])}n.remove(C)}let D=0;function I(){D=0}function F(){const C=D;return C>=i.maxTextures&&qe("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+i.maxTextures),D+=1,C}function k(C){const x=[];return x.push(C.wrapS),x.push(C.wrapT),x.push(C.wrapR||0),x.push(C.magFilter),x.push(C.minFilter),x.push(C.anisotropy),x.push(C.internalFormat),x.push(C.format),x.push(C.type),x.push(C.generateMipmaps),x.push(C.premultiplyAlpha),x.push(C.flipY),x.push(C.unpackAlignment),x.push(C.colorSpace),x.join()}function G(C,x){const N=n.get(C);if(C.isVideoTexture&&et(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&N.__version!==C.version){const Z=C.image;if(Z===null)qe("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)qe("WebGLRenderer: Texture marked for update but image is incomplete");else{K(N,C,x);return}}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,N.__webglTexture,r.TEXTURE0+x)}function z(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,x);return}else C.isExternalTexture&&(N.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,N.__webglTexture,r.TEXTURE0+x)}function B(C,x){const N=n.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&N.__version!==C.version){K(N,C,x);return}t.bindTexture(r.TEXTURE_3D,N.__webglTexture,r.TEXTURE0+x)}function q(C,x){const N=n.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&N.__version!==C.version){J(N,C,x);return}t.bindTexture(r.TEXTURE_CUBE_MAP,N.__webglTexture,r.TEXTURE0+x)}const ee={[su]:r.REPEAT,[Yi]:r.CLAMP_TO_EDGE,[au]:r.MIRRORED_REPEAT},R={[an]:r.NEAREST,[l0]:r.NEAREST_MIPMAP_NEAREST,[vo]:r.NEAREST_MIPMAP_LINEAR,[mn]:r.LINEAR,[Wl]:r.LINEAR_MIPMAP_NEAREST,[Wr]:r.LINEAR_MIPMAP_LINEAR},ne={[h0]:r.NEVER,[g0]:r.ALWAYS,[d0]:r.LESS,[wf]:r.LEQUAL,[p0]:r.EQUAL,[Cf]:r.GEQUAL,[m0]:r.GREATER,[_0]:r.NOTEQUAL};function be(C,x){if(x.type===Ai&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===mn||x.magFilter===Wl||x.magFilter===vo||x.magFilter===Wr||x.minFilter===mn||x.minFilter===Wl||x.minFilter===vo||x.minFilter===Wr)&&qe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(C,r.TEXTURE_WRAP_S,ee[x.wrapS]),r.texParameteri(C,r.TEXTURE_WRAP_T,ee[x.wrapT]),(C===r.TEXTURE_3D||C===r.TEXTURE_2D_ARRAY)&&r.texParameteri(C,r.TEXTURE_WRAP_R,ee[x.wrapR]),r.texParameteri(C,r.TEXTURE_MAG_FILTER,R[x.magFilter]),r.texParameteri(C,r.TEXTURE_MIN_FILTER,R[x.minFilter]),x.compareFunction&&(r.texParameteri(C,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(C,r.TEXTURE_COMPARE_FUNC,ne[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===an||x.minFilter!==vo&&x.minFilter!==Wr||x.type===Ai&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");r.texParameterf(C,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Pe(C,x){let N=!1;C.__webglInit===void 0&&(C.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let j=d.get(Z);j===void 0&&(j={},d.set(Z,j));const $=k(x);if($!==C.__cacheKey){j[$]===void 0&&(j[$]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,N=!0),j[$].usedTimes++;const xe=j[C.__cacheKey];xe!==void 0&&(j[C.__cacheKey].usedTimes--,xe.usedTimes===0&&v(x)),C.__cacheKey=$,C.__webglTexture=j[$].texture}return N}function Fe(C,x,N){return Math.floor(Math.floor(C/N)/x)}function We(C,x,N,Z){const $=C.updateRanges;if($.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,x.width,x.height,N,Z,x.data);else{$.sort((re,ae)=>re.start-ae.start);let xe=0;for(let re=1;re<$.length;re++){const ae=$[xe],ye=$[re],we=ae.start+ae.count,oe=Fe(ye.start,x.width,4),He=Fe(ae.start,x.width,4);ye.start<=we+1&&oe===He&&Fe(ye.start+ye.count-1,x.width,4)===oe?ae.count=Math.max(ae.count,ye.start+ye.count-ae.start):(++xe,$[xe]=ye)}$.length=xe+1;const se=r.getParameter(r.UNPACK_ROW_LENGTH),Ae=r.getParameter(r.UNPACK_SKIP_PIXELS),Ee=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,x.width);for(let re=0,ae=$.length;re<ae;re++){const ye=$[re],we=Math.floor(ye.start/4),oe=Math.ceil(ye.count/4),He=we%x.width,L=Math.floor(we/x.width),ue=oe,ie=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,He),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),t.texSubImage2D(r.TEXTURE_2D,0,He,L,ue,ie,N,Z,x.data)}C.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ae),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ee)}}function K(C,x,N){let Z=r.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=r.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=r.TEXTURE_3D);const j=Pe(C,x),$=x.source;t.bindTexture(Z,C.__webglTexture,r.TEXTURE0+N);const xe=n.get($);if($.version!==xe.__version||j===!0){t.activeTexture(r.TEXTURE0+N);const se=ct.getPrimaries(ct.workingColorSpace),Ae=x.colorSpace===fr?null:ct.getPrimaries(x.colorSpace),Ee=x.colorSpace===fr||se===Ae?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);let re=_(x.image,!1,i.maxTextureSize);re=ke(x,re);const ae=s.convert(x.format,x.colorSpace),ye=s.convert(x.type);let we=T(x.internalFormat,ae,ye,x.colorSpace,x.isVideoTexture);be(Z,x);let oe;const He=x.mipmaps,L=x.isVideoTexture!==!0,ue=xe.__version===void 0||j===!0,ie=$.dataReady,fe=y(x,re);if(x.isDepthTexture)we=M(x.format===Xr,x.type),ue&&(L?t.texStorage2D(r.TEXTURE_2D,1,we,re.width,re.height):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,ae,ye,null));else if(x.isDataTexture)if(He.length>0){L&&ue&&t.texStorage2D(r.TEXTURE_2D,fe,we,He[0].width,He[0].height);for(let te=0,Q=He.length;te<Q;te++)oe=He[te],L?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,ye,oe.data):t.texImage2D(r.TEXTURE_2D,te,we,oe.width,oe.height,0,ae,ye,oe.data);x.generateMipmaps=!1}else L?(ue&&t.texStorage2D(r.TEXTURE_2D,fe,we,re.width,re.height),ie&&We(x,re,ae,ye)):t.texImage2D(r.TEXTURE_2D,0,we,re.width,re.height,0,ae,ye,re.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){L&&ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,we,He[0].width,He[0].height,re.depth);for(let te=0,Q=He.length;te<Q;te++)if(oe=He[te],x.format!==gi)if(ae!==null)if(L){if(ie)if(x.layerUpdates.size>0){const ce=Gh(oe.width,oe.height,x.format,x.type);for(const Ue of x.layerUpdates){const ut=oe.data.subarray(Ue*ce/oe.data.BYTES_PER_ELEMENT,(Ue+1)*ce/oe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,Ue,oe.width,oe.height,1,ae,ut)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,re.depth,ae,oe.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,te,we,oe.width,oe.height,re.depth,0,oe.data,0,0);else qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?ie&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,te,0,0,0,oe.width,oe.height,re.depth,ae,ye,oe.data):t.texImage3D(r.TEXTURE_2D_ARRAY,te,we,oe.width,oe.height,re.depth,0,ae,ye,oe.data)}else{L&&ue&&t.texStorage2D(r.TEXTURE_2D,fe,we,He[0].width,He[0].height);for(let te=0,Q=He.length;te<Q;te++)oe=He[te],x.format!==gi?ae!==null?L?ie&&t.compressedTexSubImage2D(r.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,oe.data):t.compressedTexImage2D(r.TEXTURE_2D,te,we,oe.width,oe.height,0,oe.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,oe.width,oe.height,ae,ye,oe.data):t.texImage2D(r.TEXTURE_2D,te,we,oe.width,oe.height,0,ae,ye,oe.data)}else if(x.isDataArrayTexture)if(L){if(ue&&t.texStorage3D(r.TEXTURE_2D_ARRAY,fe,we,re.width,re.height,re.depth),ie)if(x.layerUpdates.size>0){const te=Gh(re.width,re.height,x.format,x.type);for(const Q of x.layerUpdates){const ce=re.data.subarray(Q*te/re.data.BYTES_PER_ELEMENT,(Q+1)*te/re.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,Q,re.width,re.height,1,ae,ye,ce)}x.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,ae,ye,re.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,we,re.width,re.height,re.depth,0,ae,ye,re.data);else if(x.isData3DTexture)L?(ue&&t.texStorage3D(r.TEXTURE_3D,fe,we,re.width,re.height,re.depth),ie&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,ae,ye,re.data)):t.texImage3D(r.TEXTURE_3D,0,we,re.width,re.height,re.depth,0,ae,ye,re.data);else if(x.isFramebufferTexture){if(ue)if(L)t.texStorage2D(r.TEXTURE_2D,fe,we,re.width,re.height);else{let te=re.width,Q=re.height;for(let ce=0;ce<fe;ce++)t.texImage2D(r.TEXTURE_2D,ce,we,te,Q,0,ae,ye,null),te>>=1,Q>>=1}}else if(He.length>0){if(L&&ue){const te=Me(He[0]);t.texStorage2D(r.TEXTURE_2D,fe,we,te.width,te.height)}for(let te=0,Q=He.length;te<Q;te++)oe=He[te],L?ie&&t.texSubImage2D(r.TEXTURE_2D,te,0,0,ae,ye,oe):t.texImage2D(r.TEXTURE_2D,te,we,ae,ye,oe);x.generateMipmaps=!1}else if(L){if(ue){const te=Me(re);t.texStorage2D(r.TEXTURE_2D,fe,we,te.width,te.height)}ie&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,ae,ye,re)}else t.texImage2D(r.TEXTURE_2D,0,we,ae,ye,re);m(x)&&p(Z),xe.__version=$.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function J(C,x,N){if(x.image.length!==6)return;const Z=Pe(C,x),j=x.source;t.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+N);const $=n.get(j);if(j.version!==$.__version||Z===!0){t.activeTexture(r.TEXTURE0+N);const xe=ct.getPrimaries(ct.workingColorSpace),se=x.colorSpace===fr?null:ct.getPrimaries(x.colorSpace),Ae=x.colorSpace===fr||xe===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,x.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,x.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);const Ee=x.isCompressedTexture||x.image[0].isCompressedTexture,re=x.image[0]&&x.image[0].isDataTexture,ae=[];for(let Q=0;Q<6;Q++)!Ee&&!re?ae[Q]=_(x.image[Q],!0,i.maxCubemapSize):ae[Q]=re?x.image[Q].image:x.image[Q],ae[Q]=ke(x,ae[Q]);const ye=ae[0],we=s.convert(x.format,x.colorSpace),oe=s.convert(x.type),He=T(x.internalFormat,we,oe,x.colorSpace),L=x.isVideoTexture!==!0,ue=$.__version===void 0||Z===!0,ie=j.dataReady;let fe=y(x,ye);be(r.TEXTURE_CUBE_MAP,x);let te;if(Ee){L&&ue&&t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,He,ye.width,ye.height);for(let Q=0;Q<6;Q++){te=ae[Q].mipmaps;for(let ce=0;ce<te.length;ce++){const Ue=te[ce];x.format!==gi?we!==null?L?ie&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,we,Ue.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,He,Ue.width,Ue.height,0,Ue.data):qe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,0,0,Ue.width,Ue.height,we,oe,Ue.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce,He,Ue.width,Ue.height,0,we,oe,Ue.data)}}}else{if(te=x.mipmaps,L&&ue){te.length>0&&fe++;const Q=Me(ae[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,fe,He,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(re){L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ae[Q].width,ae[Q].height,we,oe,ae[Q].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,ae[Q].width,ae[Q].height,0,we,oe,ae[Q].data);for(let ce=0;ce<te.length;ce++){const ut=te[ce].image[Q].image;L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,ut.width,ut.height,we,oe,ut.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,He,ut.width,ut.height,0,we,oe,ut.data)}}else{L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,we,oe,ae[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,He,we,oe,ae[Q]);for(let ce=0;ce<te.length;ce++){const Ue=te[ce];L?ie&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,0,0,we,oe,Ue.image[Q]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,ce+1,He,we,oe,Ue.image[Q])}}}m(x)&&p(r.TEXTURE_CUBE_MAP),$.__version=j.version,x.onUpdate&&x.onUpdate(x)}C.__version=x.version}function he(C,x,N,Z,j,$){const xe=s.convert(N.format,N.colorSpace),se=s.convert(N.type),Ae=T(N.internalFormat,xe,se,N.colorSpace),Ee=n.get(x),re=n.get(N);if(re.__renderTarget=x,!Ee.__hasExternalTextures){const ae=Math.max(1,x.width>>$),ye=Math.max(1,x.height>>$);j===r.TEXTURE_3D||j===r.TEXTURE_2D_ARRAY?t.texImage3D(j,$,Ae,ae,ye,x.depth,0,xe,se,null):t.texImage2D(j,$,Ae,ae,ye,0,xe,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,C),pt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Z,j,re.__webglTexture,0,U(x)):(j===r.TEXTURE_2D||j>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,Z,j,re.__webglTexture,$),t.bindFramebuffer(r.FRAMEBUFFER,null)}function De(C,x,N){if(r.bindRenderbuffer(r.RENDERBUFFER,C),x.depthBuffer){const Z=x.depthTexture,j=Z&&Z.isDepthTexture?Z.type:null,$=M(x.stencilBuffer,j),xe=x.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;pt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(x),$,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(x),$,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,$,x.width,x.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,C)}else{const Z=x.textures;for(let j=0;j<Z.length;j++){const $=Z[j],xe=s.convert($.format,$.colorSpace),se=s.convert($.type),Ae=T($.internalFormat,xe,se,$.colorSpace);pt(x)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,U(x),Ae,x.width,x.height):N?r.renderbufferStorageMultisample(r.RENDERBUFFER,U(x),Ae,x.width,x.height):r.renderbufferStorage(r.RENDERBUFFER,Ae,x.width,x.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Se(C,x,N){const Z=x.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,C),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(x.depthTexture);if(j.__renderTarget=x,(!j.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),Z){if(j.__webglInit===void 0&&(j.__webglInit=!0,x.depthTexture.addEventListener("dispose",A)),j.__webglTexture===void 0){j.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,j.__webglTexture),be(r.TEXTURE_CUBE_MAP,x.depthTexture);const Ee=s.convert(x.depthTexture.format),re=s.convert(x.depthTexture.type);let ae;x.depthTexture.format===er?ae=r.DEPTH_COMPONENT24:x.depthTexture.format===Xr&&(ae=r.DEPTH24_STENCIL8);for(let ye=0;ye<6;ye++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ae,x.width,x.height,0,Ee,re,null)}}else G(x.depthTexture,0);const $=j.__webglTexture,xe=U(x),se=Z?r.TEXTURE_CUBE_MAP_POSITIVE_X+N:r.TEXTURE_2D,Ae=x.depthTexture.format===Xr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(x.depthTexture.format===er)pt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,se,$,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,se,$,0);else if(x.depthTexture.format===Xr)pt(x)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ae,se,$,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ae,se,$,0);else throw new Error("Unknown depthTexture format")}function Ve(C){const x=n.get(C),N=C.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==C.depthTexture){const Z=C.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const j=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",j)};Z.addEventListener("dispose",j),x.__depthDisposeCallback=j}x.__boundDepthTexture=Z}if(C.depthTexture&&!x.__autoAllocateDepthBuffer)if(N)for(let Z=0;Z<6;Z++)Se(x.__webglFramebuffer[Z],C,Z);else{const Z=C.texture.mipmaps;Z&&Z.length>0?Se(x.__webglFramebuffer[0],C,0):Se(x.__webglFramebuffer,C,0)}else if(N){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=r.createRenderbuffer(),De(x.__webglDepthbuffer[Z],C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer[Z];r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}else{const Z=C.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=r.createRenderbuffer(),De(x.__webglDepthbuffer,C,!1);else{const j=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,$=x.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,$),r.framebufferRenderbuffer(r.FRAMEBUFFER,j,r.RENDERBUFFER,$)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function lt(C,x,N){const Z=n.get(C);x!==void 0&&he(Z.__webglFramebuffer,C,C.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),N!==void 0&&Ve(C)}function Te(C){const x=C.texture,N=n.get(C),Z=n.get(x);C.addEventListener("dispose",w);const j=C.textures,$=C.isWebGLCubeRenderTarget===!0,xe=j.length>1;if(xe||(Z.__webglTexture===void 0&&(Z.__webglTexture=r.createTexture()),Z.__version=x.version,a.memory.textures++),$){N.__webglFramebuffer=[];for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer[se]=[];for(let Ae=0;Ae<x.mipmaps.length;Ae++)N.__webglFramebuffer[se][Ae]=r.createFramebuffer()}else N.__webglFramebuffer[se]=r.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){N.__webglFramebuffer=[];for(let se=0;se<x.mipmaps.length;se++)N.__webglFramebuffer[se]=r.createFramebuffer()}else N.__webglFramebuffer=r.createFramebuffer();if(xe)for(let se=0,Ae=j.length;se<Ae;se++){const Ee=n.get(j[se]);Ee.__webglTexture===void 0&&(Ee.__webglTexture=r.createTexture(),a.memory.textures++)}if(C.samples>0&&pt(C)===!1){N.__webglMultisampledFramebuffer=r.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let se=0;se<j.length;se++){const Ae=j[se];N.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,N.__webglColorRenderbuffer[se]);const Ee=s.convert(Ae.format,Ae.colorSpace),re=s.convert(Ae.type),ae=T(Ae.internalFormat,Ee,re,Ae.colorSpace,C.isXRRenderTarget===!0),ye=U(C);r.renderbufferStorageMultisample(r.RENDERBUFFER,ye,ae,C.width,C.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,N.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),C.depthBuffer&&(N.__webglDepthRenderbuffer=r.createRenderbuffer(),De(N.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if($){t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture),be(r.TEXTURE_CUBE_MAP,x);for(let se=0;se<6;se++)if(x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)he(N.__webglFramebuffer[se][Ae],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Ae);else he(N.__webglFramebuffer[se],C,x,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);m(x)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let se=0,Ae=j.length;se<Ae;se++){const Ee=j[se],re=n.get(Ee);let ae=r.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ae=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(ae,re.__webglTexture),be(ae,Ee),he(N.__webglFramebuffer,C,Ee,r.COLOR_ATTACHMENT0+se,ae,0),m(Ee)&&p(ae)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(se=C.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,Z.__webglTexture),be(se,x),x.mipmaps&&x.mipmaps.length>0)for(let Ae=0;Ae<x.mipmaps.length;Ae++)he(N.__webglFramebuffer[Ae],C,x,r.COLOR_ATTACHMENT0,se,Ae);else he(N.__webglFramebuffer,C,x,r.COLOR_ATTACHMENT0,se,0);m(x)&&p(se),t.unbindTexture()}C.depthBuffer&&Ve(C)}function ze(C){const x=C.textures;for(let N=0,Z=x.length;N<Z;N++){const j=x[N];if(m(j)){const $=E(C),xe=n.get(j).__webglTexture;t.bindTexture($,xe),p($),t.unbindTexture()}}}const Ke=[],Ne=[];function H(C){if(C.samples>0){if(pt(C)===!1){const x=C.textures,N=C.width,Z=C.height;let j=r.COLOR_BUFFER_BIT;const $=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(C),se=x.length>1;if(se)for(let Ee=0;Ee<x.length;Ee++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);const Ae=C.texture.mipmaps;Ae&&Ae.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Ee=0;Ee<x.length;Ee++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(j|=r.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(j|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const re=n.get(x[Ee]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,re,0)}r.blitFramebuffer(0,0,N,Z,0,0,N,Z,j,r.NEAREST),l===!0&&(Ke.length=0,Ne.length=0,Ke.push(r.COLOR_ATTACHMENT0+Ee),C.depthBuffer&&C.resolveDepthBuffer===!1&&(Ke.push($),Ne.push($),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ne)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Ee=0;Ee<x.length;Ee++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Ee]);const re=n.get(x[Ee]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ee,r.TEXTURE_2D,re,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const x=C.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[x])}}}function U(C){return Math.min(i.maxSamples,C.samples)}function pt(C){const x=n.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function et(C){const x=a.render.frame;u.get(C)!==x&&(u.set(C,x),C.update())}function ke(C,x){const N=C.colorSpace,Z=C.format,j=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||N!==Js&&N!==fr&&(ct.getTransfer(N)===vt?(Z!==gi||j!==oi)&&qe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):dt("WebGLTextures: Unsupported texture color space:",N)),x}function Me(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=I,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=q,this.rebindTextures=lt,this.setupRenderTarget=Te,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=H,this.setupDepthRenderbuffer=Ve,this.setupFrameBufferTexture=he,this.useMultisampledRTT=pt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ky(r,e){function t(n,i=fr){let s;const a=ct.getTransfer(i);if(n===oi)return r.UNSIGNED_BYTE;if(n===yf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Ef)return r.UNSIGNED_SHORT_5_5_5_1;if(n===om)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===lm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===sm)return r.BYTE;if(n===am)return r.SHORT;if(n===Xa)return r.UNSIGNED_SHORT;if(n===Mf)return r.INT;if(n===Ii)return r.UNSIGNED_INT;if(n===Ai)return r.FLOAT;if(n===Qi)return r.HALF_FLOAT;if(n===cm)return r.ALPHA;if(n===um)return r.RGB;if(n===gi)return r.RGBA;if(n===er)return r.DEPTH_COMPONENT;if(n===Xr)return r.DEPTH_STENCIL;if(n===fm)return r.RED;if(n===Tf)return r.RED_INTEGER;if(n===js)return r.RG;if(n===bf)return r.RG_INTEGER;if(n===Af)return r.RGBA_INTEGER;if(n===jo||n===Jo||n===Qo||n===el)if(a===vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===jo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===el)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===jo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Jo)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qo)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===el)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ou||n===lu||n===cu||n===uu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ou)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===lu)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===cu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===uu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fu||n===hu||n===du||n===pu||n===mu||n===_u||n===gu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fu||n===hu)return a===vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===du)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===pu)return s.COMPRESSED_R11_EAC;if(n===mu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===_u)return s.COMPRESSED_RG11_EAC;if(n===gu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===vu||n===xu||n===Su||n===Mu||n===yu||n===Eu||n===Tu||n===bu||n===Au||n===wu||n===Cu||n===Ru||n===Pu||n===Du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===vu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===xu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Su)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Mu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===yu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===bu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Au)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===wu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ru)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Pu)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Du)return a===vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Lu||n===Iu||n===Uu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Lu)return a===vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Iu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nu||n===Fu||n===Ou||n===Bu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===Nu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Fu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ou)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Bu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ya?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const Vy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Gy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Hy{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Tm(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new vi({vertexShader:Vy,fragmentShader:Gy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ui(new no(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wy extends ea{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Hy,p={},E=t.getContextAttributes();let T=null,M=null;const y=[],A=[],w=new xt;let P=null;const v=new mi;v.viewport=new zt;const S=new mi;S.viewport=new zt;const D=[v,S],I=new ev;let F=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let J=y[K];return J===void 0&&(J=new dc,y[K]=J),J.getTargetRaySpace()},this.getControllerGrip=function(K){let J=y[K];return J===void 0&&(J=new dc,y[K]=J),J.getGripSpace()},this.getHand=function(K){let J=y[K];return J===void 0&&(J=new dc,y[K]=J),J.getHandSpace()};function G(K){const J=A.indexOf(K.inputSource);if(J===-1)return;const he=y[J];he!==void 0&&(he.update(K.inputSource,K.frame,c||a),he.dispatchEvent({type:K.type,data:K.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let K=0;K<y.length;K++){const J=A[K];J!==null&&(A[K]=null,y[K].disconnect(J))}F=null,k=null,m.reset();for(const K in p)delete p[K];e.setRenderTarget(T),h=null,d=null,f=null,i=null,M=null,We.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&qe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,n.isPresenting===!0&&qe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f===null&&_&&(f=new XRWebGLBinding(i,t)),f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(T=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),E.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,De=null,Se=null;E.depth&&(Se=E.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=E.stencil?Xr:er,De=E.stencil?Ya:Ii);const Ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:s};f=this.getBinding(),d=f.createProjectionLayer(Ve),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),M=new Pi(d.textureWidth,d.textureHeight,{format:gi,type:oi,depthTexture:new $a(d.textureWidth,d.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:E.stencil,colorSpace:e.outputColorSpace,samples:E.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const he={antialias:E.antialias,alpha:!0,depth:E.depth,stencil:E.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(i,t,he),i.updateRenderState({baseLayer:h}),e.setPixelRatio(1),e.setSize(h.framebufferWidth,h.framebufferHeight,!1),M=new Pi(h.framebufferWidth,h.framebufferHeight,{format:gi,type:oi,colorSpace:e.outputColorSpace,stencilBuffer:E.stencil,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await i.requestReferenceSpace(o),We.setContext(i),We.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function B(K){for(let J=0;J<K.removed.length;J++){const he=K.removed[J],De=A.indexOf(he);De>=0&&(A[De]=null,y[De].disconnect(he))}for(let J=0;J<K.added.length;J++){const he=K.added[J];let De=A.indexOf(he);if(De===-1){for(let Ve=0;Ve<y.length;Ve++)if(Ve>=A.length){A.push(he),De=Ve;break}else if(A[Ve]===null){A[Ve]=he,De=Ve;break}if(De===-1)break}const Se=y[De];Se&&Se.connect(he)}}const q=new X,ee=new X;function R(K,J,he){q.setFromMatrixPosition(J.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const De=q.distanceTo(ee),Se=J.projectionMatrix.elements,Ve=he.projectionMatrix.elements,lt=Se[14]/(Se[10]-1),Te=Se[14]/(Se[10]+1),ze=(Se[9]+1)/Se[5],Ke=(Se[9]-1)/Se[5],Ne=(Se[8]-1)/Se[0],H=(Ve[8]+1)/Ve[0],U=lt*Ne,pt=lt*H,et=De/(-Ne+H),ke=et*-Ne;if(J.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(ke),K.translateZ(et),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Se[10]===-1)K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const Me=lt+et,C=Te+et,x=U-ke,N=pt+(De-ke),Z=ze*Te/C*Me,j=Ke*Te/C*Me;K.projectionMatrix.makePerspective(x,N,Z,j,Me,C),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function ne(K,J){J===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(J.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let J=K.near,he=K.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(he=m.depthFar)),I.near=S.near=v.near=J,I.far=S.far=v.far=he,(F!==I.near||k!==I.far)&&(i.updateRenderState({depthNear:I.near,depthFar:I.far}),F=I.near,k=I.far),I.layers.mask=K.layers.mask|6,v.layers.mask=I.layers.mask&3,S.layers.mask=I.layers.mask&5;const De=K.parent,Se=I.cameras;ne(I,De);for(let Ve=0;Ve<Se.length;Ve++)ne(Se[Ve],De);Se.length===2?R(I,v,S):I.projectionMatrix.copy(v.projectionMatrix),be(K,I,De)};function be(K,J,he){he===null?K.matrix.copy(J.matrixWorld):(K.matrix.copy(he.matrixWorld),K.matrix.invert(),K.matrix.multiply(J.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(J.projectionMatrix),K.projectionMatrixInverse.copy(J.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=zu*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(K){l=K,d!==null&&(d.fixedFoveation=K),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(I)},this.getCameraTexture=function(K){return p[K]};let Pe=null;function Fe(K,J){if(u=J.getViewerPose(c||a),g=J,u!==null){const he=u.views;h!==null&&(e.setRenderTargetFramebuffer(M,h.framebuffer),e.setRenderTarget(M));let De=!1;he.length!==I.cameras.length&&(I.cameras.length=0,De=!0);for(let Te=0;Te<he.length;Te++){const ze=he[Te];let Ke=null;if(h!==null)Ke=h.getViewport(ze);else{const H=f.getViewSubImage(d,ze);Ke=H.viewport,Te===0&&(e.setRenderTargetTextures(M,H.colorTexture,H.depthStencilTexture),e.setRenderTarget(M))}let Ne=D[Te];Ne===void 0&&(Ne=new mi,Ne.layers.enable(Te),Ne.viewport=new zt,D[Te]=Ne),Ne.matrix.fromArray(ze.transform.matrix),Ne.matrix.decompose(Ne.position,Ne.quaternion,Ne.scale),Ne.projectionMatrix.fromArray(ze.projectionMatrix),Ne.projectionMatrixInverse.copy(Ne.projectionMatrix).invert(),Ne.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Te===0&&(I.matrix.copy(Ne.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),De===!0&&I.cameras.push(Ne)}const Se=i.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){f=n.getBinding();const Te=f.getDepthInformation(he[0]);Te&&Te.isValid&&Te.texture&&m.init(Te,i.renderState)}if(Se&&Se.includes("camera-access")&&_){e.state.unbindTexture(),f=n.getBinding();for(let Te=0;Te<he.length;Te++){const ze=he[Te].camera;if(ze){let Ke=p[ze];Ke||(Ke=new Tm,p[ze]=Ke);const Ne=f.getCameraImage(ze);Ke.sourceTexture=Ne}}}}for(let he=0;he<y.length;he++){const De=A[he],Se=y[he];De!==null&&Se!==void 0&&Se.update(De,J,c||a)}Pe&&Pe(K,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const We=new bm;We.setAnimationLoop(Fe),this.setAnimationLoop=function(K){Pe=K},this.dispose=function(){}}}const Nr=new tr,Xy=new Xt;function Yy(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xm(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,E,T,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,M)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,E,T):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Fn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Fn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const E=e.get(p),T=E.envMap,M=E.envMapRotation;T&&(m.envMap.value=T,Nr.copy(M),Nr.x*=-1,Nr.y*=-1,Nr.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Nr.y*=-1,Nr.z*=-1),m.envMapRotation.value.setFromMatrix4(Xy.makeRotationFromEuler(Nr)),m.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,E,T){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*E,m.scale.value=T*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,E){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Fn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const E=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function qy(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,T){const M=T.program;n.uniformBlockBinding(E,M)}function c(E,T){let M=i[E.id];M===void 0&&(g(E),M=u(E),i[E.id]=M,E.addEventListener("dispose",m));const y=T.program;n.updateUBOMapping(E,y);const A=e.render.frame;s[E.id]!==A&&(d(E),s[E.id]=A)}function u(E){const T=f();E.__bindingPointIndex=T;const M=r.createBuffer(),y=E.__size,A=E.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,y,A),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,T,M),M}function f(){for(let E=0;E<o;E++)if(a.indexOf(E)===-1)return a.push(E),E;return dt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const T=i[E.id],M=E.uniforms,y=E.__cache;r.bindBuffer(r.UNIFORM_BUFFER,T);for(let A=0,w=M.length;A<w;A++){const P=Array.isArray(M[A])?M[A]:[M[A]];for(let v=0,S=P.length;v<S;v++){const D=P[v];if(h(D,A,v,y)===!0){const I=D.__offset,F=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let G=0;G<F.length;G++){const z=F[G],B=_(z);typeof z=="number"||typeof z=="boolean"?(D.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,I+k,D.__data)):z.isMatrix3?(D.__data[0]=z.elements[0],D.__data[1]=z.elements[1],D.__data[2]=z.elements[2],D.__data[3]=0,D.__data[4]=z.elements[3],D.__data[5]=z.elements[4],D.__data[6]=z.elements[5],D.__data[7]=0,D.__data[8]=z.elements[6],D.__data[9]=z.elements[7],D.__data[10]=z.elements[8],D.__data[11]=0):(z.toArray(D.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,I,D.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function h(E,T,M,y){const A=E.value,w=T+"_"+M;if(y[w]===void 0)return typeof A=="number"||typeof A=="boolean"?y[w]=A:y[w]=A.clone(),!0;{const P=y[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return y[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(E){const T=E.uniforms;let M=0;const y=16;for(let w=0,P=T.length;w<P;w++){const v=Array.isArray(T[w])?T[w]:[T[w]];for(let S=0,D=v.length;S<D;S++){const I=v[S],F=Array.isArray(I.value)?I.value:[I.value];for(let k=0,G=F.length;k<G;k++){const z=F[k],B=_(z),q=M%y,ee=q%B.boundary,R=q+ee;M+=ee,R!==0&&y-R<B.storage&&(M+=y-R),I.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=M,M+=B.storage}}}const A=M%y;return A>0&&(M+=y-A),E.__size=M,E.__cache={},this}function _(E){const T={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(T.boundary=4,T.storage=4):E.isVector2?(T.boundary=8,T.storage=8):E.isVector3||E.isColor?(T.boundary=16,T.storage=12):E.isVector4?(T.boundary=16,T.storage=16):E.isMatrix3?(T.boundary=48,T.storage=48):E.isMatrix4?(T.boundary=64,T.storage=64):E.isTexture?qe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):qe("WebGLRenderer: Unsupported uniform value type.",E),T}function m(E){const T=E.target;T.removeEventListener("dispose",m);const M=a.indexOf(T.__bindingPointIndex);a.splice(M,1),r.deleteBuffer(i[T.id]),delete i[T.id],delete s[T.id]}function p(){for(const E in i)r.deleteBuffer(i[E]);a=[],i={},s={}}return{bind:l,update:c,dispose:p}}const $y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let xi=null;function Ky(){return xi===null&&(xi=new Y0($y,16,16,js,Qi),xi.name="DFG_LUT",xi.minFilter=mn,xi.magFilter=mn,xi.wrapS=Yi,xi.wrapT=Yi,xi.generateMipmaps=!1,xi.needsUpdate=!0),xi}class Zy{constructor(e={}){const{canvas:t=v0(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:d=!1,outputBufferType:h=oi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=h,m=new Set([Af,bf,Tf]),p=new Set([oi,Ii,Xa,Ya,yf,Ef]),E=new Uint32Array(4),T=new Int32Array(4);let M=null,y=null;const A=[],w=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ri,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const v=this;let S=!1;this._outputColorSpace=ri;let D=0,I=0,F=null,k=-1,G=null;const z=new zt,B=new zt;let q=null;const ee=new yt(0);let R=0,ne=t.width,be=t.height,Pe=1,Fe=null,We=null;const K=new zt(0,0,ne,be),J=new zt(0,0,ne,be);let he=!1;const De=new Em;let Se=!1,Ve=!1;const lt=new Xt,Te=new X,ze=new zt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ne=!1;function H(){return F===null?Pe:1}let U=n;function pt(b,O){return t.getContext(b,O)}try{const b={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sf}`),t.addEventListener("webglcontextlost",Ue,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",_e,!1),U===null){const O="webgl2";if(U=pt(O,b),U===null)throw pt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(b){throw dt("WebGLRenderer: "+b.message),b}let et,ke,Me,C,x,N,Z,j,$,xe,se,Ae,Ee,re,ae,ye,we,oe,He,L,ue,ie,fe,te;function Q(){et=new KS(U),et.init(),ie=new ky(U,et),ke=new kS(U,et,e,ie),Me=new By(U,et),ke.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),C=new JS(U),x=new Ey,N=new zy(U,et,Me,x,ke,ie,C),Z=new GS(v),j=new $S(v),$=new nv(U),fe=new BS(U,$),xe=new ZS(U,$,C,fe),se=new eM(U,xe,$,C),He=new QS(U,ke,N),ye=new VS(x),Ae=new yy(v,Z,j,et,ke,fe,ye),Ee=new Yy(v,x),re=new by,ae=new Dy(et),oe=new OS(v,Z,j,Me,se,g,l),we=new Fy(v,se,ke),te=new qy(U,C,ke,Me),L=new zS(U,et,C),ue=new jS(U,et,C),C.programs=Ae.programs,v.capabilities=ke,v.extensions=et,v.properties=x,v.renderLists=re,v.shadowMap=we,v.state=Me,v.info=C}Q(),_!==oi&&(P=new nM(_,t.width,t.height,i,s));const ce=new Wy(v,U);this.xr=ce,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const b=et.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){const b=et.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(b){b!==void 0&&(Pe=b,this.setSize(ne,be,!1))},this.getSize=function(b){return b.set(ne,be)},this.setSize=function(b,O,Y=!0){if(ce.isPresenting){qe("WebGLRenderer: Can't change size while VR device is presenting.");return}ne=b,be=O,t.width=Math.floor(b*Pe),t.height=Math.floor(O*Pe),Y===!0&&(t.style.width=b+"px",t.style.height=O+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,b,O)},this.getDrawingBufferSize=function(b){return b.set(ne*Pe,be*Pe).floor()},this.setDrawingBufferSize=function(b,O,Y){ne=b,be=O,Pe=Y,t.width=Math.floor(b*Y),t.height=Math.floor(O*Y),this.setViewport(0,0,b,O)},this.setEffects=function(b){if(_===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let O=0;O<b.length;O++)if(b[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(z)},this.getViewport=function(b){return b.copy(K)},this.setViewport=function(b,O,Y,W){b.isVector4?K.set(b.x,b.y,b.z,b.w):K.set(b,O,Y,W),Me.viewport(z.copy(K).multiplyScalar(Pe).round())},this.getScissor=function(b){return b.copy(J)},this.setScissor=function(b,O,Y,W){b.isVector4?J.set(b.x,b.y,b.z,b.w):J.set(b,O,Y,W),Me.scissor(B.copy(J).multiplyScalar(Pe).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(b){Me.setScissorTest(he=b)},this.setOpaqueSort=function(b){Fe=b},this.setTransparentSort=function(b){We=b},this.getClearColor=function(b){return b.copy(oe.getClearColor())},this.setClearColor=function(){oe.setClearColor(...arguments)},this.getClearAlpha=function(){return oe.getClearAlpha()},this.setClearAlpha=function(){oe.setClearAlpha(...arguments)},this.clear=function(b=!0,O=!0,Y=!0){let W=0;if(b){let V=!1;if(F!==null){const le=F.texture.format;V=m.has(le)}if(V){const le=F.texture.type,ge=p.has(le),de=oe.getClearColor(),ve=oe.getClearAlpha(),Le=de.r,Ge=de.g,Oe=de.b;ge?(E[0]=Le,E[1]=Ge,E[2]=Oe,E[3]=ve,U.clearBufferuiv(U.COLOR,0,E)):(T[0]=Le,T[1]=Ge,T[2]=Oe,T[3]=ve,U.clearBufferiv(U.COLOR,0,T))}else W|=U.COLOR_BUFFER_BIT}O&&(W|=U.DEPTH_BUFFER_BIT),Y&&(W|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ue,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),oe.dispose(),re.dispose(),ae.dispose(),x.dispose(),Z.dispose(),j.dispose(),se.dispose(),fe.dispose(),te.dispose(),Ae.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Ot),ce.removeEventListener("sessionend",nt),_t.stop()};function Ue(b){b.preventDefault(),bh("WebGLRenderer: Context Lost."),S=!0}function ut(){bh("WebGLRenderer: Context Restored."),S=!1;const b=C.autoReset,O=we.enabled,Y=we.autoUpdate,W=we.needsUpdate,V=we.type;Q(),C.autoReset=b,we.enabled=O,we.autoUpdate=Y,we.needsUpdate=W,we.type=V}function _e(b){dt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function Re(b){const O=b.target;O.removeEventListener("dispose",Re),Ze(O)}function Ze(b){pe(b),x.remove(b)}function pe(b){const O=x.get(b).programs;O!==void 0&&(O.forEach(function(Y){Ae.releaseProgram(Y)}),b.isShaderMaterial&&Ae.releaseShaderCache(b))}this.renderBufferDirect=function(b,O,Y,W,V,le){O===null&&(O=Ke);const ge=V.isMesh&&V.matrixWorld.determinant()<0,de=Yt(b,O,Y,W,V);Me.setMaterial(W,ge);let ve=Y.index,Le=1;if(W.wireframe===!0){if(ve=xe.getWireframeAttribute(Y),ve===void 0)return;Le=2}const Ge=Y.drawRange,Oe=Y.attributes.position;let it=Ge.start*Le,Mt=(Ge.start+Ge.count)*Le;le!==null&&(it=Math.max(it,le.start*Le),Mt=Math.min(Mt,(le.start+le.count)*Le)),ve!==null?(it=Math.max(it,0),Mt=Math.min(Mt,ve.count)):Oe!=null&&(it=Math.max(it,0),Mt=Math.min(Mt,Oe.count));const Ut=Mt-it;if(Ut<0||Ut===1/0)return;fe.setup(V,W,de,Y,ve);let Nt,Tt=L;if(ve!==null&&(Nt=$.get(ve),Tt=ue,Tt.setIndex(Nt)),V.isMesh)W.wireframe===!0?(Me.setLineWidth(W.wireframeLinewidth*H()),Tt.setMode(U.LINES)):Tt.setMode(U.TRIANGLES);else if(V.isLine){let Be=W.linewidth;Be===void 0&&(Be=1),Me.setLineWidth(Be*H()),V.isLineSegments?Tt.setMode(U.LINES):V.isLineLoop?Tt.setMode(U.LINE_LOOP):Tt.setMode(U.LINE_STRIP)}else V.isPoints?Tt.setMode(U.POINTS):V.isSprite&&Tt.setMode(U.TRIANGLES);if(V.isBatchedMesh)if(V._multiDrawInstances!==null)qa("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Tt.renderMultiDrawInstances(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount,V._multiDrawInstances);else if(et.get("WEBGL_multi_draw"))Tt.renderMultiDraw(V._multiDrawStarts,V._multiDrawCounts,V._multiDrawCount);else{const Be=V._multiDrawStarts,gt=V._multiDrawCounts,ht=V._multiDrawCount,zn=ve?$.get(ve).bytesPerElement:1,ls=x.get(W).currentProgram.getUniforms();for(let kn=0;kn<ht;kn++)ls.setValue(U,"_gl_DrawID",kn),Tt.render(Be[kn]/zn,gt[kn])}else if(V.isInstancedMesh)Tt.renderInstances(it,Ut,V.count);else if(Y.isInstancedBufferGeometry){const Be=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,gt=Math.min(Y.instanceCount,Be);Tt.renderInstances(it,Ut,gt)}else Tt.render(it,Ut)};function Xe(b,O,Y){b.transparent===!0&&b.side===Wi&&b.forceSinglePass===!1?(b.side=Fn,b.needsUpdate=!0,St(b,O,Y),b.side=br,b.needsUpdate=!0,St(b,O,Y),b.side=Wi):St(b,O,Y)}this.compile=function(b,O,Y=null){Y===null&&(Y=b),y=ae.get(Y),y.init(O),w.push(y),Y.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),b!==Y&&b.traverseVisible(function(V){V.isLight&&V.layers.test(O.layers)&&(y.pushLight(V),V.castShadow&&y.pushShadow(V))}),y.setupLights();const W=new Set;return b.traverse(function(V){if(!(V.isMesh||V.isPoints||V.isLine||V.isSprite))return;const le=V.material;if(le)if(Array.isArray(le))for(let ge=0;ge<le.length;ge++){const de=le[ge];Xe(de,Y,V),W.add(de)}else Xe(le,Y,V),W.add(le)}),y=w.pop(),W},this.compileAsync=function(b,O,Y=null){const W=this.compile(b,O,Y);return new Promise(V=>{function le(){if(W.forEach(function(ge){x.get(ge).currentProgram.isReady()&&W.delete(ge)}),W.size===0){V(b);return}setTimeout(le,10)}et.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Ie=null;function Ye(b){Ie&&Ie(b)}function Ot(){_t.stop()}function nt(){_t.start()}const _t=new bm;_t.setAnimationLoop(Ye),typeof self<"u"&&_t.setContext(self),this.setAnimationLoop=function(b){Ie=b,ce.setAnimationLoop(b),b===null?_t.stop():_t.start()},ce.addEventListener("sessionstart",Ot),ce.addEventListener("sessionend",nt),this.render=function(b,O){if(O!==void 0&&O.isCamera!==!0){dt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;const Y=ce.enabled===!0&&ce.isPresenting===!0,W=P!==null&&(F===null||Y)&&P.begin(v,F);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),b.isScene===!0&&b.onBeforeRender(v,b,O,F),y=ae.get(b,w.length),y.init(O),w.push(y),lt.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),De.setFromProjectionMatrix(lt,wi,O.reversedDepth),Ve=this.localClippingEnabled,Se=ye.init(this.clippingPlanes,Ve),M=re.get(b,A.length),M.init(),A.push(M),ce.enabled===!0&&ce.isPresenting===!0){const ge=v.xr.getDepthSensingMesh();ge!==null&&Vt(ge,O,-1/0,v.sortObjects)}Vt(b,O,0,v.sortObjects),M.finish(),v.sortObjects===!0&&M.sort(Fe,We),Ne=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ne&&oe.addToRenderList(M,b),this.info.render.frame++,Se===!0&&ye.beginShadows();const V=y.state.shadowsArray;if(we.render(V,b,O),Se===!0&&ye.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&P.hasRenderPass())===!1){const ge=M.opaque,de=M.transmissive;if(y.setupLights(),O.isArrayCamera){const ve=O.cameras;if(de.length>0)for(let Le=0,Ge=ve.length;Le<Ge;Le++){const Oe=ve[Le];Et(ge,de,b,Oe)}Ne&&oe.render(b);for(let Le=0,Ge=ve.length;Le<Ge;Le++){const Oe=ve[Le];Rt(M,b,Oe,Oe.viewport)}}else de.length>0&&Et(ge,de,b,O),Ne&&oe.render(b),Rt(M,b,O)}F!==null&&I===0&&(N.updateMultisampleRenderTarget(F),N.updateRenderTargetMipmap(F)),W&&P.end(v),b.isScene===!0&&b.onAfterRender(v,b,O),fe.resetDefaultState(),k=-1,G=null,w.pop(),w.length>0?(y=w[w.length-1],Se===!0&&ye.setGlobalState(v.clippingPlanes,y.state.camera)):y=null,A.pop(),A.length>0?M=A[A.length-1]:M=null};function Vt(b,O,Y,W){if(b.visible===!1)return;if(b.layers.test(O.layers)){if(b.isGroup)Y=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(O);else if(b.isLight)y.pushLight(b),b.castShadow&&y.pushShadow(b);else if(b.isSprite){if(!b.frustumCulled||De.intersectsSprite(b)){W&&ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(lt);const ge=se.update(b),de=b.material;de.visible&&M.push(b,ge,de,Y,ze.z,null)}}else if((b.isMesh||b.isLine||b.isPoints)&&(!b.frustumCulled||De.intersectsObject(b))){const ge=se.update(b),de=b.material;if(W&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ze.copy(b.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),ze.copy(ge.boundingSphere.center)),ze.applyMatrix4(b.matrixWorld).applyMatrix4(lt)),Array.isArray(de)){const ve=ge.groups;for(let Le=0,Ge=ve.length;Le<Ge;Le++){const Oe=ve[Le],it=de[Oe.materialIndex];it&&it.visible&&M.push(b,ge,it,Y,ze.z,Oe)}}else de.visible&&M.push(b,ge,de,Y,ze.z,null)}}const le=b.children;for(let ge=0,de=le.length;ge<de;ge++)Vt(le[ge],O,Y,W)}function Rt(b,O,Y,W){const{opaque:V,transmissive:le,transparent:ge}=b;y.setupLightsView(Y),Se===!0&&ye.setGlobalState(v.clippingPlanes,Y),W&&Me.viewport(z.copy(W)),V.length>0&&ft(V,O,Y),le.length>0&&ft(le,O,Y),ge.length>0&&ft(ge,O,Y),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Et(b,O,Y,W){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;if(y.state.transmissionRenderTarget[W.id]===void 0){const it=et.has("EXT_color_buffer_half_float")||et.has("EXT_color_buffer_float");y.state.transmissionRenderTarget[W.id]=new Pi(1,1,{generateMipmaps:!0,type:it?Qi:oi,minFilter:Wr,samples:ke.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace})}const le=y.state.transmissionRenderTarget[W.id],ge=W.viewport||z;le.setSize(ge.z*v.transmissionResolutionScale,ge.w*v.transmissionResolutionScale);const de=v.getRenderTarget(),ve=v.getActiveCubeFace(),Le=v.getActiveMipmapLevel();v.setRenderTarget(le),v.getClearColor(ee),R=v.getClearAlpha(),R<1&&v.setClearColor(16777215,.5),v.clear(),Ne&&oe.render(Y);const Ge=v.toneMapping;v.toneMapping=Ri;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),y.setupLightsView(W),Se===!0&&ye.setGlobalState(v.clippingPlanes,W),ft(b,Y,W),N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le),et.has("WEBGL_multisampled_render_to_texture")===!1){let it=!1;for(let Mt=0,Ut=O.length;Mt<Ut;Mt++){const Nt=O[Mt],{object:Tt,geometry:Be,material:gt,group:ht}=Nt;if(gt.side===Wi&&Tt.layers.test(W.layers)){const zn=gt.side;gt.side=Fn,gt.needsUpdate=!0,wn(Tt,Y,W,Be,gt,ht),gt.side=zn,gt.needsUpdate=!0,it=!0}}it===!0&&(N.updateMultisampleRenderTarget(le),N.updateRenderTargetMipmap(le))}v.setRenderTarget(de,ve,Le),v.setClearColor(ee,R),Oe!==void 0&&(W.viewport=Oe),v.toneMapping=Ge}function ft(b,O,Y){const W=O.isScene===!0?O.overrideMaterial:null;for(let V=0,le=b.length;V<le;V++){const ge=b[V],{object:de,geometry:ve,group:Le}=ge;let Ge=ge.material;Ge.allowOverride===!0&&W!==null&&(Ge=W),de.layers.test(Y.layers)&&wn(de,O,Y,ve,Ge,Le)}}function wn(b,O,Y,W,V,le){b.onBeforeRender(v,O,Y,W,V,le),b.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),V.onBeforeRender(v,O,Y,W,b,le),V.transparent===!0&&V.side===Wi&&V.forceSinglePass===!1?(V.side=Fn,V.needsUpdate=!0,v.renderBufferDirect(Y,O,W,V,b,le),V.side=br,V.needsUpdate=!0,v.renderBufferDirect(Y,O,W,V,b,le),V.side=Wi):v.renderBufferDirect(Y,O,W,V,b,le),b.onAfterRender(v,O,Y,W,V,le)}function St(b,O,Y){O.isScene!==!0&&(O=Ke);const W=x.get(b),V=y.state.lights,le=y.state.shadowsArray,ge=V.state.version,de=Ae.getParameters(b,V.state,le,O,Y),ve=Ae.getProgramCacheKey(de);let Le=W.programs;W.environment=b.isMeshStandardMaterial?O.environment:null,W.fog=O.fog,W.envMap=(b.isMeshStandardMaterial?j:Z).get(b.envMap||W.environment),W.envMapRotation=W.environment!==null&&b.envMap===null?O.environmentRotation:b.envMapRotation,Le===void 0&&(b.addEventListener("dispose",Re),Le=new Map,W.programs=Le);let Ge=Le.get(ve);if(Ge!==void 0){if(W.currentProgram===Ge&&W.lightsStateVersion===ge)return Bn(b,de),Ge}else de.uniforms=Ae.getUniforms(b),b.onBeforeCompile(de,v),Ge=Ae.acquireProgram(de,ve),Le.set(ve,Ge),W.uniforms=de.uniforms;const Oe=W.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Oe.clippingPlanes=ye.uniform),Bn(b,de),W.needsLights=Jt(b),W.lightsStateVersion=ge,W.needsLights&&(Oe.ambientLightColor.value=V.state.ambient,Oe.lightProbe.value=V.state.probe,Oe.directionalLights.value=V.state.directional,Oe.directionalLightShadows.value=V.state.directionalShadow,Oe.spotLights.value=V.state.spot,Oe.spotLightShadows.value=V.state.spotShadow,Oe.rectAreaLights.value=V.state.rectArea,Oe.ltc_1.value=V.state.rectAreaLTC1,Oe.ltc_2.value=V.state.rectAreaLTC2,Oe.pointLights.value=V.state.point,Oe.pointLightShadows.value=V.state.pointShadow,Oe.hemisphereLights.value=V.state.hemi,Oe.directionalShadowMap.value=V.state.directionalShadowMap,Oe.directionalShadowMatrix.value=V.state.directionalShadowMatrix,Oe.spotShadowMap.value=V.state.spotShadowMap,Oe.spotLightMatrix.value=V.state.spotLightMatrix,Oe.spotLightMap.value=V.state.spotLightMap,Oe.pointShadowMap.value=V.state.pointShadowMap,Oe.pointShadowMatrix.value=V.state.pointShadowMatrix),W.currentProgram=Ge,W.uniformsList=null,Ge}function ln(b){if(b.uniformsList===null){const O=b.currentProgram.getUniforms();b.uniformsList=tl.seqWithValue(O.seq,b.uniforms)}return b.uniformsList}function Bn(b,O){const Y=x.get(b);Y.outputColorSpace=O.outputColorSpace,Y.batching=O.batching,Y.batchingColor=O.batchingColor,Y.instancing=O.instancing,Y.instancingColor=O.instancingColor,Y.instancingMorph=O.instancingMorph,Y.skinning=O.skinning,Y.morphTargets=O.morphTargets,Y.morphNormals=O.morphNormals,Y.morphColors=O.morphColors,Y.morphTargetsCount=O.morphTargetsCount,Y.numClippingPlanes=O.numClippingPlanes,Y.numIntersection=O.numClipIntersection,Y.vertexAlphas=O.vertexAlphas,Y.vertexTangents=O.vertexTangents,Y.toneMapping=O.toneMapping}function Yt(b,O,Y,W,V){O.isScene!==!0&&(O=Ke),N.resetTextureUnits();const le=O.fog,ge=W.isMeshStandardMaterial?O.environment:null,de=F===null?v.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Js,ve=(W.isMeshStandardMaterial?j:Z).get(W.envMap||ge),Le=W.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ge=!!Y.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Oe=!!Y.morphAttributes.position,it=!!Y.morphAttributes.normal,Mt=!!Y.morphAttributes.color;let Ut=Ri;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(Ut=v.toneMapping);const Nt=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,Tt=Nt!==void 0?Nt.length:0,Be=x.get(W),gt=y.state.lights;if(Se===!0&&(Ve===!0||b!==G)){const gn=b===G&&W.id===k;ye.setState(W,b,gn)}let ht=!1;W.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==gt.state.version||Be.outputColorSpace!==de||V.isBatchedMesh&&Be.batching===!1||!V.isBatchedMesh&&Be.batching===!0||V.isBatchedMesh&&Be.batchingColor===!0&&V.colorTexture===null||V.isBatchedMesh&&Be.batchingColor===!1&&V.colorTexture!==null||V.isInstancedMesh&&Be.instancing===!1||!V.isInstancedMesh&&Be.instancing===!0||V.isSkinnedMesh&&Be.skinning===!1||!V.isSkinnedMesh&&Be.skinning===!0||V.isInstancedMesh&&Be.instancingColor===!0&&V.instanceColor===null||V.isInstancedMesh&&Be.instancingColor===!1&&V.instanceColor!==null||V.isInstancedMesh&&Be.instancingMorph===!0&&V.morphTexture===null||V.isInstancedMesh&&Be.instancingMorph===!1&&V.morphTexture!==null||Be.envMap!==ve||W.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ye.numPlanes||Be.numIntersection!==ye.numIntersection)||Be.vertexAlphas!==Le||Be.vertexTangents!==Ge||Be.morphTargets!==Oe||Be.morphNormals!==it||Be.morphColors!==Mt||Be.toneMapping!==Ut||Be.morphTargetsCount!==Tt)&&(ht=!0):(ht=!0,Be.__version=W.version);let zn=Be.currentProgram;ht===!0&&(zn=St(W,O,V));let ls=!1,kn=!1,na=!1;const wt=zn.getUniforms(),Cn=Be.uniforms;if(Me.useProgram(zn.program)&&(ls=!0,kn=!0,na=!0),W.id!==k&&(k=W.id,kn=!0),ls||G!==b){Me.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),wt.setValue(U,"projectionMatrix",b.projectionMatrix),wt.setValue(U,"viewMatrix",b.matrixWorldInverse);const Rn=wt.map.cameraPosition;Rn!==void 0&&Rn.setValue(U,Te.setFromMatrixPosition(b.matrixWorld)),ke.logarithmicDepthBuffer&&wt.setValue(U,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&wt.setValue(U,"isOrthographic",b.isOrthographicCamera===!0),G!==b&&(G=b,kn=!0,na=!0)}if(Be.needsLights&&(gt.state.directionalShadowMap.length>0&&wt.setValue(U,"directionalShadowMap",gt.state.directionalShadowMap,N),gt.state.spotShadowMap.length>0&&wt.setValue(U,"spotShadowMap",gt.state.spotShadowMap,N),gt.state.pointShadowMap.length>0&&wt.setValue(U,"pointShadowMap",gt.state.pointShadowMap,N)),V.isSkinnedMesh){wt.setOptional(U,V,"bindMatrix"),wt.setOptional(U,V,"bindMatrixInverse");const gn=V.skeleton;gn&&(gn.boneTexture===null&&gn.computeBoneTexture(),wt.setValue(U,"boneTexture",gn.boneTexture,N))}V.isBatchedMesh&&(wt.setOptional(U,V,"batchingTexture"),wt.setValue(U,"batchingTexture",V._matricesTexture,N),wt.setOptional(U,V,"batchingIdTexture"),wt.setValue(U,"batchingIdTexture",V._indirectTexture,N),wt.setOptional(U,V,"batchingColorTexture"),V._colorsTexture!==null&&wt.setValue(U,"batchingColorTexture",V._colorsTexture,N));const ti=Y.morphAttributes;if((ti.position!==void 0||ti.normal!==void 0||ti.color!==void 0)&&He.update(V,Y,zn),(kn||Be.receiveShadow!==V.receiveShadow)&&(Be.receiveShadow=V.receiveShadow,wt.setValue(U,"receiveShadow",V.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Cn.envMap.value=ve,Cn.flipEnvMap.value=ve.isCubeTexture&&ve.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&O.environment!==null&&(Cn.envMapIntensity.value=O.environmentIntensity),Cn.dfgLUT!==void 0&&(Cn.dfgLUT.value=Ky()),kn&&(wt.setValue(U,"toneMappingExposure",v.toneMappingExposure),Be.needsLights&&qt(Cn,na),le&&W.fog===!0&&Ee.refreshFogUniforms(Cn,le),Ee.refreshMaterialUniforms(Cn,W,Pe,be,y.state.transmissionRenderTarget[b.id]),tl.upload(U,ln(Be),Cn,N)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(tl.upload(U,ln(Be),Cn,N),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&wt.setValue(U,"center",V.center),wt.setValue(U,"modelViewMatrix",V.modelViewMatrix),wt.setValue(U,"normalMatrix",V.normalMatrix),wt.setValue(U,"modelMatrix",V.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const gn=W.uniformsGroups;for(let Rn=0,Cl=gn.length;Rn<Cl;Rn++){const wr=gn[Rn];te.update(wr,zn),te.bind(wr,zn)}}return zn}function qt(b,O){b.ambientLightColor.needsUpdate=O,b.lightProbe.needsUpdate=O,b.directionalLights.needsUpdate=O,b.directionalLightShadows.needsUpdate=O,b.pointLights.needsUpdate=O,b.pointLightShadows.needsUpdate=O,b.spotLights.needsUpdate=O,b.spotLightShadows.needsUpdate=O,b.rectAreaLights.needsUpdate=O,b.hemisphereLights.needsUpdate=O}function Jt(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(b,O,Y){const W=x.get(b);W.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),x.get(b.texture).__webglTexture=O,x.get(b.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:Y,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,O){const Y=x.get(b);Y.__webglFramebuffer=O,Y.__useDefaultFramebuffer=O===void 0};const Ni=U.createFramebuffer();this.setRenderTarget=function(b,O=0,Y=0){F=b,D=O,I=Y;let W=null,V=!1,le=!1;if(b){const de=x.get(b);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(U.FRAMEBUFFER,de.__webglFramebuffer),z.copy(b.viewport),B.copy(b.scissor),q=b.scissorTest,Me.viewport(z),Me.scissor(B),Me.setScissorTest(q),k=-1;return}else if(de.__webglFramebuffer===void 0)N.setupRenderTarget(b);else if(de.__hasExternalTextures)N.rebindTextures(b,x.get(b.texture).__webglTexture,x.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){const Ge=b.depthTexture;if(de.__boundDepthTexture!==Ge){if(Ge!==null&&x.has(Ge)&&(b.width!==Ge.image.width||b.height!==Ge.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");N.setupDepthRenderbuffer(b)}}const ve=b.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(le=!0);const Le=x.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Le[O])?W=Le[O][Y]:W=Le[O],V=!0):b.samples>0&&N.useMultisampledRTT(b)===!1?W=x.get(b).__webglMultisampledFramebuffer:Array.isArray(Le)?W=Le[Y]:W=Le,z.copy(b.viewport),B.copy(b.scissor),q=b.scissorTest}else z.copy(K).multiplyScalar(Pe).floor(),B.copy(J).multiplyScalar(Pe).floor(),q=he;if(Y!==0&&(W=Ni),Me.bindFramebuffer(U.FRAMEBUFFER,W)&&Me.drawBuffers(b,W),Me.viewport(z),Me.scissor(B),Me.setScissorTest(q),V){const de=x.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,Y)}else if(le){const de=O;for(let ve=0;ve<b.textures.length;ve++){const Le=x.get(b.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Le.__webglTexture,Y,de)}}else if(b!==null&&Y!==0){const de=x.get(b.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,de.__webglTexture,Y)}k=-1},this.readRenderTargetPixels=function(b,O,Y,W,V,le,ge,de=0){if(!(b&&b.isWebGLRenderTarget)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve){Me.bindFramebuffer(U.FRAMEBUFFER,ve);try{const Le=b.textures[de],Ge=Le.format,Oe=Le.type;if(!ke.textureFormatReadable(Ge)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ke.textureTypeReadable(Oe)){dt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=b.width-W&&Y>=0&&Y<=b.height-V&&(b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de),U.readPixels(O,Y,W,V,ie.convert(Ge),ie.convert(Oe),le))}finally{const Le=F!==null?x.get(F).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(b,O,Y,W,V,le,ge,de=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=x.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&ge!==void 0&&(ve=ve[ge]),ve)if(O>=0&&O<=b.width-W&&Y>=0&&Y<=b.height-V){Me.bindFramebuffer(U.FRAMEBUFFER,ve);const Le=b.textures[de],Ge=Le.format,Oe=Le.type;if(!ke.textureFormatReadable(Ge))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ke.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const it=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.bufferData(U.PIXEL_PACK_BUFFER,le.byteLength,U.STREAM_READ),b.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+de),U.readPixels(O,Y,W,V,ie.convert(Ge),ie.convert(Oe),0);const Mt=F!==null?x.get(F).__webglFramebuffer:null;Me.bindFramebuffer(U.FRAMEBUFFER,Mt);const Ut=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await x0(U,Ut,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,it),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,le),U.deleteBuffer(it),U.deleteSync(Ut),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,O=null,Y=0){const W=Math.pow(2,-Y),V=Math.floor(b.image.width*W),le=Math.floor(b.image.height*W),ge=O!==null?O.x:0,de=O!==null?O.y:0;N.setTexture2D(b,0),U.copyTexSubImage2D(U.TEXTURE_2D,Y,0,0,ge,de,V,le),Me.unbindTexture()};const os=U.createFramebuffer(),Qt=U.createFramebuffer();this.copyTextureToTexture=function(b,O,Y=null,W=null,V=0,le=null){le===null&&(V!==0?(qa("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=V,V=0):le=0);let ge,de,ve,Le,Ge,Oe,it,Mt,Ut;const Nt=b.isCompressedTexture?b.mipmaps[le]:b.image;if(Y!==null)ge=Y.max.x-Y.min.x,de=Y.max.y-Y.min.y,ve=Y.isBox3?Y.max.z-Y.min.z:1,Le=Y.min.x,Ge=Y.min.y,Oe=Y.isBox3?Y.min.z:0;else{const ti=Math.pow(2,-V);ge=Math.floor(Nt.width*ti),de=Math.floor(Nt.height*ti),b.isDataArrayTexture?ve=Nt.depth:b.isData3DTexture?ve=Math.floor(Nt.depth*ti):ve=1,Le=0,Ge=0,Oe=0}W!==null?(it=W.x,Mt=W.y,Ut=W.z):(it=0,Mt=0,Ut=0);const Tt=ie.convert(O.format),Be=ie.convert(O.type);let gt;O.isData3DTexture?(N.setTexture3D(O,0),gt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(N.setTexture2DArray(O,0),gt=U.TEXTURE_2D_ARRAY):(N.setTexture2D(O,0),gt=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);const ht=U.getParameter(U.UNPACK_ROW_LENGTH),zn=U.getParameter(U.UNPACK_IMAGE_HEIGHT),ls=U.getParameter(U.UNPACK_SKIP_PIXELS),kn=U.getParameter(U.UNPACK_SKIP_ROWS),na=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,Nt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Nt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Le),U.pixelStorei(U.UNPACK_SKIP_ROWS,Ge),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Oe);const wt=b.isDataArrayTexture||b.isData3DTexture,Cn=O.isDataArrayTexture||O.isData3DTexture;if(b.isDepthTexture){const ti=x.get(b),gn=x.get(O),Rn=x.get(ti.__renderTarget),Cl=x.get(gn.__renderTarget);Me.bindFramebuffer(U.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Cl.__webglFramebuffer);for(let wr=0;wr<ve;wr++)wt&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,x.get(b).__webglTexture,V,Oe+wr),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,x.get(O).__webglTexture,le,Ut+wr)),U.blitFramebuffer(Le,Ge,ge,de,it,Mt,ge,de,U.DEPTH_BUFFER_BIT,U.NEAREST);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(V!==0||b.isRenderTargetTexture||x.has(b)){const ti=x.get(b),gn=x.get(O);Me.bindFramebuffer(U.READ_FRAMEBUFFER,os),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,Qt);for(let Rn=0;Rn<ve;Rn++)wt?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ti.__webglTexture,V,Oe+Rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ti.__webglTexture,V),Cn?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,gn.__webglTexture,le,Ut+Rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,gn.__webglTexture,le),V!==0?U.blitFramebuffer(Le,Ge,ge,de,it,Mt,ge,de,U.COLOR_BUFFER_BIT,U.NEAREST):Cn?U.copyTexSubImage3D(gt,le,it,Mt,Ut+Rn,Le,Ge,ge,de):U.copyTexSubImage2D(gt,le,it,Mt,Le,Ge,ge,de);Me.bindFramebuffer(U.READ_FRAMEBUFFER,null),Me.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Cn?b.isDataTexture||b.isData3DTexture?U.texSubImage3D(gt,le,it,Mt,Ut,ge,de,ve,Tt,Be,Nt.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(gt,le,it,Mt,Ut,ge,de,ve,Tt,Nt.data):U.texSubImage3D(gt,le,it,Mt,Ut,ge,de,ve,Tt,Be,Nt):b.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,le,it,Mt,ge,de,Tt,Be,Nt.data):b.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,le,it,Mt,Nt.width,Nt.height,Tt,Nt.data):U.texSubImage2D(U.TEXTURE_2D,le,it,Mt,ge,de,Tt,Be,Nt);U.pixelStorei(U.UNPACK_ROW_LENGTH,ht),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,zn),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ls),U.pixelStorei(U.UNPACK_SKIP_ROWS,kn),U.pixelStorei(U.UNPACK_SKIP_IMAGES,na),le===0&&O.generateMipmaps&&U.generateMipmap(gt),Me.unbindTexture()},this.initRenderTarget=function(b){x.get(b).__webglFramebuffer===void 0&&N.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?N.setTextureCube(b,0):b.isData3DTexture?N.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?N.setTexture2DArray(b,0):N.setTexture2D(b,0),Me.unbindTexture()},this.resetState=function(){D=0,I=0,F=null,Me.reset(),fe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=ct._getUnpackColorSpace()}}let da,As,hd=typeof Symbol=="function"?Symbol():"_split",Gu,jy=()=>Gu||as.register(window.gsap),dd=typeof Intl<"u"&&"Segmenter"in Intl?new Intl.Segmenter:0,Ka=r=>typeof r=="string"?Ka(document.querySelectorAll(r)):"length"in r?Array.from(r).reduce((e,t)=>(typeof t=="string"?e.push(...Ka(t)):e.push(t),e),[]):[r],pd=r=>Ka(r).filter(e=>e instanceof HTMLElement),Hu=[],Mc=function(){},Jy={add:r=>r()},Qy=/\s+/g,md=new RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.","gu"),_l={left:0,top:0,width:0,height:0},eE=(r,e)=>{for(;++e<r.length&&r[e]===_l;);return r[e]||_l},_d=({element:r,html:e,ariaL:t,ariaH:n})=>{r.innerHTML=e,t?r.setAttribute("aria-label",t):r.removeAttribute("aria-label"),n?r.setAttribute("aria-hidden",n):r.removeAttribute("aria-hidden")},gd=(r,e)=>{if(e){let t=new Set(r.join("").match(e)||Hu),n=r.length,i,s,a,o;if(t.size)for(;--n>-1;){s=r[n];for(a of t)if(a.startsWith(s)&&a.length>s.length){for(i=0,o=s;a.startsWith(o+=r[n+ ++i])&&o.length<a.length;);if(i&&o.length===a.length){r[n]=a,r.splice(n+1,i);break}}}}return r},vd=r=>window.getComputedStyle(r).display==="inline"&&(r.style.display="inline-block"),ws=(r,e,t)=>e.insertBefore(typeof r=="string"?document.createTextNode(r):r,t),Wu=(r,e,t)=>{let n=e[r+"sClass"]||"",{tag:i="div",aria:s="auto",propIndex:a=!1}=e,o=r==="line"?"block":"inline-block",l=n.indexOf("++")>-1,c=u=>{let f=document.createElement(i),d=t.length+1;return n&&(f.className=n+(l?" "+n+d:"")),a&&f.style.setProperty("--"+r,d+""),s!=="none"&&f.setAttribute("aria-hidden","true"),i!=="span"&&(f.style.position="relative",f.style.display=o),f.textContent=u,t.push(f),f};return l&&(n=n.replace("++","")),c.collection=t,c},tE=(r,e,t,n)=>{let i=Wu("line",t,n),s=window.getComputedStyle(r).textAlign||"left";return(a,o)=>{let l=i("");for(l.style.textAlign=s,r.insertBefore(l,e[a]);a<o;a++)l.appendChild(e[a]);l.normalize()}},Pm=(r,e,t,n,i,s,a,o,l,c)=>{var u;let f=Array.from(r.childNodes),d=0,{wordDelimiter:h,reduceWhiteSpace:g=!0,prepareText:_}=e,m=r.getBoundingClientRect(),p=m,E=!g&&window.getComputedStyle(r).whiteSpace.substring(0,3)==="pre",T=0,M=t.collection,y,A,w,P,v,S,D,I,F,k,G,z,B,q,ee,R,ne,be;for(typeof h=="object"?(w=h.delimiter||h,A=h.replaceWith||""):A=h===""?"":h||" ",y=A!==" ";d<f.length;d++)if(P=f[d],P.nodeType===3){for(ee=P.textContent||"",g?ee=ee.replace(Qy," "):E&&(ee=ee.replace(/\n/g,A+`
`)),_&&(ee=_(ee,r)),P.textContent=ee,v=A||w?ee.split(w||A):ee.match(o)||Hu,ne=v[v.length-1],I=y?ne.slice(-1)===" ":!ne,ne||v.pop(),p=m,D=y?v[0].charAt(0)===" ":!v[0],D&&ws(" ",r,P),v[0]||v.shift(),gd(v,l),s&&c||(P.textContent=""),F=1;F<=v.length;F++)if(R=v[F-1],!g&&E&&R.charAt(0)===`
`&&((u=P.previousSibling)==null||u.remove(),ws(document.createElement("br"),r,P),R=R.slice(1)),!g&&R==="")ws(A,r,P);else if(R===" ")r.insertBefore(document.createTextNode(" "),P);else{if(y&&R.charAt(0)===" "&&ws(" ",r,P),T&&F===1&&!D&&M.indexOf(T.parentNode)>-1?(S=M[M.length-1],S.appendChild(document.createTextNode(n?"":R))):(S=t(n?"":R),ws(S,r,P),T&&F===1&&!D&&S.insertBefore(T,S.firstChild)),n)for(G=dd?gd([...dd.segment(R)].map(Pe=>Pe.segment),l):R.match(o)||Hu,be=0;be<G.length;be++)S.appendChild(G[be]===" "?document.createTextNode(" "):n(G[be]));if(s&&c){if(ee=P.textContent=ee.substring(R.length+1,ee.length),k=S.getBoundingClientRect(),k.top>p.top&&k.left<=p.left){for(z=r.cloneNode(),B=r.childNodes[0];B&&B!==S;)q=B,B=B.nextSibling,z.appendChild(q);r.parentNode.insertBefore(z,r),i&&vd(z)}p=k}(F<v.length||I)&&ws(F>=v.length?" ":y&&R.slice(-1)===" "?" "+A:A,r,P)}r.removeChild(P),T=0}else P.nodeType===1&&(a&&a.indexOf(P)>-1?(M.indexOf(P.previousSibling)>-1&&M[M.length-1].appendChild(P),T=P):(Pm(P,e,t,n,i,s,a,o,l,!0),T=0),i&&vd(P))};const Dm=class Lm{constructor(e,t){this.isSplit=!1,jy(),this.elements=pd(e),this.chars=[],this.words=[],this.lines=[],this.masks=[],this.vars=t,this.elements.forEach(a=>{var o;t.overwrite!==!1&&((o=a[hd])==null||o._data.orig.filter(({element:l})=>l===a).forEach(_d)),a[hd]=this}),this._split=()=>this.isSplit&&this.split(this.vars);let n=[],i,s=()=>{let a=n.length,o;for(;a--;){o=n[a];let l=o.element.offsetWidth;if(l!==o.width){o.width=l,this._split();return}}};this._data={orig:n,obs:typeof ResizeObserver<"u"&&new ResizeObserver(()=>{clearTimeout(i),i=setTimeout(s,200)})},Mc(this),this.split(t)}split(e){return(this._ctx||Jy).add(()=>{this.isSplit&&this.revert(),this.vars=e=e||this.vars||{};let{type:t="chars,words,lines",aria:n="auto",deepSlice:i=!0,smartWrap:s,onSplit:a,autoSplit:o=!1,specialChars:l,mask:c}=this.vars,u=t.indexOf("lines")>-1,f=t.indexOf("chars")>-1,d=t.indexOf("words")>-1,h=f&&!d&&!u,g=l&&("push"in l?new RegExp("(?:"+l.join("|")+")","gu"):l),_=g?new RegExp(g.source+"|"+md.source,"gu"):md,m=!!e.ignore&&pd(e.ignore),{orig:p,animTime:E,obs:T}=this._data,M;(f||d||u)&&(this.elements.forEach((y,A)=>{p[A]={element:y,html:y.innerHTML,ariaL:y.getAttribute("aria-label"),ariaH:y.getAttribute("aria-hidden")},n==="auto"?y.setAttribute("aria-label",(y.textContent||"").trim()):n==="hidden"&&y.setAttribute("aria-hidden","true");let w=[],P=[],v=[],S=f?Wu("char",e,w):null,D=Wu("word",e,P),I,F,k,G;if(Pm(y,e,D,S,h,i&&(u||h),m,_,g,!1),u){let z=Ka(y.childNodes),B=tE(y,z,e,v),q,ee=[],R=0,ne=z.map(Fe=>Fe.nodeType===1?Fe.getBoundingClientRect():_l),be=_l,Pe;for(I=0;I<z.length;I++)q=z[I],q.nodeType===1&&(q.nodeName==="BR"?((!I||z[I-1].nodeName!=="BR")&&(ee.push(q),B(R,I+1)),R=I+1,be=eE(ne,I)):(Pe=ne[I],I&&Pe.top>be.top&&Pe.left<be.left+be.width-1&&(B(R,I),R=I),be=Pe));R<I&&B(R,I),ee.forEach(Fe=>{var We;return(We=Fe.parentNode)==null?void 0:We.removeChild(Fe)})}if(!d){for(I=0;I<P.length;I++)if(F=P[I],f||!F.nextSibling||F.nextSibling.nodeType!==3)if(s&&!u){for(k=document.createElement("span"),k.style.whiteSpace="nowrap";F.firstChild;)k.appendChild(F.firstChild);F.replaceWith(k)}else F.replaceWith(...F.childNodes);else G=F.nextSibling,G&&G.nodeType===3&&(G.textContent=(F.textContent||"")+(G.textContent||""),F.remove());P.length=0,y.normalize()}this.lines.push(...v),this.words.push(...P),this.chars.push(...w)}),c&&this[c]&&this.masks.push(...this[c].map(y=>{let A=y.cloneNode();return y.replaceWith(A),A.appendChild(y),y.className&&(A.className=y.className.trim()+"-mask"),A.style.overflow="clip",A}))),this.isSplit=!0,As&&u&&(o?As.addEventListener("loadingdone",this._split):As.status==="loading"&&console.warn("SplitText called before fonts loaded")),(M=a&&a(this))&&M.totalTime&&(this._data.anim=E?M.totalTime(E):M),u&&o&&this.elements.forEach((y,A)=>{p[A].width=y.offsetWidth,T&&T.observe(y)})}),this}kill(){let{obs:e}=this._data;e&&e.disconnect(),As?.removeEventListener("loadingdone",this._split)}revert(){var e,t;if(this.isSplit){let{orig:n,anim:i}=this._data;this.kill(),n.forEach(_d),this.chars.length=this.words.length=this.lines.length=n.length=this.masks.length=0,this.isSplit=!1,i&&(this._data.animTime=i.totalTime(),i.revert()),(t=(e=this.vars).onRevert)==null||t.call(e,this)}return this}static create(e,t){return new Lm(e,t)}static register(e){da=da||e||window.gsap,da&&(Ka=da.utils.toArray,Mc=da.core.context||Mc),!Gu&&window.innerWidth>0&&(As=document.fonts,Gu=!0)}};Dm.version="3.14.2";let as=Dm;const xd={vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    #define Rot(a) mat2(cos(a),-sin(a),sin(a),cos(a))
    #define antialiasing(n) n/min(iResolution.y,iResolution.x)
    #define S(d,b) smoothstep(antialiasing(1.5),-antialiasing(1.5),d - b)
    #define B(p,s) max(abs(p).x-s.x,abs(p).y-s.y)
    #define BASE_FONT_SIZE 0.08

    uniform vec2 iResolution;
    uniform float iTime;
    uniform vec3 uColorBg;
    uniform vec3 uColorFg;
    varying vec2 vUv;

    int cA[15] = int[](1,1,1,0,0,1,1,1,1,1,0,1,1,1,1);
    int cB[15] = int[](1,1,1,1,0,1,1,1,0,1,0,1,1,1,1);
    int cC[15] = int[](1,1,1,1,0,0,1,0,0,1,0,0,1,1,1);
    int cD[15] = int[](1,1,0,1,0,1,1,0,1,1,0,1,1,1,0);
    int cE[15] = int[](1,1,1,1,0,0,1,1,0,1,0,0,1,1,1);
    int cF[15] = int[](1,1,1,1,0,0,1,1,0,1,0,0,1,0,0);
    int cG[15] = int[](1,1,1,1,0,0,1,0,1,1,0,1,1,1,1);
    int cH[15] = int[](1,0,1,1,0,1,1,1,1,1,0,1,1,0,1);
    int cI[15] = int[](0,1,0,0,0,0,0,1,0,0,1,0,0,1,0);
    int cJ[15] = int[](0,1,1,0,0,1,0,0,1,0,0,1,1,1,1);
    int cK[15] = int[](1,0,1,1,0,1,1,1,0,1,0,1,1,0,1);
    int cL[15] = int[](1,0,0,1,0,0,1,0,0,1,0,0,1,1,1);
    int cM[15] = int[](1,0,1,1,1,1,1,0,1,1,0,1,1,0,1);
    int cN[15] = int[](1,1,1,1,0,1,1,0,1,1,0,1,1,0,1);
    int cO[15] = int[](1,1,1,1,0,1,1,0,1,1,0,1,1,1,1);
    int cP[15] = int[](1,1,1,1,0,1,1,1,1,1,0,0,1,0,0);
    int cQ[15] = int[](1,1,1,1,0,1,1,0,1,1,1,1,0,0,1);
    int cR[15] = int[](1,1,1,1,0,1,1,1,0,1,0,1,1,0,1);
    int cS[15] = int[](1,1,1,1,0,0,1,1,1,0,0,1,1,1,1);
    int cT[15] = int[](1,1,1,0,1,0,0,1,0,0,1,0,0,1,0);
    int cU[15] = int[](1,0,1,1,0,1,1,0,1,1,0,1,1,1,1);
    int cV[15] = int[](1,0,1,1,0,1,1,0,1,1,1,0,1,0,0);
    int cW[15] = int[](1,0,1,1,0,1,1,0,1,1,1,1,1,0,1);
    int cX[15] = int[](1,0,1,1,0,1,0,1,0,1,0,1,1,0,1);
    int cY[15] = int[](1,0,1,1,0,1,1,1,1,0,1,0,0,1,0);
    int cZ[15] = int[](1,1,1,0,0,1,0,1,0,1,0,0,1,1,1);
    int c0[15] = int[](1,1,1,1,0,1,1,0,1,1,0,1,1,1,1);
    int c1[15] = int[](0,1,0,0,1,0,0,1,0,0,1,0,0,1,0);
    int c2[15] = int[](1,1,1,0,0,1,1,1,1,1,0,0,1,1,1);
    int c3[15] = int[](1,1,1,0,0,1,1,1,1,0,0,1,1,1,1);
    int c4[15] = int[](1,0,0,1,0,0,1,1,0,1,1,1,0,1,0);
    int c5[15] = int[](1,1,1,1,0,0,1,1,1,0,0,1,1,1,1);
    int c6[15] = int[](1,1,1,1,0,0,1,1,1,1,0,1,1,1,1);
    int c7[15] = int[](1,1,1,0,0,1,0,0,1,0,0,1,0,0,1);
    int c8[15] = int[](1,1,1,1,0,1,1,1,1,1,0,1,1,1,1);
    int c9[15] = int[](1,1,1,1,0,1,1,1,1,0,0,1,1,1,1);

    float smin( float d1, float d2, float k ) {
        float h = clamp( 0.5 + 0.5*(d2-d1)/k, 0.0, 1.0 );
        return mix( d2, d1, h ) - k*h*(1.0-h); 
    }

    float baseFontShape(vec2 p, float i){
        float size = BASE_FONT_SIZE;
        float d = length(p)-(size-(cos(10.*(100.+iTime)*(i+1.0)*.2)*(size*0.5)));
        float d2 = length(p)-size;
        d = min(d,d2);
        return d;
    }

    float chars(vec2 p, int data[15], float n){
        vec2 prevP  = p;
        float size = BASE_FONT_SIZE;
        float d = 10.;
        float k = size+0.05;
        for(int i = 0; i<15; i++){
            p = prevP;
            p.x-=(float(i%3)*(size*2.))-(size*2.);
            p.y+=(float(i/3)*(size*2.))-(size*4.);
            
            if(data[i] == 1){
                float d2 = baseFontShape(p,sin(float(i))*n);
                d = smin(d,d2,k);
            }
        }
        return d;
    }

    float drawFont(vec2 p, int char, float n){
        float d = 10.;
        if(char == 0) {
            d = chars(p,c0,n);
        } else if(char == 1) {
            d = chars(p,c1,n);
        } else if(char == 2) {
            d = chars(p,c2,n);
        } else if(char == 3) {
            d = chars(p,c3,n);
        } else if(char == 4) {
            d = chars(p,c4,n);
        } else if(char == 5) {
            d = chars(p,c5,n);
        } else if(char == 6) {
            d = chars(p,c6,n);
        } else if(char == 7) {
            d = chars(p,c7,n);
        } else if(char == 8) {
            d = chars(p,c8,n);
        } else if(char == 9) {
            d = chars(p,c9,n);
        } else if(char == 10) {
            d = chars(p,cA,n);
        } else if(char == 11) {
            d = chars(p,cB,n);
        } else if(char == 12) {
            d = chars(p,cC,n);
        } else if(char == 13) {
            d = chars(p,cD,n);
        } else if(char == 14) {
            d = chars(p,cE,n);
        } else if(char == 15) {
            d = chars(p,cF,n);
        } else if(char == 16) {
            d = chars(p,cG,n);
        } else if(char == 17) {
            d = chars(p,cH,n);
        } else if(char == 18) {
            d = chars(p,cI,n);
        } else if(char == 19) {
            d = chars(p,cJ,n);
        } else if(char == 20) {
            d = chars(p,cK,n);
        } else if(char == 21) {
            d = chars(p,cL,n);
        } else if(char == 22) {
            d = chars(p,cM,n);
        } else if(char == 23) {
            d = chars(p,cN,n);
        } else if(char == 24) {
            d = chars(p,cO,n);
        } else if(char == 25) {
            d = chars(p,cP,n);
        } else if(char == 26) {
            d = chars(p,cQ,n);
        } else if(char == 27) {
            d = chars(p,cR,n);
        } else if(char == 28) {
            d = chars(p,cS,n);
        } else if(char == 29) {
            d = chars(p,cT,n);
        } else if(char == 30) {
            d = chars(p,cU,n);
        } else if(char == 31) {
            d = chars(p,cV,n);
        } else if(char == 32) {
           d = chars(p,cW,n);
        } else if(char == 33) {
           d = chars(p,cX,n);
        } else if(char == 34) {
           d = chars(p,cY,n);
        } else if(char == 35) {
           d = chars(p,cZ,n);
        }
        
        return d;
    }

    float backOut(float t) {
      float f = 1.0 - t;
      return 1.0 - (pow(f, 3.0) - f * sin(f * 3.1415));
    }

    float cubicInOut(float t) {
      return t < 0.5
        ? 4.0 * t * t * t
        : 0.5 * pow(2.0 * t - 2.0, 3.0) + 1.0;
    }

    float getTime(float t, float duration){
        return clamp(t,0.0,duration)/duration;
    }

    float numberAnim(vec2 p, float speed, float n){
        float morphVal = 0.;
        float frame = mod(iTime*speed,10.0);
        float time = frame;
        
        float duration = 0.7;
        float d = drawFont(p,0,n);
        if(frame>=0. && frame<1.){
            time = getTime(time,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,0,n),drawFont(p,1,n),morphVal);
        } else if(frame>=1. && frame<2.){
            time = getTime(time-1.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,1,n),drawFont(p,2,n),morphVal);
        } else if(frame>=2. && frame<3.){
            time = getTime(time-2.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,2,n),drawFont(p,3,n),morphVal);
        } else if(frame>=3. && frame<4.){
            time = getTime(time-3.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,3,n),drawFont(p,4,n),morphVal);
        } else if(frame>=4. && frame<5.){
            time = getTime(time-4.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,4,n),drawFont(p,5,n),morphVal);
        } else if(frame>=5. && frame<6.){
            time = getTime(time-5.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,5,n),drawFont(p,6,n),morphVal);
        } else if(frame>=6. && frame<7.){
            time = getTime(time-6.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,6,n),drawFont(p,7,n),morphVal);
        } else if(frame>=7. && frame<8.){
            time = getTime(time-7.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,7,n),drawFont(p,8,n),morphVal);
        } else if(frame>=8. && frame<9.){
            time = getTime(time-8.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,8,n),drawFont(p,9,n),morphVal);
        } else if(frame>=9. && frame<10.){
            time = getTime(time-9.,duration);
            morphVal = backOut(time);
            d = mix(drawFont(p,9,n),drawFont(p,0,n),morphVal);
        }

        return d;
    }

    float random (vec2 p) {
        return fract(sin(dot(p.xy, vec2(12.9898,78.233)))* 43758.5453123);
    }

    float dots(vec2 p){
        float size = BASE_FONT_SIZE;
        p = mod(p,size)-(size*0.5);
        float d = length(p)-0.002;
        return d;
    }

    float plus(vec2 p){
        float d = min(B(p,vec2(0.001,0.015)),B(p,vec2(0.015,0.001)));
        return d;
    }

   void main() {
    vec2 fragCoord = vUv * iResolution;
    vec2 p = (fragCoord-0.5*iResolution.xy)/iResolution.y;
    vec2 prevP = p;
    vec3 col = uColorFg;
    
    p = prevP;
    
    p.x+=1.;
    p.y+=1.;
    p*=2.5;
    p.y-=100.+iTime*0.5;
    vec2 gv = fract(p)-0.5;
    vec2 id = floor(p);

    float n = random(id)*35.0;
    int char = int(n);
    
    float d = 10.;
    float colorVariation = random(prevP*(iTime+100.));
    vec3 fontColor = mix(uColorBg * 0.5, uColorBg, colorVariation);
    
    if(char < 15){
        d = numberAnim(gv,float(n*0.3),sin(n));
        col = mix(col,fontColor,S(d,0.));
    } else {
        d = drawFont(gv,char,sin(n));
        col = mix(col,fontColor,S(d,0.));
    }
    col = mix(col,uColorBg * 0.6,S(abs(d)-0.003,0.));
    
    p = prevP; 
    
    gl_FragColor = vec4(col,1.0);
}
  `};Je.registerPlugin(as);const Sd={colors:{bg:"#e30613",fg:"#000000"}},Za=[{label:"Index",icon:"compass-sharp",href:"/"},{label:"Lab",icon:"cube-sharp",href:"/lab"},{label:"Archive",icon:"laptop-sharp",href:"/work"},{label:"Record 01",icon:"flash-sharp",href:"/project"},{label:"Connect",icon:"paper-plane-sharp",href:"/contact"}];let Vs=!1,zo=!1,es={},Yr=null,gl=[],yc=[],Xu,Im,vl,xl,Md;document.addEventListener("DOMContentLoaded",()=>{es=Um();const r=document.querySelector(".circular-menu"),e=document.querySelector(".joystick"),t=document.querySelector(".menu-overlay-nav"),n=document.querySelector(".menu-overlay-footer");r.style.width=`${es.menuSize}px`,r.style.height=`${es.menuSize}px`,Je.set(e,{scale:0,x:0,y:0}),Je.set([t,n],{opacity:0}),Za.forEach((i,s)=>{const a=sE(i,s,Za.length);a.addEventListener("mouseenter",()=>{Vs&&new Audio("/sfx/menu-select.mp3").play().catch(()=>{})}),a.addEventListener("click",o=>{nE(a.href)&&(o.preventDefault(),o.stopPropagation(),o.stopImmediatePropagation(),Vs&&ko())},{capture:!0}),r.appendChild(a)}),document.querySelector(".menu-toggle-btn").addEventListener("click",ko),document.querySelector(".close-btn").addEventListener("click",ko),Yr=lE(),Yr&&Yr(),rE(),window.toggleMenu=ko,window.addEventListener("resize",()=>{Nm(),oE()})});function nE(r){if(!r)return!0;let e=window.location.pathname;e=e.replace(/\.html$/,"").replace(/\/$/,"")||"/",e==="/index"&&(e="/");let t=r.trim();return t==="/"||t==="/index"||t==="/index.html"||t==="index.html"||!t?t="/":(t.startsWith("/")||(t="/"+t),t=t.replace(/\.html$/,"").replace(/\/$/,"")),e===t}function iE(r){as.create(r,{type:"chars",autoSplit:!0,onSplit(e){Je.set(e.chars,{opacity:0}),gl.push(e)}})}function yd(r=!1){yc.forEach(e=>e.kill()),yc=[],gl.forEach(e=>{if(!e||!e.chars)return;const t=Je.to(e.chars,{opacity:r?0:1,duration:.05,ease:"power2.inOut",stagger:{amount:.5,each:.1,from:"random"}});yc.push(t)})}function Um(){const r=window.innerWidth,e=window.innerHeight,t=r<1e3,n=Math.min(r*.9,e*.9),i=t?Math.min(n,480):700;return{menuSize:i,center:i/2,innerRadius:i*0,outerRadius:i*.42,contentRadius:i*.28}}function Ed(r){const e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(r);return e?{r:parseInt(e[1],16)/255,g:parseInt(e[2],16)/255,b:parseInt(e[3],16)/255}:{r:0,g:0,b:0}}function rE(){const r=document.getElementById("menu-canvas");Xu=new X0,Im=new Df(-1,1,1,-1,0,1),vl=new Zy({canvas:r,antialias:!1,alpha:!1}),vl.setPixelRatio(Math.min(window.devicePixelRatio,2));const e=new no(2,2),t=Ed(Sd.colors.bg),n=Ed(Sd.colors.fg);xl=new vi({vertexShader:xd.vertexShader,fragmentShader:xd.fragmentShader,uniforms:{iTime:{value:0},iResolution:{value:new xt},uColorBg:{value:new X(t.r,t.g,t.b)},uColorFg:{value:new X(n.r,n.g,n.b)}}}),Md=new Ui(e,xl),Xu.add(Md),Nm(),Fm()}function Nm(){const r=window.innerWidth,e=window.innerHeight;vl.setSize(r,e),xl.uniforms.iResolution.value.set(r,e)}function Fm(){xl.uniforms.iTime.value+=.016,vl.render(Xu,Im),requestAnimationFrame(Fm)}function Om(r,e){const{menuSize:t,center:n,innerRadius:i,outerRadius:s,contentRadius:a}=es,o=360/e,l=o*r,c=l+o/2,u=l,f=l+o,d=n+i*Math.cos((u-90)*Math.PI/180),h=n+i*Math.sin((u-90)*Math.PI/180),g=n+s*Math.cos((u-90)*Math.PI/180),_=n+s*Math.sin((u-90)*Math.PI/180),m=n+i*Math.cos((f-90)*Math.PI/180),p=n+i*Math.sin((f-90)*Math.PI/180),E=n+s*Math.cos((f-90)*Math.PI/180),T=n+s*Math.sin((f-90)*Math.PI/180),M=f-u>180?1:0,y=[`M ${d} ${h}`,`L ${g} ${_}`,`A ${s} ${s} 0 ${M} 1 ${E} ${T}`,`L ${m} ${p}`,`A ${i} ${i} 0 ${M} 0 ${d} ${h}`,"Z"].join(" "),A=n+a*Math.cos((c-90)*Math.PI/180),w=n+a*Math.sin((c-90)*Math.PI/180);return{menuSize:t,pathData:y,contentX:A,contentY:w}}function sE(r,e,t){const n=document.createElement("a");n.className="menu-segment",n.href=r.href;const{menuSize:i,pathData:s,contentX:a,contentY:o}=Om(e,t);return n.style.clipPath=`path('${s}')`,n.style.width=`${i}px`,n.style.height=`${i}px`,n.innerHTML=`
    <div class="segment-content" style="left: ${a}px; top: ${o}px; transform: translate(-50%, -50%);">
      <ion-icon name="${r.icon}"></ion-icon>
      <div class="label">${r.label}</div>
    </div>
  `,n}function aE(r,e,t){const{menuSize:n,pathData:i,contentX:s,contentY:a}=Om(e,t);r.style.clipPath=`path('${i}')`,r.style.width=`${n}px`,r.style.height=`${n}px`;const o=r.querySelector(".segment-content");o.style.left=`${s}px`,o.style.top=`${a}px`}function oE(){es=Um();const r=document.querySelector(".circular-menu");r.style.width=`${es.menuSize}px`,r.style.height=`${es.menuSize}px`,document.querySelectorAll(".menu-segment").forEach((t,n)=>{aE(t,n,Za.length)})}function ko(){if(zo)return;const r=document.querySelector(".menu-overlay"),e=document.querySelectorAll(".menu-segment"),t=document.querySelector(".joystick"),n=document.querySelector(".menu-overlay-nav"),i=document.querySelector(".menu-overlay-footer");if(zo=!0,Vs)Vs=!1,new Audio("/sfx/menu-close.mp3").play(),yd(!0),setTimeout(()=>{Je.set([n,i],{opacity:0})},600),Je.to(t,{scale:0,x:0,y:0,duration:.3,delay:.2,ease:"back.in(1.7)",onComplete:()=>{Yr&&Yr()}}),[...Array(e.length).keys()].sort(()=>Math.random()-.5).forEach((s,a)=>{const o=e[s];Je.to(o,{opacity:0,duration:.05,delay:a*.05,repeat:2,yoyo:!0,ease:"power2.inOut",onComplete:()=>Je.set(o,{opacity:0})})}),Je.to(r,{opacity:0,duration:.3,delay:.6,ease:"power2.out",onComplete:()=>{r.style.pointerEvents="none",zo=!1}});else{Vs=!0,new Audio("/sfx/menu-open.mp3").play(),Yr&&Yr(),Je.to(r,{opacity:1,duration:.3,ease:"power2.out",onStart:()=>r.style.pointerEvents="all"}),Je.to(t,{scale:1,x:0,y:0,duration:.4,delay:.2,ease:"back.out(1.7)"});const s=n?.querySelectorAll(".menu-overlay-items a"),a=i?.querySelectorAll("a"),o=[...s||[],...a||[]];gl.forEach(l=>{l&&l.revert&&l.revert()}),gl=[],Je.set([n,i],{opacity:1}),o.forEach(l=>iE(l)),setTimeout(()=>yd(!1),300),[...Array(e.length).keys()].sort(()=>Math.random()-.5).forEach((l,c)=>{const u=e[l];Je.set(u,{opacity:0}),Je.to(u,{opacity:1,duration:.075,delay:c*.075,repeat:3,yoyo:!0,ease:"power2.inOut",onComplete:()=>{Je.set(u,{opacity:1}),l===e.length-1&&(zo=!1)}})})}}function lE(){const r=document.querySelector(".joystick");let e=!1,t=0,n=0,i=0,s=0,a=null;function o(){if(t+=(i-t)*.15,n+=(s-n)*.15,Je.set(r,{x:t,y:n}),e&&Math.sqrt(t*t+n*n)>20){const c=Math.atan2(n,t)*(180/Math.PI),u=Math.floor((c+90+360)%360/(360/Za.length))%Za.length,f=document.querySelectorAll(".menu-segment")[u];f!==a&&(a&&(a.style.animation="",a.querySelector(".segment-content").style.animation="",a.style.zIndex=""),a=f,f.style.animation="flickerHover 350ms ease-in-out forwards",f.querySelector(".segment-content").style.animation="contentFlickerHover 350ms ease-in-out forwards",f.style.zIndex="10",Vs&&new Audio("/sfx/menu-select.mp3").play().catch(()=>{}))}else a&&(a.style.animation="",a.querySelector(".segment-content").style.animation="",a.style.zIndex="",a=null);requestAnimationFrame(o)}function l(c){e=!0;const u=r.getBoundingClientRect(),f=u.left+u.width/2,d=u.top+u.height/2;function h(_){if(!e)return;const m=_.clientX??_.touches?.[0]?.clientX,p=_.clientY??_.touches?.[0]?.clientY;if(m===void 0||p===void 0)return;const E=m-f,T=p-d,M=Math.sqrt(E*E+T*T),y=100*.25;if(M<=20)i=s=0;else if(M>y){const A=y/M;i=E*A,s=T*A}else i=E,s=T;_.preventDefault()}function g(){e=!1,i=s=0,document.removeEventListener("mousemove",h),document.removeEventListener("mouseup",g),document.removeEventListener("touchmove",h),document.removeEventListener("touchend",g)}document.addEventListener("mousemove",h),document.addEventListener("mouseup",g),document.addEventListener("touchmove",h,{passive:!1}),document.addEventListener("touchend",g),c.preventDefault()}return r.addEventListener("mousedown",l),r.addEventListener("touchstart",l,{passive:!1}),o(),function(){t=0,n=0,i=0,s=0,Je.set(r,{x:0,y:0})}}Je.registerPlugin($e,as);document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll("[data-animate-variant]").forEach(e=>Je.set(e,{opacity:0})),document.fonts.ready.then(()=>cE())});function cE(){const r=document.querySelector(".preloader"),e=sessionStorage.getItem("preloaderSeen")==="true",t=!!r&&!e;document.querySelectorAll("[data-animate-variant]").forEach(i=>{const s=i.getAttribute("data-animate-variant");s==="slide"&&uE(i,t),s==="flicker"&&fE(i,t),s==="diffuse"&&hE(i,t)})}function uE(r,e){const t=r.getAttribute("data-animate-on-scroll")!=="false",n=parseFloat(r.getAttribute("data-animate-stagger"))||.1,i=r.getAttribute("data-animate-type")||"lines";let s=parseFloat(r.getAttribute("data-animate-delay"))||0;e&&!t&&(s+=5.5),as.create(r,{type:i,mask:i,autoSplit:!0,linesClass:"line",wordsClass:"word",onSplit(a){const o=i==="words"?a.words:a.lines;Je.set(o,{yPercent:100}),Je.set(r,{opacity:1});const l=Je.to(o,{yPercent:0,duration:.75,ease:"power3.out",delay:s,stagger:n,paused:t});t?$e.create({trigger:r,start:"top 70%",animation:l,toggleActions:"play none none none"}):l.play()}})}function fE(r,e){const t=r.getAttribute("data-animate-on-scroll")!=="false";let n=parseFloat(r.getAttribute("data-animate-delay"))||0;e&&!t&&(n+=5.5),as.create(r,{type:"chars",autoSplit:!0,onSplit(i){Je.set(i.chars,{opacity:0}),Je.set(r,{opacity:1});const s=Je.to(i.chars,{opacity:1,duration:.05,ease:"power2.inOut",delay:n,stagger:{amount:.5,each:.1,from:"random"},paused:t});t?$e.create({trigger:r,start:"top 85%",animation:s,toggleActions:"play none none none"}):s.play()}})}function hE(r,e){const t=r.getAttribute("data-animate-on-scroll")!=="false";let n=parseFloat(r.getAttribute("data-animate-delay"))||0;e&&!t&&(n+=5.5),as.create(r,{type:"words",autoSplit:!0,wordsClass:"word",onSplit(i){const s=i.words;s.forEach(o=>{o.style.filter="blur(75px)",o.style.webkitFilter="blur(75px)"}),Je.set(s,{filter:"blur(75px)",opacity:0}),Je.set(r,{opacity:1});const a=Je.to(s,{filter:"blur(0px)",opacity:1,duration:2,ease:"power3.out",delay:n,paused:t,onComplete:()=>{Je.set(s,{filter:"blur(0px)",opacity:1}),s.forEach(o=>{o.style.filter="blur(0px)",o.style.webkitFilter="blur(0px)"})}});t?$e.create({trigger:r,start:"top 85%",animation:a,toggleActions:"play none none none"}):a.play()}})}export{Eh as G,Ui as M,Df as O,no as P,X0 as S,An as T,X as V,Zy as W,vi as a,$e as b,as as c,mi as d,xt as e,Je as g};
