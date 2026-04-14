


# Calculadora PWA Pro hecho por Antigravity
```txt
haz una calculadora color rosa y azul para movil, en pwa (manifest.json,sw.ja etc...), que en posicion horizontal se convierte en calculadora cientifica en modo oscuro
```



Esta aplicacion es una calculadora avanzada diseñada como una Progressive Web App (PWA). Permite realizar calculos basicos en una interfaz estetica de colores rosa y azul cuando se encuentra en posicion vertical, y se transforma en una potente herramienta cientifica con modo oscuro cuando el dispositivo se gira a posicion horizontal.

## Descripcion de Funciones

Una de las funciones principales en el archivo script.js es la funcion `calculate()`.

Esta funcion es responsable de procesar las operaciones aritmeticas basicas y avanzadas. Su funcionamiento se basa en tomar el valor previo almacenado, el operador seleccionado y el valor actual introducido por el usuario. Utiliza una estructura de control `switch` para determinar que operacion ejecutar (suma, resta, multiplicacion, division o potencia) y actualiza el estado de la pantalla con el resultado final, limpiando las variables temporales para permitir un nuevo calculo.

## Proceso de Cambio de Orientacion

El paso de la interfaz vertical a la horizontal se gestiona integramente mediante CSS utilizando Media Queries de orientacion.

1. El navegador detecta el cambio en la relacion de aspecto de la ventana a traves de la regla `@media (orientation: landscape)`.
2. Al activarse esta regla, se sobreescriben las variables CSS globales (`:root`) definidas para la paleta de colores. Los tonos claros y vibrantes se sustituyen por una gama de grises oscuros y negros para el modo nocturno.
3. El contenedor de la calculadora cambia su propiedad `display` de una columna simple a una estructura flexible mas ancha, permitiendo que el panel de botones cientificos (que permanece oculto con `display: none` en modo vertical) se haga visible.
4. Se ajusta el tamaño de los botones para optimizar el espacio disponible en pantalla ancha, asegurando una experiencia de usuario fluida sin necesidad de recargar la pagina o ejecutar scripts adicionales para el cambio visual.
