import React from 'react'
import PictureCard from '../components/PictureCard'
import { pictures } from "../data"

const gallery = () => {
  return (
    <div className="grid grid-cols-12 gap-4 my-3">
    {
      pictures.map(picture=>(
        <div className="col-span-12 sm:col-span-6 lg:col-span4 p-2">
          <PictureCard picture={picture} key={picture.name}/>

        </div>
      ))
    }
    </div>
  )
}

export default gallery