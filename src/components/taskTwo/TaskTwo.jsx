import { useEffect, useState } from 'react'
import css from './TaskTwo.module.css'

const TaskTwo = () => {
    const [position, setPosition] = useState({
        left: 30,
        bottom: 30
    })
    
    useEffect(() => {
      const handleKeyDown = (e) => {
    console.log(e.key)
    if(e.key === "ArrowUp"){
        console.log(e.key)
        setPosition(prev => ({...prev, 
            bottom: prev.bottom + 10
        }) )
    }
}  

window.addEventListener("keydown", handleKeyDown)

return () => {
    window.removeEventListener("keydown", handleKeyDown)
}
    }, [])

  return (
    <div>
      <div className={css.gameArea}>
        <div style={{
            "--x": `${position.left}px`,
            "--y": `${position.bottom}px`
        }} className={css.ship}></div>
      </div>
    </div>
  )
}

export default TaskTwo
