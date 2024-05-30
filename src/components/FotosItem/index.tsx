import React from 'react';
import { View, Image, Text, ImageSourcePropType } from 'react-native';
import styles from './styles';

interface PhotoItemProps {
  src: ImageSourcePropType;
  caption: string;
}

const PhotoItem: React.FC<PhotoItemProps> = ({ src, caption }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={src} style={styles.image} />
      <Text style={styles.caption}>{caption}</Text>
    </View>
  );
};

export default PhotoItem;

