import { projects } from "../../data/projects.data";

export const PrCard = () => {
  return (
    <>
      {projects.map((projects, index) => (
        <div className="projectCard" key={index}>
          <h2 className="projectTitle">{projects.title}</h2>
        </div>
      ))}
    </>
  );
};
