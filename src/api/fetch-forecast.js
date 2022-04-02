import consts from '../consts'

export const fetchForecast = async (locationName) => {
  try {
    const res = await fetch(`${consts.SERVICE_URL}/api/fetch-forecast?locationName=${locationName}`)

    const { data = {}, message = {} } = await res.json()
    if (res.status !== 200) {
      throw new Error(message)
    }

    return {
      wether: data,
      status: res.status,
      error: '',
    }
  } catch(err) {
    return {
      wether: [],
      status: 500,
      error: err,
    }
  }
}
