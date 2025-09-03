/* app v211 — Experiencia estilo original (izq/der) + botones servicios alineados + fix loader-space */

/* ====== CONTENIDO ====== */
const CMS = {
  name:"Julieta Meza",
  email:"mezajulieta041@gmail.com", whatsapp:"+5493815678649",
  avatarPlain:"imagenes/julieta foto.jpeg", avatarEscaped:"imagenes/julieta%20foto.jpeg",
  bio:`Soy Julieta Meza, Desarrolladora Full-Stack de 22 años y Téc. Univ. en Programación por la UTN FRT (Tucumán). Me apasiona crear soluciones digitales elegantes y funcionales, con foco en experiencia de usuario, rendimiento y escalabilidad. Trabajo con compromiso, responsabilidad y comunicación clara para entregar productos completos y sin fallas. Me actualizo de forma continua para incorporar tecnologías que aporten valor real.`,
  highlights:[
    "Proyectos a medida para negocios y fábricas.",
    "UX, performance y escalabilidad como prioridades.",
    "Entrega a tiempo, soporte y evolución."
  ],
  channels:[
    {label:"Email",value:"mezajulieta041@gmail.com"},
    {label:"WhatsApp",value:"+54 9 381 567 8649"},
  ],
  services:[
    {key:"web",icon:"",title:"Páginas web",tag:"web",
     desc:"Sitio ideal para optimizar tu negocio: diseño acorde a tu marca, responsive, rápido y orientado a conversión. Formularios, catálogos, contacto y todo lo que tu operación necesite.",
     links:[{label:"Contactar",url:"#contact"}]},
    {key:"sistema",icon:"",title:"Sistemas personalizados",tag:"sistemas",
     desc:"Software a medida que elimina tareas manuales y ordena tu operación. Puede ser web o de escritorio sin internet. Módulos de stock, caja, clientes, reportes y más.",
     links:[{label:"Ver proyectos",url:"#projects"}]},
    {key:"api",icon:"",title:"Integración de APIs",tag:"apis",
     desc:"Pagos, WhatsApp, mapas, email y automatizaciones. Arquitectura simple, segura y documentada.",
     links:[{label:"Charlémos",url:"#contact"}]},
    {key:"chatbot",icon:"",title:"Chatbots / IA",tag:"ia",
     desc:"Automatizá respuestas, turnos y derivaciones; captá leads 24/7. Flujos conversacionales, entrenamiento con tus datos y conexión a WhatsApp/Telegram/web.",
     links:[{label:"Casos",url:"#projects"}]},
    {key:"mantenimiento",icon:"",title:"Mantenimiento & Soporte",tag:"devops",
     desc:"Garantía post-entrega y resolución inmediata de incidencias. Monitoreo, backups, actualizaciones y mejoras continuas de performance y seguridad.",
     links:[{label:"Planes",url:"#contact"}]},
    {key:"portfolios",icon:"",title:"Portfolios profesionales",tag:"web",
     desc:"Portfolio impecable, alineado a tu estilo y rubro: diseño, contenido y puesta online para que consigas clientes.",
     links:[{label:"Quiero el mío",url:"#contact"}]},
  ],
  projects:[
    {
      title:"Pastas Aranda",
      images:["imagenes/indalif.png","imagenes/indalif2.png","imagenes/indalif3.png","imagenes/indalif4.png","imagenes/indalif5.png"],
      desc:"Plataforma integral (tesis) para una fábrica de pastas. Incluye arqueo de caja; altas/bajas y trazabilidad de mercadería; gestión de clientes mayoristas y distribuidores; cálculo de costos; legajos de empleados; gestión de pedidos; registro de producción diaria; y stock de materia prima y producto final.",
      links:[{label:"Ver",url:"https://indalif-production.up.railway.app"}]
    },
    {
      title:"AppEntrenador",
      images:["imagenes/appEntrenar1.png","imagenes/appEntrenar2.png","imagenes/appEntrenar3.png","imagenes/appEntrenar4.png","imagenes/appEntrenar5.png"],
      desc:"Aplicación para entrenadores y alumnos con autenticación. Permite diseñar rutinas con tiempos de descanso, seguimiento semanal del progreso, marcación de series completadas y reporte de incidencias por parte del alumno. El entrenador accede a un panel con métricas por alumno, evolución y tiempos de descanso.",
      links:[{label:"Ver",url:"https://app-entrenador.vercel.app"}]
    },
    {
      title:"Taller Olmos",
      images:["imagenes/taller1.png","imagenes/taller2.png","imagenes/taller3.png","imagenes/taller4.png","imagenes/taller5.png"],
      desc:"Landing/eCommerce para el taller: catálogo administrable por el dueño (alta/edición de productos), compra con múltiples medios de pago y contacto directo por WhatsApp o correo.",
      links:[{label:"Ver",url:"https://taller-olmos.vercel.app"}]
    },
    {
      title:"Gastronomía",
      images:["imagenes/gastronomia1.png","imagenes/gastronomia2.png","imagenes/gastronomia3.png","imagenes/gastronomia4.png","imagenes/gastronomia5.png"],
      desc:"Aplicación para restaurante (Jujuy) con acceso para empleados. Módulo Stock & Pedidos: ABM de productos, precios y existencias; toma de pedidos y visualización en tabla. Módulo Caja: registros de movimientos con montos, medios de pago, totales y auditoría."
    },
  ],
  skills:[
    {group:"Frontend",zones:{
      "Stack":[ "HTML5","CSS3 / SASS","TypeScript","JavaScript (ES6+)","React","Next.js (v14+)","Bootstrap" ]
    }},
    {group:"Backend",zones:{
      "Stack":[ "Node.js","Express","MySQL","SQL puro","API REST","C#","Python" ]
    }},
    {group:"Deploy & Datos",zones:{
      "Deploy":[ "Vercel","Railway","Supabase" ],
      "Datos":[ "Modelado relacional","Normalización","Índices y consultas","Backups/Restores","Seguridad de datos" ]
    }},
    {group:"Herramientas",zones:{
      "Tooling":[ "Git","GitHub","MySQL Workbench","Postman","Visual Studio / VS Code" ]
    }},
  ],
  experience:[
    {role:"Full-Stack Developer",org:"Proyectos personales y freelance",period:"2023 — Actualidad",
      bullets:[
        "Proyectos completos a medida para negocios y fábricas.",
        "Buen diseño, responsive y funcionamiento sólido.",
        "Entregas en tiempo y forma con seguimiento."
      ]},
    {role:"Tesis de Tecnicatura (UTN FRT)",org:"Fábrica de Pastas Aranda",period:"2024",
      bullets:[
        "Equipo de 3 integrantes, trabajo coordinado por GitHub.",
        "Módulos: arqueo de caja, mercaderías, clientes y distribuidores, costos, registro de empleados y horas.",
        "Deploy web (Vercel/Railway) y versión de escritorio."
      ]},
    {role:"Graduación",org:"Tecnicatura Univ. en Programación — UTN FRT",period:"22 de diciembre de 2024",
      bullets:[
        "Fundamentos de programación y bases de datos.",
        "Buenas prácticas: control de versiones y pruebas.",
        "Proyectos orientados a PYMES y trabajo en equipo."
      ]},
    {role:"Inglés",org:"Skillable",period:"Nivel B1 — en curso",
      bullets:[
        "Comunicación con equipos remotos.",
        "Plan de mejora continua hasta intermedio-alto."
      ]},
  ],
};

