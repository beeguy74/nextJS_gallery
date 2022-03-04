
import React from "react";

export interface Img{
  name:string,
  image_path:string,
}

export interface MyEventTarget extends EventTarget {
  dataset: {
    size:string;
  }
}

export interface MyMouseEvent extends React.MouseEvent<HTMLButtonElement> {
  target: MyEventTarget
}
