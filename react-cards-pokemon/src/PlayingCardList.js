import React, { useState, useRef } from "react";
import useAxios from "./hooks/useAxios";
import {v4 as uuid} from 'uuid';
import axios from "axios";
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {

 ///Within this object has 3 variables, response, cards, and getCards
  const res = useAxios("https://deckofcardsapi.com/api/deck/new/draw/")

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={() => res.getCard()}> Add a playing card! </button>
      </div>
      <div className="PlayingCardList-card-area">
         {res.items.map(cardData => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
