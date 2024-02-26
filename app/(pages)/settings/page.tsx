"use client";
import axios from "axios";
import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import { BackSVG } from "@/app/svg";
import { signOut } from "next-auth/react";

interface TypeUser {
  username: string;
  userimg: string;
  userprhase?: string;
}

const initialValues = {
  username: "",
  userimg: "",
  userprhase: "",
};

async function Settings() {
  const router = useRouter(),
    [userData, setUserData] = useState<TypeUser>(initialValues);

  const signOutLymbrarie = () => signOut();

  useEffect(() => {
    async function getUserData() {
      const res: { data: TypeUser } = await axios.get("/api/user");
      setUserData(res.data);
    }
    getUserData();
  }, []);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const key: string = event.target.name;
    const value: string = event.target.value;
    setUserData(prevData => ({ ...prevData, [key]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await axios.put("/api/user", userData);
    router.push("/");
    router.refresh();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[350px] flex flex-col items-start justify-center gap-y-12 pt-10"
    >
      <BackSVG route="/" />

      <div className="flex flex-row justify-between items-center w-full h-6 text-black">
        <p className="text-xl">Language</p>
        <select>
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="pr">Portugues</option>
        </select>
      </div>

      <div className="flex flex-row justify-between items-center w-full h-6 text-white">
        <p className="text-xl">Copy security</p>
        <button className="bg-red-500 py-2 px-4 rounded-md text-white">
          #
        </button>
      </div>

      {/* <button
        type="submit"
        className="cursor-pointer transition-all bg-green-500 text-white font-semibold w-full py-2 rounded-lg
        border-green-400 border-[2px] hover:brightness-75 text-xl hover:scale-95"
      >
        Save
      </button>
       <hr color="#636363" className="w-full h-[2px] rounded-lg" /> */}

      <div className="w-full bg-slate-800 border border-slate-500 grid grid-cols-6 gap-2 rounded-xl p-2 text-sm">
        <h1 className="text-center text-gray-100 text-xl font-bold col-span-6">
          Send Feedback
        </h1>
        <textarea
          placeholder="Your feedback..."
          className="bg-slate-200 text-gray-700 h-28 placeholder:text-gray-600 border border-slate-200 col-span-6 resize-none outline-none rounded-lg p-2 duration-300 focus:border-slate-600"
        ></textarea>
        <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-200 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
          <svg height="20px" viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm177.6 62.1C192.8 334.5 218.8 352 256 352s63.2-17.5 78.4-33.9c9-9.7 24.2-10.4 33.9-1.4s10.4 24.2 1.4 33.9c-22 23.8-60 49.4-113.6 49.4s-91.7-25.5-113.6-49.4c-9-9.7-8.4-24.9 1.4-33.9s24.9-8.4 33.9 1.4zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>
        <button className="fill-slate-600 col-span-1 flex justify-center items-center rounded-lg p-2 duration-300 bg-slate-200 hover:border-slate-600 focus:fill-blue-200 focus:bg-blue-400 border border-slate-200">
          <svg height="20px" viewBox="0 0 512 512">
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM174.6 384.1c-4.5 12.5-18.2 18.9-30.7 14.4s-18.9-18.2-14.4-30.7C146.9 319.4 198.9 288 256 288s109.1 31.4 126.6 79.9c4.5 12.5-2 26.2-14.4 30.7s-26.2-2-30.7-14.4C328.2 358.5 297.2 336 256 336s-72.2 22.5-81.4 48.1zM144.4 208a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm192-32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"></path>
          </svg>
        </button>
        <span className="col-span-2"></span>
        <button className="bg-slate-200 stroke-slate-600 border border-slate-200 col-span-2 flex justify-center rounded-lg p-2 duration-300 hover:border-slate-600 hover:bg-slate-400">
          <svg fill="none" viewBox="0 0 24 24" height="30px" width="30px">
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M7.39999 6.32003L15.89 3.49003C19.7 2.22003 21.77 4.30003 20.51 8.11003L17.68 16.6C15.78 22.31 12.66 22.31 10.76 16.6L9.91999 14.08L7.39999 13.24C1.68999 11.34 1.68999 8.23003 7.39999 6.32003Z"
            ></path>
            <path
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M10.11 13.6501L13.69 10.0601"
            ></path>
          </svg>
        </button>
      </div>
      <button
        onClick={signOutLymbrarie}
        className="cursor-pointer transition-all bg-red-500 text-white w-full py-2 rounded-lg
        border-red-400 border-[2px] hover:brightness-75 text-xl hover:scale-95 font-semibold"
      >
        Sign Out
      </button>

      <a
        rel="noreferrer"
        href="https://gixi.me"
        target="_blank"
        className="text-gray-200 text-md sm:text-lg hover:text-gray-500 cursor-pointer w-full text-center pt-6"
        title="gixi contact"
      >
        Created with ❤️ by <u>gixi</u>
      </a>
    </form>
  );
}

export default Settings;
