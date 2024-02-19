import { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
  return (
    <main className="w-[700px] min-h-[489px] pb-6 relative bg-gray-100 rounded-lg shadow-lg border-2 border-gray-300 flex flex-col justify-start items-center">
      {children}
    </main>
  );
}

export default Main;
