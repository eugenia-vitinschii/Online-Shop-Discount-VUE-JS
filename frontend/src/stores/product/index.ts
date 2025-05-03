//index.ts
import {defineStore} from 'pinia';

import {state} from './state.ts';
import {getters} from './getters.ts';
import {actions} from './actions.ts';


export const useProductStore = defineStore('product', {
   state,
   getters,
   actions,
});
