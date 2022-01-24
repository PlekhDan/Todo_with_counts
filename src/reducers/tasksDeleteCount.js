import * as actions from '../store/actionTypes';

export default function tasksDeleteCount(state = 0, action) {
    if (action.type === actions.COUNT_DELETED_TASKS) {
        return state + 1;
    }
    return state;
}
