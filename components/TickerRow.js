import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Symbol from './Symbol';
import getTickerColor from '../utils/getTickerColor';

export default function TickerRow({ tickerName, symbol, linkText, onPressLinkText }) {
  alert('bruh tickerrow')
  calcSize = (initials) => {

  }
  return (
    <View style={styles.container}>
      <Symbol
        size={46}
        symbol={symbol}
        backgroundColor={getTickerColor(tickerName)}
      />
      <Text style={styles.text} numberOfLines={1}>
        {tickerName}
      </Text>
      {!!linkText && (
        <TouchableOpacity onPress={onPressLinkText}>
          <Text numberOfLines={1} fontSize={20}>{linkText}</Text>
        </TouchableOpacity>
      )}
    </View>
  )
}

TickerRow.propTypes = {
  tickerName: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onPressLinkText: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  text: {
    flex: 1,
    fontSize: 20,
    marginHorizontal: 6,
  }
})