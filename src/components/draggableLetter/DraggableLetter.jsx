import { useDraggable } from '@dnd-kit/core'
import css from './DraggableLetter.module.css'

const DraggableLetter = ({letter}) => {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({id: letter.id})
    const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };
  return (
    <div className={css.letter} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {letter.value}
    </div>
  )
}

export default DraggableLetter
