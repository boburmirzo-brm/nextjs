import { api } from '../../api'


export const blogsApi = api.injectEndpoints({
  endpoints: (build) => ({
    getBlogs: build.query({
      query: () => ({ url: '/blog' }),
      providesTags:[ "Blog"]
    }),
    createBlog: build.mutation({
      query: (body)=> ({
        url: "/blog",
        method: "POST",
        body
      }),
      invalidatesTags: ["Blog"]
    }),
    deleteBlog: build.mutation({
      query: (id)=> ({
        url:`/blog/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Blog"]
    })
  }),
})

export const {
  useCreateBlogMutation,
  useGetBlogsQuery,
  useDeleteBlogMutation
} = blogsApi


