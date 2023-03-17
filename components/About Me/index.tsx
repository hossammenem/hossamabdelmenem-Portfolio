export default function AboutMe() {
  return (
    <section className="mt-32" id="aboutme-section">
      <div className="mx-auto w-container">
        <div className="grid grid-cols-12 grid-rows-1 gap-4">
          <div className="col-span-full row-span-1 flex w-full flex-col gap-4 md:col-[1/7]">
            <h3 className="pb-4 pt-4 text-5xl font-bold text-primaryBlue">
              About Me
            </h3>
            <p>
              I&apos;m a full stack web developer with a bit of experience in
              web security, motivated to build clean and secure websites and
              imporve myself daily
            </p>
            <p>My goal is to always progress further and imporve myself </p>
          </div>
          <div className="col-span-full row-span-1 mx-auto md:col-[7/-1]">
            <img src="/assests/aboutMe.svg" alt="ALT" />
          </div>
        </div>
      </div>
    </section>
  );
}
