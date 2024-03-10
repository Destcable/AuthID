import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('❄️ Тест!');
});

app.listen(3000, function(){
    console.log("❄️  Сервер активен...");
});