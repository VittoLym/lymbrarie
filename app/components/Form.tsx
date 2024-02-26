"use client";
import { Reference, useEffect, useRef, useState } from "react";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import { useRouter, useParams } from "next/navigation";
import InputForm from "@/app/components/InputForm";
import axios from "axios";

interface BookType {
  title: string;
  author: string;
  state: string;
  image: string;
  pages: number;
}

function Form() {
  const form: any = useRef<Reference>(null),
    router = useRouter(),
    params = useParams<Params>(),
    isEditing = params.bookId != undefined,
    [book, setBook] = useState<BookType>({
      title: "",
      author: "",
      state: "Pending",
      image: "",
      pages: 0,
    });

  useEffect(() => {
    if (isEditing) {
      axios.get(`/api/books/${params.bookId}`).then(function (res) {
        const editBook = {
          title: res.data.title,
          author: res.data.author,
          state: res.data.state,
          image: res.data.image,
          pages: res.data.pages,
        };
        setBook(editBook);
      });
    }
  }, []);

  function handleChange(event: any) {
    const key = event.target.name;
    const value = event.target.value;

    setBook({
      ...book,
      [key]: value,
    });
  }

  function handleStateChange(selectedState: any) {
    setBook({ ...book, state: selectedState });
  }

  async function newBook(event: any) {
    event.preventDefault();
    await axios.post("/api/books", book);
    form.current.reset();
    router.push("/");
    router.refresh();
  }

  async function editedBook(event: any) {
    event.preventDefault();
    await axios.put(`/api/books/${params.bookId}`, book);
    router.push(`/book/${params.bookId}`);
    router.refresh();
  }

  function cancel() {
    // if (!document.startViewTransition) {
    return router.push("/");
    // } else {
    //   document.startViewTransition(() => flushSync(() => router.push("/")));
    // }
  }

  return (
    <form
      onSubmit={isEditing ? editedBook : newBook}
      ref={form}
      className="w-full"
    >
      <title>Lymbrarie - Add book</title>
      <div className="grid gap-4 p-4">
        <InputForm
          required={true}
          value={book.title}
          title="Title"
          type="text"
          handleChange={handleChange}
          placeholder="Title of the book"
        />
        <InputForm
          value={book.author}
          title="Author"
          type="text"
          handleChange={handleChange}
          placeholder="Author of the book (optional)"
        />
        <InputForm
          placeholder="Pages amount (optional)"
          value={String(book.pages)}
          title="Pages"
          type="number"
          handleChange={handleChange}
        />
        <div>
          <InputForm
            placeholder="Link image (optional)"
            value={book.image}
            title="Image"
            type="text"
            handleChange={handleChange}
          />
          <a
            href="https://image-to-link.netlify.app"
            target="_blank"
            className="text-blue-400 text-sm underline hover:text-blue-500"
          >
            get the link of your image here
          </a>
        </div>

        <div className="flex flex-row justify-start items-center gap-x-4">
          <label htmlFor="add-book-state">State: </label>
          <select
            onChange={e => handleStateChange(e.target.value)}
            className="px-2 py-0.5 rounded-md"
            id="add-book-state"
            defaultValue={book.state}
          >
            <option disabled selected>
              Choose a option
            </option>
            <option value="Read">Read</option>
            <option value="Reading">Reading</option>
            <option value="Pending">Pending</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end pb-3 pr-3 gap-x-3">
        <button
          onClick={cancel}
          className="px-4 py-2 text-blue-500 border border-blue-500 rounded-md hover:bg-blue-50 focus:outline-none focus:ring focus:ring-blue-300 w-24"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300 w-24"
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default Form;
