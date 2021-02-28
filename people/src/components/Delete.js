import React from "react";
import Button from "react-bootstrap/Button";
import { Modal } from "react-bootstrap";

const DeleteModal = ({ personId, handleClose, deletePerson, ...rest }) => (
  <Modal {...rest} size="large">
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-lg">Confirm Delete</Modal.Title>
    </Modal.Header>
    <Modal.Body>This action will remove {personId} from Database. Are you sure?</Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={handleClose}>
        Cancel
      </Button>
      <Button variant="danger" onClick={deletePerson}>
        Delete
      </Button>
    </Modal.Footer>
  </Modal>
);

export default DeleteModal;
