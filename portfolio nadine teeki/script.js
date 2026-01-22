//DATOS
const portfolio = {
  alumno: {
    nombre: "Luis",
    apellido: "Ruiz",
    avatar: "https://i.pravatar.cc/150?u=luis", // Nueva propiedad para la foto de perfil
    quiensoy: "Hola, soy Nadine, estoy aprendiendo HTML y CSS en Dicampus.",
    redes: ["https://codepen.io/luis", "https://github.com/luis"]
  },
  //document.querySelector('h1').textContent=portfolio.alumno.nombre+""+portfolio.alumno.apellido;
  // document.querySelector('.avatar').src = portfolio.alumno.avatar; lafoto

  html: [
    {
      img: "https://picsum.photos/id/1/200/200",
      titulo: "Estructura Semántica",
      descripcion:
        "Maquetación de un blog utilizando etiquetas article y section.",
      fecha: "2025-12-11",
      url: "https://codepen.io/luis/pen/html1"
    }
  ],

  css: [
    {
      img: "https://picsum.photos/id/10/200/200",
      titulo: "Layout con Flexbox",
      descripcion:
        "Diseño de una galería de imágenes responsive usando Flexbox.",
      fecha: "2026-01-05",
      url: "https://codepen.io/luis/pen/css1"
    },
    {
      img: "https://picsum.photos/id/20/200/200",
      titulo: "Grid Garden",
      descripcion: "Replicando un dashboard complejo utilizando CSS Grid.",
      fecha: "2026-01-10",
      url: "https://codepen.io/luis/pen/css2"
    }
  ],

  js: [
    {
      img: "https://picsum.photos/id/60/200/200",
      titulo: "Calculadora de Propinas",
      descripcion: "Lógica sencilla con funciones y manipulación del DOM.",
      fecha: "2026-01-15",
      url: "https://codepen.io/luis/pen/js1"
    },
    {
      img: "https://picsum.photos/id/160/200/200",
      titulo: "Validador de Formularios",
      descripcion: "Uso de eventos y expresiones regulares para validar datos.",
      fecha: "2026-01-20",
      url: "https://codepen.io/luis/pen/js2"
    }
  ]
};

//LLAMADA

//FUNCION
function cambiarTab(categoria) {
  // 1A'contenidoTab' las secciones html css js
  const secciones = document.querySelectorAll(".contenidoTab");

  // 2A bucle para ocultarlas todas
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
  }
  // 3.  solo la que coincide con el ID que construimos
  // Si categoria es 'html', buscará '#sec-html'
  document.querySelector("#section-" + categoria).style.display = "block";
}
//ESTADO DEL BOTON:PULSADO
function cambiarTab(categoria) {

  const secciones = document.querySelectorAll('.contenidoTab');
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.display = 'none';
  }
  document.querySelector('#section-' + categoria).style.display = 'block';


  // 1b Buscamos todos los botones
  const botones = document.querySelectorAll('.btnnav');

  // 2b Quitamos la clase 'activo' a todos para resetear
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove('activo');
  }

  // 3b  solo al botón que se acaba de pulsar
  // --> event.currentTarget para saber exactamente qué botón recibió el clic
  event.currentTarget.classList.add('activo');
}
// Busca el botón de HTML y simula un clic
document.querySelector("#btnhtml").click();

