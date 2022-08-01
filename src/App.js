import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoadingProvider } from "./contexts/LodingContexts";
import { StyleProvider } from "./contexts/StyleContext";
import Main from "./components/Main";

function App() {

  return (
    <div className="App">
      <LoadingProvider>
        <ThemeProvider>
          <StyleProvider>
            <LanguageProvider>
              <Main />
            </LanguageProvider>
          </StyleProvider>
        </ThemeProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
