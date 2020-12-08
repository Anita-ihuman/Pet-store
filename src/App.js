import React from "react";
import "./App.css";
import Pets from "./Pets";
import Header from './Header'
import Nav from './Nav'

const FirstPets = {
  img:
    "https://myfox8.com/wp-content/uploads/sites/17/2019/09/gettyimages-1071204136.jpg?w=876&h=493&crop=1",
  title: "Jerry",
  specie: "tabby cat",
};

const secondPets = {
  img:
    "https://www.vettedpetcare.com/vetted-blog/wp-content/uploads/2017/08/dog-travel-certificate-shutterstock_625242014.jpg",
  title: "TOM",
  specie: "brown tabby",
};



function App() {
  return (
    <div className="App">
      <Nav />
      <Header/>
      <Pets 
        img={FirstPets.img}
        title={FirstPets.title}
        specie={FirstPets.specie}
      />
      <Pets
        img={secondPets.img}
        title={secondPets.title}
        specie={secondPets.specie}
      />
    </div>
  );
}

export default App;
