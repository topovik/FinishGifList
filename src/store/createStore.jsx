import { createStore, applyMiddleware } from 'redux'
import reducer from '../reducers/reducer'
import thunk from 'redux-thunk'

const initial = {gifs: []}

const store = createStore(reducer, initial, applyMiddleware(thunk))

export { store }