/* ====== HELPERS ====== */
const $=(s,c=document)=>c.querySelector(s);
const $$=(s,c=document)=>[...c.querySelectorAll(s)];
const isMobile=()=>matchMedia('(max-width:900px)').matches;
const fmtPhone=r=>r.replace(/[^+\d]/g,"").replace("+","");

/* ====== FIT / ESCALADO DESKTOP ====== */
function fitSection(section){
  const box=section.querySelector('.fit'); if(!box) return;
  if(isMobile() && section.id!=='about'){ box.style.transform='scale(1)'; return; }
  box.style.transform='scale(1)';
  const availH=section.clientHeight-10, availW=section.clientWidth-10;
  const needH=box.scrollHeight, needW=box.scrollWidth;
  const s=Math.max(0.6, Math.min(1, Math.min(availH/needH, availW/needW)));
  box.style.transform=`scale(${s})`;
}
function fitActive(){ $$('.view.active').forEach(fitSection); }

/* ====== SOBRE MÍ ====== */
function setAvatarImg(){
  const img=$('#avatarImg'); if(!img) return;
  img.onload=fitActive; img.src=CMS.avatarEscaped; img.onerror=()=>{img.onerror=null; img.src=CMS.avatarPlain;};
}

function placeCat(){
  const catBox=$('#catPeek');
  const mods=$('#about .about-mods');
  const grid=$('#about .about-grid');
  if(!catBox || !mods || !grid) return;

  if(isMobile()){
    if(catBox.parentElement!==mods){ mods.appendChild(catBox); }
    catBox.classList.add('in-mods');
  }else{
    if(catBox.parentElement!==grid){ grid.appendChild(catBox); }
    catBox.classList.remove('in-mods');
  }
  fitActive();
}

