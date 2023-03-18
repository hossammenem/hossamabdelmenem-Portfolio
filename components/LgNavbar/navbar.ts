const isBroswer = typeof window !== "undefined";

export const toggleNav = () => {
  if (isBroswer) {
    var prevScrollpos = window.pageYOffset;
    const navbar: HTMLElement | null =
      document.querySelector("#nav-wrapper") ?? null;
    const header: HTMLElement | null =
      document.querySelector("#header") ?? null;

    if (navbar && header) {
      const offSet = header.offsetHeight;
      window.onscroll = () => {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          navbar.style.top = "0";
        } else {
          navbar.style.top = "-69px";
        }
        prevScrollpos = currentScrollPos;

        if (window.pageYOffset >= offSet) navbar.classList.add("sticky-bar");
        else if (window.pageYOffset <= 50) navbar.style.top = "8px";
        else {
          navbar.classList.remove("sticky-bar");
          navbar.style.top = "-69px";
        }
      };
    }
  }
};
