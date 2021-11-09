import React from 'react';
import { View, Text, Image } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

interface CartProductItemProps {
  carItem: {
    id: string,
    quantity: string,
    item: {
      id: string,
      title: string,
      image: string,
      avgRating: number,
      ratings: number,
      price: number,
      oldPrice?: number,
    }
  }
}

const CartProductItem = ({ carItem }: CartProductItemProps) => {
  const {quantity, item} = carItem;
  return (
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{ uri: item.image }} />
        <View style={styles.rightContainer}>
          <Text style={styles.title} numberOfLines={3}>{item.title}</Text>
          <View style={styles.ratingsContainer}>
            {[0,0,0,0,0].map((el,i) =>
              <FontAwesome
                key={`${item.id}-${i}`}
                style={styles.star}
                name={i < Math.floor(item.avgRating) ? 'star' : (i === Math.floor(item.avgRating) && (item.avgRating - Math.floor(item.avgRating)) >= 0.5 ? 'star-half-full' : 'star-o')}
                size={18}
                color={'#e47911'}
              />
            )}
            <Text>{item.ratings}</Text>
          </View>
          <Text style={styles.price}>from ${item.price}
            {
              item.oldPrice && <Text style={styles.oldPrice}> ${item.oldPrice}</Text>
            }
          </Text>
        </View>
      </View>
  );
};

export default CartProductItem;
