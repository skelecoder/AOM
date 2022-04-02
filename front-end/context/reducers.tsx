export const interventionReducer = (state,action) =>{
    switch (action.type) {
        case 'NEW_NOTIFICATION':           
           return {notifications: state.notifications + action.value}
        case 'RESET_NOTIFICATION_COUNT':
            return {notification:0}
        default:
           return state
    }
}