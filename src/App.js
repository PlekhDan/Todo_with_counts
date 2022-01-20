import './App.css';
import React, {useState, useEffect} from 'react';
import ToDoList from './components/ToDoList/ToDoList';
// import data from './data.json';
import ToDoForm from "./components/ToDoForm/ToDoForm";
import * as S from './App.styled';
import Counters from "./components/Counters/Counters";

function App() {
    const [toDoList, setToDoList] = useState([]);
    // const [toDoList, setToDoList] = useState(data);
    const [deletedCount, setDeleteCount] = useState(0);
    const [newCount, setNewCount] = useState(0);
    const [doneCount, setDoneCount] = useState(initialDoneCount);

    function initialDoneCount() {
        return toDoList.reduce((sum, current) => {
            if (current['complete']) sum += 1
            return sum
        }, 0)
    }

    useEffect( () => {
        let fetchData = async () => {
            let response = await fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json()).then(setToDoList)
            return response;
        }

        fetchData();
    }, [])

    useEffect(() => setDoneCount(initialDoneCount))

    const handleToggle = (id) => {
        let mapped = toDoList.map(task => {
            return task.id === id ? {...task, complete: !task.complete} : {...task};
        });
        setToDoList(mapped);
    };

    const handleDelete = (id) => {
        let filtered = toDoList.filter(task => task.id !== id);
        setToDoList(filtered);
        setDeleteCount(deletedCount + 1);
    }

    const addTask = (userInput) => {
        setToDoList([
            ...toDoList,
            {
                "id": toDoList[toDoList.length - 1]['id'] + 1,
                "title": userInput,
                "complete": false
            }
        ]);
        setNewCount(newCount + 1);
    }

    return (
        <S.AppWrap>
            <S.Title>To Do List</S.Title>
            <Counters deleteCount={deletedCount} newCount={newCount} doneCount={doneCount} />
            <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleDelete={handleDelete} />
            <ToDoForm addTask={addTask} />
        </S.AppWrap>
    );
}

export default App;
