import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "../../static/css/custom.css" 
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import * as yup from 'yup';


const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().required(),
  emailSubject: yup.string().required(),
  emailText: yup.string().required()
  
});


 function ContactForm() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault(); // prevents the page from reloading when you hit “Send”

    emailjs.sendForm('KLINIKA ZDOROWIA I URODU', 'template_lxi9sbc', form.current, 'N-Np3zCtvQkU6D30z')
    .then((result) => {
        alert("You Have send E-mail!")
        .window.location.reload();    
        
    }, (error) => {
        alert("Something went wrong!")
    });
};

  return (
    <Formik
      validationSchema={schema}
      initialValues={{
        firstName: '',
        lastName: '',
        email:'',
        emailSubject: '',
        emailText: ''     
      }}
    >
      {({
        handleSubmit,
        handleChange,
        values,
        touched,
        errors,
        isValid
      }) => (
        <Form noValidate ref={form} onSubmit={sendEmail}>
          {/* First name, last name */}
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>Imię</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isValid={touched.firstName && !errors.firstName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik102"
              className="position-relative"
            >
              <Form.Label>Nazwisko</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isValid={touched.lastName && !errors.lastName}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Row>
          {/* End first name, last name */}

          {/* Email, subject */}

          <Row className="mb-3">
            <Form.Group as={Col} md="6" controlId="validationFormikEmail">
              <Form.Label>Adres e-mail:</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="email"
                  placeholder="Your email"
                  aria-describedby="inputGroupPrepend"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isInvalid={!!errors.email}
                  isValid={touched.email && !errors.email}
                />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="validationFormikSubject" className="position-relative">
              <Form.Label>Subject</Form.Label>
              <Form.Control
                type="text"
                placeholder="Email subject"
                name="emailSubject"
                value={values.emailSubject}
                onChange={handleChange}
                isInvalid={!!errors.emailSubject}
                isValid={touched.emailSubject && !errors.emailSubject}
              />

                <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          {/* End email, subject */}

          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="12"
              controlId="validationFormik104"
              className="position-relative"
            >
              <Form.Label>Treść</Form.Label>
              <Form.Control
                type="textarea"
                placeholder="Email text"
                name="emailText"
                value={values.emailText}
                style={{height: "100px"}}
                onChange={handleChange}
                isInvalid={!!errors.emailText}
                isValid={touched.emailText && !errors.emailText}
              />
              <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
            </Form.Group>
            </Row>
            <Row className="mb-3 mt-5" >          
          <Button className = "submitButton" type="submit">Wyślij</Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
}

export default ContactForm