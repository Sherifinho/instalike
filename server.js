import express from "express";

const posts = [
    {
        id: 1,
        description: "Uma foto teste de gato",
        image: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        description: "Um cachorro brincando no parque",
        image: "https://placeimg.com/640/480/animals"
    },
    {
        id: 3,
        description: "Paisagem de um pôr do sol",
        image: "https://source.unsplash.com/random/600x400/?sunset"
    },
    {
        id: 4,
        description: "Comida deliciosa",
        image: "https://loremflickr.com/640/480/food"
    },
    {
        id: 5,
        description: "Uma cidade vibrante",
        image: "https://picsum.photos/id/1018/600/400"
    },
    {
        id: 6,
        description: "Natureza exuberante",
        image: "https://unsplash.com/photos/random"
    }
];


const app = express();

app.use(express.json())

app.listen(3000, () => {
    console.log("Servidor escutando...");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function searchPostId(id) {
    return posts.findIndex((post) => {
        return post.id === Number(id)
    })
};

app.get("/posts/:id", (req, res) => {
    const index = searchPostId(req.params.id)
    res.status(200).json(posts[index]);
});
