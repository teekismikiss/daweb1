<?
//ficha.php?q=15
$animal=$_GET['q']; //15

// importamos el archivos datos
include 'datos.php';

?>


<a href="catalogo.php">volver</a>

<h1><?=$datos[$animal]['categoria'];?></h1>
<img src='<?= $datos[$animal]['imagen']?>' alt='Imagen'>
<p><?=$datos[$animal]['producto1'];?></p>
<p><?=$datos[$animal]['producto2'];?></p>
