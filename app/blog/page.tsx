"use client";
import CreateBlog from "@/components/CreateBlog";
import Loading from "@/components/Loading";
import {
  useGetBlogsQuery,
  useDeleteBlogMutation,
} from "@/lib/features/blog/blogSlice";
import Link from "next/link";

interface BlogType {
  _id: string;
  title: string;
  desc: string;
}

export default function Blog() {
  const { data, isLoading } = useGetBlogsQuery("Blog");
  const [deleteBlogById, { isLoading: deleteLoading }] = useDeleteBlogMutation();

  let blogs = data?.innerData?.map((el: BlogType) => (
    <div
      key={el._id}
      className=" p-6 md:w-80 w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
    >
      <Link href={`/blog/${el._id}`}>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {el.title}
        </h5>
      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {el.desc}
      </p>
      <button
        disabled={deleteLoading}
        onClick={() => deleteBlogById(el._id)}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {
          deleteLoading ? "Loading..." : "Delete"
        }
      </button>
    </div>
  ));
  return (
    <div className="bg-slate-900 min-h-screen ">
      <div className="max-w-screen-xl mx-auto">
        <CreateBlog/>
        <div className="max-xl:px-5 flex gap-5 flex-wrap">
          {isLoading ? <Loading/> : blogs}
        </div>
      </div>
    </div>
  );
}
