"use client";
import { Client, Account, ID, OAuthProvider } from "appwrite";

const client = new Client()
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID!)
  .setDevKey(process.env.APPWRITE_DEV_KEY!);

export const account = new Account(client);

// Sign up: name, email, password
export async function signUp(name: string, email: string, password: string) {
  await account.create(ID.unique(), email, password, name); // v13 Web SDK: name arg ke-4
  // optional: langsung login
  await account.createEmailPasswordSession(email, password);
  await persistJWT();
}

// Login: email + password
export async function signIn(email: string, password: string) {
  await account.createEmailPasswordSession(email, password);
  await persistJWT();
}

// OAuth Google (redirect)
export function signInWithGoogle() {
  const success = `${process.env.NEXT_PUBLIC_APP_URL}/auth/callback`;
  const failure = `${process.env.NEXT_PUBLIC_APP_URL}/auth/error`;
  account.createOAuth2Session(OAuthProvider.Google, success, failure);
}

// Panggil setelah session ada untuk simpan JWT -> cookie HttpOnly
export async function persistJWT() {
  const { jwt } = await account.createJWT();
  await fetch("/api/auth/session", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ jwt }),
    credentials: "include",
  });
}

export async function signOutEverywhere() {
  try {
    await account.deleteSessions();
  } catch {}
  await fetch("/api/auth/session", { method: "DELETE" });
}
