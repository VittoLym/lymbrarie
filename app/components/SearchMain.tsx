"use client";
import { useRecoilState } from "recoil";
import { inputSearch, checkboxValue } from "../context/AppContext";
import AddBookBtn from "./AddBookBtn";
import { SettingsSVG } from "../svg";

function Search() {
  const [value, setValue] = useRecoilState(inputSearch),
    [_, setSelectStateValue] = useRecoilState(checkboxValue),
    handleChangeInput = (e: any) => setValue(e.target.value),
    handleChangeSelect = (e: any) => setSelectStateValue(e.target.value);

  return (
    <form className="w-full flex flex-col items-center justify-center pb-14 gap-y-4">
      <div className="w-full flex flex-row gap-x-3 justify-center items-start">
        <input
          value={value}
          onChange={handleChangeInput}
          className="w-[420px] text-white text-start px-4 py-3 bg-gray-800 rounded-lg border-2 border-gray-700 placeholder-gray-100 text-xl"
          placeholder="Filter by title or author"
          type="search"
        />
        <AddBookBtn />
      </div>
      <div className="flex flex-row justify-between items-center w-[573px] text-white">
        <select
          className="text-white bg-transparent"
          onChange={handleChangeSelect}
          id="select-state"
          defaultValue=""
        >
          <option value="">All</option>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Pending">Pending</option>
        </select>
        <SettingsSVG />
      </div>
    </form>
  );
}

export default Search;
