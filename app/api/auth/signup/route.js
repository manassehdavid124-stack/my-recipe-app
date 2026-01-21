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
import { db } from "@lib/db.js"; // alias
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const body = await req.json();
    const { email, password } = body;

    if (!email || !password) {
      return new Response(JSON.stringify({ message: "Email and password are required" }), { status: 400 });
    }

    localStorage.setItem("token", data.token);
    localStorage.setItem("userEmail", data.email);
    router.push("/components/Home"); // redirect to Home

    // Check if user exists
    const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
    if (existing.length > 0) {
      return new Response(JSON.stringify({ message: "User already exists" }), { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert new user
    await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hashedPassword]);

    return new Response(JSON.stringify({ message: "Signup successful" }), { status: 200 });
  } catch (err) {
    console.error("DB error 👉", err);
    return new Response(JSON.stringify({ message: "Database connection failed" }), { status: 500 });
  }
}

