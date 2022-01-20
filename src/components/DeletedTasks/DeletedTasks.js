import React from "react";
import Counter from "../Counter/Counter";

const DeletedTasks = ({deleteCount}) => {
    return (
        <Counter title={'Задач удалено'} count={deleteCount} />
    )
}

export default DeletedTasks;
