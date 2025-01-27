// import React from 'react'

const SearchBox = () => {
    return (
      <div className="bg-slate-200 rounded-lg max-h-14 flex items-center mt-1 p-2">
        <input 
          type="text" 
          className="w-full min-h-12 border-none focus:outline-none" 
          placeholder="Search..." 
        />
        <button className="min-h-6 focus:outline-0 bg-amber-200">
            Serach Logo
        </button>
     </div>
    );
};
  
  

export default SearchBox;
