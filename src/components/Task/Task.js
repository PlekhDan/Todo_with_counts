import React from "react";
import * as S from './Task.styled';

const Task = ({task, handleToggle, handleDelete}) => {
    return (
        <S.TableRow>
            <S.TaskTitle>
                {task.title}
            </S.TaskTitle>
            <S.TaskStatus complete={task.complete} onClick={() => handleToggle(task.id)}>
                {task.complete ? 'done' : 'progress'}
            </S.TaskStatus>
            <S.Button onClick={() => handleDelete(task.id)}>delete</S.Button>
        </S.TableRow>
    )
};

export default Task;
