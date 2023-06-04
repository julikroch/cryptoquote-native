import React from 'react';
import Header from './components/Header';
import {Image} from 'react-native';
import {styles} from './styles';

function App(): JSX.Element {
  return (
    <>
      <Header />
      <Image
        style={styles.image}
        source={require('./assets/img/cryptomonedas.png')}
      />
    </>
  );
}

export default App;
