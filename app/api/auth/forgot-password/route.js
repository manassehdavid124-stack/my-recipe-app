import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import crypto from "crypto";

export async function POST(req) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json(
      { message: "Email required" },
      { status: 400 }
    );
  }

  const db = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "YOUR_PASSWORD",
    database: "recipefinder_db",
  });

  const [users] = await db.execute(
    "SELECT id FROM users WHERE email = ?",
    [email]
  );

  if (users.length === 0) {
    await db.end();
    return NextResponse.json(
      { message: "If email exists, reset link sent" },
      { status: 200 }
    );
  }

  const token = crypto.randomBytes(32).toString("hex");
  const expires = new Date(Date.now() + 15 * 60 * 1000); // 15 mins

  await db.execute(
    "UPDATE users SET reset_token = ?, reset_token_expires = ? WHERE email = ?",
    [token, expires, email]
  );

  await db.end();

  // ⚠️ For now, log link instead of email
  console.log(
    `Reset link: http://localhost:3000/reset-password?token=${token}`
  );

  return NextResponse.json({
    message: "Password reset link sent",
  });
}
