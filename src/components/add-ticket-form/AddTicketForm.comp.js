import React from "react";
import { Jumbotron, Form, Button, Row, Col } from "react-bootstrap";
import PropTypes from "prop-types";


import "./add-ticket-form.style.css";

export const AddTicketForm = ({ handleOnSubmit, handleOnChange, frmDt,frmDataError }) => {
  return (
    <Jumbotron className="add-new-ticket bg-light mt-3">
      <h1 className="text-info text-center">Add New Ticket</h1>
      <hr />
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Subject
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              name="subject"
              placeholder="Subject"
              onChange={handleOnChange}
              value={frmDt.subject}
              required
            />
            <Form.Text className="text-danger">{frmDataError.subject && "Subject is required or should be greater than 3 characters" }</Form.Text>
          </Col>
        </Form.Group>

        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Issue Found
          </Form.Label>
          <Col sm={9}>
            <Form.Control
              type="date"
              name="issueDate"
              onChange={handleOnChange}
              value={frmDt.issueDate}
              required
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Form.Label>Details</Form.Label>
          <Form.Control
            as="textarea"
            name="detail"
            rows="5"
            onChange={handleOnChange}
            value={frmDt.detail}
            required
          ></Form.Control>
        </Form.Group>

        <Button type="sumbit" variant="info" block>
          Create Ticket
        </Button>
      </Form>
    </Jumbotron>
  );
};

AddTicketForm.propTypes = {
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired,
  frmDataError: PropTypes.object.isRequired,
};
