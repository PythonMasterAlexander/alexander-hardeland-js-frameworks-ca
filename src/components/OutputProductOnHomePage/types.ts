interface Product {
  id: string;
  title: string;
  description: string;
  discountedPrice: number;
  price: number;
  imageUrl: string;
}
export interface OutputProductOnHomePageProps {
  filteredProducts: Product[];
}
