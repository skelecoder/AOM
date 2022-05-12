import { createContext, useContext, useReducer } from 'react';
import { notificationReducer,interventionReducer } from './reducers';

const intervContext = createContext();

const Context = ({ children }) => {
    const [notificationState, notificationDispatch] = useReducer(notificationReducer, {
        notifications: 0,
    });

    return (
        <intervContext.Provider
            value={{ notificationState, notificationDispatch }}
        >
            {children}
        </intervContext.Provider>
    );
};

export default Context;

export const IntervState = () => {
    return useContext(intervContext);
};
