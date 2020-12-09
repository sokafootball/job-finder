export const buildUrl = (description, location) => {
  const url =
    'https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json'
  const params = Object.entries({
    description: description,
    location: location,
  })
    .map(([k, v]) => (v ? `${k}=${encodeURI(v)}` : ''))
    .filter((v) => !!v)
    .join('&')
  return [url, params].join('?')
}
