import { connectToDatabase } from "@/core/mongo/db";
const { db } = await connectToDatabase(); 

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

import {uploadImage} from '@/lib/shop/adminActions'


export async function POST (request) {
    const session = await getServerSession(options)
    if(!session) {
        return new Response(null, {status: 401})
    }

    try {
        let formData = await request.formData()
        let data = {}
        for(let [name, value] of formData) {
            data[name] = value
        }

        db.collection("articles").insertOne({
            name: data.name,
            slug: data.slug,
            category: data.category,
            image: data.image,
            about: data.about,
            description: data.name,
            published: new Date(),
            updated: new Date()
        })
        
        return new Response({status: 200})
    } catch (error) {
        return new Response(error, {status: 400})
    }
}