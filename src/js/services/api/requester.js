export default async (url, options = {}) => {
  const response = await fetch(url, options)

  if (response.ok) {
    return await response.json()
  }

  const error = new Error(response.statusText)
  error.response = response

  return Promise.reject(error)
}