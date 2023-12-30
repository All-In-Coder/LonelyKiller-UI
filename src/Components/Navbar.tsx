import useMediaQuery from "@mui/material/useMediaQuery";
import { CssBaseline, Theme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import MobileNavbar from "./MobileComponents/MobileNavbar";

import { NavbarTheme } from "../Theme/NavbarTheme";
import WebNavbar from "./WebComponents/WebNavbar";

function NavBar() {
  const isMobile = useMediaQuery(NavbarTheme.breakpoints.down("sm"));
  return (
    <>
      <CssBaseline>
        <ThemeProvider theme={NavbarTheme as Theme}>
          {isMobile ? (
            <MobileNavbar theme={NavbarTheme as Theme} />
          ) : (
            <WebNavbar theme={NavbarTheme as Theme} />
          )}
        </ThemeProvider>
      </CssBaseline>
    </>
  );
}

export default NavBar;
