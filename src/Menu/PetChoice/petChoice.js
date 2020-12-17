import React, { useEffect, useState } from "react";

const PetChoice = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const fetchItems = await fetch(
      "https://thecatapi.com/v1/images?api_key=0027812f-5efc-4575-be16-650b0dd150fd"
    );

    const items = await fetchItems.json();
    console.log(items.items);
    setItems(items);
  };
  return (
    <div>
      {items.map((item) => (
        <h2>{item}</h2>
      ))}
    </div>
  );
};

export default PetChoice;
