export interface ILoginRequestBody {
  username: string,
  password: string;
  checked: boolean
}

export interface IGetProductsRequestParams {
  q: string;
  sortBy: string;
  order: string
}
