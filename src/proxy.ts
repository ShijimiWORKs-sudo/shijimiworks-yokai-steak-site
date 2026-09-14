import { NextResponse, type NextRequest } from "next/server";

// /admin 配下を簡易Basic認証で保護する。
// 環境変数 ADMIN_BASIC_AUTH_USER / ADMIN_BASIC_AUTH_PASSWORD が
// 両方設定されていない場合は、意図せず管理画面が無防備公開されるのを防ぐため
// 常に401（未設定である旨のメッセージ）を返す。

function unauthorized(message: string) {
  return new NextResponse(message, {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="Admin Area", charset="UTF-8"' },
  });
}

export function proxy(request: NextRequest) {
  const expectedUser = process.env.ADMIN_BASIC_AUTH_USER;
  const expectedPassword = process.env.ADMIN_BASIC_AUTH_PASSWORD;

  if (!expectedUser || !expectedPassword) {
    return unauthorized("Admin area is not configured (ADMIN_BASIC_AUTH_USER / ADMIN_BASIC_AUTH_PASSWORD is missing).");
  }

  const authHeader = request.headers.get("authorization");
  if (authHeader?.startsWith("Basic ")) {
    const decoded = Buffer.from(authHeader.slice(6), "base64").toString("utf-8");
    const separatorIndex = decoded.indexOf(":");
    const user = separatorIndex === -1 ? decoded : decoded.slice(0, separatorIndex);
    const password = separatorIndex === -1 ? "" : decoded.slice(separatorIndex + 1);

    if (user === expectedUser && password === expectedPassword) {
      return NextResponse.next();
    }
  }

  return unauthorized("Authentication required.");
}

export const config = {
  matcher: "/admin/:path*",
};
