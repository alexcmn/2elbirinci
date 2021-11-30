import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";

export default function AboutModal({ closeModalAction }) {
  const store = useSelector((state) => state.layout_reducer);

  return (
    <>
      <Modal.Header className="theme-bg">
        {store?.modal?.addProps?.title}
      </Modal.Header>
      <Modal.Body className="modal-body-edit">
        <div
          dangerouslySetInnerHTML={{ __html: store?.modal?.addProps?.desc }}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button
          className="shadow-3"
          variant="danger"
          onClick={closeModalAction}
        >
          Close
        </Button>
      </Modal.Footer>
    </>
  );
}
