import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchSushi } from "./asyncActions";
import { Status, SushiItem, SushiSliceState } from "./types";

const initialState: SushiSliceState = {
    items: [],
    status: Status.LOADING,
};

const sushiSlice = createSlice({
  name: 'sushi',
  initialState,
  reducers: { 
    setItems(state, action: PayloadAction<SushiItem[]>) {
      state.items = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSushi.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });
    builder.addCase(fetchSushi.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(fetchSushi.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    })
  }
  // extraReducers: {
  //   [fetchSushi.pending]: (state) => {
  //     state.status = 'loading';
  //     state.items = [];
  //   },
  //   [fetchSushi.fulfilled]: (state, action) => {
  //     state.items = action.payload;
  //     state.status = 'success';
  //   },
  //   [fetchSushi.rejected]: (state, action) => {
  //     state.status = 'error';
  //     state.items = [];
  //   }
  // }
})


export const { setItems } = sushiSlice.actions;

export default sushiSlice.reducer; 