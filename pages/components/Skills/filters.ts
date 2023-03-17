import { useAtom } from "jotai/react";
import { skillsAtom } from "./store";
import skillsDB from "./skills.json";
import { ISkill } from "./SkillCard";
import { useEffect } from "react";

export default function filters() {
  const skills = skillsDB as ISkill[];
  const [, setSkills] = useAtom(skillsAtom);

  useEffect(() => setSkills(skills), []);

  function toggleActive(e: React.ChangeEvent<HTMLButtonElement>) {
    document.querySelector(".active")?.classList.remove("active");
    if (e) e.target.classList.add("active");
  }

  function filterAll(e: React.ChangeEvent<HTMLButtonElement>) {
    setSkills(skills);
    toggleActive(e);
  }
  function filterFrontend(e: React.ChangeEvent<HTMLButtonElement>) {
    setSkills(skills.filter((skill) => skill.tag === "Front-end"));
    toggleActive(e);
  }
  function filterBackend(e: React.ChangeEvent<HTMLButtonElement>) {
    setSkills(skills.filter((skill) => skill.tag === "Back-end"));
    toggleActive(e);
  }

  return { filterAll, filterBackend, filterFrontend };
}
