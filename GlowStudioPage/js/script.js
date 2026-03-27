// Registra el plugin ScrollTrigger de GSAP para habilitar animaciones basadas en el scroll de la página
gsap.registerPlugin(ScrollTrigger);

// ==========================================
// CURSOR PERSONALIZADO
// ==========================================
// Selecciona los elementos del DOM que representan el punto central y el anillo exterior del cursor
const dot=document.getElementById('curDot'),ring=document.getElementById('curRing');
// Variables para almacenar la posición del ratón (mx, my) y la posición del anillo con retraso (rx, ry)
let mx=0,my=0,rx=0,ry=0;

// Escucha el movimiento del ratón en todo el documento para actualizar las coordenadas actuales
document.addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY});

// Función autoejecutable que crea un bucle de animación para actualizar la posición del cursor
(function tick(){
  // Actualiza la posición del punto central instantáneamente
  dot.style.cssText=`left:${mx}px;top:${my}px`;
  // Aplica una interpolación (lerp) para que el anillo exterior siga al punto con un efecto de suavizado
  rx+=(mx-rx)*.13;ry+=(my-ry)*.13;
  // Actualiza la posición del anillo exterior
  ring.style.cssText=`left:${rx}px;top:${ry}px`;
  // Solicita el próximo frame de animación para continuar el bucle
  requestAnimationFrame(tick);
})();

// ==========================================
// EFECTO DE SCROLL EN LA BARRA DE NAVEGACIÓN
// ==========================================
// Selecciona la barra de navegación en el DOM
const nav=document.getElementById('navbar');
// Escucha el evento de scroll en la ventana. 
// Si el scroll vertical supera los 60px, añade la clase 'scrolled' para cambiar su estilo oscuro/compacto, de lo contrario la quita.
window.addEventListener('scroll',()=>nav.classList.toggle('scrolled',scrollY>60));

// ==========================================
// MENÚ HAMBURGUESA (MÓVIL)
// ==========================================
// Añade un evento 'click' al icono de la hamburguesa para abrir/cerrar el menú de navegación desplegable
document.getElementById('hamburger').addEventListener('click',()=>{
  document.getElementById('navLinks').classList.toggle('open');
});
// Añade un evento 'click' a cada enlace del menú de navegación para cerrarlo automáticamente tras seleccionar una opción
document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>{
  document.getElementById('navLinks').classList.remove('open');
}));

// ==========================================
// ANIMACIÓN DE LA SECCIÓN HERO (INICIO)
// ==========================================
// Crea una línea de tiempo (timeline) de GSAP con un retraso inicial de 0.2 segundos para la carga inicial
gsap.timeline({delay:.2})
  // Anima la aparición del elemento visual primario ('hEye') cambiando su opacidad de 0 a 1 y su posición
  .to('#hEye',{opacity:1,y:0,duration:.8,ease:'power3.out'})
  // Anima un elemento secundario ('hSym') con un efecto de rebote ('back.out'), solapándose ligeramente con la animación anterior
  .to('#hSym',{opacity:1,y:0,duration:.9,ease:'back.out(1.7)'},'-=.35')
  // Anima el título principal ('hTitle')
  .to('#hTitle',{opacity:1,y:0,duration:1.1,ease:'power3.out'},'-=.5')
  // Anima el subtítulo ('hSub')
  .to('#hSub',{opacity:1,y:0,duration:.9,ease:'power3.out'},'-=.55')
  // Anima los botones de llamada a la acción en el hero ('hActs')
  .to('#hActs',{opacity:1,y:0,duration:.8,ease:'power3.out'},'-=.5');

// ==========================================
// EFECTOS DE APARICIÓN AL HACER SCROLL (REVEAL GENERAL)
// ==========================================
// Selecciona todos los elementos con la clase utilitaria '.reveal' para aplicarles una animación de aparición al hacer scroll
document.querySelectorAll('.reveal').forEach((el,i)=>{
  // Configura la animación desde un estado inicial (desvanecido y desplazado 38px hacia abajo) hasta su estado final normal
  gsap.fromTo(el,{opacity:0,y:38},{opacity:1,y:0,duration:.9,ease:'power3.out',
    // La animación se dispara cuando el borde superior del elemento alcanza el 88% de la altura del viewport ('top 88%')
    scrollTrigger:{trigger:el,start:'top 88%',toggleActions:'play none none none'},
    // Se añade un pequeño retraso basado en el índice del elemento para crear un sutil efecto en cascada (stagger) para elementos agrupados
    delay:(i%5)*.07});
});

