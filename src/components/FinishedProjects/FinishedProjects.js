import uniqid from "uniqid";
import { finishedprojects } from "../../portfolio";
import ProjectContainer from "../ProjectContainer/ProjectContainer";
import "./FinishedProjects.css";

const CurrentProjects = () => {
  if (!finishedprojects.length) return null;

  return (
    <section id="projects" className="section projects">
      <h2 className="section__title">Finished Projects</h2>

      <div className="projects__grid">
        {finishedprojects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  );
};

export default CurrentProjects;
