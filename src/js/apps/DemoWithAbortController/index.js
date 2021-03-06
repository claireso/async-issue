import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Pokemon from '../../features/pokemons/Detail'
import { selectStatus, selectPokemon, fetchPokemon } from '../../features/pokemons/pokemonsSlice'

export default () => {
  const dispatch = useDispatch()
  const status = useSelector(selectStatus)
  const pokemon = useSelector(selectPokemon)
  const currentPromise = useRef()

  const fetchPokemonById = (params) => () => {
    currentPromise.current?.abort()
    requestAnimationFrame(() => { // :(
      currentPromise.current = dispatch(fetchPokemon({ ...params, abortable: true }))
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