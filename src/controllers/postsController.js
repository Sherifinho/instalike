import getAllPosts from "../models/postsModels.js";

export async function listarPosts(req, res) {
    const posts = await getAllPosts() // Obtém os posts do banco de dados
    res.status(200).json(posts); // Retorna os posts no formato JSON com status HTTP 200 (OK)
};

// Função para buscar o índice de um post no array "posts" pelo id
export async function searchPostId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id) // Compara o id informado com os ids dos posts
    })
};