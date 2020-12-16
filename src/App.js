import React from "react";
import "./App.css";
import Pets from "./Pets";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import RandomText from "./RandomText";
import SlideShow from "./Slides/SlideShow";
import Burger from "./Nav/Buger/Burger";
import Footer from "./Footer/Footer";
import About from "./Menu/About/about";
import Contact from "./Menu/Contact/contact";
import Login from "./Menu/Login/login";
import PetChoice from "./Menu/PetChoice/petChoice";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const FirstPets = {
  img:
    "https://image.freepik.com/free-vector/petshop-with-cat-dog_9645-763.jpg",
  title: "Jerry",
  specie: "tabby cat",
};

const secondPets = {
  img:
    "https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2017/08/dog-travel-certificate-shutterstock_625242014.jpg",
  title: "TOM",
  specie: "brown tabby",
};

const randomText = {
  test: "Meow",
  message: "I want to be your favorite pet!!!",
};

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Burger pageWrapId={"page-wrap"} outerContainerId={"App"} />
        <Header />
        <RandomText test={randomText.test} message={randomText.message} />

        <Switch>
          <Route exact path="/" />
          <Route exact path="/about" component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/petChoice" exact component={PetChoice} />
          <Route path="/petChoice" component={Contact} />
        </Switch>

        <div className="pets-flex">
          <SlideShow
            img={FirstPets.img}
            title={FirstPets.title}
            specie={FirstPets.specie}
          />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
