import * as React from "react";
import Header from "../components/Header";
import { Box, Container, Divider, Grid, Tooltip, Typography } from "@mui/material";
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
          display:{xs: 'block', sm: 'flex'},
          alignItems: 'center',
          height: '75vh'
        }}
      >
        <Grid container spacing={2} sx={{ marginTop: { xs: "30px", md: '10vh' } }}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant={"h5"}
              gutterBottom
              sx={{ typography: { lg: "h1"} }}
              style={{ fontWeight: "bold" }}
            >
              Front-End Developer 👋
            </Typography>
            <Typography variant="subtitle2" className="text-light" sx={{fontSize: '18px'}}>
              Hoi, ik ben Mitchell Ekelschot.
            </Typography>
            <Typography variant="subtitle2" className="text-light" sx={{fontSize: '18px'}} gutterBottom>
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
          <Grid item xs={12} sm={6} sx={{width: '100%'}}>
            <Box sx={{ display: "flex", justifyContent: "center", width: 'inherit'}}>
              <Box
                sx={{
                  width: "200px",
                  height: "200px",
                  backgroundColor: "#000",
                }}
              ></Box>
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6" gutterBottom sx={{ marginTop: "20px" }}>
              Vaardigheden:
            </Typography>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography>

              <Tooltip title="React">
                <FontAwesomeIcon className="icon" icon={faReact} />
              </Tooltip>
              <Tooltip title="VueJs">
                <FontAwesomeIcon className="icon" icon={faVuejs} />
              </Tooltip>
              <Tooltip title="Javascript">
                <FontAwesomeIcon className="icon" icon={faJs} />
              </Tooltip>
              <Tooltip title="HTML">
                <FontAwesomeIcon className="icon" icon={faHtml5} />
              </Tooltip>
              <Tooltip title="Css">
                <FontAwesomeIcon className="icon" icon={faCss3} />
              </Tooltip>
              <Tooltip title="Bootstrap">
                <FontAwesomeIcon className="icon" icon={faBootstrap} />
              </Tooltip>

              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0px 10px" }}
              />
              <Typography>

              <Tooltip title="PHP">
                <FontAwesomeIcon className="icon" icon={faPhp} />
              </Tooltip>
              <Tooltip title="NodeJs">
                <FontAwesomeIcon className="icon" icon={faNode} />
              </Tooltip>
              <Tooltip title="Docker">
                <FontAwesomeIcon className="icon" icon={faDocker} />
              </Tooltip>
              </Typography>
              <Divider
                orientation="vertical"
                flexItem
                sx={{ margin: "0px 10px" }}
                />
              <Typography>
              <Tooltip title="Linux">
                <FontAwesomeIcon className="icon" icon={faLinux} />
                </Tooltip>
              <Tooltip title="Python">
                <FontAwesomeIcon className="icon" icon={faPython} />
                </Tooltip>
              <Tooltip title="Java">
                <FontAwesomeIcon className="icon" icon={faJava} />
                </Tooltip>
              <Tooltip title="Unity3D">
                <FontAwesomeIcon className="icon" icon={faUnity} />
                </Tooltip>
              <Tooltip title="Git">
                <FontAwesomeIcon className="icon" icon={faGit} />
                </Tooltip>
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
