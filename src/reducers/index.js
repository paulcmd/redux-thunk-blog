import { combineReducers } from 'redux';
import postREducer from './postsReducer'

export default combineReducers({
posts: postsReducer,
})