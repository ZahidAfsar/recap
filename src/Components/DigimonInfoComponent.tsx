import React from 'react'
import { idigiProps } from '../Interface/Interfaces'

const DigimonInfoComponent = (props: idigiProps) => {
  return (
    <div>
    <h1>Digimon Name: {props.digimonName}</h1>
    <h1>Digimon Rank : {props.digimonLevel}</h1>
    <img src={props.digimonImg} alt='agumon' />
    </div>
  )
}

export default DigimonInfoComponent
