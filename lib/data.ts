export const servicios = [
  {
    slug: "diseno-e-ingenieria",
    titulo: "Diseño e Ingeniería",
    descripcion: "Desarrollamos proyectos de ingeniería y diseño especializado, respaldados por un equipo profesional altamente capacitado, orientado a ofrecer soluciones seguras, eficientes y de alto nivel técnico.",
    icono: "Ruler",
  },
  {
    slug: "fabricacion",
    titulo: "Fabricación",
    descripcion: "Fabricamos los componentes de cada proyecto con altos estándares de calidad, seguridad y responsabilidad ambiental, garantizando soluciones de elevación confiables, eficientes y duraderas.",
    icono: "Factory",
    imagen: "/servicios/linda.png",
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
    descripcion: "Realizamos la instalación de plataforma para personas con discapacidad, elevadores y montacargas con técnicos profesionales, garantizando seguridad, eficiencia y correcto funcionamiento.",
    icono: "Wrench",
  },
  {
    slug: "modernizacion",
    titulo: "Modernización",
    descripcion: "Actualizamos y optimizamos sistemas de elevación existentes, mejorando su tecnología, seguridad y rendimiento.",
    icono: "RefreshCw",
  },
  {
    slug: "asesoria-tecnica-especializada",
    titulo: "Asesoría técnica especializada",
    descripcion: "Brindamos asesoramiento profesional para seleccionar la mejor solución de elevación según las necesidades de cada cliente y proyecto.",
    icono: "Headset",
  },
];

export const productos = [
  {
    slug: "plataforma-para-discapacitados",
    titulo: "Plataforma para Discapacitados",
    descripcion: "Nuestra línea de plataformas accesibles diseñados para integrarse perfectamente en cualquier entorno.",
    icono: "Accessibility", // <--- AGREGADO
    specs: [
      "Cumplimiento Norma A.120",
      "Nos adecuamos a las dimensiones",
      "Botonera en sistema Braille",
      "Nivelación de alta precisión"
    ],
    galeria: [
      {
        id: "modelo-a",
        imagen: "/productos/PPD/modelo-a.png",
        nombre: "Modelo Cristal Elegance",
        //precio: "Desde $15,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-c",
        imagen: "/productos/PPD/modelo-c.png",
        nombre: "Modelo Cristal Poor",
        //precio: "Desde $12,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-b",
        imagen: "/productos/PPD/modelo-b.png",
        nombre: "Modelo Acero Inox",
        //precio: "Desde $12,500",
        diferencia: "Diseño robusto ideal para exteriores o alto tráfico.",
        caracteristicas: ["Capacidad: 500kg", "Resistente a la intemperie", "Botonera braille"]
      }
    ]
  },
  {
    slug: "elevadores",
    titulo: "Elevadores",
    descripcion: "Equipos diseñados con cabinas amplias, botoneras accesibles y puertas automáticas, cumpliendo todas las normativas de accesibilidad.",
    icono: "Warehouse", // <--- AGREGADO (Puedes cambiarlo por Box o Building2 si prefieres)
    specs: [
      "Capacidad desde 500kg hasta 5tn",
      "Piso de plancha estriada antideslizante",
      "Estructura autoportante de acero",
      "Sensores de sobrecarga electrónicos"
    ],
    galeria: [
      {
        id: "modelo-a",
        imagen: "/productos/EPD/modelo-a.png",
        nombre: "Modelo Cristal Elegance",
        //precio: "Desde $15,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-c",
        imagen: "/productos/EPD/modelo-c.png",
        nombre: "Modelo Cristal Poor",
        //precio: "Desde $12,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-b",
        imagen: "/productos/EPD/modelo-b.png",
        nombre: "Modelo Acero Inox",
        //precio: "Desde $12,500",
        diferencia: "Diseño robusto ideal para exteriores o alto tráfico.",
        caracteristicas: ["Capacidad: 500kg", "Resistente a la intemperie", "Botonera braille"]
      }
    ]
  },
  {
    slug: "montacargas",
    titulo: "Montacargas",
    descripcion: "Equipos diseñados con cabinas amplias, botoneras accesibles y puertas automáticas, cumpliendo todas las normativas de accesibilidad.",
    icono: "Warehouse", // <--- AGREGADO (Puedes cambiarlo por Box o Building2 si prefieres)
    specs: [
      "Capacidad desde 500kg hasta 5tn",
      "Piso de plancha estriada antideslizante",
      "Estructura autoportante de acero",
      "Sensores de sobrecarga electrónicos"
    ],
    galeria: [
      {
        id: "modelo-a",
        imagen: "/productos/EPD/modelo-a.png",
        nombre: "Modelo Cristal Elegance",
        //precio: "Desde $15,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-c",
        imagen: "/productos/EPD/modelo-c.png",
        nombre: "Modelo Cristal Poor",
        //precio: "Desde $12,000",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-b",
        imagen: "/productos/EPD/modelo-b.png",
        nombre: "Modelo Acero Inox",
        //precio: "Desde $12,500",
        diferencia: "Diseño robusto ideal para exteriores o alto tráfico.",
        caracteristicas: ["Capacidad: 500kg", "Resistente a la intemperie", "Botonera braille"]
      }
    ]
  },
];