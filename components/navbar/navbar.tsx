"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
    const pathname = usePathname()
    if(pathname.includes("contact"))return <></>
    return (
        <div className='h-14 flex gap-10 px-20 items-center bg-sky-400 text-white'>
            <h1 className='text-2xl font-semibold'>Navbar</h1>
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/docs/section/item/1">Docs</Link>
        </div>
    )
}
  