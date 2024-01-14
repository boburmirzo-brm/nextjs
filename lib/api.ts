import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:3000/api',
  prepareHeaders: (headers) => {
    const token = "fake__token"
    if (token) {
      headers.set('authentication', `Bearer ${token}`)
    }
    return headers
  },
})

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 1 })

export const api = createApi({
  reducerPath: 'mainApi',
  baseQuery: baseQueryWithRetry,
  tagTypes: ['Product', 'Blog'],
  endpoints: () => ({}),
})

// export const enhancedApi = api.enhanceEndpoints({
//   endpoints: () => ({
//     getPost: () => 'test',
//   }),
// })
