export interface ILoginRequestBody {
  username: string,
  password: string;
  checked: boolean
}

export interface IGetProductsRequestParams {
  limits: number;
  sortBy: string;
  order: string
}

export interface ISearchProductsRequestParams {
  q: string;
  sortBy: string;
  order: string
}
