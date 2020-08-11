import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import pokemonsReducer from './features/pokemons/pokemonsSlice'
import saga from './apps/DemoWithSaga/saga'

export const createStore = () => {
  const store = configureStore({
    reducer: {
      pokemons: pokemonsReducer
    }
  })

  return store
}

export const createStoreWithSaga = () => {
  const sagaMiddleware = createSagaMiddleware()

  const store = configureStore({
    reducer: {
      pokemons: pokemonsReducer
    },
    middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
  })

  sagaMiddleware.run(saga)

  return store
}