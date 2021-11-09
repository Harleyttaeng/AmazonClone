import React from 'react';
import { View, StyleSheet, FlatList } from "react-native";

import products from '../../data/cart';
import CartProductItem from '../../components/CartProductItem';

const ShoppingCartScreen = () => {
  return (
    <View style={styles.page}>
      <FlatList
       data={products}
       renderItem={
         ({item}) => <CartProductItem carItem={item} />
       }
       showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default ShoppingCartScreen;
