import { StyleSheet, Text, View, FlatList, Dimensions } from 'react-native'
import React from 'react'
import Card from './Card'
import Fav from './Fav'
import { width_window, height_window } from '../../Dimentions/Dim1'

const Top = ({ data, navigation }) => {
  return (
    <View style={styles.mainContainer}>
      <Fav />
      <View
        style={{ width: Dimensions.get("window") / 2, height: 300 }}
      >
        <FlatList
          keyExtractor={(item) => item.id}
          data={data}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Card
              name={item.name}
              symbol={item.symbol}
              currentPrice={item.current_price}
              priceChangePercentage7d={item.price_change_percentage_7d_in_currency}
              logoUrl={item.image}
              sparkline_in_7d={item.sparkline_in_7d}
              ath={item.ath}
              atl={item.atl}
              onPress={() => {
                console.log(item)
                navigation.navigate("Stat",item)
              }}
            />
          )}
        />

      </View>

    </View>
  )
}

export default Top

const styles = StyleSheet.create({
  mainContainer: {
    height: height_window / 3,
    width: width_window
  }
})