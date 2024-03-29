import NavItem from "../NavItem";

export default function SliderNav() {
  return (
    <div className="fixed top-2 rounded-md -left-full z-30 h-[calc(100dvh-18px)] w-[min(95%,350px)] bg-gradient px-2 py-40 shadow-lg shadow-black transition-all duration-300 ease-in-out"
      id="menu"
    >
      <ul className="flex flex-col items-center gap-7 font-medium">
        <NavItem sectionId="aboutme-section">About Me</NavItem>
        <NavItem sectionId="skills-section">Skills</NavItem>
        <NavItem sectionId="projects-section">Projects</NavItem>
        <NavItem sectionId="contactme-section"> Contact Me</NavItem>
      </ul>
    </div>
  );
}
