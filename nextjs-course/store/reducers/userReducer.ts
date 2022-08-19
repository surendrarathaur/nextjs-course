const initialState = {
    loading: false,
    profile: {}
}
export default function userReducer(state = initialState, action: any) {
    switch (action.type) {
        case 'LOGIN_USER':
            return {
                ...state,
                loading: false
            }
        case 'REGISTER_USER':
            return {
                ...state,
                loading: false
            }
        case 'UPDATE_USER':
            return {
                ...state,
                loading: false
            }
        case 'DELETE_USER':
            return {
                ...state,
                loading: false
            }
        default:
            return state
    }
}