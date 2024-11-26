// Importa o framework Express para criar e gerenciar o servidor
import express from "express";

import routes from "./src/routes/postsRoutes.js";



// Array de posts simulando uma coleção de dados com id, descrição e URL de imagem
const posts = [
    {
        id: 1,
        description: "Uma foto teste de gato",
        urlImage: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        description: "Um cachorro brincando no parque",
        urlImage: "https://placeimg.com/640/480/animals"
    },
    {
        id: 3,
        description: "Paisagem de um pôr do sol",
        urlImage: "https://source.unsplash.com/random/600x400/?sunset"
    },
    {
        id: 4,
        description: "Comida deliciosa",
        urlImage: "https://loremflickr.com/640/480/food"
    },
    {
        id: 5,
        description: "Uma cidade vibrante",
        urlImage: "https://picsum.photos/id/1018/600/400"
    },
    {
        id: 6,
        description: "Natureza exuberante",
        urlImage: "https://unsplash.com/photos/random"
    }
];

// Cria uma instância da aplicação Express
const app = express();

routes(app);

// Inicia o servidor na porta 3000 e exibe uma mensagem no console quando o servidor está ativo
app.listen(3000, () => {
    console.log("Servidor escutando...");
});
