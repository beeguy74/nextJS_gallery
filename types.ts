
export interface Img{
  name:string,
  description:string,
  image_path:string,
  category: Category[];
}

export type Category = "paris"|"london"|"tokyo"|"city"|"day"|"night";