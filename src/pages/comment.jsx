import { connect } from "react-redux";

const CommentList = ({ comments }) => {
    return (
        <div>
            {comments.map((comment=>(
                <div key={comment.id}>
                    <p>{comment.comment}</p>
                    <button onClick={()=> removeComment(comment.id)}>삭제</button>
            ))}
        </div>
    )
}