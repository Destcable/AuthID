import express from 'express';
import authRoutes from './routes/authRoutes';

const app = express();

app.get('/', (req, res) => {
    res.send('❄️ Тест!');
});

app.use('/v1/auth/', authRoutes);

app.listen(3000, function(){
    console.log("❄️  Сервер активен...");
});