import { normalizeWheelDelta } from "./browsersSupport";
import { requestFrame } from "./browsersSupport";

let isMouseInsideChild: boolean = false;

export default function smoothScroll(event: any, state: any) {
  var closestScrollParent = getScrollParent(event?.target);
  var { speed, smooth, target, pos, moving, edgeStop } = state.getState();
  var delta = normalizeWheelDelta(event);

  if (closestScrollParent != target) {
    closestScrollParent.addEventListener("mouseover", () => {
      isMouseInsideChild = true;
    });

    if (isInsideChild(closestScrollParent, delta)) {
      event.preventDefault();
      isMouseInsideChild = false;
    } else if (isMouseInsideChild) {
      event.stopPropagation();
      return false;
    }
  } else {
    event.preventDefault();
  }

  if (!moving)
    state.setState(
      "pos",
      calcPos(target.scrollTop, speed, delta, edgeStop, target)
    );
  else state.setState("pos", calcPos(pos, speed, delta, edgeStop, target));

  if (!moving) frame();

  function frame() {
    state.setState("moving", true);

    const pos = state.getState("pos");
    const delta = (pos - target.scrollTop) / smooth;

    target.scrollBy({
      top: Math.round(delta),
      behavior: "instant",
    });

    if (Math.abs(delta) > 1) requestFrame(frame);
    else state.setState("moving", false);
  }
}

function getScrollParent(node: any): any {
  if (node == null) return null;

  const overflow = window.getComputedStyle(node).overflowY;
  console.log(
    node,
    node.offsetHeight,
    node.clientHeight,
    node.scrollHeight,
    overflow
  );
  if (
    window.getComputedStyle(node).overflowY == "auto" &&
    node.scrollHeight > node.clientHeight
  )
    return node;
  else return getScrollParent(node.parentNode);
}

function isInsideChild(closestScrollParent: HTMLElement, delta: number) {
  return (
    !isMouseInsideChild ||
    (closestScrollParent.scrollTop == 0 && delta > 0) ||
    (closestScrollParent.scrollTop + closestScrollParent.offsetHeight >=
      closestScrollParent.scrollHeight &&
      delta < 0)
  );
}

function calcPos(
  pos: number,
  speed: number,
  delta: number,
  edgeStop: number,
  target: HTMLElement
) {
  pos += -delta * speed;
  pos = Math.max(
    -edgeStop,
    Math.min(pos, target.scrollHeight + edgeStop - target.clientHeight)
  );
  if (
    (pos < 0 && delta < 0) ||
    (pos > target.scrollHeight - target.clientHeight && delta > 0)
  )
    pos += -delta * speed;

  return pos;
}
