import { defineConfig } from "drizzle-kit";
import "dotenv/config";

console.log("DB URL:", process.env.NEXT_PUBLIC_DRIZZLE_DB_URL);

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_jKJpw5XW9lVT@ep-cold-leaf-an5d1y25-pooler.c-6.us-east-1.aws.neon.tech/AI-Interview?sslmode=require&channel_binding=require',
  },
});