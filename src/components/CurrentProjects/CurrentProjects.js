import uniqid from "uniqid";
import { currentprojects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./CurrentProjects.css";

const CurrentProjects = () => {
  if (!currentprojects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Current Projects</h2>

      <div className="projects__grid">
        {currentprojects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default CurrentProjects;
