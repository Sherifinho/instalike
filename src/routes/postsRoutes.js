import express from "express";
import { listarPosts } from "../controllers/postsController.js";

const routes = (app) => {
    // Middleware para permitir o parse de dados no formato JSON em requisições
    app.use(express.json())
    // Rota para buscar todos os posts cadastrados
    app.get("/posts", listarPosts);
}


export default routes;
