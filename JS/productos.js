const productos = [
  {
    id: 1,
    nombre: "Aspirina",
    categoria: "Medicamentos",
    imagen:
      "https://www.aspirina.com.co/sites/g/files/vrxlpx49176/files/2022-08/aspirina-ultra-producto_1.png",
    precio: 5000,
    codigo: "Aaa00000",
    atributo1: "Dosificación: 500 mg por tableta",
    atributo2: "Alivio del dolor",
    atributo3: "Ingredientes activos: Ácido acetilsalicílico",
  },
  {
    id: 2,
    nombre: "Shampoo Pantene",
    categoria: "Cuidado Personal",
    imagen:
      "https://static.beautytocare.com/cdn-cgi/image/width=1440,height=1200,f=auto/media/catalog/product//p/a/pantene-pro-v-nutri-plex-repair-protect-shampoo-600ml_1.jpg",
    precio: 12000,
    codigo: "Aaa00001",
    atributo1: "Tipo de producto: Shampoo",
    atributo2: "Para todo tipo de cabello",
    atributo3: "Ingredientes: Pantenol, Pro-Vitaminas",
  },
  {
    id: 3,
    nombre: "Labial Maybelline SuperStay",
    categoria: "Belleza",
    imagen:
      "https://cromantic.vtexassets.com/arquivos/ids/180285-800-auto?v=638156392106900000&width=800&height=auto&aspect=true",
    precio: 18000,
    codigo: "Aaa00002",
    atributo1: "Tipo de producto: Labial líquido",
    atributo2: "Larga duración",
    atributo3: "Rojo intenso",
  },
  {
    id: 4,
    nombre: "Pañales Huggies Natural Care",
    categoria: "Bebés",
    imagen:
      "https://copservir.vtexassets.com/arquivos/ids/1268269-800-auto?v=638459981147800000&width=800&height=auto&aspect=true",
    precio: 45000,
    codigo: "Aaa00003",
    atributo1: "Tipo de producto: Pañales desechables",
    atributo2: "Talla: Recién nacido (RN)",
    atributo3: "Material suave y absorbente",
  },
  {
    id: 5,
    nombre: "Multivitamínico Centrum",
    categoria: "Salud y Bienestar",
    imagen:
      "https://madeira.com.co/cdn/shop/products/300054463937_1_800x.jpg?v=1632971479",
    precio: 30000,
    codigo: "Aaa00004",
    atributo1: "Tipo de producto: Suplemento vitamínico",
    atributo2: "Contiene vitaminas A, C, E, zinc, y más",
    atributo3: "Beneficios para la salud general",
  },
  {
    id: 6,
    nombre: "Alimento para gatos Whiskas",
    categoria: "Mascotas",
    imagen:
      "https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/0/706460000641_33.jpg",
    precio: 25000,
    codigo: "Aaa00005",
    atributo1: "Alimento seco para gatos",
    atributo2: "Adulto",
    atributo3: "Sabor: Pollo y carne",
  },
  {
    id: 7,
    nombre: "Kit de Primeros Auxilios",
    categoria: "Primeros Auxilios",
    imagen:
      "https://cdn1.totalcommerce.cloud/homesentry/product-zoom/es/botiquin-005b-primeros-auxilios-13-elementos-1.webp",
    precio: 50000,
    codigo: "Aaa00006",
    atributo1: "Contenido: Vendas, gasas, alcohol, tijeras, etc.",
    atributo2: "Ideal para emergencias en el hogar y viajes",
    atributo3: "Tamaño compacto y portátil",
  },
  {
    id: 8,
    nombre: "Detergente Líquido Ariel",
    categoria: "Hogar",
    imagen:
      "https://static.merqueo.com/images/products/large/976a66e7-c458-4729-9a4f-47d24aa656cf.jpg",
    precio: 15000,
    codigo: "Aaa00007",
    atributo1: "Tipo de producto: Detergente líquido para ropa",
    atributo2: "Limpieza profunda",
    atributo3: "Fragancia fresca",
  },
  {
    id: 9,
    nombre: "Ibuprofeno",
    categoria: "Medicamentos",
    imagen:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/335553/7702057442514_2_Ibuprofeno-Mk-400Mg-Caja-X-100-Tabletas-Recubiertas.jpg?v=638155611110030000",
    precio: 7000,
    codigo: "Aaa00008",
    atributo1: "Dosificación: 400 mg por tableta",
    atributo2: "Alivio del dolor y la inflamación",
    atributo3: "Ingredientes activos: Ibuprofeno",
  },
  {
    id: 10,
    nombre: "Crema humectante Nivea",
    categoria: "Cuidado Personal",
    imagen:
      "https://images-us.nivea.com/-/media/miscellaneous/media-center-items/8/9/c/297505-web_1010x1180_transparent_png.png",
    precio: 10000,
    codigo: "Aaa00009",
    atributo1: "Tipo de producto: Crema humectante para el cuerpo",
    atributo2: "Hidratación intensiva",
    atributo3: "Ingredientes: Aceite de almendras y vitamina E",
  },
  {
    id: 11,
    nombre: "Mascarilla facial de arcilla L'Oréal",
    categoria: "Belleza",
    imagen:
      "https://i5.walmartimages.com.mx/mg/images/product-images/img_large/00750955280664l.jpg",
    precio: 25000,
    codigo: "Aaa00010",
    atributo1: "Tipo de producto: Mascarilla facial de limpieza profunda",
    atributo2: "Purifica y matifica la piel",
    atributo3: "Con arcilla pura",
  },
  {
    id: 12,
    nombre: "Pañales Pampers",
    categoria: "Bebés",
    imagen:
      "https://www.alkosto.com/medias/037000862239-001-750Wx750H?context=bWFzdGVyfGltYWdlc3w0NTI2NTN8aW1hZ2UvanBlZ3xhVzFoWjJWekwyZzJaaTlvTnpJdk1USXpORGM1TWpZME5EWXhNVEF1YW5CbnwyNzYwOWRlZDA1ZTcxYWMwYzY3YjJiNzBjNzE1MDhlZjQxZTA1NzEyMGZiZDRiNzMyOWEzZmZlYWZhMTE3M2Nj",
    precio: 55000,
    codigo: "Aaa00011",
    atributo1: "Tipo de producto: Pañales desechables",
    atributo2: "Talla: Etapa 3 (5-9 kg)",
    atributo3: "Material suave y absorbente",
  },
  {
    id: 13,
    nombre: "Omega-3 Nature Made",
    categoria: "Salud y Bienestar",
    imagen:
      "https://puroestadofisico.com/cdn/shop/files/29488399974460_800x.png?v=1686048839",
    precio: 40000,
    codigo: "Aaa00012",
    atributo1: "Tipo de producto: Suplemento dietético",
    atributo2: "Contiene ácidos grasos omega-3",
    atributo3: "Beneficios para la salud cardiovascular",
  },
  {
    id: 14,
    nombre: "Comida para perros Pedigree",
    categoria: "Mascotas",
    imagen:
      "https://www.agrocampo.com.co/media/catalog/product/cache/d51e0dc10c379a6229d70d752fc46d83/1/1/111101967-min.jpg",
    precio: 35000,
    codigo: "Aaa00013",
    atributo1: "Tipo de producto: Alimento seco para perros adultos",
    atributo2: "Sabores variados (pollo, carne)",
    atributo3: "Enriquecido con vitaminas y minerales",
  },
  {
    id: 15,
    nombre: "Kit de Vendajes Adhesivos",
    categoria: "Primeros Auxilios",
    imagen: "https://m.media-amazon.com/images/I/71QvH6DAusL.jpg",
    precio: 20000,
    codigo: "Aaa00014",
    atributo1: "Contenido: Vendajes de diferentes tamaños",
    atributo2: "Adhesivos y flexibles",
    atributo3: "Ideal para cortes y raspaduras",
  },
  {
    id: 16,
    nombre: "Ambientador Glade",
    categoria: "Hogar",
    imagen:
      "https://falabella.scene7.com/is/image/FalabellaCO/123162507_1?wid=800&hei=800&qlt=70",
    precio: 8000,
    codigo: "Aaa00015",
    atributo1: "Tipo de producto: Ambientador en aerosol",
    atributo2: "Fragancia: Lavanda",
    atributo3: "Elimina los malos olores",
  },
  {
    id: 17,
    nombre: "Paracetamol",
    categoria: "Medicamentos",
    imagen:
      "https://www.laboratoriochile.cl/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2015/11/Paracetamol_500MG_16C_BE_HD.jpg.webp",
    precio: 4000,
    codigo: "Aaa00016",
    atributo1: "Dosificación: 500 mg por tableta",
    atributo2: "Alivio del dolor y la fiebre",
    atributo3: "Ingredientes activos: Paracetamol",
  },
  {
    id: 18,
    nombre: "Desodorante Rexona",
    categoria: "Cuidado Personal",
    imagen:
      "https://clickdelahorro.com.co/wp-content/uploads/2020/12/img_6156.png",
    precio: 9000,
    codigo: "Aaa00017",
    atributo1: "Tipo de producto: Desodorante en aerosol",
    atributo2: "Protección contra el sudor y el mal olor",
    atributo3: "Fragancia: Fresh",
  },
  {
    id: 19,
    nombre: "Máscara de pestañas L'Oréal",
    categoria: "Belleza",
    imagen:
      "https://static.sweetcare.pt/img/prd/488/v-638272855327707847/loreal-paris-013594ol_03.jpg",
    precio: 15000,
    codigo: "Aaa00018",
    atributo1: "Tipo de producto: Máscara de pestañas",
    atributo2: "Volumen y alargamiento",
    atributo3: "Color: Negro intenso",
  },
  {
    id: 20,
    nombre: "Toallitas húmedas Huggies",
    categoria: "Bebés",
    imagen:
      "https://copservir.vtexassets.com/arquivos/ids/1338591-800-auto?v=638517006303370000&width=800&height=auto&aspect=true",
    precio: 18000,
    codigo: "Aaa00019",
    atributo1: "Tipo de producto: Toallitas húmedas para bebés",
    atributo2: "Dermatológicamente probadas",
    atributo3: "Suaves y resistentes",
  },
  {
    id: 21,
    nombre: "Calcio + Vitamina D Nature's Bounty",
    categoria: "Salud y Bienestar",
    imagen:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrt/nrt04233/y/15.jpg",
    precio: 28000,
    codigo: "Aaa00020",
    atributo1: "Tipo de producto: Suplemento de calcio",
    atributo2: "Fortalece los huesos y dientes",
    atributo3: "Con vitamina D para una mejor absorción",
  },
  {
    id: 22,
    nombre: "Alimento para peces Tetra",
    categoria: "Mascotas",
    imagen:
      "https://walmartcr.vtexassets.com/arquivos/ids/175753-800-450?v=637541411673400000&width=800&height=450&aspect=true",
    precio: 12000,
    codigo: "Aaa00021",
    atributo1: "Tipo de producto: Alimento en escamas para peces tropicales",
    atributo2: "Enriquecido con proteínas y vitaminas",
    atributo3: "Ayuda a mantener colores vivos",
  },
  {
    id: 23,
    nombre: "Gel antiséptico para manos Germ-X",
    categoria: "Primeros Auxilios",
    imagen:
      "https://locatelcolombia.vtexassets.com/arquivos/ids/232516-800-450?v=637414898282070000&width=800&height=450&aspect=true",
    precio: 6000,
    codigo: "Aaa00022",
    atributo1: "Tipo de producto: Gel desinfectante para manos",
    atributo2: "Mata el 99.99% de los gérmenes",
    atributo3: "Con aloe vera para una hidratación suave",
  },
  {
    id: 24,
    nombre: "Ambientador eléctrico Air Wick",
    categoria: "Hogar",
    imagen:
      "https://vixark.b-cdn.net/lp-i-i-g/ambientador-el%C3%A9ctrico-con-aroma-a-canela-y-manzana-air-wick-21ml.jpg",
    precio: 10000,
    codigo: "Aaa00023",
    atributo1: "Tipo de producto: Ambientador eléctrico con recambio",
    atributo2: "Fragancia continua hasta por 45 días",
    atributo3: "Control de intensidad ajustable",
  },
  {
    id: 25,
    nombre: "Loratadina",
    categoria: "Medicamentos",
    imagen:
      "https://copservir.vtexassets.com/arquivos/ids/1266679-800-auto?v=638459552691800000&width=800&height=auto&aspect=true",
    precio: 8000,
    codigo: "Aaa00024",
    atributo1: "Dosificación: 10 mg por tableta",
    atributo2: "Alivio de los síntomas de alergia",
    atributo3: "Antihistamínico no sedante",
  },
  {
    id: 26,
    nombre: "Jabón Dove",
    categoria: "Cuidado Personal",
    imagen:
      "https://vaquitaexpress.com.co/media/catalog/product/cache/e89ece728e3939ca368b457071d3c0be/7/7/7702006201346_31.jpg",
    precio: 5000,
    codigo: "Aaa00025",
    atributo1: "Tipo de producto: Jabón en barra",
    atributo2: "Hidratación suave para la piel",
    atributo3: "Fórmula con 1/4 de crema humectante",
  },
  {
    id: 27,
    nombre: "Esmalte de uñas Essie",
    categoria: "Belleza",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_816242-MCO46617324569_072021-O.webp",
    precio: 12000,
    codigo: "Aaa00026",
    atributo1: "Tipo de producto: Esmalte de uñas",
    atributo2: "Colores variados y duraderos",
    atributo3: "Acabado brillante",
  },
  {
    id: 28,
    nombre: "Leche en polvo Nestlé Nido",
    categoria: "Bebés",
    imagen:
      "https://www.nestleprofessional-latam.com/sites/default/files/styles/np_product_detail/public/2023-01/NIDO%20LEP%20Instan%2026%25MG%206x1350gCL%C2%A0SKU%2012518226.png?itok=eOP0_ztb",
    precio: 40000,
    codigo: "Aaa00027",
    atributo1: "Tipo de producto: Leche en polvo para niños",
    atributo2: "Fórmula fortificada con vitaminas y minerales",
    atributo3: "Edad recomendada: 1 año en adelante",
  },
  {
    id: 29,
    nombre: "Melatonina Natrol",
    categoria: "Salud y Bienestar",
    imagen:
      "https://cdnx.jumpseller.com/mis-vitaminas/image/27911193/resize/610/610?16644956462.jpg",
    precio: 20000,
    codigo: "Aaa00028",
    atributo1: "Tipo de producto: Suplemento de melatonina",
    atributo2: "Ayuda a conciliar el sueño",
    atributo3: "Liberación rápida",
  },
  {
    id: 30,
    nombre: "Alimento para pájaros Kaytee",
    categoria: "Mascotas",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_623725-MCO73000956352_112023-O.webp",
    precio: 15000,
    codigo: "Aaa00029",
    atributo1: "Tipo de producto: Mezcla de semillas para aves",
    atributo2: "Enriquecido con vitaminas y minerales",
    atributo3: "Para pájaros pequeños y medianos",
  },
  {
    id: 31,
    nombre: "Termómetro digital",
    categoria: "Primeros Auxilios",
    imagen:
      "https://tmecol.com/wp-content/uploads/2021/09/TME-TermometroPR.jpg",
    precio: 18000,
    codigo: "Aaa00030",
    atributo1: "Tipo de producto: Termómetro oral y axilar",
    atributo2: "Lectura rápida y precisa",
    atributo3: "Pantalla LCD de fácil lectura",
  },
  {
    id: 32,
    nombre: "Ambientador en gel Febreze",
    categoria: "Hogar",
    imagen: "https://content.etilize.com/Original/1059490377.jpg",
    precio: 10000,
    codigo: "Aaa00031",
    atributo1: "Tipo de producto: Ambientador en gel",
    atributo2: "Fragancia: Frescor de la mañana",
    atributo3: "Elimina los malos olores de forma duradera",
  },
  {
    id: 33,
    nombre: "Vitamina C",
    categoria: "Medicamentos",
    imagen:
      "https://media.harkercentropediatrico.com/tienda/250-large_default/vitamina-c-masticable-sobre-x-10.jpg",
    precio: 6000,
    codigo: "Aaa00032",
    atributo1: "Dosificación: 500 mg por tableta",
    atributo2: "Refuerza el sistema inmunológico",
    atributo3: "Contribuye a la salud de la piel",
  },
  {
    id: 34,
    nombre: "Enjuague bucal Listerine",
    categoria: "Cuidado Personal",
    imagen:
      "https://copservir.vtexassets.com/arquivos/ids/1255425-800-auto?v=638456019137430000&width=800&height=auto&aspect=true",
    precio: 8000,
    codigo: "Aaa00033",
    atributo1: "Tipo de producto: Enjuague bucal",
    atributo2: "Protección contra la placa y las bacterias",
    atributo3: "Frescor duradero",
  },
  {
    id: 35,
    nombre: "Paleta de sombras de ojos NYX",
    categoria: "Belleza",
    imagen: "https://m.media-amazon.com/images/I/61SWjLCijsL._SL1001_.jpg",
    precio: 20000,
    codigo: "Aaa00034",
    atributo1: "Tipo de producto: Paleta de sombras de ojos",
    atributo2: "Variedad de colores y acabados",
    atributo3: "Pigmentación intensa",
  },
  {
    id: 36,
    nombre: "Toallitas húmedas Pampers",
    categoria: "Bebés",
    imagen:
      "https://exitocol.vtexassets.com/arquivos/ids/11732830/TOALLITAS-HUMEDAS-BABY-FRESH-1507764_d.jpg?v=637795765677870000",
    precio: 20000,
    codigo: "Aaa00035",
    atributo1: "Tipo de producto: Toallitas húmedas para bebés",
    atributo2: "Dermatológicamente probadas",
    atributo3: "Extra suaves y resistentes",
  },
  {
    id: 37,
    nombre: "Vitamina D3",
    categoria: "Salud y Bienestar",
    imagen:
      "https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/nrt/nrt19377/y/48.jpg",
    precio: 10000,
    codigo: "Aaa00036",
    atributo1: "Tipo de producto: Suplemento de vitamina D",
    atributo2: "Contribuye a la salud ósea y muscular",
    atributo3: "Absorción rápida y fácil",
  },
  {
    id: 38,
    nombre: "Alimento para conejos Oxbow",
    categoria: "Mascotas",
    imagen:
      "https://hamstersmedellin.com/wp-content/uploads/2021/08/Oxbow-Oxbow-Essentials-Junior_Mesa-de-trabajo-1.png",
    precio: 30000,
    codigo: "Aaa00037",
    atributo1: "Tipo de producto: Alimento para conejos adultos",
    atributo2: "Alta fibra y nutrientes esenciales",
    atributo3: "Ayuda a mantener la salud dental",
  },
  {
    id: 39,
    nombre: "Esparadrapo adhesivo",
    categoria: "Primeros Auxilios",
    imagen:
      "https://imcolmedica.com.co/wp-content/uploads/2022/03/esparadrapo-micropore-de-3-x-10-removebg-preview.png",
    precio: 5000,
    codigo: "Aaa00038",
    atributo1: "Tipo de producto: Esparadrapo de tela",
    atributo2: "Flexible y resistente al agua",
    atributo3: "Corte fácil a medida",
  },
  {
    id: 40,
    nombre: "Ambientador en spray Ozium",
    categoria: "Hogar",
    imagen: "https://m.media-amazon.com/images/I/51kXQ8hPelL.jpg",
    precio: 12000,
    codigo: "Aaa00039",
    atributo1: "Tipo de producto: Ambientador en spray",
    atributo2: "Neutraliza y elimina olores desagradables",
    atributo3: "Fragancia original",
  },
  {
    id: 41,
    nombre: "Acetaminofén",
    categoria: "Medicamentos",
    imagen: "https://www.disfarma.com.co/fotosproductos/macro_producto_3.jpg",
    precio: 6000,
    codigo: "Aaa00040",
    atributo1: "Dosificación: 500 mg por tableta",
    atributo2: "Alivio del dolor y la fiebre",
    atributo3: "Efecto rápido y duradero",
  },
  {
    id: 42,
    nombre: "Crema de afeitar Gillette",
    categoria: "Cuidado Personal",
    imagen:
      "https://lh3.googleusercontent.com/S6pr2PNSvAMxk5poVeI7Y5IgVDphBEcAsNU67Esp1YHxZSuBta9AOCWedR_E5uH3FyLKFQ9T_CNBKmxb-CsSTumACmyZUI_DPumNHt5xNMeELSup_A=s360",
    precio: 7000,
    codigo: "Aaa00041",
    atributo1: "Tipo de producto: Crema de afeitar para hombres",
    atributo2: "Suaviza la barba para un afeitado más cómodo",
    atributo3: "Hidrata la piel",
  },
  {
    id: 43,
    nombre: "Paleta de contorno e iluminador Anastasia Beverly Hills",
    categoria: "Belleza",
    imagen:
      "https://www.freyadivinavanidad.com/cdn/shop/files/c6d3c31798d768a5d5491024dadd8c56_1200x1200.jpg?v=1700185643",
    precio: 40000,
    codigo: "Aaa00042",
    atributo1: "Tipo de producto: Paleta de contorno e iluminador",
    atributo2: "Tonos universales para esculpir y resaltar el rostro",
    atributo3: "Acabado natural y duradero",
  },
  {
    id: 44,
    nombre: "Leche de fórmula Similac",
    categoria: "Bebés",
    imagen:
      "https://copservir.vtexassets.com/arquivos/ids/1157069-800-auto?v=638402159558470000&width=800&height=auto&aspect=true",
    precio: 50000,
    codigo: "Aaa00043",
    atributo1: "Tipo de producto: Leche de fórmula infantil en polvo",
    atributo2: "Fórmula completa y equilibrada",
    atributo3: "Nutrición óptima para el crecimiento y desarrollo",
  },
  {
    id: 45,
    nombre: "Colágeno hidrolizado",
    categoria: "Salud y Bienestar",
    imagen:
      "https://www.beautyboost.com.co/cdn/shop/files/COLAGENOCOLAMBIENTADO.jpg?v=1693583760",
    precio: 25000,
    codigo: "Aaa00044",
    atributo1: "Tipo de producto: Suplemento de colágeno en polvo",
    atributo2: "Promueve la salud de la piel, cabello y articulaciones",
    atributo3: "Fácil de mezclar en líquidos",
  },
  {
    id: 46,
    nombre: "Arena para gatos Tidy Cats",
    categoria: "Mascotas",
    imagen:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyODtt3Iup52hxeiQF5UWngKxrz2zp8YThdg&s",
    precio: 20000,
    codigo: "Aaa00045",
    atributo1: "Tipo de producto: Arena aglomerante para gatos",
    atributo2: "Controla los olores de forma efectiva",
    atributo3: "Fácil de limpiar",
  },
  {
    id: 47,
    nombre: "Botiquín de viaje compacto",
    categoria: "Primeros Auxilios",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_952637-MCO52758184436_122022-O.webp",
    precio: 30000,
    codigo: "Aaa00046",
    atributo1: "Contenido: Vendajes, gasas, alcohol, tijeras, etc.",
    atributo2: "Diseño compacto y portátil",
    atributo3: "Ideal para viajes y actividades al aire libre",
  },
  {
    id: 48,
    nombre: "Limpiador multiusos Ajax",
    categoria: "Hogar",
    imagen:
      "https://olimpica.vtexassets.com/arquivos/ids/875292-800-450?v=637937761017400000&width=800&height=450&aspect=true",
    precio: 8000,
    codigo: "Aaa00047",
    atributo1: "Tipo de producto: Limpiador líquido multiusos",
    atributo2: "Elimina la suciedad y la grasa",
    atributo3: "Fragancia fresca de limón",
  },
  {
    id: 49,
    nombre: "Tijeras de primeros auxilios",
    categoria: "Primeros Auxilios",
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_808373-MCO50698389873_072022-O.webp",
    precio: 5000,
    codigo: "Aaa00048",
    atributo1: "Tipo de producto: Tijeras de seguridad con punta roma",
    atributo2: "Ideal para cortar vendajes y prendas de vestir",
    atributo3: "Mango ergonómico para un agarre cómodo",
  },
  {
    id: 50,
    nombre: "Desinfectante para superficies Lysol",
    categoria: "Hogar",
    imagen:
      "https://olimpica.vtexassets.com/arquivos/ids/1422959/7891035001055_1.jpg?v=638512977868830000",
    precio: 12000,
    codigo: "Aaa00049",
    atributo1: "Tipo de producto: Aerosol desinfectante",
    atributo2: "Elimina el 99.9% de gérmenes y bacterias",
    atributo3: "Aroma fresco y limpio",
  },
];

