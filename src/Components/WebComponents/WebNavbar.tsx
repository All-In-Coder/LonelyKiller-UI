import { AppBar, Button, Toolbar, Typography } from "@mui/material";
import { NavbarProps } from "../../interface/Navbar";

function WebNavbar(them: NavbarProps) {
  return (
    <AppBar position="static" sx={{ flexGrow: 1, bgcolor: "web.main" }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          App
        </Typography>
        <Button sx={{ color: "yellow" }}>Home</Button>
        <Button color="inherit">About</Button>
        <Button color="inherit">Contact Us</Button>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export default WebNavbar;
