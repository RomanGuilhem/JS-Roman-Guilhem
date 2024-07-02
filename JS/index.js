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
    return SeguroBase - cotizarPorMarca * Modelo + Kilometraje;
}

function CotizarVehiculo() {
    const Kilometros = parseInt(document.getElementById('KM').value);
    const Modelo = document.getElementById('Año').value;

    if (isNaN(Modelo)) {
        alert(`Ingrese un número por favor`);
    } else if (Modelo < 2015) {
        console.log("Su vehículo únicamente puede contratar seguro contra terceros por un valor de $40000");
    } else {
        console.log("Su vehículo es adecuado para contratar cualquier plan de seguro");
    }

    const cotizacion = Cotizar(SeguroBase, cotizarPorMarca, Modelo, Kilometros);
    console.log("El valor de un seguro contra todo riesgo para su vehiculo es de $", cotizacion);
    localStorage.setItem("valor", cotizacion)
}

if(Modelo>2025){
    console.log ("Por favor, ingrese correctamente sus datos")
}
