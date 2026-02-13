<link rel="stylesheet" href="style.css">

<style>
    body{
        display: flex;
        flex-wrap:wrap;
        gap:6px;
        font-family: sans-serif;
    }

    .card{
        text-align:center;
        flex:1 1 0;
        padding: 10px;
        border-radius:20px;
        box-shadow:2px 2px 8px;
    }
</style>

<?php 

    function img($foto,$alt='imagen',$title=''){
        echo "
        <div class='card'>
            <h3>$title</h3> 
            <img src='$foto' alt='$alt' title='$title' class='crap'>
                <figcaption>$alt</figcaption>
            </figure>
        </div>
        ";
    }



img('https://picsum.photos/id/10/200/300','Lago sereno','Reflejo de pinos en el agua');

img('https://picsum.photos/id/10/200/300');

img(title: 'Cascada',foto: 'https://picsum.photos/id/15/200/300',alt: 'Agua cayendo');

img('https://picsum.photos/id/24/200/300','Libro abierto','Páginas de un libro antiguo');

img('https://picsum.photos/id/28/200/300','Bosque neblinoso','Pinos envueltos en niebla');
img('https://picsum.photos/id/29/200/300','Cumbre nevada','Montaña bajo un cielo despejado');
img('https://picsum.photos/id/37/200/300','Campo de flores','Prado colorido en primavera');
img('https://picsum.photos/id/43/200/300','Vía del tren','Rieles perdiéndose en el horizonte');
img('https://picsum.photos/id/48/200/300','Computadora','Escritorio de trabajo moderno');
img('https://picsum.photos/id/54/200/300','Callejón','Calle estrecha en un pueblo europeo');
img('https://picsum.photos/id/57/200/300','Ovejas','Rebaño pastando en la colina');
img('https://picsum.photos/id/63/200/300','Taza de café','Café caliente con arte latte');
img('https://picsum.photos/id/75/200/300','Frutas rojas','Fresas frescas en un cuenco');
img('https://picsum.photos/id/76/200/300','Conejo','Conejo pequeño entre la hierba');
img('https://picsum.photos/id/84/200/300','Cactus','Planta de desierto en maceta');
img('https://picsum.photos/id/102/200/300','Frambuesas','Detalle de frutas silvestres');
img('https://picsum.photos/id/111/200/300','Coche antiguo','Vehículo clásico en la ciudad');
img('https://picsum.photos/id/116/200/300','Costa rocosa','Olas chocando contra el acantilado');
img('https://picsum.photos/id/124/200/300','Ciudad de noche','Luces de edificios y tráfico');
img('https://picsum.photos/id/129/200/300','Parque otoñal','Hojas secas en un banco de madera');
img('https://picsum.photos/id/133/200/300','Coche de carreras','Vehículo deportivo de lujo');
?>
