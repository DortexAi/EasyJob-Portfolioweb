import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import { Drawer, Button, Stack, MenuItem, IconButton } from '@mui/material'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import logo2 from "../../assets/images/EasyJob_logo.jpg";
import { Link } from "react-router-dom";
import './navbar.css'

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginRight: theme.spacing(2),
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(3),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  const navoption = [
    { name: "Home", href: "/" },
    { name: "About us", href: "/about" },
    { name: "Contact us", href: "#Contactus" },
  ];
  const linktextStyles = {
    color: "#000",
    textDecoration: "none",
    fontSize: "15px",
  };
  const linkButtonStyles = {
    color: "#ffffff",
    textDecoration: "none",
    fontSize: "15px",
  };

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Drawer
      anchor="right" 
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      sx={{ alignItems:'center',  display: 'flex',
        flexDirection: 'column',
        paddingTop:'5%',
        alignItems: 'center',   
        justifyContent: 'center', 
        height: '100%', }}
    >
      <Stack
        spacing={2}
        direction="column"
        sx={{ width: 250, padding: 2 }} 
      >
        {navoption.map((navitem, index) => (
          <Button key={index} sx={{ color: "#58a8dd" }} onClick={handleMobileMenuClose}>
            <Link to={navitem.href} style={linktextStyles}
             >{navitem.name}</Link>
          </Button>
        ))}
  
        <MenuItem>
          <Stack spacing={2} direction="column" sx={{alignItems:'center', width:250,padding:2,}}>
            <Button variant="contained" sx={{ backgroundColor: "#58a8dd" }}>
              <Link to="/wantjob" style={linkButtonStyles}>Want a Job</Link>
            </Button>
            <Button variant="contained" sx={{ backgroundColor: "#58a8dd" }}>
              <Link to="/hire" style={linkButtonStyles}>Want to Hire</Link>
            </Button>
          </Stack>
        </MenuItem>
      </Stack>
    </Drawer>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ backgroundColor: "#f7f7f7" }}>
        <Toolbar>
          {/* <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            EasyJob
          </Typography> */}

          <Link to={'/'}>
          <img src={logo2} alt="logo2" height={"100px"} width={"100px"} />
          </Link>

          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <Stack spacing={2} direction="row">
              {navoption.map((navitem) => (
                <Button sx={{ color: "#58a8dd" }}>
                  <Link to={navitem.href} style={linktextStyles}> {navitem.name}</Link>
                </Button>
              ))}
            </Stack>

            <MenuItem
              sx={{
                "&:hover": {
                  backgroundColor: "transparent",
                },
              }}
            >
              <Stack spacing={2} direction="row">
                <Button variant="contained" sx={{ backgroundColor: "#58a8dd" }}>
                  <Link to={'/wantjob'} style={linkButtonStyles}>Want a Job</Link>
                </Button>
                <Button variant="contained" sx={{ backgroundColor: "#58a8dd" }}>
                  <Link style={linkButtonStyles}>Want to Hire</Link>
                </Button>
              </Stack>
            </MenuItem>
            {/* <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton> */}
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="#000"
            >
              {/* <MoreIcon /> */}
              <MenuIcon sx={{ fontSize: 35, color: "#333333" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
