export default function initApp() {
  const hamburgerButton: HTMLButtonElement | null =
    document.querySelector("#hamburger-button") ?? null;
  const wrapper: HTMLElement | null =
    document.querySelector("#wrapper") ?? null;
  const menu: HTMLElement | null = document.querySelector("#menu") ?? null;

  const toggleMenu = () => {
    if (hamburgerButton && menu && wrapper) {
      menu.classList.toggle("slide");
      wrapper.classList.toggle("drop");
      hamburgerButton.classList.toggle("toggle-btn");
    }
  };
  return { hamburgerButton, menu, toggleMenu, wrapper };
}
