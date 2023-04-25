import * as React from "react";
import Header from "../components/Header";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBootstrap,
  faCss3,
  faDocker,
  faGit,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinkedin,
  faLinux,
  faNode,
  faPhp,
  faPython,
  faReact,
  faUnity,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";
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
          height: '90vh'
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={8}>
            <Typography variant={'h4'} gutterBottom sx={{ typography: { md: 'h1' }}} style={{fontWeight: "bold"}}>
              Front-end developer 👋
            </Typography>
            <Typography variant="subtitle1" className="text-light">
              Hoi, ik ben Mitchell Ekelschot.
            </Typography>
            <Typography variant="subtitle1" className="text-light" gutterBottom>
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
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
              <Box
                sx={{
                  width: "250px",
                  height: "250px",
                  backgroundColor: "#000",
                }}
              >
                Image
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{marginTop: '20px'}}>
              Vaardigheden:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>
                <FontAwesomeIcon className="icon" icon={faReact} />
                <FontAwesomeIcon className="icon" icon={faVuejs} />
                <FontAwesomeIcon className="icon" icon={faJs} />
                <FontAwesomeIcon className="icon" icon={faHtml5} />
                <FontAwesomeIcon className="icon" icon={faCss3} />
                <FontAwesomeIcon className="icon" icon={faBootstrap} />
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0px 10px" }}
              />
              <Typography>
                <FontAwesomeIcon className="icon" icon={faPhp} />
                <FontAwesomeIcon className="icon" icon={faNode} />
                <FontAwesomeIcon className="icon" icon={faDocker} />
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0px 10px" }}
              />
              <Typography>
                <FontAwesomeIcon className="icon" icon={faLinux} />
                <FontAwesomeIcon className="icon" icon={faPython} />
                <FontAwesomeIcon className="icon" icon={faJava} />
                <FontAwesomeIcon className="icon" icon={faUnity} />
                <FontAwesomeIcon className="icon" icon={faGit} />
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
