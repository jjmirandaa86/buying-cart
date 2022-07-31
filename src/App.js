import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { LoadingProvider } from "./contexts/LodingContexts";
import RoutePage from "./routes/RoutePage";

function App() {

  return (
    <div className="App">
      <LoadingProvider>
        <ThemeProvider>
          <LanguageProvider>
            <RoutePage />
          </LanguageProvider>
        </ThemeProvider>
      </LoadingProvider>
    </div>
  );
}

export default App;
