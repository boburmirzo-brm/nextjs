import React, { useState } from "react";
import { useCreateBlogMutation } from "@/lib/features/blog/blogSlice";
const initialState = {
  title: "",
  desc: "",
};

export default function CreateBlog() {
  const [createBlog, { isLoading: createLoading }] = useCreateBlogMutation();
  const [newBlog, setNewBlog] = useState(initialState);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newBlog);

    createBlog(newBlog)
      .then((res) => {
        console.log(res);
        setNewBlog(initialState);
      })
      .catch((err) => console.log(err));
  };
  return (
    <form
      className="py-10 max-xl:px-5 grid md:grid-cols-3 gap-5"
      onSubmit={handleSubmit}
      action=""
    >
      <input
        value={newBlog.title}
        onChange={(e) =>
          setNewBlog((prev) => ({ ...prev, title: e.target.value }))
        }
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Title"
        required
      />
      <input
        value={newBlog.desc}
        onChange={(e) =>
          setNewBlog((prev) => ({ ...prev, desc: e.target.value }))
        }
        type="text"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Title"
        required
      />
      <button
        disabled={createLoading}
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        {createLoading ? "Loading..." : "Create blog"}
      </button>
    </form>
  );
}
