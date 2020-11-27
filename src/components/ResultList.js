import React from 'react';
import { FlatList } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import ResultsDetail from './ResultsDetail';

export default function ResultList({ title, data }) {
   if (!data.length) {
      return null;
   }
   return (
      <View style={styles.container}>
         <Text style={styles.title}>{title}</Text>
         <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <ResultsDetail data={item} />}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      marginBottom: 10,
   },
   title: {
      fontSize: 20,
      fontWeight: '700',
      marginLeft: 15,
      marginBottom: 5,
   },
});
