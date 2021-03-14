import React from "react";
import CardListItem from "./cardListItem";

const cardList = ({ cards = [] }) => (
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
    {cards.map((card) => (
      <CardListItem title={card.name} subtitle={card.name} />
    ))}
  </div>
);

export default cardList;
