import { NextResponse } from "next/server";
import mysql from "mysql2/promise";
import bcrypt from "bcryptjs";

export async function POST(req) {
  const { token, password } = await req.json();

  if (!token || !password) {
    return NextResponse.json(
      { message: "Invalid request" },
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
    "SELECT id FROM users WHERE reset_token = ? AND reset_token_expires > NOW()",
    [token]
  );

  if (users.length === 0) {
    await db.end();
    return NextResponse.json(
      { message: "Token invalid or expired" },
      { status: 400 }
    );
  }

  const hashed = await bcrypt.hash(password, 10);

  await db.execute(
    "UPDATE users SET password = ?, reset_token = NULL, reset_token_expires = NULL WHERE id = ?",
    [hashed, users[0].id]
  );

  await db.end();

  return NextResponse.json({
    message: "Password reset successful",
  });
}
