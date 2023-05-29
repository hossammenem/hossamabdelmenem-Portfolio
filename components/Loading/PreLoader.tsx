import { use, useEffect, useState } from "react";
import { startHeroAnimation } from "./heroAnimation";
import { startLogoAnimation } from "./logoAnimation";

export default function PreLoader() {
  const [visible, setVisible] = useState(true);
  const [finished, setFinished] = useState(false);

  function animationEnd() {
    setVisible(false);
    document.body.classList.remove("no-scroll");
    startHeroAnimation();
  }

  useEffect(() => {
    (async () => {
      await startLogoAnimation();
      setFinished(true);
    })();
    if (finished && visible) {
      animationEnd();
    }
  }, [visible, finished]);

  return (
    <div
      className={`${
        visible ? "z-50 opacity-100" : "-z-30 opacity-0"
      } absolute inset-0 flex h-screen w-screen flex-col items-center justify-center bg-[#111212] transition-all duration-300 ease-in-out`}
    >
      <div className="relative h-14 w-14">
        <div className="absolute top-1/4 left-6 font-medium">
          <span className="animated-letter opacity-0">H</span>
          <span className="animated-letter opacity-0">o</span>
          <span className="animated-letter opacity-0">s</span>
          <span className="animated-letter opacity-0">s</span>
          <span className="animated-letter opacity-0">a</span>
          <span className="animated-letter opacity-0">m</span>
        </div>
        <svg
          width="49"
          height="49"
          viewBox="0 0 50 50"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <rect
              id="logoBorder"
              x="0.5"
              y="0.5"
              width="49"
              height="49"
              rx="4.5"
              stroke="#3178c6"
              className="opacity-0"
            />
          </g>
        </svg>
      </div>
      <button
        onClick={animationEnd}
        className="absolute bottom-0 mb-20 text-sm text-gray-500 transition-colors duration-300 ease-in-out hover:text-gray-300"
      >
        Skip Animation
      </button>
    </div>
  );
}
