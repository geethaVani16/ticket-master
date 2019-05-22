import React from "react"
import axios from "axios"
import image from '../images/spinner.gif'
class UserShow extends React.Component{
    constructor(){
        super()
        this.state={
            user:{},
            isLoaded:false
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => this.setState( () => ({ user:response.data, isLoaded:true })))
        .catch(err => { console.log(err) })
    }
    render(){
        return(
            <div>
                <h2> info of {this.props.match.params.id} user</h2>
                { this.state.isLoaded ? (
                    <div>
                        <label>Name-</label>{this.state.user.name}<br/>
                        <label>Email-</label>{this.state.user.email}<br/>
                        <label>City-</label>{this.state.user.address.city}<br/>
                    </div>
                ): <img src={image} alt='img'/>}
            </div>
        )
    }
}

export default UserShow