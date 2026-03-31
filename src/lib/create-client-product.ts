import { IProduct } from "@/api/responses";
import { DASH, EMPTY } from "./const";

export const createClientProduct = (data: {
   title: string;
   brand: string;
   sku: string;
   price: number;
}): IProduct => {
  const {title, brand, sku, price } = data
  const id = Date.parse(new Date().toISOString());
  return {
    id,
    title,
    category: DASH,
    rating: 5,
    price,
    brand,
    sku,
    thumbnail: EMPTY
  }
}
