// import { connectToDatabase } from "@/core/mongo/db";

// const { db } = await connectToDatabase(); 

// export async function insertProductData(data){
//     // const data = {
//     //     name : '',
//     //     slug : '',
//     //     category : '',
//     //     image : '',
//     //     price : '',
//     //     inStock : true,
//     //     about : '',
//     //     description : '',
//     //     published : new Date(),
//     //     updated : new Date(),
//     // }

//     try{
//         db.collection("products").insertOne(data)
//         return 'ok'
//     }catch{
//         return 'error'
//     }
    
// }

// export async function uploadImage(request){
//     const data = await request.formData()
//     const file = data.get('file') 
//     console.log(file)
 
//     const bytes = await file.arrayBuffer()
//     const buffer = Buffer.from(bytes)
 
//     const fileName = slugify(file.name)
//     const path = `./public/uploads/${fileName}`
//     await writeFile(path, buffer)
// }