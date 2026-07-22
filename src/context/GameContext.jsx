import { useReducer, createContext, useEffect } from "react";
import {} from "react";

export const GameContext = createContext();
//this creates an object that looks like this: const GameContext = {
//     Provider: ...,
//     Consumer: ...
// }

const defaultState = {
  selectedWords: [],
  targetType: "",
  currentTask: 1,
  completedWords: [],
  score: 0,
  lives: 3,
  level: 1,
};

const initialState = () => {
  const saved = localStorage.getItem("game");
  return saved ? JSON.parse(saved) : defaultState;
};

const reducer = (state, action) => {
  switch (action.type) {
    case "NEW_GAME":
      return { ...initialState(), ...action.payload };
    case "RESET_GAME":
      return {
        ...defaultState,
      };
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
  const [state, dispatch] = useReducer(reducer, undefined, initialState);
  useEffect(() => {
    localStorage.setItem("game", JSON.stringify(state));
  }, [state]);
  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export default GameProvider;
