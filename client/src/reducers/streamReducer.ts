import { ActionType, Action } from '../actions/actionTypes';
import { StreamDTO } from '../../types/rest';
import _ from 'lodash';

export interface State {
    [key: number]: StreamDTO;
}

export function streamReducer(state: State = {}, action: Action): State {
    switch(action.type) {
        case ActionType.FETCH_STREAM: {
            return {[action.payload.id]: action.payload};
        }
        case ActionType.EDIT_STREAM: {
            return {...state, [action.payload.id]: action.payload};
        }
        case ActionType.CREATE_STREAM: {
            return {...state, [action.payload.id]: action.payload};
        }
        case ActionType.DELETE_STREAM: {
            return _.omit(state, action.payload)
        }
        case ActionType.FETCH_STREAMS: {
            return {...state, ..._.mapKeys(action.payload, 'id')}
        }
        default: {
            return state;
        }
    }
}