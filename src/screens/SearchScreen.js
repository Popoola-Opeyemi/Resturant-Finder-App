import React, { useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"

import useResults from '../hooks/useResults'
import SearchBar from "../components/SearchBar";
import ResultList from "../components/ResultList";

import { filterResultByPrice } from "../utils/price_filter"


const SearchScreen = () => {
  const [term, setTerm] = useState("")
  const [searchApi, results, errorMessage] = useResults()

  return (
    <>
      <SearchBar
        term={term}
        onTermSubmit={() => searchApi(term)}
        onTermChange={setTerm} />

      <ScrollView>
        <ResultList results={filterResultByPrice(results, 1)} title="Cost Effective" />
        <ResultList results={filterResultByPrice(results, 2)} title="Bit Pricier" />
        <ResultList results={filterResultByPrice(results, 3)} title="Big Spender" />
        <ResultList results={filterResultByPrice(results, 4)} title="Premium Spender" />

      </ScrollView>
    </>
  )
}

const style = StyleSheet.create({})

export default SearchScreen