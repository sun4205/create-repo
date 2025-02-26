function ModalWithForm({title,buttonText}){
    return(
        <div className="modal">
            <div className="modal-content">                
                    <p className="modal__title">{title}</p>
                    <button type="button" className="modal__close-btn">close</button>
                    <form className="modal__form">
                    
                    <button type="submit" className="modal__submit">{buttonText}</button>
                </form>
            </div>
        </div>

    )
}
export default ModalWithForm;
