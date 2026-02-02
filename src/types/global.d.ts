export {};

declare global {
  interface Window {
    MusicPlayerLogic: {
      wavesurfer: any;
      toggle: () => void;
      next: () => { image: string; title: string };
      prev: () => { image: string; title: string };
    };
  }
}