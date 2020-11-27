import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
   const [results, setResults] = useState([]);
   const [errorMessage, setErrorMessage] = useState(null);

   useEffect(() => {
      searchApi('pasta');
   }, []);

   const searchApi = async (menu) => {
      try {
         const response = await yelp.get('/search', {
            params: {
               limit: 50,
               term: menu,
               location: 'New York City',
            },
         });
         setResults(response.data.businesses);
      } catch (error) {
         setErrorMessage('Something went wrong');
      }
   };

   const filterResultsPrice = (priceRange) => {
      return results.filter((item) => item.price === priceRange);
   };

   return [searchApi, filterResultsPrice, errorMessage];
};
