export interface Project {
  id: number;
  title: string;
  year: number;
  category: string;
  tags: string[];
  author: string;
  preview: string;
  slug: string;
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nos(otros)',
    author: 'Mariana Restrepo - Anthony Ortega - Daniel Escobar',
    preview:
      'Proyecto de grado que explora las transformaciones identitarias desde un enfoque interdisciplinar, integrando diseño de modas, realización y producción musical y diseño gráfico.',
    year: 2025,
    category: 'Diseño interactivo / Diseño web',
    slug: 'nos-otros',
    tags: ['app', 'ux', 'ui', 'web'],
    image: '/images/nosotros.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'El guionista',
    slug: 'el-guionista',
    year: 2024,
    author: 'Daniel Escobar',
    preview: '',
    category: 'Ilustración / Diseño de personajes',
    tags: ['arte digital'],
    image: '/images/elguionista.jpg',
  },
  {
    id: 3,
    title: 'Xoldarg',
    author: 'Daniel Escobar',
    preview: '',
    year: 2023,
    slug: 'xoldarg',
    category: 'Ilustración / Diseño de personajes',
    tags: ['arte digital'],
    image: '/images/xoldarg.jpg',
  },
  {
    id: 4,
    title: 'Reflejos del alma',
    author: 'Daniel Escobar',
    preview: '',
    slug: 'reflejos-del-alma',
    year: 2024,
    category: 'Fotografía experimental',
    tags: ['edición fotográfica'],
    image: '/images/reflejosdelalma.jpg',
  },
];
