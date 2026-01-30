type Lang = 'es' | 'en';

interface TranslatedText {
  es: string;
  en: string;
}

interface ProjectMedia {
  id: string;
  src: string;
  role: 'medium' | 'detail';
}

interface ProjectPalette {
  id: string;
  hex: string;
}

interface ProjectHero {
  type: 'video' | 'image';
  src: string;
  poster?: string;
  id: string;
  role: 'main';
}

export interface Project {
  id: number;
  title: string;
  preview?: TranslatedText;
  sdescription: TranslatedText;
  ddescription?: TranslatedText;
  year: number;
  category: TranslatedText;
  author: string;
  job: string;
  slug: string;
  image: string;
  featured?: boolean;
  hero?: ProjectHero;
  palette?: ProjectPalette[];
  media?: ProjectMedia[];
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nos(otros)',
    author: `Mariana Restrepo
    Anthony Ortega
    Daniel Escobar`,
    job: 'Programador y diseñador interactivo',
    slug: 'nos-otros',
    year: 2025,
    category: { es: 'Diseño interactivo', en: '' },
    image: '/images/nosotros.jpg',
    featured: true,
    hero: {
      type: 'image',
      src: '/images/nos-otros/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/nos-otros/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/nos-otros/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/nos-otros/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/nos-otros/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/nos-otros/06.webp', role: 'detail' },
    ],
    preview: {
      es: `A través de una experiencia interactiva, el proyecto propone una reflexión sobre cómo distintos contextos de la ciudad de Medellín influyen en la construcción de la identidad durante la adultez emergente, integrando cuerpo, sonido e interacción visual.`,
      en: ``,
    },
    sdescription: {
      es: `Proyecto de grado interdisciplinar que explora las transformaciones identitarias a partir del cruce entre diseño de modas, producción musical y diseño gráfico.`,
      en: ``,
    },
    ddescription: {
      es: `
## Idea:
Este proyecto nació de la necesidad de crear una experiencia que combinara diseño de modas, realización y producción musical y diseño gráfico en uno solo, siendo aquí la primera pregunta ¿cómo lo volvemos un todo?, con esto en mente se empezaron a plantear distintas propuestas donde se le asignó un rol a cada una de las disciplinas, siendo música contextualización, modas expresión y gráfico interacción. <br> <br>

## Concepto:
Antes de hablar de interacción u otras cosas es importante saber el concepto con el que se estaba tratando en este proyecto, la base con la que se trabajó este fueron las transformaciones identitarias por factores externos y sus derivaciones en la ciudad de Medellín en la adultez emergente, este concepto de por sí es gigante por lo que se decidió aterrizar a las transformaciones identitarias en 4 contextos de la ciudad (discotecas, familia, amigos y universidad). <br> <br>

## Interacción: 
Con los roles correctamente distribuidos y el concepto aterrizado la pregunta que se pensó como equipo de creación fue, ¿qué tipo de interacción queremos?, al tratarse de un concepto abstracto como las transformaciones identitarias lo que se planteó fue la libertad de expresarlo con tus propias manos como un medio de respuesta individual al concepto, con esto claro se repartieron roles de interacción siendo una tableta el medio de expresión que conectaba con un pc que era donde se veía lo expresado y este a su vez estaba conectado con otro computador y un proyector, todo esto proyectándose en un cuerpo no cuerpo realizado por Mariana Restrepo. <br> <br>

## Funcionalidad:
Ahora ¿Cómo funciona todo esto?, básicamente aquí entra programación pura y dura, por medio de una red LAN (Local Area Network) se conectan 3 cosas puntualmente: tableta - computador 1 - computador 2, siendo que la tableta es el emisor de información y los dos computadores son los receptores, lo que hace la tableta es mandar parámetros de posición a los dos receptores, enviar intensidad MIDI por esquina y adicionalmente dictaminar la visual que se muestra en el computador 1 el cual es el núcleo central de todo, ya que este funciona como receptor, server, emisor de red y procesador de parámetros MIDI conectados a Fl studio permitiendo que las posiciones de la tableta conecten con la música de lo cual ya se encargó Anthony Ortega el realizador y productor músical, por último el computador 2 funciona meramente como receptor, este está conectado a touchdesigner y lo que hace es recibir parámetros OSC de la misma manera que los MIDI conectado a una cámara la cual está sincronizada al movimiento realizado en la tableta. <br> <br>

## Visuales:
Las visuales de cada uno de los contextos los cuales son discoteca, familia, amigos y universidad salieron de la simplificación de formas y a partir de información que las personas de esta edad entienden en cada uno de estos lugares siendo que en discoteca son movimiento y ruido, lo que se tradujo a líneas y ecos, en familia son cercanía y unión, que se tradujo a una red de círculos, en amigos es conexión y calidez, que se tradujo a círculos dispersos y por último universidad se asocia a conocimiento y estructura, que se tradujo a una red de cuadrados, a cada una de estas adicional se le agregó una interacción que cada individuo experimenta de manera propia, siendo en discoteca la creación de su propio movimiento/ruido, en familia el agrupamiento de la red de círculos, en amigos la construcción de lazos y en universidad la selección/focalización del conocimiento. <br> <br>

## ¿Cómo se realizó?
Por último para realizar todo el tema de la unión entre los distintos medios se hizo vibe coding para ello ya que como tal había partes que como diseñador gráfico no llegaban a mis alcances disciplinares. Con esto entendido, para la conexión de distintos medios se hizo uso de Socket.io, y para la recepción de parámetros MIDI se usó una herramienta llamada loopMIDI que permite crear canales de este tipo de parámetros, con todo esto finalmente se unificó todo haciendo uso de js en su gran mayoría y algo de css para la creación de la interfaz de la tableta, pero en su gran parte es js puro.
`,

      en: ``,
    },
  },
  {
    id: 2,
    title: 'El guionista',
    author: 'Daniel Escobar',
    job: 'Ilustrador y escritor',
    slug: 'el-guionista',
    year: 2024,
    category: { es: 'Ilustración', en: '' },
    image: '/images/elguionista.jpg',
    hero: {
      type: 'image',
      src: '/images/el-guionista/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/el-guionista/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/el-guionista/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/el-guionista/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/el-guionista/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/el-guionista/06.webp', role: 'detail' },
    ],
    preview: {
      es: `La historia de un personaje secundario que a simple vista solo se ve como un informante oculta mucho más de lo que parece.`,
      en: ``,
    },
    sdescription: {
      es: `El guionista es un proyecto personal, donde quise crear un vendedor de información aparentemente neutro que simplemente se dedicara a su labor, vender información, independientemente de a quien, apoyando tanto a los “protagonistas” como a los villanos, sin saber que estos estaban siendo parte de algo más grande orquestado por este personaje.`,
      en: ``,
    },
    ddescription: {
      es: `
## Resumen:
En un pueblo lleno de tradiciones, regido por la religión y conservador a más no poder nace un niño completamente diferente de todo lo que habían visto con pelo blanco y ojos rojos a la gente de este lugar no le queda más que decir que es un demonio. Siendo maltratado por años por parte de sus padres, este es llevado a la iglesia donde su vida no mejora, con el tiempo su único deseo es escapar de este lugar que tanta tristeza y dolor le ha causado, no tiene alguien a quien llamar familia y todo lo que este escucha es a él mismo deseando destruir ese lugar que tantas penurias le causó, finalmente abandona el lugar solo deseando su fin. <br> <br>

Al llegar a la ciudad este no tiene educación por lo que se dedica a robar para poder sobrevivir, un dia se encuentra con la jefa de una familia de informantes que desea criarlo por su peculiar cabello y sus bellos ojos que muestran un deseo, sin saber que esa fue la peor decisión posible y la que le costaría la vida. <br> <br>

En su adultez y como jefe del clan de informantes nuestro protagonista solo tiene un deseo, destruir el pueblo que tanto dolor le creo y que lo volvio el monstruo que hoy en dia es, para poder así estar en paz, pero él no es fuerte, solo sabe hablar y engañar, por lo que con sus dos armas lleva tanto a los héroes como a los villanos allí para que tengan “ la gran pelea final” la cual no es más que una matanza sin propósito llevándose a todo el pueblo de por medio. <br> <br>

## Contexto del proyecto:
Aquí mi idea era crear un personaje insensible, quería crear la historia de un vendedor de información ya que siempre me ha parecido un rol muy interesante pero que normalmente solo se usa para impulsar la historia de los protagonistas y siempre me pareció desaprovechado así que por ello cree este personaje y sus distintos acompañantes.
`,
      en: ``,
    },
  },
  {
    id: 3,
    title: 'Xoldarg',
    author: 'Daniel Escobar',
    job: 'Ilustrador y escritor',
    slug: 'xoldarg',
    year: 2024,
    category: { es: 'Ilustración', en: '' },
    image: '/images/xoldarg.jpg',
    hero: {
      type: 'image',
      src: '/images/xoldarg/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/xoldarg/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/xoldarg/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/xoldarg/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/xoldarg/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/xoldarg/06.webp', role: 'detail' },
    ],
    preview: {
      es: `Xoldarg es alguien divertido, bondadoso y amable que siempre va acompañado de Antonio su mascota pero que normalmente la gente le hace el feo por su monstruosa apariencia.`,
      en: ``,
    },
    sdescription: {
      es: `Este fue un proyecto que surgió luego de un cadáver exquisito en conjunto con mis amigos, donde creamos un personaje con sus distintas partes del cuerpo, sus armas, sus miedos y su mascota, aquí la historia fluyo por si misma porque me dio mucha ternura lo que salió, por lo que quise hacer un personaje que pese a sus tentáculos y apariencia claramente intimidante fuera más humano y cálido que muchas personas.`,
      en: ``,
    },
    ddescription: {
      es: `
## Sinopsis:
Xoldarg es alguien realmente raro ya que pese a su apariencia terrorífica es alguien realmente amable que busca siempre cuidar a los demás, cuando era niño la gente a su alrededor corría de él y lo llamaban monstruo, pero aun así esto no evitó que nuestro protagonista siguiera haciendo lo que más lo hacía feliz, ayudar a los demás. <br> <br>

Un día nuestro protagonista fue a la playa. Al llegar vio a alguien ahogándose por lo que se lanzó directo a ayudarlo, lo que él no sabía era que el mar estaba lleno de tiburones una de las cosas a las que más le teme pero había algo aún peor que eso. Las estrellas de mar, su mayor temor. <br> <br>

Un día mientras que Xoldarg andaba en el parque veía a los niños jugar y ser felices por lo que él también quería apoyarlos. Decidido comprar una pistola de burbujas y una varita mágica que hasta el día de hoy conserva ya que con estos al menos no es completamente rechazado por las personas. <br> <br>

## Personajes:
Xoldarg: Es nuestro protagonista, caballeroso como pocos, pese a verse intimidante es alguien realmente dulce que se preocupa por los demás en exceso y que haría lo que sea con tal de ver la sonrisa de las personas a su alrededor. <br> <br>

Antonio: El unico y mejor amigo de Xoldarg ese que está en las buenas y en las malas para él y que es como un hermano para nuestro protagonista pese a su peculiar forma.
`,
      en: ``,
    },
  },
  {
    id: 4,
    title: 'Reflejos del alma',
    author: 'Daniel Escobar',
    job: 'Fotografo',
    slug: 'reflejos-del-alma',
    year: 2024,
    category: { es: 'Fotografía experimental', en: '' },
    image: '/images/reflejosdelalma.jpg',
    hero: {
      type: 'image',
      src: '/images/reflejos-del-alma/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/reflejos-del-alma/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/reflejos-del-alma/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/reflejos-del-alma/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/reflejos-del-alma/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/reflejos-del-alma/06.webp', role: 'detail' },
    ],
    preview: {
      es: `Reflejos del alma busca expresar todas esos silencios, ese dolor y arrepentimiento que alguna vez hemos sentido o experimentado en lo más puro de nuestro ser, el alma.`,
      en: ``,
    },
    sdescription: {
      es: `Reflejos del alma es un proyecto de fotografía con un enfoque experimental que busca representar las distintas penitencias del ser por medio de tres hilos conductores, el gesto, el ser y el hilo rojo, que es el destino, nos puede atar, atrapar o silenciar.`,
      en: ``,
    },
    ddescription: {
      es: `
## Intención del proyecto:
La intención con este proyecto fue plasmar esa sensación del ser cuando tenemos que dejar de ser individuos, como ese peso o cosas que vivenciamos en el dia a dia se van acumulando y poco a poco ocultan nuestro ser, haciendo que nos empecemos a preguntar ¿quienes somos?, por ello los gestos y la persona son la parte humana de la obra y el hilo esa corrupción/dilución del ser, queriendo preguntar con esto ¿que cosas que hacemos nos hacen de dejar de ser yo? y ¿por qué es tan difícil desatarse?.
`,
      en: ``,
    },
  },
  {
    id: 5,
    title: 'Branding nos(otros)',
    author: 'Daniel Escobar',
    job: 'Diseñador de marca',
    slug: 'branding-nos-otros',
    year: 2025,
    category: { es: 'Branding', en: '' },
    image: '/images/brandingnosotros.jpg',
    hero: {
      type: 'image',
      src: '/images/branding-nos-otros/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/branding-nos-otros/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/branding-nos-otros/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/branding-nos-otros/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/branding-nos-otros/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/branding-nos-otros/06.webp', role: 'detail' },
    ],
    sdescription: {
      es: `Creación de logo para proyecto de grado donde se buscaba crear un logo con el que se pudiera jugar, que pudiera transformarse y cambiar, funcionando como imagen del proyecto, pero también como objeto de diseño y de interacción.`,
      en: ``,
    },
    ddescription: {
      es: `
## Naming y descripción:
El naming del proyecto surge de como yo (nos) cambió para encajar en un otros que nunca se termina de consolidar, de todos esos cambios que tengo que hacer en mi para poder encajar con el resto y que finalmente me hace perder lo más importante de mi, mi identidad, por ello el tachado en el nos y el otros que es cambiante, con letras que nunca encajan perfectamente y que siempre están en constante cambio. <br> <br>

A nivel tipográfico se realizaron distintas exploraciones desde este mismo concepto, explorando también la mirada, la unión, el cambio y la inexistencia, siendo que finalmente la pérdida del yo y el otros cambiante fue el que más logró encajar con la filosofía del proyecto, ya que no es solo algo estéticamente agradable, sino que expresa el enfoque autoral que se tenía con el proyecto.
`,
      en: ``,
    },
  },
  {
    id: 6,
    title: 'Iconos nos(otros)',
    author: 'Daniel Escobar',
    job: 'Diseñador de iconos',
    slug: 'iconos-nos-otros',
    year: 2025,
    category: { es: 'Iconografía', en: '' },
    image: '/images/iconosnosotros.jpg',
    hero: {
      type: 'image',
      src: '/images/iconos-nos-otros/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/iconos-nos-otros/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/iconos-nos-otros/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/iconos-nos-otros/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/iconos-nos-otros/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/iconos-nos-otros/06.webp', role: 'detail' },
    ],
    sdescription: {
      es: `Creación de iconos para proyecto de grado en donde el objetivo era crear distintas piezas que permitieran darle dimensionalidad al proyecto, siendo que al tratarse de un concepto abstracto como lo son las transformaciones identitarias había que aterrizar este a algo tangible, lo cual terminó siendo el cuerpo, la mente y lo mixto, entendiendo esto también en las afectaciones individuales.`,
      en: ``,
    },
    ddescription: {
      es: `
## Contextualización:
Las transformaciones identitarias se viven de muchísimas maneras, siempre estamos en constante cambio y evolución y algo muy importante de estas es que son algo meramente individual pero colectivo en sincronía ya que mi identidad cambia tanto al interactuar con el otro como conmigo mismo, por lo que el ejercicio realizado con los iconos, fue crear estas piezas iconográficas que representaran el cómo el individuo se transforma en relación al otro y el cómo este intercambio lo afecta en mayor o menor medida, por ello cada icono por más parecidos que son tiene un significante individual y colectivo, el punto con esto es que cuando se planteó la experiencia/interacción la idea es que la persona colocara cada uno de estos en un espejo fragmentado donde la persona considerara que el concepto encajaba con si, creando no solo una obra cambiante, donde dependiendo de la persona la lectura fuera completamente diferente, sino una obra colectiva, donde el icono no se vuelve solo la representación de algo, sino una forma de hablar de las personas.
`,
      en: ``,
    },
  },
  {
    id: 7,
    title: 'Fanzine nos(otros)',
    author: 'Daniel Escobar',
    job: 'Diagramador y editor de imagenes',
    slug: 'fanzine-nosotros',
    year: 2025,
    category: { es: 'Diseño editorial', en: '' },
    image: '/images/fanzinenosotros.jpg',
    hero: {
      type: 'image',
      src: '/images/fanzine-nosotros/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/fanzine-nosotros/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/fanzine-nosotros/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/fanzine-nosotros/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/fanzine-nosotros/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/fanzine-nosotros/06.webp', role: 'detail' },
    ],
    sdescription: {
      es: `Creación de fanzines informativos que permitieran entender el ejercicio investigativo y visual del proyecto de grado, ya que en este se optó por una representación simbólica de las transformaciones, se realizaron 4 piezas que permitieran la correcta traducción y entendimiento del proceso visual, textil y musical realizado para el proyecto.`,
      en: ``,
    },
    ddescription: {
      es: `
## Contextualización:
Las transformaciones identitarias son un concepto muy amplio y entender obras relacionadas a estas se vuelve una tarea muy abstracta incluso para personas expertas en el tema, por lo que este tipo de piezas se vuelven necesarias para comprender cuál era la intencionalidad que se tenía con cada uno de los apartados de la misma, por ello en estas piezas se describió el proceso de diseño gráfico, de modas y de música que se realizó para cada uno de los contextos del proyecto los cuales son discoteca, familia, amigos y universidad, explicando el porqué de cada cosa y también dando información extra del proyecto, como técnicas y tecnologías que fueron implementadas para el desarrollo de esta.
`,
      en: ``,
    },
  },
  {
    id: 8,
    title: 'Proyectos de ilustración',
    author: 'Daniel Escobar',
    job: 'Ilustrador',
    slug: 'proyectos-ilustracion',
    year: 2023,
    category: { es: 'Ilustración', en: '' },
    image: '/images/proyectosilustracion.jpg',
    hero: {
      type: 'image',
      src: '/images/proyectos-ilustracion/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/proyectos-ilustracion/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/proyectos-ilustracion/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/proyectos-ilustracion/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/proyectos-ilustracion/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/proyectos-ilustracion/06.webp', role: 'detail' },
    ],
    sdescription: {
      es: `Recopilación de distintos proyectos de ilustración que he hecho a lo largo de los años, donde exploro mi estilo, distintas formas de renderizado, técnicas, formas de componer y sobre todo me divierto.`,
      en: ``,
    },
  },
  {
    id: 9,
    title: 'Proyectos de fotografía',
    author: 'Daniel Escobar',
    job: 'Fotografo',
    slug: 'proyectos-fotografia',
    year: 2023,
    category: { es: 'Fotografía', en: '' },
    image: '/images/proyectosfotografia.jpg',
    hero: {
      type: 'image',
      src: '/images/proyectos-fotografia/01.webp',
      id: 'm1',
      role: 'main',
    },
    palette: [
      { id: 'p1', hex: '' },
      { id: 'p2', hex: '' },
      { id: 'p3', hex: '' },
      { id: 'p4', hex: '' },
      { id: 'p5', hex: '' },
    ],
    media: [
      { id: 'm2', src: '/images/proyectos-fotografia/02.webp', role: 'medium' },
      { id: 'm3', src: '/images/proyectos-fotografia/03.webp', role: 'medium' },
      { id: 'm4', src: '/images/proyectos-fotografia/04.webp', role: 'detail' },
      { id: 'm5', src: '/images/proyectos-fotografia/05.webp', role: 'detail' },
      { id: 'm6', src: '/images/proyectos-fotografia/06.webp', role: 'detail' },
    ],
    sdescription: {
      es: `Recopilación de distintos proyectos de fotografía que he hecho a lo largo de los años, donde exploro formas de iluminar, ángulos de cámara, composición, fotografía de producto y edición fotográfica.`,
      en: ``,
    },
  },
];
