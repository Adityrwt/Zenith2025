declare module 'vanta/dist/vanta.fog.min' {
  interface VantaFogOptions {
    el: HTMLElement;
    THREE: any;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    highlightColor: number;
    midtoneColor: number;
    lowlightColor: number;
    speed: number;
  }

  interface VantaFog {
    (options: VantaFogOptions): {
      destroy: () => void;
    };
  }

  const FOG: VantaFog;
  export default FOG;
}