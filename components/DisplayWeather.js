// this is a simple component to display the weather
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// this component is defined as a function
const DisplayWeather = (props) => {
    // component must return JSX
    return (
        // view container will act as a component
        <View>
            {/* text component will display the temperature */}
            <Text>72˚</Text>
            {/* text component will display the description */}
            <Text>Partly Cloudy</Text>
        </View>
    )
}

export default DisplayWeather

// add a stylesheet by defining a variable called 'styles'
const styles = StyleSheet.create({
    // assigning an object with CSS properties
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    temp: {
        fontSize: 40,
        fontWeight: 'bold',
    }
})