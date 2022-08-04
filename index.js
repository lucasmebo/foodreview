// Conectar ao express.
import express from 'express';
import dotenv from 'dotenv';

// Carregar a configuração ".env"
dotenv.config({ path: './config/config.env' });

//Rodar o server/pagina
//Variavel para para chamar o express.
const index = express();
const port = process.env.PORT || 3000;

// .listen() se conecta em uma PORTA/JANELA.
index.listen(port, console.log('Servidor rodando na porta:' + port + "..." ));

// configurando a rota da nossa primeira pagina no exemplo o "/" e "/user"
index.get('/',(req, res) => {
    res.send("Pagina inicial")
});

index.get('/user',(req, res) => {
    res.send('Olá usuario!')
});