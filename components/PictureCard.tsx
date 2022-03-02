import { FunctionComponent } from "react"
import { Img } from "../types"

    

const PictureCard:FunctionComponent<{
    picture:Img
}> = ({
    picture:{
        name,
        description,
        image_path,
        category,
    }
}) => {
  return (
    <div className="flex items-center justify-center">
      <img src={'/api/generator?name=' + image_path + '&size=' + 'big'} alt=""/>
    </div>
  )
}

export default PictureCard