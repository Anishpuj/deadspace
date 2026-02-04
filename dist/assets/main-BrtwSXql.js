import{g as i,W as S,S as T,O as z,P as B,a as P,V as F,M}from"./animated-copy-BO0XT191.js";document.addEventListener("DOMContentLoaded",C);function C(){const e=sessionStorage.getItem("preloaderSeen")==="true",o=document.querySelector(".preloader");if(o){if(e){o.style.display="none";return}R()}}function R(){const e=document.querySelector(".progress-bar-indicator"),o=document.querySelector(".progress-bar-copy span"),n=document.querySelector(".progress-bar");if(!e||!o||!n)return;i.to(n,{opacity:1,duration:.075,ease:"power2.inOut",delay:.5,repeat:1,yoyo:!0,onComplete:()=>{i.set(n,{opacity:1}),s()}});function s(){let t=0;const r=5;let a=0;const c=U(r);function m(){if(a>=r){q();return}const h=c[a],v=Math.min(t+h,100),b=200+Math.random()*400;setTimeout(()=>{i.to(e,{"--progress":v/100,duration:.5,ease:"power2.out",onUpdate:()=>{const w=Math.round(i.getProperty(e,"--progress")*100);o.textContent=`${w}%`},onComplete:()=>{t=v,a++,m()}})},b)}m()}}function U(e){const o=[];let n=100;const s=30;for(let t=0;t<e-1;t++){const r=Math.min(s,n-(e-1-t)),a=Math.max(5,Math.floor(n/(e-t)*.5)),c=Math.floor(Math.random()*(r-a))+a;o.push(c),n-=c}return o.push(n),o.sort(()=>Math.random()-.5)}function q(){const e=document.querySelector(".preloader"),o=document.querySelector(".progress-bar"),n=document.querySelectorAll(".preloader-block");e&&(sessionStorage.setItem("preloaderSeen","true"),i.to(o,{opacity:0,duration:.075,ease:"power2.inOut",delay:.3,repeat:1,yoyo:!0,onComplete:()=>{i.set(o,{opacity:0}),setTimeout(()=>{const s=[...n].sort(()=>Math.random()-.5);s.forEach((t,r)=>{i.to(t,{opacity:0,duration:.075,ease:"power2.inOut",delay:r*.025,repeat:1,yoyo:!0,onComplete:()=>{i.set(t,{opacity:0}),r===s.length-1&&(e.style.display="none")}})})},200)}}))}const I=document.getElementById("skyline"),E=/iPhone|iPad|iPod|Android/i.test(navigator.userAgent),L=E?1:1.25,l=new S({canvas:I,antialias:!1,powerPreference:"high-performance",stencil:!1,depth:!1}),p=new T,O=new z(-1,1,1,-1,0,1),g=new B(2,2),u=new P({uniforms:{iTime:{value:0},iResolution:{value:new F}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = vec4(position, 1.0);
    }
  `,fragmentShader:`
    #ifdef GL_FRAGMENT_PRECISION_HIGH
      precision highp float;
    #else
      precision mediump float;
    #endif

    uniform float iTime;
    uniform vec3 iResolution;
    varying vec2 vUv;

    uint seed = 31713U;

    float rand(void) {
      seed = (seed << 13U) ^ seed;
      seed = seed * (seed * seed * 15731U + 789221U) + 1376312589U;
      uint seed2 = seed * seed;
      return float(seed2&0x7fffffffU)/float(0x7fffffffU);
    }

    float Polygon(vec2 uv, float h) {
      float mid = (rand()-.5)*exp2(-h*2.);
      float f = abs(uv.y-rand()+.5)-rand()-2.;
      f = max(f,abs(uv.x-mid)-rand()-.5+h*.4);
      f = max(f,abs(dot(uv,vec2(1,1)/sqrt(2.))-rand()+.5)-rand()-1.);
      f = max(f,abs(dot(uv,vec2(1,-1)/sqrt(2.))-rand()+.5)-rand()-1.);
      return f;
    }

    vec3 Buildings(vec2 uv, int layer) {
      seed = uint(2. + uv.x/4.);
      uv.x = (fract(uv.x/4.)-.5)*4.;
      
      bool cull = (pow(float(layer+1)/8.,.3) < rand());
      seed += 0x1001U*uint(layer);
      
      float a = Polygon(uv-vec2(0,0), 0.);
      float b = Polygon(uv-vec2(0,2), .5);
      float c = Polygon(uv-vec2(0,4), 1.);
      if (cull) { a = 1.; b = 1.; c = 1.; }
      
      a = min(a, uv.y+.5);
      
      vec3 f = vec3(a,min(a,b),min(min(a,b),c)).zyx;
      vec3 col = vec3(.5+.5*f/(.01+abs(f)));
      
      return vec3(dot(col,vec3(.985,.01,.005)));
    }

    void main() {
      vec2 fragCoord = vUv * iResolution.xy;
      vec2 uv = (fragCoord-iResolution.xy*vec2(.5,.5))/iResolution.y;
      
      uv *= 10.;
      uv.y += 3.;
      uv.x -= 8.;
      
      vec3 color = vec3(1);
      
      const float size = .5;
      const float fog = .15;
      const float baseFog = 0.075; 
      
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*0.)+iTime*vec2(4,0),0), exp2(-fog*0.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*1.)+iTime*vec2(4,0),1), exp2(-fog*1.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*2.)+iTime*vec2(4,0),2), exp2(-fog*2.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*3.)+iTime*vec2(4,0),3), exp2(-fog*3.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*4.)+iTime*vec2(4,0),4), exp2(-fog*4.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*5.)+iTime*vec2(4,0),5), exp2(-fog*5.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*6.)+iTime*vec2(4,0),6), exp2(-fog*6.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*7.)+iTime*vec2(4,0),7), exp2(-fog*7.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*8.)+iTime*vec2(4,0),8), exp2(-fog*8.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*9.)+iTime*vec2(4,0),9), exp2(-fog*9.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*10.)+iTime*vec2(4,0),10), exp2(-fog*10.-baseFog)));
      color = min(color, mix(vec3(1), Buildings(uv*exp2(size*11.)+iTime*vec2(4,0),11), exp2(-fog*11.-baseFog)));
      
      color = pow(color, vec3(1./2.2));
      
      const vec3 bgColor = vec3(0.89, 0.024, 0.075);
      color = mix(bgColor, vec3(0.0), 1.0 - color.r);
      
      gl_FragColor = vec4(color, 1.0);
    }
  `,depthTest:!1,depthWrite:!1}),A=new M(g,u);p.add(A);let f;function d(){clearTimeout(f),f=setTimeout(()=>{const e=window.innerWidth,o=window.innerHeight;l.setSize(e,o),l.setPixelRatio(Math.min(window.devicePixelRatio,L)),u.uniforms.iResolution.value.set(e,o,1)},100)}function x(e){requestAnimationFrame(x),u.uniforms.iTime.value=e*.001,l.render(p,O)}function y(){g.dispose(),u.dispose(),l.dispose(),window.removeEventListener("resize",d),window.removeEventListener("beforeunload",y)}d();window.addEventListener("resize",d);window.addEventListener("beforeunload",y);requestAnimationFrame(x);
