"use client"
import {useGetBlogsQuery, useCreateBlogMutation} from "@/lib/features/blog/blogSlice"
import React, { useState } from "react";

interface BlogType {
    _id: string;
    title: string;
    desc: string;
}

const initialState = {
    title: "",
    desc: ""
}

export default function Blog() {
    const {data, isLoading} = useGetBlogsQuery("Blog")
    const [createBlog, {isLoading: createLoading}] = useCreateBlogMutation()
    const [newBlog, setNewBlog] = useState(initialState)
    const handleSubmit = (e:  React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        console.log(newBlog);
        
        createBlog(newBlog)
            .then(res=> {
                console.log(res)
                setNewBlog(initialState)
            })
            .catch(err=> console.log(err))
    }
   
    let blogs = data?.innerData?.map((el: BlogType) => <h2 key={el._id}>
        <b>{el.title}</b> - 
        <span>{el.desc}</span>
    </h2>)
    return (
      <div>
        <h2>Create blog</h2>
        <form onSubmit={handleSubmit} action="">
            <input value={newBlog.title} onChange={(e)=>setNewBlog(prev => ({...prev, title: e.target.value}))} type="text" placeholder="title" className="border-zinc-200 border" required />
            <input value={newBlog.desc} onChange={(e)=>setNewBlog(prev => ({...prev, desc: e.target.value}))} type="text" placeholder="desc" className="border-zinc-200 border" required />
            <button disabled={createLoading} className="bg-green-500 px-5">{createLoading? "Loading...": "Create blog"}</button>
        </form>
        <h2>All blogs</h2>       
        {isLoading ? <h2>Loading...</h2> : blogs}
      </div>
    )
  }