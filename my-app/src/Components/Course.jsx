import React,{useEffect,useState} from 'react'

import Cards from './Cards'
import {Link} from 'react-router-dom'
import axios from 'axios'
import bookLib from '../bookLib.jpg'
function Course() {
  const [book,setBook]=useState([]);
  useEffect(()=>{
    const getBook=async()=>{
      try{
     const res =await axios.get("http://localhost:4001/book")
     console.log(res.data);
     setBook(res.data);
      }catch(error){
        console.log("Error:",error);
      }
    };
    getBook();

  },[])
  return (
  <>
  <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 " >
  <div  className="mt-28 items-center justify-center text-center">
    <h1 className="text-2xl  md:text-4xl">A Book is a House of
      <span className="text-pink-500"> Hopes!</span>
      </h1>
    <img src={bookLib} className="bookLib"/>
    <Link to="/">
    <button className='bg-blue-500 mt-6 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300 cursor-pointer'>
      Back</button>  
    </Link>

  </div>
   
   <div className="mt-12 grid grid-cols md:grid-cols-4">
   {book.map((item)=>(
    <Cards key={item.id} item={item}/>
   ))
   }
    </div>
    </div> 
    </>
  )
}

export default Course
