var contenedor = '.JScontent';

function colocarCapaDespues(capa, contenido){
    $(capa).after(contenido);
}

function colocarCapaAntes(capa, contenido){
    $(capa).before(contenido);
}

function cambiarContenido(capa, contenido){
    $(capa).html(contenido);
}

function animarCapa(capa, animacion){
    console.log(animacion);
    $(capa).animate(animacion);
}

function anadirClase(capa, clase){
    $(capa).addClass(clase);
}

function eliminarClase(capa, clase){
    $(capa).removeClass(clase);
}

function reset(){
    var valorDefecto ="";
    cambiarContenido(contenedor,valorDefecto);
}


$(document).on('click', 'ul li a', function(){ 
    var $this= $(this);
    reset();
    switch ($this.data('funcion')){
        case 'añadir':
            anadirClase(contenedor, $this.data('style'));
            break;
        case 'quitar':
            eliminarClase(contenedor, $this.data('style'));
            break;
        case 'cambiar':
            var nuevoContenido = "Este sera el nuevo contenido de la capa";
            cambiarContenido(contenedor, nuevoContenido);
            break;
        case 'despues':
            var nuevoContenido = "<div><p>Este sera el nuevo contenido de la capa</p></div>";
            colocarCapaDespues(contenedor, nuevoContenido);
            break;
        case 'antes':
            var nuevoContenido = "<div><p>Este sera el nuevo contenido de la capa</p></div>";
            colocarCapaAntes(contenedor, nuevoContenido);
            break;
        case 'animate':
            animarCapa(contenedor, $this.data('animacion'));
            break;
    }

});
//animate