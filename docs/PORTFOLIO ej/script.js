//DATOS
const portfolio = {
  alumno: {
    nombre: "Juan",
    apellido: "García García",
    img: "https://picsum.photos/id/13/200/200",
    quiensoy: "Hola, soy Juan y programo cosas.",
    contacto: "juan@mail.com",
    redes: [
      {
        red: "codepen",
        url: "codepen.io/jgargar"
      },
      {
        red: "github",
        url: "github.com/juangargar"
      },

      {
        red: "linkedin",
        url: "linkedin.com/juangarciagarcia"
      }
    ]
  },
  //document.querySelector('h1').textContent=portfolio.alumno.nombre+""+portfolio.alumno.apellido;
  // document.querySelector('.avatar').src = portfolio.alumno.avatar; lafoto

  //------------------- HTML ---------------
  html: [
    {
      titulo: "Ejercicio 1",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Ejercicio 2",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Ejercicio 3",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Ejercicio 4",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    }
  ],
  //------------------- CSS ---------------
  css: [
    {
      titulo: "Galeria",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Ejercicio 2",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Ejercicio 3",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Ejercicio 4",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    }
  ],
  //------------------- JS ---------------
  js: [
    {
      titulo: "A6 Galeria foto",
      descripcion:
        "Galería dinámica con un botón que carga grupos secuenciales de imágenes desde Picsum. <ul><li>First Item</li><li>First Item</li><li>First Item</li></ul>",
      url: "https://codepen.io/nadine-Teeki-Smikiss/pen/Ggqmgdp"
    },
    {
      titulo: "Ejercicio 2",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Ejercicio 3",
      descripcion: "Maquetación de un blog falso.",
      url: "https://codepen.io/luis/pen/html1"
    },
    {
      titulo: "Bucle for: Arbol Navidad",
      descripcion:
        "Construir un arbol de navidad mediante un bucle anidado: un bucle externo que recorre las filas verticalmente y un bucle interno que rellena cada línea con asteriscos y espacios,",
      url: "https://codepen.io/nadine-Teeki-Smikiss/pen/emzdzbQ"
    }
  ]
};

//LLAMADA----------------------LLAMADA------------------------LLAMADA----------------------------------------------
let misRedes = "";
document.querySelector("#name").innerHTML =
  portfolio.alumno.nombre + " " + portfolio.alumno.apellido;

document.querySelector("#Avatar").src = portfolio.alumno.img;

document.querySelector("#Avatar").alt =
  portfolio.alumno.nombre + " " + portfolio.alumno.apellido;
//console.log(portfolio.alumno.img);

document.querySelector("#description").innerHTML = portfolio.alumno.quiensoy;
document.querySelector("#description");

document.querySelector("#contacto").innerHTML = portfolio.alumno.contacto;

for (let r = 0; r < portfolio.alumno.redes.length; r++) {
  misRedes += `<li><a class="${portfolio.alumno.redes[r].red}" href="${portfolio.alumno.redes[r].url}" target="_blank">${portfolio.alumno.redes[r].red}</a></li>`;
}
document.querySelector("#redes").innerHTML = misRedes;

//FUNCION-------------------------FUNCTION--------------------FUNCTION---------------------------------------------

function cambiaColor() {
  document.body.style.background = document.getElementById("picker").value;
}

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

//ESTADO DEL BOTON:PULSADO-----------------------------------------------------------------------------------------------

function cambiarTab(categoria) {
  const secciones = document.querySelectorAll(".contenidoTab");
  for (let i = 0; i < secciones.length; i++) {
    secciones[i].style.display = "none";
  }
  document.querySelector("#section-" + categoria).style.display = "block";

  // 1b Buscamos todos los botones
  const botones = document.querySelectorAll(".btnnav");

  // 2b Quitamos la clase 'activo' a todos para resetear
  for (let i = 0; i < botones.length; i++) {
    botones[i].classList.remove("activo");
  }

  // 3b  solo al botón que se acaba de pulsar
  // --> event.currentTarget para saber exactamente qué botón recibió el clic
  event.currentTarget.classList.add("activo");
}

// Busca el botón de HTML y simula un clic
document.querySelector("#btnhtml").click();

function mostrarEjercicios(categoria, idContenedor) {
  // Obtenemos los datos del array correspondiente (html, css o js)
  const datos = portfolio[categoria];
  let misDeberes = "";

  for (let i = 0; i < datos.length; i++) {
    misDeberes += `
      <li class="cardContent">
        <h2>${datos[i].titulo}</h2>
        <p class="descripcion">${datos[i].descripcion}</p>
        <a href="${datos[i].url}" target="_blank">Ver ejercicio</a>
      </li>`;
  }

  // Inyectamos el HTML en el <ul> correspondiente
  document.querySelector(idContenedor).innerHTML = misDeberes;
}

// Llamamos a la función para cada sección
mostrarEjercicios("html", "#html");
mostrarEjercicios("css", "#css");
mostrarEjercicios("js", "#js");