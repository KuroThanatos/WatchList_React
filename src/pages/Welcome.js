import logo from '../logo.svg';
import "../css/App.css";

function Welcome() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tecnologias da Internet II, Engenharia informática, 2021</h1>
        <h4>Componente React</h4>
      </header>
    </div>
  );
}

export default Welcome;
