let menuVisible = false 

// Aqui haremos el proceso de mostrar o ocultar el menu 

function mostrarOcultarMenu(){
    if (menuVisible){
        document.getElementById('nav').classList=''
        menuVisible = false
    } else {
        document.getElementById('nav').classList='responsive'
        menuVisible = true
    }
}

function seleccionar(){
    // Aqui haremos que cuando se seleccione un elemento el menu despararezca de la pantalla 

    document.getElementById('nav').classList = ''
    menuVisible = false
}