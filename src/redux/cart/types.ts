export type CartItem = {
    id: string;
    title: string;
    price: number; 
    count: number; 
    imageUrl: string; 
};
  
export interface CartSliceState {
    totalPrice: number;
    items: CartItem[];
};
  
