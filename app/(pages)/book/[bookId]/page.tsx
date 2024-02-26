import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import axios from "axios";
import ButtonsBook from "@/app/components/ButtonsBook";
import { BackSVG, PendingSVG, ReadSVG, ReadingSVG } from "@/app/svg";
import EditorNotes from "@/app/components/EditorNotes";

async function loadBook(id: string) {
  const { data } = await axios.get(`http://localhost:3000/api/books/${id}`);
  return data;
}

async function BookId({ params }: Params) {
  const BOOK = await loadBook(params.bookId);

  function getStateSVG() {
    switch (BOOK.state) {
      case "Read":
        return <ReadSVG />;

      case "Reading":
        return <ReadingSVG />;

      default:
        return <PendingSVG />;
    }
  }

  return (
    <section className=" pt-20 flex flex-col justify-center items-center w-full gap-y-6">
      <BackSVG route="/" />
      <article className=" w-[700px] h-[308px] flex flex-row justify-start items-start  bg-slate-200 rounded-md p-1">
        <Image
          className="aspect-[200/300] w-[200px] h-[300px] object-center object-fill rounded-md"
          src={BOOK.image}
          width={100}
          height={100}
          alt="cover image"
        />

        <div className="flex flex-col justify-end items-start w-full h-full ">
          <div className="flex h-full flex-col px-4 pt-2 gap-y-2">
            <h4 className="text-3xl font-bold tracking-tight text-balance">
              {BOOK.title}
            </h4>
            <p className="text-md text-gray-800 mb-2">{BOOK.author}</p>
            <span className="text-sm text-gray-700"> &apos; Ciencia </span>

            <div className="flex items-center gap-x-2 text-gray-900">
              {getStateSVG()}
              <span className="text-sm text-gray-700"> {BOOK.state} </span>
            </div>
            <div className="flex items-center gap-2 pl-[1.8px]">
              <svg
                className="h-5 w-5 text-gray-800"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
              <span className="text-sm text-gray-700"> {BOOK.pages} pages</span>
            </div>
          </div>
          <ButtonsBook bookId={BOOK.id} />
        </div>
      </article>
      <EditorNotes />
    </section>
  );
}
export default BookId;
