/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  View,
  Text,
} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import Card from './components/Card';
import {sWidth} from './constants/dimensions';

const App: () => Node = () => {
  const [products, setProducts] = useState();

  useEffect(() => {
    firestore()
      .collection('products')
      .where('soldOut', '==', false)
      .get()
      .then(res => {
        let dataSt = [];
        res.forEach(data => {
          dataSt.push(data.data());

          if (dataSt.length === res.size) {
            setProducts(dataSt);
          }
        });
      });
  }, []);

  useEffect(() => {
    console.log(products, 'CHEKC PRIOOSPO');
  }, [products]);

  return (
    <SafeAreaView>
      <View
        style={{
          width: sWidth,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#3f46c0',
        }}>
        {/* Header */}
        <Text style={{color: '#FFFFFF', fontWeight: '600'}}>Shopshot</Text>
      </View>
      <ScrollView>
        {products &&
          products.map((res, i) => <Card data={res} key={i.toString()} />)}
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
