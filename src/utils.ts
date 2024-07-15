import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "psql 'postgresql://abhishekreddywadi123:Z2bmlcVR7ukr@ep-flat-hill-a58u8rx8.us-east-2.aws.neon.tech/test?sslmode=require'"
  );
  await client.connect();
  return client;
}
