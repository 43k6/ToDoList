import "./App.css";
import ToDoList from "./componet/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1E3A8A",
        light: "#3B82F6",
        dark: "#1E40AF",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#DC2626",
        light: "#EF4444",
        dark: "#B91C1C",
        contrastText: "#FFFFFF",
      },
      success: {
        main: "#8bc34aff",
        light: "#4ADE80",
        dark: "#15803D",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#FFFFFF",
        paper: "#F9FAFB",
        dark: "#191b1f",
      },
      text: {
        primary: "#1F2937",
        secondary: "#4B5563",
      },
      hover: {
        gray: "#E5E7EB", // Tailwind gray-200
        darkGray: "#D1D5DB", // Tailwind gray-300
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.dark,
          width: "100vw",
          height: "100vh",
          padding: "15px",
          alignContent: "center",
        }}
      >
        <ToDoList />
      </div>
    </ThemeProvider>
  );
}

export default App;
