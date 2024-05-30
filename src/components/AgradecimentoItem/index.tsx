
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface TestimonialItemProps {
  name: string;
  text: string;
}

const TestimonialItem: React.FC<TestimonialItemProps> = ({ name, text }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default TestimonialItem;


