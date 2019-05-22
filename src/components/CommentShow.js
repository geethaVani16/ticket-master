import React from "react"
import axios from "axios"
import  loadingGif from '../images/spinner.gif'
class CommentShow extends React.Component {
    constructor(){
        super()
        this.state={
            comments:{},
            isLoaded:false
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then(response => this.setState( () => ({comments:response.data, isLoaded:true} )))
    }
    render(){
        return(
            <div>
                { this.state.isLoaded ? (
                    <ul>
                        { this.state.comments.map (comment => {
                            return(
                                <li key={comment.id}>{comment.body}</li>   
                            )})
                        }
                    </ul>
                    ):<img src={loadingGif} alt='img'/>
                }
            </div>
        )
    }

    
}
export default CommentShow