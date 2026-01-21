// import { NextResponse } from "next/server";
// import mysql from "mysql2/promise";
// import bcrypt from "bcryptjs";
// import jwt from "jsonwebtoken";

// // Create a pool once and reuse
// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: Number(process.env.DB_PORT),
// });

// export async function POST(req) {
//   try {
//     const { email, password } = await req.json();

//     if (!email || !password) {
//       return NextResponse.json(
//         { message: "Missing fields" },
//         { status: 400 }
//       );
//     }

//     // Fetch user from DB
//     const [rows] = await db.execute(
//       "SELECT * FROM users WHERE email = ?",
//       [email]
//     );

//     if (rows.length === 0) {
//       return NextResponse.json(
//         { message: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     const user = rows[0];

//     // Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return NextResponse.json(
//         { message: "Invalid credentials" },
//         { status: 401 }
//       );
//     }

//     // Create JWT token
//     const token = jwt.sign(
//       { id: user.id },
//       process.env.JWT_SECRET,
//       { expiresIn: "7d" }
//     );

//     return NextResponse.json(
//       { message: "Signin successful", token },
//       { status: 200 }
//     );

//   } catch (err) {
//     console.error("SIGNIN ERROR 👉", err);
//     return NextResponse.json(
//       { message: "Server error", error: err.message },
//       { status: 500 }
//     );
//   }
// }

import { db } from "@lib/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email and password are required" }), { status: 400 });
    }

    // Check if user exists
    const [users] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (users.length === 0) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    const user = users[0];

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return new Response(JSON.stringify({ message: "Invalid email or password" }), { status: 401 });
    }

    // Generate JWT
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, { expiresIn: "1d" });

    return new Response(JSON.stringify({ message: "Signin successful", token }), { status: 200 });
  } catch (err) {
    console.error("DB error 👉", err);
    return new Response(JSON.stringify({ message: "Database connection failed" }), { status: 500 });
  }
}
