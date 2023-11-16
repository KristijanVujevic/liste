import "./App.css";
import IspisImena from "./Components/ispisImena";
import IspisNovi from "./Components/ispisNovi";
import SimpleLista from "./Components/simpleLista";
function App() {
  const imena = ["Marko", "Pero", "Iva", "Katarina", "Ana"];
  const klijenti = [
    { id: "f23", name: "Ivan", years: 30 },
    { id: "f25", name: "Ana", years: 25 },
  ];

  return (
    <div className="App">
      <SimpleLista />
      <IspisImena imena={imena} />
      <IspisNovi imena={klijenti} />
    </div>
  );
}

export default App;
