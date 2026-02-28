import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { v4 as uuidv4 } from "uuid";

const loginSchema = z.object({
  email: z.string().email().trim(),
  password: z.string().min(6),
  rememberMe: z.boolean().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const parsed = loginSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { message: "Validation error", errors: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { email, rememberMe = false } = parsed.data;

    const now = Date.now();

    const accessTokenExpiry = rememberMe
      ? 7 * 24 * 60 * 60 * 1000
      : 15 * 60 * 1000;

    const refreshTokenExpiry = rememberMe
      ? 7 * 24 * 60 * 60 * 1000
      : 60 * 60 * 1000;

    return NextResponse.json({
      message: "Login successful",
      data: {
        user: {
          id: uuidv4(),
          name: "John Doe",
          email,
          avatar: null,
          isActive: true,
          lastLogin: new Date(now).toISOString(),
          roleId: "role-user",
          createdAt: new Date(now).toISOString(),
          updatedAt: new Date(now).toISOString(),
        },
        permissions: ["read:items", "write:items"],
        accessToken: `mock.${uuidv4()}.token`,
        refreshToken: `refresh.${uuidv4()}.token`,
        accessTokenExpires: new Date(now + accessTokenExpiry).toISOString(),
        refreshTokenExpires: new Date(now + refreshTokenExpiry).toISOString(),
      },
    });
  } catch {
    return NextResponse.json(
      { message: "Invalid login", data: null },
      { status: 400 },
    );
  }
}
