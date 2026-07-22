import { useReducer, createContext } from "react";
import {} from "react";

export const GameContext = createContext();
//this creates an object that looks like this: const GameContext = {
//     Provider: ...,
//     Consumer: ...
// }

const initialState = {
  selectedWords: [],
  targetType: "",
  completedWords: [],
  currentTask: 1,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return { ...initialState, ...action.payload };
    case "ADD_VERB":
      return {
        ...state,
        selectedWords: [...state.selectedWords, action.payload],
      };
    case "REMOVE_VERB":
      return {
        ...state,
        selectedWords: state.selectedWords.filter(
          (word) => word.id !== action.payload.id,
        ),
      };
    default:
      return state;
  }
};
const GameProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
