//auth.js
export const BASE_URL = "http://localhost:3001";

export const register = (name, avatar, email, password ) => {
  return fetch(`${BASE_URL}/auth/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

export const authorize = (email, password) => {
  return fetch(`${BASE_URL}/auth/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
};

//RegisterModel

import React, { useRef, useState } from "react";
import ModalWithForm from "../ModalWithForm/ModalWithForm";
import { useForm } from "../../utils/useForm";
import useEscapeKey from "../../utils/useEscapeKey";

const RegisterModal = ({
  activeModal,
  closeActiveModal,
  handleAddItemSubmit,
  buttonText,
}) => {
  const { values, handleChange } = useForm({
    email: "",
    password: "",
    name: "",
    avatarURL: "", 
  });

  const modalRef = useRef(null);
  useEscapeKey(!!activeModal, closeActiveModal, modalRef);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", values);
    handleAddItemSubmit(values);
  };

  return (
    <ModalWithForm
      isOpen={activeModal === "register"} 
      title="Register" 
      buttonText={buttonText}
      activeModal={activeModal}
      handleCloseClick={closeActiveModal}
      onSubmit={handleSubmit}
      modalRef={modalRef}
    >
      <label htmlFor="email" className="modal__label">
        Email
        <input
          type="email" 
          className="modal__input"
          id="email"
          name="email"
          placeholder="Email"
          value={values.email}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="password" className="modal__label">
        Password
        <input
          type="password" 
          className="modal__input"
          id="password"
          name="password"
          placeholder="Password"
          value={values.password}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="name" className="modal__label">
        Name
        <input
          type="text"
          className="modal__input"
          id="name"
          name="name"
          placeholder="Name"
          value={values.name}
          onChange={handleChange}
        />
      </label>

      <label htmlFor="avatarURL" className="modal__label">
        Avatar URL
        <input
          type="text"
          className="modal__input"
          id="avatarURL" 
          name="avatarURL"
          placeholder="Avatar URL"
          value={values.avatarURL}
          onChange={handleChange}
        />
      </label>
    </ModalWithForm>
  );
};

export default RegisterModal;

//LoginModal

// import React, { useRef, useState } from "react";
// import ModalWithForm from "../ModalWithForm/ModalWithForm";
// import { useForm } from "../../utils/useForm";
// import useEscapeKey from "../../utils/useEscapeKey";

// const LoginModal = ({
//   activeModal,
//   closeActiveModal,
//   handleAddItemSubmit,
//   buttonText,
// }) => {
//   const { values, handleChange } = useForm({
//     email: "",
//     password: "",
    
//   });

//   const modalRef = useRef(null);
//   useEscapeKey(!!activeModal, closeActiveModal, modalRef);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with values:", values);
//     handleAddItemSubmit(values);
//   };

//   return (
//     <ModalWithForm
//       isOpen={activeModal === "login"} 
//       title="Login" 
//       buttonText={buttonText}
//       activeModal={activeModal}
//       handleCloseClick={closeActiveModal}
//       onSubmit={handleSubmit}
//       modalRef={modalRef}
//     >
//       <label htmlFor="email" className="modal__label">
//         Email
//         <input
//           type="email" 
//           className="modal__input"
//           id="email"
//           name="email"
//           placeholder="Email"
//           value={values.email}
//           onChange={handleChange}
//         />
//       </label>

//       <label htmlFor="password" className="modal__label">
//         Password
//         <input
//           type="password" 
//           className="modal__input"
//           id="password"
//           name="password"
//           placeholder="Password"
//           value={values.password}
//           onChange={handleChange}
//         />
//       </label>

      
//     </ModalWithForm>
//   );
// };

// export default LoginModal;




