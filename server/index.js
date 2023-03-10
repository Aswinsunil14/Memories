import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Cors from "cors";
import dotenv from 'dotenv';
import postRoutes from './routes/posts.js'


const app = express();
dotenv.config();


app.use(bodyParser.json({limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({limit: "30mb", extended:true}))
app.use(Cors())

app.use('/posts', postRoutes)

// const CONNECTION_URL = 'mongodb+srv://Memories:Memories123@cluster0.tujfgtd.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 7000

mongoose.set("strictQuery", false);
mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => app.listen(PORT, () => console.log('server running on port:' + PORT)))
.catch((error) => console.log(error.message))


