"use client";
import { useState, useEffect } from "react";
import { animated, useSpring } from "@react-spring/web";
import BookCard from "./BookCard";
import { inputSearch, checkboxValue } from "../context/AppContext";
import { useRecoilState } from "recoil";

function ListBooks({ MY_BOOKS }: { MY_BOOKS: string[] }) {
  const [getValue] = useRecoilState(inputSearch),
    [getSelectStateValue] = useRecoilState(checkboxValue),
    [loaded, setLoaded] = useState<boolean>(false),
    { opacity } = useSpring<object>({
      from: { opacity: 0 },
      to: { opacity: 1 },
      reset: true,
      config: { duration: 500 },
      immediate: !loaded,
    });

  useEffect(() => setLoaded(true), []);

  function allBooks() {
    const all = MY_BOOKS.map((book: any) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        state={book.state}
        image={book.image}
      />
    ));

    return all.length > 0 ? all : "Add your first book!";
  }

  function filterByValue() {
    const value = getValue.trim().toLowerCase();
    const booksFiltered = MY_BOOKS.filter(
      (book: any) =>
        book.title.toLowerCase().includes(value.toLowerCase()) ||
        book.author.toLowerCase().includes(value.toLowerCase())
    ).map((book: any) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        state={book.state}
        image={book.image}
      />
    ));
    return booksFiltered.length > 0 ? (
      booksFiltered
    ) : (
      <p className="text-gray-200 text-2xl">No matches...</p>
    );
  }

  function filterByCheck() {
    const booksFiltered = MY_BOOKS.filter(
      (book: any) =>
        book.state.toLowerCase() == getSelectStateValue.toLowerCase()
    ).map((book: any) => (
      <BookCard
        key={book.id}
        id={book.id}
        title={book.title}
        author={book.author}
        state={book.state}
        image={book.image}
      />
    ));

    return booksFiltered.length > 0 ? (
      booksFiltered
    ) : (
      <p className="text-gray-200 text-2xl">No matches...</p>
    );
  }

  function filterByValueAndCheck() {
    const value = getValue.trim().toLowerCase();
    const booksFiltered = MY_BOOKS.filter(
      (book: any) =>
        book.state.toLowerCase() == getSelectStateValue.toLowerCase()
    )
      .filter(
        (book: any) =>
          book.title.toLowerCase().includes(value) ||
          book.author.toLowerCase().includes(value)
      )
      .map((book: any) => (
        <BookCard
          key={book.id}
          id={book.id}
          title={book.title}
          author={book.author}
          state={book.state}
          image={book.image}
        />
      ));

    return booksFiltered.length > 0 ? (
      booksFiltered
    ) : (
      <p className="text-gray-200 text-2xl">No matches...</p>
    );
  }

  return (
    <animated.ul
      style={{ opacity }}
      className="grid gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full"
    >
      {!getValue && !getSelectStateValue && allBooks()}
      {getValue && !getSelectStateValue && filterByValue()}
      {!getValue && getSelectStateValue && filterByCheck()}
      {getValue && getSelectStateValue && filterByValueAndCheck()}
    </animated.ul>
  );
}

export default ListBooks;
