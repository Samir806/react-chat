import { combineReducers, createStore } from 'redux'
import profileReducer from './profile-reducer'
import dialogReducer from './dialog-reducer'
import usersReducer from './users-reducer'

let reducer = combineReducers({
  postsPage: profileReducer,
  messagesPage: dialogReducer,
  usersPage: usersReducer,
})


let store = createStore(reducer)


export default store