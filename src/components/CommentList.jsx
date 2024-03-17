import Comment from "./Comment"

const CommentList = ({comments}) => {
    console.log(comments)
    return comments?.map((comment,index) => (
        <div>
            <Comment key={index} data={comment}/>
       
            <div className="pl-5 border border-l-black ml-5">
                <CommentList key={index} comments={comment.replies}/>
            </div>
        </div>
    ))
      
}

export default CommentList