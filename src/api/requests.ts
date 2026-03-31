export interface ILoginRequestBody {
  username: string,
  password: string;
  checked: boolean
}

export interface IGetProductsRequestParams {
  limit: number;
  skip: number
}
