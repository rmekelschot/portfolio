import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();

  const route = (
    location.pathname === "/" ? "/home" : location.pathname
  ).substring(1);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textTransform: "capitalize" }}
          >
            {route}
          </Typography>
          <Link to="/" className="text-white">
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about" className="text-white">
            <Button color="inherit">About</Button>
          </Link>
          <Link to="/projects" className="text-white">
            <Button color="inherit">Projects</Button>
          </Link>
          <Link to="/contact" className="text-white">
            <Button color="inherit">Contact</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
