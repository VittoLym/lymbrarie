"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface BookProps {
  id: string;
  title: string;
  author: string;
  state: string;
  image?: string;
}

function BookCard({ id, title, author, state, image }: BookProps) {
  const router = useRouter();

  /* function onClickBookCard() {
    if (!document.startViewTransition) {
      return router.push(`/book/${id}`);
    } else {

      document.startViewTransition(() =>
        flushSync(() => router.push(`/book/${id}`))
      );
    }
  } */

  return (
    <li
      key={id}
      onClick={() => router.push(`/book/${id}`)}
      className="flex flex-row justify-between w-[300px] items-start gap-x-2 pr-0.5 bg-gray-200 border-[1.5px] h-[135px] cursor-pointer duration-150 border-gray-300 rounded hover:bg-white hover:scale-105"
    >
      <Image
        src={
          image
            ? image
            : "https://res.cloudinary.com/dgs55s8qh/image/upload/v1707771560/ycuxmhib7vzjxebqcp5f.jpg"
        }
        alt="Book cover"
        className="w-[100px] object-fill h-full overflow-hidden "
        width={60}
        height={60}
      />
      <div className="flex flex-col items-start justify-start py-1.5 w-[200px]">
        <h3 className="font-semibold text-gray-800 ">{title}</h3>
        <p className="text-sm text-gray-500">{author}</p>
        <p className="text-sm text-gray-500">{state}</p>
      </div>
    </li>
  );
}

export default BookCard;
