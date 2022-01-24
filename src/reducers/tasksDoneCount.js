import * as actions from '../store/actionTypes';
// import store from "../store/store";

// const {tasks} = store.getState()
// console.log(store.getState().tasks, '<--- tasks')

// let tasksDone = tasks.reduce((count, task) => {
//     if (task['complete']) count += 1
//     return count
// }, 0)
// console.log(tasksDone, '<--- tasksDone')

export default function tasksDoneCount(state = 0, action) {
    if (action.type === actions.COUNT_DONE_TASKS) {
        return state + 1;
    }
    return state;
}
