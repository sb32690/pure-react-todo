import {todosRef} from '../firebase'
const FETCH_TODOS = 'FETCH_TODOS';
//addTodos
export const addToDo = newToDo => async dispatch => {
  todosRef.push().set(newToDo);
};
//remove todo
export const completeToDo = completeToDo => async dispatch => {
  todosRef.child(completeToDo).remove();
};
//listen to changes in the lis from database
export const fetchToDos = () => async dispatch => {
  todosRef.on("value", snapshot => {
    dispatch({
      type: FETCH_TODOS,
      payload: snapshot.val()
    });
  });
};