function buildAbout(){
  $('#bio').textContent=CMS.bio;
  const hi=$('#highlights'); hi.innerHTML="";
  CMS.highlights.forEach(t=>{const li=document.createElement('li'); li.textContent=t; hi.appendChild(li);});
  setAvatarImg();

  // Gatito (Lottie)
  if(window.lottie){
    const cat=$('#catPeek');
    if(cat){
      const anim=lottie.loadAnimation({container:cat,renderer:'svg',loop:true,autoplay:true,path:'card/mitadgato.json'});
      anim.addEventListener('DOMLoaded',fitActive);
    }
  }
  placeCat();
}

/* ====== SERVICIOS ====== */
function buildServices(){
  const wrap=$('#servicesGrid'); wrap.innerHTML="";
  CMS.services.forEach(s=>{
    const el=document.createElement('article'); el.className='card';
    el.innerHTML=`<div class="head"><h3>${s.icon} ${s.title}</h3><span class="tag">${s.tag}</span></div>
      <div class="body">
        <div class="anim" id="anim-${s.key}"></div>
        <p class="desc">${s.desc}</p>
        <div class="links">${(s.links||[]).map(l=>`<a class="btn outline neon-snake" href="${l.url}" data-link>${l.label}</a>`).join('')}</div>
      </div>`;
    wrap.appendChild(el);
  });
  const map={web:"card/web.json",sistema:"card/sistema.json",api:"card/api.json",chatbot:"card/chatbot.json",mantenimiento:"card/mantenimiento.json",portfolios:"card/portfolios.json"};
  if(window.lottie){ CMS.services.forEach(s=>{ const c=$(`#anim-${s.key}`); if(!c) return; const a=lottie.loadAnimation({container:c,renderer:'svg',loop:true,autoplay:true,path:map[s.key]}); a.addEventListener('DOMLoaded',fitActive);});}
}

/* ====== PROYECTOS + LIGHTBOX ====== */
let LB=null;
function buildLightbox(){
  const wrap=$('#lightbox'); LB={el:wrap,img:wrap.querySelector('img'),prev:wrap.querySelector('.prev'),next:wrap.querySelector('.next'),close:wrap.querySelector('.close'),list:[],idx:0};
  LB.prev.addEventListener('click',()=>showIdx(LB.idx-1));
  LB.next.addEventListener('click',()=>showIdx(LB.idx+1));
  LB.close.addEventListener('click',closeGallery);
  wrap.addEventListener('click',e=>{if(e.target===wrap) closeGallery();});
  addEventListener('keydown',e=>{if(!wrap.classList.contains('show')) return; if(e.key==='Escape') closeGallery(); if(e.key==='ArrowRight') showIdx(LB.idx+1); if(e.key==='ArrowLeft') showIdx(LB.idx-1);});
}
function openGallery(images,start=0){ LB.list=images; LB.idx=start; showIdx(start); LB.el.classList.add('show'); }
function closeGallery(){ LB.el.classList.remove('show'); }
function showIdx(i){ if(!LB.list.length) return; LB.idx=(i+LB.list.length)%LB.list.length; LB.img.src=LB.list[LB.idx]; }

