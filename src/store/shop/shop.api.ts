import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { IGood, ServerResponse } from "../../models/models"

export const shopApi = createApi({
    reducerPath: "shopApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.escuelajs.co/api/v1/" }),
    endpoints: (builder) => ({
        getTrendingProducts: builder.query<IGood[], string[]>({
            query: (showLimit) => ({
                url: `products`,
                params: {
                    offset: 0,
                    limit: showLimit
                }
            }),
        }),
        getCategoryProducts: builder.query<IGood[], string[]>({
            query: (id) => ({
                url: `categories/${id}/products`,
            }),
        }),
        getGoodInfo: builder.query<ServerResponse<IGood>, number>({
            query: (id: number) => ({
                url: `products/${id}`
            }),
        }),
        getGoodByTitle: builder.query<IGood[], string>({
            query: (search: string) => ({
                url: `products`,
                params: {
                    title: search
                }
            })
        }),
    }),
})

export const { useGetTrendingProductsQuery, useGetCategoryProductsQuery, useGetGoodInfoQuery, useGetGoodByTitleQuery, } = shopApi