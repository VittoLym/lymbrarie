"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { flushSync } from "react-dom";

interface BookProps {
  id: string;
  title: string;
  author: string;
  state: string;
  image?: string;
}

function BookCard({ id, title, author, state, image }: BookProps) {
  const router = useRouter();

  function onClick() {
    if (!document.startViewTransition) {
      return router.push(`/book/${id}`);
    } else {
      document.startViewTransition(() =>
        flushSync(() => router.push(`/book/${id}`))
      );
    }
  }

  return (
    <li
      key={id}
      onClick={onClick}
      className="flex flex-row justify-between w-[300px] items-start gap-x-2 pr-0.5 bg-slate-800 border-4 h-[135px] cursor-pointer duration-150 border-gray-700 rounded-md hover:bg-gray-700 hover:scale-105"
    >
      <Image
        src={
          image
            ? image
            : "https://res.cloudinary.com/dgs55s8qh/image/upload/v1707771560/ycuxmhib7vzjxebqcp5f.jpg"
        }
        alt="Book cover"
        className="w-[100px] object-fill h-full overflow-hidden rounded-bl rounded-tl"
        width={60}
        height={60}
      />
      <div className="flex flex-col items-start justify-start py-1.5 w-[200px]">
        <h3 className="font-semibold text-white ">{title}</h3>
        <p className="text-sm text-slate-200">{author}</p>
        <p className="text-sm text-slate-200">{state}</p>
      </div>
    </li>
  );
}

export default BookCard;
