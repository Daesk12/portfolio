export interface Project {
  id: number;
  title: string;
  year: number;
  category: string;
  tags: string[];
  image: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Nos(otros)',
    year: 2025,
    category: 'Diseño interactivo / Diseño web',
    tags: ['app', 'ux', 'ui', 'web'],
    image: '/images/nosotros.jpg',
    featured: true,
  },
  {
    id: 2,
    title: 'El guionista',
    year: 2024,
    category: 'Ilustración / Diseño de personajes',
    tags: ['arte digital'],
    image: '/images/elguionista.jpg',
  },
  {
    id: 3,
    title: 'Xoldarg',
    year: 2023,
    category: 'Ilustración / Diseño de personajes',
    tags: ['arte digital'],
    image: '/images/xoldarg.jpg',
  },
  {
    id: 4,
    title: 'Reflejos del alma',
    year: 2024,
    category: 'Fotografía experimental',
    tags: ['edición fotográfica'],
    image: '/images/reflejosdelalma.jpg',
  },
];
