import { useState, useEffect } from "react"
import zomato from "../api/zomato"


export default () => {
  const [errorMessage, setErrorMessage] = useState("")
  const [results, setResults] = useState([])

  const searchApi = async (searchTerm) => {
    try {
      const response = await zomato.get('/search', {
        params: {
          count: 50,
          q: searchTerm
        }
      });
      setResults(response.data.restaurants)

    } catch (error) {
      setErrorMessage("something went wrong")
    }
  }

  useEffect(() => { searchApi("india") }, [])

  return [searchApi, results, errorMessage]

}