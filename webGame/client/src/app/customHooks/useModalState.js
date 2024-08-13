import { useState } from 'react';

function useModalState() {
  const [modal, setModal] = useState({
    reply: false,
    emote: false,
    edit: false,
    delete: false
  });

  const openModal = (modalName) => {
    setModal(prevState => ({
      ...prevState,
      [modalName]: true
    }));
  };

  const closeModal = (modalName) => {
    setModal(prevState => ({
      ...prevState,
      [modalName]: false
    }));
  };

  return { modal, openModal, closeModal };
}

export default useModalState;