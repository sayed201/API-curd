const mongoose = require('mongos')

const connectDB = async () => {
    try {
        const conn = await mongoose.connectDB(process.env.MONGO_URI, {
            useNewUrlaParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log(`Mongo DB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.log(err);
        console.log(1);
    }
}

module.exports =connectDB;