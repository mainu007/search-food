import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const SearchBar = ({ term, onChangeTerm, onTermSubmit }) => {
   return (
      <View style={styles.search}>
         <AntDesign name="search1" style={styles.icon} />
         <TextInput
            value={term}
            onChangeText={(value) => onChangeTerm(value)}
            onEndEditing={onTermSubmit}
            style={styles.input}
            placeholder="Search"
         />
      </View>
   );
};

const styles = StyleSheet.create({
   search: {
      flexDirection: 'row',
      height: 50,
      backgroundColor: '#f0eeee',
      marginHorizontal: 15,
      borderRadius: 5,
      marginTop: 15,
      marginBottom: 10,
   },
   icon: {
      fontSize: 30,
      alignSelf: 'center',
      paddingHorizontal: 10,
   },
   input: {
      fontSize: 18,
   },
});

export default SearchBar;
