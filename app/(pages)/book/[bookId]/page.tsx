import Image from "next/image";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";
import axios from "axios";
import ButtonsBook from "@/app/components/ButtonsBook";
import { BackSVG, PendingSVG, ReadSVG, ReadingSVG } from "@/app/svg";

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
    <>
      <BackSVG route="/" />
      <article className="flex flex-row justify-start items-start w-[550px] h-[308px]  bg-slate-200 rounded-md p-1">
        <Image
          className="aspect-[300/400] w-[200px] h-[300px] object-center object-fill rounded-md"
          src={BOOK.image}
          width={100}
          height={100}
          alt="cover image"
        />

        <div className="flex flex-col justify-start items-start w-full h-full relative">
          <div className="flex flex-col px-4 pt-2 gap-y-2">
            <h4 className="text-3xl font-bold tracking-tight">{BOOK.title}</h4>
            <p className="text-md text-gray-800 mb-2">{BOOK.author}</p>
            <div className="flex items-center gap-x-2 text-gray-900">
              {getStateSVG()}
              <span className="text-sm text-gray-700"> {BOOK.state} </span>
            </div>
            <div className="flex items-center gap-2">
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
            {BOOK.state == "Reading" && (
              <div className="flex flex-col justify-center items-start">
                <label className="" htmlFor="bookmark">
                  Bookmark
                </label>
                <input
                  id="bookmark"
                  type="text"
                  className="rounded-md text-start pl-2 outline-0 py-0.5 "
                  placeholder="chapter, page, etc."
                />
              </div>
            )}
          </div>
          <ButtonsBook bookId={BOOK.id} />
        </div>
      </article>
    </>
  );

  /*
  return (
    <section className="flex flex-col justify-start items-center gap-y-6">
     
      <div className="flex flex-row gap-6 items-start w-full">
        <img
          alt={BOOK?.title}
          className="aspect-[3/5] rounded-lg object-fill overflow-hidden"
          src={BOOK?.image}
          width={280}
        />
        <div className="space-y-2 text-gray-900">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl xl:text-5xl">
            {BOOK?.title}
          </h1>
          <p className="">{BOOK?.author}</p>
          <p className="">{BOOK?.pages} pages</p>
          <p>State: {BOOK?.state}</p>
            {BOOK.state == "Reading" && (
              <div className="flex flex-col justify-center items-start">
                <label className="" htmlFor="bookmark">
                  Bookmark
                </label>
                <input
                  id="bookmark"
                  type="text"
                  className="rounded-md text-start pl-2 outline-0 py-0.5 "
                  placeholder="chapter, page, etc."
                />
              </div>
            )}
          <ButtonsBook bookId={BOOK?.id} />
        </div>
      </div>
      <div className="space-y-2 w-full">
        <h2 className="text-2xl font-semibold tracking-tight">Notes</h2>
        <textarea
          className="bg-transparent w-full rounded-md py-2 outline-0 placeholder:text-gray-800"
          placeholder="Write your notes here..."
        />
      </div>
    </section>
  );*/
}

// return (
//   <section className="relative flex flex-row justify-center items-center w-[800px] bg-slate-600">
//     <BackSVG />
//     {/* <div className="grid gap-4 items-start"> */}
//     {/* <ButtonsBook bookId={BOOK?.id} /> */}
//     <img
//       alt="Book cover"
//       className="aspect-tall object-cover rounded-md"
//       width={200}
//       height={300}
//       src={BOOK?.image}
//     />
//     {/* </div> */}
//     <div className="w-3/4 grid gap-4 items-start bg-red-400">
//       <div className="grid gap-1">
//         <h1 className="font-bold text-3xl">{BOOK?.title}</h1>
//         <p className="text-sm text-muted">Autor:</p>
//         <p className="text-2xl font-bold">{BOOK?.author}</p>
//       </div>
//       <div className="grid gap-1">
//         <p className="text-sm text-muted">Pages</p>
//         <p className="font-bold">{BOOK?.pages}</p>
//       </div>
//       <div className="grid gap-1">
//         <p className="text-sm text-muted">Status</p>
//         <p>{BOOK?.state}</p>
//       </div>
//       <div className="grid gap-1">
//         <p className="text-sm text-muted">Notes</p>
//         <p>
//           Enjoying the narrative style of this book. The characters are
//           intriguing, and the concept of {BOOK?.title} is fascinating.
//         </p>
//       </div>
//     </div>

//     <textarea cols={30} rows={10}></textarea>
//   </section>
// );

export default BookId;
