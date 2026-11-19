export type Episode = {
  season: number;
  number: number;
  title: string;
  duration: string;
  description: string;
  image: string;
};
export const serie = {
  title: "TE AMO SANDY",
  title1: "TE AMO",
  title2: "SANDY",
  tagline: "La historia que siempre elegiríamos volver a ver.",
  synopsis:
    "Dos personas, un mensaje inesperado y una historia que convirtió los días comunes en sus escenas favoritas. Una serie sobre encontrarse, elegirse y reírse incluso cuando el mapa dice que están perdidos.",
  badges: ["Original", "98% para ti", "2 temporadas", "HD"],
  heroImage: "/dia1.jpeg",
  cast: [
    { name: "Ramiro", role: "Protagonista", photo: "/ramiro01.jpg" },
    { name: "Sandy", role: "Protagonista", photo: "/sandy01.jpeg" },
    {
      name: "Nuestro cómplice",
      role: "Estrella invitada",
      photo: "perlita01.jpeg",
    },
  ],
  episodes: [
    {
      season: 1,
      number: 1,
      title: "El primer mensaje",
      duration: "00:04:12",
      description:
        "Todo comenzó con un «hola» que cambió el guion. Ninguno imaginaba que aquella conversación tendría tantas temporadas.",
      image:
        "foto01.jpeg",
    },
    {
      season: 1,
      number: 2,
      title: "La primera cita",
      duration: "00:06:08",
      description:
        "Nervios, risas y esa certeza inexplicable de que la mejor parte del día era estar juntos.",
      image:
        "foto02.jpeg",
    },
    {
      season: 1,
      number: 3,
      title: "El primer viaje",
      duration: "00:05:36",
      description:
        "Descubrimos que hasta perdernos era divertido, si el camino lo hacíamos de la mano.",
      image:
        "foto03.jpg",
    },
    {
      season: 1,
      number: 4,
      title: "La primera tormenta",
      duration: "00:04:49",
      description:
        "Una discusión, dos corazones aprendiendo y la decisión de quedarse para escribir la escena siguiente.",
      image:
        "foto04.jpeg",
    },
    {
      season: 1,
      number: 5,
      title: "El reencuentro",
      duration: "00:03:57",
      description:
        "Un abrazo que confirmó que la espera, los kilómetros y todo lo demás valían la pena.",
      image:
        "foto05.jpg",
    },
    {
      season: 2,
      number: 1,
      title: "Nuestra rutina",
      duration: "00:05:21",
      description:
        "El gran giro: descubrimos que lo cotidiano también puede ser épico cuando es contigo.",
      image:
        "foto06.jpeg",
    },
  ] satisfies Episode[],
  recommendations: [
    {
      title: "Nuestro futuro",
      description: "Próximamente, en todos nuestros días.",
      image:
        "foto07.jpeg",
    },
    {
      title: "Para siempre",
      description: "Una historia sin escena final.",
      image:
        "foto08.jpeg",
    },
    {
      title: "Contigo, otra vez",
      description: "La secuela que ya sabemos de memoria.",
      image:
        "foto09.jpeg",
    },
    {
      title: "Felices los dos",
      description: "Basada en hechos que siguen ocurriendo.",
      image:
        "foto10.jpeg",
    },
  ],
  finalMessage: "¿Te quedaste hasta el final? Yo también me quedo contigo.",
  signature: "Con todo mi amor",
  recipientName: "Sandy",
  whatsappNumber: "5217777937484",
};
export type EpisodeItem = (typeof serie.episodes)[number];
export type Recommendation = (typeof serie.recommendations)[number];

// TODO: reemplaza estas imágenes de Unsplash por fotos reales de la pareja.
