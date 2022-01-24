import * as actions from '../store/actionTypes';
import {data} from '../data';

export default function tasks(state = data, action) {
    switch(action.type) {
        case actions.TASK_TOGGLE:
            return state.map(task => {
                return task.id === action.payload.id ? {...task, complete: !task.complete} : {...task}
            });

        case actions.TASK_DELETE:
            return state.filter(task => task.id !== action.payload.id);

        case actions.TASK_ADD:
            return [...state, {
                id: state[state.length - 1]['id'] + 1,
                title: action.payload.title,
                complete: false,
            }];

        default: return state;
    }
}