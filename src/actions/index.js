import jsonplaceholder from '../apis/jsonPlaceholder'

export const fetchPosts = () => async (dispatch) => {
    const response = await jsonplaceholder.get('/posts')

    dispatch({
        type: 'FETCH_POSTS',
        payload: response.data
    })
}

export const fetchUser = (id) => async (dispatch) => {
    const response = await jsonplaceholder.get(`/users/${id}`)

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
*/
