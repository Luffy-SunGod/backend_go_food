const mongoose=require('mongoose');
const url='mongodb+srv://prashantoffiical:francium@cluster0.1evtpsl.mongodb.net/'
const mongoDb=async ()=>{ 
     await mongoose.connect(url,{
       useNewUrlParser:true,
       useUnifiedTopology:true
   })
}
const main=async ()=>{
     await mongoose.connect(url)
    const {db} =  mongoose.connection;
    const data= await  db.collection('foodData').find().toArray()
    const catdata=await db.collection('foodCategory').find().toArray()
    global.food_item=data;
    global.food_cat=catdata;
    
}
main()
module.exports=mongoDb 
