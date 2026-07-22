import React from 'react'
import pickWrongWords from './pickWrongWords'
import placeWords from './placeWords'
import shuffle from './shuffle'

const buildLevelWords = (list, type) => {
    const amount = list.length()
    const selectedWrong = pickWrongWords(type, amount)
    const rightWords = placeWords(list, )
    const wrongWords = placeWords(selectedWrong, )
    const levelWords = [...rightWords, ...wrongWords]
    const shuffled = shuffle(levelWords)
  return (
    <div>
      
    </div>
  )
}

export default buildLevelWords
