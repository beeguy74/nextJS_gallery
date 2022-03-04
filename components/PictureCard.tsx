import { FunctionComponent } from "react"
import { Img } from "../types"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from "react";

    

const PictureCard:FunctionComponent<{ picture:Img, deviceType:string }> = 
({
    picture:{
        name,
        description,
        image_path,
        category,
    },
    deviceType:deviceType
}) => 
{
  const sizesArr = ['mic', 'min', 'med', 'big'];
  const defaultSize = ((deviceType === 'mobile')? 'mic' : 'min');
  const [size, setSize] = React.useState(defaultSize);
  const handleClick = (event: { target: { dataset: { [x: string]: any; }; }; }) => {
    const eventSize = event.target.dataset['size'];
    setSize(eventSize);
  }
  return (
    <Popup trigger={
        <img src={'/api/generator?name=' + image_path + '&size=' + defaultSize} alt=""/>
      } modal on={'click'}
    >
      <div className="grid place-items-center">
      <img src={'/api/generator?name=' + image_path + '&size=' + size} alt=""/>
      <div className="grid grid-cols-3 gap-5 m-2">
      {
        sizesArr.map((elSize:string) => {
          if ((deviceType === 'mobile' && elSize === 'big') ||
                  (deviceType !== 'mobile' && elSize === 'mic')){
            return ;
          }
          return (
            <button
              className="bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
              data-size={elSize}
              onClick={handleClick}
            >
              {elSize}
            </button>
          )
        })
      }</div></div>
    </Popup>
  )
}

export default PictureCard