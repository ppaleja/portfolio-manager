import {
  Image,
  StyleSheet,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import TickerRow from './TickerRow';
import TickerInfo from './TickerInfo';

import { fetchPriceInfo } from '../utils/api';

export default class Card extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      price: 0.0,
      open: 0.0,
      low: 0.0,
      high: 0.0,
    }
  }

  static propTypes = {
    symbol: PropTypes.string.isRequired,
    tickerName: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    onPressLinkText: PropTypes.func,
  };

  static defaultProps = {
    linkText: '',
    onPressLinkText: () => {},
  };

  handleUpdatePriceInfo = async (symbol) => {
    try {
      const { price, open, high, low } = await fetchPriceInfo('symbol');
      this.setState({
        error: false,
        price,
        open,
        high,
        low,
      })
    } catch(e) {
      this.setState({
        error: true,
      })
    }
  }

  componentDidMount() {
    const { symbol } = this.props;
    this.handleUpdatePriceInfo(symbol);
    console.log('card')
  }

  render() {
    const { symbol, tickerName, linkText, onPressLinkText } = this.props;
    const { price, open, high, low } = this.state;

    console.log('card')
    return (
      <View>
        <TickerRow
          symbol={symbol}
          tickerName={tickerName}
          linkText={linkText}
          onPressLinkText={onPressLinkText}
        />
        <TickerInfo
          price={price}
          open={open}
          high={high}
          low={low}
        />
      </View>
    );
  }
}