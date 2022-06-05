import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../home/Home';
import Stat from '../statistics/Stat';
import { width_window, height_window } from '../Dimentions/Dim1';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
    return (
        <View style={styles.Main}>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="HOME" component={Home} />
                    <Stack.Screen name="Stat" component={Stat} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>

    )
}

export default MainNavigation

const styles = StyleSheet.create({
    Main: {
        width: width_window,
        height: height_window
    }
})