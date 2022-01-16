import { useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import { sendEmail } from "../../utils/email/emailUtils";
import { Movie } from "../types/interfaces";

interface ModalEmailSenderProps {
  movie: Movie;
  show: boolean;
  handleClose: () => void;
}

export default function ModalEmailSender({
  movie,
  show,
  handleClose,
}: ModalEmailSenderProps) {
  const [email, setEmail] = useState("");
  const [processing, setProcessing] = useState(false);

  const shareByEmail = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setProcessing(true);
    sendEmail(movie, email)
      .then((result) => handleClose())
      .catch((e) => {
        setProcessing(false);
        alert("Ocurrio un error");
      });
  };

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Share Movie Info: {movie.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={shareByEmail}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </Form.Group>

            {processing ? (
              <Spinner animation="border" />
            ) : (
              <Button variant="primary" type="submit">
                Submit
              </Button>
            )}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
