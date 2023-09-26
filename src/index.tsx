import ReactDOM from "react-dom/client";
import App from "./App";
import ThemeWrapper from "./styles/constants/theme";
import GlobalStyles from "./styles/globalStyles";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <ThemeWrapper>
      <GlobalStyles />
      <App />
    </ThemeWrapper>
  </BrowserRouter>
);
