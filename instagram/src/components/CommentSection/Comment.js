import React from "react";



const Comment = props => {
    return (<div className="comments">
            <p><strong>{props.comment.username}</strong> {props.comment.text}</p>
            </div>
        
    )

}

export default Comment;