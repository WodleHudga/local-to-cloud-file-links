import mongoose from 'mongoose';


const databaseConnection = async () => {
    const mongodb_url = 'mongodb+srv://saiesh:saiesh.3699@nothing.kif73eh.mongodb.net/test';
    try {
        await mongoose.connect(mongodb_url, {useNewUrlParser: true});
        console.log('database connected succesfully');
    } catch (error) {
        console.error('error while sending data to database', error.message);
         
    }

}

export default databaseConnection;