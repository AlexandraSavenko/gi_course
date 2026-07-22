import React from "react";
import { verbList } from "../data/data";

const getRandomIndex = max => {
  return Math.floor(Math.random() * max);
};

const pickWrongWords = ( targetType, amount ) => {
  const oppositeType = targetType === "infinitiveVerbs" ? "gerundVerbs" : "infinitiveVerbs"
    const source = verbList[oppositeType];

  let wrongWords = [];
  while(wrongWords.length < amount){
    const candidate = source[getRandomIndex(source.length)]
  if(!wrongWords.some(word => word.id === candidate.id)){
    wrongWords.push(candidate)
  }
  }
  
  return wrongWords;
};

export default pickWrongWords;
