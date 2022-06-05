import ResizeObserver from "resize-observer-polyfill";

console.log("applying pollyfills");

if (!window.ResizeObserver) {
  console.log("applying ResizeObserver pollyfills");
  window.ResizeObserver = ResizeObserver;
}
