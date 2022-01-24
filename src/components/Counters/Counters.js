import React from "react";
import * as S from './Counters.styled';
import DeletedTasks from "../DeletedTasks/DeletedTasks";
import AddTasks from "../AddTasks/AddTasks";
import DoneTasks from "../DoneTasks/DoneTasks";
import {useSelector} from "react-redux";

const Counters = () => {
    const {tasksDeleteCount, tasksAddCount, tasksDoneCount} = useSelector(state => state);
    return (
        <S.Wrap>
            <AddTasks addCount={tasksAddCount} />
            <DoneTasks doneCount={tasksDoneCount} />
            <DeletedTasks deleteCount={tasksDeleteCount} />
        </S.Wrap>
    )
}

export default Counters;
