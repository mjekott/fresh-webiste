import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { refreshToken } = await req.json();

  if (refreshToken !== "mock-refresh-token") {
    return NextResponse.json(
      { message: "Invalid refresh token" },
      { status: 401 },
    );
  }

  const accessToken = "new-mock-access-token";
  const newRefreshToken = "new-mock-refresh-token";
  const refreshTokenExpires = new Date(
    Date.now() + 7 * 24 * 60 * 60 * 1000,
  ).toISOString();

  return NextResponse.json({
    message: "Token refreshed",
    data: { accessToken, refreshToken: newRefreshToken, refreshTokenExpires },
  });
}
