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
    descripcion: "Nuestra plataforma para personas con discapacidad brinda una solución segura y eficiente para conectar diferentes niveles en viviendas, edificios y espacios comerciales. Diseñada para personas con movilidad reducida, su sistema hidráulico y estructura robusta garantizan un desplazamiento cómodo, mejorando la accesibilidad y la autonomía de los usuarios.",
    icono: "Accessibility",
    specs: [
      "Capacidad de carga de 180kg",
      "Diseño adaptable a diferentes espacios",
      "Sistema de paracaídas",
      "Alarma de emergencia integrada",
      "Su funcionamiento a presión constante o automático.",
      "Barandas de protección en acero inoxidable",
      "Puertas vidriadas o barandas con un sistema de bloqueo",
      "Botón de parada de emergencia",
      "Superficie antideslizante",
      "Bajo consumo energético"
    ],
    galeria: [
      {
        id: "modelo-PLAT-1001",
        imagen: "/productos/plataformas/plataforma1.jpg",
        nombre: "Plataforma 1001",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-PLAT-1002",
        imagen: "/productos/plataformas/plataforma2.jpg",
        nombre: "Plataforma 1002",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-PLAT-1003",
        imagen: "/productos/plataformas/plataforma3.jpg",
        nombre: "Plataforma 1003",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-PLAT-1004",
        imagen: "/productos/plataformas/plataforma4.jpg",
        nombre: "Plataforma 1004",
        diferencia: "Paredes de cristal templado para máxima iluminación.",
        caracteristicas: ["Capacidad: 400kg", "Puertas automáticas", "Piso antideslizante"]
      },
      {
        id: "modelo-PLAT-1005",
        imagen: "/productos/plataformas/plataforma5.jpg",
        nombre: "Plataforma 1005",
        diferencia: "Diseño robusto ideal para exteriores o alto tráfico.",
        caracteristicas: ["Capacidad: 500kg", "Resistente a la intemperie", "Botonera braille"]
      }
    ]
  },
  {
    slug: "elevadores",
    titulo: "Elevadores",
    descripcion: "Los elevadores para domicilio facilitan el desplazamiento entre niveles dentro del hogar, brindando comodidad, seguridad y accesibilidad. Su diseño compacto, funcionamiento silencioso y sistemas de seguridad permiten una instalación adaptable, mejorando la movilidad y calidad de vida de los usuarios.",
    icono: "Building2",
    specs: [
      "Capacidad de carga 180 kg a 250 kg",
      "Sistema de paracaídas",
      "Botón de parada de emergencia",
      "Diseño adaptable a diferentes espacios",
      "Sistema de elevación hidráulico y electromecánico",
      "Puertas batientes metálicas o vidriadas con un sistema de bloqueo",
      "Panel de mando con pulsadores que permite una operación sencilla y segura del equipo",
      "Bajo consumo energético"
    ],
    galeria: [
      {
        id: "modelo-ELE-2001",
        imagen: "/productos/elevadores/eleva1.png",
        nombre: "Elevador 2001",
        diferencia: "Diseño compacto ideal para interiores del hogar.",
        caracteristicas: ["Capacidad: 250kg", "Sistema silencioso", "Puertas batientes"]
      },
      {
        id: "modelo-ELE-2002",
        imagen: "/productos/elevadores/eleva2.png",
        nombre: "Elevador 2002",
        diferencia: "Diseño compacto ideal para interiores del hogar.",
        caracteristicas: ["Capacidad: 250kg", "Sistema silencioso", "Puertas batientes"]
      },
      {
        id: "modelo-ELE-2003",
        imagen: "/productos/elevadores/eleva3.png",
        nombre: "Elevador 2003",
        diferencia: "Diseño compacto ideal para interiores del hogar.",
        caracteristicas: ["Capacidad: 250kg", "Sistema silencioso", "Puertas batientes"]
      },
      {
        id: "modelo-ELE-2004",
        imagen: "/productos/elevadores/eleva4.png",
        nombre: "Elevador 2004",
        diferencia: "Diseño compacto ideal para interiores del hogar.",
        caracteristicas: ["Capacidad: 250kg", "Sistema silencioso", "Puertas batientes"]
      },
      {
        id: "modelo-ELE-2005",
        imagen: "/productos/elevadores/eleva5.png",
        nombre: "Elevador 2005",
        diferencia: "Diseño compacto ideal para interiores del hogar.",
        caracteristicas: ["Capacidad: 250kg", "Sistema silencioso", "Puertas batientes"]
      },
      {
        id: "modelo-ELE-2006",
        imagen: "/productos/elevadores/eleva6.png",
        nombre: "Elevador 2006",
        diferencia: "Acabados premium con puertas de cristal y marcos de acero.",
        caracteristicas: ["Capacidad: 250kg", "Panel de cristal", "Bajo consumo"]
      }
    ]
  },
  {
    slug: "montacargas",
    titulo: "Montacargas",
    descripcion: "Nuestros montacargas están diseñados para transportar mercancías de forma segura, rápida y eficiente entre diferentes niveles. Gracias a su estructura robusta, tecnología confiable y alto rendimiento, optimizan el movimiento de cargas en almacenes, fábricas, comercios y centros logísticos. Ofrecen una solución práctica y segura para mejorar la productividad, reducir tiempos de trabajo y facilitar el manejo de materiales pesados.",
    icono: "Warehouse",
    specs: [
      "Capacidad de carga de 500 kg a 1000kg",
      "Estructura resistente y segura",
      "Diseño adaptable a diferentes espacios",
      "Alarma de emergencia integrado",
      "Sistema de elevación hidráulico y electromecánico",
      "Puertas metálicas con sistema de bloqueo",
      "Sistema de paracaídas en caso de descenso inesperado",
      "Panel de mando con pulsadores que permite una operación sencilla y segura del equipo",
      "Bajo consumo energético"
    ],
    galeria: [
      {
        id: "modelo-MON-3001",
        imagen: "/productos/montacargas/montacargas1.jpg",
        nombre: "Montacargas 3001",
        diferencia: "Estructura autoportante ideal para almacenes de tránsito medio.",
        caracteristicas: ["Capacidad: 500kg", "Puertas reforzadas", "Sistema de bloqueo"]
      },
      {
        id: "modelo-MON-3002",
        imagen: "/productos/montacargas/montacargas2.png",
        nombre: "Montacargas 3002",
        diferencia: "Estructura autoportante ideal para almacenes de tránsito medio.",
        caracteristicas: ["Capacidad: 500kg", "Puertas reforzadas", "Sistema de bloqueo"]
      },
      {
        id: "modelo-MON-3003",
        imagen: "/productos/montacargas/montacargas3.jpg",
        nombre: "Montacargas 3003",
        diferencia: "Estructura autoportante ideal para almacenes de tránsito medio.",
        caracteristicas: ["Capacidad: 500kg", "Puertas reforzadas", "Sistema de bloqueo"]
      },
      {
        id: "modelo-MON-3004",
        imagen: "/productos/montacargas/montacargas4.png",
        nombre: "Montacargas 3004",
        diferencia: "Estructura autoportante ideal para almacenes de tránsito medio.",
        caracteristicas: ["Capacidad: 500kg", "Puertas reforzadas", "Sistema de bloqueo"]
      },
      {
        id: "modelo-MON-3005",
        imagen: "/productos/montacargas/montacargas5.jpg",
        nombre: "Montacargas 3005",
        diferencia: "Alto rendimiento para uso rudo y constante en fábricas.",
        caracteristicas: ["Capacidad: 1000kg", "Piso estriado", "Alarma integrada"]
      }
    ]
  }
];