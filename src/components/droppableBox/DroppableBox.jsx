import { useDroppable } from '@dnd-kit/core'
import css from './DroppableBox.module.css'

const DroppableBox = ({box, placedLetter}) => {
    const {setNodeRef, isOver} = useDroppable({id: box.id})
  return (
    <div ref={setNodeRef} className={`${css.box} ${isOver ? css.over : ""}`}>
      {placedLetter?.value || ""}
    </div>
  )
}

export default DroppableBox
