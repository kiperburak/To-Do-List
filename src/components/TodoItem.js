import React,{useState} from "react";

function TodoItem({item,removeFromList}) {
    const [completed, setCompleted] = useState(false);

    const completeClicked = () => {
        setCompleted(true);
    }

    const removeItem = () => {
        removeFromList(item.text);
    }

    return(
        <div className="singleTodoItem">
            <div>
                <span className = {completed ? "completedTodo" : ""}>
                    {item.text}
                </span>
                <button className = "markCompleteTodoItem" onClick={completeClicked}>
                    Complete
                </button>
                <button className = "removeTodoItem" onClick={removeItem}>
                    X
                </button>
            </div>
        </div>
    );
}

export default TodoItem;