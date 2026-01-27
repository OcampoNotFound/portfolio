import { useState } from "react";
import { experience, type ExperienceData } from "../../data/experience.data";
import { ExModal } from "./ExModal";

export const ExCard = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceData | null>(null);

  return (
    <>
      {experience.map((exp) => (
        <div key={exp.id} className="experienceItem">
          <button
            className="modalButton"
            onClick={() => setSelectedExperience(exp)}
            aria-label="Open experience details"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path d="M15 3h6v6"></path>
              <path d="M10 14 21 3"></path>
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
            </svg>
          </button>
          <div className="companyHeader">
            <h2 className="companyTitle">{exp.company}</h2>
          </div>
          <p className="description">{exp.description}</p>
          <ul>
            {exp.tech.map((techs, index) => (
              <li key={index}>
                {Array.isArray(techs) ? (
                  <>
                    <span
                      className="techSvg"
                      dangerouslySetInnerHTML={{ __html: techs[1] }}
                    />
                    <span>{techs[0]}</span>
                  </>
                ) : (
                  techs
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <ExModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </>
  );
};
