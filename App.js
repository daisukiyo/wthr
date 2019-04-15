import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import DisplayWeather component
import DisplayWeather from './components/DisplayWeather'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* Add DisplayWeather Component */}
        <DisplayWeather/>
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