function buildProjects(){
  const wrap=$('#projectsGrid'); wrap.innerHTML="";
  CMS.projects.forEach(p=>{
    const imgs=p.images||[];
    const card=document.createElement('article'); card.className='project';
    card.innerHTML=`<img class="cover" src="${imgs[0]||''}" alt="Proyecto ${p.title}">
    <div class="overlay"><div>
      <h3 class="title">${p.title}</h3><p>${p.desc||""}</p>
      <div class="links">
        ${(p.links||[]).map(l=>`<a class="btn chip" href="${l.url}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
        ${imgs.length>1?`<button class="btn chip view-gallery">Galería</button>`:''}
      </div>
    </div></div>`;
    const open=()=>openGallery(imgs,0);
    card.querySelector('.cover')?.addEventListener('load',fitActive);
    card.querySelector('.cover')?.addEventListener('click',open);
    card.querySelector('.view-gallery')?.addEventListener('click',open);
    wrap.appendChild(card);
  });
  if(window.lottie){ const c=$('#animProject'); if(c){ lottie.loadAnimation({container:c,renderer:'svg',loop:true,autoplay:true,path:'card/proyecto.json'}); } }
}

/* ====== HABILIDADES ====== */
function buildSkills(){
  const w=$('#skillsWrap'); w.innerHTML="";
  CMS.skills.forEach(s=>{
    const c=document.createElement('div'); c.className='skill-card';
    const zones=Object.entries(s.zones).map(([t,tags])=>`<div class="skill-zone"><h4>${t}</h4><div class="tags">${tags.map(x=>`<span class="badge">${x}</span>`).join('')}</div></div>`).join('');
    c.innerHTML=`<h3>${s.group}</h3><div class="skill-zones">${zones}</div>`;
    w.appendChild(c);
  });
  if(window.lottie){
    [{id:'animReact',path:'card/React.json'},{id:'animGit',path:'card/Git.json'},{id:'animJS',path:'card/JavaScript.json'}].forEach(m=>{
      const el=document.getElementById(m.id); if(el){ const a=lottie.loadAnimation({container:el,renderer:'svg',loop:true,autoplay:true,path:m.path}); a.addEventListener('DOMLoaded',fitActive); }
    });
  }
}

/* ====== EXPERIENCIA — alternando izquierda/derecha ====== */
function buildExperience(){
  const t=$('#timeline'); t.innerHTML="";
  CMS.experience.forEach((e,i)=>{
    const side = (i % 2 === 0) ? 'left' : 'right'; // 0,2 izquierda — 1,3 derecha
    const it=document.createElement('div'); it.className=`item ${side}`;
    it.innerHTML=`<div class="meta"><strong>${e.role}</strong> · ${e.org} · ${e.period}</div><ul>${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
    t.appendChild(it);
  });
}

/* ====== CONTACTO ====== */
function setupContact(){
  const sel=$('#cService'); if(sel){ sel.innerHTML=`<option value="" disabled selected>Seleccioná un servicio…</option>`+CMS.services.map(s=>`<option>${s.title}</option>`).join(''); }
  $('#contactForm')?.addEventListener('submit',e=>{
    e.preventDefault();
    const n=$('#cName').value.trim(), em=$('#cEmail').value.trim(), srv=$('#cService').value, m=$('#cMsg').value.trim();
    const txt=encodeURIComponent(`Hola Julieta, soy ${n} (${em}). Me interesa: ${srv}. ${m}`);
    open(`https://wa.me/${fmtPhone(CMS.whatsapp)}?text=${txt}`,'_blank');
  });
  $('#sendGmail')?.addEventListener('click',()=>{
    const n=$('#cName').value.trim(), srv=$('#cService').value, m=$('#cMsg').value.trim();
    const sub=encodeURIComponent(`Proyecto: ${srv || 'Consulta'}`);
    const body=encodeURIComponent(`Hola Julieta,\n\nSoy ${n}.\n\n${m}\n\nGracias.`);
    location.href=`mailto:${CMS.email}?subject=${sub}&body=${body}`;
  });
  $('#channels').innerHTML = CMS.channels.map(c=>`<li>${c.label}: ${c.value}</li>`).join('');
}

/* ====== FONDOS Y FX ====== */
function starfield(){
  const c=document.getElementById('bg'); if(!c) return;
  const dpr=Math.min(devicePixelRatio||1,2), ctx=c.getContext('2d'); let w,h,stars;
  function resize(){ w=c.width=innerWidth*dpr; h=c.height=innerHeight*dpr; ctx.setTransform(1,0,0,1,0,0); make(); }
  function make(){ const n=Math.floor((innerWidth*innerHeight)/7000); stars=Array.from({length:n},()=>({x:Math.random()*innerWidth,y:Math.random()*innerHeight,z:Math.random()*1.4+.5,a:Math.random()*Math.PI*2})); }
  function draw(){ ctx.clearRect(0,0,w,h); ctx.save(); ctx.scale(dpr,dpr); stars.forEach(s=>{ s.x+=Math.cos(s.a)*s.z*.2; s.y+=Math.sin(s.a)*s.z*.2; if(s.x<0) s.x=innerWidth; if(s.x>innerWidth) s.x=0; if(s.y<0) s.y=innerHeight; if(s.y>h) s.y=0; ctx.globalAlpha=.6; ctx.fillStyle='#9fd1ff'; ctx.fillRect(s.x,s.y,1.5,1.5); }); ctx.restore(); requestAnimationFrame(draw); }
  addEventListener('resize',()=>{resize(); fitActive(); placeCat();}); resize(); draw();
}
function heroParticles(){
  const cvs=document.getElementById('heroFx'); if(!cvs) return;
  const ctx=cvs.getContext('2d'); let w,h,ps=[];
  function resize(){ const r=cvs.parentElement.getBoundingClientRect(); w=cvs.width=r.width; h=cvs.height=r.height; make(); }
  function make(){ const n=Math.floor((w*h)/12000); ps=Array.from({length:n},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5})); }
  function draw(){ ctx.clearRect(0,0,w,h); ps.forEach(p=>{ p.vx*=.985; p.vy*=.985; p.x+=p.vx; p.y+=p.vy; if(p.x<0) p.x=w; if(p.x>w) p.x=0; if(p.y<0) p.y=h; if(p.y>h) p.y=0; ctx.globalAlpha=.9; ctx.fillStyle='#8bd6ff'; ctx.fillRect(p.x,p.y,1.6,1.6);}); requestAnimationFrame(draw); }
  addEventListener('resize',()=>{resize(); fitActive(); placeCat();}); resize(); draw();
}
function constellations(canvasId){
  const cv=document.getElementById(canvasId); if(!cv) return;
  const ctx=cv.getContext('2d'); let W,H,stars=[],links=[];
  function resize(){ const r=cv.parentElement.getBoundingClientRect(); W=cv.width=r.width; H=cv.height=r.height; make(); draw(); fitActive(); }
  function make(){ const n=Math.floor((W*H)/9000);
    stars=Array.from({length:n},()=>({x:Math.random()*W,y:Math.random()*H,s:Math.random()*1.2+.3,v:Math.random()*0.2+0.05}));
    links=[]; for(let i=0;i<n/5;i++){const a=stars[Math.floor(Math.random()*n)],b=stars[Math.floor(Math.random()*n)]; links.push([a,b]);}
  }
  function draw(){ ctx.clearRect(0,0,W,H);
    ctx.globalAlpha=.8; ctx.fillStyle='#9fd1ff'; stars.forEach(p=>{ p.x+=p.v; if(p.x>W) p.x=0; ctx.fillRect(p.x,p.y,p.s,p.s); });
    ctx.globalAlpha=.12; ctx.strokeStyle='#6be1ff'; links.forEach(([a,b])=>{ ctx.beginPath(); ctx.moveTo(a.x,a.y); ctx.lineTo(b.x,b.y); ctx.stroke(); });
    requestAnimationFrame(draw);
  }
  addEventListener('resize',resize); resize();
}

