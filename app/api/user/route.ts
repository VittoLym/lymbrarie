import { NextResponse } from "next/server";
import { DB } from "@/libs/mysql";

async function GET() {
  try {
    const results: any = await DB.query("SELECT * FROM user_profile");
    return NextResponse.json(results[0]);
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

async function POST(request: Request) {
  try {
    const { username, userimg, userprhase }: any = await request.json(),
      newUser: object = { username, userimg, userprhase },
      result: any = await DB.query("INSERT INTO user_profile SET ?", newUser);
    return NextResponse.json({ id: result.insertId, ...newUser });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

async function PUT(request: Request) {
  try {
    const userData = await request.json(),
      result: any = await DB.query("UPDATE user_profile SET ?", userData);

    if (result.affectedRows == 0) {
      return NextResponse.json(
        { message: "Problema al encontrar el usuario" },
        { status: 404 }
      );
    }

    return NextResponse.json({ id: result.insertId, ...userData });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export { GET, POST, PUT };
