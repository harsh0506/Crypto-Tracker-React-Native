import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Fav = () => {
  return (
    <View style={styles.container}>
      <Text>favourite</Text>
    </View>
  )
}

export default Fav

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row"
  }
})