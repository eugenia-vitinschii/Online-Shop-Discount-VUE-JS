
import {defineStore} from 'pinia';

import {state} from './state.ts';
import {getters} from './getters.ts';
import {actions} from './actions.ts';
import type{ ProductState} from './state.ts';

export const useProductStore = defineStore<'product', ProductState, typeof getters, typeof actions>('product', {
   state,
   getters,
   actions,
});
