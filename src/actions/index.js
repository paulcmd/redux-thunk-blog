import _ from 'lodash'
import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonplaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = async (id) => (dispatch) => {
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

 _.fetchUser is the function that has been memoized. Each user is fetched only once.
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
