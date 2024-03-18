import { writeFile } from 'fs/promises'
import slugify from 'slugify'

export async function uploadImage(file, dir){
    const bytes = await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
 
    const fileName = slugify(file.name)
    const path = `/${dir}/${fileName}`
    const serverPath = `./public/${dir}/${fileName}`
    await writeFile(`${serverPath}`, buffer)
    
    return path
}