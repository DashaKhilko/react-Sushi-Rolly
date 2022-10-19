import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchSushiParams, SushiItem } from "./types";

export const fetchSushi = createAsyncThunk('sushi/fetchSushiStatus',
    async (params: SearchSushiParams) => {
      const {sortBy, order, category, search, currentPage} = params;
      const {data} = await axios.get<SushiItem[]>(`https://63299d9f4c626ff832c59c25.mockapi.io/items?page=${currentPage}&limit=12&${category}&sortBy=${sortBy}&order=${order}&${search}`);
        
      return data as SushiItem[];
    }
)