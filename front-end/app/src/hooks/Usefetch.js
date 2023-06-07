import { useEffect, useState } from "react";


export const Usefetch=(url,method="GET")=>{
    const [data,setdata]=useState([]);
    const [error,seterror]=useState("");
    const [isloading,setisloading]=useState(false);
    const [option,setoption]=useState(null)

    const optiondata=(data)=>{
      if(method==="POST"){
        setoption({
          method:"POST",
          body:JSON.stringify(data),
          headers:{
            "Content-type":"application/json;charset=UTF-8",
          },
        })
      }
     else if(method==="PATCH"){
        setoption({
          method:"PATCH",
          body:JSON.stringify(data),
          headers:{
            "Content-type":"application/json;charset=UTF-8",
          },
        })
      }
    }
    useEffect(()=>{
        const fetchcourse=async(option)=>{
            setisloading(true)
          const response=await fetch(url,{...option});
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

        if(method==="GET"){
          fetchcourse()
        }
        else if((method==="POST" || method==="PATCH") && option){
          fetchcourse(option)
        }
       
      },[url,method,option])
      
      
  return {data,error,isloading,optiondata}



}