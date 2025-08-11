import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Client, Account, Databases } from "node-appwrite";

const ENDPOINT = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!;
const PROJECT = process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!;
const JWT_COOKIE = process.env.AUTH_JWT_COOKIE || "appwrite_jwt";

export function appwriteFromJWT(jwt?: string) {
  const client = new Client().setEndpoint(ENDPOINT).setProject(PROJECT);
  if (jwt) client.setJWT(jwt);
  return { account: new Account(client), databases: new Databases(client) };
}

export async function getUserOrNull() {
  const jwt = (await cookies()).get(JWT_COOKIE)?.value;
  if (!jwt) return null;
  const { account } = appwriteFromJWT(jwt);
  try {
    return await account.get();
  } catch {
    return null;
  }
}

export async function requireUser() {
  const user = await getUserOrNull();
  if (!user) redirect("/login");
  return user;
}
