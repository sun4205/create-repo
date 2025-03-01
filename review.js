import React, { useRef } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../hooks/useForm";


const AddItemModal = ({
  activeModal,
  closeActiveModal,
  handleAddItemSubmit,
  buttonText,
  modalRef,
}) => {
  const { values, handleChange } = useForm({
    name: "",
    imageUrl: "",
    weather: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", values);
    handleAddItemSubmit(values);
  };
}
