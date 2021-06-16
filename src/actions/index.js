import _ from 'lodash'
import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonplaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    await dispatch(fetchPosts())
    const userIds = _.uniq(_.map(getState().posts, 'userId'))
    console.log('userIds', userIds)

    userIds.forEach((id) => dispatch(fetchUser(id)))
}

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`)
    //console.log('name', response.data.name)
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
}

/*
we are using the inner function, so we can do async, await.
we use dispatch to return the action object(type and payload), we do not return
an object directly from the function.
fetchPosts is returning a function. the function is calling/using dispatch, and dispatch
 is returning the action object.

 lodash is imported as _ by convention

 _fetchUser - the underscore indicates that its a private function, and other engineers should only call
 it if they know what they are doing.

 _.fetchUser is the function that has been memoized. Each user is fetched only once. memoization says if the 
 value returned by 2 or more functions is the same, then there is no need to use network resources to re-fetch data.
 It thus returns the same value/object that was returned earlier.



 - fetchPostsAndUsers will fetch all posts, and use userIds to fetch users. await on fetchPosts
 makes sure we wait until we have all posts before we move on to the next step.
 - the second arg that redux thunk calls our inner functions with is getState, after dispatch. that getState 
 function gives us access to all the data inside of redux.

 -lodash has its own version of map function that has nice features in it. its written as _.map
 _.map(getState().posts, 'userId') pulls out the userId property out of the post object. we will thus
 have an array of all userIds. _.uniq takes out all unique ids and stores them in another array

 we do not need await of fetchUser because we do not have follow-up logic after that. no more tasks. 
*/

/*
Memoized fetchUser:
export const fetchUser = (id) => (dispatch) => {
    _fetchUser(id, dispatch)
}

const _fetchUser = _.memoize(async(id, dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`)
    //console.log('name', response.data.name)
    dispatch({
        type: 'FETCH_USER',
        payload: response.data
    })
})

*/
