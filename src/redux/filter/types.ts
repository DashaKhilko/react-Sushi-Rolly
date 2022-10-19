export enum SortPropertyEnum {
    RATTING_DESC = 'rating',
    RATTING_ASC = '-rating',
    PRICE_DESC = 'price',
    PRICE_ASC = '-price',
};
  
export type Sort = {
    name: string;
    sortProperty: SortPropertyEnum;
};
  
export interface FilterSliceState {
    searchValue: string;
    categoryId: number;
    currentPage: number;
    sort: Sort;
};
  