/* ====== CONTADORES (secuenciales) ====== */
function countTo(el, n, ms=1000){
  let st=performance.now();
  function tick(t){ const p=Math.min((t-st)/ms,1); el.textContent = Math.floor(p*n) + '+'; if(p<1) requestAnimationFrame(tick); }
  requestAnimationFrame(tick);
}
function animateGaugesSequential(){
  const gs=$$('#gauges .gauge');
  function animOne(idx){
    if(idx>=gs.length) return;
    const g=gs[idx], target=+g.dataset.target||0, max=+g.dataset.max||target, pct=Math.min(target/max,1);
    const ring=g.querySelector('.ring'), bar=g.querySelector('.bar'), num=g.querySelector('.num');
    num.textContent='0+';
    let start=performance.now();
    function step(t){ const p=Math.min((t-start)/1000,1), deg=p*pct*100;
      ring.style.background=`radial-gradient(closest-side,#0e173d 74%,transparent 75% 99%,#0e173d 0),conic-gradient(var(--acc-2) ${deg}%, #1a275c 0)`;
      bar.style.transform=`rotate(${p*pct*360-90}deg)`; if(p<1){ requestAnimationFrame(step);} else { animOne(idx+1); }
    }
    requestAnimationFrame(step);
    countTo(num,target,1000);
  }
  animOne(0);
}
function resetAndAnimateGauges(){
  $$('#gauges .gauge').forEach(g=>{
    g.querySelector('.num').textContent='0+';
    g.querySelector('.bar').style.transform='rotate(0deg)';
    g.querySelector('.ring').style.background=`radial-gradient(closest-side,#0e173d 74%,transparent 75% 99%,#0e173d 0),conic-gradient(var(--acc-2) 0%, #1a275c 0%)`;
  });
  animateGaugesSequential();
}

