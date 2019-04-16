// this is a simple component to display the weather
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// this component is defined as a function
const DisplayWeather = (props) => {
    // display loading message if data has not loaded
    if (props.data === null) {
        return <Text>Loading...</Text>
    }

    // error handling message
    if (props.data.cod !== 200) { // if the request was not recieved/understood (200)
        return <Text>An Error has occured</Text>
    }

    const { temp } = props.data.main
    const { description } = props.data.weather[0]
    const { humidity } = props.data.main
    const { pressure } = props.data.main
    const { name } = props.data

    // component must return JSX
    return (
        // view container will act as a component
        <View style={styles.container}>
            <View style={styles.main}>
                <Text style={styles.name}>{name}</Text>
                <Text style={styles.description}>{description}</Text>
                <Text style={styles.temp}>{Math.round(temp)}°</Text>
                <Text style={styles.misc}>humidity: {humidity}% | pressure: {pressure} mb</Text>
            </View>
           
            {/* text component will display the description */}
            <View>
                
                {/* <Text style={styles.pressure}>pressure: {pressure} mb</Text> */}
            </View>
           
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
    name: {
        fontSize: 28,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16
    },
    temp: {
        fontSize: 96,
        fontWeight: 'bold',
    },
    misc: {
        fontWeight: '100',
        fontSize: 10
    },
    main: {
        alignItems: 'center',
        justifyContent: 'center',
    }
})