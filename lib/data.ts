export type Servicio = {
  slug: string;
  titulo: string;
  descripcion: string;
  icono: string;
  caracteristicas?: string[];
  galeria?: string[];
  imagen?: string;
  detalleLargo?: string;
};

export const servicios: Servicio[] = [
  {
    slug: "diseno-e-ingenieria",
    titulo: "Diseño e Ingeniería",
    descripcion: "Desarrollamos proyectos de ingeniería y diseño especializado, respaldados por un equipo profesional altamente capacitado, orientado a ofrecer soluciones seguras, eficientes y de alto nivel técnico.",
    icono: "Ruler",
    caracteristicas: [
      "Estudios de tráfico vertical para optimizar el desempeño de los elevadores.",
      "Elaboración de planos técnicos para la correcta ejecución del proyecto.",
      "Diseño personalizado de cabinas y acabados con visualización 3D previa a su fabricación.",
      "Garantizamos el cumplimiento de normas técnicas, seguridad y accesibilidad en cada proyecto."
    ],
    galeria: [
      "/servicios/diseño1.webp",
      "/servicios/diseño2.webp",
      "/servicios/diseño3.jpg",
      "/servicios/diseño4.jpg"
    ]
  },
  {
    slug: "fabricacion",
    titulo: "Fabricación",
    descripcion: "Fabricamos los componentes de cada proyecto con altos estándares de calidad, seguridad y responsabilidad ambiental, garantizando soluciones de elevación confiables, eficientes y duraderas.",
    icono: "Factory",
    imagen: "/servicios/linda.png",
    /*detalleLargo: "Nuestra planta de fabricación cuenta con maquinaria CNC de última generación. Cada cabina es diseñada y construida según las especificaciones exactas del pozo de su edificio, asegurando que no se pierda ni un centímetro de espacio útil.",*/
    caracteristicas: [
      "Fabricación de cabinas de ascensor con materiales y acabados personalizados, adaptados a las especificaciones de cada proyecto.",
      "Fabricación de chasis, bastidores y estructuras metálicas para montacargas, elevadores y plataformas para personas con discapacidad.",
      "Fabricación de puertas de cabina y piso, con sistemas manuales o automáticos.",
      "Control de calidad en materiales, soldaduras y dimensiones para garantizar el cumplimiento de los estándares de seguridad."
    ],
    galeria: [
      "/servicios/fabricacion1.webp",
      "/servicios/fabricacion2.webp"
    ]
  },
  {
    slug: "instalacion",
    titulo: "Instalación",
    descripcion: "Realizamos la instalación de plataforma para personas con discapacidad, elevadores y montacargas con técnicos profesionales, garantizando seguridad, eficiencia y correcto funcionamiento.",
    icono: "Wrench",
    caracteristicas: [
      "Instalación de la estructura del ascensor.",
      "Instalación de la cabina y contrapeso.",
      "Montaje del sistema de tracción.",
      "Instalación de puertas de cabina y de piso.",
      "Instalación del sistema eléctrico y de control.",
      "Configuración y programación del sistema.",
      "Pruebas de funcionamiento y seguridad.",
      "Puesta en marcha del elevador."
    ],
    galeria: [
      "/servicios/instalacion1.png",
      "/servicios/instalacion2.png",
      "/servicios/instalacion3.jpg",
      "/servicios/instalacion4.jpg"
    ]
  },
  {
    slug: "modernizacion",
    titulo: "Modernización",
    descripcion: "Actualizamos y optimizamos sistemas de elevación existentes, mejorando su tecnología, seguridad y rendimiento.",
    icono: "RefreshCw",
    caracteristicas: [
      "Modernización técnica del equipo.",
      "Modernización de cabina.",
      "Modernización de sistemas electrónicos y de control.",
      "Mejora de Seguridad.",
      "Eficiencia Energética."
    ],
    galeria: [
      "/servicios/modernizacion1.jpg"
    ]
  },
  {
    slug: "asesoria-ventas-especializada",
    titulo: "Asesoría de ventas especializada",
    descripcion: "Las asesorías de ventas en una empresa de ascensores consisten en orientar al cliente para elegir la solución de elevación más adecuada según su proyecto, el tipo de edificio y su presupuesto, mediante evaluación de necesidades y recomendaciones técnicas.",
    icono: "Headset",
    caracteristicas: [
      "Asesoría de medidas y espacio.",
      "Cotización y propuesta técnica.",
      "Asesoría en modernización de ascensores.",
      "Asesoría en accesibilidad.",
      "Asesoría en eficiencia y tecnología.",
      "Asesoría en mantenimiento y postventa."
    ],
    galeria: [
      "/servicios/asesoria1.jpg"
    ]
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