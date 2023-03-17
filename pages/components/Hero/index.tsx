import { useEffect } from "react";
export default function Hero() {
  return (
    <section className="flex flex-col gap-4 pt-heroPadding opacity-0" id="hero">
      <h3 className="text-center text-xl font-semibold">
        Hello There 👋, I’m <span className="text-primaryBlue">Hossam</span>
      </h3>
      <h1 className="text-center text-mainTitle font-bold">
        I’m A <span className="text-primaryBlue">Full Stack</span> Web Developer
      </h1>
      <h4 className="text-center text-lg font-medium">
        I love building <span className="text-primaryBlue">Blazingly Fast</span>{" "}
        Websites
      </h4>
    </section>
  );
}
