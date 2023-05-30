export interface IProject {
  title: string;
  description: string;
  tags: string[];
  img: string;
  gitRepoLink?: string;
  liveSiteLink: string;
  direction?: "RtL" | "LtR";
  // direction is determind by the text first, e.x. LtR is text from left to right and img from right to left and vice versa for Rtl
}

export const ProjectCard = (props: IProject ) => {
  const isLtR = props.direction === "LtR";

  const imgDir = isLtR
    ? "md:col-[6/-1] after:left-6"
    : "md:col-[1/8] after:-left-6";
  const infoDir = isLtR ? "md:col-[1/7]" : "md:col-[7/-1]";
  const titleDir = isLtR ? "mr-auto" : "ml-auto";
  const tagsDir = isLtR ? "" : "justify-end";

  return (
    <div className="grid grid-cols-12 grid-rows-1 rounded-sm md:p-8">
      <div
        className={`${imgDir} relative col-[1/-1] mx-auto mb-12 max-w-[400px] after:absolute after:inset-0 after:top-6 after:-z-10 after:block after:h-full after:w-full after:rounded-sm after:border-2 after:border-[#3178C6] after:content-[''] md:row-[1/-1] md:max-w-none`}
      >
        <img
          src={`/assests/${props.img}.png`}
          alt={props.title}
          className="relative h-full rounded-sm object-cover transition-all duration-300 ease-in-out hover:z-20 hover:scale-105"
        />
      </div>

      <div
        className={`${infoDir} col-[1/-1] mx-auto grid max-w-[400px] gap-4 rounded-sm md:row-[1/-1] md:max-w-none`}
      >
        <h3 className={`${titleDir} w-fit text-2xl font-bold md:text-3xl`}>
          {props.title}
        </h3>
        <div className="relative h-fit rounded-sm bg-[#1E1E1E] p-4 shadow-md">
          <p>{props.description}</p>
        </div>
        <ul className={`relative flex flex-row flex-wrap ${tagsDir} gap-3`}>
          <ProjectTags tags={props.tags} />
        </ul>
        <div className={`${tagsDir} flex gap-3`}>
          {props.gitRepoLink && (
            <a href={props.gitRepoLink} target="_blank" className="h-6 w-6">
              <img
                src="assests/github.svg"
                alt={`${props.title} github repo link`}
              />
            </a>
          )}
          <a href={props.liveSiteLink} target="_blank" className="h-6 w-6">
            <img src="assests/link.svg" alt={`${props.title} live site link`} />
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectTags = ({ tags }: { tags: string[] }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <li
          className="h-fit w-fit rounded-full bg-[#1E1E1E] px-4 py-1"
          key={index}
        >
          {tag}
        </li>
      ))}
    </>
  );
};
