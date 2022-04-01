
export const fetchForecast = async (locationName) => {
  try {
    const res = await fetch(`http://localhost:3000/api/fetch-forecast?locationName=${locationName}`)

    const { status } = res
    if (status !== 200) {
      const { message } = await res.json()
      throw new Error(message)
    }

    const { data } = await res.json()
    console.log('content in fetchForecast: ', data)

    return {
      wether: data,
      status,
      error: '',
    }
  } catch(err) {
    return {
      cities: [],
      status: 500,
      error: err,
    }
  }
}
