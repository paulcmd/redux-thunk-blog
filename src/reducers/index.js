import { combineReducers } from 'redux';
import postsReducer from './postsReducer'

export default combineReducers({
posts: postsReducer
})




/*
-combineReducer code on github- line 174. If nextState is not the exact same array in memory 
as the previousState(ie we made a shadow copy and edited it) then hasChanged = true, else
it remains false
*/