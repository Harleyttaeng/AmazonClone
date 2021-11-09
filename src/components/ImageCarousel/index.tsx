import React, { useState, useCallback } from 'react';
import { View, FlatList, Image, useWindowDimensions } from 'react-native';
import styles from './styles';

const ImageCarousel = ({images}: {images: string[]}) => {
  const windowWidth = useWindowDimensions().width;
  const [activeIndex, setActiveIndex] = useState(0);
  const onFlatListUpdate = useCallback(({viewableItems}: any) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  },[]);

  return (
    <View>
      <FlatList
        data={images}
        renderItem={
          ({ item }) =>
            <Image
              source={{ uri: item}}
              style={[styles.image, {width: windowWidth - 40}]}
            />
        }
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={onFlatListUpdate}
      />
      <View style={styles.dots}>
        {images.map((image,index) =>
          <View style={[styles.dot, {backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed'}]} />
        )}
      </View>
    </View>
  );
};



export default ImageCarousel;
