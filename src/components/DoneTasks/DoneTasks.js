import React from "react";
import Counter from "../Counter/Counter";

const DoneTasks = ({doneCount}) => {
    return (
        <Counter title={'Завершенных задач'} count={doneCount} />
    )
}

export default DoneTasks;
