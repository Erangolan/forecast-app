
export const fetchAutoComplete = async (text) => {
  try {
    const res = await fetch(`http://localhost:3000/api/autocomplete?text=${text}`)

    const { cities = {}, error = {}, message = {} } = await res.json()
    if (res.status !== 200) {
      // const { message } = await res.json()
      console.log(error)
      throw new Error(message)
    }

    // const { cities } = await res.json()
    console.log('content in fetch-autocomplete is: ', cities)
    // console.log('status: ', status)

    return {
      cities,
      status: res.status,
      error: '',
    }
  } catch(error) {
    console.log(typeof error)
    return {
      cities: [],
      status: 500,
      error,
    }
  }
}
