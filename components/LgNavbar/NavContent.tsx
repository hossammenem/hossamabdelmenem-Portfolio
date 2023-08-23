import NavItem from "../NavItem";
import HamburgerBtn from "./HamburgerBtn";
import { toggleNav } from "./navbar";
  
export default function NavContent() {
  toggleNav();
  return (
    <div className="mx-auto flex w-container flex-row justify-between py-4 px-4 relative z-40">
      <div className="relative mt-1 font-medium after:absolute after:inset-0 after:-left-4 after:-top-2 after:z-20 after:block after:h-10 after:w-10 after:rounded-md after:border-[1px] after:border-primaryBlue after:content-[''] md:mt-0">
        <p className="relative z-30">Hossam</p>
      </div>

      <HamburgerBtn />
      <ul className="hidden flex-row gap-8 font-medium md:flex">
        <NavItem sectionId="aboutme-section">About Me</NavItem>
        <NavItem sectionId="skills-section">Skills</NavItem>
        <NavItem sectionId="projects-section">Projects</NavItem>
        <NavItem sectionId="contactme-section"> Contact Me</NavItem>
      </ul>
    </div>
  )
}
