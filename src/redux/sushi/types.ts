export type SushiItem = {
    id: string;
    imageUrl: string;
    price:number;
    title: string;
    description:  string;
};

export type SearchSushiParams = {
    sortBy: string;
    order: string;
    category: string;
    search: string;
    currentPage: string;
};
  
export enum Status {
    LOADING = 'loading',
    SUCCESS = 'success',
    ERROR = 'error',
};
  
export interface SushiSliceState {
    items: SushiItem[];
    status: Status;
};

