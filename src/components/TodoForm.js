import React from "react";

function TodoForm({ addNewToDo}) {
    const handleSumbit = (e) => {
        e.preventDefault();

        addNewToDo(e.target.input.value);
    };

    return (
        <form onSubmit={handleSumbit}>
            <input type="text" className="itemInput" name="input" />
            <button className="addItemButton">Add Item</button>
        </form>
    );
}

 export default TodoForm;