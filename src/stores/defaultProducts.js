import { writable } from 'svelte/store';
import localProducts from '../localProducts'

//initial value
const store = writable(flattenProduct([...localProducts]));

//subscribe
//set
//update

//remplace le ss-objet "image" par simplement l'url de l'image
function flattenProduct(data){
    return data.map(item =>{
        let image = item.image.url;
        return {...item, image}
    })
}

export default store;