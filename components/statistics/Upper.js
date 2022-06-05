import { StyleSheet, Text, View , Image } from 'react-native'
import React from 'react'
import { width_window , height_window } from '../Dimentions/Dim1'


const Upper = ({name,id,price,logo}) => {
  return (
    <View style={styles.Main}>
      <Text>{name}</Text>
      <Text>{id}</Text>
      <Image source={{uri:logo}} style={{height:100,width:100}}/>
      <Text >{price}</Text>
    </View>
  )
}

export default Upper

const styles = StyleSheet.create({
    Main:{
        width:width_window,
        height:height_window/3,
    }
})