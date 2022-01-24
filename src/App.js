import './App.css';
import React, {useState, useEffect} from 'react';
import TaskList from './components/TaskList/TaskList';
// import data from './data.js';
import TaskForm from "./components/TaskForm/TaskForm";
import * as S from './App.styled';
import Counters from "./components/Counters/Counters";
import {addTask, addTasksCount, deleteCount, deleteTask, doneTasksCount, toggleTask} from "./store/actions";
import {useDispatch, useSelector} from "react-redux";
import tasksDeleteCount from "./reducers/tasksDeleteCount";
import tasksAddCount from "./reducers/tasksAddCount";
import tasksDoneCount from "./reducers/tasksDoneCount";
import {logDOM} from "@testing-library/react";

function App() {
    const {tasks} = useSelector(state => state)
    const dispatch = useDispatch();

    // console.log(tasks)
    // const [toDoList, setToDoList] = useState([]);
    // const [toDoList, setToDoList] = useState(data);
    // const [deletedCount, setDeleteCount] = useState(0);
    // const [newCount, setNewCount] = useState(0);
    // const [doneCount, setDoneCount] = useState(initialDoneCount);

    // function initialDoneCount() {
    //     return toDoList.reduce((sum, current) => {
    //         if (current['complete']) sum += 1
    //         return sum
    //     }, 0)
    // }

    // useEffect( () => {
    //     let fetchData = async () => {
    //         let response = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(setToDoList)
    //         return response;
    //     }
    //
    //     fetchData();
    // }, [])

    // useEffect(() => {
    //     setDoneCount(initialDoneCount)
    // })

    // const handleToggle = (id) => {
    //     let mapped = toDoList.map(task => {
    //         return task.id === id ? {...task, complete: !task.complete} : {...task};
    //     });
    //     setToDoList(mapped);
    //
    //     // dispatch(toggleTask(id))
    // };

    // const handleDelete = (id) => {
    //     let filtered = toDoList.filter(task => task.id !== id);
    //     setToDoList(filtered);
    //     setDeleteCount(deletedCount + 1);
    // }

    // const addTask = (userInput) => {
    //     setToDoList([
    //         ...toDoList,
    //         {
    //             "id": toDoList[toDoList.length - 1]['id'] + 1,
    //             "title": userInput,
    //             "complete": false
    //         }
    //     ]);
    //     setNewCount(newCount + 1);
    // }

    // useEffect(() => {
    //     const initialDoneTasks = () => {
    //         const result = tasks.reduce((sum, current) => current['complete'] ? sum + 1 : sum , 0)
    //         console.log(result)
    //         return result
    //     }
    //     initialDoneTasks();
    // }, [handleToggle])

    const handleDelete = id => {
        dispatch(deleteTask(id))
        dispatch(deleteCount())
    };

    const handleAddTask = title => {
        dispatch(addTask(title))
        dispatch(addTasksCount())
    };

    const handleToggle = id => {
        dispatch(toggleTask(id))
        dispatch(doneTasksCount())
    }

    return (
        <S.AppWrap>
            <S.Title>To Do List</S.Title>
            <Counters />
            <TaskList handleDelete={handleDelete} handleToggle={handleToggle} />
            <TaskForm addTask={handleAddTask} />
        </S.AppWrap>
    );
}

export default App;
