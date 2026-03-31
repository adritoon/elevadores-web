export const servicios = [
  {
    slug: "diseno-e-ingenieria",
    titulo: "Diseño e Ingeniería",
    descripcion: "Planificación detallada y cálculos estructurales precisos para garantizar la máxima seguridad y eficiencia en su proyecto de elevación.",
    icono: "Ruler",
  },
  {
    slug: "fabricacion",
    titulo: "Fabricación a Medida",
    descripcion: "Construimos elevadores con materiales de la más alta calidad y tecnología de punta.",
    icono: "Factory",
    // --- ¡NUEVA INFORMACIÓN AQUÍ! ---
    imagen: "/servicios/linda.png", // Ruta a la imagen en la carpeta public
    detalleLargo: "Nuestra planta de fabricación cuenta con maquinaria CNC de última generación. Cada cabina es diseñada y construida según las especificaciones exactas del pozo de su edificio, asegurando que no se pierda ni un centímetro de espacio útil.",
    caracteristicas: [
      "Acero inoxidable de grado quirúrgico.",
      "Sistemas de tracción ultra-silenciosos.",
      "Iluminación LED de bajo consumo.",
      "Pantallas de cristal líquido personalizables."
    ]
  },
  {
    slug: "instalacion",
    titulo: "Instalación",
    descripcion: "Montaje profesional y riguroso por parte de nuestros técnicos certificados, asegurando un funcionamiento impecable desde el primer día.",
    icono: "Wrench",
  },
  {
    slug: "modernizacion",
    titulo: "Modernización",
    descripcion: "Actualizamos su elevador antiguo con componentes modernos para mejorar su rendimiento, seguridad y estética sin cambiar toda la estructura.",
    icono: "RefreshCw",
  },
];

export const productos = [
  {
    slug: "ascensores-para-discapacitados",
    titulo: "Ascensores para Discapacitados",
    descripcion: "Nuestra línea de ascensores accesibles.",
    specs: [
      "Cumplimiento Norma A.120",
      "Dimensiones mínimas de 1.00m x 1.25m",
      "Botonera en sistema Braille",
      "Nivelación de alta precisión (±5mm)"
    ],
    // Agregamos un array para la galería:
    galeria: [
      {
        id: "modelo-a",
        imagen: "/productos/APD/modelo-a.png", // Asegúrate de tener esta imagen en tu carpeta public/productos
        nombre: "Modelo Cristal Elegance",
        precio: "Desde $15,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-c",
        imagen: "/productos/APD/modelo-c.png", // Asegúrate de tener esta imagen en tu carpeta public/productos
        nombre: "Modelo Cristal Poor",
        precio: "Desde $12,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-b",
        imagen: "/productos/APD/modelo-b.png",
        nombre: "Modelo Acero Inox",
        precio: "Desde $12,500",
        diferencia: "Diseño robusto ideal para exteriores o alto tráfico.",
        caracteristicas: ["Capacidad: 500kg", "Resistente a la intemperie", "Botonera braille"]
      }
    ]
  },
  {
    slug: "plataforma-para-discapacitados",
    titulo: "Plataforma-para-discapacitados",
    descripcion: "Ascensores diseñados con cabinas amplias, botoneras accesibles y puertas automáticas, cumpliendo todas las normativas de accesibilidad.",
    specs: [
      "Capacidad desde 500kg hasta 5tn",
      "Piso de plancha estriada antideslizante",
      "Estructura autoportante de acero",
      "Sensores de sobrecarga electrónicos"
    ],
    galeria: [
      {
        id: "modelo-a",
        imagen: "/productos/PPD/modelo-a.png", // Asegúrate de tener esta imagen en tu carpeta public/productos
        nombre: "Modelo Cristal Elegance",
        precio: "Desde $15,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-c",
        imagen: "/productos/PPD/modelo-c.png", // Asegúrate de tener esta imagen en tu carpeta public/productos
        nombre: "Modelo Cristal Poor",
        precio: "Desde $12,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-b",
        imagen: "/productos/PPD/modelo-b.png",
        nombre: "Modelo Acero Inox",
        precio: "Desde $12,500",
        diferencia: "Diseño robusto ideal para exteriores o alto tráfico.",
        caracteristicas: ["Capacidad: 500kg", "Resistente a la intemperie", "Botonera braille"]
      }
    ]
  },
];