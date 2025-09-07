/* app v310 — Foto más chica en Sobre mí + contadores más lentos y antes del resto + proyectos reordenados */

/* ====== CONTENIDO ====== */
const CMS = {
  name:"Julieta Meza",
  email:"mezajulieta041@gmail.com", whatsapp:"+5493815678649",
  avatarPlain:"imagenes/julieta foto.jpeg", avatarEscaped:"imagenes/julieta%20foto.jpeg",
  bio:`Soy Julieta Meza, Desarrolladora Full-Stack de 22 años, me apasiona crear soluciones digitales elegantes y funcionales, con foco en experiencia de usuario. Trabajo con compromiso, responsabilidad y comunicación clara para entregar productos completos y sin fallas. Me actualizo de forma continua para incorporar tecnologías que aporten valor real.`,
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

  /* ===== PROYECTOS ORDENADOS (como pediste) ===== */
  projects: [
    {
      slug:"pastas-aranda",
      title:"Pastas Aranda",
      images:[
        "imagenes/indalif.png","imagenes/indalif2.png","imagenes/indalif3.png",
        "imagenes/indalif4.png","imagenes/indalif5.png"
      ],
      desc:"Plataforma integral (tesis) para fábrica de pastas: arqueo de caja, altas y trazabilidad de mercadería, clientes mayoristas y distribuidores, costos, legajos de empleados, pedidos, producción diaria y stock de materia prima/producto final.",
      links:[{label:"Abrir proyecto real",url:"https://indalif-production.up.railway.app"}]
    },
    {
      slug:"novawebs",
      title:"NovaWebs",
      images:[
        "imagenes/nova1.png","imagenes/nova2.png","imagenes/nova3.png",
        "imagenes/nova4.png","imagenes/nova5.png"
      ],
      desc:"Página web de servicios hecha con mi equipo: propuesta clara, secciones de oferta, contacto y conversión. Diseño cuidado, rápido y adaptable a cualquier dispositivo.",
      links:[{label:"Abrir proyecto real",url:"https://www.novaawebs.com/"}]
    },
    {
      slug:"appentrenador",
      title:"AppEntrenador",
      images:[
        "imagenes/appEntrenar1.png","imagenes/appEntrenar2.png","imagenes/appEntrenar3.png",
        "imagenes/appEntrenar4.png","imagenes/appEntrenar5.png"
      ],
      desc:"App para entrenadores y alumnos: autenticación, rutinas con tiempos de descanso, seguimiento semanal, marcación de series e incidencias. Panel del entrenador con métricas por alumno y evolución.",
      links:[{label:"Abrir proyecto real",url:"https://app-entrenador.vercel.app"}]
    },
    {
      slug:"gastronomia",
      title:"Gastronomía",
      images:[
        "imagenes/gastronomia1.png","imagenes/gastronomia2.png","imagenes/gastronomia3.png",
        "imagenes/gastronomia4.png","imagenes/gastronomia5.png"
      ],
      desc:"App para restaurante (Jujuy). Stock & Pedidos: ABM de productos, precios y existencias; toma de pedidos y visualización en tabla. Caja: registro de movimientos con montos, medios de pago y totales."
    },
    {
      slug:"cooksmart",
      title:"CookSmart",
      images:[
        "imagenes/cook1.png","imagenes/cook2.png","imagenes/cook3.png","imagenes/cook4.png"
      ],
      desc:"App que, usando una API, genera 2 recetas con los ingredientes que tenés a mano. Pensada para gente sin experiencia en cocina, estudiantes o cualquiera que quiera resolver rápido con lo disponible."
      // links:[{label:"Abrir proyecto real",url:"https://..."}]
    },
    {
      slug:"taller-olmos",
      title:"Taller Olmos",
      images:[
        "imagenes/taller1.png","imagenes/taller2.png","imagenes/taller3.png",
        "imagenes/taller4.png","imagenes/taller5.png"
      ],
      desc:"Landing/eCommerce del taller: catálogo administrable (alta/edición de productos), múltiples medios de pago y contacto directo por WhatsApp o correo.",
      links:[{label:"Abrir proyecto real",url:"https://taller-olmos.vercel.app"}]
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
        "Inglés técnico",
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

/* ====== PROYECTOS (GRID) ====== */
function slugify(t){return t.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');}
function buildProjects(){
  const wrap=$('#projectsGrid'); wrap.innerHTML="";
  CMS.projects.forEach(p=>{
    if(!p.slug) p.slug=slugify(p.title);
    const card=document.createElement('article'); card.className='project';
    const first=(p.images && p.images[0]) || '';
    card.innerHTML=`
      <img class="cover" src="${first}" alt="${p.title}">
      <div class="footer">
        <h3 class="title">${p.title}</h3>
        <div class="faright">
          <a class="btn chip" href="#project/${p.slug}" data-link>Ver</a>
        </div>
      </div>`;
    card.querySelector('.cover').addEventListener('click',()=>{navigateTo(`#project/${p.slug}`)});
    wrap.appendChild(card);
  });
  if(window.lottie){ const c=$('#animProject'); if(c){ lottie.loadAnimation({container:c,renderer:'svg',loop:true,autoplay:true,path:'card/proyecto.json'}); } }
}

/* ====== PROYECTO — PÁGINA DE DETALLE ====== */
let currentProj={ idx:0, list:[] };
function showProjectDetail(slug){
  const proj = CMS.projects.find(p=>p.slug===slug);
  if(!proj){ navigateTo('#projects'); return; }
  $('#projTitle').textContent = proj.title;
  $('#projDesc').textContent  = proj.desc || '';
  const links = $('#projLinks'); links.innerHTML='';
  (proj.links||[]).forEach(l=>{
    const a=document.createElement('a');
    a.className='btn outline'; a.href=l.url; a.target='_blank'; a.rel='noopener';
    a.textContent=l.label; links.appendChild(a);
  });

  currentProj.list = proj.images || [];
  currentProj.idx  = 0;
  const img = $('#projImg');
  img.src = currentProj.list[0] || '';
  $('.gctl.prev').onclick = ()=>projStep(-1);
  $('.gctl.next').onclick = ()=>projStep(1);
  $('#backProjects').onclick = ()=>navigateTo('#projects');
  showSection('project');
}
function projStep(step){
  if(!currentProj.list.length) return;
  currentProj.idx = (currentProj.idx + step + currentProj.list.length) % currentProj.list.length;
  $('#projImg').src = currentProj.list[currentProj.idx];
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

/* ====== EXPERIENCIA — Desktop escalera / Mobile orbs ====== */
function buildExperience(){
  const t=$('#timeline'); t.innerHTML="";
  const sides = ['left','right','left','right']; // 1 izq, 2 der, 3 izq, 4 der
  CMS.experience.forEach((e,i)=>{
    const side = sides[i] || (i%2===0?'left':'right');
    const it=document.createElement('div');
    it.className=`item ${side}`;
    it.style.gridRow = String(i+1);
    it.style.gridColumn = (side==='right') ? '2' : '1';
    it.innerHTML=`<div class="meta"><strong>${e.role}</strong> · ${e.org} · ${e.period}</div><ul>${e.bullets.map(b=>`<li>${b}</li>`).join('')}</ul>`;
    t.appendChild(it);
  });

  // Mobile grid (como Habilidades)
  const g=$('#xpGrid'); g.innerHTML='';
  CMS.experience.forEach(e=>{
    const card=document.createElement('div');
    card.className='skill-card';
    card.innerHTML=`<h3>${e.role}</h3>
      <div class="skill-zones">
        <div class="skill-zone"><h4>${e.org}</h4><div class="tags"><span class="badge">${e.period}</span></div></div>
        <div class="skill-zone"><h4>Resumen</h4><div class="tags">${e.bullets.map(b=>`<span class="badge">${b}</span>`).join('')}</div></div>
      </div>`;
    g.appendChild(card);
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

  // Gmail compose + fallback
  $('#sendGmail')?.addEventListener('click', e => {
    e.preventDefault();
    const n   = ($('#cName').value || '').trim() || 'Sin nombre';
    const em  = ($('#cEmail').value || '').trim();
    const srv = ($('#cService').value || '').trim() || 'Consulta';
    const m   = ($('#cMsg').value || '').trim();

    const to  = CMS.email;
    const su  = encodeURIComponent(`Proyecto: ${srv}`);
    const bo  = encodeURIComponent(
`Hola Julieta,
Soy ${n}${em ? ` (${em})` : ''}.

Servicio: ${srv}
Mensaje: ${m}

Gracias.`);

    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${encodeURIComponent(to)}&su=${su}&body=${bo}`;
    const win = window.open(gmailUrl, '_blank');
    setTimeout(() => {
      if (!win || win.closed || typeof win.closed === 'undefined') {
        location.href = `mailto:${to}?subject=${su}&body=${bo}`;
      }
    }, 500);
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

/* ====== CONTADORES (más lentos y secuenciales) ====== */
function countTo(el, n, ms=2000){  // antes 1000
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
    function step(t){ 
      const p=Math.min((t-start)/2000,1);  // antes 1000
      const deg=p*pct*100;
      ring.style.background=`radial-gradient(closest-side,#0e173d 74%,transparent 75% 99%,#0e173d 0),conic-gradient(var(--acc-2) ${deg}%, #1a275c 0)`;
      bar.style.transform=`rotate(${p*pct*360-90}deg)`;
      if(p<1){ requestAnimationFrame(step);} else { animOne(idx+1); }
    }
    requestAnimationFrame(step);
    countTo(num,target,2000);
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
    const h=a.getAttribute('href'); if(h&&h.startsWith('#')){ e.preventDefault(); navigateTo(h); $('#nav').classList.remove('show'); }
  }));
  addEventListener('popstate',handleHash); addEventListener('hashchange',handleHash);
}
function navigateTo(h){ history.pushState({},'',h); handleHash(); }
function showSection(id){
  const t=$('#transition'); t.classList.add('show');
  setTimeout(()=>{
    $$('.view').forEach(v=>v.classList.remove('active'));
    (document.getElementById(id)||$('#home')).classList.add('active');
    if(id==='about'){ resetAndAnimateGauges(); placeCat(); }
    fitActive();
    setTimeout(()=>t.classList.remove('show'), 220);
  },60);
}
function handleHash(){
  const hash = (location.hash||'#home');
  if(hash.startsWith('#project/')){
    const slug = hash.split('/')[1] || '';
    showProjectDetail(slug);
    return;
  }
  showSection(hash.slice(1));
}

/* ====== LOADER ====== */
function setupLoader(){
  const L = document.getElementById('loader');
  const b = document.getElementById('startBtn');
  const go = () => { removeEventListener('keydown', handler); L.classList.remove('show'); showSection('home'); fitActive(); };
  const handler = (e) => { if (!L.classList.contains('show')) return; if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); go(); } };
  b.addEventListener('click', go); addEventListener('keydown', handler);
}

/* ====== INIT ====== */
function init(){
  $('#year').textContent=new Date().getFullYear();

  buildAbout(); buildServices(); buildProjects(); buildSkills(); buildExperience();
  setupContact();

  starfield(); heroParticles(); constellations('xpSpace');

  setupNav(); handleHash(); fitActive(); setupLoader();
  addEventListener('resize',()=>{ fitActive(); placeCat(); });
}
document.addEventListener('DOMContentLoaded',init);
