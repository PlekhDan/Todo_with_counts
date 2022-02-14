import * as actions from '../store/actionTypes';

export default function tasksDoneCount(state = 0, action) {
    if (action.type === actions.COUNT_DONE_TASKS) {
        return action.payload.tasks.reduce((acc, task) => task['complete'] ? acc += 1 : acc, 0);
    }
    return state;
}
