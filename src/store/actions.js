import * as actions from './actionTypes';

export const toggleTask = id => ({
    type: actions.TASK_TOGGLE,
    payload: {id},
});

export const deleteTask = id => ({
    type: actions.TASK_DELETE,
    payload: {id},
});

export const addTask = title => ({
    type: actions.TASK_ADD,
    payload: {title},
});

export const deleteCount = () => ({
    type: actions.COUNT_DELETED_TASKS,
});

export const addTasksCount = () => ({
    type: actions.COUNT_ADD_TASKS,
});

export const doneTasksCount = () => ({
    type: actions.COUNT_DONE_TASKS,
    // payload: {id},
})
