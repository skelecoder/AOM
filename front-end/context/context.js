import { createContext, useContext, useEffect, useReducer } from 'react';
import { interventionReducer } from './reducers';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from 'react-query';

const strapiHost = process.env.STRAPI_HOST;
const strapiPort = process.env.STRAPI_PORT;

const getInterventions = () =>
    axios.get('http://' + strapiHost + ':' + strapiPort + '/api/interventions').then(({ data }) => data);

const notification = createContext();

const Context = ({ children }) => {
    const [notificationState, notificationDispatch] = useReducer(interventionReducer, {
        notifications: 0,
    });

    return (
        <notification.Provider value={{ notificationState, notificationDispatch }}>{children}</notification.Provider>
    );
};

export default Context;

export const IntervState = () => {
    return useContext(notification);
};
