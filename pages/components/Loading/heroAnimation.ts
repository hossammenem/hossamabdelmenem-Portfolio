import anime from "animejs";

export const startHeroAnimation = () => {
  const hero = document.querySelector("#hero");
  const timeline = anime.timeline();

  timeline
    .add({
      targets: hero,
      opacity: 1,
      duration: 750,
      easing: "easeInOutQuart",
    })
    .add({
      targets: hero,
      translateY: [50, 0],
      duration: 1000,
      easing: "easeOutExpo",
    }, 250);
};
