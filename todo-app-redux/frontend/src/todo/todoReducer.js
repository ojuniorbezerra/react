const INITIAL_STATE = {
        description:'',
        list: []
    }

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGE':
            return { ...state, description: action.payload }
        case 'TODO_SEACHED':
            return { ...state, list: action.payload.data } 
        case 'TODO_ADDED':
            return { ...state, description: '' } 
        default:
            return state

    }
}