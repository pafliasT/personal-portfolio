import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navigation from "./components/Navigation";
import Skills from "./components/Skills"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Skills />
      <SpeedInsights />
    </div>
  );
}

export default App;
