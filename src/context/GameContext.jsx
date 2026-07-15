import { useReducer, createContext } from "react";
import {  } from "react";

export const GameContext = createContext();
//this creates an object that looks like this: const GameContext = {
//     Provider: ...,
//     Consumer: ...
// }
const GameProvider = ({ children }) => {
  const initialState = {
    selectedWords: [],
    completedWords: [],
    currentTaks: 1,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_VERB":
        return { ...state, selectedWords:[...state.selectedWords, action.payload] };
        case "REMOVE_VERB":
            return {...state, selectedWords: state.selectedWords.filter(el => el != action.payload)}
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
    //GameContext is an object with Provider being a value
    //this means every container inside can have access to value
  );
};

export default GameProvider;