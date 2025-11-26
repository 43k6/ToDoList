import "./App.css";
import ToDoList from "./componet/ToDoList";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { orange, red } from "@mui/material/colors";

function App() {
  // const theme = createTheme({
  //   status: {
  //     danger: orange[500],
  //   },
  //   palette: {
  //     primary: {
  //       main: "#dd2c00",
  //     },
  //     secondary: {
  //       main: red[800],
  //     },
  //   },
  // });

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
        main: "#16A34A",
        light: "#4ADE80",
        dark: "#15803D",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#FFFFFF",
        paper: "#F9FAFB",
      },
      text: {
        primary: "#1F2937",
        secondary: "#4B5563",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <div
        style={{
          boxSizing: "border-box",
          backgroundColor: "#191b1f",
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
