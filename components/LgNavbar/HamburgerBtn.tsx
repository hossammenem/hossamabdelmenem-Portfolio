import { useEffect } from "react";
import initApp from "./pageDOM";

export default function HamburgerBtn() {
  useEffect(() => {
    const { hamburgerButton, menu, toggleMenu, wrapper } = initApp();
    if (hamburgerButton && menu && wrapper) {
      hamburgerButton.addEventListener("click", toggleMenu);
      menu.addEventListener("click", toggleMenu);
      wrapper.addEventListener("click", toggleMenu);
    }
    return () => {
      if (hamburgerButton && menu && wrapper) {
        hamburgerButton.removeEventListener("click", toggleMenu);
        menu.removeEventListener("click", toggleMenu);
        wrapper.removeEventListener("click", toggleMenu);
      }
    };
  }, []);

  return (
    <button
      className="relative z-auto h-9 w-8 text-3xl text-white md:hidden"
      id="hamburger-button"
    >
      <div
        className="absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white
              transition-all duration-300
            before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded
            before:bg-white before:transition-all
            before:duration-300 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4
            after:translate-y-3 after:rounded
            after:bg-white after:transition-all
            after:duration-300 after:content-['']"
      ></div>
    </button>
  );
}
