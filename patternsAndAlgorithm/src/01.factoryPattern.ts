const createBook = (tittle: string, author: string, isbn: string) => ({
  tittle,
  author,
  isbn,
});
const book1 = createBook("harry potter", "JK Rowling", "AB123");
