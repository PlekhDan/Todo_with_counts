import * as actions from '../store/actionTypes';

export default function tasksAddCount(state = 0, action) {
    if (action.type === actions.COUNT_ADD_TASKS) {
        return state + 1;
    }
    return state;
}