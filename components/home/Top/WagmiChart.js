import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { LineChart } from 'react-native-wagmi-charts';

const WagmiChart = ({data}) => {
  //console.log(data)
  return (
    <View>
      
        <View style={{ alignItems: "center", justifyContent: "center" }} >
            <LineChart.Provider data={data} >
                <LineChart width={50} height={50}>
                    <LineChart.Path >
                        <LineChart.HorizontalLine at={{ index: 0 }} />
                    </LineChart.Path>
                    <LineChart.CursorCrosshair />
                </LineChart>
                <LineChart.PriceText />
                <LineChart.DatetimeText />
            </LineChart.Provider>
        </View>
    
    </View>
  )
}

export default WagmiChart

const styles = StyleSheet.create({
  graph: {
      backgroundColor: 'black',
      borderRadius: 4,
      color: 'white',
      fontSize: 18,
      padding: 4,
     // height: windowHeight,
     // width: windowWidth,
  }
})