import axios from "axios";

// add 
export const addTicket = (ticket) => {
    return {
        type: 'ADD_TICKET',
        payload:ticket
    }
}

export const startAddTicket = (formData) => {
    return (dispatch) => {
        axios.post('http://dct-api-data.herokuapp.com/tickets?api_key=67004dca39e80146',formData)
        .then(response => {
            dispatch(addTicket(response.data))
        })
        .catch(err => {
            console.log(err)
        })
    }
}

export const setTickets = (tickets) => {
    return {
        type:'SET_TICKETS',
        payload:tickets
    }
}

export const startGetTickets = () => {
    return (dispatch) => {
        axios.get('http://dct-api-data.herokuapp.com/tickets?api_key=67004dca39e80146')
        .then(response => {
            dispatch(setTickets(response.data))
        })
    }
}

export const removeTicket = (id) => {
    return {
        type : 'REMOVE_TICKET',
        payload:id
    }
}

export const startRemoveTicket = (ticket) => {
    return (dispatch) => {
        axios.delete(`http://dct-api-data.herokuapp.com/tickets/${ticket.ticket_code}?api_key=67004dca39e80146`)
        .then(response => {
            console.log(ticket.id)
            dispatch(removeTicket(ticket.id))
        })
    }
}





