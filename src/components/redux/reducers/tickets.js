const ticketInitialState = []

const ticketsReducer = (state = ticketInitialState, action) => {
    switch(action.type) {
        case 'ADD_TICKET' :
            return [...state,action.payload]
        case 'SET_TICKETS':
            return [...action.payload]
        case 'REMOVE_TICKET' :
            return state.filter(ticket =>ticket.id!==action.payload)
        default :
            return [...state]
    }
}
export default ticketsReducer