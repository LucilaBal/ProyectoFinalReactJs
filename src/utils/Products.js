const products = [
    {
      id: 1,
      name: "Samsung Galaxy A13",
      stock: 100,
      cost: 40000,
      description: "El Samsung Galaxy A13 es la variante 4G de su homónimo. Con una pantalla FHD+ de 6.6 pulgadas, el Galaxy A13 cuenta con un procesador octa-core con hasta 6GB de RAM y hasta 128GB de almacenamiento interno. La cámara dorsal principal es de 50MP y está secundada por una cámara ultrawide de 8MP y un par de sensores de 2MP, con una cámara selfie de 8MP. Una batería de 5000 mAh de carga rápida provee la energía al Galaxy A13, completando sus características con un lector de huellas lateral, y Android 12.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_760480-MLA49865648668_052022-O.webp",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "Samsung"
      },
      reviews: []
    },
    {
      id: 2,
      name: "Samsung Galaxy A23",
      stock: 100,
      cost: 50000,
      description :"El Samsung Galaxy A23 es un smartphone Android con una pantalla de 6.6 pulgadas a resolución FHD+, potenciado por un procesador Snapdragon 680 con 4GB, 6GB o 8GB de RAM y 64GB o 128GB de almacenamiento interno. Con una cámara cuádruple con lente principal de 50MP en su dorso, el Galaxy A23 tiene una cámara frontal de 8MP en el notch en forma de V, una batería de 5000 mAh de carga rápida, lector de huellas lateral, y corre Android 12.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_858613-MLA49862583397_052022-O.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "Samsung"
      },
      reviews: [
        {
          "comment": ".",
          "rating": "4"
        }
      ]
    },
    {
      id: 3,
      name: "Samsung Galaxy A33",
      stock: 92,
      cost: 60000,
      description: "Llega el Samsung Galaxy A33 al mercado luciendo una pantalla FullHD+ con tecnología Super AMOLED de 6,4 pulgadas de diagonal y protegida con Gorilla Glass 5. Samsung monta un chip de 8 núcleos que corre a 2,4GHz y lo apoya con dos opciones de RAM (6GB y 8GB) y dos opciones de almacenamiento interno (128GB y 256GB), y también tenemos por aquí una bandeja para microSD que soporta hasta 1TB extra si decidimos aprovecharla. La batería interna es de 5.000 mAh y tiene carga rápida de 25W.",
      capacity: 750,
      image: [
        "https://img.global.news.samsung.com/es/wp-content/uploads/2022/03/Galaxy-A-Unpacked_press-release_main4.jpeg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "samsung"
      },
      reviews: []
    },
    {
      id: 4,
      name: "Samsung Galaxy A53",
      stock: 30,
      cost: 90000,
      description: "El Samsung Galaxy A53 5G es el sucesor del A52 con una pantalla Super AMOLED de 6.5 pulgadas a resolución FHD+ y tasa de refresco de 120Hz, protegida por vidrio Gorilla Glass 5. Por dentro, encontramos un procesador octa-core con 6GB o 8GB de RAM y 128GB o 256GB de almacenamiento interno expandible. La cámara trasera es cuádruple, con lentes de 64MP con OIS, ultrawide de 12MP, macro de 5MP y profundidad de 5MP, siendo la cámara selfie de 32MP. El Galaxy A53 5G está alimentado por una batería de 5000 mAh de carga rápida, tiene parlantes stereo, lector de huellas lateral, resistencia al agua IP67 y corre Android 12.",
      capacity: 750,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_681366-MLA49739383012_042022-O.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Marcas",
        id: 1
      },
      brand: {
        id: 95,
        name: "samsung"
      },
      reviews: []
    },
    {
      id: 5,
      name: "Motorola g60",
      stock: 100,
      cost: 40000,
      description: "El Motorola Moto G60 comparte sus características con el Moto G40 Fusion, mejorando algunas como su cámara. Con una pantalla de 6.8 pulgadas FHD+ con tasa de refresco de 120 Hz, el Moto G60 está potenciado por un procesador Qualcomm Snapdragon 732G con 4GB o 6GB de RAM y 128GB de almacenamiento interno. La cámara triple posterior tiene un lente principal de 108 MP y secundarios de 8 MP y 2MP, y su cámara selfie es de 32 MP. La energía es provista por una batería de 6000 mAh de carga rápida, cuenta con lector de huellas dorsal, y corre Android 11.",
      capacity: 1500,
      image: [
        "https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/2005651949195.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: 2,
      categoryId: 2,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
     {
      id: 6,
      name: "Motorola g51",
      stock: 100,
      cost: 40000,
      description: "El Motorola Moto G51 5G es un smartphone Android con una pantalla de 6.8 pulgadas a resolución 1080p y con tasa de refresco de 120Hz. Potenciado por un procesador Snapdragon 480+, el Moto G51 5G cuenta con hasta 8GB de RAM y 128GB de almacenamiento, y está alimentado por una batería de 5000 mAh. La cámara dorsal del Moto G51 5G es un arreglo triple con lentes de 50MP, 8MP y 2MP, y la cámara selfie es de 13MP, completando las características con un lector de huellas lateral y Android 11.",
      capacity: 1500,
      image: [
        "https://mobomx.vteximg.com.br/arquivos/ids/182722-600-600/MotoG51-5G-AzulInvierno-Dual.jpg?v=637789088884100000",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: 2,
      categoryId: 2,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
     {
      id: 7,
      name: "Motorola g200",
      stock: 100,
      cost: 60000,
      description: "El Motorola Moto G200 5G es un smartphone Android con una pantalla FHD+ de 6.8 pulgadas y refresco de 144Hz. Potenciado por un procesador Snapdragon 888 Plus, el Moto G200 cuenta con 8GB de RAM con 128GB o 256GB de almacenamiento interno no expandible. La cámara dorsal tiene un sensor principal de 108MP y el resto del conjunto triple de cámara se completa con sensores de 8MP y 2MP, siendo la cámara selfie de 16MP. Alimentado por una batería de 5000 mAh de carga rápida.",
      capacity: 1500,
      image: [
        "https://coppelar.vtexassets.com/arquivos/ids/1680745-800-auto?v=637812360189430000&width=800&height=auto&aspect=true",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 2,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
     {
      id: 8,
      name: "Motorola g71",
      stock: 100,
      cost: 70000,
      description: "El Motorola Moto G71 5G es un smartphone Android potenciado por un procesador Snapdragon 695 acompañado de 6GB o 8GB de RAM y 128GB de almacenamiento interno. El Moto G71 tiene una pantalla OLED de 6.4 pulgadas a resolución FHD+ y la cámara de fotos es un conjunto triple con sensor principal de 50MP secundado por cámaras de 8MP y 2MP, mientras que la cámara frontal es de 16MP. Completando las características del Moto G71 5G encontramos una batería de 5000 mAh de carga rápida, lector de huellas lateral, y Android 11.",
      capacity: 1500,
      image: [
        "https://www.ventaconcretada.com/wp-content/uploads/2022/04/Captura-de-Pantalla-2022-04-27-a-las-15.52.08-504x594.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 2,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 2
      },
      brand: {
        id: 96,
        name: "Motorola"
      },
      reviews: []
    },
    {
      id: 9,
      name: "Iphone 11",
      stock: 100,
      cost: 140000,
      description: "El Apple iPhone 11 es el sucesor del iPhone Xr para el 2019. Este año el iPhone 11 llega con una pantalla de 6.1 pulgadas con resolución Liquid Retina y potenciado por un procesador Apple A13 Bionic con 64GB, 128GB o 256GB de almacenamiento interno. La cámara posterior del iPhone 11 ahora es dual, con un lente regular de 12 MP y otro gran angular de 12 MP, mientras que su cámara frontal es de 12 MP. El iPhone 11 cuenta con una batería de 3110 mAh con carga rápida, parlantes stereo con sonido Dolby Atmos, carga inalámbrica y utiliza reconocimiento de rostro Face ID para seguridad.",
      capacity: 1500,
      image: [
        "https://www.tradeinn.com/f/13782/137821904/apple-iphone-11-64gb-6.1.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {
      id: 10,
      name: "Iphone 12",
      stock: 100,
      cost: 200000,
      description: "El Apple iPhone 12 es parte de la serie 12 del iPhone de Apple, llegando en el 2020 con un diseño que recuerda al iPhone 4 y conectividad 5G. El iPhone 12 cuenta con una pantalla Super Retina XDR de 6.1 pulgadas de tecnología OLED y está potenciado por el nuevo procesador A14 Bionic, con opciones de 64GB, 128GB o 256GB de almacenamiento interno. El sistema de cámaras trasero es dual, con dos lentes de 12MP que agregan estabilización óptica de imagen, y varias mejoras de software y la cámara frontal TrueDepth es de 12 MP. El iPhone 12 utiliza reconocimiento de rostro Face ID para la seguridad, cuenta con soporte para carga rápida e inalámbrica, y corre iOS 14.",
      capacity: 1500,
      image: [
        "https://www.tradeinn.com/f/13809/138092047/apple-iphone-12-256gb-6.1.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {  
      id: 11,
      name: "Iphone 13",
      stock: 100,
      cost: 270000,
      description: "El Apple iPhone 13 representa una actualización menor del iPhone 12. Conservando la pantalla OLED de 6.1 pulgadas, el iPhone 13 cuenta con un procesador Apple A15 Bionic, con opciones de almacenamiento de 128GB. 256GB. o 512GB. La cámara principal del iPhone 13 es dual, con lentes wide y ultrawide de 12MP con IBIS y zoom óptico 2x, y la cámara frontal es de 12MP. El iPhone 13 tiene parlantes stereo, soporta carga rápida tanto por cable como inalámbrica, es resistente al polvo y agua, y soporta redes 5G.",
      capacity: 1500,
      image: [
        "https://www.tradeinn.com/f/13835/138359393/apple-smartphone-iphone-13-512gb-6.1.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {  
      id: 12,
      name: "Iphone 13 Pro Max",
      stock: 100,
      cost: 378000,
      description: "El Apple iPhone 13 Pro Max mejora a su predecesor con una tasa de refresco de pantalla de 120Hz, el nuevo procesador Apple A15 Bionic y mejoras en sus cámaras. Con una pantalla OLED de 6.7 pulgadas a resolución FHD+, el iPhone 13 Pro Max está disponible con opciones de almacenamiento de 128GB, 256GB, 512GB y 1TB. La cámara cuádruple llega con tres lentes de 12MP y un sensor ToF 3D que integra estabilización óptica de imagen y zoom 3x, y su cámara selfie es de 12MP. El iPhone 13 Pro Max cuenta con parlantes stereo, Face ID para seguridad, resistencia IP68 al polvo y agua, y carga rápida e inalámbrica.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_816480-MLA47777273514_102021-O.webp",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 3,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 3
      },
      brand: {
        id: 97,
        name: "Iphone"
      },
      reviews: []
    },
    {  
      id: 13,
      name: "Xiaomi Redmi Note9",
      stock: 100,
      cost: 125000,
      description: "El Xiaomi Redmi Note 9 es un smartphone Android con una pantalla Full HD+ de 6.53 pulgadas y potenciado por un procesador Mediatek Helio G85, acompañado de variantes de 3GB de memoria RAM con 64GB de espacio de almacenamiento interno o 4GB de RAM con 128GB de almacenamiento. La cámara trasera del Redmi Note 9 es cuádruple, de 48 MP + 8 MP + 2 MP + 2 MP, mientras que su cámara frontal es de 13 MP. El Redmi Note 9 completa sus características con una batería de 5020 mAh de carga rápida, lector de huellas posterior, y MIUI 11 basado en Android 10.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_644764-MLA44161684856_112020-O.webp",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 4,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
    {  
      id: 14,
      name: "Xiaomi Redmi Note 10",
      stock: 100,
      cost: 130000,
      description: "El Xiaomi Redmi Note 10 es el líder de la décima reencarnación de la serie Redmi Note. Con una pantalla Super AMOLED de 6.43 pulgadas a resolución Full HD+, el Redmi Note 10 está potenciado por un procesador Snapdragon 678 con 4GB de memoria RAM con opciones de 64GB o 128GB de almacenamiento interno expandible vía microSD. La cámara posterior del Redmi Note 10 es cuádruple, en configuración 48MP+ 8MP + 2MP + 2MP, mientras que la cámara selfie es de 13 megapixels. Entre el resto de las características se destacan unos parlantes stereo, batería de 5000 mAh de carga rápida, resistencia al agua IP53 y corre MIUI 12 basado en Android 11.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_904822-MLA46168186693_052021-O.webp",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 4,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
    {  
      id: 15,
      name: "Xiaomi Redmi Note 11",
      stock: 100,
      cost: 145000,
      description: "El Xiaomi Redmi Note 11 llega en su versión global con grandes diferencias respecto del lanzado en China. El Redmi Note 11 cuenta con una pantalla AMOLED de 6.43 pulgadas a resolución FHD+ y tasa de refresco de 90Hz. Potenciado por un procesador Snapdragon 680, el Redmi Note 11 cuenta con opciones de 4GB o 6GB de RAM y 64GB o 128GB de almacenamiento interno. La cámara posterior del Redmi Note 11 es cuádruple, con lente principal de 50MP, y su cámara selfie es de 13MP. La batería del Redmi Note 11 es de 5000 mAh y soporta carga rápida de 33W, completando sus características con parlantes stereo, lector de huellas lateral, y MIUI 13 basado en Android 11.",
      capacity: 1500,
      image: [
        "https://http2.mlstatic.com/D_NQ_NP_861251-MLA49741298523_042022-O.webp",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 4,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
     {  
      id: 16,
      name: "Xiaomi Redmi Note 12",
      stock: 100,
      cost: 145000,
      description: "El Xiaomi 12 es el flagship compacto de la serie 12. Con una pantalla OLED de 6.28 pulgadas y tasa de refresco de 120Hz, el Xiaomi 12 está potenciado por el procesador más potente de Qualcomm a la fecha, el Snapdragon 8 Gen 1, acompañado de 8GB o 12GB de RAM y 128GB o 256GB de almacenamiento interno. Su cámara dorsal es triple, con un sensor principal de 50MP, un lente ultrawide de 13MP y un lente telefoto/macro de 5MP, mientras que de las selfies se encarga un sensor de 32MP al frente. Alimentado por una batería de 4500 mAh, el Xiaomi 12 soporta carga rápida de 67W, carga inalámbrica de 50W, y completa sus características con parlantes stereo, lector de huellas bajo la pantalla, y corre MIUI 13 basado en Android 12.",
      capacity: 1500,
      image: [
        "https://mobelat.com/wp-content/uploads/2021/11/xiaomi-redmi-note-11-pro-plus-thumb-mobelat-370x400.jpg",
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 4,
      brandId: 95,
      packingId: null,
      category: {
        name: "Marcas",
        id: 4
      },
      brand: {
        id: 98,
        name: "Xiaomi"
      },
      reviews: []
    },
   ]
 export default products;