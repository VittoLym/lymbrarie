"use client";
import { atom } from "recoil";
import { DefaultUserImg } from "../svg";

const inputSearch = atom({ key: "inputSearch", default: "" });

const checkboxValue = atom({ key: "checkboxValue", default: "" });

const username = atom({ key: "username", default: "User" });

const userimg = atom({ key: "userimg", default: DefaultUserImg });

const userprhase = atom({ key: "userprhase", default: "" });

export { inputSearch, checkboxValue, username, userimg, userprhase };
