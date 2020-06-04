import React, { useState } from "react"
import SearchBar from "../components/SearchBar";
import { View, Text } from "react-native"


const SearchScreen = () => {
  const [term, setTerm] = useState("")

  return (
    <View>
      <SearchBar
        term={term}
        onTermSubmit={() => console.log("term submit")}
        onTermChange={(newterm) => setTerm(newterm)} />
      <Text>Search Screen {term}</Text>
    </View>
  )
}

export default SearchScreen