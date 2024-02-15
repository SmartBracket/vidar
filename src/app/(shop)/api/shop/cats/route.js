import { connectToDatabase } from "@/core/mongo/db";
import shopSettings from '@/lib/shop/shopSettings'

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
  let { db } = await connectToDatabase();
  // Категории
  const results = await db.collection("products").aggregate([
    { 
      $group: { _id: "$category", count: { $sum: 1 } },
    },
    {$sort: {'_id': 1}}
  ]).toArray();

  
  return Response.json(results)
}