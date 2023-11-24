
const initialState = {
    name: '',
    age: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INPUT_USER_DATA': 
            return {
                ...state, 
                name: action.payload.name,
                age: action.payload.age,
            };
        default:
            return state;
    }
}

export default userReducer;