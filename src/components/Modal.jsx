import './modal.css';

const Modal = ({children, handleClose}) => {
    return (
        <div className="modal-backdrop">
            <div className="modal">
               {children}
               <button onClick={handleClose}>Close</button>
            </div>
            
        </div>
    );
};

export default Modal;