"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu } from "react-icons/fi";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar(){
    const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "/",
      title: "Home"
    },
    {
      id: 2,
      link: "/about",
      title: "About"
    },
    {
      id: 3,
      link: "/blog",
      title: "Blog"
    },
    {
      id: 4,
      link: "/contact",
      title: "Contact"
    },
    {
      id: 5,
      link: "/docs/item/1",
      title: "Docs"
    },
  ];

  return (
    <div className="bg-black fixed w-full ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center h-20  text-white  nav">
        <div>
            {/* <h1 className="text-5xl font-signature ml-2"><a className="link-underline hover:transition ease-in-out delay-150 hover:underline hover:decoration-solid" href="">Logo</a></h1> */}
            <h1 className="text-4xl font-signature ml-2">
            <Link
                className="link-underline link-underline-black"
                href="/"
            >
                Next
            </Link>
            </h1>
        </div>

        <ul className="hidden md:flex">
            {links.map(({ id, link,title }) => (
            <li
                key={id}
                className="nav-links px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 hover:text-white duration-200 link-underline"
            >
                <Link href={link}>{title}</Link>
            </li>
            ))}
        </ul>

        <div
            onClick={() => setNav(!nav)}
            className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
            {links.map(({ id, link,title }) => (
                <li
                key={id}
                className="px-4 cursor-pointer capitalize py-6 text-4xl"
                >
                <Link onClick={() => setNav(!nav)} href={link}>
                    {title}
                </Link>
                </li>
            ))}
            </ul>
        )}
        </div>
    </div>
  );
}







// export default function Navbar() {
//   const pathname = usePathname();
//   if (pathname.includes("contact")) return <></>;
//   return (
//     <>
//       <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
//           <Link
//             href="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               Next
//             </span>
//           </Link>
//           <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
         
//             <button
//               data-collapse-toggle="navbar-sticky"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               aria-controls="navbar-sticky"
//               aria-expanded="false"
//             >
//               <span className="sr-only">Open main menu</span>
//               <FiMenu size={25}/>
//             </button>
//           </div>
//           <div
//             className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
//             id="navbar-sticky"
//           >
//             <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
//               <li>
//                 <Link
//                   href="/about"
//                   className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
//                   aria-current="page"
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/contact"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   About
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/blog"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Blog
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   href="/docs/section/item/1"
//                   className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }
