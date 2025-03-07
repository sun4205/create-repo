function ModalWithForm({title,buttonText, activeModal, handleCloseClick}){
    return(
        <div className={`modal ${activeModal==="add-garment" && "modal-opened"}`}>
            <div className="modal-content">                
                    <p className="modal__title">{title}</p>
                    <button onClick ={handleCloseClick} type="button" className="modal__close-btn">close</button>
                    <form className="modal__form">
                    
                    <button type="submit" className="modal__submit">{buttonText}</button>
                </form>
            </div>
        </div>

    )
}
export default ModalWithForm;
