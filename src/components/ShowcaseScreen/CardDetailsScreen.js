import React from "react";
import { useParams } from "react-router-dom";
import cardData from "../ShowcaseScreen/ShowcaseScreen";

function CardDetailsScreen() {
  const { id } = useParams();
  const card = cardData.find((card) => card.id.toString() === id);

  if (!card) {
    return <div>Card not found.</div>;
  }

  return (
    <div>
      <h2>{card.title}</h2>
      <img
        src={card.img}
        alt="img"
        style={{ width: "100%", height: "380px", objectFit: "contain" }}
      />
      <p>{card.description}</p>
    </div>
  );
}

export default CardDetailsScreen;
