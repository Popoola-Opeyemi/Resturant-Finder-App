import React, { useState, useEffect } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import zomato from "../api/zomato"


const ResultShowScreen = (navigation) => {
  const id = navigation.route.params.id
  const [result, setResult] = useState(null)
  console.log(result)

  const getResult = async () => {
    try {
      const response = await zomato.get(`/restaurant?res_id=${id}`)
      setResult(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  // UseEffect to run the function once the component is mounted and ready 
  useState(() => { getResult() }, [])

  if (!result) {
    return null
  }

  return (
    <View>
      <Text>Result show Screen</Text>
      <Image style={style.Image} source={{ uri: result.featured_image }}></Image>
    </View>
  )
}

const style = StyleSheet.create({
  Image: {
    height: 200,
    width: 200
  }

})

export default ResultShowScreen