import React from "react"
import axios from "axios"
import { Link } from "react-router-dom"

class UserList extends React.Component {
    constructor() {
        super()
        this.state={
            users:[]
        }
    }
    //api calls are made only in componentDidMount
    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/users")
        .then(response => this.setState( () => ({
            users:response.data
        })))
        .catch(err => {
            console.log(err)
        })

    }

    render(){
        return(
            <div>
                <h2>Listing Users</h2>
                <ul>
                    { this.state.users.map(user => {
                        return(
                            <li key={user.id}>
                                <Link to={`/users/${user.id}`}> {user.name} </Link>
                            </li>
                        )
                    }) }
                </ul>
            </div>
        )
    }
}

export default UserList