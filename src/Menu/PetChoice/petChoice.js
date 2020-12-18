import React, { useEffect, useState } from "react";
import "./PetChoice.css";
import {Link } from "react-router-dom";


// const apiKey = "0027812f-5efc-4575-be16-650b0dd150fd";
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

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div>
      <button onClick={refreshPage}>Click to refresh</button>
      <div className="pets">
        {items.map(({ url, id, breed }) => (
          <div key={id} className="inner">
            <Link className="nav-link" to={"/"}>
              <img src={url} alt="" width="300px" height="300px" />
            </Link>

            <p>Cute Pets </p>
            <h3>{breed}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PetChoice;
