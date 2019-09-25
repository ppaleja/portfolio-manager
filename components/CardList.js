import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

import Card from './Card';

const keyExtractor = ({ id }) => id.toString();

export default class CardList extends React.Component {
  static propTypes = {
    item: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        tickerName: PropTypes.string.isRequired,
        symbol: PropTypes.string.isRequired,
      }),
    ).isRequired,
  };
  
  renderItem = ({ item: { id, tickerName, symbol } }) => (
    <Card
      
      tickerName={tickerName}
      symbol={symbol}
    />
  );

  render() {
    //alert('bruh cardlist')
    const { items } = this.props;
    return (
      <FlatList
        data={items}
        renderItem={this.renderItem}
        keyExtractor={keyExtractor}
      />
    )
  }
}
