export const ProjectTags = ({ tags }: { tags: string[] }) => {
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
