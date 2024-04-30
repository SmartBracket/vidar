import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import {uploadImage} from '@/lib/shop/adminActions'

import { connectToDatabase } from "@/core/mongo/db";
let mongodb = require('mongodb');
const { db } = await connectToDatabase(); 

export async function POST (request) {
    const session = await getServerSession(options)
    if(!session) {
        return new Response(null, {status: 401})
    }

    try {
        let formData = await request.formData()
        let data = {}
        for(let [name, value] of formData) {
            if(value && value != 'null') data[name] = value
        }

        // console.log(data)
        db.collection("products").updateOne(
            {_id: new mongodb.ObjectId(data._id)},
            {$set:
                {
                    name: data.name,
                    slug: data.slug,
                    category: data.category,
                    inStock: data.inStock === "true" ? true : false,
                    image: data.image,
                    price: data.price,
                    about: data.about,
                    description: data.name,
                    published: new Date(data.published),
                    updated: new Date()
                }
            }
        )
        
        return new Response({status: 200})
    } catch (error) {
        return new Response(error, {status: 400})
    }
}