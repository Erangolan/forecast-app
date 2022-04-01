
export const fetchAutoComplete = async (text) => {
  try {
    const res = await fetch(`http://localhost:3000/api/autocomplete?text=${text}`)

    const { status } = res
    if (status !== 200) {
      const { message } = await res.json()
      throw new Error(message)
    }

    const { cities } = await res.json()
    console.log('content in fetch-autocomplete is: ', cities)

    return {
      cities,
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
