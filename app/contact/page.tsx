'use client'
import { useRouter } from 'next/navigation'
export default function Contact() {
  const router = useRouter()
  
    return (
      <div>
        <h2>Contact page</h2>
        <button onClick={()=> router.push("/")}>Go home</button>
        <button onClick={()=> router.back()}>Go back</button>
      </div>
    )
  }