import React from "react"
import axios from "axios"
import {Link} from "react-router-dom"

class Comment extends React.Component {
    constructor(){
        super()
        this.state={
            comments:[]
        }
    }
    componentDidMount(){
       // const id=this.props.match.params.id
        axios.get("http://jsonplaceholder.typicode.com/posts")
        .then(response => this.setState( () => ({
            comments:response.data
        })))
    }
    render(){
        return(
            <div>
                <h2>Listing comments</h2>
                <ul>
                    { this.state.comments.map(comment => {
                        return(
                            <li key={comment.id}>
                            <Link to={`/comments/${comment.id}`}>{comment.title}</Link>
                            </li>
                        )
                    })}
                </ul>

            </div>
        )
    }
}
export default Comment