import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from "./components/Main";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoadingProvider } from "./contexts/LodingContexts";

function App() {

  return (
    <div className="App">
      <LoadingProvider>
        <ThemeProvider>
          <LanguageProvider>
            <Main />
          </LanguageProvider>
        </ThemeProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
