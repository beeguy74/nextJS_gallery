import { FunctionComponent } from "react"
import { Img } from "../types"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import React from "react";
import { MyMouseEvent } from "../types";
import { sizesArr } from "../data";

    

const PictureCard:FunctionComponent<{ picture:Img, deviceType:string }> = 
({
    picture:{
        name,
        image_path,
    },
    deviceType:deviceType
}) => 
{
  const defaultSize = ((deviceType === 'mobile')? 'mic' : 'min');
  const [size, setSize] = React.useState(defaultSize);

  // const handleClick = (event: { target: { dataset: { [x: string]: any; }; }; }) => {
  const handleClick = (event: MyMouseEvent) => {
    const eventSize = event.target.dataset['size'];
    setSize(eventSize);
  };
  return (
    <div suppressHydrationWarning={true}>
       {process.browser && <Popup trigger={
        <img src={'/api/generator?name=' + image_path + '&size=' + defaultSize} alt={name}/>
      } modal on={'click'}
    >
      <div className="grid place-items-center">
      <img src={'/api/generator?name=' + image_path + '&size=' + size} alt={name}/>
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
              key={elSize}
            >
              {elSize}
            </button>
          )
        })
      }</div></div>
    </Popup>}
    </div>
  )
}

export default PictureCard