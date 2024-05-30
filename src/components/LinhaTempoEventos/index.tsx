import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

interface TimelineEventProps {
  year: number;
  description: string;
}

const TimelineEvent: React.FC<TimelineEventProps> = ({ year, description }) => {
  return (
    <View style={styles.eventContainer}>
      <Text style={styles.year}>{year}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

export default TimelineEvent;
