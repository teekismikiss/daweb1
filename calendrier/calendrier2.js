const meses = ['Xineru', 'Febreru', 'Marzu', 'Abril', 'Mayu', 'Xunu', 'Xunetu', 'Agostu', 'Setiembre', 'Ochobre', 'Payares', 'Avientu'];
let semana = ['L', 'M', 'M', 'X', 'V', 'S', 'D'];
let diasAlMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
let inicio = [4, 7, 7, 3, 5, 1, 3, 6, 2, 4, 7, 2];
let calendario = "";

for (let m = 0; m < meses.length; m++) {
    calendario += `<div class='mes-contenedor ${meses[m]}'>`;
    calendario += "<h3 class='meses'>" + meses[m] + "</h3>";
    calendario += "<ul class='mes'>";

    // Cabecera de la semana
    for (let d = 0; d < semana.length; d++) {
        calendario += "<li class='cabecera'>" + semana[d] + "</li>";
    }

    // Huecos vacíos para que el día 1 coincida con 'inicio'
    // Restar£ 1 porque el primer día ya ocupa un espacio
    for (let h = 1; h < inicio[m]; h++) {
        calendario += `<li class="dia-vacio"></li>`;
    }

    // 3. Días del mes
    for (let i = 1; i <= diasAlMes[m]; i++) {
        calendario += `<li class="dia">${i}</li>`;
    }

    calendario += "</ul>";
    calendario += "</div>";
}

document.querySelector('.calendario').innerHTML = calendario;