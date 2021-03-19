import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Particles from "react-particles-js";
import About from './components/About';
import Nft from './components/Nft'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Particles
    params={{
      particles: {
        number: {
          value: 30
        },
        shape: {
          type: "square",
          stroke: {
            width: 2,
            color: "#000E40"

          }
        }
      }
    }}
    />
    <Router>
    <Navbar/>
      <Switch>
        <Route path="/" exact component={Home}>
        </Route>
        <Route path="/about" exact component={About} />
        <Route path="/nft" exact component={Nft} />
      </Switch>
    <Footer/>
    </Router>
    </>
  );
}

export default App;
