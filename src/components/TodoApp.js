import React,{useState} from 'react';
import TodoItem from "../components/TodoItem";
import TodoForm from "../components/TodoForm";

function TodoApp() {
  const [todoList, setTodoList] = useState([]);

  const uuid = () => {
    return Math.random();
  };

  const addNewTodo = (input) => {
     const tempTodoList = todoList;
     setTodoList([...tempTodoList, {text:input}]);
  }

  const removeFromList =(text) => {
    let tempTodoList = todoList;
    tempTodoList = tempTodoList.filter(item => item.text !== text);
    setTodoList(tempTodoList);
  }
  return (
    <div className="app">
      <div className="todo-list">
        <div>
          {todoList.map(item => (<TodoItem key={uuid()} item={item} removeFromList={removeFromList} />))}
        </div>
        <TodoForm addNewToDo={addNewTodo}/>
      </div>
    </div>
  );
}

export default TodoApp;
