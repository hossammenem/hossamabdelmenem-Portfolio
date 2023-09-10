import smoothScroll from "./smoothScroll";
import State from "./store";
import { addEventListeners } from "./browsersSupport";

export default function scroll(elm?: Element, options?: any) {
  // @ts-ignore
  const state = new State();

  if (elm) state.setState("target", elm);

  /** @type {Element} */
  const target = state.getState("target");

  state.setState("pos", target.scrollTop);

  state.setOptions(options);

  addEventListeners(target, state, smoothScroll);
}
