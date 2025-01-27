// import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <>
        <div className='grid sm:grid-cols-12 justify-center m-6 items-center text-center'>
            <div className='sm:col-span-5 flex rounded-2xl justify-evenly items-center align-middle flex-col'>
                
                    <p className="relative bg-blue-300 rounded-3xl p-2 w-40 font-medium block">
                        <Link className='block'>All Categories</Link> 
                        {/* <li></li> */}
                    </p> 
                
                

            </div>
            <div className='flex gap-2 pl-2 sm:col-span-7  rounded-2xl justify-evenly items-center align-middle '>
                <ul className="w-full flex gap-10 align-middle items-center ">
                    <li className="relative group px-4 py-2 text-sm font-bold uppercase rounded-4xl cursor-pointer hover:text-blue-400 hover:bg-blue-50 ">
                    <Link to="/" className="block">
                        Home
                    </Link>
                    
                    <div className="absolute left-0 top-full  hidden group-hover:flex flex-col  bg-white shadow-lg rounded-lg p-2 w-40">
                        <Link to="/clothing" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Clothing
                        </Link>
                        <Link to="/footwear" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Footwear
                        </Link>
                        <Link to="/watches" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Watches
                        </Link>
                    </div>
                    </li>
                    <li className="relative group px-4 py-2 text-sm font-bold uppercase rounded-4xl cursor-pointer hover:text-blue-400 hover:bg-blue-50 ">
                    <Link to="/" className="block">
                        Men
                    </Link>
                    
                    <div className="absolute left-0 top-full  hidden group-hover:flex flex-col  bg-white shadow-lg rounded-lg p-2 w-40">
                        <Link to="/clothing" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Clothing
                        </Link>
                        <Link to="/footwear" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Footwear
                        </Link>
                        <Link to="/watches" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Watches
                        </Link>
                    </div>
                    </li>
                    <li className="relative group px-4 py-2 text-sm font-bold uppercase rounded-4xl cursor-pointer hover:text-blue-400 hover:bg-blue-50 ">
                    <Link to="/" className="block">
                        Women
                    </Link>
                    
                    <div className="absolute left-0 top-full  hidden group-hover:flex flex-col  bg-white shadow-lg rounded-lg p-2 w-40">
                        <Link to="/clothing" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Clothing
                        </Link>
                        <Link to="/footwear" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Footwear
                        </Link>
                        <Link to="/watches" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Watches
                        </Link>
                    </div>
                    </li>
                    <li className="relative group px-4 py-2 text-sm font-bold uppercase rounded-4xl cursor-pointer hover:text-blue-400 hover:bg-blue-50 ">
                    <Link to="/" className="block">
                        Beauty
                    </Link>
                    
                    <div className="absolute left-0 top-full  hidden group-hover:flex flex-col  bg-white shadow-lg rounded-lg p-2 w-40">
                        <Link to="/clothing" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Clothing
                        </Link>
                        <Link to="/footwear" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Footwear
                        </Link>
                        <Link to="/watches" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Watches
                        </Link>
                    </div>
                    </li>
                    <li className="relative group px-4 py-2 text-sm font-bold uppercase rounded-4xl cursor-pointer hover:text-blue-400 hover:bg-blue-50 ">
                    <Link to="/" className="block">
                        Watches
                    </Link>
                    
                    <div className="absolute left-0 top-full  hidden group-hover:flex flex-col  bg-white shadow-lg rounded-lg p-2 w-40">
                        <Link to="/clothing" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Clothing
                        </Link>
                        <Link to="/footwear" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Footwear
                        </Link>
                        <Link to="/watches" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Watches
                        </Link>
                    </div>
                    </li>
                    <li className="relative group px-4 py-2 text-sm font-bold uppercase rounded-4xl cursor-pointer hover:text-blue-400 hover:bg-blue-50 ">
                    <Link to="/" className="block">
                    Kids
                    </Link>
                    
                    <div className="absolute left-0 top-full  hidden group-hover:flex flex-col  bg-white shadow-lg rounded-lg p-2 w-40">
                        <Link to="/clothing" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Clothing
                        </Link>
                        <Link to="/footwear" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Footwear
                        </Link>
                        <Link to="/watches" className="px-4 py-2 hover:bg-blue-100 active:bg-gray-400 hover:scale-105 rounded-md text-gray-700">
                        Watches
                        </Link>
                    </div>
                    </li>


                    {/* <li className="px-4 py-2 rounded-4xl text-sm font-bold  uppercase hover:text-blue-400 hover:bg-blue-50 active:bg-gray-300 active:scale-95">
                        <Link to="/about">Men</Link>
                    </li>
                    <li className="px-4  py-2 rounded-4xl text-sm font-bold  uppercase hover:text-blue-400 hover:bg-blue-50 active:bg-gray-300 active:scale-95">
                        <Link to="/contact">Women</Link>
                    </li>
                    <li className="px-4  py-2 rounded-4xl text-sm font-bold  uppercase hover:text-blue-400 hover:bg-blue-50 active:bg-gray-300 active:scale-95">
                        <Link to="/demo1">Beauty</Link>
                    </li>
                    <li className="px-4  py-2 rounded-4xl text-sm font-bold  uppercase hover:text-blue-400 hover:bg-blue-50 active:bg-gray-300 active:scale-95">
                        <Link to="/demo2">Watches</Link>
                    </li>
                    <li className="px-4  py-2 rounded-4xl text-sm font-bold  uppercase hover:text-blue-400 hover:bg-blue-50 active:bg-gray-300 active:scale-95">
                        <Link to="/demo2">Kids</Link>
                    </li> */}
                </ul>
                {/* <hr class="my-4 border-t-2 border-gray-300" /> */}

                
            </div>
        </div>
    </>
)
}

export default NavBar
