import requester from './requester'
import sleep from '../../utils/sleep'

const API_URL = 'https://pokeapi.co/api/v2'

export const fetchPokemonById = (id, { timer, ...options } = {}) => {
  try {
    return requester(`${API_URL}/pokemon/${id}`, options).then(async response => {
      if (timer) {
        await sleep(timer)
      }

      return response
    })
  } catch (err) {
    throw new Error('Ooops, can not fetch pokemon')
  }
}