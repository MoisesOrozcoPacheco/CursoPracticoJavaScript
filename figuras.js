function PerimetroCuadrado(lado) {
    return lado * 4;
}

function AreaCuadrado(lado) {
    return lado * lado;
}

//Aqui interactuaos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = PerimetroCuadrado(value);
    alert(perimetro);
}


function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = AreaCuadrado(value);
    alert(perimetro); 
}