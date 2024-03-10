import express from 'express';
import multer from 'multer';
import authRoutes from './routes/authRoutes';


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(multer().none());

app.get('/', (req, res) => {
    res.send('❄️ Тест!');
});

app.use('/v1/auth', authRoutes);

app.listen(3000, function(){
    console.log("❄️  Сервер активен...");
});