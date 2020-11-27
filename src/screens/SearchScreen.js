import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
import { View, Text, StyleSheet } from 'react-native';
import yelp from '../api/yelp';

import ResultList from '../components/ResultList';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
   const [term, setTerm] = useState('');
   const [searchApi, filterResultsPrice, errorMessage] = useResults();

   return (
      <View style={styles.container}>
         <SearchBar
            term={term}
            onChangeTerm={setTerm}
            onTermSubmit={() => searchApi(term)}
         />
         {errorMessage && <Text style={styles.error}>{errorMessage}</Text>}
         <ScrollView>
            <ResultList title="Cost Effective" data={filterResultsPrice('$')} />
            <ResultList title="Bit Pricier" data={filterResultsPrice('$$')} />
            <ResultList title="Big Spender" data={filterResultsPrice('$$$')} />
         </ScrollView>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
   },
   error: {
      color: 'red',
      marginLeft: 15,
   },
});

export default SearchScreen;
