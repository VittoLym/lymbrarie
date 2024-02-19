"use client";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";

function AddBookBtn() {
  const router = useRouter();

  function onClick() {
    if (!document.startViewTransition) {
      return router.push("/book/addBook");
    } else {
      document.startViewTransition(() =>
        flushSync(() => router.push("/book/addBook"))
      );
    }
  }

  return (
    <div className="flex flex-row justify-center gap-x-3 items-center cursor-pointer  text-white w-1/4 bg-slate-700 h-11 rounded-md duration-100 hover:bg-slate-500 ">
      <a
        href="/book/addBook"
        // onClick={onClick}
        className="text-lg"
      >
        Add book
      </a>
      <svg className="w-8 h-7" viewBox="0 0 24 24" fill="none">
        <line
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="12"
          x2="12"
          y1="19"
          y2="5"
        />
        <line
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          x1="5"
          x2="19"
          y1="12"
          y2="12"
        />
      </svg>
    </div>
  );
}

export default AddBookBtn;
