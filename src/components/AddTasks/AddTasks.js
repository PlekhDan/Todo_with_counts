import React from "react";
import Counter from "../Counter/Counter";

const AddTasks = ({addCount}) => {
    return (
        <Counter title={'Новых задач'} count={addCount} />
    )
}

export default AddTasks;
