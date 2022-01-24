import React from "react";
import Task from '../Task/Task';
import {useSelector} from "react-redux";

const TaskList = ({handleToggle, handleDelete}) => {
    const {tasks} = useSelector(state => state);
    return (
        <div>
            {tasks.map(task => {
                return (
                    <Task
                        task={task}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                        key={task.id}
                    />
                )
            })}
        </div>
    )
}

export default TaskList;