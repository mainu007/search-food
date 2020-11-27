import axios from 'axios';

export default axios.create({
   baseURL: 'https://api.yelp.com/v3/businesses',
   headers: {
      Authorization:
         'Bearer JIFeKevG0uO-k_PF__tXjZ40J1LTYR_Gq_V5kWZHiO7I0_n6LVdfT7tkMleMjOqvS_7xjkSlQ1VzaZ73lmoz2TraouVKPlYfqNTXr-j-EKYbFrJqcU20ixR-DyW-X3Yx',
   },
});
