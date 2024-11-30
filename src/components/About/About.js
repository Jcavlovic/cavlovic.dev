import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import * as React from "react";
import Box from "@mui/material/Box";

import Modal from "@mui/material/Modal";
import "./About.css";
import { about } from "../../portfolio";
import Resume from "../Resume/Resume";

const style = {
  wordWrap: "normal",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 900,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  overflow: "scroll",
  height: 1000,
};

const About = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const { name, role, description, resume, social } = about;

  return (
    <div className="about center">
      {name && (
        <h1>
          Hi, I am <span className="about__name">{name}.</span>
        </h1>
      )}

      {role && <h2 className="about__role">A {role}.</h2>}
      <p className="about__desc">{description && description}</p>
      <div className="about__contact center">
        <span type="button" className="btn btn--outline" onClick={handleOpen}>
          Resume
        </span>
        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label="github"
                className="link link--icon"
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label="linkedin"
                className="link link--icon"
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
        <Modal open={open} onClose={handleClose} aria-labelledby="resume-title">
          <Box sx={style}>
            <Resume />
          </Box>
        </Modal>
      </div>
    </div>
  );
};

export default About;
