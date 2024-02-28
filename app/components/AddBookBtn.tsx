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
    <button
      onClick={onClick}
      className="relative inline-flex items-center justify-center px-6 py-3.5 overflow-hidden font-mono  font-semibold bg-gray-800 rounded-lg group text-white tracking-wider"
    >
      <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-orange-700 rounded-full group-hover:w-56 group-hover:h-56" />
      <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-gray-700" />
      <span className="relative text-xl">Add book</span>
    </button>
  );
}

export default AddBookBtn;
