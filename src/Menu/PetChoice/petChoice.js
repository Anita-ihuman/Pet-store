import React, { useEffect, useState } from "react";

const PetChoice = () => {
  
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(
      "https://thecatapi.com/v1/images?api_key=0027812f-5efc-4575-be16-650b0dd150fd"
    );

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };
  return (
    <div>
      {items.map((item) => {
        <h2>{items.name}</h2>;
      })}
    </div>
  );
};

export default PetChoice;
