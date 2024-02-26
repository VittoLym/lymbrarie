"use client";
import Image from "next/image";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

function HeaderMain() {
  const { data: session, status: sessionStatus } = useSession();

  const router = useRouter();
  const signInLymbrarie = () => signIn();

  return (
    <header className="w-[585px] bg-transparent py-6 mb-10 flex justify-end items-center">
      {sessionStatus == "authenticated" && (
        <Image
          alt="Profile"
          className="w-14 h-14 rounded-full object-cover object-center"
          width={100}
          height={150}
          src={session?.user?.image as string}
          onClick={() => router.push("/settings")}
        />
      )}
      {sessionStatus == "unauthenticated" && (
        <button
          onClick={signInLymbrarie}
          className="cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        border-blue-600 border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Log In
        </button>
      )}
    </header>
  );

  /*return (
    <header className="flex flex-col items-center justify-center gap-y-2 bg-transparent rounded-t-lg py-8 h-full w-full">
      <SettingsSVG />
      {sessionStatus == "loading" && "CARGANDO"}
      {sessionStatus == "authenticated" && (
        <>
          <Image
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover object-center"
            width={100}
            height={150}
            src={session?.user?.image as string}
          />
          <p className="text-2xl leading-none text-center text-white">
            {session?.user?.name as string}
          </p>
        </>
      )}
      {sessionStatus == "unauthenticated" && (
        <button
          onClick={signInLymbrarie}
          className="absolute top-0 left-0 cursor-pointer transition-all bg-blue-500 text-white px-6 py-2 rounded-lg
        border-blue-600
        border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
        active:border-b-[2px] active:brightness-90 active:translate-y-[2px]"
        >
          Log In
        </button>
      )}
    </header>
  );
  */
}

export default HeaderMain;
