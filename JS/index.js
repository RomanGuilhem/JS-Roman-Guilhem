const SeguroBase = 40000;
const cotizarPorMarca = document.getElementById(Marca);
const Vehiculo = {
    "PEUGEOT" : 1.5,
    "RENAULT" : 1.2,
    "FIAT" : 1.2,
    "FORD" : 1.5,
    "VOLSKWAGEN" : 1.2,
    "BMW" : 2,
    "AUDI" : 2
};

const Modelo = document.getElementById('Año').value;

function Kilometraje(KM) {
    if (KM < 5000) {
        return 2;
    } else if (KM >= 5000 && KM <= 100000) {
        return 3;
    } else {
        return 4;
    }
}

function Cotizar(SeguroBase, cotizarPorMarca, Modelo, Kilometraje) {
    return SeguroBase + cotizarPorMarca * Modelo + Kilometraje;
}

function CotizarVehiculo() {
    const Kilometros = parseInt(document.getElementById('KM').value);
    const Modelo = document.getElementById('Año').value;

    if (Modelo>=2025) {
        Swal.fire({
            title: 'Error año de fabricacion',
            text: 'El año de fabricacion ingresado es incorrecto, por favor vuelva a ingresar los datos correctamente',
            icon: 'warning',
            confirmButtonText: 'Reintentar'
        });
    } else if (Modelo < 2015)  {
        console.log("Su vehículo únicamente puede contratar seguro contra terceros por un valor de $40000");
    } else {
    const cotizacion = Cotizar(SeguroBase, cotizarPorMarca, Modelo, Kilometros)
    Swal.fire({
        title: 'Seguro cotizado',
        text: 'El valor de un seguro contra todo riesgo para su vehiculo es de $ ' + cotizacion,
        icon: 'info',
        confirmButtonText: 'Continuar'
    })
    localStorage.setItem("valor", cotizacion)
}}


    const app = document.getElementById('contenedorMcqueen');

let url = "https://pokeapi.co/api/v2/pokemon/pikachu";

fetch(url)

    .then(respuesta => respuesta.json())

    .then((data) => mostrarMcqueen(data))

    function mostrarPokemon(data){

        const div = document.createElement("div");

        div.classList.add("Mcqueen");

        div.innnerHTML = `

            <h2>${data.name}</h2>

            <img src="${sprites.other['official-artwork'].front_default}" alt="">

        `

    

        app.append(div)

    }

<div id="contenedorMcqueen"></div>