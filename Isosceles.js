function VerificarDatos(lado1,lado2,lado3)
{
    var cen;
    if(lado1 == lado2)
    {
        cen = true;
    }
    else if (lado1 == lado3)
        {
            cen = true;
        }
        else if(lado2 == lado3)
            {
                cen = true;
            }
    else
    {
        cen = false;
    }
    console.log("El resultado es: " + cen);
    return cen;
}

function Triangulo()
{
    const input1 = document.getElementById("InputLado1");
    const lado1 = input1.value;
    const input2 = document.getElementById("InputLado2");
    const lado2 = input2.value;
    const input3 = document.getElementById("InputLado3");
    const lado3 = input3.value;
    console.log(lado1 + lado2 + lado3);
    var cen = VerificarDatos(lado1,lado2,lado3);
    if(cen == true)
    {
        var area = areaTriangulo(lado1,lado2,lado3);
        alert("Si es un triangulo isosceles y su aréa es:" + area);
    }
    else
    {
        alert("No es un triangulo isosceles, ingresa otros datos.");
        console.log("is false");
    }

}

function areaTriangulo(lado1,lado2,lado3)
{
    var area = (lado1 * lado2 * lado3)/2;
    return area;
}