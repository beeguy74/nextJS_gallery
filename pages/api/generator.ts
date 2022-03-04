import fs from 'fs'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp'
import sizeView from './sizeView'


async function resize(filePath:string, resizedFilePath: string, size:string){
  try {
    if(fs.existsSync(resizedFilePath)) {
        console.log("The cache file exists.");
    } else {
        console.log('The cache file does not exist.');
        const sizeData = await sizeView(size);
        if (!sizeData){
          console.log("__Size not found!");
          return false;
        }
        await sharp(filePath)
        .resize(sizeData.width, sizeData.height, {fit: 'inside'})
        .toFile(resizedFilePath);
    }
  } catch (err) {
      console.log("Postgres error!");
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
        console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
        if (!err){
          const resizedFilePath = path.resolve('.', 'cache/' + req.query.size + '_' + req.query.name);
          const test = await resize(filePath, resizedFilePath, '' + req.query.size);
          if (test !== true){
            err = true; //server error
            break ;
          }
          imageBuffer = fs.readFileSync(resizedFilePath);
        }
        if (err){
          imageBuffer = fs.readFileSync(path.resolve('.', 'public/imageNotFound.png'));
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
