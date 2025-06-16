// Bienvenida a los nuevos usuarios y usuarios recurrentes

function esPrimeraVez() {
  let respuesta = prompt("¿Es tu primera vez en Ludus Magnus? (sí / no)").toLowerCase();
  return respuesta;
}

function deseaLoguear() {
  let respuesta = prompt("¿Deseas loguear a tu cuenta? (sí / no)").toLowerCase();
  return respuesta;
}

function deseaCrearCuenta() {
  let respuesta = prompt("¿Deseas crear una cuenta nueva? (sí / no)").toLowerCase();
  return respuesta;
}

// Simulación de bienvenida
let primeraVez = esPrimeraVez();

if (primeraVez === "sí" || primeraVez === "si") {
  let crear = deseaCrearCuenta();
  if (crear === "sí" || crear === "si") {
    alert("Vamos a crear tu cuenta nueva.");
  } else {
    alert("Puedes explorar sin cuenta, pero no podrás acceder a la acumulación de puntos y otros beneficios.");
  }
} else {
  let loguear = deseaLoguear();
  if (loguear === "sí" || loguear === "si") {
    alert("Iniciando sesión en Ludus Magnus");
  } else {
    alert("Puedes seguir navegando sin iniciar sesión pero no podrás acceder a la acumulación de puntos y otros beneficios.");
  }
}

// Escenario: Hay una oferta por packs de cartas Pokemon pero solo si superan los 50 soles

const cartasDisponibles = [
  { id: 1, nombre: "Pikachu", precio: 30 },
  { id: 2, nombre: "Charizard", precio: 55 },
];

let carrito = [];

function agregamosCartas() {
  let entrada = prompt("Ingresa el número o nombre de la carta que deseas agregar: 1 Pikachu o 2 Charizard").toLowerCase();
  let i = 0;
  let cartaEncontrada = null;

  while (i < cartasDisponibles.length) {
    let carta = cartasDisponibles[i];
    if (
      entrada == carta.id.toString() ||
      entrada === carta.nombre.toLowerCase()
    ) {
      cartaEncontrada = carta;
      break;
    }
    i++;
  }

  if (cartaEncontrada) {
    if (cartaEncontrada.precio < 50) {
      alert("La oferta del 20% menos no aplica, busca otro producto.");
    }
    else {
      alert("¡Esta carta tiene un 20% de descuento por superar los 50 soles!");
    }
    carrito.push(cartaEncontrada);
    alert(`Has agregado ${cartaEncontrada.nombre} al carrito.`);
  } else {
    alert("No se encontró una carta con ese ID o nombre.");
  }
}

// Bucle para agregar otras productos al carro


let continuar = "sí";
while (continuar === "sí" || continuar === "si") {
  agregamosCartas();

// Cierre en caso se quiera agregar otra carta

  continuar = prompt("¿Deseas agregar otra carta? (sí / no)").toLowerCase();
}