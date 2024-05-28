const MARCA = prompt ("ingrese la marca de su vehiculo");
const MODELO = parseInt(prompt ("ingrese el año de su vehiculo"));
const SEGUROBASE = 50000;
const COTIZARAÑO = 2000;
const COTIZARSEGURO = (SEGUROBASE , PRECIOAÑO) => SEGUROBASE * PRECIOAÑO; 
const PRECIOAÑO = (MODELO, COTIZARAÑO) => MODELO * COTIZARAÑO;

do{
if(isNaN(MODELO)){
    alert(`Ingrese un numero por favor`);
    break;
} 
else if(2015>MODELO){
    console.log("su vehiculo unicamente puede contratar seguro contra terceros por un valor de $40000");
}
else{
    console.log("su vehiculo es adecuado para contratar cualquier plan de seguro");
}
} while (MODELO<2025){
    COTIZARSEGURO;
}