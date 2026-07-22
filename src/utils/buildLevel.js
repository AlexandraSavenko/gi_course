import React from "react";
import buildWords from "./buildWords";

const buildLevel = (levelTemplate, selectedWords, targetType) => {
  return {
    platforms: levelTemplate.platforms,
    enemies: levelTemplate.enemies,
    words: buildWords(
      selectedWords,
      targetType,
      levelTemplate.wordPosition,
    ),
  };
};

export default buildLevel;
