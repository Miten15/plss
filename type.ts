//import { Database } from './database.types';

//export type Tables<T extends keyof Database['public']['Tables']> =
  ///Database['public']['Tables'][T]['Row'];

//export type InsertTables<T extends keyof Database['public']['Tables']> =
  //Database['public']['Tables'][T]['Insert'];

  //export type UpdateTables<T extends keyof Database['public']['Tables']> =
  //Database['public']['Tables'][T]['Update'];

//export type Enums<T extends keyof Database['public']['Enums']> =
  //Database['public']['Enums'][T];
export type TopTrendy = {
  id: number;
  image: string | null;
  name: string;
  rating: number;
  location: string;
  description: string;
  keyDetails: string;
  architectureDetails: string;
  servicesDetails: string;
  visitingDetails: string;
  startingPrice: number;

}
 export type ListingPage = {
  id: number;
  image: string | null;
  name: string;
  rateing: number;
  location: string;
  des: string;
  keyDetails: string;
  ArchitectureDetails: string;
  ServicesDetails: string;
  VisitingDetails: string;
  StartingPrice: number;
 };

export type PizzaSize = 'S' | 'M' | 'L' | 'XL';

export type CartItem = {
  id: string;
  product: TopTrendy;
  product_id: number;
  size: PizzaSize;
  quantity: number;
};

export const OrderStatusList: OrderStatus[] = [
  'New',
  'Cooking',
  'Delivering',
  'Delivered',
];

export type OrderStatus = 'New' | 'Cooking' | 'Delivering' | 'Delivered';

export type Order = {
  id: number;
  created_at: string;
  total: number;
  user_id: string;
  status: OrderStatus;

  order_items?: OrderItem[];
};

export type OrderItem = {
  id: number;
  product_id: number;
  products: TopTrendy;
  order_id: number;
  size: PizzaSize;
  quantity: number;
};

export type Profile = {
  id: string;
  group: string;
};