import { useEffect, useState } from "react";


export const Usefetch=(url,method="GET")=>{
    const [data,setdata]=useState([]);
    const [error,seterror]=useState("");
    const [isloading,setisloading]=useState(false)
    useEffect(()=>{
        const fetchcourse=async()=>{
            setisloading(true)
          const response=await fetch(url);
          const jsonresponse=await response.json();
      
          if(response.ok){
            setdata(jsonresponse);
            console.log(jsonresponse);
            setisloading(false)
          }
          if(!response.ok){
            seterror(jsonresponse.error)
            console.log(error);
            setisloading(false)
          }
        }
        fetchcourse()
      },[url])
      
      
  return {data,error,isloading}



}