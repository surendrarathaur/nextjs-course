import { REGISTER_USER, LOGIN_USER, UPDATE_USER, DELETE_USER } from '../actions/type'
const initialState = {
    loading: false,
    profile: {}
}
export default function userReducer(state = [], action: any) {
    switch (action.type) {
        case LOGIN_USER:
            return {
                ...state
            }
        case REGISTER_USER:
            return {
                ...state,
                payload:action.payload
            }
        case UPDATE_USER:
            return {
                ...state,
                payload:action.payload
            }
        case DELETE_USER:
            return {
                ...state,
                payload:action.payload
            }
        default:
            return state
    }
}