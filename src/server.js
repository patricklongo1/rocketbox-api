import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { resolve } from 'path';

import routes from './routes';

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

io.on('connection', socket => {
    socket.on('connectRoom', box => {
        socket.join(box);
    });
});

mongoose.connect('mongodb://localhost:27017/rocketbox', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());

app.use((req, res, next) => {
    req.io = io;

    return next();
});

app.use(express.json());

app.use('/files', express.static(resolve(__dirname, '..', 'uploads')));

app.use(routes);
server.listen(3333);
