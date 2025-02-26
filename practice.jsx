import { useState } from "react";
import Header from "./Header"
import Main from "./Main"
import ModalWithForm from "./ModalWithForm";

function App () {
const [weatherData, setWeatherData] = useState({type:"cold" })
const [activeModal, setActiveModal] = useState("");

const handleAddClick = () =>{
setActiveModal("add-garment");
}

const closeActiveModal = () => {
    setActiveModal("");
}

    return (
        <div className="page">
            <div className="page-content">
                <Header handleAddClick={handleAddClick}/>
                <Main weatherData ={weatherData} />
            </div>
            <ModalWithForm title="New garment" buttonText="add garment" activeModal={activeModal} handleCloseClick={closeActiveModal}>
            <label htmlFor="name" className="modal__label">Name <input id="name" type="text" className="modal__input" placeholder="name"/></label>
                    <label htmlFor="imageUrl" className="modal__label">ImageUrl <input id="imageUrl" type="text" className="modal__input" placeholder="imageUrl"/></label>
                    <fieldset className="modal__radio-buttons">
                        <legend className="modal__legent">select the weather type</legend>
                        <label htmlFor="hot" className="modal__label modal__label_type-radio">hot <input type="radio" id="hot" /></label>
                        <label htmlFor="warm" className="modal__label modal__label_type-radio">warm <input type="radio" id="warm" /></label>
                        <label htmlFor="cold" className="modal__label modal__label_type-radio">cold <input type="radio" id="cold" /></label>
                    </fieldset>
            </ModalWithForm>

        </div>
    )

}

export default App;