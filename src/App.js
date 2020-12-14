import React from "react";
import "./App.css";
import Pets from "./Pets";
import Header from "./Header/Header";
import Nav from "./Nav/Nav";
import RandomText from "./RandomText";
import SlideShow from "./Slides/SlideShow";


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
    <div className="App">
      <Nav />
      <Header />
      <RandomText test={randomText.test} message={randomText.message} />

      <div className="pets-flex">
      
        <SlideShow
          img={FirstPets.img}
          title={FirstPets.title}
          specie={FirstPets.specie}
        />
      </div>
    </div>
  );
}

export default App;
