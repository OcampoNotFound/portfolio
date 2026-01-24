// import { experience } from "../../data/experience.data";
import { ExCard } from "../ui/ExCard";

export const Experience = () => {
  return (
    <section className="experienceSection">
      <div className="experienceContainer">
        <h1 className="title">Experience</h1>
        <div className="experienceContainerList">
          <ExCard />
        </div>
      </div>
    </section>
  );
};
