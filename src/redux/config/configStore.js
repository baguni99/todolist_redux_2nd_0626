import { createStore } from "redux";
import { combineReducers } from "redux";
import todos from "../modules/todos";
import commentReducer from '../modules/comment'

// store를 만들어 내기
// 중앙데이터관리소
const rootReducer = combineReducers({
  todos: todos,
  comments:commentReducer,
});

const store = createStore(rootReducer);

export default store;
