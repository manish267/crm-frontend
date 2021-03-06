import React from 'react';
import PropTypes from "prop-types";

import { Form,Button } from 'react-bootstrap';

export const UpdateTicket = ({msg,handleOnChange,handleOnSubmit}) => {
    return (
        <Form onSubmit={handleOnSubmit}>
            <Form.Label>Reply</Form.Label>
            <Form.Text>Please reply your message here or update the ticket </Form.Text> 
            <Form.Control as="textarea" value={msg} onChange={handleOnChange} row="5" name="detail"  />

            <div className="text-right mt-3 mb-4">
            <Button variant="info" type="submit">Reply</Button>
            </div>
        </Form>
    )
}

UpdateTicket.propTypes = {

  msg: PropTypes.string.isRequired,
  handleOnChange:PropTypes.func.isRequired

};

