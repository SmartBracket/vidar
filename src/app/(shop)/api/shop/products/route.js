import { connectToDatabase } from "@/core/mongo/db";

import shopSettings from '@/lib/shop/shopSettings'

export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request) {
  // let promise = new Promise((resolve, reject) => {
  //   setTimeout(() => resolve("готово!"), 4000)
  // });

  // let result = await promise;
  const url = new URL(request.url)

  // Фильтры
  let page = url.searchParams.has('page') ? url.searchParams.get('page') : 1
  let productsFind = {}
  let productsSort = {'_id' : 1}
  url.searchParams.forEach((value, key) => {
    switch(key){
      case 'inStock' : 
        productsFind.inStock = true
        break
      case 'category' : 
        productsFind.category = value
        break  
      case 'sortBy' :
        if(value == 'cheap') {productsSort = {'price' : 1}}
        if(value == 'expensive') {productsSort = {'price' : -1}}
        break
      default : break
    }
  })
  

  let { db } = await connectToDatabase(); 
  const prodcutsData = await db.collection("products").aggregate([
    {
      $facet : {
        'totalCount' : [{$match : productsFind},{  $count: 'count' }],
        'currentProducts' : [
          {$match : productsFind},
          {$sort : productsSort},
          { $skip: (page - 1) * shopSettings.productsPerPage },
          { $limit: 10 }
        ]
      }
    }
  ]).toArray()

  // console.log(prodcutsData)

  // return Response.json({ 'qq': 'zz' })
  // return Response.json({
  //   'prodcutCount' : 1,
  //   'productsList' : prodcutsList,
  //   'catsList' : catsList
  // })
  return Response.json(prodcutsData)
}