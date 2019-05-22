import React from "react"
import TicketRow from './TicketRow'
//function component rules 
//1. name is pascal casing
//2. should return jsx
//3. will accepts arguments via props

function TicketsTable(props){
  console.log('child-table')
  console.log('props',props)
  const {tickets}=props
    return(
      <div>
        <h2>Listing Tickets- { tickets.length }</h2>
        <table border='2' className='table table-striped'>
          <thead className='table-success'>
            <tr>
              <th> Code </th>
              <th> Name </th>
              <th> Department </th>
              <th> priority </th>
              <th> Message </th>
              <th> status</th>
            </tr>
          </thead>
          <tbody>
            { tickets.map(ticket => {
              return (
                <TicketRow 
                key={ticket.ticket_code}
                // ticket_code={ticket.ticket_code}
                // name={ticket.name}
                // department={ticket.department}
                // priority={ticket.priority}
                // status={ticket.status}
                // message={ticket.message}
                {...ticket} //es6 use spread operator
                />
              )
            })}
          </tbody>
        </table>
      </div>
        
    )
}

export default TicketsTable;