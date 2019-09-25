import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';


export default class TickerInfo extends React.Component {
  render() {

    const { price, open, high, low } = this.props;

    //const { price, open, high, low } = fetchPriceInfo('JD'); // needs to be asyncronous
    return (
      <View style={styles.container}>
        <Text style={styles.currentPriceText}>{price}</Text>
        <View style={styles.priceInfoContainer}>
          <Text style={styles.priceInfoText}>Open: {open}</Text>
          <Text style={styles.priceInfoText}>High: {high}</Text>
          <Text style={styles.priceInfoText}>Low: {low}</Text>
        </View>
      </View>
    );
    /*return (
      <View style={styles.container}>
        <Text style={styles.curPriceText}>31.17</Text>
        <View style={styles.priceInfoContainer}>
          <View flex={1}>
            <Text style={styles.priceInfoText}>{prevClose}</Text>
          </View>
          <View flex={1}>
            <Text style={styles.priceInfoText}>{high}</Text>
          </View>
          <View flex={1}>
            <Text style={styles.priceInfoText}>{low}</Text>
          </View>
        </View>
      </View>
    );*/
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  currentPriceText: {
    fontSize: 46,
  },
  priceInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  priceInfoText: {
    fontSize: 14,
    marginHorizontal: 20,
  },
});
/*
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 8,
  },
  curPriceText: {
    flex: 1,
    margin: 20,
    fontSize: 46,
  },
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  curPriceText: {
    flex: 1,
    fontSize: 46,
  },
  priceInfoContainer: {
    flex: 4,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  priceInfoText: {
    flex: 1,
    //marginHorizontal: 0,
    fontSize: 20,
  },
}) 
*/