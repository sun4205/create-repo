function ModalWithForm(){
    return(
        <div className="modal">
            <div className="modal-content">                
                    <p className="modal__title">New Garment</p>
                    <button type="button" className="modal__close-btn">close</button>
                    <form className="modal__form">
                    <label htmlFor="name" className="modal__label">Name <input id="name" type="text" className="modal__input" placeholder="name"/></label>
                    <label htmlFor="imageUrl" className="modal__label">ImageUrl <input id="imageUrl" type="text" className="modal__input" placeholder="imageUrl"/></label>
                    <fieldset className="modal__radio-buttons">
                        <legend className="modal__legent">select the weather type</legend>
                        <label htmlFor="hot" className="modal__label modal__label_type-radio">hot <input type="radio" id="hot" /></label>
                        <label htmlFor="warm" className="modal__label modal__label_type-radio">warm <input type="radio" id="warm" /></label>
                        <label htmlFor="cold" className="modal__label modal__label_type-radio">cold <input type="radio" id="cold" /></label>
                    </fieldset>
                    <button type="submit" className="modal__submit">submit</button>
                </form>
            </div>
        </div>

    )
}
export default ModalWithForm;
