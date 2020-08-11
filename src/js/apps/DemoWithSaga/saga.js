import { call, takeLatest, put } from 'redux-saga/effects'

import { fetchPokemonById } from '../../services/api'

export const ACTION_TYPE_FETCH = 'pokemons/fetch'
export const ACTION_TYPE_PENDING = 'pokemons/fetchPokemon/pending'
export const ACTION_TYPE_FULFILLED = 'pokemons/fetchPokemon/fulfilled'
export const ACTION_TYPE_REJECTED = 'pokemons/fetchPokemon/rejected'

export function* fetchPokemon({ params: { id, timer } }) {
  yield put({ type: ACTION_TYPE_PENDING })

  try {
    const pokemon = yield call(fetchPokemonById, id, { timer })

    yield put({ type: ACTION_TYPE_FULFILLED, payload: pokemon })
  } catch (err) {
    yield put({ type: ACTION_TYPE_REJECTED, error: err })
  }
}

export default function* rootSaga() {
  yield takeLatest(ACTION_TYPE_FETCH, fetchPokemon)
}