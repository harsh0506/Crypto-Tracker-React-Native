import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Upper from './Upper'
import Lower from './Lower'
import Graph from './Graph'
import { width_window,height_window } from '../Dimentions/Dim1'

const Stat = ({route , navigation}) => {
  const data = route.params 
  return (
    <View style={styles.MainContainer}>
      <Upper 
      name={data.name}
      id={data.id}
      price={data.current_price}
      logo={data.image}
      />
      <Graph name={data.id}/>
      <Lower 
      alt={data.alt}
      alh={data.alh}
      price_change_percentage_24h={data.price_change_percentage_24h}
      market_cap_change_percentage_24h={data.market_cap_change_percentage_24h}
      />
    </View>
  )
}

export default Stat

const styles = StyleSheet.create({
  mainContainer: {
    height: height_window ,
    width: width_window,
  }
})