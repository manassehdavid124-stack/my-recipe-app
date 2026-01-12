import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";



export async function POST(req) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: "Missing fields" },
        { status: 400 }
      );
    }

    // const db = await mysql.createConnection({
    //   host: "localhost",
    //   user: "root",
    //   password: "Carsupdate7#",
    //   database: "recipefinder_db",
    // });

    const db = mysql.createPool({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: Number(process.env.DB_PORT),
    });

    const [rows] = await db.execute(
      "SELECT id, password FROM users WHERE email = ?",
      [email]
    );

    if (rows.length === 0) {
      await db.end();
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const user = rows[0];

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      await db.end();
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );
    }

    const token = jwt.sign(
      { id: user.id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    await db.end();

    return NextResponse.json(
      { message: "Signin successful", token },
      { status: 200 }
    );

  } catch (err) {
    console.error("SIGNIN ERROR 👉", err);
    return NextResponse.json(
      { message: "Server error", error: err.message },
      { status: 500 }
    );
  }
}
