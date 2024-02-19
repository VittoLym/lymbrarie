"use client";
import { useRecoilState } from "recoil";
import { inputSearch, checkboxValue } from "../context/AppContext";
import AddBookBtn from "./AddBookBtn";

function Search() {
  const [value, setValue] = useRecoilState(inputSearch),
    [_, setSelectStateValue] = useRecoilState(checkboxValue),
    handleChangeInput = (e: any) => setValue(e.target.value),
    handleChangeSelect = (e: any) => setSelectStateValue(e.target.value);

  return (
    <form className="flex flex-col items-center justify-center w-[96.5%] py-6 gap-y-2">
      <div className="w-full flex flex-row gap-x-3">
        <input
          value={value}
          onChange={handleChangeInput}
          className="w-3/4 px-4 h-11 rounded-md outline outline-gray-300 focus:outline-none focus:ring focus:ring-gray-300  "
          placeholder="Filter by title or author"
          type="search"
        />
        <AddBookBtn />
      </div>
      <div className="flex flex-row justify-start items-center w-full">
        <label htmlFor="select-state">Filter by: </label>
        <select
          onChange={handleChangeSelect}
          id="select-state"
          defaultValue="All"
        >
          <option value="All">All</option>
          <option value="Read">Read</option>
          <option value="Reading">Reading</option>
          <option value="Pending">Pending</option>
        </select>
      </div>
    </form>
  );
}

export default Search;
