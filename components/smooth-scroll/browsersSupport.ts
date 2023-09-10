// TODO: I think there is something for rate limiting for screens with higher
// refresh rate ( heighr than 60 )
import { useEffect } from "react";

export function normalizeWheelDelta(e: any) {
  if (e.detail) {
    if (e.wheelDelta)
      return (e.wheelDelta / e.detail / 40) * (e.detail > 0 ? 1 : -1); // Opera
    else return -e.detail / 3; // Firefox
  } else return e.wheelDelta / 120; // IE,Safari,Chrome
}

export function targetBodyNormalization(): Element {
  var target: Element =
    document.scrollingElement ||
    document.documentElement ||
    document.body.parentNode ||
    document.body;

  return target;
}

var requestFrame: any;
export function addEventListeners(
  target: HTMLElement,
  state: any,
  func: (e: any, state: any) => void
) {
  function scrollHandler(e: any) {
    func(e, state);
  }

  function handleClick(e: any) {
    state.setState("pos", target.scrollTop);
    state.setState("moving", false);
  }

  requestFrame =
    window.requestAnimationFrame ||
    // @ts-ignore
    window.webkitRequestAnimationFrame ||
    // @ts-ignore
    window.mozRequestAnimationFrame ||
    // @ts-ignore
    window.oRequestAnimationFrame ||
    // @ts-ignore
    window.msRequestAnimationFrame ||
    function (func: any) {
      window.setTimeout(func, 1000 / 50);
    };
  target.addEventListener("wheel", scrollHandler, {
    passive: false,
  });

  target.addEventListener("mousewheel", scrollHandler, {
    passive: false,
  });

  target.addEventListener("DOMMouseScroll", scrollHandler, {
    passive: false,
  });

  // those event listeneres are important for the user to be able
  // to use the scroll bar

  // mousedown to prevent the scroll bar from trying to keep on going back to
  // the last pos that we scrolled to ( by the wheel )
  target.addEventListener("mousedown", handleClick);

  // mouseup to get the exact pos that the user has stopped at
  target.addEventListener("mouseup", handleClick);
}

export { requestFrame };
