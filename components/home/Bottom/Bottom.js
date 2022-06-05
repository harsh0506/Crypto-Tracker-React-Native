import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import Top from './Top'
import Strip from './Strip'
import { height_window,width_window } from '../../Dimentions/Dim1'

const Bottom = ({data}) => {
  return (
    <View style={styles.mainContainer}>
      <Top/>
      <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          horizontal={false}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Strip
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              sparkline_in_7d={item.sparkline_in_7d}
              ath={item.ath}
              atl={item.atl}
            />
          )}
        />
    </View>
  )
}

export default Bottom

const styles = StyleSheet.create({
  mainContainer: {
    height: height_window ,
    width: width_window 
  }
})