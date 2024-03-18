import { connectToDatabase } from "@/core/mongo/db";
let mongodb = require('mongodb');
const { db } = await connectToDatabase(); 

import { options } from "@/app/api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"

export async function POST (request) {
    const session = await getServerSession(options)
    if(!session) {
        return new Response(null, {status: 401})
    }
    
    const body = await request.json()

    try {
        await db.collection("articles").deleteOne({_id: new mongodb.ObjectId(body.id)})
        return new Response({status: 200})
    } catch (error) {
        return new Response(error, {status: 400})
    }
}