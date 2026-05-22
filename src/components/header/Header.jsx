import { useState } from 'react'
import css from './Header.module.css'
import Modal from '../modal/Modal'
import Menu from '../menu/Menu'

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div className={css.header}>
     <button onClick={() => setIsModalOpen(true)} >Menu</button>
      {isModalOpen && <Modal onClose={() => setIsModalOpen(false)}>
        <Menu onClose={() => setIsModalOpen(false)}/>
        </Modal>}
    </div>
  )
}

export default Header
