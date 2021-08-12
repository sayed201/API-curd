const express =require ('express')
const dotenv =require('dotenv')

const app = express();

// app.get('/',(req,res)=>{
//     res.send('hello word')
// })

// app.get('/employee',(req,res)=>{
//     res.send('employ')
// })

const connectDB = require('./config/db')


//Load config
dotenv.config({ path:  './config/config.env'})

connectDB()

//Routes
app.use('/abc',require('./routes/index'))

const port = process.env.PORT || 2222
app.listen(port,()=>console.log('server is running 2222...'))