import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import WagmiChart from './WagmiChart'

const Card = ({name,symbol,currentPrice,priceChangePercentage7d,logoUrl,sparkline_in_7d,ath,atl,onPress}) => {
  const data = sparkline_in_7d.price
  return (
    <TouchableOpacity onPress={onPress}>
    <View style={{padding:10}}>
      <Text>{name}</Text>
      <Image source={{uri:logoUrl}} style={{height:30,width:30}} />
      <WagmiChart data={data}/>
      <Text>{currentPrice}</Text>
      <Text>{priceChangePercentage7d}</Text>
    </View>
    </TouchableOpacity>
  )
}

export default Card

const styles = StyleSheet.create({})