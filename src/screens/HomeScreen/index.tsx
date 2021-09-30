import React from 'react';
import { StyleSheet, View } from 'react-native';
import ProductItem from '../../components/ProductItem';
import products from '../../data/products';

const HomeScreen = () => {
  return (
    <View>
      <View style={styles.page}>
        <ProductItem  item={products[0]}/>
        <ProductItem  item={products[1]}/>
        <ProductItem  item={products[2]}/>
        <ProductItem  item={products[3]}/>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page:{
    padding: 10,
  },
});

export default HomeScreen;

