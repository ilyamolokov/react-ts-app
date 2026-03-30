import { API_URL } from "@/lib/const";
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";

interface ILoginResponse {
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

export class Http {
  private readonly client: AxiosInstance;
  private baseURL: string = ''

  constructor(url: string) {
    this.baseURL = url
    this.client = axios.create({ baseURL: this.baseURL });
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

  login(body: { username: string, password: string}): Promise<ILoginResponse> {
    return this.post('auth/login', body, { withCredentials: true })
  }
}

export const http = new Http(API_URL)
