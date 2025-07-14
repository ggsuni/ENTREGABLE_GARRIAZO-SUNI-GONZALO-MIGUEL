document.addEventListener("DOMContentLoaded", () => {
  // Datos de cartas disponibles
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

  // Mostrar carrito actual
  function mostrarCarrito() {
    carritoLista.innerHTML = "";
    carrito.forEach(carta => {
      const item = document.createElement("li");
      item.textContent = `${carta.nombre} - S/${carta.precio}`;
      carritoLista.appendChild(item);
    });
  }

  // Eventos de bienvenida
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

  // Evento para agregar cartas al carrito
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

  // Inicializar carrito al cargar la página
  mostrarCarrito();
});