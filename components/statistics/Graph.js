import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { width_window, height_window } from '../Dimentions/Dim1'
import Chartt from './React-Chart-kit'

let value = []
let Price = []
const Graph = ({ name }) => {
  let [datE, setDatE] = useState(null)
  let [PricE, setPrice] = useState(null)
  const url = `https://api.coingecko.com/api/v3/coins/${name}/market_chart?vs_currency=inr&days=30`
  useEffect(() => {
    async function getD() {
      let d = await fetch(url)
      let res = await d.json()
      let mydata = res.prices
      for (let i = 0; i <= 700; i++) {
        value.push(mydata[i][1])
        Price.push(mydata[i][0])
      }
      setDatE(value)
      setPrice(Price)
    }
    getD()
  }, [])
  console.log(value)
  if (datE === null) {
    return (
      <View>
        <Text>dnlknleejejiejfiwjepjf</Text>
      </View>
    )
  }
  return (
    <View style={styles.Main}>
      <Chartt datE={datE} PricE={PricE}/> 
     
    </View>
  )
}

export default Graph

const styles = StyleSheet.create({
  Main: {
    // flex:1,
    width: width_window,
    height: height_window / 3,
  }
})