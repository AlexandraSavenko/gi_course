const placeWords = (words, positions) => {
  return words.map((words, index) => ({...words, ...positions[index]}))
}

export default placeWords
