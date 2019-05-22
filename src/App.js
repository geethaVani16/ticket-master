//const axios =require("axios") -node express level
import React from 'react';

import { BrowserRouter } from "react-router-dom"
import { connect } from 'react-redux'
// import Home from "./components/home"
// import About from "./components/about"
// import Courses from './components/courses'
// import Contact from'./components/contact'
// import UsersList from './components/UsersList'
// import UserShow from './components/UserShow';
// import Comment from './components/comments'
// import CommentShow from './components/CommentShow'

import {startRemoveTicket } from './components/redux/actions/tickets'
import TicketForm from './ticketForm'


class App extends React.Component {
  render(){
    console.log(this.props)
    return(
      <BrowserRouter>
            <div>
              <h2>Tickek Master</h2>
              <h4>listing tickets :{this.props.tickets.length}</h4>
              <ul>
                {
                  this.props.tickets.map(ticket => {
                    return <li key = {ticket.id}>{ticket.name}-----{ticket.department}--<button onClick={ () => {
                      this.props.dispatch(startRemoveTicket(ticket))
                    }}>remove</button></li>
                  })
                }
              </ul>
              <TicketForm/>
            </div>









        {/* <div>
            <ul> 
              <li> <Link to="/" >Home</Link></li>
              <li> <Link to="/about" >About</Link></li>
              <li><Link to="/courses" >Courses</Link></li>
              <li><Link to="/contact" >Contact</Link></li>
              <li><Link to='/users'>Listing Users</Link></li>
              <li><Link to='/comments'> Listing Comments</Link></li>
            </ul>

            <Route path="/" component={Home} exact={true}/>
            <Route path="/about" component={About} />
            <Route path="/courses" component={Courses} />
            <Route path="/contact" component={Contact} />
            <Route path='/users' component={UsersList} exact={true}/>
            <Route path='/users/:id' component={UserShow} exact={true}/>
            <Route path='/comments' component={Comment} exact={true}/>
            <Route path='/comments/:id' component={CommentShow} />

        </div> */}
      </BrowserRouter>
    )
  }

}
const mapStateToProps = (state) => {
    return {
      tickets:state.tickets
    }

}
export default connect(mapStateToProps)(App);






// //npm install --save axios
// import axios from 'axios'
// import TicketsTable from './TicketTable';
// import TicketForm from './ticketForm'

// class App extends React.Component {
//   constructor(){
//     console.log('constructor')
//     super()
//     this.state={
//       tickets:[] //all the which are in DB will come to this
//     }
//   }

//   //this is alife cycle method
//   //componentWillMount(){// pre render
//   //console.log('component will mount')
//   //}

//   //this is a life cycle method
//   componentDidMount(){//post render
//     //api get calls from here
//     axios.get('https://dct-api-data.herokuapp.com/tickets?api_key=67004dca39e80146')
//     .then(response => {
//       // console.log(response.data)
//       //update state needs to be done via the setState method
//       //must always return a new object
//       //when the state values updates,the render method is called
//       this.setState(() => ({ tickets:response.data})
//       )
//     })
//     .catch(err => {
//       console.log(err)
//     })
//   }
//   handleAddTicket= (ticketData) => {
//     this.setState((prevState) => ({
//       tickets:[...prevState.tickets,ticketData]
//     }))
//   }
//   render() {
//     console.log('render method')
//     return (
//       <div className='container'>
//         <div>
//         <h1>Ticket Master</h1>
//         {/* <h2>completed Tickets</h2> */}

//         <div className='row'>
//           <div className='col-md-8'>
//             <TicketsTable
//             tickets={this.state.tickets}
//             />
//           </div>
//           <div className='col-md-4'>
//             <TicketForm handleAddTicket={this.handleAddTicket}/>
//           </div>
//         </div>

        
        
        
//       </div>
//       </div>
//     );
//   }
// }

// export default App;
