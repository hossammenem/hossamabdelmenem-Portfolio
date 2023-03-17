import { atom } from "jotai";
import { ISkill } from "./SkillCard";

export const skillsAtom = atom<ISkill[]>([]);