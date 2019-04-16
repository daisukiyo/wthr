import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import DisplayWeather component
import DisplayWeather from './components/DisplayWeather'
import { WEATHER_API_KEY } from 'react-native-dotenv'

export default class App extends React.Component {

  // use state to keep track of when geolocation is found
  constructor(props) {
    super(props)

    // this will hold user's location and weather data when loaded
    -this.state = {
      location: null, 
      weather: null
    }
  }

  // load weather information via openweathermap API
  loadweather() {
    const apikey = WEATHER_API_KEY  
    const { latitude, longitude } = this.state.location.coords
    const units = 'Imperial'
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apikey}&units=${units}`
    // `fetch()` is used to load data
    fetch(url)
    // After a connection is made the data is streamed as JSON
    .then(res => res.json())
    // When that resolves we use `this.setState()` to assign the weather data to state which will also re-render the component.
    .then(json => this.setState({ weather: json }))
    .catch(err => console.log(err.message))
  }

  // the following method is called when a component is created and added to the view
  componentDidMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.setState({ location })
      this.loadweather()
    }, (err) => {
      console.log(err.message)
    })
  }
  render() {
    return (
      <View style={styles.container}>
        {/* Add DisplayWeather Component */}
        <DisplayWeather data={this.state.weather}/>
      </View>
    );
  }
}
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
