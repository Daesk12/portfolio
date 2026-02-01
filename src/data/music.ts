export interface Cancion {
  title: string;
  audio: string;
  image: string;
  id: number;
}

export const canciones: Cancion[] = [
  {
    id: 1,
    title: 'canción 1',
    audio: '/audio/01.mp3',
    image: '/images/about/01.webp',
  },
  {
    id: 2,
    title: 'canción 2',
    audio: '/audio/02.mp3',
    image: '/images/about/02.webp',
  },
  {
    id: 3,
    title: 'canción 3',
    audio: '/audio/03.mp3',
    image: '/images/about/03.webp',
  },
];
