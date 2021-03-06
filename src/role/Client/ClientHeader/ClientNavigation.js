import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowNarrowUpIcon, SearchIcon } from "@heroicons/react/outline";

const ClientNavigation = () => {
  const navigationRef = useRef();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handleNavigationScroll = () => {
      const scrolled = document.documentElement.scrollTop;
      console.log(scrolled);
      if (scrolled > 68) {
        setVisible(true);
      } else if (scrolled <= 68) {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleNavigationScroll);
    return () => {
      window.removeEventListener("scroll", handleNavigationScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const navigationClassName = `fixed top-0 left-0 w-full px-[5%] z-50 ease-linear duration-200 ${
    visible && "shadow-xl bg-[#fff]"
  }`;
  const logoClassName = `py-6 logo text-4xl ${visible && "active"}`;
  return (
    <div className={navigationClassName} ref={navigationRef}>
      <ArrowNarrowUpIcon
        className="w-10 h-10 fixed bottom-6 right-6 bg-purple-gradient rounded p-2.5 text-white cursor-pointer"
        style={{ display: visible ? "inline" : "none" }}
        onClick={scrollToTop}
      />
      <header className="flex items-center justify-between w-full ">
        <div className="flex items-center gap-6">
          <Link to="/">
            {" "}
            <div className={logoClassName}>happysearching</div>
          </Link>
          <ul className="flex items-center gap-10 text-base">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore/all">Explore</Link>
            </li>
            <li>
              <a href="#footer">Contact</a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <div className="relative w-[20vw] mt-2 text-black">
            <input
              type="text"
              className="w-full outline-none focus:outline-none border-[2px] border-gray-400 rounded-lg text-sm px-4 py-2 focus:border-purple-gradient ease-linear duration-200"
            />
            <SearchIcon className="cursor-pointer w-5 h-5 absolute right-4 top-2 text-gray-400" />
          </div>
          <Link to="/auth">
            <button className="bg-purple-700 hover:bg-purple-800 px-5 py-1.5 rounded text-white duration-200 ease-linear text-base">
              Login
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};
export default ClientNavigation;
