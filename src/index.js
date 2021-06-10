import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import App from './components/App'
import reducers from './reducers'

const store = createStore(reducers, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
)

/*
Redux thunk allows you to return a function i.e async await function, from an action creator.
redux can only return a normal object from an action creator(check actions file)
*/