import Header from "./components/Header"
import Hero from "./components/Hero"
import "./App.css";
import Companies from "./components/Companies";
import Residencies from "./components/Residencies";
import Value from "./components/Value";

const App = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
    </div>
  )
}
export default App
