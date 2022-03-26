import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalComp = (props) => {
  const { show, setShow, title, message } = props;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{message}</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Ok!
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComp;
