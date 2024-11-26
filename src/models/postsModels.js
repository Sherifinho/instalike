import conectarAoBanco from "../config/dbConfig.js";

// Realiza a conexão com o banco de dados usando a string de conexão armazenada nas variáveis de ambiente
const conect = await conectarAoBanco(process.env.STRING_CONEXAO);

// Função para buscar todos os posts do banco de dados "instalikes" na coleção "posts"
export default async function getAllPosts(){
    const db = conect.db("instalikes") // Obtém a referência ao banco de dados
    const colecao = db.collection("posts") // Obtém a coleção "posts"
    return colecao.find().toArray() // Retorna todos os documentos da coleção como um array
};


