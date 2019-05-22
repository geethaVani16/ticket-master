import React from 'react'
import { connect } from 'react-redux'
import {  startAddTicket } from './components/redux/actions/tickets';

class TicketForm extends React.Component {
    constructor(){
        console.log('constructor')
        super()
        this.state={
            name:'',
            department:'',
            priority:'',
            message:''
        }
    }
    handleNameChange=(e) => {
        const name=e.target.value
        this.setState(()=>({ name }))
        //console.log(name)
    }
    handleDepartmentChange=(e) => {
        const department=e.target.value
        this.setState(()=>({ department }))
        console.log(department)
    }
    handlePriorityChange=(e) => {
        const priority=e.target.value
        this.setState(()=>({ priority }))
    }
    handleMessageChange=(e) => {
        const message=e.target.value
        this.setState(()=>({ message }))
    }
    handleSubmit=(e) => {
        e.preventDefault()
        const formData={
            name:this.state.name,
            department:this.state.department,
            priority:this.state.priority,
            message:this.state.message

        }
        console.log(formData)
            // 1st approach
        // axios.post("https://dct-api-data.herokuapp.com/tickets?api_key=67004dca39e80146",formData)
        // .then(response => {
        //     console.log(response.data)
        //     this.setState(()=>({
        //         name:'',
        //         department:'',
        //         priority:'',
        //         message:''
        //     }))
        //     // dispatch to the redux store
        //     this.props.dispatch(addTicket(response.data))
        // })
        // .catch(err => {
        //     console.log(err)
        // })

        this.props.dispatch(startAddTicket(formData))
        this.setState(() => ({
                    name:'',
                    department:'',
                    priority:'',
                    message:''
                }))
    }

    render(){
        // console.log(this.props)
        return(
                <div>
                    <h2>Add Ticket</h2>
                    <form onSubmit={this.handleSubmit} className='form-group'>
                        <div>
                            <label htmlFor="text"> name : </label>
                            <input type='text'value={this.state.name} className='form-control' placeholder='name' onChange={this.handleNameChange}/>
                        </div>
                         
                        <label htmlFor='department'>department : </label>
                        <select value={this.state.department} className='form-control'  onChange={this.handleDepartmentChange}>
                            <option>select</option>
                            <option value="techical">Techical</option>
                            <option value="sales">Sales</option>
                            <option value="Hr">Hr</option>
                        </select>
                        
                        <label htmlFor='priority'> priority: </label>
                        <select value={this.state.priority} className='form-control' onChange={this.handlePriorityChange}>
                            <option>select</option>
                            <option value="High">High</option>
                            <option value="Medium">Medium</option>
                            <option value="Low">Low</option>
                        </select>
                        
                        <label htmlFor='message'>message: </label>
                            <textarea className='form-control' value={this.state.message} onChange={this.handleMessageChange}></textarea><br/>
                        

                        <input className='btn btn-info' type="submit"/>
                    </form>
                </div>
        )
    }
}

export default connect()(TicketForm)