"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#0079d6",
    },
    secondary: {
      main: "#f6a017",
    },
  },
  typography: {
    fontFamily: "var(--font-geist-sans), sans-serif",
  },
});

export default theme;
