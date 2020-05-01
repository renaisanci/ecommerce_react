const express = require('express');
const mongoose = require('mongoose');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

require('dotenv').config()


//middlewares
app.use(morgan('dev'))
app.use(bodyParser.json())

//import routes
const userRoutes    = require('./routes/user')


//APP
const app = express();


//routes
 app.use('/api',userRoutes)

const port = process.env.PORT || 8000

//arrow function
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})


//db connection
mongoose.connect(
    process.env.MONGO_URI,
    {
        useNewUrlParser: true,
        useCreateIndex: true
    }
)
    .then(() => console.log('DB Connected'))

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`)
});

//no arrow function
// app.listen(port, function () {
//     console.log(`Server is running on port ${port}`)
// })