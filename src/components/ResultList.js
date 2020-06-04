import React, { useState } from "react"
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native"
import ResultDetails from "./ResultDetails"
import { useNavigation } from '@react-navigation/native';

const ResultList = ({ title, results }) => {
  const navigation = useNavigation();

  if (!results.length) {
    return null
  }
  return (
    <View style={style.container}>
      <Text style={style.title}>{title}</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.restaurant.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate("Home-Details", { id: item.restaurant.id })}>
              <ResultDetails result={item} />
            </TouchableOpacity>
          )
        }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5

  },
  container: {
    marginBottom: 15
  }
})

export default ResultList