import { useAtom } from "jotai/react";
import { skillsAtom } from "./store";
import skillsDB from "./skills.json";
import { ISkill } from "./SkillCard";
import { useEffect } from "react";

export default function useFilters() {
  const skills = skillsDB as ISkill[];
  const [, setSkills] = useAtom(skillsAtom);

  useEffect(() => setSkills(skills), []);

  function toggleActive(
    e:
      | React.ChangeEvent<HTMLButtonElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    document.querySelector(".active")?.classList.remove("active");
    if (e.target instanceof HTMLButtonElement) e.target.classList.add("active");
  }

  function filterAll(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setSkills(skills);
    toggleActive(e);
  }
  function filterFrontend(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setSkills(skills.filter((skill) => skill.tag === "Front-end" || skill.tag === "Full-stack"));
    toggleActive(e);
  }
  function filterBackend(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setSkills(skills.filter((skill) => skill.tag === "Back-end" || skill.tag === "Full-stack"));
    toggleActive(e);
  }

  return { filterAll, filterBackend, filterFrontend };
}
