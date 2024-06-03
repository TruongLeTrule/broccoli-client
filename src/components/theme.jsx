import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00c722", // Set your primary color here
    },
    secondary: {
      main: "#00c722", // Set your secondary color here
    },
    text: {
      primary: "#00c722", // Customize primary text color
    },
  },
  typography: {
    h6: {
      color: "#007bff", // Customize specific typography styles
    },
  },
});

export default theme;
