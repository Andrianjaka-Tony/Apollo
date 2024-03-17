import Lenis from "@studio-freight/lenis";

export const lenisObject = new Lenis();

export function useLenis() {
  function raf(time) {
    lenisObject.raf(time);
    requestAnimationFrame(raf);
  }
  requestAnimationFrame(raf);
}