/* ====== NAV / ROUTER ====== */
function setupNav(){
  $('#navToggle').addEventListener('click',()=>{ const nav=$('#nav'); const open=!nav.classList.contains('show'); nav.classList.toggle('show',open); $('#navToggle').setAttribute('aria-expanded',String(open));});
  $$('#nav a,[data-link]').forEach(a=>a.addEventListener('click',e=>{
    const h=a.getAttribute('href'); if(h&&h.startsWith('#')){ e.preventDefault(); history.pushState({},'',h); handleHash(); $('#nav').classList.remove('show'); }
  }));
  addEventListener('popstate',handleHash); addEventListener('hashchange',handleHash);
}
function showSection(id){
  const t=$('#transition'); t.classList.add('show');
  setTimeout(()=>{
    $$('.view').forEach(v=>v.classList.remove('active'));
    (document.getElementById(id)||$('#home')).classList.add('active');
    if(id==='about'){ resetAndAnimateGauges(); placeCat(); }
    fitActive();
    setTimeout(()=>t.classList.remove('show'), 240);
  },80);
}
function handleHash(){ const id=(location.hash||'#home').slice(1); showSection(id); }

/* ====== LOADER (fix: Space ya no navega luego de cerrar) ====== */
function setupLoader(){
  const L = document.getElementById('loader');
  const b = document.getElementById('startBtn');

  const go = () => {
    removeEventListener('keydown', handler);
    L.classList.remove('show');
    showSection('home');
    fitActive();
  };

  const handler = (e) => {
    if (!L.classList.contains('show')) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      go();
    }
  };

  b.addEventListener('click', go);
  addEventListener('keydown', handler);
}

/* ====== INIT ====== */
function init(){
  $('#year').textContent=new Date().getFullYear();

  buildAbout(); buildServices(); buildProjects(); buildSkills(); buildExperience();
  setupContact(); buildLightbox();

  starfield(); heroParticles(); constellations('xpSpace');

  setupNav(); handleHash(); fitActive(); setupLoader();
  addEventListener('resize',()=>{ fitActive(); placeCat(); });
}
document.addEventListener('DOMContentLoaded',init);
