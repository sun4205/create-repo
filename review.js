const useEscapeKey = (isActive, closeActiveModal, modalRef) => {
  useEffect (()=>{
    if(!isActive) return;
    const handleEscClose = (e) => {
      if(e.key === "Escape"){
        closeActiveModal();
      }
    };

    const handleOverlayClick = (e) => {
      if(modalRef?.current && e.target === modalRef.current){
        closeActiveModal();
      }else{}
      
    };

    return () => {
      document.removeEventListener("keydown",handleEscClose);
      document.removeEventListener("click",handleOverlayClick);
    }
    

  },[isActive,closeActiveModal,modalRef]);
}