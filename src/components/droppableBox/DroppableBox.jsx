import { useDroppable } from '@dnd-kit/core'
import React from 'react'

const DroppableBox = ({box, placedLetter}) => {
    const {setNodeRef, isOver} = useDroppable({id: box.id})
  return (
    <div ref={setNodeRef} style={{
        background: isOver ? "#ddd" : "white",
        width: 50,
        height: 50,
        border: "1px solid black",
      }}>
      {placedLetter?.value || ""}
    </div>
  )
}

export default DroppableBox
