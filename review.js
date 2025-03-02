import {useNavigate, useLocation} from'react-router-dom'

const navigate = useNavigate();
const location = useLocation();


const openRemoveItemModal = (card) => {
  setSelectedCard(card);
  setIsRemoveItemModalOpen(true);
};
const closeRemoveItemModal = () => setIsRemoveItemModalOpen(false);


const handleCardClick = (card) => {
  console.log("Clicked card:", card);
  setActiveModal("preview");
  setSelectedCard(card);
};

const handleDeleteClick = (card) => {
  console.log("handleDeleteClick called with card:", card);
  setSelectedCard(card);
  openRemoveItemModal(card);
};











