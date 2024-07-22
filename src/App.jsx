import React, { useState } from "react";
import getRandomNumbers from "../utils/getRandomNumbers";
import quotes from "../src/data/pharses.json";
import photos from "../src/data/photos.json";
import Phrase from "../Components/Phrase";
import BtnPhrase from "../Components/BtnPhrase";
import ShareSocials from "../Components/ShareSocials";
import "./App.css";

function App() {
  const indexRandom = getRandomNumbers(quotes.length);
  const [phraseSelect, setPhraseSelect] = useState(quotes[indexRandom]);
  const [bgSelect, setBgSelect] = useState(
    photos[getRandomNumbers(photos.length)]
  );
  const objStyles = {
    backgroundImage: `url(/img/fondo${bgSelect}.png)`,
  };
  return (
    <div className="background" style={objStyles}>
      <h1 className="title">Galleta de la Fortuna</h1>
      <article className="container">
        <Phrase phraseSelect={phraseSelect} />
        <BtnPhrase
          setPhraseSelect={setPhraseSelect}
          setBgSelect={setBgSelect}
        />
        <div className="card-social">
          <h3>Compartir:</h3>
          <ShareSocials phrase={phraseSelect.phrase} />
        </div>
      </article>
    </div>
  );
}

export default App;
