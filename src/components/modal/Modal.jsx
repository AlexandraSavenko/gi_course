import { createPortal } from 'react-dom';
import css from './Modal.module.css'

const Modal = ({onClose, children}) => {
  return (
    createPortal(
        <div>
          <div className={css.backdrop}></div>
          <div className={css.content}>
            <button onClick={() => onClose?.()} className={css.button}>
              X
            </button>
            {children}
          </div>
        </div>,
        document.body
      )
  )
}

export default Modal
