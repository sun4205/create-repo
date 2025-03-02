import React, { act } from "react";
import ModalWithForm from "./ModalWithForm";
import { useForm } from " ..";

const AddItemModal = ({
  activeModal,
  closeActiveModal,
  handleAddItemSubmit,
  buttonText,
  ModalRef,
}) => {
  const { values, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddItemSubmit(values);
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "add-garment"}
      title="New Garmen"
      buttonText={buttonText}
      closeActiveModal={closeActiveModal}
      activeModal={activeModal}
      onSubmit={handleSubmit}
      ModalRef={ModalRef}
    >
      <label htmlFor="name" className="modal__label">
        <input
          id="name"
          className="modal__input"
          name="name"
          type="text"
          placeholder="name"
          value={values.name}
          onChange={handleChange}
        ></input>
      </label>

      <label htmlFor="imageUrl" className="modal__label">
        <input
        type="text"
        id="imageUrl"
        className="modal__input"
        name="imageUrl"
        placeholder="imageUrl"
        value={values.imageUrl}
        onChange={handleChange}
        ></input>
      </label>

      <fieldset className="modal__radio-btn">
        <legend className="=modal__legend">Select the Weather Type:</legend>

        <div>
          <input
          id="hot"
          type="radio"
          name="weather"
          checked={values.weather==="hot"}
          className="modal__radio_input"
          value="hot"
          onChange={handleChange}
          />
          <label htmlFor="hot" className="modal__label modal__label_type_radio">
            Hot
          </label>
        </div>

        <div>
          <input
          id="warm"
          type="radio"
          name="weather"
          checked={values.weather==="warm"}
          className="modal__radio_input"
          value="warm"
          onChange={handleChange}
          />
          <label htmlFor="warm" className="modal__label modal__label_type_radio">
            warm
          </label>
        </div>

        <div>
          <input
          id="cold"
          name="weather"
          type="radio"
          className="modal__radio_input"
          value="cold"
          onChange={handleChange}
          checked={values.weather==="cold"}
          />
          <label htmlFor="cold" className="modal_label modal__label_type_radio">
            cold
          </label>
        </div>
      </fieldset>
    </ModalWithForm>
  );
};

export default AddItemModal;
