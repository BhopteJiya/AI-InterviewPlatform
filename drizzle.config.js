import { defineConfig } from "drizzle-kit";
import "dotenv/config";

console.log("DB URL:", process.env.NEXT_PUBLIC_DATABASE_URL);

export default defineConfig({
  dialect: "postgresql",
  schema: "./utils/schema.js",
  out: "./drizzle",
  dbCredentials: {
    url:'postgresql://neondb_owner:npg_fw7Jg6EZpIGi@ep-cold-leaf-an5d1y25-pooler.c-6.us-east-1.aws.neon.tech/AI_Interview?sslmode=require&channel_binding=require'
  },
});