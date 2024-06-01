document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("productForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const productName = document.getElementById("productName").value;
    const category = document.getElementById("category").value;
    const productImage = document.getElementById("productImage").value;
    const price = document.getElementById("price").value;
    const productCode = document.getElementById("productCode").value;
    const attribute1 = document.getElementById("attribute1").value;
    const attribute2 = document.getElementById("attribute2").value;
    const attribute3 = document.getElementById("attribute3").value;

    if (
      !productName ||
      category === "opciones-seleccion" ||
      productImage === "opciones-seleccion" ||
      !price ||
      price < 500 ||
      price > 200000 ||
      !attribute1 ||
      !attribute2 ||
      !attribute3 ||
      !validateProductCode(productCode)
    ) {
      window.location.href = "../Pages/indicaciones.html";
      return;
    }

    const nuevoProducto = {
      name: productName,
      category: category,
      image: productImage,
      price: price,
      code: productCode,
      attribute1: attribute1,
      attribute2: attribute2,
      attribute3: attribute3,
    };

    const todosLosProductos = new URLSearchParams(nuevoProducto).toString();
    window.location.href = `../?${todosLosProductos}`;
  });

  function validateProductCode(code) {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(code);
  }
});
