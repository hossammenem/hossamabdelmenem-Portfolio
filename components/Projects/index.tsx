import { Title } from "../Title";
import Projects from "./Projects";
import OpenSourceProjects from "./OpenSource";
import { AoS } from "../AoS";

export default function Index() {
  return (
    <section className="mt-32 flex flex-col gap-8" id="projects-section">
      <Title>Projects I&apos;ve Built</Title>

      <div className="mx-auto flex w-container flex-col gap-12">
        <Projects />

        <AoS.FadeUp>
          <h3 className="mt-4 text-center text-lg text-gray-300">
            My open-source projects and contributions
          </h3>
        </AoS.FadeUp>

        <OpenSourceProjects />
      </div>

      <AoS.FadeUp>
        <div className="p-3 text-center text-sm text-gray-300">
          If you wanna see more of my projects and open-source contributions,
          checkout my{" "}
          <a
            className="text-[#39a3ef]"
            href="https://github.com/hossammenem"
            target="_blank"
          >
            github
          </a>
        </div>
      </AoS.FadeUp>
    </section>
  );
}
