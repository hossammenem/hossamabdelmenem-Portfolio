export const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="mx-auto w-fit text-4xl font-bold after:mx-auto after:mt-3 after:block after:w-4/5 after:border-b-2 after:border-primaryBlue after:content-['']">
      {children}
    </h3>
  );
};
