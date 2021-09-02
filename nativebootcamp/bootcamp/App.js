import React, { useState } from 'react'
import { View, Text, Platform, StatusBar, SafeAreaView, TextInput, Button, StyleSheet, } from 'react-native'

const App = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0)

  const Increment = () => {
    setCount(prevState => prevState + 1 )
  }
  const Decrement = () => {
    setCount(prevState => prevState - 1)
  }
  return (
    <SafeAreaView style={styles.paddingTop}>
      <Text>hi {count}</Text>
      <TextInput style={styles.text_input} />
      <Button title="arttır" onPress={Increment}></Button>
      <Button title="azalt" onPress={Decrement}></Button>
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight:0,
  },
  text_input: {
    borderWidth: 1,
  }
})
