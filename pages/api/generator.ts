import fs from 'fs'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp'
import sizeView from './sizeView'


async function resize(filePath:string, resizedFilePath: string, size:string){
  try {
    if(fs.existsSync(resizedFilePath)) {
    } else {
        const sizeData = await sizeView(size);
        if (!sizeData){
          return false;
        }
        await sharp(filePath)
        .resize(sizeData.width, sizeData.height, {fit: 'inside'})
        .toFile(resizedFilePath);
    }
  } catch (err) {
      console.log("Catch db error!", err)
      return false;
  }
  return true;
}

export default async function generator(req: NextApiRequest, res:NextApiResponse) {
    switch (req.method) {
      case 'GET':
        const filePath = path.resolve('.', 'gallery/' + req.query.name)

        let err = !fs.existsSync(filePath);
        let imageBuffer: any;
        if (!err){
          const resizedFilePath = path.resolve('.', 'cache/' + req.query.size + '_' + req.query.name);
          const test = await resize(filePath, resizedFilePath, '' + req.query.size);
          if (test !== true){
            console.log("Server error!")
            err = true; //server error
            break ;
          }
          imageBuffer = fs.readFileSync(resizedFilePath);
        }
        if (err){
          imageBuffer = fs.readFileSync(path.resolve('.', 'public/imageNotFound.png'));
          console.log("imageNotFound sended!")
        }
        res.setHeader('Content-Type', 'image/jpg');
        res.send(imageBuffer);
        break ;
      default:
        res.status(405).end(); //Method Not Allowed
        break ;
    }
    return true;
}
