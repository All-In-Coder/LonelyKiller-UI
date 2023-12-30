import { createTheme, ThemeOptions } from "@mui/material";

// Define your custom palette options
interface CustomPaletteOptions {
  mobile: {
    main: string;
  };
  web: {
    main: string;
  };
}

// Merge your custom palette options with the base ThemeOptions
type CustomThemeOptions = ThemeOptions & {
  palette: CustomPaletteOptions;
};

export const NavbarTheme = createTheme({
  palette: {
    mobile: {
      main: ''
    },
    web: {
      main: "blue-300"
    }
  },
} as CustomThemeOptions); // Use your custom theme options here

export default CustomThemeOptions;
