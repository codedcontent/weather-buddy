import { useState } from "react";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  //   if (request.nextUrl.pathname.startsWith("/about")) {
  //     return NextResponse.rewrite(new URL("/about-2", request.url));
  //   }
  //   if (request.nextUrl.pathname.includes("/account")) {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
}
