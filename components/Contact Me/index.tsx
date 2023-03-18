import { Title } from "../Title";

export default function ContactMe() {
  return (
    <>
      <div
        className="mx-auto flex w-container flex-col items-center justify-center gap-8 pt-12 md:pt-6 pb-28 text-center"
        id="contactme-section"
      >
        <Title>Get In Touch</Title>
        <p className="max-w-md font-medium">
          Currently avalible for job contracts and freelancing gigs for long and
          short term projects
        </p>
        <a
          className="w-fit cursor-pointer rounded-md bg-[#39A3EF] px-8 py-4 text-2xl font-bold transition-all duration-150 ease-in hover:bg-blue-500"
          href="mailto:hossamabdelmenem6@gmail.com"
        >
          Say Hello
        </a>
      </div>
      <div className="mx-auto flex w-container flex-col items-center gap-4 pb-4 text-center text-xs text-gray-300 sm:flex-row sm:justify-between md:text-sm">
        <span>&#169; 2023 Hossam Abd Elmenem</span>
        <span className="flex gap-3">
          <a>hossamabdelmenem6@gmail.com</a>
          <p>|</p>
          <a href="https://github.com/hossammenem" target="_blank">
            Github
          </a>
        </span>
      </div>
    </>
  );
}
