import React, { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { PageBreadcrumb } from "../../components/breadcrumb/Breadcrumb.comp";
import { SearchForm } from "../../components/search-form/SearchForm.comp";
import {TicketTable} from './../../components/ticket-table/TicketTable.comp';
// import tickets from '../../assets/data/dummy-tickets.json';
import { Link } from "react-router-dom";
import {useDispatch } from "react-redux";
import {fetchAllTickets} from './ticketsAction'


export const TicketLists = () => {



  const dispatch=useDispatch();
  // const [str, setStr] = useState("");

  useEffect(() => {
    dispatch(fetchAllTickets())
    }, [dispatch]);
  
  // const handleOnChange = (e) => {
  //     const {value}=e.target;
  //     if(value===""){
  //         setDispTicket(tickets);
  //     }
  //     setStr(value);
  //     searchTicket(str);
      
  //   };
    
    // const searchTicket=sttr=>{
        
    //     const displayTickets= tickets.filter(row=>row.subject.toLowerCase().includes(sttr.toLowerCase()));
        
    //     console.log(displayTickets)
    //     setDispTicket(displayTickets)
    // }
    

  return (
    <Container>
      <Row>
        <Col>
          <PageBreadcrumb page="Ticket Lists" />
        </Col>
      </Row>

      <Row className="mt-4"> 
        <Col>
        <Link to="add-ticket">

          <Button variant="info">Add New Ticket</Button>
        </Link>
        </Col>

        <Col className="text-right">
          <SearchForm/>
        </Col>
      </Row>
      <hr />
      <Row>
          <Col>
              <TicketTable />

          </Col>
      </Row>
    </Container>
  );
};
