import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

import CardList from './components/CardList';

const items = [
  { id: 0, tickerName: 'Microsoft', symbol: 'MSFT' },
  { id: 1, tickerName: 'JD.com', symbol: 'JD' },
];

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CardList items={items}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
});
