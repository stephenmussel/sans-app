import businessDetails from "./business.reducer";

const businessDetails = (state = [], action) => {
    if(action.type === 'SET_DETAILS') {
        return action.payload;
    }
    return state;
}

export default businessDetails;