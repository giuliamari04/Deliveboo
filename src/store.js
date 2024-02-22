import { reactive } from 'vue';

export const store = reactive({
  apiUrl: 'http://localhost:8000/api/',
  imgUrl: 'http://localhost:8000/storage/',
  restaurants: [],
  cuisines: [],
  cart: [],
  cartOpen: false,
  isLoaded: false,
  totalPrice: 0,
  selectedCuisines: [],
  isLoading: false
})