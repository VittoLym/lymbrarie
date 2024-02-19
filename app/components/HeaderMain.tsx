import axios from "axios";
import Image from "next/image";
import { DefaultUserImg, SettingsSVG } from "../svg";

async function loadUserData() {
  const { data: userData } = await axios.get("http://localhost:3000/api/user");
  return userData;
}

async function HeaderMain() {
  const userData = await loadUserData();

  return (
    <header className="flex flex-col items-center justify-center gap-y-2 bg-gray-200 rounded-t-lg py-8 h-full w-full">
      <SettingsSVG />

      {userData.userimg ? (
        <Image
          alt="Profile"
          className="w-20 h-20 rounded-full object-cover object-center"
          width={100}
          height={150}
          src={userData.userimg}
        />
      ) : (
        <DefaultUserImg />
      )}

      <h2 className="text-lg text-gray-800">{userData?.username}</h2>
      <p className="text-sm leading-none text-center text-gray-800">
        {userData?.userprhase}
      </p>
    </header>
  );
}

export default HeaderMain;
