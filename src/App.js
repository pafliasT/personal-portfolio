import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { SpeedInsights } from "@vercel/speed-insights/react"
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}

export default App;
