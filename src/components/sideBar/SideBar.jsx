import { useContext, useState } from "react";
import ButtonMax from "../buttonMax/ButtonMax";
import Modal from "../modal/Modal";
import css from "./SideBar.module.css";
import WordList from "../wordList/WordList";
import { verbList } from "../../data/data";
import { GameContext } from "../../context/GameContext";
import { useNavigate } from "react-router-dom";

const SideBar = ({ type }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();
  const { state, dispatch } = useContext(GameContext);
  const selectedLength = state.selectedWords.length;
  const handleModalOpen = () => {
    dispatch({
      type: "NEW_GAME",
      payload: {targetType: type},
    });
    setModalOpen(true);
  };
  return (
    <div className={css.listWrap}>
      <ButtonMax onClick={handleModalOpen} value={"Select words"} />
      <WordList verbs={verbList[type]} selectable={false} />
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <p>You can choose between 5 and 10 words, and not more.</p>
          <WordList verbs={verbList[type]} selectable={true} />
          <p>`You have selected ${selectedLength} words`</p>
          {selectedLength >= 5 && (
            <ButtonMax
              onClick={() => navigate("/games/task1")}
              value={"Start Game"}
            />
          )}
        </Modal>
      )}
    </div>
  );
};

export default SideBar;
