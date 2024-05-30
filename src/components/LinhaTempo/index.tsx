
 
import React from 'react';
import { View, StyleSheet } from 'react-native';
import TimelineEvent from '../LinhaTempoEventos';
import styles from './styles';
import { Card } from 'react-native-elements';

const Timeline = () => {
  const events = [
    { year: 1980, description: 'Início na TI, aprendendo Cobol.' },
    { year: 2000, description: 'Transição para desenvolvimento web.' },
    { year:2014, description: 'Certificação Gerencia de Projetos (PMI).' },
    { year: 2020, description: 'Retorno para carreira Técnica - Mobile.'},
    { year: 2024, description: 'Explorando Mobile e novas tecnologias.' },
  ];

  return (
    <View style={styles.container}>
      {events.map((event, index) => (
        <TimelineEvent key={index} year={event.year} description={event.description} />
      ))}
    </View>
  );
};



export default Timeline;

