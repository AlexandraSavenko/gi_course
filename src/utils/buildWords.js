import React from "react";
import pickWrongWords from "./pickWrongWords";
import placeWords from "./placeWords";
import shuffle from "./shuffle";

const buildWords = (selectedWords, targetType, positions) => {

  const amount = selectedWords.length;
  const wrongWords = pickWrongWords(targetType, amount);
  const allWords = shuffle([...selectedWords, ...wrongWords]);
  return placeWords(allWords, positions);

};

export default buildWords;
