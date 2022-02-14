import './App.css';
import React, {useState, useEffect} from 'react';
import TaskList from './components/TaskList/TaskList';
// import data from './data.js';
import TaskForm from "./components/TaskForm/TaskForm";
import * as S from './App.styled';
import Counters from "./components/Counters/Counters";
import {
    addTask,
    addTasksCount,
    deleteCount,
    deleteTask,
    doneTasksCount,
    fetchInitialTasks,
    toggleTask
} from "./store/actions";
import {useDispatch} from "react-redux";
import store from "./store/store";

function App() {
    const dispatch = useDispatch();

    // useEffect( () => {
    //     let fetchData = async () => {
    //         let response = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(setToDoList)
    //         return response;
    //     }
    //
    //     fetchData();
    // }, [])

    // useEffect( () => {
    //     const fetchData = async () => {
    //         const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
    //         return response;
    //     }
    //     fetchData();
    //     dispatch(fetchInitialTasks)
    // }, [])

    // const fetchTasks = () => {
    //     return fetch('https://jsonplaceholder.typicode.com/todos').then(response => {
    //         console.log(response.json())
    //         return response.json()
    //     })
    // }

    // const fetchTasks = () => async dispatch => {}

    useEffect(() => {
        function fetchTasks() {
            return async function fetchTasksThunk(dispatch) {
                const response = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
                dispatch(fetchInitialTasks(response))
            }
        }
        dispatch(fetchTasks())
    }, [])


    useEffect(() => {
        // dispatch(fetchInitialTasks)
        dispatch(doneTasksCount(store.getState().tasks))
    }, [])

    const handleDelete = id => {
        dispatch(deleteTask(id))
        dispatch(deleteCount())
        dispatch(doneTasksCount(store.getState().tasks))
    };

    const handleAddTask = title => {
        dispatch(addTask(title))
        dispatch(addTasksCount())
    };

    const handleToggle = (id) => {
        dispatch(toggleTask(id))
    };

    const handleToggleCount = () => {
        dispatch(doneTasksCount(store.getState().tasks))
    };

    return (
        <S.AppWrap>
            <S.Title>To Do List</S.Title>
            <Counters />
            <TaskList handleDelete={handleDelete} handleToggle={handleToggle} handleToggleCount={handleToggleCount} />
            <TaskForm addTask={handleAddTask} />
        </S.AppWrap>
    );
}

export default App;
