import "./ItemModal.css";
import itemModalclose from "../../assets/itemModalClose.svg";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useRef } from "react";
import useEscapeKey from "../../utils/useEscapeKey";

function ItemModal({ activeModal, onClose, card, handleDeleteClick, currentUser }) {
  const modalRef = useRef(null);
  const closeActiveModal = () => {
    onClose();
  };

  // Check if the current user is the owner of the selected card
  const isOwn = card?.owner === currentUser?._id;

  // Create a variable for the delete button class
  const itemDeleteButtonClassName = `modal__delete ${isOwn ? "" : "modal__delete_hidden"}`;

  useEscapeKey(!!activeModal, closeActiveModal, modalRef);

  return (
    <div
      className={`modal ${activeModal === "preview" && "modal_opened"}`}
      ref={modalRef}
    >
      <div className="modal__content modal__content_type_image">
        <button onClick={onClose} type="button" className="modal__close">
          <img src={itemModalclose} alt="close_button" />
        </button>
        <img src={card.imageUrl} alt={card.name} className="modal__image" />

        <div className="modal__footer">
          <section className="modal__footer-section">
            <h2 className="modal__caption">{card.name}</h2>
            <p className="modal__weather">Weather: {card.weather}</p>
          </section>
          <section>
            {/* Option 1: Use conditional class name */}
            <button
              onClick={() => handleDeleteClick(card)}
              type="button"
              className={itemDeleteButtonClassName}
            >
              Delete item
            </button>

            {/* Option 2: Use conditional rendering */}
            {/* 
            {isOwn && (
              <button
                onClick={() => handleDeleteClick(card)}
                type="button"
                className="modal__delete"
              >
                Delete item
              </button>
            )} 
            */}
          </section>
        </div>
      </div>
    </div>
  );
}

export default ItemModal;
