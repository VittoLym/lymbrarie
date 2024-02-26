"use client";
import { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function EditorNotes() {
  const [value, setValue] = useState("");

  useEffect(() => console.log(value), [value]);

  return (
    <ReactQuill
      value={value}
      onChange={val => setValue(val)}
      className="bg-slate-300 w-[700px] h-auto "
      theme="snow"
    />
  );
}

export default EditorNotes;
