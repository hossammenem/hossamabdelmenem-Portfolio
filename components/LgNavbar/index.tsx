import SliderNav from "./SliderNav";
import NavContent from "./NavContent";

export default function Navbar() {
  return (
    <>
    <div className="duraiton-300 fixed top-2 z-30 left-0 right-0 mx-auto w-[min(1200px,90%)] transition-all ease-in rounded-md" id="navbar">
      <NavContent />
      <SliderNav />
    </div>
      <div
        className="fixed top-0 left-0 -z-40 h-screen w-screen transition-all duration-300 ease-in-out"
        id="wrapper"
      ></div>
    </>
  );
}
