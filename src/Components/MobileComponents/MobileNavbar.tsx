import {
  BottomNavigation,
  BottomNavigationAction,
  Paper,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactsIcon from "@mui/icons-material/Contacts";
import PersonIcon from "@mui/icons-material/Person";
import { ChangeEvent, useState } from "react";
import { NavbarProps } from "../../interface/Navbar";

export default function MobileNavbar(theme: NavbarProps) {
  const [value, setValue] = useState("home");
  const handleChange = (event: ChangeEvent<{}>, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Paper
      sx={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 3,
        borderTopLeftRadius: "20px",
        borderTopRightRadius: "20px",
      }}
      elevation={24}
    >
      <BottomNavigation
        sx={{ backgroundColor: "mobile.main" }}
        value={value}
        onChange={handleChange}
        showLabels
      >
        <BottomNavigationAction
          label="Home"
          value="home"
          icon={<HomeIcon />}
          sx={{
            transition: "transform 0.3s ease-in-out", // Transition effect for scaling
            transform: value === "home" ? "scale(1.1)" : "none", // Scale effect on selection
          }}
        />
        <BottomNavigationAction
          label="About"
          value="about"
          icon={<InfoIcon />}
          sx={{
            transition: "transform 0.3s ease-in-out", // Transition effect for scaling
            transform: value === "about" ? "scale(1.1)" : "none", // Scale effect on selection
          }}
        />
        <BottomNavigationAction
          label="Contact Us"
          value="contact"
          icon={<ContactsIcon />}
          sx={{
            transition: "transform 0.3s ease-in-out", // Transition effect for scaling
            transform: value === "contact" ? "scale(1.1)" : "none", // Scale effect on selection
          }}
        />
        <BottomNavigationAction
          label="Login"
          value="login"
          icon={<PersonIcon />}
          sx={{
            transition: "transform 0.3s ease-in-out", // Transition effect for scaling
            transform: value === "login" ? "scale(1.1)" : "none", // Scale effect on selection
          }}
        />
      </BottomNavigation>
    </Paper>
  );
}
