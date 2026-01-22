import { experience } from "../../data/experience.data";

export const Experience = () => {
  return (
    <section className="experienceSection">
      <div className="experienceContainer">
        <h1 className="title">Experience</h1>
        <div className="experienceContainerList">
          {experience.map((experience) => (
            <div key={experience.id} className="experienceItem">
              <h2>{experience.company}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
