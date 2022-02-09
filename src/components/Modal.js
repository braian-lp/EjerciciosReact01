import "./Modal.css"

const Modal = ({children, isOpen, closeModal})=>{
    const handleModalContainerCLick= e => e.stopPropagation();
    return(
            <section className={`modal-section ${isOpen && "is-open"}`} onClick={closeModal}>
                <div className="modal-container" onClick={handleModalContainerCLick}>
                    <button onClick={closeModal} className="modal-close">X</button>
                    {children}
                </div>
            </section>
        
    )
}

export default Modal;