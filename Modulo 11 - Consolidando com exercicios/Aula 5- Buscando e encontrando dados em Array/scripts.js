/*
    Buscando e encontrando dados em Arrays

    Baseado no Array de libros por categoria abaixo, faca os seguintes desafios

        * contar o numero de categorias e o numero de livros em cada categoria
        * contar o numero de autores
        * mostrarlivros do autor Augusto cury
        * Transformar a funcao acima em uma funcao que ira receber o nome do autor e devolver os 
            livros desse autor.
*/
const booksByCategory = [
    {
        category: "riqueza",
        books: [
            {
                tittle: "Os segredos da mente milionaria",
                author: "T. Harv Eker",
            },
            {
                tittle: "O homem mais rico da Babilonia",
                author: "George S. Clason",
            },
            {
                tittle: "Pai rico, Pai pobre",
                author: "Robert T. Kiyosaki e Saron L. Lechter",
            },
            
        ],
    },
    {
        category: "Inteligencia emocional",
        books: [
            {
                tittle: "Voce e insubstituivel",
                author: "Augusto Cury",
            },
            {
                tittle: "Ansiedade - como enfrentar o mal do seculo",
                author: "Augusto Cury",
            },
            {
                tittle: "Os 7 habitos das pessoas altamente eficazes",
                author: "Augusto Cury",
            },
            
        ],
    },
];

let categories = 0;
let booksOnFirstCategory = {Name: booksByCategory[0].category, numberOfBooks: booksByCategory[0].books.length}
let booksOnSecondCategory = {Name: booksByCategory[1].category, numberOfBooks: booksByCategory[1].books.length}
let authors =[];


for(let i = 0; i < booksByCategory.length; i++){
    categories += 1

    for(let j = 0; j < booksByCategory[i].books.length; j++){
        if(booksByCategory[i].books[j].author != temp){
            authors.push(booksByCategory[i].books[j].author)
        }
        var temp = booksByCategory[i].books[j].author
    }

}

function showBooksByAuthor(author) {
    for(let i = 0; i < booksByCategory.length; i++){
        for(let j = 0; j < booksByCategory[i].books.length; j++){
            if(booksByCategory[i].books[j].author.toLocaleLowerCase() == author.toLowerCase()){
                console.log(booksByCategory[i].books[j].tittle)
            }
        }
    }
}

console.log(`Nossa base de dados conta com ${categories} categorias de Livros e ${authors.length} Autores
Na categoria ${booksOnFirstCategory.Name} temos ${booksOnFirstCategory.numberOfBooks} livros
E na categoria ${booksOnSecondCategory.Name} temos ${booksOnSecondCategory.numberOfBooks} livros`)

showBooksByAuthor('T. Harv Eker')