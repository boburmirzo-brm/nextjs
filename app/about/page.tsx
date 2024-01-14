"use client";
import { useAppSelector,useAppDispatch } from "@/lib/hooks";
import { increment } from "@/lib/features/count/countSlice"

export default function About() {
  const count = useAppSelector((s) => s.count.value);
  const dispatch = useAppDispatch()
  return (
    <div>
      <h2>About page {count}</h2>
      <button className="bg-green-500 p-2 rounded-md" onClick={()=> dispatch(increment())}>increment</button>
    </div>
  );
}
