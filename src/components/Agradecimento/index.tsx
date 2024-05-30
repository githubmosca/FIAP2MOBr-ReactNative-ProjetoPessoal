
 
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import TestimonialItem from '../AgradecimentoItem';
import styles from './styles';

import GlobalStyles from '../../utils/theme';

const Testimonial = () => {

  const testimonials = [
    { name: 'Ezio Moreira Tristão Junior', text: 'Um colega incrível com quem tive o prazer de conhecer na FIAP .' },
    { name: 'Guilherme Marcel de Almeida', text: 'Nosso grupo FIAP Mobile foi massa.Estou agradecida pelo apoio recebido' },
    { name: 'Rodrigo Rodrigues dos Santos Guilherme', text: 'Foi uma honra fazer parte desta equipe de pessoas tão talentosas' }, 
];

  return (
    <View style={styles.container}>
      {<Text style={GlobalStyles.title}>Agradecimentos aos colegas do Grupo FIAP</Text>}
       
      {testimonials.map((testimonial, index) => (
          
        <TestimonialItem key={index} name={testimonial.name} text={testimonial.text} />
      ))}
    </View>
  );
};
export default Testimonial;
