import { type as findSuggestionsType } from '../actions/findSuggestions';

import Item from "../../data/items";

const defaultState = [];

function reducer(state = defaultState, {type, payload}) {
    switch (type) {
        case findSuggestionsType: {
            const regex = new RegExp(`^${payload}`, 'i');

           return Item.filter(n => regex.test(n.title));
           
        }

        default:
           return state; 
    }
}
export default reducer;