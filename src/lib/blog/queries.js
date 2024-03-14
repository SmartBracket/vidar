import { cache } from 'react'
import { connectToDatabase } from "@/core/mongo/db";

const { db } = await connectToDatabase(); 

export async function getAllArticlesData(){
  const fetchResult = await db.collection("articles").find({}).toArray()
  const result = JSON.parse(JSON.stringify(fetchResult))
  // console.log(result)
  return result
}

export const getArticlesData = cache(async (pageParams) =>{
    let dbPage = pageParams.page ? pageParams.page : 1
    let dbFindQuery = {}
    let dbSortQuery = {'_id' : 1}

    for(let key in pageParams){
        switch(key){
            case 'category' : 
                dbFindQuery.category = pageParams[key]
              break  
            // case 'sortBy' :
            //   if(pageParams[key] == 'cheap') dbSortQuery = {'price' : 1}
            //   if(pageParams[key] == 'expensive') dbSortQuery = {'price' : -1}
            //   break
            default : break
        }
    }

    // console.log('FindQuery', dbFindQuery)
    // console.log('SotrQuery', dbSortQuery)
    // console.log('Page', dbPage)

    const fetchResult = await db.collection("articles").aggregate([
        {
          $facet : {
            'totalCount' : [{$match : dbFindQuery},{  $count: 'count' }],
            'currentArticles' : [
              {$match : dbFindQuery},
              {$sort : dbSortQuery},
              {$skip: (dbPage - 1) * 10},
              {$limit: 10}
            ]
          }
        }
    ]).toArray()

    const result = JSON.parse(JSON.stringify(fetchResult[0]))
    return result
})

export const getArticle = cache(async (slug) => {
  const article = await db.collection('articles').find({'slug' : slug}).limit(1).toArray()
  return JSON.parse(JSON.stringify(article[0]))
})
