import express from 'express';
import mongoose from 'mongoose';
import diseaseRouter from './api/routes/diseaseRouter';
import symptomsRouter from './api/routes/symptomsRouter';
import subSymptomsRouter from './api/routes/subSymptomsRouter';
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT || 3000;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/SistemGastroUsus');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

diseaseRouter(app);
symptomsRouter(app);
subSymptomsRouter(app);

app.listen(port, () => {
    console.log(`Sistem Gastro Usus berjalan pada: http://localhost:${ port }/`);
});