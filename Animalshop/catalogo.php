<?
// importamos el archivos datos
include 'datos.php';
?>

<ul>
<?php
for($i = 0; $i < count($datos); $i++){
    echo "
    <li>
        <img src='{$datos[$i]['imagen']}' alt='Imagen'>
        <h2>{$datos[$i]['categoria']}</h2>
        <a href='ficha.php?q=$i'> verm más </a>
    </li>";
}
?>
</ul>

