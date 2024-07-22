import React from "react";
import getRandomNumbers from "../utils/getRandomNumbers";
import quotes from "../src/data/pharses.json";
import photos from "../src/data/photos.json";

const BtnPhrase = ({ setPhraseSelect, setBgSelect }) => {
  const changePhrase = () => {
    const indexRandom = getRandomNumbers(quotes.length);
    const phraseRandom = quotes[indexRandom];
    setPhraseSelect(phraseRandom);
    setBgSelect(photos[getRandomNumbers(photos.length)]);
  };

  return (
    <button className="button" onClick={changePhrase}>
      Cambiar de galleta
    </button>
  );
};

export default BtnPhrase;
