import { fetchTicketLoading,fetchTicketSuccess,fetchTicketFail,searchTickets } from "./ticketsSlice"
import {getAllTickets} from './../../api/ticketApi'

export const fetchAllTickets=()=>async (dispatch)=>{
    dispatch(fetchTicketLoading());
    // fetch data from api
    try {
        const result=await getAllTickets();
        console.log(result);

        dispatch(fetchTicketSuccess(result.data.result));
        
    } catch (error) {
        dispatch(fetchTicketFail(error.message));
    }

}

export const filterSearchTicket=str=>dispatch=>{
    dispatch(searchTickets(str));
}