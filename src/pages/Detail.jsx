import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const todos = useSelector((state) => state.todos);
  const comments = useSelector((state)=>state.comments);


  const todo = todos.filter((todo) => todo.id === id)[0];

  return (
    <div>
      {todo.id}
      <br />
      {todo.title}
      <br />
      {todo.body}
      <br />
      {todo.isDone.toString()}
      <br />
      <button onClick={() => navigate("/")}>이전 화면으로</button>

      <div>
        <h3>댓글</h3>
        <form>
          <input name="이름" value={name} onChange={{(e)=>{
            setName=(e.target.value)
          }}}/>
          <input name="내용"/>
          <button type=""
        </form>
      </div>
      <div>
        [comments.map((comment)=>{
          return <div key={(comment?.id)}></div>
        })]
      </div>
    </div>
  );
};

export default Detail;
