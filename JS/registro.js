// Función para redirigir a la página de indicaciones
const dirIndicaciones = () => {
  window.location.href = "../Pages/indicaciones.html";
};

// Función para redirigir a la página de productos
const dirIndex = () => {
  window.location.href = "../";
};

// Función para redirigir a la página de registro de productos
const dirRegistro = () => {
  window.location.href = "../Pages/registro.html";
};

// Función para redirigir a la página de filtros de búsqueda
const dirtFiltros = () => {
  window.location.href = "../Pages/filtros.html";
};

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("productForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const categoria = document.getElementById("categoria").value;
      const imagen = document.getElementById("imagen").value;
      const precio = document.getElementById("precio").value;
      const codProducto = document.getElementById("codProducto").value;
      const atri1 = document.getElementById("atri1").value;
      const atri2 = document.getElementById("atri2").value;
      const atri3 = document.getElementById("atri3").value;

      if (
        !nombre ||
        categoria === "opciones-seleccion" ||
        imagen === "opciones-seleccion" ||
        !precio ||
        precio < 500 ||
        precio > 200000 ||
        !atri1 ||
        !atri2 ||
        !atri3 ||
        !codProductoVal(codProducto)
      ) {
        dirIndicaciones();
        return;
      }

      const nuevoProducto = {
        name: nombre,
        category: categoria,
        image: imagen,
        price: precio,
        code: codProducto,
        attribute1: atri1,
        attribute2: atri2,
        attribute3: atri3,
      };

      const todosLosProductos = new URLSearchParams(nuevoProducto).toString();
      window.location.href = `../?${todosLosProductos}`;
    });

    const codProductoVal = (code) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/;
      return regex.test(code);
    };
  }
});
