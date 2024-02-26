import { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
  return (
    <main className="w-full md:w-[700px] lg:w-[1000px] min-h-[489px] pb-6 relative bg-transparent rounded-lg  border-gray-300 flex flex-col justify-start items-center">
      {children}
    </main>
  );
}

export default Main;
