import { NextRequest, NextResponse } from "next/server";

const validThemes = ["light", "dark", "system"] as const;
type Theme = typeof validThemes[number];

function isValidTheme(value: string | null): value is Theme {
  if (!value) return false;
  return validThemes.includes(value as Theme);
}

export async function GET() {
  const theme = "system";
  
  return NextResponse.json({ theme });
}

export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { theme } = body;

    if (!isValidTheme(theme)) {
      return NextResponse.json(
        { error: "Invalid theme. Must be 'light', 'dark', or 'system'" },
        { status: 400 }
      );
    }

    return NextResponse.json({ theme });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}
