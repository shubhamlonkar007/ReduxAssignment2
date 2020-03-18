const initialState = {
    counter: 0,
    result: []
}



const reducer = (state = initialState, action) => {
    /* if (action.type === "Increment") {
        const newState = { ...state, counter: state.counter + 1 };
        return newState;

    } */

    switch (action.type) {
        case "IncrementOne":
            const newState = { ...state, counter: state.counter + 1 };
            return newState;
            break;
        case "DecrementOne":
            const changeState = { ...state, counter: state.counter - 1 };
            return changeState;
            break;
        case "IncrementFive":
            const updatedState = {...state, counter: state.counter + action.value}
            return updatedState;
            break;
        default: return state;
            break;

    }




}

export default reducer;