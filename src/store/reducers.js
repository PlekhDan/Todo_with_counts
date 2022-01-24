import {combineReducers} from "redux";
import tasks from '../reducers/tasks';
import tasksDeleteCount from '../reducers/tasksDeleteCount';
import tasksAddCount from '../reducers/tasksAddCount';
import tasksDoneCount from '../reducers/tasksDoneCount';

export const reducers = combineReducers({
    tasks:
        tasks,
        tasksDeleteCount,
        tasksAddCount,
        tasksDoneCount
})
