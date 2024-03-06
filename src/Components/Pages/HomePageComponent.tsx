import React, { useEffect, useState } from 'react'
import { getDigimon } from '../../Dataservices/DataServices'
import { Idigimon } from '../../Interface/Interfaces';
import DigimonInfoComponent from '../DigimonInfoComponent';

const HomePageComponent = () => {

  const digiDefault: Idigimon = {
    level: "",
    img: "",
    name: ""
  }
  
  const [digimon, setDigimon] = useState<Idigimon>(digiDefault);

  // const [digimon, setDigimon] = useState<Idigimon>();


   useEffect(() => {
    const getData = async () => {
      const digiData = await getDigimon();
      console.log(digiData)
      setDigimon(digiData);
    }
    getData();
   },[])

  return (
    <div>
      <h1>This is Our Home Page</h1>
      {/* && */}
      {/* Digimon name: {digimon && digimon.name} Digimon Rank : {digimon && digimon.level} */}
      {digimon ? digimon.name + " " + digimon.level : 'still loading'}
      <DigimonInfoComponent digimonName={digimon.name} digimonLevel={digimon.level} digimonImg={digimon.img} />
    </div>
  )
}

export default HomePageComponent
