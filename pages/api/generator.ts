import fs from 'fs'
import path from 'path'
import type { NextApiRequest, NextApiResponse } from 'next'
import sharp from 'sharp'
import sizeView from './sizeView'
import { triggerAsyncId } from 'async_hooks'


async function resize(filePath:string, resizedFilePath: string, size:string){
  try {
    if(fs.existsSync(resizedFilePath)) {
        console.log("The cache file exists.");
    } else {
        console.log('The cache file does not exist.');
        const sizeData = await sizeView(size);
        await sharp(filePath)
        .resize(sizeData.width, sizeData.height, {fit: 'inside'})
        .toFile(resizedFilePath);
    }
  } catch (err) {
      return false;
  }
  return true;
}

export default async function generator(req: NextApiRequest, res:NextApiResponse) {
    switch (req.method) {
      case 'GET':
        const filePath = path.resolve('.', 'gallery/' + req.query.name)

        const err = !fs.existsSync(filePath);
        console.log(`${filePath} ${err ? 'does not exist' : 'exists'}`);
        if (err){
          res.status(404).end(); //was not found
        }
        else {
          const resizedFilePath = path.resolve('.', 'cache/' + req.query.size + '_' + req.query.name);
          const test = await resize(filePath, resizedFilePath, '' + req.query.size);
          if (test !== true){
            res.status(500).end(); //server error
            break ;
          }
          const imageBuffer = fs.readFileSync(resizedFilePath);
          res.setHeader('Content-Type', 'image/jpg');
          res.send(imageBuffer);
        }
        break ;
      default:
        res.status(405).end(); //Method Not Allowed
        break ;
    }
    return true;
}
