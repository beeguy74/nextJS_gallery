import React from 'react'
import PictureCard from '../components/PictureCard'
import { pictures } from "../data"
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'

const gallery = ({deviceType}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  let size:string;
  if (deviceType === 'mobile') {
    size = "min"
  }
  else {
    size = 'big'
  }
  return (
    <div className="grid grid-cols-12 gap-4 my-3">
    {
      pictures.map(picture=>(
        <div className="grid place-items-center col-span-12 sm:col-span-6 lg:col-span4 p-2" key={picture.name}>
          <PictureCard picture={picture} deviceType={deviceType}/>
        </div>
      ))
    }
    </div>
  )
}


export const getServerSideProps:GetServerSideProps = async (context) => {
  const UA = context.req.headers['user-agent'];
  const isMobile = Boolean(UA.match(
    /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
  ))
  
  return {
    props: {
      deviceType: isMobile ? 'mobile' : 'desktop'
    }
  }
}


export default gallery