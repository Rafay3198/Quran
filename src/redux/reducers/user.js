const INITIAL_STATE = {
    user: null,
    theme: "dark",
    QuranFontColor: "white",
    QuranBackgroundColor:"blue",
    token: null
}

const currentUser = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case "SET_USER":
            return {
                ...state,
                user: action.payload.user,
                loggedIn: true
            }
        case "LOG_OUT":
            return {
                ...state,
                user: {},
                loggedIn: false
            }
        case "SET_TOKEN":
            return{
                ...state,
                token: action.payload.token,
            }
        default:
            return state
    }
}

export default currentUser;