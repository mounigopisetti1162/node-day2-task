import express from 'express'
import { MongoClient } from 'mongodb'
import * as dotenv from 'dotenv'
// const rooms=[
//     {
//      "Room": "Hillsboro",
//      "Bookedstatus": true,
//      "customerName": "Annamae",
//      "date": "2023-01-19",
//      "startTime": "92116",
//      "endTime": "2023-01-20T06:52:03.930Z",
//      "id": "1"
//     },
//     {
//      "Room": "Pharr",
//      "Bookedstatus": false,
//      "customerName": "Quinn",
//      "date": "2023-01-19",
//      "startTime": "6969",
//      "endTime": "2023-01-20T06:52:03.930Z",
//      "id": "2"
//     },
//     {
//      "Room": "Bowling Green",
//      "Bookedstatus": false,
//      "customerName": "Fabian",
//      "date": "2023-01-14",
//      "startTime": "72442",
//      "endTime": "2023-01-20T06:52:03.931Z",
//      "id": "3"
//     },
//     {
//      "Room": "Duluth",
//      "Bookedstatus": true,
//      "customerName": "Lindsey",
//      "date": "2023-01-12",
//      "startTime": "19469",
//      "endTime": "2023-01-20T06:52:03.931Z",
//      "id": "4"
//     },
//     {
//      "Room": "Wellington",
//      "Bookedstatus": false,
//      "customerName": "Margarete",
//      "date": "2023-01-1",
//      "startTime": "47268",
//      "endTime": "2023-01-20T06:52:03.931Z",
//      "id": "5"
//     },
//     {
//      "Room": "Pocatello",
//      "Bookedstatus": true,
//      "customerName": "Sherwood",
//      "date": "2023-01-20T00:21:53.931Z",
//      "startTime": "7346",
//      "endTime": "2023-01-20T06:52:03.931Z",
//      "id": "6"
//     }, {
//         "Room": "Hillsboro",
//         "Bookedstatus": true,
//         "customerName": "Annamae",
//         "date": "2023-01-19",
//         "startTime": "92116",
//         "endTime": "2023-01-20T06:52:03.930Z",
//         "id": "1"
//        }]
// const customers=[{"Room": "Pocatello",

// "customerName": "Sherwood",
// "date": "2023-01-20T00:21:53.931Z",
// "startTime": "7346",
// "endTime": "2023-01-20T06:52:03.931Z",
// "id": "6"},  {
//     "Room": "Duluth",
    
//     "customerName": "Lindsey",
//     "date": "2023-01-12",
//     "startTime": "19469",
//     "endTime": "2023-01-20T06:52:03.931Z",
//     "id": "4"
//    },]
const app=express()
dotenv.config()
const PORT=process.env.PORT
const MONGO_URL=process.env.MONGO_URL
const client=new MongoClient(MONGO_URL)
await client.connect()
console.log("mongo connect")
app.use(express.json());

app.get('/',function(request,responce){
    responce.send('This🙋‍♂️ is, 🌏  an hall🎊 booking✨ application🤩=====>>>>"/customer=to show customers","/room= to show the rooms"')

})
app.get('/room',async function(request,responce){
    responce.send([
        {
            Room_Name:'Consert-Hall',
            amentities:['500 cushion-chairs','AC-available','Projector avalilable','stage','7.1 speaker surrounding'],
            price_for_an_hour:'₹ 15,000'
        },
        {
            Room_Name:'Marriage-Hall',
            amentities:['350 cushion-chairs','AC-available','stage',],
            price_for_an_hour:'₹ 8,000'
        },
        {
            Room_Name:'Party-Hall',
            amentities:['300 cushion-chairs','AC-available','stage','5.1 speaker surrounding'],
            price_for_an_hour:'₹ 7,000'
        }
      ])

})
app.get('/customer',async function(request,responce){
    const customer=await client.db("test").collection("hallBooking").find({}).toArray()
    console.log(customer.Bookedstatus)
    responce.send(customer)
    })
app.post('/customer',async function(request,responce){
    const data=request.body;
    console.log(data)
    const newmovies=await client.db("test").collection("hallBooking").insertMany(data)
    responce.send(newmovies)
})
app.post("/room",async function(request,responce)
{
    const data=request.body;
    console.log(data)
    const newroom=await client.db("test").collection("hallBooking").insertMany(data)
    responce.send(newroom)
})
app.listen(PORT,()=>console.log(`The server started at port ${PORT} 🌏` ))
