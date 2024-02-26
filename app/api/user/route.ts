import { NextResponse } from "next/server";
import { DB } from "@/libs/mysql";

interface TypeUser {
  userid: number;
  language: string;
  theme: string;
}

async function GET(): Promise<NextResponse> {
  try {
    const results: TypeUser[] = await DB.query("SELECT * FROM user_table");
    return NextResponse.json(results[0]);
  } catch (err: unknown) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}

async function POST(request: Request): Promise<NextResponse> {
  try {
    const { username, userimg, userprhase }: any = await request.json(),
      newUser: object = { username, userimg, userprhase },
      result: any = await DB.query("INSERT INTO user_table SET ?", newUser);
    return NextResponse.json({ id: result.insertId, ...newUser });
  } catch (err: unknown) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}

async function PUT(request: Request): Promise<NextResponse> {
  try {
    const userData = await request.json(),
      result: any = await DB.query("UPDATE user_table SET ?", userData);

    if (result.affectedRows == 0) {
      return NextResponse.json(
        { message: "Problema al encontrar el usuario" },
        { status: 404 }
      );
    }

    return NextResponse.json({ id: result.insertId, ...userData });
  } catch (err: unknown) {
    return NextResponse.json({ message: err }, { status: 500 });
  }
}

export { GET, POST, PUT };