// ==========================================
// ANIMACIÓN SECUENCIAL DE LA GALERÍA DE IMÁGENES
// ==========================================
// Aplica una animación a cada imagen dentro de la cuadrícula de la galería ('.gal-item')
gsap.utils.toArray('.gal-item').forEach((el,i)=>{
  // Efecto de aparición partiendo de un tamaño menor (scale: 0.93) hacia el tamaño real
  gsap.fromTo(el,{opacity:0,scale:.93,y:28},{opacity:1,scale:1,y:0,duration:.82,ease:'power3.out',
    // Activa la animación cuando la sección madre '#s3' entra en el área visible (viewport)
    scrollTrigger:{trigger:'#s3',start:'top 72%'},
    // Incrementa el retraso con base en el índice (i) para dar un efecto secuencial, mostrándose una tras otra
    delay:i*.11});
});

// ==========================================
// ANIMACIÓN SECUENCIAL DE LAS TARJETAS DE SERVICIOS
// ==========================================
// Aplica animación a las tarjetas que muestran descripciones de servicios ('.svc-card')
gsap.utils.toArray('.svc-card').forEach((card,i)=>{
  // Las tarjetas aparecen desplazándose suavemente de abajo hacia arriba
  gsap.fromTo(card,{opacity:0,y:38},{opacity:1,y:0,duration:.75,ease:'power3.out',
    // Animación activada por el scroll sobre la sección correspondiente
    scrollTrigger:{trigger:'#s2',start:'top 72%'},
    // Retraso por índice para entrada secuencial a nivel visual
    delay:i*.09});
});

// ==========================================
// ANIMACIÓN DE LAS FILAS DE BLOQUE DE HORARIOS
// ==========================================
// Anima línea por línea el bloque de texto con horarios de operativas ('.hor-row')
gsap.utils.toArray('.hor-row').forEach((row,i)=>{
  // Las líneas se deslizan con opacidad desde la derecha (x:18) a su posición original (x:0)
  gsap.fromTo(row,{opacity:0,x:18},{opacity:1,x:0,duration:.45,ease:'power2.out',
    // Condición de disparo
    scrollTrigger:{trigger:'.horarios-box',start:'top 82%'},
    // Cascada rítmica (stagger delay)
    delay:i*.07});
});

// ==========================================
// BOTONES MAGNÉTICOS (EFECTO INTERACTIVO DE HOVER)
// ==========================================
// Para otorgar una sensación "premium" (común en web modernas), selecciona varios botones para aplicarles interactividad
// '.btn', '.nav-cta', '.soc-btn', '.csoc-btn' y el botón flotante '.wa-float' de Whatsapp
document.querySelectorAll('.btn,.nav-cta,.soc-btn,.csoc-btn,.wa-float').forEach(btn=>{
  // Al mover el ratón encima de cualquiera de estos botones...
  btn.addEventListener('mousemove',e=>{
    // Obtiene las dimensiones y coordenadas estáticas del botón en la pantalla
    const r=btn.getBoundingClientRect();
    // Calcula la distancia vectorial entre el punto central del botón y la posición actual de la flecha del cursor cruzando ese botón
    const x=e.clientX-r.left-r.width/2,y=e.clientY-r.top-r.height/2;
    // Mueve ligeramente el botón en la dirección en la que está el ratón ('efecto atracción o magnetismo') y lo amplía un 4%
    // El factor '0.09' define cuánta inercia/fuerza tiene ese arrastre
    btn.style.transform=`translate(${x*.09}px,${y*.09}px) scale(1.04)`;
  });
  // Cuando el cursor sale del área del botón (mouseleave), se reinicia cualquier transformación en línea
  // Esto devuelve el botón de forma instantánea pero suave (gracias al CSS `transition: transform` en css)
  btn.addEventListener('mouseleave',()=>btn.style.transform='');
});
