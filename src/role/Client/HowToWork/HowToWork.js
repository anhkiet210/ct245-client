import HowToWorkImage from "../../../images/concept-of-data-analysis-and-maintenance.png";
import WorkItem from "./WorkItem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const HowToWork = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);
  return (
    <div className="h-screen w-full px-[5%] flex items-center gap-10">
      <div
        className="w-1/2"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="50"
        data-aos-offset="0"
      >
        <img src={HowToWorkImage} alt="" />
      </div>
      <div
        className="w-1/2"
        data-aos="fade-zoom-in"
        data-aos-easing="ease-in-back"
        data-aos-delay="100"
        data-aos-offset="0"
      >
        <h1 className="font-bold text-3xl">How we work ?</h1>
        <p className="my-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
          eget justo et iaculis.
        </p>
        <div>
          <WorkItem number="1" text="Expand Your Reach" />
          <WorkItem number="2" text="Annualized Growth" />
          <WorkItem number="3" text="Book Your Providers" />
        </div>
      </div>
    </div>
  );
};
export default HowToWork;
