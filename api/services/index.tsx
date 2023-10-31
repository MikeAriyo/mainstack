import Environment from "@/config/env";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = Environment.NEXT_PUBLIC_BASE_URL;

const createRequest = (url: any) => ({ url });

export const frontendAPI = createApi({
  reducerPath: "frontendAPI",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: () => createRequest("/user"),
    }),

    getWallet: builder.query({
      query: () => createRequest("/wallet"),
    }),

    getTransactions: builder.query({
      query: () => createRequest("/transactions"),
    }),
  }),
});

export const { useGetUserQuery, useGetTransactionsQuery, useGetWalletQuery } =
  frontendAPI;
