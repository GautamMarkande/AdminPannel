import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const estiloApi = createApi({
    reducerPath:'estiloApi',
    baseQuery:fetchBaseQuery({
        baseUrl:'https://estilo.phoneo.in/public/api/'
    }),
    endpoints:(builder)=>({
      getProducts:builder.query({
        query:()=>({
            url:'Prod',
            method:"GET"
        })
      })
    })
})
export const {useGetProductsQuery} = estiloApi