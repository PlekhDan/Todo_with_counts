import React from "react";
import * as S from './Counters.styled';
import DeletedTasks from "../DeletedTasks/DeletedTasks";
import NewTasks from "../NewTasks/NewTasks";
import DoneTasks from "../DoneTasks/DoneTasks";

const Counters = ({deleteCount, newCount, doneCount}) => {
    return (
        <S.Wrap>
            <NewTasks newCount={newCount} />
            <DoneTasks doneCount={doneCount} />
            <DeletedTasks deleteCount={deleteCount} />
        </S.Wrap>
    )
}

export default Counters;
