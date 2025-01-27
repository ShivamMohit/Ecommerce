// import React from 'react'
import DropDown from './DropDown';
import SearchBox from './SearchBox';

const BelowNav = () => {
  return (
    <>
        <div className='grid grid-cols-12 px-10 h-16 mt-2'>
            <div className='sm:col-span-2 flex items-center justify-end'>
                <img className='w-25 opacity-72 hover:opacity-65 rounded-lg' src='Elogo.jpg' alt=''/>
            </div>

            <div className='sm:col-span-2 hover:opacity-65 flex justify-center'>
                <DropDown/>
            </div>

            <div className='sm:col-span-5'>
                <SearchBox/>
            </div>

            <div className='sm:col-span-3 b flex items-center justify-items-start flex-row'>
                <div className='w-12 h-12  rounded-full hover:opacity-65 border-2 border-gray-100 flex mr-16 items-center justify-center ml-10 active:bg-gray-500 active:scale-95'>
                    Adm
                </div>
                <div className="relative w-11 h-11 rounded-full bg-slate-200 ml-12 active:bg-gray-500 active:scale-95">
 
                    <div className="w-full h-full flex items-center justify-items-start text-xl hover:opacity-65 ">
                        Cart
                     </div>
 
                    <div className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                        10
                    </div>
</div>
                
            </div>
        </div>
    </>
  )
}

export default BelowNav;
