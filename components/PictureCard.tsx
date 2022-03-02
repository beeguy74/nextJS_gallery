import { FunctionComponent } from "react"
import { Img } from "../types"

    

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
    <div className="flex items-center justify-center">
      <img src={'/api/generator?name=' + image_path + '&size=' + size} alt=""/>
    </div>
  )
}

export default PictureCard