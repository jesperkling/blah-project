import "./App.css";

import Container from "react-bootstrap/Container";

import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Container>
        <h1 className="text-center m-5">Hello World</h1>
      </Container>
    </div>
  );
}

export default App;
