import { NextResponse } from "next/server";
import { DB } from "@/libs/mysql";

async function GET() {
  try {
    const results = await DB.query("SELECT * FROM book");
    return NextResponse.json(results);
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

async function POST(request: Request) {
  try {
    const { title, author, state, image, pages }: any = await request.json(),
      bookBody: object = { title, author, state, image, pages },
      result: any = await DB.query("INSERT INTO book SET ?", bookBody);

    return NextResponse.json({ id: result.insertId, ...bookBody });
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export { GET, POST };
