import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import { fetchPokemonById } from '../../services/api'

export const fetchPokemon = createAsyncThunk('pokemons/fetchPokemon', async ({ id, timer, abortable }, { signal }) => {
  const options = { timer }

  if (abortable) {
    options.signal = signal
  }

  const pokemon = await fetchPokemonById(id, options)

  return pokemon
})

export const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState: {
    status: 'idle',
    detail: null,
    error: null
  },
  reducers: {
  },
  extraReducers: {
    [fetchPokemon.pending]: (state) => {
      state.status = 'pending'
      state.detail = null
      state.error = null
    },
    [fetchPokemon.fulfilled]: (state, action) => {
      state.status = 'succeeded'
      state.detail = action.payload
    },
    [fetchPokemon.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error?.message
    }
  }
})

export const selectStatus = state => state.pokemons.status

export const selectPokemon = state => state.pokemons.detail

export default pokemonsSlice.reducer