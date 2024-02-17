import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'http://localhost:8000/api/',
  imgUrl: 'http://[::1]:5173//storage/app/public/',
  restaurants: [],
  cuisines: []
})