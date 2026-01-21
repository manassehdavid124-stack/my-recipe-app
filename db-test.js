import sql from "./lib/db.js";

(async () => {
  try {
    const result = await sql`SELECT NOW()`;
    console.log("DB Connected! Time:", result[0].now);
  } catch (err) {
    console.error("DB connection failed:", err);
  } finally {
    process.exit();
  }
})();
