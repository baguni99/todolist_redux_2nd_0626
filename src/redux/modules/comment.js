//액션 정의
//댓글 작성
const addComment = (postId, comment )=>{
    return { 
        type:'ADD_COMMENT',
        payload: {
            postId,
            comment,
        },
    };
};

//댓글 삭제
const removeComment = (commentId)=>{
    return {
        type : 'REMOVE_COMMENT',
        payload:{
            commentId,
        },
    };
};

//리듀서 생성
//초기 상태 정의
const initialState = {
    comments:[],
};

const commentReducer=(state=initialState,action)=>{
    switch (action.type){
        case 'ADD_COMMENT' :
            const {postId, comment} = action.payload;
            return {
                ...state,
                comments: [
                    ...state.comments,
                    {
                        id:Math.random().toString(),
                        postId,
                        comment,
                    }
                ]
            }
            case 'REMOVE_COMMENT': //삭제 
                const {commentId }= action.payload;
                return {
                    ...state,
                    comments:state.comments.filter((comment)= comment.id !== commentId) //comment배열에서 commentId와 일치하지 않는 댓글만 필터링
                }
            default:
                return state; //현재 상태 그대로 반환
    }
}
