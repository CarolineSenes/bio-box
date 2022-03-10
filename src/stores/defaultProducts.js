import { writable } from 'svelte/store';
import localProducts from '../localProducts'

//initial value
const store = writable([...localProducts]);

//subscribe
//set
//update

export default store;