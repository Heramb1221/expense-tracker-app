import { neon } from "@neondatabase/serverless"

import "dotenv/config";

//create a SQL connection using our DB
export const sql = neon(process.env.DATABASE_URL)