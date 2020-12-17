import React, { useEffect, useState } from "react";

const PetChoice = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch("https://dog.ceo/api/breeds/list/all");

    const items = await data.json();
    console.log(items.items);
    setItems(items.items);
  };
  return (
    <div>
      {items.map((item) => (
        <h2>{items.message}</h2>
      ))}
    </div>
  );
};

export default PetChoice;
