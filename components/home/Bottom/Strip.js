import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Strip({name,logoUrl,currentPrice}) {
  //console.log(name)
  return (
    <View style={styles.maincontainer}>
      <Image source={{uri:logoUrl}} style={{height:40,width:40}} />
      <Text>{name}</Text>
      <Text>{currentPrice}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  maincontainer:{
    flexDirection:"row"
  }
})