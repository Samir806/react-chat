import { applyMiddleware, combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import usersReducer from './users-reducer'
import authReducer from './auth-reducer'
import thunkMiddleware from 'redux-thunk'

let reducer = combineReducers({
  postsPage: profileReducer,
  messagesPage: dialogReducer,
  usersPage: usersReducer,
  auth: authReducer
})


let store = createStore(reducer, applyMiddleware(thunkMiddleware))


export default store