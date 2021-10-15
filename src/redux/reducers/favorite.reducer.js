const favorite = (state = [], action) => {
    switch (action.type) {
        case 'ADD_FAVORITE':
            return [...state, action.payload]
        case 'SET_FAVORITE':
            return action.payload;
        default:
            return state;
    }
}

export default favorite;