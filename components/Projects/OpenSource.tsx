import openSourceList from "./data/openSource.json";
import OpenSourceCard, { IOpenSource } from "./tmp";
import { AoS } from "../AoS";

export default function OpenSourceProjects() {
  return (
    <>
      {openSourceList.map((project: IOpenSource, index: React.Key) => (
        <AoS.FadeUp key={index}>
          <OpenSourceCard
            owner={project.owner}
            repo={project.repo}
            logo={project.logo}
            description={project.description}
            additionalContext={project.additionalContext}
            PRs={project.PRs}
          />
        </AoS.FadeUp>
      ))}
    </>
  );
}
