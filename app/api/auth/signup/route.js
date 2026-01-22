// import { NextResponse } from "next/server";
// import bcrypt from "bcryptjs";

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: Number(process.env.DB_PORT),

// })

// export async function POST(req) {
//   try {
//     const { name, email, password } = await req.json();

//     if (!name || !email || !password) {
//       return NextResponse.json(
//         { error: "All fields are required" },
//         { status: 400 }
//       );
//     }

//     // Check if user exists
//     const [existing] = await db.query(
//       "SELECT id FROM users WHERE email = ?",
//       [email]
//     );

//     if (existing.length > 0) {
//       return NextResponse.json(
//         { error: "User already exists" },
//         { status: 409 }
//       );
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     await db.query(
//       "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
//       [name, email, hashedPassword]
//     );

//     return NextResponse.json(
//       { message: "User created successfully" },
//       { status: 201 }
//     );
//   } catch (err) {
//     console.error("SIGNUP ERROR:", err);
//     return NextResponse.json(
//       { error: "Internal server error" },
//       { status: 500 }
//     );
//   }
// }

import { NextResponse } from "next/server";
import db from "@/lib/db";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { email, password } = await req.json();

    // validation
    if (!email || !password) {
      return NextResponse.json(
        { message: "Email and password are required" },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: "Password must be at least 8 characters" },
        { status: 400 }
      );
    }

    // check if user exists
    const [existing] = await db.query(
      "SELECT id FROM users WHERE email = ?",
      [email]
    );

    if (existing.length > 0) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 409 }
      );
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // insert user
    await db.query(
      "INSERT INTO users (email, password) VALUES (?, ?)",
      [email, hashedPassword]
    );

    return NextResponse.json(
      { message: "Signup successful" },
      { status: 201 }
    );
  } catch (err) {
    console.error("SIGNUP ERROR 👉", err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
