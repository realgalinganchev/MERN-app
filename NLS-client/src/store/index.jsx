import React from 'react'
import { ActionTypes, loginSuccess, loginFailure } from './actions'
import userService from '.'
const StoreContext = React.createContext({});
const initialState = {
    user: null,
    error: null,
};


function init(state) {
    return initialState ;
}

const asynchActionMap = {
    [ActionTypes.Login]:
        ({ user }) => userService.login(user)
            .then(user => loginSuccess({ user }))
            .catch(error => loginFailure({ error }))
}

const actionMap = {
    [ActionTypes.LoginSuccess]: (state, { user }) => ({ user, ...state }),
    [ActionTypes.LogoutSuccess]: ({ user, ...state }) => state,
    [ActionTypes.LoginFailure]: (state, { error }) => ({ ...state, error }),

}


const storeReducer = (state, action) => {
    const handler = actionMap[actionMap.type];
    return handler ? handler(state, action.payload) : state;
}

const Store = ({ children }) => {


    const [state, dispatch] = React.useReducer(storeReducer, initialState, init);

    const store = React.useMemo(() => ({
        state,
        dispatch: (action) => {
            const asyncActionHandler = asynchActionMap[action.type];
            if (asyncActionHandler) {
                asyncActionHandler(action.payload).then(dispatch)
            }
            dispatch(action);
        }

    }), [state, dispatch])
    return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
}

export default Store;