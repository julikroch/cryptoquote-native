/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Image, ScrollView, View} from 'react-native';
import Header from './components/Header';
import Form from './components/Form';
import Quote from './components/Quote';
import {QuoteProps} from './components/Quote/typings';
import {styles} from './styles';

function App(): JSX.Element {
  const [currency, setCurrency] = useState('');
  const [crypto, setCrypto] = useState('');
  const [checkApi, setCheckApi] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<QuoteProps | undefined>();

  useEffect(() => {
    const quoteCrypto = async () => {
      if (checkApi) {
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${crypto}&tsyms=${currency}`;
        const result = await fetch(url);
        const response = await result.json();

        setLoading(true);

        console.log({response});

        setTimeout(() => {
          setData(response?.DISPLAY[crypto][currency]);
          setCheckApi(false);
          setLoading(false);
        }, 3000);
      }
    };
    quoteCrypto();
  }, [checkApi]);

  return (
    <ScrollView>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />

      <View style={styles.container}>
        <Form
          currency={currency}
          crypto={crypto}
          setCurrency={setCurrency}
          setCrypto={setCrypto}
          setCheckApi={setCheckApi}
        />
      </View>
      <View style={styles.quote}>
        {loading && <ActivityIndicator size="large" color="#5e49e2" />}
        {!loading && data !== undefined && <Quote data={data} />}
      </View>
    </ScrollView>
  );
}

export default App;
