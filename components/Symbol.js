import { 
  ColorPropType,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';

export default function Symbol({size, backgroundColor, symbol }) {

  let fontSize = 20;
  switch(symbol.length) {
    case(4):
      fontSize = 16;
      break;
    case(5):
      fontSize = 14;
      break;
  }
  
  const textStyle = {
    fontSize,
  }

  // Calculate the dimensions and style attributes
  const style = {
    width: size,
    height: size,
    borderRadius: size / 2,
    backgroundColor,
  }


  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.text, textStyle]}>{symbol}</Text>
    </View>
  )

}

Symbol.propTypes = {
  symbol: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  backgroundColor: ColorPropType.isRequired,
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
  },
})