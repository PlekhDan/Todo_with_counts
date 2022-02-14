import React from "react";
import Task from '../Task/Task';
import {useSelector} from "react-redux";

const TaskList = ({handleToggle, handleDelete, handleToggleCount}) => {
    const {tasks} = useSelector(state => state);
    return (
        <div>
            {tasks.map(task => {
                return (
                    <Task
                        task={task}
                        handleToggle={handleToggle}
                        handleDelete={handleDelete}
                        handleToggleCount={handleToggleCount}
                        key={task.id}
                    />
                )
            })}
        </div>
    )
}

export default TaskList;