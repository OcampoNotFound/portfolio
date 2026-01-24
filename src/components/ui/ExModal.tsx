import type { ExperienceData } from "../../data/experience.data";

interface ExModalProps {
  experience: ExperienceData | null;
  onClose: () => void;
}

export const ExModal = ({ experience, onClose }: ExModalProps) => {
  if (!experience) return null;

  return (
    <div className="modalOverlay" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <button
          className="closeButton"
          onClick={onClose}
          aria-label="Close modal"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div className="modalHeader">
          {experience.image && (
            <img
              src={experience.image}
              alt={experience.company}
              className="companyImage"
            />
          )}
          <div className="headerText">
            <h1>{experience.company}</h1>
            <h2 className="role">{experience.role}</h2>
            <p className="period">{experience.period}</p>
          </div>
        </div>

        <div className="modalBody">
          <section className="section">
            <h3>About</h3>
            <p>{experience.description}</p>
          </section>

          <section className="section">
            <h3>Responsibilities</h3>
            <ul className="responsibilitiesList">
              {experience.responsabilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </section>

          <section className="section">
            <h3>Technologies Used</h3>
            <div className="techList">
              {experience.tech.map((tech, index) => (
                <span key={index} className="techBadge">
                  {tech}
                </span>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};
