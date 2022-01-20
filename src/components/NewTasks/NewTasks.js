import React from "react";
import Counter from "../Counter/Counter";

const NewTasks = ({newCount}) => {
    return (
        <Counter title={'Новых задач'} count={newCount} />
    )
}

export default NewTasks;
