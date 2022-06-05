import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Top = () => {
  return (
    <View style={styles.container}>
      <Text>Top</Text>
    </View>
  )
}

export default Top

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flexDirection:"row"
  }
})