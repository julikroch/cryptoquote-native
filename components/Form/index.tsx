/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {Text, View, TouchableHighlight, Alert} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import {styles} from './styles';
import {CryptoCoin, FormProps} from './typings';

const Form = (props: FormProps) => {
  const [data, setData] = useState([]);
  const {currency, crypto, setCrypto, setCurrency, setCheckApi} = props;

  const quoteCryptoCoin = () => {
    if (!currency.trim() || !crypto.trim()) {
      showAlert();
      return;
    }
    setCheckApi(true);
  };

  const showAlert = () =>
    Alert.alert('Error,', 'All fields are mandatory', [{text: 'OK'}]);

  useEffect(() => {
    const getCryptoCoins = async () => {
      const url =
        'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';

      const response = await fetch(url);
      const result = await response.json();

      setData(result.Data);
    };

    getCryptoCoins();
  }, []);

  return (
    <View>
      <Text style={styles.label}>Currency</Text>
      <Picker
        selectedValue={currency}
        onValueChange={coin => setCurrency(coin)}
        itemStyle={{height: 120}}>
        <Picker.Item label="-Select-" value="" />
        <Picker.Item label="US Dollar" value="USD" />
        <Picker.Item label="Mexican Peso" value="MXN" />
        <Picker.Item label="Euro" value="EUR" />
        <Picker.Item label="Pound" value="GBP" />
      </Picker>

      <Text style={styles.label}>CryptoCoin</Text>
      <Picker
        selectedValue={crypto}
        onValueChange={selectedCrypto => setCrypto(selectedCrypto)}
        itemStyle={{height: 120}}>
        <Picker.Item label="-Select-" value="" />
        {data.map((cryptoCoin: CryptoCoin) => (
          <Picker.Item
            key={cryptoCoin.CoinInfo.Id}
            label={cryptoCoin.CoinInfo.FullName}
            value={cryptoCoin.CoinInfo.Name}
          />
        ))}
      </Picker>
      <TouchableHighlight onPress={quoteCryptoCoin} style={styles.btnQuote}>
        <Text style={styles.textQuote}>Quote</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Form;
