import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeModal } from "Store/actions/layout_actions";
import AboutModal from "./AboutModal";
import { StyledModal } from "./StyledModal";

export default function ModalSystem() {
  const dispatch = useDispatch();
  const store = useSelector((state) => state.layout_reducer);

  const renderModal = (modal) => {
    if (modal.type !== "") {
      switch (modal.type) {
        case "about_modal":
          return <AboutModal closeModalAction={modalClose} />;
        default:
      }
    }
  };

  const modalClose = () => dispatch(closeModal(store.modal.type));

  return (
    <StyledModal
      show={!!store.modal.isOpen}
      onHide={modalClose}
      animation={true}
      centered
      size="lg"
      className={store.modal.type}
      closeModal={modalClose}
    >
      {renderModal(store.modal)}
    </StyledModal>
  );
}
