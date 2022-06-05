import { StyleSheet, Text, View } from 'react-native'
import { width_window , height_window } from '../Dimentions/Dim1'
import React from 'react'

const Lower = ({alt,alh,market_cap_change_percentage_24h,price_change_percentage_24h}) => {
  return (
    <View style={styles.Main}>
      <Text>{alt}</Text>
      <Text>{alh}</Text>
      <Text>{price_change_percentage_24h} </Text>
      <Text>{market_cap_change_percentage_24h} </Text>
    </View>
  )
}

export default Lower

const styles = StyleSheet.create({
    Main:{
        //flex:1,
        width:width_window,
        height:height_window/3,
    }
})