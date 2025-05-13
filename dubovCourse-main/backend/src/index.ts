import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import compression from 'compression';
import cors from 'cors';

import router from './router';
import mongoose from 'mongoose';

const app = express();

app.use(cors({
  credentials: true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(3001, () => {
  console.log('Server running on http://localhost:3001/');
});

const MONGO_URL = 'mongodb+srv://maksymdubovit2022:jzJm7uVANNC3k6Xq@cluster0.1flqbod.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'



mongoose.Promise = Promise;
mongoose.connect(MONGO_URL,)
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));

app.use('/', router());
