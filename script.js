document.addEventListener("DOMContentLoaded", () => {
  const cartasDisponibles = [
    { id: 1, nombre: "Pikachu", precio: 30 },
    { id: 2, nombre: "Charizard", precio: 55 }
  ];

  let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

  // Elementos del DOM
  const btnSiPrimeraVez = document.getElementById("btnSiPrimeraVez");
  const btnNoPrimeraVez = document.getElementById("btnNoPrimeraVez");
  const respuestaBienvenida = document.getElementById("respuestaBienvenida");
  const tiendaSection = document.getElementById("tienda");
  const carritoSection = document.getElementById("carritoSection");
  const formCartas = document.getElementById("formCartas");
  const seleccionCarta = document.getElementById("seleccionCarta");
  const mensajeOferta = document.getElementById("mensajeOferta");
  const carritoLista = document.getElementById("carritoLista");
  const btnFinalizarCompra = document.getElementById("btnFinalizarCompra");
  const resumenCompra = document.getElementById("resumenCompra");

  // Mostrar productos en el carrito
  function mostrarCarrito() {
    carritoLista.innerHTML = "";
    carrito.forEach(carta => {
      const item = document.createElement("li");
      item.textContent = `${carta.nombre} - S/${carta.precio}`;
      carritoLista.appendChild(item);
    });
  }

  // Bienvenida
  btnSiPrimeraVez.addEventListener("click", () => {
    respuestaBienvenida.innerHTML = "¡Bienvenido! Puedes crear tu cuenta para acumular puntos.";
    tiendaSection.style.display = "block";
    carritoSection.style.display = "block";
  });

  btnNoPrimeraVez.addEventListener("click", () => {
    respuestaBienvenida.innerHTML = "¡Bienvenido de nuevo! Puedes iniciar sesión si deseas.";
    tiendaSection.style.display = "block";
    carritoSection.style.display = "block";
  });

  // Agregar carta al carrito
  formCartas.addEventListener("submit", (e) => {
    e.preventDefault();
    const cartaId = parseInt(seleccionCarta.value);
    const carta = cartasDisponibles.find(c => c.id === cartaId);

    if (carta) {
      carrito.push(carta);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      mostrarCarrito();

      if (carta.precio > 50) {
        mensajeOferta.textContent = `¡${carta.nombre} tiene un 20% de descuento por superar los S/50!`;
      } else {
        mensajeOferta.textContent = `La oferta no aplica para ${carta.nombre}.`;
      }

      seleccionCarta.value = "";
    }
  });

  // Finalizar compra
  btnFinalizarCompra.addEventListener("click", () => {
    if (carrito.length === 0) {
      resumenCompra.textContent = "Tu carrito está vacío.";
      return;
    }

    const total = carrito.reduce((sum, carta) => sum + carta.precio, 0);
    const cantidad = carrito.length;
    const nombres = carrito.map(c => c.nombre).join(", ");

    resumenCompra.textContent = `Tu total a pagar es de S/${total} por ${cantidad} producto${cantidad > 1 ? "s" : ""}: ${nombres}.`;
  });

  // Mostrar carrito al cargar
  mostrarCarrito();
});


const btnVaciarCarrito = document.getElementById("btnVaciarCarrito");

btnVaciarCarrito.addEventListener("click", () => {
  carrito = [];
  localStorage.removeItem("carrito");
  mostrarCarrito();
  resumenCompra.textContent = "";
  mensajeOferta.textContent = "";
});
