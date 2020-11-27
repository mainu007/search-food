import React from 'react';
import { withNavigation } from 'react-navigation';
import { Image } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

function ResultsDetail({ data, navigation }) {
   return (
      <TouchableOpacity
         onPress={() => navigation.navigate('ResultShow', { id: data.id })}
      >
         <View style={styles.container}>
            <Image style={styles.image} source={{ uri: data.image_url }} />
            <Text style={styles.title}>{data.name}</Text>
            <Text>
               {data.rating} Stars, {data.review_count} Reviews
            </Text>
         </View>
      </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
   container: {
      marginLeft: 15,
   },
   image: {
      width: 200,
      height: 120,
      borderRadius: 4,
      marginBottom: 5,
   },
   title: {
      fontWeight: '700',
   },
});

export default withNavigation(ResultsDetail);
