import * as React from "react";
import Header from "../components/Header";
import { Box, Container, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBootstrap, faCss3, faDocker, faGit, faGitAlt, faGithub, faHtml5, faJava, faJs, faLinkedin, faLinux, faNode, faPhp, faPython, faReact, faUnity, faVuejs } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <Header />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      >
        <Box sx={{ height: "50vh" }}>
          <Box sx={{ marginBottom: "100px", display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ marginRight: '30px' }}>
              <Typography variant="h3" gutterBottom sx={{ fontWeight: "bold" }}>
                Front-end developer 👋
              </Typography>
              <Typography variant="subtitle1" className="text-light">
                Hoi, ik ben Mitchell Ekelschot.
              </Typography>
              <Typography
                variant="subtitle1"
                className="text-light"
                gutterBottom
              >
                Een front-end developer uit Zuid-Holland, Nederland. 📍
              </Typography>

              <Link
                className="text text-dark"
                to="https://www.linkedin.com/in/mitchell-ekelschot-204248271/"
                target="_blank"
              >
                <FontAwesomeIcon className="icon" icon={faLinkedin} />
              </Link>
              <Link
                className="text text-dark"
                to="https://github.com/rmekelschot"
                target="_blank"
              >
                <FontAwesomeIcon className="icon" icon={faGithub} />
              </Link>
            </Box>
            <Box sx={{width: '250px', height: '250px', backgroundColor: '#000'}}>
              Image
            </Box>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography variant="h6">Vaardigheden: </Typography>
            <FontAwesomeIcon className="icon" icon={faReact} />
            <FontAwesomeIcon className="icon" icon={faVuejs} />
            <FontAwesomeIcon className="icon" icon={faJs} />
            <FontAwesomeIcon className="icon" icon={faHtml5} />
            <FontAwesomeIcon className="icon" icon={faCss3} />
            <FontAwesomeIcon className="icon" icon={faBootstrap} />
            <FontAwesomeIcon className="icon" icon={faPhp} />
            <FontAwesomeIcon className="icon" icon={faLinux} />
            <FontAwesomeIcon className="icon" icon={faJava} />
            <FontAwesomeIcon className="icon" icon={faPython} />
            <FontAwesomeIcon className="icon" icon={faNode} />
            <FontAwesomeIcon className="icon" icon={faUnity} />
            <FontAwesomeIcon className="icon" icon={faDocker} />
            <FontAwesomeIcon className="icon" icon={faGit} />
          </Box>
        </Box>
      </Container>
    </div>
  );
}

export default Home;
