import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline, Paper, createTheme } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactsIcon from '@mui/icons-material/Contacts';
import PersonIcon from '@mui/icons-material/Person';
import { ThemeProvider } from "@emotion/react";

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Replace with your desired color
    },
    secondary: {
      main: '#F50057', // Replace with your desired color
    },
    success: {
      main: '#4CAF50', // Replace with your desired color
    },
    special: {
      main: '#46505A'
    }
  },
});

function NavBar() {
  const [value, setValue] = useState("home");
  // const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <CssBaseline>
      <ThemeProvider theme={theme}>
        {isMobile ? (
          <Paper
          sx={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 3,
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
          }}
          elevation={24}

        >
          <BottomNavigation sx={{backgroundColor: 'red'}} value={value} onChange={handleChange} showLabels>
            <BottomNavigationAction 
              label="Home" 
              value="home" 
              icon={<HomeIcon />} 
              sx={{
                transition: 'transform 0.3s ease-in-out', // Transition effect for scaling
                transform: value === 'home' ? 'scale(1.1)' : 'none', // Scale effect on selection
              }} 
            />
            <BottomNavigationAction 
              label="About" 
              value="about" 
              icon={<InfoIcon />} 
              sx={{
                transition: 'transform 0.3s ease-in-out', // Transition effect for scaling
                transform: value === 'about' ? 'scale(1.1)' : 'none', // Scale effect on selection
              }}
            />
            <BottomNavigationAction 
              label="Contact Us" 
              value="contact" 
              icon={<ContactsIcon />} 
              sx={{
                transition: 'transform 0.3s ease-in-out', // Transition effect for scaling
                transform: value === 'contact' ? 'scale(1.1)' : 'none', // Scale effect on selection
              }}
            />
            <BottomNavigationAction 
              label="Login" 
              value="login" 
              icon={<PersonIcon />} 
              sx={{
                transition: 'transform 0.3s ease-in-out', // Transition effect for scaling
                transform: value === 'login' ? 'scale(1.1)' : 'none', // Scale effect on selection
              }}
            />
          </BottomNavigation>
        </Paper>
        ) : (
          <AppBar position="static" sx={{ flexGrow: 1, bgcolor: "special.main" }}>
            <Toolbar>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Lonely Killer
              </Typography>
              <Button color="inherit">Home</Button>
              <Button color="inherit">About</Button>
              <Button color="inherit">Contact Us</Button>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
        )}
        /</ThemeProvider>
      </CssBaseline>
    </>
  );
}

export default NavBar;
