import { createStore, combineReducers, applyMiddleware } from 'redux'
import ticketsReducer from '../reducers/tickets'
import thunk from 'redux-thunk'

const configureStore = () => {
    const store = createStore(combineReducers({
        tickets:ticketsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore