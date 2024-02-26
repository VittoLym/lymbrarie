"use client";
import { signIn, useSession } from "next-auth/react";

function HeaderMain() {
  const { data: session, status: sessionStatus } = useSession();

  const signInLymbrarie = () => signIn();

  return (
    <header className="w-full relative bg-transparent pt-10 flex justify-start items-center">
      {sessionStatus == "unauthenticated" && (
        <button
          onClick={signInLymbrarie}
          className="absolute cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Log In
        </button>
      )}
    </header>
  );
}

export default HeaderMain;

/*{sessionStatus == "authenticated" && (
        <Image
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover object-center"
          width={100}
          height={150}
          src={session?.user?.image as string}
          onClick={() => router.push("/settings")}
        />
      )}*/
