import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Pokemon from '../../features/pokemons/Detail'
import { selectStatus, selectPokemon } from '../../features/pokemons/pokemonsSlice'

import { ACTION_TYPE_FETCH } from './saga'

export default () => {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const pokemon = useSelector(selectPokemon)

  const fetchPokemonById = (params) => async () => {
    dispatch({
      type: ACTION_TYPE_FETCH,
      params
    })
  }

  return (
    <div>
      <button onClick={fetchPokemonById({ id: 1, timer: 3000 })}>Pokemon bulbasaur</button>
      <button onClick={fetchPokemonById({ id: 2, timer: 500 })}>Pokemon ivysaur</button>

      {status === 'pending' &&
        <p>Loading...</p>
      }

      {pokemon &&
        <Pokemon thumbnail={pokemon.sprites.front_default} name={pokemon.name} />
      }
    </div>
  )
}