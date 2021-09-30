import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { site_url } from 'api/constants';
import { isObject } from 'api/helpers';
import { logOut } from 'modules/login/slices/LoginSlice';
import { api } from 'api';

const initialState = {
  isFetching: false,
  list  : [],
  total : 0
}


const ItemSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    // non async reducer
    ADD_STATE: (state, action) => {
      const groupAHashMap = state[action.payload.slicekey].reduce((acc, cur) => ({ ...acc, [cur.Invencount]: true }), {});
      const boolean2 = action.payload.value.every(obj => groupAHashMap[obj.Invencount]);

      const data = action.payload.value;
      if (!boolean2) {
        state[action.payload.slicekey].push(data[0]);
      } else {
        const init_update = state[action.payload.slicekey].find(init_update => init_update['Invencount'] === data[0].Invencount)
        if (init_update) {
          init_update['cartQty'] = data[0].cartQty + init_update['cartQty'] 
        }
      }
    },
    UPDATE_STATE: (state, action) => {
      // updating of states using array index or object value (unique id from DB)
      // if is_idx===true the where param is an array index else where is an  object value of array (unique id from DB)
      const { slicekey, is_idx, where, objkey, where_value } = action.payload
      if (is_idx && isObject(objkey)) {
        for (const [key, value] of Object.entries(objkey)) {
          state[slicekey][where][key] = value;
        }
      } else {
        const init_update = state[slicekey].find(init_update => init_update[where] === where_value)
        if (init_update && isObject(objkey)) {
          for (const [key, value] of Object.entries(objkey)) {
            init_update[key] = value
          }
        }
      }
    },
    FETCH_STATE: (state, action) => {
      // fetching of json updates from db
      // or asigning of multiple json objects to states (will override the current states )
      const { slicekey, data } = action.payload
      state[slicekey] = data;
    },
    REMOVE_STATE: (state, action) => {
      // removing of states using array index or object value (unique id from DB)
      // if is_idx===true the where param is an array index else where is an  object value of array (unique id from DB)
      const { slicekey, where, objkey, is_idx } = action.payload
      if (is_idx) {
        state = state[slicekey].splice(where, 1);
      } else {
        state[slicekey].map((toRemove, idx) => {
          if (toRemove[objkey] === where) {
            state = state[slicekey].splice(idx, 1);
          }
        })
      }
    },
    TRUE_FALSE_STATE: (state, action) => {
      // TOGGLE TRUE /FALSE
      const { slicekey } = action.payload;
      state[slicekey] = !slicekey
    },
    assignState: (state, action) => {
      const { slicekey, value } = action.payload;
      state[slicekey] = value;
    },
    assignState2: (state, action) => {
      const { slicekey, value } = action.payload;
      state[slicekey] = value;
    },
  },
  extraReducers: {
    // fetch one
    // [getProducts.fulfilled]: (state, {payload} ) => {
    //   state.isFetching    = false;
    //     state.list         = payload.apiRet;
    // },
    // [getProducts.rejected]: (state,  {payload} ) => {
    //   state.isFetching    = false;
    // },
    // [getProducts.pending]: (state) => {
    //   state.isSending     = 'sending';
    //   state.isFetching    = true;
    // },

  },
});

export const { ADD_STATE, UPDATE_STATE, FETCH_STATE, REMOVE_STATE, assignState,assignState2 } = ItemSlice.actions;
export default ItemSlice.reducer;


export const cartAmount =  (cartAmounts)=>{
  let total = cartAmounts.reduce(function(acc, val) { return acc + val; }, 0);
  let text = "$" +total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  return  {
    text: text,
    number : total
  }
} 
