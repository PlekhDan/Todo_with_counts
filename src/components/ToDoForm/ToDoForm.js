import React, {useState} from "react";
import * as S from './ToDoForm.styled';

// сделать, чтобы нельзя было добавлять пустую строку

const ToDoForm = ({ addTask}) => {
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput !== '' && userInput !== ' ') addTask(userInput);
        setUserInput('');
    }

    return (
        <S.Form onSubmit={handleSubmit}>
            <S.FormLabel>
                Новая задача:
            </S.FormLabel>
            <S.FormInput type="text" name="name" value={userInput} onChange={handleChange} />
            <S.FormSubmit type="submit" value="Добавить"/>
        </S.Form>
    )
}

export default ToDoForm;
