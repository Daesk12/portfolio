export interface Cancion {
  title: string;
  audio: string;
  image: string;
  id: number;
  waveColor: string;
  progressColor: string;
}

export const canciones: Cancion[] = [
  {
    id: 1,
    title: 'canción 1',
    audio: '/audio/01.mp3',
    image: '/images/about/01.webp',
    waveColor: '#eccc68',
    progressColor: '#ffa502',
  },
  {
    id: 2,
    title: 'canción 2',
    audio: '/audio/02.mp3',
    image: '/images/about/02.webp',
    waveColor: '#a4b0be',
    progressColor: '#3742fa',
  },
  {
    id: 3,
    title: 'canción 3',
    audio: '/audio/03.mp3',
    image: '/images/about/03.webp',
    waveColor: '#ffb8b8',
    progressColor: '#ff3838',
  },
];
