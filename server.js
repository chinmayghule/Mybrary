import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import expressEjsLayouts from 'express-ejs-layouts';
import mongoose from 'mongoose';
import * as url from 'url';
import { indexRouter } from './routes/index.js';

const __dirname = url.fileURLToPath( new URL('.', import.meta.url) );

const app = express();

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.set('layout', 'layouts/layout.ejs');
app.use(expressEjsLayouts);
app.use(express.static('public'));

// connect to database
mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', (err) => console.log(err.message));
db.once('open', () => console.log('Connected to Mongoose'));



app.use('/', indexRouter);


app.listen(process.env.PORT || 3000, '127.0.0.1');