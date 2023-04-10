import React, { useRef, useState} from "react";
import { validateEmail } from "../constants/utils";
import { Trans } from "react-i18next";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import "../../static/css/custom.css";

function MailUsForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [emailSubject, setEmailSubject] = useState("");
  const [emailText, setEmailText] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const form = useRef();

  const getIsFormValid = () => {
    return firstName &&
           lastName && 
           emailText && 
           validateEmail(email);
  };

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setEmailText("");
    setEmailSubject("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "KLINIKA ZDOROWIA I URODU",
        "template_lxi9sbc",
        form.current,
        "N-Np3zCtvQkU6D30z"
      )
      .then(
        (result) => {
          setAlertMessage("You Have send E-mail!");
          setShowModal(true);        
        },
        (error) => {
          setAlertMessage("Something went wrong!");
          setShowModal(true);
        },             
      );
    clearForm();
  };

  const closeModal = () => {
    setAlertMessage("");
    setShowModal(false);
  };

  return (
    <>
      <Form onSubmit={handleSubmit} ref={form}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" className="position-relative">
            <Form.Label>
              <Trans i18nKey="firstName">Imię</Trans>
            </Form.Label>
            <Form.Control
              type="text"
              name="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group as={Col} md="6" className="position-relative">
            <Form.Label>
              <Trans i18nKey="lastName">Nazwisko</Trans>
            </Form.Label>
            <Form.Control
              type="text"
              name="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </Form.Group>
        </Row>
        {/* End first name, last name */}

        {/* Email, subject */}
        <Row className="mb-3">
          <Form.Group as={Col} md="6">
            <Form.Label>
              <Trans i18nKey="email">Adres e-mail:</Trans>
            </Form.Label>
            <InputGroup hasValidation>
              <Form.Control
                type="email"
                placeholder="YourEmail"
                aria-describedby="inputGroupPrepend"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group as={Col} md="6" className="position-relative">
            <Form.Label>
              <Trans i18nKey="Subject">Subject</Trans>
            </Form.Label>
            <Form.Control
              type="text"
              placeholder="Email subject"
              name="emailSubject"
              value={emailSubject}
              onChange={(e) => setEmailSubject(e.target.value)}
            />
          </Form.Group>
        </Row>
        {/* End email, subject */}

        {/* Email textfield */}

        <Row className="mb-3">
          <Form.Group as={Col} md="12" className="position-relative">
            <Form.Label>
              <Trans i18nKey="emailText">Treść</Trans>
            </Form.Label>
            <Form.Control
              type="textarea"
              placeholder="Email text"
              name="emailText"
              value={emailText}
              style={{ height: "100px" }}
              onChange={(e) => setEmailText(e.target.value)}
            />
          </Form.Group>
        </Row>
        {/* End Email textfield */}

        <Row className="mb-3 mt-5">
          <Button
            className="submitButton"
            type="submit"
            disabled={!getIsFormValid()}
          >
            <Trans i18nKey="submit">Wyślij</Trans>
          </Button>
        </Row>
      </Form>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>
            {alertMessage.includes("success")
              ? "Error!"
              : "Success!"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alertMessage.includes("success") ? "alert-success" : "alert-fail"}{alertMessage}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            <Trans i18nKey="close-button">Close</Trans>
          </Button>
        </Modal.Footer>
      </Modal>
     
    </>
  );
}

export default MailUsForm;
