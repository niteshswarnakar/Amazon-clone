import React , {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value = {useReducer(reducer,initialState)}>
        {children} 
    </StateContext.Provider>
);

//This is how we use it inside of a compnonent
export const useStateValue = () => useContext(StateContext);



