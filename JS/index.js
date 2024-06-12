const Marca = prompt ("ingrese la marca de su vehiculo");
const Modelo = parseInt (prompt ("ingrese el año de su vehiculo"));
const KM = parseInt (prompt ("ingrese el kilometraje de su vehiculo"));
const SeguroBase = 50000;
const CotizarAño = 2;
const Vehiculo = {
    "PEUGEOT" : 1.5,
    "RENAULT" : 1.2,
    "FIAT" : 1.2,
    "FORD" : 1.5,
    "VOLSKWAGEN" : 1.2,
    "BMW" : 2,
    "AUDI" : 2
};

const Nuevo = 7;
const Usado = 5;
const Antiguo = 3;

const Kilometraje={
    Nuevo : KM >= 5000,
    Usado : 5000 < KM >= 100000,
    Antiguo : KM > 100000
};
const PrecioAño = (Modelo, CotizarAño) => (Modelo * CotizarAño);
const PrecioModelo = (Vehiculo,SeguroBase) => (Vehiculo * SeguroBase)
const Cotizar = (SeguroBase , PrecioAño, PrecioModelo) => (SeguroBase * PrecioAño * PrecioModelo); 
const CotizarPorKm = (Cotizar, Kilometraje) => (Cotizar * Kilometraje)


function CotizarVehiculo() {
    if(isNaN(Modelo)){
    alert(`Ingrese un numero por favor`);
    } 
    else if(2015>Modelo){
    console.log("su vehiculo unicamente puede contratar seguro contra terceros por un valor de $40000");
    }
    else{
    console.log("su vehiculo es adecuado para contratar cualquier plan de seguro");
    return CotizarSeguro()
    }
}

function CotizarSeguro() {
    PrecioAño();
    PrecioModelo();
    Cotizar();
    CotizarPorKm();
}

CotizarVehiculo();
