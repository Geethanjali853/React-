import {createStore} from "redux"
import {messageReducer} from './Msg/message.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'
let store = createStore (messageReducer, composeWithDevTools())

export {store}