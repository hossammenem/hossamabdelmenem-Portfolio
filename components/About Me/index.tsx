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
              I&apos;m a full-Stack Web Developer. I work with different databases like MongoDB and PostgreSQL and have experience developing user interfaces with NextJS. I&apos;m comfortable with both REST and GraphQL API architectures.
            </p>
            <p>
              Additionally, I have some experience with web application penetration testing. I have used several command line tools including Amass, fuff, gobuster..etc, and also worked with different tools like Burp Suite and ZAP.
            </p>
          </div>
          <div className="col-span-full row-span-1 mx-auto md:col-[7/-1]">
            <img src="/assests/aboutMe.svg" alt="ALT" />
          </div>
        </div>
      </div>
    </section>
  );
}
