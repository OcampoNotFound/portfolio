export function About() {
  return (
    <>
      <section className="aboutSection">
        <div className="aboutContainer">
          <h1 className="aboutTitle">About</h1>
          <div className="about">
            <div className="profilePhoto">
              <img
                alt="GitHub OcampoNotFound Profile Photo"
                // src="/img/logo.png"
                src="/img/logo.png"
              />
            </div>
            <h1>Hi, I'm Brayan Ocampo</h1>
            <p>
              I’m a software analyst and developer with a strong passion for web
              UI. I have 3+ years of experience building websites using modern
              JavaScript frameworks like React and Next.js. I love turning
              designs into clean, functional interfaces.
              <br />
              I’m a minimalist by nature, a creative problem-solver, and a
              confident leader who enjoys tackling challenges with imagination
              and structure. I thrive in team environments, love collaborating
              on large-scale projects, sharing ideas, and learning from others.
              <br />
              Outside of code, I’m into anime, traditional Japanese aesthetics,
              and Linux — all of which influence my taste for simplicity,
              detail, and well-crafted systems.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