const productosPorPagina = 15;
let paginaActual = 1;

// Obtener los datos del nuevo producto de la URL si existen
const urlParams = new URLSearchParams(window.location.search);
const nuevoProducto = {
  nombre: urlParams.get("name"),
  categoria: urlParams.get("category"),
  imagen: urlParams.get("image"),
  precio: parseFloat(urlParams.get("price")),
  codigo: urlParams.get("code"),
  atributo1: urlParams.get("attribute1"),
  atributo2: urlParams.get("attribute2"),
  atributo3: urlParams.get("attribute3"),
};

// Filtrar valores nulos para identificar si hay un nuevo producto en la URL
const nuevoProductoValido = Object.values(nuevoProducto).every(
  (value) => value !== null,
);
// Si hay un nuevo producto válido, añadirlo a la lista de productos iniciales
if (nuevoProductoValido) {
  productos.push(nuevoProducto);
}

// Función para mostrar los productos en la página actual
const mostrarProductos = () => {
  const startIndex = (paginaActual - 1) * productosPorPagina;
  const endIndex = paginaActual * productosPorPagina;
  const productosHTML = productos
    .slice(startIndex, endIndex)
    .map((producto) => {
      return `
            <div class="producto">
                <h3>${producto.nombre}</h3>
                <p><strong>Categoría:</strong> ${producto.categoria}</p>
                <img src="${producto.imagen}" alt="Imagen del producto ${producto.nombre}">
                <p><strong>Precio:</strong> $${producto.precio}</p>
                <p><strong>Código de Producto:</strong> ${producto.codigo}</p>
                <p><strong>Atributo 1:</strong> ${producto.atributo1}</p>
                <p><strong>Atributo 2:</strong> ${producto.atributo2}</p>
                <p><strong>Atributo 3:</strong> ${producto.atributo3}</p>
            </div>
        `;
    })

    .join("");
  document.getElementById("productos").innerHTML = productosHTML;

  // Actualizar el número de página en los labels
  const label1 = document.getElementById("num");
  const label2 = document.getElementById("num2");
  label1.textContent = `Página ${paginaActual}`;
  label2.textContent = `Página ${paginaActual}`;

  // Habilitar/deshabilitar botones de paginación
  const prevPageBtnArriba = document.getElementById("prevPageBtnArriba");
  const nextPageBtnArriba = document.getElementById("nextPageBtnArriba");
  const prevPageBtnAbajo = document.getElementById("prevPageBtnAbajo");
  const nextPageBtnAbajo = document.getElementById("nextPageBtnAbajo");

  prevPageBtnArriba.disabled = paginaActual === 1;
  nextPageBtnArriba.disabled = endIndex >= productos.length;
  prevPageBtnAbajo.disabled = paginaActual === 1;
  nextPageBtnAbajo.disabled = endIndex >= productos.length;
};

// Función para ir a la página anterior
const paginaAnterior = () => {
  if (paginaActual > 1) {
    paginaActual--;
    mostrarProductos();
  }
};

// Función para ir a la página siguiente
const paginaSiguiente = () => {
  paginaActual++;
  mostrarProductos();
};

// Función para redirigir a la página de productos
const dirIndex = () => {
  window.location.href = "../";
};

// Función para redirigir a la página de registro de productos
const dirRegistro = () => {
  window.location.href = "./Pages/registro.html";
};

// Función para redirigir a la página de filtros de búsqueda
const dirtFiltros = () => {
  window.location.href = "./Pages/filtros.html";
};

// Cargar los productos iniciales al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  mostrarProductos();
});
