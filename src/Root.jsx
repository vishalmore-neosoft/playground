import { Container } from "@mui/material";
import App from "./App";
import { themePalette } from "./config/palette";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

const theme = createTheme({
  palette: themePalette,
});
export default function Root() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Container>
          <App />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}
