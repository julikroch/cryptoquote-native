import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {QuoteProps} from './typings';

interface QuoteI {
  data: QuoteProps;
}

const Quote = ({data}: QuoteI) => {
  const {PRICE, HIGHDAY, LOWDAY, CHANGE24HOUR, LASTUPDATE} = data;
  return (
    <View style={styles.result}>
      <Text style={[styles.text, styles.price, styles.label]}>
        <Text>{PRICE}</Text>
      </Text>
      <Text style={styles.text}>
        Highest price: <Text style={styles.label}>{HIGHDAY}</Text>
      </Text>
      <Text style={styles.text}>
        Lowest price: <Text style={styles.label}>{LOWDAY}</Text>
      </Text>
      <Text style={styles.text}>
        24 hour variation: <Text style={styles.label}>{CHANGE24HOUR}%</Text>
      </Text>
      <Text style={styles.text}>
        Last update: <Text style={styles.label}>{LASTUPDATE}</Text>
      </Text>
    </View>
  );
};

export default Quote;
