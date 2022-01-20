import React from "react";
import ToDo from '../ToDo/ToDo';

const ToDoList = ({toDoList, handleToggle, handleDelete}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <ToDo todo={todo} handleToggle={handleToggle} handleDelete={handleDelete} key={todo.id} />
                )
            })}
        </div>
    )
}

export default ToDoList;