import { API_URL } from "@/lib/const";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import { ILoginRequestBody } from "./requests";
import { ILoginResponse } from "./responses";

export class Http {
  private readonly client: AxiosInstance;
  private baseURL: string = ''

  constructor(url: string) {
    this.baseURL = url
    this.client = axios.create({ baseURL: this.baseURL, });
  }

  async get<Response = unknown>(
    url: string,
    params?: Record<string, unknown>,
    paramsSerializer?: Record<string, unknown>,
  ) {
    return (await this.client.get<Response>(url, { params, paramsSerializer }))
      .data;
  }

  async post<Body = Record<string, unknown>>(
    url: string,
    body: Body,
    config?: AxiosRequestConfig
  ) {
    return (await this.client.post(url, body, config)).data;
  }

  login(body: ILoginRequestBody): Promise<ILoginResponse> {
    return this.post('auth/login', { username: body.username, password: body.password }, { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Credentials': 'true' } })
  }
}

export const http = new Http(API_URL)
