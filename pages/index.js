import React, { use, useContext, useEffect, useState } from "react";
import Select from "react-select";
import "../public/CityList";
import { CityContext } from "../contexts/cityContext";
import { useRouter } from "next/router";
import { notify } from "./_app";



export default function Home() {
  const[list,setList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
    .then((res) => (res.json()))
    .then((res) => (setList(res.citylist)))
  },[])

  const { setCity, city } = useContext(CityContext)
  const router = useRouter();

  console.log(city)

  const navigateInfo = () => {
    router.push({
      pathname: '/detail/info',
      query: {city:city.value}
    })

  }

  const handleClick = () => {
    
    if(city.value !==undefined) {
      navigateInfo();
    } 
    else{
      notify("şehir seçiniz...");
    }
    
  }

  console.log(list)


  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      
      <h1 className="text-5xl font-bold mb-10  ">Welcome to Weather App</h1>
      
      <Select  placeholder="Şehir Seçiniz..." className="w-64 mb-10  " isMulti={false} onChange={setCity} options={list} /> 
      
      <button className="bg-blue-300 w-28 text-white border-solid bg-backButon w-40 h-8 rounded	flex items-center justify-center"  onClick={handleClick} >
        Next
      </button> 

    </div>
  );
}
