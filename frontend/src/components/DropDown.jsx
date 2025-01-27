import React from 'react'
const { useState, useEffect } = React;
import axios from 'axios';


export default function DropDown() {
const [countries, setCountries] = useState([]);
const [yourCountry, setYourCountry] = useState('');

useEffect( () => {
    const fetchCountries = async () => {
        const response = await axios.get('https://restcountries.com/v3.1/all');
        console.log(response.data);
        const countryList = response.data.map( (country) => country.name.common );
        setCountries(countryList.sort());        
    }
    
    fetchCountries();
},[])

const changeHandler = (e) =>{
    e.preventDefault();
    setYourCountry(e.target.value);
}

  return (

<>      
    <div className=''>
        <div className=''> 
            
            <select className='focus:none focus:outline-0 h-14 max-w-34 rounded-lg mt-1 flex justify-center border-2 border-gray-100' value={yourCountry} onChange={changeHandler}>
                
                <option className='text-center' value="" disabled selected><span>Your Country</span><span></span></option>
                {
                    countries.map( (country, index) => {
                        return <option className='' key={index} value={country}>{country}</option>
                    } )
                }
            </select>        
        </div>
    </div>        
</>
    )
}
