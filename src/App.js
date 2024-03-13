import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { Container } from "./components/Container";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className= "main_container">
      <Header />
      <Container />
      <Footer />
    </div>
  );
}

export default App;
