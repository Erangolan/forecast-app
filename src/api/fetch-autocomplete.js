import consts from '../consts'

export const fetchAutoComplete = async (text) => {
  try {
    const res = await fetch(`${consts.SERVICE_URL}/api/autocomplete?text=${text}`)

    const { cities = {}, message = {} } = await res.json()
    if (res.status !== 200) {
      throw new Error(message)
    }

    return {
      cities,
      status: res.status,
      error: '',
    }
  } catch(error) {
    return {
      cities: [],
      status: 500,
      error,
    }
  }
}
