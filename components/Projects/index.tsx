import { Title } from "../Title";
import { ProjectCard, IProject } from "./ProjectCard";
import projects from "./projects.json";
import { Animate } from "@/components/AoS";

export default function Projects() {
  return (
    <section className="mt-32 flex flex-col gap-8" id="projects-section">
      <Title>Projects I&apos;ve Built</Title>

      <div className="mx-auto flex w-container flex-col gap-12">
        {projects.map((project: IProject, index) => {
          const isEven: boolean = (index as number) % 2 == 0;
          return (
            <>
              {isEven ? (
                <Animate.SlideFromLeft runOnce>
                  <ProjectCard
                    title={project.title}
                    img={project.img}
                    tags={project.tags}
                    description={project.description}
                    direction={isEven ? "RtL" : "LtR"}
                    gitRepoLink={project.gitRepoLink}
                    liveSiteLink={project.liveSiteLink}
                    key={index}
                  />
                </Animate.SlideFromLeft>
              ) : (
                <Animate.SlideFromRight runOnce>
                  <ProjectCard
                    title={project.title}
                    img={project.img}
                    tags={project.tags}
                    description={project.description}
                    direction={isEven ? "RtL" : "LtR"}
                    gitRepoLink={project.gitRepoLink}
                    liveSiteLink={project.liveSiteLink}
                    key={index}
                  />
                </Animate.SlideFromRight>
              )}
            </>
          );
        })}
      </div>
    </section>
  );
}
