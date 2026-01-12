import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing fields" },
        { status: 400 }
      );
    }


    const db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    });

    const [rows] = await db.execute(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (rows.length > 0) {
      await db.end();
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    const hashed = await bcrypt.hash(password, 10);

    await db.execute(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashed]
    );

    await db.end();

    return NextResponse.json(
      { message: "Signup successful" },
      { status: 201 }
    );
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}
