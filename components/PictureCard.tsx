import { FunctionComponent } from "react"
import { Img } from "../types"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

    

const PictureCard:FunctionComponent<{
    picture:Img,
    size:string
}> = ({
    picture:{
        name,
        description,
        image_path,
        category,
    },
    size:size
}) => {
  return (
    <Popup trigger={
      <div className="flex items-center justify-center">
        <img src={'/api/generator?name=' + image_path + '&size=' + size} alt=""/>
      </div>
      } modal on={'click'}
    >
      <div>{
        (size === 'min')? 
          "MOBILE" : 
          "DESCKTOP"
      }</div>
    </Popup>
  )
}

export default PictureCard