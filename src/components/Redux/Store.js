import {createStore} from 'redux'
import {UserReducer} from './User/UserReducer'

export const store = createStore(UserReducer);