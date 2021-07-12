export const setUser = (user) => {
    return {
        type: "SET_USER",
        payload: {user}
    }
}

export const logOut = () => {
    return {
        type: "LOG_OUT"
    }
}

export const saveToken = (token) => {
    return {
        type: "SET_TOKEN",
        payload: {token}
    }
}

export const setTheme = (theme) => {
    return {
        type: "SET_THEME",
        payload: {theme}
    }
}

