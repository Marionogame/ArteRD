import { type as findCurrentItemType } from '../actions/findCurrentItem';

import Item from "../../data/items";



const defaultState = 0;
function reducer( state = defaultState, {type, payload}) {
    switch (type) {
        case findCurrentItemType: {
            return Item.find(n => n.id === payload);
        }

        default:
           return state; 
    }
}
export default reducer;