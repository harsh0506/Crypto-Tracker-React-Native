import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getMarketData } from "../data/ApiData"
import Top from './Top/Top'
import Bottom from './Bottom/Bottom'
import { width_window , height_window } from '../Dimentions/Dim1'

const Home = ({navigation}) => {
    const [data, setData] = useState(null)

    useEffect(() => {
        async function getD() {
            try {
                const info = await getMarketData()
                setData(info)
            } catch (error) {
                console.log(error)
            }
        }
        getD()
    }, [])

    if (data === null) {
        return (
            <View>
                <Text>Loading.....</Text>
            </View>
        )
    }
    return (
        <View style={styles.container}>
           <Top data={data} navigation={navigation}/>
           <Bottom data={data}/>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
container:{
    //backgroundColor:'black',

}
})