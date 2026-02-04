import{S as d,d as u,W as c,P as m,a as w,G as v,e as l,M as p,T as f}from"./animated-copy-BO0XT191.js";import"./footer-DYFLOo--.js";const S=`
  uniform float uScrollVelocity;
  uniform vec2 uTextureSize;
  uniform vec2 uQuadSize;
  out vec2 vUvCover;

  vec2 getCoverUv(vec2 uv, vec2 textureSize, vec2 quadSize) {
    vec2 ratio = vec2(
      min((quadSize.x / quadSize.y) / (textureSize.x / textureSize.y), 1.0),
      min((quadSize.y / quadSize.x) / (textureSize.y / textureSize.x), 1.0)
    );
    return vec2(
      uv.x * ratio.x + (1.0 - ratio.x) * 0.5,
      uv.y * ratio.y + (1.0 - ratio.y) * 0.5
    );
  }

  void main() {
    vUvCover = getCoverUv(uv, uTextureSize, uQuadSize);
    vec3 pos = position;
    float dist = length(uv - vec2(0.5));
    float bend = dist * dist * uScrollVelocity * 7.5;
    pos.z += bend;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`,y=`
  precision highp float;
  uniform sampler2D uTexture;
  in vec2 vUvCover;
  out vec4 outColor;

  void main() {
    outColor = vec4(texture(uTexture, vUvCover).rgb, 1.0);
  }
`;class x{constructor(){this.scrollVelocity=0,this.smoothVelocity=0,this.mediaStore=[],this.scene=null,this.camera=null,this.renderer=null,this.geometry=null,this.material=null,this.isMobile=window.innerWidth<1e3,this.init()}init(){this.setupScene(),this.setupCamera(),this.setupRenderer(),this.setupGeometry(),this.setupMaterial(),this.createMeshes(),this.setupLenisListener(),this.addEventListeners(),this.render()}setupScene(){this.scene=new d}setupCamera(){const t=r=>2*Math.atan(window.innerHeight/2/r)*180/Math.PI;this.camera=new u(50,window.innerWidth/window.innerHeight,10,1e3),this.camera.position.z=400,this.camera.fov=t(400),this.camera.updateProjectionMatrix()}setupRenderer(){this.isMobile||(this.renderer=new c({antialias:!0,alpha:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.domElement.style.position="fixed",this.renderer.domElement.style.top="0",this.renderer.domElement.style.left="0",this.renderer.domElement.style.pointerEvents="none",this.renderer.domElement.style.zIndex="10",document.body.appendChild(this.renderer.domElement))}setupGeometry(){this.geometry=new m(1,1,100,100)}setupMaterial(){this.material=new w({uniforms:{uScrollVelocity:{value:0},uTexture:{value:null},uTextureSize:{value:new l(100,100)},uQuadSize:{value:new l(100,100)}},vertexShader:S,fragmentShader:y,glslVersion:v})}createMeshes(){const i=window.scrollY||window.pageYOffset,t=[...document.querySelectorAll(".work-item img")],r=e=>new Promise(s=>{e.complete&&e.naturalWidth>0?s(e):(e.onload=()=>s(e),e.onerror=()=>s(e))});Promise.all(t.map(r)).then(e=>{this.mediaStore=e.map(s=>{s.style.opacity=this.isMobile?"1":"0";const n=s.getBoundingClientRect(),o=this.material.clone(),a=new p(this.geometry,o),h=new f(s);return h.needsUpdate=!0,o.uniforms.uTexture.value=h,o.uniforms.uTextureSize.value.x=s.naturalWidth||1,o.uniforms.uTextureSize.value.y=s.naturalHeight||1,o.uniforms.uQuadSize.value.x=n.width,o.uniforms.uQuadSize.value.y=n.height,a.scale.set(n.width,n.height,1),this.isMobile||this.scene.add(a),{media:s,material:o,mesh:a,width:n.width,height:n.height,top:n.top+i,left:n.left}})})}setupLenisListener(){const i=()=>{window.lenis?window.lenis.on("scroll",({velocity:t})=>{this.scrollVelocity=t}):setTimeout(i,50)};i()}setPositions(){const i=window.scrollY||window.pageYOffset;this.mediaStore.forEach(t=>{const r=t.left-window.innerWidth/2+t.width/2,e=-t.top+i+window.innerHeight/2-t.height/2;t.mesh.position.x=r,t.mesh.position.y=e})}addEventListeners(){window.addEventListener("resize",()=>this.handleResize())}handleResize(){const i=this.isMobile;if(this.isMobile=window.innerWidth<1e3,this.isMobile!==i){this.toggleMode();return}if(this.isMobile)return;this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight);const t=window.scrollY||window.pageYOffset;this.mediaStore.forEach(r=>{const e=r.media.getBoundingClientRect();r.width=e.width,r.height=e.height,r.top=e.top+t,r.left=e.left,r.mesh.scale.set(e.width,e.height,1),r.material.uniforms.uQuadSize.value.x=e.width,r.material.uniforms.uQuadSize.value.y=e.height})}toggleMode(){this.isMobile?(this.renderer&&(this.renderer.domElement.style.display="none"),this.mediaStore.forEach(i=>{i.media.style.opacity="1"})):(this.renderer||this.setupRenderer(),this.renderer&&(this.renderer.domElement.style.display="block"),this.mediaStore.forEach(i=>{i.media.style.opacity="0",this.scene.children.includes(i.mesh)||this.scene.add(i.mesh)}))}render(){if(this.isMobile){requestAnimationFrame(()=>this.render());return}this.smoothVelocity+=(this.scrollVelocity-this.smoothVelocity)*.1,this.mediaStore.forEach(i=>{i.material.uniforms.uScrollVelocity.value=this.smoothVelocity}),this.setPositions(),this.renderer&&this.renderer.render(this.scene,this.camera),requestAnimationFrame(()=>this.render())}}document.addEventListener("DOMContentLoaded",()=>new x);
