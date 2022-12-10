import React, { useContext, useEffect } from "react";
import Select from "react-select";
import "../public/CityList";
import { citylist } from "../public/CityList";
import Link from 'next/link'
import { CityContext } from "../contexts/cityContext";

export default function Home() {

  const { setCity } = useContext(CityContext)


  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen">
      
      <h1 className="text-5xl font-bold mb-10  ">Welcome to Weather App</h1>
      
      <Select  placeholder="Şehir Seçiniz..." className="w-64 mb-10  " isMulti={false} onChange={setCity} options={citylist} /> 
      
      <Link className="bg-blue-300 w-28 text-white border-solid bg-backButon w-40 h-8 rounded	flex items-center justify-center" href="/detail/info">
        Next
      </Link> 

    </div>
  );
}
