import React from 'react';
import {Table} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const TicketTable = (props) => {
    // if(!props.tickets.length) 
    return (
        <Table striped bordered hover >
            <thead>
                <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Status</th>
                    <th>Opened Date</th>
                </tr>
            </thead>
            <tbody>

            {props.tickets.length ? props.tickets.map(row=>

                <tr key={row.id}>
                    <td>{row.id}</td>
                    <td>
                    <Link to={`/ticket/${row.id}`}>
                    {row.subject}</Link></td>
                    <td>{row.status}</td>
                    <td>{row.addedAt}</td>
                    
                </tr>
                
                ) : 
                <tr>
                    <td colSpan="4" className="text-center">No ticket show</td>
                </tr> 
                }
              
            </tbody>
        </Table>
    )
}

TicketTable.propTypes={
    tickets:PropTypes.array.isRequired,
}