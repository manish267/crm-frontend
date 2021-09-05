import React from 'react';
// import PropTypes from 'prop-types'
import {Form , Row,Col} from 'react-bootstrap';
import {filterSearchTicket} from './../../pages/ticket-list/ticketsAction';
import {useDispatch} from 'react-redux';

export const SearchForm = () => {
    const dispatch = useDispatch()

    const handleOnChange=(e)=>{
        const {value}=e.target;
        console.log(value);
        dispatch(filterSearchTicket(value));
    }
    
    return (
        <div>
            <Form>
                <Form.Group as={Row}>
                    <Form.Label column ms={2}>Search :{" "} </Form.Label>
                    <Col sm={9}>
                        <Form.Control name="searchStr" 
                        onChange={handleOnChange}
                        placeholder="Search ..." />

                    </Col>
                </Form.Group>
            </Form>
        </div>
    )
}


