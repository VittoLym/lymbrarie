import { NextResponse } from "next/server";
import { DB } from "@/libs/mysql";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

async function GET(request: Request, { params }: Params) {
  try {
    const result: any = await DB.query(
      "SELECT * FROM book_table WHERE id = ?",
      [params.bookId]
    );

    if (result.length == 0) {
      return NextResponse.json(
        { message: "Libro no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

function POST(request: Request) {
  return NextResponse.json({ message: "obiteniendo unnn libro" });
}

async function DELETE(request: Request, { params }: Params) {
  try {
    const result: any = await DB.query("DELETE FROM book_table WHERE id = ?", [
      params.bookId,
    ]);

    if (result.affectedRows == 0) {
      return NextResponse.json(
        { message: "Libro no encontrado" },
        { status: 404 }
      );
    }

    return NextResponse.json("DELETE: removiendo un libro");
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

async function PUT(request: Request, { params }: Params) {
  try {
    const data = await request.json();
    const result: any = await DB.query("UPDATE book_table SET ? WHERE id = ?", [
      data,
      params.bookId,
    ]);

    if (result.affectedRows == 0) {
      return NextResponse.json(
        { message: "Libro no encontrado" },
        { status: 404 }
      );
    }

    const updatedProduct: any = await DB.query(
      "SELECT * FROM book_table WHERE id = ?",
      [params.bookId]
    );

    return NextResponse.json(updatedProduct[0]);
  } catch (err: any) {
    return NextResponse.json({ message: err.message }, { status: 500 });
  }
}

export { GET, POST, DELETE, PUT };
