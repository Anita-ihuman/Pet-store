import React, { useEffect, useState } from "react";
import './PetChoice.css'
const apiKey = "0027812f-5efc-4575-be16-650b0dd150fd";
const url = "https://api.thecatapi.com/v1/images/search?limit=20";

const PetChoice = () => {
  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const response = await fetch(url, {
        headers: {
          "x-api-key": "0027812f-5efc-4575-be16-650b0dd150fd",
        },
      });
      const data = await response.json();
      console.log(data);
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="pets">
      {items.map(({ url, id, breed }) => (
        <div key={id} className="inner">
          <img src={url} alt="" />
          <p>Cutes Pets </p>
          <h3>{breed}</h3>
        </div>
      ))}
    </div>
  );
};

export default PetChoice;
