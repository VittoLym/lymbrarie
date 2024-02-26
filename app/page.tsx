import axios from "axios";
import Main from "./components/Main";
import SearchMain from "./components/SearchMain";
import ListBooks from "./components/ListBooks";
import HeaderMain from "./components/HeaderMain";

async function loadBooks() {
  const { data: books } = await axios.get("http://localhost:3000/api/books");
  return books;
}

async function Home() {
  const MY_BOOKS: string[] = await loadBooks();

  return (
    <Main>
      <HeaderMain />
      <SearchMain />
      <ListBooks MY_BOOKS={MY_BOOKS} />
    </Main>
  );
}

export default Home;
