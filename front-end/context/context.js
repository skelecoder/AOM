import { createContext, useContext, useEffect, useReducer } from 'react';
import { interventionReducer } from './reducers';
import { v4 as uuidv4 } from 'uuid';
import { useQuery } from 'react-query';

const getInterventions = () => axios.get('http://localhost:1337/api/interventions').then(({ data }) => data);


const notification = createContext();

const Context = ({ children }) => {
  const [notificationState, notificationDispatch] = useReducer(interventionReducer, {
    notifications: 0,
  });

  return (
    <notification.Provider value={{ notificationState, notificationDispatch }}>
      {children}
    </notification.Provider>
  );
};

export default Context;

export const IntervState = () => {
  return useContext(notification)
} 
