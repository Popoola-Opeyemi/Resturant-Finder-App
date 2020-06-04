import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"


const ResultDetails = ({ result }) => {
  result = result.restaurant
  return (
    <View style={style.container}>
      <Image style={style.image} source={{ uri: result.thumb }} />
      <Text style={style.name}>{result.name}</Text>
      <Text> {result.user_rating.aggregate_rating}, {result.all_reviews_count} Reviews</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 4,
    marginBottom: 5

  },
  name: {
    fontWeight: "bold",
  }
})

export default ResultDetails