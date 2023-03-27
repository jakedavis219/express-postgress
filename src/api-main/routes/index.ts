import {EventController} from "../controllers/event-controllers";
import wrap from 'express-async-wrap';
import cors from 'cors'
import bodyParser from "body-parser";

const express = require('express')
const app = express()
const port = 3000

const router = express.Router();
app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


router.get('/', (req: any, res: any) => {
    res.send('Hello, Welcome To The Films Db')
})
router.get("/films", wrap(EventController.eventController));
router.get("/films/:id", wrap(EventController.eventControllerById));

router.post('/film', wrap(EventController.eventControllerInsertFilm))

app.use(router);
app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
})