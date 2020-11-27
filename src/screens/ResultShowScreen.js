import React, { useEffect, useState } from 'react';
import yelp from '../api/yelp';
import {
   View,
   Text,
   FlatList,
   Image,
   StyleSheet,
   ScrollView,
} from 'react-native';

export default function ResultShowScreen({ navigation }) {
   const [data, setData] = useState(null);
   const id = navigation.getParam('id');

   console.log(data);

   useEffect(() => {
      getResultShow(id);
   }, []);
   const getResultShow = async (id) => {
      try {
         const response = await yelp.get(`/${id}`);
         setData(response.data);
      } catch (error) {
         console.log(error);
      }
   };

   if (!data) {
      return null;
   }

   return (
      <View style={styles.container}>
         <Text style={styles.title}>{data.name}</Text>
         <FlatList
            data={data.photos}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
               <Image style={styles.image} source={{ uri: item }} />
            )}
         />
      </View>
   );
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      marginHorizontal: 15,
   },
   title: {
      fontSize: 20,
      textAlign: 'center',
      marginVertical: 10,
      fontWeight: '700',
   },
   image: {
      width: '100%',
      height: 200,
      marginBottom: 5,
   },
});
