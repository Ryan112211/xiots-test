import { lightBlue } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

const lightTheme = createTheme({
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#1C2B39",
    },
  },
  typography: {
    fontFamily: "Open Sans",
  },
});
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export { lightTheme, darkTheme };
