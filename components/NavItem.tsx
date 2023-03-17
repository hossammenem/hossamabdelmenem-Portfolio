export default function NavItem({
  children,
  sectionId,
}: {
  children: React.ReactNode;
  sectionId: string;
}) {
  return (
    <li className="w-fit cursor-pointer after:mx-auto after:mt-1 after:block after:w-0 after:border-b-2 after:border-primaryBlue after:transition-all after:duration-200 after:ease-in after:content-[''] hover:after:w-2/5">
      <a href={`#${sectionId}`}>{children}</a>
    </li>
  );
}
