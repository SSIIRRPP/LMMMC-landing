import { BrowserRouter } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";
import Layout from "./components/Layout";
import Language from "./contexts/Language";
import Theme from "./contexts/Theme";
import "./index.scss";
import "./styles/theme.scss";

function App() {
  return (
    <Theme>
      <BrowserRouter>
        <ParallaxProvider>
          <Language>
            <Layout />
          </Language>
        </ParallaxProvider>
      </BrowserRouter>
    </Theme>
  );
}

export default App;
