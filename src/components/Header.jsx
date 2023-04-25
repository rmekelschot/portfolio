import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link, useLocation } from "react-router-dom";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import { Button } from "@mui/material";

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
      <AppBar position="static" color="default">
        <Box sx={{ display: { xs: "flex", md: "none" } }}>
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
                <Link to="/" className="text text-dark">
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/about" className="text text-dark">
                  About
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/projects" className="text text-dark">
                  Projects
                </Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/contact" className="text text-dark">
                  Contact
                </Link>
              </MenuItem>
            </Menu>
          </Toolbar>
        </Box>
        <Toolbar
          sx={{
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, textTransform: "capitalize" }}
          >
            {route}
          </Typography>
          <Box>
            <Link to="/" className="text text-dark">
              <Button variant="condensed ">Home</Button>
            </Link>
            <Link to="/about" className="text text-dark">
              <Button variant="condensed ">About</Button>
            </Link>
            <Link to="/projects" className="text text-dark">
              <Button variant="condensed ">Projects</Button>
            </Link>
            <Link to="/contact" className="text text-dark">
              <Button variant="condensed ">Contact</Button>
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
