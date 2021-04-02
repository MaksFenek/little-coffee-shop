import {applyMiddleware, combineReducers} from 'redux'
import {createStore} from 'redux'

import createSagaMiddleware from 'redux-saga'
import {getAllProductsAsyncAction} from 'redux/actions/productsAction'
import userReducer from 'redux/reducers/userReducer'
import {watchGetAllProductsAsync} from 'redux/sagas/productsSaga'
import {RootReducerInterface} from 'redux/types'
import productsReducer from './productsReducer'

const rootReducer = combineReducers<RootReducerInterface>({
  user: userReducer,
  products: productsReducer,
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(watchGetAllProductsAsync)

store.dispatch(getAllProductsAsyncAction())

export default store
