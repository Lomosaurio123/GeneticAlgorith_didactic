import Graphs from "./components/Graphs"


export default function App() {

  return (
    <div className="App">
      <h1>Graphs</h1>
      <div>
        <Graphs functionName="Ackley" />
      </div>
      <div>
        <Graphs functionName="Rosenbrock" />
      </div>
      <div>
        <Graphs functionName="Salomon" />
      </div>
      <div>
        <Graphs functionName="Weierstrass" />
      </div>
    </div>
  );
}