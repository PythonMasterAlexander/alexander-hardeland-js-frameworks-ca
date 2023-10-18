export interface ApiReturnData {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  discountedPrice: number;
  price: number;
  reviews: Array<{
    id: string;
    username: string;
    rating: number;
    description: string;
  }>;
}
