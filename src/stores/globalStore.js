//contrôle état des sidebar (menu/panier et alerte)

import { writable } from "svelte/store";

//valeur initiale
const globalStore = writable({
  sidebar: false,
  cart: false,
  alert: false,
});

//gestion globale
const store = {
  subscribe: globalStore.subscribe,
  //méthode qui met à jour les propriétés de "globalStore"
  toggleItem: (item, value) => {
    globalStore.update((storeValues) => {
      return { ...storeValues, [item]: value };
    });
  },
};

export default store;
