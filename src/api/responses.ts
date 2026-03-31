export interface ILoginResponse {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  accessToken: string;
  refreshToken: string;
}

export interface IProduct extends Record<string, unknown> {
  id: number;
  title: string;
  category: string;
  rating: number;
  price: number;
  brand: string;
  sku: string;
  thumbnail: string;
}

export interface IGetProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

export interface ISearchProductsResponse {
  products: IProduct[];
  total: number;
  skip: number;
  limit: number;
}

