import { motion } from "framer-motion";

export type Tag = "Front-end" | "Back-end";
export interface ISkill {
  img: string;
  alt: string;
  tag: Tag;
  name: string;
}

export const SkillCard = ({ name, img, alt }: ISkill) => {
  return (
    <motion.div
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="flex h-[120px] w-[120px] flex-col items-center justify-center gap-2 rounded-md bg-anotherBlack p-4 text-xl font-bold shadow-md transition-all duration-100 ease-in hover:bg-gray-700 md:h-[225px] md:w-[225px] md:gap-4 md:text-4xl"
    >
      <div className="h-[60px] w-[60px] md:h-[100px] md:w-[100px]">
        <img src={img} alt={alt} />
      </div>
      <div>{name}</div>
    </motion.div>
  );
};
