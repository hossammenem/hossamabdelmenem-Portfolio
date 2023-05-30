import { ProjectCard, IProject } from "./ProjectCard";
import projects from "./data/projects.json";
import { AoS } from "@/components/AoS";

export default function Projects() {
  return (
    <>
      {projects.map((project: IProject, index) => {
        const isEven: boolean = (index as number) % 2 == 0;
        return (
          <div key={index}>
            {isEven ? (
              <AoS.SlideFromLeft>
                <ProjectCard
                  title={project.title}
                  img={project.img}
                  tags={project.tags}
                  description={project.description}
                  direction={isEven ? "RtL" : "LtR"}
                  gitRepoLink={project.gitRepoLink}
                  liveSiteLink={project.liveSiteLink}
                />
              </AoS.SlideFromLeft>
            ) : (
              <AoS.SlideFromRight>
                <ProjectCard
                  title={project.title}
                  img={project.img}
                  tags={project.tags}
                  description={project.description}
                  direction={isEven ? "RtL" : "LtR"}
                  gitRepoLink={project.gitRepoLink}
                  liveSiteLink={project.liveSiteLink}
                />
              </AoS.SlideFromRight>
            )}
          </div>
        );
      })}
    </>
  );
}
