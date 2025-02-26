function ItemModal({activeModal, card, handleCloseClick}){
    return(
        <div className={`modal ${activeModal==="preview"&&"modal-opened"}`}>
            <div className="modal__content">
            <button onClick ={handleCloseClick} type="button" className="modal__close-btn">close</button>
            <img src={card.link} alt={card.name} />
            <div>
                <p>{card.name}</p>
                <p>weather:{card.weather}</p>
            </div>
            </div>
        </div>
    )
}

export default ItemModal;