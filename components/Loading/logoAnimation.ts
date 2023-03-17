import anime from "animejs";

export const startLogoAnimation = async () => {
  const text = document.querySelectorAll(".animated-letter");
  const timeline = anime.timeline();

  timeline.add({
    targets: "#logoBorder",
    opacity: 1,
    duration: 100,
    easing: "linear",
  });
  timeline.add({
    targets: "#logoBorder",
    strokeDashoffset: [anime.setDashoffset, 0],
    easing: "easeInOutQuart",
    duration: 2000,
    delay: function (el, i) {
      return i * 250;
    },
  });

  timeline.add({
    targets: text,
    easing: "easeInOutQuart",
    opacity: 1,
    duration: 1000,
    delay: function (el, i) {
      return i * 150;
    },
  });
  timeline.add({
    delay: 1500,
  });

  setInterval(() => {
    text.forEach((element) => {
      element.classList.add("neon");
    });
  }, 3000);

  await timeline.finished;
};
