<<<<<<< HEAD
import express from 'express';
import bookRoute from './routes/bookRoute.js';
import studentRoute from './routes/studentRoute.js';
=======
import express from "express";
import bookRoute from "./routes/bookRoute.js";
import studentRoute from "./routes/studentRoute.js";
>>>>>>> 70cb26e (Model, Service and Controller new)

const app = express();
app.use(express.json());
<<<<<<< HEAD
=======
app.use('/book', bookRoute);
app.use('/student', studentRoute);
>>>>>>> 70cb26e (Model, Service and Controller new)

app.use('/book', bookRoute);
app.use('/student', studentRoute);

try {
    const port = 3000;
    app.listen(port, () => { 
        console.log(`listening to port ${port}...`);
    });
} catch(e) {
    console.log(e);
<<<<<<< HEAD
}  
=======
}
>>>>>>> 70cb26e (Model, Service and Controller new)
