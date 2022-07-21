import logo from './logo.svg';
import './App.css';
import Main from "./components/Main";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {

  return (
    <div className="App">
      <ThemeProvider>
        <LanguageProvider>
          <Main />
        </LanguageProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
