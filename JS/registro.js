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

    const newProduct = {
      name: productName,
      category: category,
      image: productImage,
      price: price,
      code: productCode,
      attribute1: attribute1,
      attribute2: attribute2,
      attribute3: attribute3,
    };

    if (category === "opciones-seleccion") {
      window.location.href = "../Pages/indicaciones.html";
      return;
    }

    if (productImage === "opciones-seleccion") {
      window.location.href = "./Pages/indicaciones.html";
      return;
    }

    const codeRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d.*\d)[a-zA-Z\d]{8,}$/;
    if (!codeRegex.test(productCode)) {
      alert(
        "El código de producto es incorrecto. Debe contener al menos una minúscula, una mayúscula y dos números."
      );
      window.location.href = "./Pages/indicaciones.html";
      return;
    }

    if (category === "opciones-seleccion") {
      window.location.href = "./Pages/indicaciones.html";
      return;
    }

    if (productImage === "opciones-seleccion") {
      window.location.href = "./Pages/indicaciones.html";
      return;
    }

    if (!productName || !category || !productImage || !price) {
      alert("Por favor, complete todos los campos requeridos.");
      window.location.href = "./Pages/indicaciones.html";
      return;
    }

    window.location.href = "index.html";
  });
});
