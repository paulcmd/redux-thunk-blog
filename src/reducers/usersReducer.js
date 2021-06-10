export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload]
        default:
            return state
    }
}


// action.payload is adding each individual user 
// into state. Each user related to the post