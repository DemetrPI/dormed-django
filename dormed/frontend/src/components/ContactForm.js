import React from "react";
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

export default function ContactForm() {
  return (
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
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
        <Form noValidate onSubmit={handleSubmit}>
          {/* First name, last name */}
          <Row className="mb-3">
            <Form.Group
              as={Col}
              md="6"
              controlId="validationFormik101"
              className="position-relative"
            >
              <Form.Label>First name</Form.Label>
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
              <Form.Label>Last name</Form.Label>
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
              <Form.Label>Your Email</Form.Label>
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
              <Form.Label>Email Text</Form.Label>
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
          <Button className = "customBtn" type="submit">Submit form</Button>
          </Row>
        </Form>
      )}
    </Formik>
  );
}
