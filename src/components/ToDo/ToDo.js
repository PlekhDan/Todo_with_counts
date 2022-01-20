import React from "react";
import * as S from './ToDo.styled';

const ToDo = ({todo, handleToggle, handleDelete}) => {
    return (
        <S.TableRow>
            <S.TaskTitle>
                {todo.title}
            </S.TaskTitle>
            <S.TaskStatus complete={todo.complete} onClick={() => handleToggle(todo.id)}>
                {todo.complete ? 'done' : 'progress'}
            </S.TaskStatus>
            <S.Button onClick={() => handleDelete(todo.id)}>delete</S.Button>
        </S.TableRow>
    )
};

export default ToDo;
