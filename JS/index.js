const SeguroBase = 40000;

const Vehiculo = {
    "PEUGEOT": 1.5,
    "RENAULT": 1.2,
    "FIAT": 1.2,
    "FORD": 1.5,
    "VOLKSWAGEN": 1.2,
    "BMW": 2,
    "AUDI": 2
};

const vehiculoArray = Object.entries(Vehiculo).map(([marca, factor]) => ({ marca, factor }));

function Kilometraje(KM) {
    if (KM < 5000) {
        return 2;
    } else if (KM >= 5000 && KM <= 100000) {
        return 5;
    } else {
        return 8;
    }
}

function Cotizar(SeguroBase, factorMarca, Modelo, factorKilometraje) {
    return SeguroBase + (factorMarca * Modelo) + (factorKilometraje * 1000);
}

function CotizarVehiculo() {
    const cotizarPorMarca = document.getElementById('Marca').value.toUpperCase();
    const Modelo = parseInt(document.getElementById('Año').value);
    const Kilometros = parseInt(document.getElementById('KM').value);

    if (Modelo >= 2025) {
        Swal.fire({
            title: 'Error año de fabricación',
            text: 'El año de fabricación ingresado es incorrecto, por favor vuelva a ingresar los datos correctamente',
            icon: 'warning',
            confirmButtonText: 'Reintentar'
        });
    } else if (Modelo < 2015) {
        Swal.fire({
            title: 'Su vehículo no cumple los requisitos contra todo riesgo',
            text: 'Su vehículo únicamente puede contratar seguro contra terceros por un valor de $40000',
            icon: 'info',
            confirmButtonText: 'Continuar'
        });
    } else {
        const selectedVehicle = vehiculoArray.find(vehiculo => vehiculo.marca === cotizarPorMarca);

        if (!selectedVehicle) {
            Swal.fire({
                title: 'Marca no aceptada',
                text: 'Disculpe, pero no trabajamos con seguros contra todo riesgo para la marca de su vehículo',
                icon: 'warning',
                confirmButtonText: 'Reintentar'
            });
            return;
        }

        const factorMarca = selectedVehicle.factor;
        const factorKilometraje = Kilometraje(Kilometros);

        const cotizacion = Cotizar(SeguroBase, factorMarca, Modelo, factorKilometraje);
        Swal.fire({
            title: 'Seguro cotizado',
            text: 'El valor de un seguro contra todo riesgo para su vehículo es de $ ' + cotizacion,
            icon: 'info',
            confirmButtonText: 'Continuar'
        });
        localStorage.setItem("valor", cotizacion);
    }
}


function calcularInversion() {
    const cantidadInicial = parseFloat(document.getElementById('cantidadInicial').value);
    const tasaInteres = parseFloat(document.getElementById('tasaInteres').value) / 100;
    const años = parseInt(document.getElementById('años').value);

    if (isNaN(cantidadInicial) || isNaN(tasaInteres) || isNaN(años) || cantidadInicial <= 0 || tasaInteres <= 0 || años <= 0) {
        Swal.fire({
            title: 'Error en los datos ingresados',
            text: 'Por favor ingrese valores válidos para todos los campos',
            icon: 'warning',
            confirmButtonText: 'Reintentar'
        });
        return;
    }

    const valorFuturo = cantidadInicial * Math.pow((1 + tasaInteres), años);

    Swal.fire({
        title: 'Cálculo de Inversión',
        text: `El valor futuro de su inversión es de $${valorFuturo.toFixed(2)}`,
        icon: 'info',
        confirmButtonText: 'Continuar'
    });
}