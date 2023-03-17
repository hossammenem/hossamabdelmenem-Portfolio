import { Title } from "../Title";
import { SkillCard } from "./SkillCard";
import { Tag } from "./SkillCard";
import FilterContolrs from "./FilterControls";
import { useAtom } from "jotai/react";
import { skillsAtom } from "./store";
import { motion, AnimatePresence } from "framer-motion";

export default function Skills() {
  const [skills] = useAtom(skillsAtom);

  return (
    <section className="mt-32 flex flex-col gap-8" id="skills-section">
      <Title>Skills</Title>
      <FilterContolrs />
      <motion.div className="mx-auto flex w-container flex-wrap justify-center gap-4 md:gap-8">
        <AnimatePresence>
          {skills.map((skill, index) => (
            <SkillCard
              img={`/assests/${skill.img}`}
              alt={skill.name}
              tag={skill.tag as Tag}
              key={index}
              name={skill.name}
            />
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
