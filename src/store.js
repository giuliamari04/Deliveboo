import {reactive} from 'vue';

export const store = reactive({
  apiUrl: 'http://127.0.0.1:8000/api/',
  imgPath: 'http://[::1]:5173/storage/app/',
  posts: [],
  technologies: [],
})