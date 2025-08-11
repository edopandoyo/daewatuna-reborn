import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";
import { appwriteFromJWT } from "@/lib/appwrite/server";
import { Permission, Role } from "node-appwrite";

const COOKIE = process.env.AUTH_JWT_COOKIE || "appwrite_jwt";
const DB_ID = process.env.APPWRITE_DATABASE_ID!;
const COL_ID = process.env.APPWRITE_USERS_COLLECTION_ID!;

export async function POST(req: NextRequest) {
  try {
    if (!DB_ID || !COL_ID) {
      return NextResponse.json(
        { error: "Missing env", detail: { DB_ID, COL_ID } },
        { status: 500 }
      );
    }

    const jwt = (await cookies()).get(COOKIE)?.value;
    if (!jwt) return NextResponse.json({ error: "No JWT" }, { status: 401 });

    const { databases, account } = appwriteFromJWT(jwt);
    const me = await account.get(); // memastikan sesi valid

    const body = (await req.json().catch(() => ({}))) as {
      name?: string;
      phone?: string;
    };

    const docId = me.$id;
    const now = new Date().toISOString();

    // Hanya field yang ADA di schema koleksi `users`
    const data = {
      userId: me.$id,
      name: body.name ?? me.name ?? "",
      email: me.email ?? "",
      phone: body.phone ?? "",
      // createdAt → isi saat create saja (kalau ada di schema)
    } as Record<string, any>;

    // Coba cek apakah dokumen sudah ada
    let exists = false;
    try {
      await databases.getDocument(DB_ID, COL_ID, docId);
      exists = true;
    } catch {
      exists = false;
    }

    if (!exists) {
      // PERMISSIONS hanya saat create
      const permissions = [
        Permission.read(Role.user(me.$id)),
        Permission.update(Role.user(me.$id)),
      ];
      // Jika schema `createdAt` ada, set di create
      if ("createdAt" in (data || {})) data.createdAt = now;

      const created = await databases.createDocument(
        DB_ID,
        COL_ID,
        docId,
        data,
        permissions
      );
      return NextResponse.json({ ok: true, mode: "create", doc: created });
    }

    const updated = await databases.updateDocument(DB_ID, COL_ID, docId, {
      name: data.name,
      phone: data.phone,
      email: data.email,
      updatedAt: now,
    });
    return NextResponse.json({ ok: true, mode: "update", doc: updated });
  } catch (e: any) {
    // Kembalikan pesan asli dari Appwrite
    const status =
      e?.response?.statusCode || e?.response?.status || e?.code || 500;
    const detail = {
      message: e?.message,
      type: e?.type,
      code: e?.code,
      resp: {
        status: e?.response?.statusCode ?? e?.response?.status,
        headers: Object.fromEntries(
          e?.response?.headers
            ? [...(e.response.headers.entries?.() ?? [])]
            : []
        ),
        body: await e?.response?.text?.()?.catch?.(() => undefined),
      },
    };
    return NextResponse.json({ error: "Upsert failed", detail }, { status });
  }
}
