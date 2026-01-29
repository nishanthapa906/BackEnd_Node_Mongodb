import mongoose from 'mongoose';

const connectDb =  async ()=>{
   try { await 
    mongoose.connect("mongodb://localhost:27017/h58")  //new connection bata copy garni compass 
    console.log('DataBase is connected')
   }

   catch {
    console.log('error')
   }
}

connectDb()


export default connectDb;