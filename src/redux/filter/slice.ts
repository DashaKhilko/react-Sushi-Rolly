import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { FilterSliceState, Sort, SortPropertyEnum } from "./types";

const initialState: FilterSliceState = {
    searchValue: '',
    categoryId: 0,
    currentPage: 1,
    sort: {
      name: 'высокий рейтинг',
      sortProperty: SortPropertyEnum.RATTING_DESC,
    }
  };
  
const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
      setCategoryId(state, action: PayloadAction<number>) {
        state.categoryId = action.payload;
      },
      setSearchValue(state, action: PayloadAction<string>) {
        state.searchValue = action.payload;
      },
      setSort(state, action: PayloadAction<Sort>) {
        state.sort = action.payload;
      },
      setCurrentPage(state, action: PayloadAction<number>) {
        state.currentPage = action.payload;
      }
    }
})
  
export const { setCategoryId, setSearchValue, setSort, setCurrentPage } = filterSlice.actions;
  
export default filterSlice.reducer;