
export interface Img{
  name:string,
  image_path:string,
}

export interface MyEventTarget extends EventTarget {
  dataset: {
    size:string;
  }
}

export interface MyMouseEvent extends MouseEvent {
  target: MyEventTarget
}
