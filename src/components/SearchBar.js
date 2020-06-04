import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Feather } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={style.backgroundStyle}>
      <Feather style={style.IconStyle} name="search"></Feather>
      <TextInput
        style={style.InputStyle}
        value={term}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
        placeholder="Search" />
    </View>
  )
}

const style = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    marginTop: 10,
    flexDirection: "row",
    borderRadius: 5,
    marginHorizontal: 15,
    marginBottom: 10
  },
  IconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  },
  InputStyle: {
    flex: 1,
    fontSize: 18
  }

})

export default SearchBar
