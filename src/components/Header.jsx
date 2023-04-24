import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";

function Header() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

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
            id="menu-toggle"
            aria-controls={open ? "menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
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

          <Menu
            id="menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "menu-toggle",
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link to="/" className="text-dark">
                <Button color="inherit">Home</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/about" className="text-dark">
                <Button color="inherit">About</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link to="/projects" className="text-dark">
                <Button color="inherit">Projects</Button>
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
          <Link to="/contact" className="text-dark">
            <Button color="inherit">Contact</Button>
          </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
