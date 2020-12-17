import React from "react";
import "./App.css";
import Home from "./home";
import Nav from "./Nav/Nav";
import About from "./Menu/About/about";
import Burger from "./Nav/Buger/Burger";
import Contact from "./Menu/Contact/contact";
import Login from "./Menu/Login/login";
import Footer from "./Footer/Footer";
import PetChoice from "./Menu/PetChoice/petChoice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// const secondPets = {
//   img:
//     "https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2017/08/dog-travel-certificate-shutterstock_625242014.jpg",
//   title: "TOM",
//   specie: "brown tabby",
// };

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/about" component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/petChoice" exact component={PetChoice} />
          <Route path="/contact" exact component={Contact} />
        </Switch>

        <div className='fixed'>
          
          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
